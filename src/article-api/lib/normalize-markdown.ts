/**
 * Post-processing for transformer-produced markdown that is about to be sent
 * to the client (via the `.md` URL suffix, `Accept: text/markdown`, or the
 * article-body API). Kept intentionally small so the same rules apply to
 * every transformer's output without each one having to opt in.
 */

/**
 * Collapse runs of 3+ consecutive newlines down to 2 (i.e. at most one blank
 * line between blocks). Transformers that render conditional sections often
 * leave behind multiple blank lines when sections are empty; the rendered
 * markdown is otherwise valid but visually noisy in the `.md` output.
 */
export function collapseBlankLines(content: string): string {
  return content.replace(/\n{3,}/g, '\n\n')
}

/**
 * Apply every normalization step that should run on transformer-produced
 * markdown before it leaves the server. Centralized so new rules (e.g.
 * trailing-whitespace stripping) can be added in one place.
 */
export function normalizeRenderedMarkdown(content: string): string {
  return collapseBlankLines(content)
}
