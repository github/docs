import { TokenizationError } from 'liquidjs'

import { THROW_ON_EMPTY, DataReferenceError } from './error-handling.js'
import { getDataByLanguage } from '../get-data.js'

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
    const text = getDataByLanguage(this.path, scope.environments.currentLanguage)
    if (text === undefined) {
      if (scope.environments.currentLanguage === 'en') {
        const message = `Can't find the key 'data ${this.path}' in the scope.`
        if (THROW_ON_EMPTY) {
          throw new DataReferenceError(message)
        }
        console.warn(message)
      }
      return
    }

    return this.liquid.parseAndRender(text.trim(), scope.environments)
  },
}
