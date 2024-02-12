export const tags = {
  note: 'accent',
  tip: 'accent',
  warning: 'danger',
  danger: 'danger',
}

const template =
  '<div class="ghd-spotlight ghd-spotlight-{{ tagName }} {{ classes }}">{{ output }}</div>'

function getClasses(tagName) {
  const color = tags[tagName]
  return `border rounded-1 my-3 p-3 f5 color-border-${color}-emphasis color-bg-${color}`
}

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
      tagName: this.tagName,
      classes: getClasses(this.tagName),
      output,
    })
  },
}
