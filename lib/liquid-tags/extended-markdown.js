import { allTools } from '../all-tools.js'

// we do this to get an object that combines all possible liquid tags
const toolTags = Object.fromEntries(Object.keys(allTools).map((tool) => [tool, '']))

const subsetTags = {
  mac: '',
  windows: '',
  linux: '',
  all: '',
  tip: 'border rounded-1 mb-4 p-3 color-border-accent-emphasis color-bg-accent f5',
  note: 'border rounded-1 mb-4 p-3 color-border-accent-emphasis color-bg-accent f5',
  warning: 'border rounded-1 mb-4 p-3 color-border-danger color-bg-danger f5',
  danger: 'border rounded-1 mb-4 p-3 color-border-danger color-bg-danger f5',
}

export const tags = Object.assign({}, subsetTags, toolTags)

export const template =
  '<div class="extended-markdown {{ tagName }} {{ classes }}">{{ output }}</div>'

export const ExtendedMarkdown = {
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
      classes: tags[this.tagName],
      output,
    })
  },
}

export default {
  tags,
  ExtendedMarkdown,
}
