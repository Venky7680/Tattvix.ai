// HTML -> JSX serializer built on parse5, tuned to the exact attribute set used by the Tattvix site.
import { parseFragment } from 'parse5';

const ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  charset: 'charSet',
  autocomplete: 'autoComplete',
  novalidate: 'noValidate',
  autofocus: 'autoFocus',
  enctype: 'encType',
  formnovalidate: 'formNoValidate',
  accesskey: 'accessKey',
  contenteditable: 'contentEditable',
  spellcheck: 'spellCheck',
  datetime: 'dateTime',
  usemap: 'useMap',
  playsinline: 'playsInline',
  tabindex: 'tabIndex',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  maxlength: 'maxLength',
  readonly: 'readOnly',
  crossorigin: 'crossOrigin',
  srcset: 'srcSet',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-weight': 'fontWeight',
  'letter-spacing': 'letterSpacing',
  'text-anchor': 'textAnchor',
  'stroke-width': 'strokeWidth',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'fill-opacity': 'fillOpacity',
  'stroke-opacity': 'strokeOpacity',
  'dominant-baseline': 'dominantBaseline',
};

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

// Whitespace between these is never rendered, so it is safe to pretty-print them
// onto their own lines. Anything else keeps its exact inter-element whitespace.
const BLOCK = new Set([
  'address', 'article', 'aside', 'blockquote', 'caption', 'col', 'colgroup',
  'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer',
  'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr',
  'li', 'main', 'nav', 'ol', 'p', 'section', 'table', 'tbody', 'td',
  'tfoot', 'th', 'thead', 'tr', 'ul',
]);

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function styleToObject(css) {
  const out = [];
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i === -1) continue;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!prop || !val) continue;
    const key = prop.startsWith('--') ? JSON.stringify(prop) : camel(prop);
    out.push(`${key}: ${JSON.stringify(val)}`);
  }
  return `{ ${out.join(', ')} }`;
}

// HTML boolean attributes parse to "" but mean `true` in JSX.
const BOOLEAN_ATTRS = new Set([
  'allowfullscreen', 'async', 'autofocus', 'autoplay', 'checked', 'controls',
  'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'itemscope',
  'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline',
  'readonly', 'required', 'reversed', 'selected',
]);

function jsxAttr(name, value, opts) {
  if (name === 'style') return `style={${styleToObject(value)}}`;
  const mapped = ATTR_MAP[name] || name;
  if (mapped === 'href' && opts.rewriteHref) value = opts.rewriteHref(value);
  if (value === '' && BOOLEAN_ATTRS.has(name)) return mapped;
  // Plain `attr="value"` whenever the value needs no escaping; braces otherwise.
  if (!/["\\{}<>\n\r\t]/.test(value)) return `${mapped}="${value}"`;
  return `${mapped}={${JSON.stringify(value)}}`;
}

// Escape a text node for use as literal JSX text.
function textSafe(t) {
  return !/[{}<>]/.test(t);
}

function emitText(t) {
  return textSafe(t) ? t : `{${JSON.stringify(t)}}`;
}

export function htmlToJsx(html, opts = {}) {
  const frag = parseFragment(html, { sourceCodeLocationInfo: false });
  const lines = [];

  function isWs(node) {
    return node.nodeName === '#text' && !node.value.trim();
  }

  // Pretty-print children on separate lines only when every element child is
  // block-level and no meaningful text is present; otherwise preserve exactly.
  function blockMode(node) {
    const kids = node.childNodes || [];
    let sawElement = false;
    for (const k of kids) {
      if (k.nodeName === '#text') {
        if (k.value.trim()) return false;
      } else if (k.nodeName === '#comment') {
        continue;
      } else {
        if (!BLOCK.has(k.nodeName)) return false;
        sawElement = true;
      }
    }
    return sawElement;
  }

  function serializeChildren(node, indent) {
    const kids = (node.childNodes || []).filter((k) => k.nodeName !== '#documentType');
    if (kids.length === 0) return '';

    if (blockMode(node)) {
      const parts = [];
      for (const k of kids) {
        if (isWs(k)) continue;
        const s = serialize(k, indent + '  ');
        if (s) parts.push(indent + '  ' + s);
      }
      return '\n' + parts.join('\n') + '\n' + indent;
    }

    // Inline context: exact preservation, single logical line.
    return kids.map((k) => serialize(k, indent)).join('');
  }

  function serialize(node, indent) {
    if (node.nodeName === '#text') return emitText(node.value);
    if (node.nodeName === '#comment') {
      const c = node.data.replace(/\*\//g, '*\\/');
      return `{/*${c}*/}`;
    }

    let tag = node.tagName;
    const rawAttrs = node.attrs || [];

    // Internal navigation becomes next/link so routing is client-side.
    if (tag === 'a' && opts.linkComponent) {
      const href = rawAttrs.find((a) => a.name === 'href');
      if (href && opts.rewriteHref) {
        const next = opts.rewriteHref(href.value);
        if (next.startsWith('/')) {
          tag = opts.linkComponent;
          opts.usedLink.value = true;
        }
      }
    }

    const attrs = rawAttrs
      .map((a) => {
        const name = a.prefix ? `${a.prefix}:${a.name}` : a.name;
        return jsxAttr(name, a.value, opts);
      })
      .join(' ');
    const open = attrs ? `<${tag} ${attrs}` : `<${tag}`;

    if (VOID.has(tag)) return `${open} />`;

    // <style> / <script> bodies are raw text, never JSX.
    if (tag === 'style' || tag === 'script') {
      const raw = (node.childNodes || []).map((c) => c.value || '').join('');
      return `${open} dangerouslySetInnerHTML={{ __html: ${JSON.stringify(raw)} }} />`;
    }

    const inner = serializeChildren(node, indent);
    if (!inner) return `${open} />`;
    return `${open}>${inner}</${tag}>`;
  }

  for (const k of frag.childNodes) {
    if (isWs(k)) continue;
    const s = serialize(k, '');
    if (s) lines.push(s);
  }
  return lines.join('\n');
}
