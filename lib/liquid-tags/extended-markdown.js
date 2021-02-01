const Liquid = require('liquid')

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

class ExtendedMarkdown extends Liquid.Block {
  async render (context) {
    const chunks = await super.render(context)
    const output = Liquid.Helpers.toFlatString(chunks)
    return this.template.engine.parseAndRender(template, {
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
