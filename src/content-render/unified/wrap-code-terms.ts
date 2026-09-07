import type { Root, Element, Text, ElementContent, Parents } from 'hast'
import { visitParents } from 'unist-util-visit-parents'
import type { Transformer } from 'unified'

// This plugin improves table rendering on reference pages by inserting a <wbr>
// element into code terms that use camelcase, slashes, or underscores, inspired
// by http://heap.ch/blog/2016/01/19/camelwrap/
//
// It runs server-side on the HTML AST so the break opportunities are present in
// the rendered markup (both the HTML string and the hast that React renders),
// rather than being mutated into the DOM imperatively on the client after
// hydration. It only applies to `<code>` inside a `<table>`, matching the
// previous client-side selector `#article-contents table code`.

const wordsLongerThan18Chars = /[\S]{18,}/g
const camelCaseChars = /([a-z])([A-Z])/g
const underscoresAfter12thChar = /([\w:]{12}[^_]*?)_/g
const slashChars = /([/\\])/g

// A sentinel that cannot appear in source text; marks where a <wbr> goes.
const WBR = '\u0000'

function withBreakOpportunities(value: string): string {
  return value.replace(wordsLongerThan18Chars, (str) =>
    str
      // GraphQL code terms use camelcase
      .replace(camelCaseChars, `$1${WBR}$2`)
      // REST code terms use underscores. To keep word breaks looking nice, only
      // break on underscores after the 12th char so `has_organization_projects`
      // breaks after `has_organization` instead of after `has_`.
      .replace(underscoresAfter12thChar, `$1_${WBR}`)
      // Some Actions reference pages have tables with code terms separated by slashes.
      .replace(slashChars, `$1${WBR}`),
  )
}

// A fresh <wbr> element per insertion, so inserted nodes never share the same
// `properties`/`children` object references (which could be mutated later).
function createWbrElement(): Element {
  return { type: 'element', tagName: 'wbr', properties: {}, children: [] }
}

// Replace a text node's value with a sequence of text nodes interleaved with
// <wbr> elements at each break opportunity. Returns null when nothing changed.
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

// Walk every descendant text node of `code`, inserting <wbr> elements in place.
// This naturally handles the case where the code term's text lives inside a
// child anchor element.
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
