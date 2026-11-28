import { load, YAMLException } from 'js-yaml'

// Keep the existing frontmatter data type for callers with different schemas.
// The frame reader validates the parsed YAML values separately.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FrontmatterData = Record<string, any>

export function parseYamlFrontmatter(
  markdown: string,
  { allowFormatLabels = false, filename }: { allowFormatLabels?: boolean; filename?: string } = {},
): {
  content: string
  data: FrontmatterData
} {
  const input = markdown.replace(/^\uFEFF/, '')
  if (!input.startsWith('---') || input.startsWith('----')) {
    return { content: input, data: {} }
  }

  const openingFence = allowFormatLabels ? /^---([^\r\n]*)\r?\n/ : /^---([ \t]*)\r?\n/
  const opening = openingFence.exec(input)
  if (!opening) throw new YAMLException('expected a plain YAML frontmatter opening fence')

  const label = opening[1].trim()
  if (label) {
    // Reusables support only these labels. Never look up a user-supplied parser.
    if (label !== 'json' && !/^ya?ml$/i.test(label)) {
      throw new YAMLException(
        `Unsupported Markdown frontmatter language "${label}"${filename ? ` in ${filename}` : ''}`,
      )
    }
  }

  const rest = input.slice(opening[0].length)
  const closing = /(?:^|\r?\n)---[ \t]*(?:\r?\n|$)/.exec(rest)
  if (!closing) throw new YAMLException('missing YAML frontmatter closing fence')

  const yaml = rest.slice(0, closing.index)
  const content = rest.slice(closing.index + closing[0].length)
  if (label === 'json' && yaml.trim()) {
    try {
      return { content, data: JSON.parse(yaml) }
    } catch (error) {
      if (!(error instanceof SyntaxError)) throw error
      throw new YAMLException(error.message)
    }
  }
  // Preserve the empty object for whitespace and comments while letting schema
  // validation see explicit non-object YAML values.
  const data = yaml.replace(/^\s*#[^\n]*/gm, '').trim()
    ? (load(yaml, { filename }) as FrontmatterData)
    : {}
  return { content, data }
}
