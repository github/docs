import GithubSlugger from 'github-slugger'

// Strip inline Markdown before slugging headings, matching hast-util-to-string after remark.
// Code spans stay verbatim so HTML-tag stripping does not drop placeholders such as <job_id>.
// Underscore names such as <job_id> stay as text; any other <...> sequence is removed as a tag.
// No final .trim(): stripped SVG whitespace becomes trailing hyphens, matching IDs like allow--.
export function headingTextToPlain(text: string): string {
  // Use a state machine instead of a regex so CodeQL can analyze the tag stripping.
  function stripHtmlTags(s: string): string {
    let out = ''
    let inTag = false
    for (let i = 0; i < s.length; i++) {
      if (!inTag && s[i] === '<') {
        // Preserve placeholders such as <job_id> as text so their slugs keep the name.
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
        // Source whitespace already gives github-slugger the separator after stripped SVG tags.
      } else if (!inTag) {
        out += s[i]
      }
    }
    return out
  }

  function processNonCode(s: string): string {
    return stripHtmlTags(s)
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1') // image: ![GitHub logo](/logo.svg) to GitHub logo
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // link: [GitHub Docs](/get-started) to GitHub Docs
      .replace(/\*\*([^*]+)\*\*/g, '$1') // double asterisks mark bold text
      .replace(/\*([^*]+)\*/g, '$1') // italic: *GitHub Docs* to GitHub Docs
      .replace(/(?<![a-zA-Z0-9_])__([^_]+)__(?![a-zA-Z0-9_])/g, '$1') // bold underscores
      .replace(/(?<![a-zA-Z0-9_])_([^_]+)_(?![a-zA-Z0-9_])/g, '$1') // italic underscores
  }

  // Code spans stay verbatim, matching hast-util-to-string raw text content.
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
      // Unclosed backtick: treat the remainder as non-code.
      parts.push(processNonCode(remaining.slice(open)))
      break
    }
    parts.push(remaining.slice(open + 1, close))
    remaining = remaining.slice(close + 1)
  }
  // Keep trailing whitespace for stripped SVGs so github-slugger emits trailing hyphens.
  return parts.join('')
}

// Compute heading IDs from Liquid-rendered Markdown with github-slugger, matching live IDs.
// Repeated headings keep github-slugger suffixes such as -1 and -2.
// Also includes Setext headings and raw HTML anchors with name or id attributes.
export function computeHeadingIds(renderedMarkdown: string): Set<string> {
  const slugger = new GithubSlugger()
  const headingIds = new Set<string>()

  // ATX headings can include optional trailing hashes.
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

  // Some pages, such as site-policy, carry raw HTML anchors instead of headings.
  const NAMED_ANCHOR_RE = /<a\s[^>]*(?:name|id)="([^"]+)"[^>]*>/gi
  while ((m = NAMED_ANCHOR_RE.exec(renderedMarkdown)) !== null) {
    headingIds.add(m[1])
  }

  return headingIds
}
