const tags = {
  mac: '',
  windows: '',
  linux: '',
  all: '',
  tip: 'border rounded-1 mb-4 p-3 border-blue bg-blue-light f5',
  note: 'border rounded-1 mb-4 p-3 border-blue bg-blue-light f5',
  warning: 'border rounded-1 mb-4 p-3 border-red bg-red-light f5',
  danger: 'border rounded-1 mb-4 p-3 border-red bg-red-light f5'
}

const template = '<div class="extended-markdown {{ tagName }} {{ classes }}">{{ output }}</div>'

const ExtendedMarkdown = {
  type: 'block',

  parse (tagToken, remainTokens) {
    this.tagName = tagToken.name
    this.templates = []

    const stream = this.liquid.parser.parseStream(remainTokens)
    stream
      .on(`tag:end${this.tagName}`, () => stream.stop())
      .on('template', tpl => this.templates.push(tpl))
      .on('end', () => {
        throw new Error(`tag ${tagToken.getText()} not closed`)
      })
    stream.start()
  },

  render: function * (scope) {
    const output = yield this.liquid.renderer.renderTemplates(this.templates, scope)
    return yield this.liquid.parseAndRender(template, {
      tagName: this.tagName,
      classes: tags[this.tagName],
      output
    })
  }
}

module.exports = {
  tags,
  ExtendedMarkdown
}
