export const tags = {
  note: 'accent',
  tip: 'success',
  warning: 'attention',
  danger: 'danger',
}

const template =
  '<div class="ghd-alert ghd-alert-{{ color }} ghd-spotlight-{{ color }}">{{ output }}</div>'

export const Spotlight = {
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
      color: tags[this.tagName],
      output,
    })
  },
}
