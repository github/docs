const Liquid = require('liquid')

const Syntax = /([a-z0-9/\\_.-]+)/i
const SyntaxHelp = "Syntax Error in 'data' - Valid syntax: data [path]"

module.exports = class Data extends Liquid.Tag {
  constructor (template, tagName, markup) {
    super(template, tagName, markup)

    const match = Syntax.exec(markup)
    if (!match) {
      throw new Liquid.SyntaxError(SyntaxHelp)
    }

    this.path = match[1]
  }

  async render (context) {
    const value = await context.get(`site.data.${this.path}`)
    if (typeof value !== 'string') return value
    return this.template.engine.parseAndRender(value, context)
  }
}
