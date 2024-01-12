import { visit } from 'unist-util-visit'
import { h } from 'hastscript'

const matcher = (node) =>
  node.type === 'element' &&
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName) &&
  node.properties?.id

export default function headingLinks() {
  return (tree) => {
    visit(tree, matcher, (node) => {
      const { id } = node.properties
      const text = node.children
      node.properties.tabIndex = -1
      node.children = [
        h('a', { class: 'heading-link', href: `#${id}` }, [
          ...text,
          h('span', { class: 'heading-link-symbol', ariaHidden: 'true' }),
        ]),
      ]
    })
  }
}
