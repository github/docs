// CommonMark defines fenced-code info strings: https://spec.commonmark.org/0.30/#info-string
// Colon and equals metadata extend that grammar before rehype reads code data.
// javascript lineNumbers:left copy:all annotate sets node.lang to javascript.
// It sets node.meta to { lineNumbers: 'left', copy: 'all', annotate: true }.
// id=some-id becomes { id: 'some-id' }.

import { visit } from 'unist-util-visit'
import type { Node } from 'unist'

interface CodeNode extends Node {
  type: 'code'
  lang?: string
  meta?: string | Record<string, string | boolean>
  value: string
}

const matcher = (node: Node): node is CodeNode => node.type === 'code' && !!(node as CodeNode).lang

export default function parseInfoString() {
  return (tree: Node) => {
    visit(tree, 'code', (node: Node) => {
      if (!matcher(node)) return
      node.meta = strToObj(node.meta as string)

      // Translated code fences can include {:copy}, which highlight treats as part of the language.
      if (node.lang) {
        node.lang = node.lang.replace('{:copy}', '')
      }
    })
  }
}

function strToObj(str?: string): Record<string, string | boolean> {
  if (!str) return {}
  return Object.fromEntries(
    str
      .split(/\s+/g)
      .map((k: string) => k.split(/[:=]/))
      .map(([k, ...v]: string[]) => [k, v.length ? v.join(':') : true]),
  )
}
