import { TokenizationError } from 'liquidjs'

import { THROW_ON_EMPTY, DataReferenceError } from './error-handling.js'
import { getDataByLanguage } from '#src/data-directory/lib/get-data.js'

const Syntax = /([a-z0-9/\\_.\-[\]]+)/i
const SyntaxHelp = "Syntax Error in 'data' - Valid syntax: data [path]"

export default {
  parse(tagToken) {
    if (!tagToken || !Syntax.test(tagToken.args)) {
      throw new TokenizationError(SyntaxHelp, tagToken)
    }

    this.path = tagToken.args
    this.tagToken = tagToken
  },

  async render(scope) {
    let text = getDataByLanguage(this.path, scope.environments.currentLanguage)
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
    text = text.trim()

    text = handleIndent(this.tagToken, text)
    text = handleBlockquote(this.tagToken, text)

    return this.liquid.parseAndRender(text, scope.environments)
  },
}

function handleIndent(tagToken, text) {
  // Any time what we're about to replace in here has more than one line,
  // if the use of `{% data ... %}` was itself indented, from the left,
  // keep *that* indentation, in replaced output, for every line.
  //
  // For example:
  //
  //   1. Bullet point
  //      {% data variables.foo.bar %}
  //
  // In this example, the `{% data ...` starts with 3 whitespaces
  // (based on the `1. Bull...` in the example). So put 3 whitespaces
  // in front every line of the output.
  if (text.split('\n').length === 0) return text
  const { input, begin } = tagToken
  let i = 1
  while (input.charAt(begin - i) === ' ') {
    i++ // this goes one character "to the left"
  }
  const goBack = input.slice(begin - i, begin)
  if (goBack.charAt(0) === '\n' && goBack.length > 1) {
    const numSpaces = goBack.length - 1
    return text.replace(/^/gm, ' '.repeat(numSpaces)).trim()
  }
  return text
}

// When a reusable has multiple lines, and the input line is a blockquote,
// keep the blockquote character on every successive line.
const blockquoteRegexp = /^\n?([ \t]*>[ \t]?)/
function handleBlockquote(tagToken, text) {
  // If the text isn't multiline, skip
  if (text.split('\n').length <= 1) return text

  // If the line with the liquid tag starts with a blockquote...
  const { input, content } = tagToken
  const inputLine = input.split('\n').find((line) => line.includes(content))
  if (!blockquoteRegexp.test(inputLine)) return text

  // Keep the character on successive lines
  const start = inputLine.match(blockquoteRegexp)[0]
  return text
    .split('\n')
    .map((line, i) => {
      if (i === 0) return line
      if (blockquoteRegexp.test(line)) return line
      return start + line.trim()
    })
    .join('\n')
}
