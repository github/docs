const { TokenizationError } = require('liquidjs')

const Syntax = /([a-z0-9/\\_.\-[\]]+)/i
const SyntaxHelp = "Syntax Error in 'data' - Valid syntax: data [path]"

module.exports = {
  parse (tagToken) {
    if (!tagToken || !Syntax.test(tagToken.args)) {
      throw new TokenizationError(SyntaxHelp, tagToken)
    }

    this.path = tagToken.args
  },

  async render (scope) {
    const value = await this.liquid.evalValue(`site.data.${this.path}`, scope)
    if (typeof value !== 'string') return value
    return this.liquid.parseAndRender(value, scope.environments)
  }
}
