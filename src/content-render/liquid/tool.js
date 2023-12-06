import { allTools } from '#src/tools/lib/all-tools.js'
import { allPlatforms } from '#src/tools/lib/all-platforms.js'

export const tags = Object.keys(allTools).concat(allPlatforms).concat(['rowheaders'])

const template = '<div class="ghd-tool {{ tagName }}">{{ output }}</div>'

export const Tool = {
  type: 'block',

  parse(tagToken, remainTokens) {
    this.tagName = tagToken.name
    this.templates = []

    const stream = this.liquid.parser.parseStream(remainTokens)
    stream
      .on(`tag:end${this.tagName}`, () => stream.stop())
      .on('template', (tpl) => this.templates.push(tpl))
      .on('end', () => {
        throw new Error(`tag ${tagToken.getText()} not closed`)
      })
    stream.start()
  },

  render: function* (scope) {
    const output = yield this.liquid.renderer.renderTemplates(this.templates, scope)
    return yield this.liquid.parseAndRender(template, {
      tagName: this.tagName,
      output,
    })
  },
}
