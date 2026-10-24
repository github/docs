// Upstream SDK docs are plain GitHub Markdown, but docs.github.com renders every
// page through Liquid. Unescaped GitHub Actions expressions and template
// placeholders render as empty strings, and a stray tag breaks the page.

import { MERMAID_BLOCK } from '@/workflows/sync-sdk-docs/mermaid-blocks'

// Wrap whole single-line spans to match hand-authored content, which keeps the
// leading $ of an Actions expression inside the raw block. Lone opening
// delimiters get wrapped too, so an unclosed one cannot cause a parse error.
const LIQUID_SYNTAX = /\$?\{\{[^\n]*?\}\}|\{%[^\n]*?%\}|\{\{|\{%/g

function wrapInRaw(match: string): string {
  // A raw block ends at the first endraw tag, so wrap only the opening delimiter.
  if (match.includes('endraw')) {
    const delimiterEnd = match.indexOf('{') + 2
    const rest = escapeSpans(match.slice(delimiterEnd))
    return `{% raw %}${match.slice(0, delimiterEnd)}{% endraw %}${rest}`
  }
  return `{% raw %}${match}{% endraw %}`
}

function escapeSpans(text: string): string {
  return text.replace(LIQUID_SYNTAX, (match: string, offset: number) => {
    // A preceding { would join the raw tag's brace into an output delimiter.
    if (match.startsWith('$') && text[offset - 1] === '{') return `$${wrapInRaw(match.slice(1))}`
    return wrapInRaw(match)
  })
}

// convert-mermaid.ts renders these blocks later, and raw tags would corrupt the diagrams.
export function escapeLiquid(content: string): string {
  let result = ''
  let last = 0

  for (const match of content.matchAll(MERMAID_BLOCK)) {
    result += escapeSpans(content.slice(last, match.index)) + match[0]
    last = match.index + match[0].length
  }

  return result + escapeSpans(content.slice(last))
}
