import { TokenizationError } from 'liquidjs'
import matter from 'gray-matter'

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
    let value = await this.liquid.evalValue(`site.data.${this.path}`, scope)
    if (typeof value !== 'string') {
      const message = `Can't find the key 'site.data.${this.path}' in the scope.`
      if (THROW_ON_EMPTY) {
        throw new DataReferenceError(message)
      }
      console.warn(message)
      return
    }

    // Drop any frontmatter since reusable Markdown files aren't currently
    // expected to use frontmatter.  This is useful since our current translation
    // process adds YAML frontmatter properties to any Markdown file that gets
    // translated and we don't want to render that information.
    ;({ content: value } = matter(value))

    return this.liquid.parseAndRender(value, scope.environments)
  },
}
