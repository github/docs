import { TokenizationError } from 'liquidjs'

import { THROW_ON_EMPTY, DataReferenceError } from './error-handling.js'

const Syntax = /([a-z0-9/\\_.\-[\]]+)/i
const SyntaxHelp = "Syntax Error in 'data' - Valid syntax: data [path]"

export default {
  parse(tagToken) {
    if (!tagToken || !Syntax.test(tagToken.args)) {
      throw new TokenizationError(SyntaxHelp, tagToken)
    }

    this.path = tagToken.args
  },

  async render(scope) {
    const value = await this.liquid.evalValue(`site.data.${this.path}`, scope)
    if (typeof value !== 'string') {
      const message = `Can't find the key 'site.data.${this.path}' in the scope.`
      if (THROW_ON_EMPTY) {
        throw new DataReferenceError(message)
      }
      console.warn(message)
      return
    }
    return this.liquid.parseAndRender(value, scope.environments)
  },
}
