import type { Root, Element, Text, ElementContent, Parents } from 'hast'
import { visitParents } from 'unist-util-visit-parents'
import type { Transformer } from 'unified'

// Insert wbr elements into long code terms inside any table so columns can wrap.
// This runs on the HTML AST, so both the HTML string and React output get the breaks.

const wordsLongerThan18Chars = /[\S]{18,}/g
const camelCaseChars = /([a-z])([A-Z])/g
const underscoresAfter12thChar = /([\w:]{12}[^_]*?)_/g
const slashChars = /([/\\])/g

// A sentinel that cannot appear in source text; marks where a <wbr> goes.
const WBR = '\u0000'

function withBreakOpportunities(value: string): string {
  return value.replace(wordsLongerThan18Chars, (str) =>
    str
      // GraphQL code terms break between camelCase words.
      .replace(camelCaseChars, `$1${WBR}$2`)
      // REST terms break on later underscores, so has_organization_projects stays readable.
      .replace(underscoresAfter12thChar, `$1_${WBR}`)
      // Actions terms can break after slashes.
      .replace(slashChars, `$1${WBR}`),
  )
}

// Each insertion needs a fresh wbr element because HAST objects are mutable.
function createWbrElement(): Element {
  return { type: 'element', tagName: 'wbr', properties: {}, children: [] }
}

// Split one text node into text and wbr nodes. Return null when nothing changed.
function splitTextNode(node: Text): ElementContent[] | null {
  const replaced = withBreakOpportunities(node.value)
  if (!replaced.includes(WBR)) return null

  const out: ElementContent[] = []
  const parts = replaced.split(WBR)
  for (const [index, part] of parts.entries()) {
    if (part) out.push({ type: 'text', value: part })
    if (index < parts.length - 1) out.push(createWbrElement())
  }
  return out
}

// Walk descendant text nodes, so code terms inside child anchors get word breaks too.
function insertWordBreaks(code: Element): void {
  const transform = (parent: Element): void => {
    const next: ElementContent[] = []
    for (const child of parent.children) {
      if (child.type === 'text') {
        const split = splitTextNode(child)
        next.push(...(split ?? [child]))
      } else {
        if (child.type === 'element') transform(child)
        next.push(child)
      }
    }
    parent.children = next
  }
  transform(code)
}

function hasTableAncestor(ancestors: Parents[]): boolean {
  return ancestors.some((ancestor) => ancestor.type === 'element' && ancestor.tagName === 'table')
}

export default function wrapCodeTerms(): Transformer<Root> {
  return (tree: Root) =>
    visitParents(tree, 'element', (node, ancestors) => {
      const el = node as Element
      if (el.tagName !== 'code') return
      if (!hasTableAncestor(ancestors)) return
      insertWordBreaks(el)
    })
}
