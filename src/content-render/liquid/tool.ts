import { allTools } from '@/tools/lib/all-tools'
import { allPlatforms } from '@/tools/lib/all-platforms'

export const tags: string[] = Object.keys(allTools).concat(allPlatforms).concat(['rowheaders'])

// The trailing newline keeps Markdown after </div> outside the HTML block so unified renders it.
// Tool tags require content after the closing tag to start on a new line.
// Example: </div>\nText stays in the HTML block; </div>\n\nText renders as Markdown.
const template = '<div class="ghd-tool {{ tagName }}">{{ output }}</div>\n'

export const Tool = {
  type: 'block' as const,
  tagName: '',
  // Liquid does not publish TypeScript definitions for template objects.
  templates: [] as unknown[],

  // Liquid internal types do not cover tagToken or remainTokens.
  parse(tagToken: unknown, remainTokens: unknown) {
    const token = tagToken as { name: string; getText: () => string }
    this.tagName = token.name
    this.templates = []

    const stream = this.liquid.parser.parseStream(remainTokens)
    stream
      .on(`tag:end${this.tagName}`, () => stream.stop())
      .on('template', (tpl: unknown) => this.templates.push(tpl))
      .on('end', () => {
        throw new Error(`tag ${token.getText()} not closed`)
      })
    stream.start()
  },

  // Liquid does not type scope or generator template values.
  *render(scope: unknown): Generator<unknown, unknown, unknown> {
    const output = yield this.liquid.renderer.renderTemplates(this.templates, scope)
    return yield this.liquid.parseAndRender(template, {
      tagName: this.tagName,
      output,
    })
  },
}
