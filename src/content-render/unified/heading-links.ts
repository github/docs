import { visit } from 'unist-util-visit'
import { h } from 'hastscript'
import type { Root, Element, ElementContent, Properties } from 'hast'

interface HeadingNode extends Element {
  properties: Properties & {
    id: string
    tabIndex?: number
  }
}

const matcher = (node: Element): node is HeadingNode =>
  node.type === 'element' &&
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName) &&
  !!node.properties?.id

export default function headingLinks() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (!matcher(node)) return
      const { id } = node.properties
      const text = node.children as ElementContent[]
      node.properties.tabIndex = -1
      node.children = [
        h('a', { className: 'heading-link', href: `#${id}` }, [
          ...text,
          h('span', { className: 'heading-link-symbol', ariaHidden: 'true' }),
        ]),
      ]
    })
  }
}
