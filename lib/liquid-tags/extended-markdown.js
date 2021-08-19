export const tags = {
  mac: '',
  windows: '',
  linux: '',
  cli: '',
  desktop: '',
  webui: '',
  curl: '',
  codespaces: '',
  all: '',
  tip: 'border rounded-1 mb-4 p-3 color-border-info color-bg-info f5',
  note: 'border rounded-1 mb-4 p-3 color-border-info color-bg-info f5',
  warning: 'border rounded-1 mb-4 p-3 color-border-danger color-bg-danger f5',
  danger: 'border rounded-1 mb-4 p-3 color-border-danger color-bg-danger f5',
}

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
