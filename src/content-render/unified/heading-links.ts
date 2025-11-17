import { visit } from 'unist-util-visit'
import { h } from 'hastscript'

interface HeadingNode {
  type: 'element'
  tagName: string
  properties: {
    id?: string
    tabIndex?: number
    [key: string]: any
  }
  children: any[]
}

const matcher = (node: any): node is HeadingNode =>
  node.type === 'element' &&
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName) &&
  node.properties?.id

export default function headingLinks() {
  return (tree: any) => {
    visit(tree, matcher, (node: HeadingNode) => {
      const { id } = node.properties
      const text = node.children
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
