import { load, YAMLException } from 'js-yaml'

// Keep the existing frontmatter data type for callers with different schemas.
// The frame reader validates the parsed YAML values separately.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FrontmatterData = Record<string, any>

export function parseYamlFrontmatter(markdown: string): {
  content: string
  data: FrontmatterData
} {
  const input = markdown.replace(/^\uFEFF/, '')
  if (!input.startsWith('---') || input.startsWith('----')) {
    return { content: input, data: {} }
  }

  // A format label on the opening fence must never select a parser.
  const opening = /^---[ \t]*\r?\n/.exec(input)
  if (!opening) throw new YAMLException('expected a plain YAML frontmatter opening fence')

  const rest = input.slice(opening[0].length)
  const closing = /(?:^|\r?\n)---[ \t]*(?:\r?\n|$)/.exec(rest)
  if (!closing) throw new YAMLException('missing YAML frontmatter closing fence')

  const yaml = rest.slice(0, closing.index)
  const content = rest.slice(closing.index + closing[0].length)
  // Preserve the empty object for whitespace and comments while letting schema
  // validation see explicit non-object YAML values.
  const data = yaml.replace(/^\s*#[^\n]*/gm, '').trim() ? (load(yaml) as FrontmatterData) : {}
  return { content, data }
}
