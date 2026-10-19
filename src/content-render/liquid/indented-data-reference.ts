import assert from 'assert'

import { type TagToken, type Liquid } from 'liquidjs'
import { THROW_ON_EMPTY, IndentedDataReferenceError } from './error-handling'
import { getDataByLanguage } from '@/data-directory/lib/get-data'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

interface LiquidScope {
  environments: {
    currentLanguage: string
    [key: string]: unknown
  }
}

// indented_data_reference renders a data reference with spaces=NUMBER prepended to every line.
// Example: {% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %}
// Use it inside Markdown blocks, such as nested lists, without changing site.data rendering.

const IndentedDataReference = {
  markup: '',
  liquid: null as Liquid | null,

  parse(tagToken: TagToken): void {
    this.markup = tagToken.args.trim()
  },

  async render(scope: LiquidScope): Promise<string | undefined> {
    // Preserve the separator space so spaces=NUMBER and spaces = NUMBER parse the same way.
    const input = this.markup
      .replace(/\s/, 'REALSPACE')
      .replace(/\s/g, '')
      .replace('REALSPACE', ' ')

    const [dataReference, spaces] = input.split(' ')

    // The tag defaults to spaces=2.
    const numSpaces: string = spaces ? spaces.replace(/spaces=/, '') : '2'

    assert(parseInt(numSpaces) || numSpaces === '0', '"spaces=NUMBER" must include a number')

    const text: string | undefined = getDataByLanguage(
      dataReference,
      scope.environments.currentLanguage,
    ) as string | undefined
    if (text === undefined) {
      if (scope.environments.currentLanguage === 'en') {
        const message = `Can't find the key 'indented_data_reference ${dataReference}' in the scope.`
        if (THROW_ON_EMPTY) {
          throw new IndentedDataReferenceError(message)
        }
        logger.warn(message)
      }
      return
    }

    const renderedReferenceWithIndent: string = text.replace(/^/gm, ' '.repeat(parseInt(numSpaces)))

    return this.liquid.parseAndRender(renderedReferenceWithIndent, scope.environments)
  },
}

export default IndentedDataReference
