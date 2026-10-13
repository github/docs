import { TokenizationError } from 'liquidjs'
import type { TagToken, Liquid, Template } from 'liquidjs'

import { THROW_ON_EMPTY, DataReferenceError } from './error-handling'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

const Syntax = /([a-z0-9/\\_.\-[\]]+)/i
const SyntaxHelp = "Syntax Error in 'data' - Valid syntax: data [path]"

// Custom environments are not exposed in Liquid's Scope type.
interface CustomScope {
  environments: {
    currentLanguage?: string
    [key: string]: unknown
  }
  [key: string]: unknown
}

interface DataTag {
  path: string
  tagToken: TagToken
  liquid: Liquid
  parse(tagToken: TagToken): void
  render(scope: CustomScope): Promise<Template | undefined>
}

export default {
  parse(tagToken: TagToken) {
    if (!tagToken || !Syntax.test(tagToken.args)) {
      throw new TokenizationError(SyntaxHelp, tagToken)
    }

    this.path = tagToken.args
    this.tagToken = tagToken
  },

  async render(scope: CustomScope) {
    let text = getDataByLanguage(this.path, scope.environments.currentLanguage || '') as
      | string
      | undefined
    if (text === undefined) {
      if (scope.environments.currentLanguage === 'en') {
        const message = `Can't find the key 'data ${this.path}' in the scope.`
        if (THROW_ON_EMPTY) {
          throw new DataReferenceError(message)
        }
        logger.warn(message)
      }
      return
    }
    text = text.trim()

    text = handleIndent(this.tagToken, text)
    text = handleBlockquote(this.tagToken, text)

    return this.liquid.parseAndRender(text, scope.environments)
  },
} as DataTag

// Multiline data output keeps the tag's indentation so Markdown blocks, such as lists, stay intact.
// Example: three spaces before {% data variables.foo.bar %} are kept on each output line.
function handleIndent(tagToken: TagToken, text: string): string {
  if (text.split('\n').length === 0) return text
  const { input, begin } = tagToken
  let i = 1
  while (input.charAt(begin - i) === ' ') {
    i++
  }
  const goBack = input.slice(begin - i, begin)
  if (goBack.charAt(0) === '\n' && goBack.length > 1) {
    const numSpaces = goBack.length - 1
    return text.replace(/^/gm, ' '.repeat(numSpaces)).trim()
  }
  return text
}

// Multiline reusables in blockquotes need the quote marker on every line.
const blockquoteRegexp = /^\n?([ \t]*>[ \t]?)/
function handleBlockquote(tagToken: TagToken, text: string): string {
  if (text.split('\n').length <= 1) return text

  const { input, content } = tagToken
  if (!content) return text
  const inputLine = input.split('\n').find((line) => line.includes(content))
  if (!inputLine || !blockquoteRegexp.test(inputLine)) return text

  const match = inputLine.match(blockquoteRegexp)
  if (!match) return text
  const start = match[0]
  return text
    .split('\n')
    .map((line, i) => {
      if (i === 0) return line
      if (blockquoteRegexp.test(line)) return line
      return start + line.trim()
    })
    .join('\n')
}
