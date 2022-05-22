const xmlns = 'http://www.w3.org/2000/svg'

const plainObjectConstructor = {}.constructor

function exists (value) {
  return value !== null && typeof value !== 'undefined'
}

function isPlainObject (value) {
  return value.constructor === plainObjectConstructor
}

function isString (value) {
  return typeof value === 'string'
}

function renderChildren (el, children) {
  for (const child of children) {
    if (isPlainObject(child)) {
      Object.entries(child)
        .filter(([key, value]) => exists(value))
        .forEach(([key, value]) => el.setAttribute(key, value))
    } else if (Array.isArray(child)) {
      renderChildren(el, child)
    } else if (isString(child)) {
      el.append(document.createTextNode(child))
    } else {
      el.append(child)
    }
  }
}

export default function h (tagName, ...children) {
  const el = ['svg', 'path'].includes(tagName)
    ? document.createElementNS(xmlns, tagName)
    : document.createElement(tagName)
  renderChildren(el, children)
  return el
}

export const tags = Object.fromEntries(
  ['div', 'form', 'a', 'input', 'button', 'ol', 'li', 'mark']
    .map(tagName => [tagName, (...args) => h(tagName, ...args)])
)
