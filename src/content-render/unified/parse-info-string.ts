// Based on https://spec.commonmark.org/0.30/#info-string
// Parse out info strings on fenced code blocks, example:
// ```javascript lineNumbers:left copy:all annotate
// becomes...
// node.lang = javascript
// node.meta = { lineNumbers: 'left', copy: 'all', annotate: true }
// Also parse equals signs, where id=some-id becomes { id: 'some-id' }

import { visit } from 'unist-util-visit'

interface CodeNode {
  type: 'code'
  lang?: string
  meta?: string | Record<string, string | boolean>
  value: string
}

// Note: Using 'any' for node because unist-util-visit's type constraints
// don't easily allow for proper code node typing without complex generics
const matcher = (node: any): node is CodeNode => node.type === 'code' && node.lang

export default function parseInfoString() {
  // Note: Using 'any' for tree because unified's AST types are complex and
  // this function works with different tree types depending on the processor
  return (tree: any) => {
    visit(tree, matcher, (node: CodeNode) => {
      node.meta = strToObj(node.meta as string)

      // Temporary, remove {:copy} to avoid highlight parse error in translations.
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
      .map((k: string) => k.split(/[:=]/)) // split by colon or equals sign
      .map(([k, ...v]: string[]) => [k, v.length ? v.join(':') : true]),
  )
}
