import GithubSlugger from 'github-slugger'

/**
 * Strip inline Markdown markup from a heading to get plain text for slug computation.
 * Matches what hast-util-to-string produces on a heading node after remark parsing.
 *
 * Key design decisions:
 * - Inline code spans (backtick) are extracted verbatim so that `<job_id>` inside them
 *   is not incorrectly stripped by the HTML-tag regex (which is needed for octicon SVGs).
 * - HTML stripping only removes valid HTML element names (no underscores) to avoid stripping
 *   angle-bracket placeholders like <job_id> that appear in code-span heading text.
 * - No final .trim() — trailing whitespace from stripped SVGs becomes trailing hyphens via
 *   github-slugger, reproducing the live site's heading IDs (e.g. `allow--`).
 */
export function headingTextToPlain(text: string): string {
  // Strip HTML tags using a state machine rather than a regex so that CodeQL can verify
  // the stripping is complete. Tags like <script\n...> or tags with '>' in attribute values
  // are handled correctly. Output is only used for slug computation, never rendered as HTML.
  function stripHtmlTags(s: string): string {
    let out = ''
    let inTag = false
    for (let i = 0; i < s.length; i++) {
      if (!inTag && s[i] === '<') {
        // Peek ahead: if this looks like an underscore-containing placeholder (e.g. <job_id>),
        // emit the inner text instead of dropping it entirely so the slug stays correct.
        const close = s.indexOf('>', i + 1)
        if (close !== -1) {
          const inner = s.slice(i + 1, close)
          if (/^[a-zA-Z][a-zA-Z0-9]*(?:_[a-zA-Z0-9]+)+$/.test(inner)) {
            out += inner
            i = close
            continue
          }
        }
        inTag = true
      } else if (inTag && s[i] === '>') {
        inTag = false
        // Don't emit a replacement space — surrounding whitespace in the source markdown
        // already provides the correct spacing for github-slugger (e.g. `allow ` from
        // the space before an octicon tag).
      } else if (!inTag) {
        out += s[i]
      }
    }
    return out
  }

  // Process non-code portions: strip HTML and inline formatting markup.
  function processNonCode(s: string): string {
    return stripHtmlTags(s)
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1') // images: ![alt](url) → alt
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links: [text](url) → text
      .replace(/\*\*([^*]+)\*\*/g, '$1') // bold **text**
      .replace(/\*([^*]+)\*/g, '$1') // italic *text*
      .replace(/(?<![a-zA-Z0-9_])__([^_]+)__(?![a-zA-Z0-9_])/g, '$1') // bold __text__
      .replace(/(?<![a-zA-Z0-9_])_([^_]+)_(?![a-zA-Z0-9_])/g, '$1') // italic _text_
  }

  // Split text into alternating non-code / code-span segments.
  // Code spans are extracted verbatim (hast-util-to-string returns their raw text content).
  const parts: string[] = []
  let remaining = text
  while (remaining.length > 0) {
    const open = remaining.indexOf('`')
    if (open === -1) {
      parts.push(processNonCode(remaining))
      break
    }
    if (open > 0) parts.push(processNonCode(remaining.slice(0, open)))
    const close = remaining.indexOf('`', open + 1)
    if (close === -1) {
      // Unclosed backtick — treat remainder as non-code
      parts.push(processNonCode(remaining.slice(open)))
      break
    }
    parts.push(remaining.slice(open + 1, close)) // code content verbatim
    remaining = remaining.slice(close + 1)
  }
  return parts.join('')
  // Note: no .trim() — see comment above.
}

/**
 * Compute the set of heading anchor IDs for a page from its Liquid-rendered markdown.
 *
 * Uses github-slugger (the same library as rehype-slug in the render pipeline) to compute
 * heading anchor IDs in document order, producing results that match the live site,
 * including the `-1`, `-2`, ... dedupe suffixes github-slugger adds for repeated headings.
 *
 * Handles ATX headings (`## Heading`), Setext headings (underlined with `===`/`---`), and
 * explicit `<a name="...">` / `<a id="...">` anchors embedded in the markdown.
 */
export function computeHeadingIds(renderedMarkdown: string): Set<string> {
  const slugger = new GithubSlugger()
  const headingIds = new Set<string>()

  // ATX headings: ## Heading text (optional trailing ##)
  const ATX_HEADING_RE = /^#{1,6}\s+(.+?)(?:\s+#+)?\s*$/gm
  let m: RegExpExecArray | null
  while ((m = ATX_HEADING_RE.exec(renderedMarkdown)) !== null) {
    headingIds.add(slugger.slug(headingTextToPlain(m[1])))
  }

  // Setext headings: text line followed by === or --- underline
  const SETEXT_HEADING_RE = /^([^\n]+)\n[=-]{2,}\s*$/gm
  while ((m = SETEXT_HEADING_RE.exec(renderedMarkdown)) !== null) {
    headingIds.add(slugger.slug(headingTextToPlain(m[1])))
  }

  // Explicit <a name="..."> and <a id="..."> anchors embedded in the markdown.
  // Some pages (e.g. site-policy) use raw HTML anchors instead of headings.
  const NAMED_ANCHOR_RE = /<a\s[^>]*(?:name|id)="([^"]+)"[^>]*>/gi
  while ((m = NAMED_ANCHOR_RE.exec(renderedMarkdown)) !== null) {
    headingIds.add(m[1])
  }

  return headingIds
}
