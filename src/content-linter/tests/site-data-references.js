import path from 'path'
import { isEqual, uniqWith } from 'lodash-es'
import { jest } from '@jest/globals'

import patterns from '../../../lib/patterns.js'
import { getDataByLanguage, getDeepDataByLanguage } from '../../../lib/get-data.js'

// Given syntax like {% data foo.bar %} or {% indented_data_reference foo.bar spaces=3 %},
// the following regex returns just the dotted path: foo.bar

// Note this regex allows nonstandard whitespace between terms; it does not enforce a single space.
// In other words, it will allow {%data foo.bar %} or {%   data foo.bar   %}.
// We should enforce a single space someday, but the content will need a lot of cleanup first, and
// we should have a more purpose-driven validation test for that instead of enforcing it here.
const getDataPathRegex =
  /{%\s*?(?:data|indented_data_reference)\s+?(\S+?)\s*?(?:spaces=\d\d?\s*?)?%}/

const rawLiquidPattern = /{%\s*raw\s*%}.*?{%\s*endraw\s*%}/gs

const getDataReferences = (content) => {
  // When looking for things like `{% data reusables.foo %}` in the
  // content, we first have to exclude any Liquid that isn't real.
  // E.g.
  //   {% raw %}
  //     Here's an example: {% data reusables.foo.bar %}
  //  {% endraw %}
  const withoutRawLiquidBlocks = content.replace(rawLiquidPattern, '')
  const refs = withoutRawLiquidBlocks.match(patterns.dataReference) || []
  return refs.map((ref) => ref.replace(getDataPathRegex, '$1'))
}

describe('data references', () => {
  jest.setTimeout(60 * 1000)

  test('every data reference found in English variable files is defined and has a value', async () => {
    let errors = []
    const allVariables = getDeepDataByLanguage('variables', 'en')
    const variables = Object.values(allVariables)
    expect(variables.length).toBeGreaterThan(0)

    await Promise.all(
      variables.map(async (variablesPerFile) => {
        const variableRefs = getDataReferences(JSON.stringify(variablesPerFile))

        variableRefs.forEach((key) => {
          const value = getDataByLanguage(key, 'en')
          if (typeof value !== 'string') {
            const variableFile = path.join(
              'data/variables',
              getFilenameByValue(allVariables, variablesPerFile),
            )
            errors.push({ key, value, variableFile })
          }
        })
      }),
    )

    errors = uniqWith(errors, isEqual) // remove duplicates
    expect(errors.length, JSON.stringify(errors, null, 2)).toBe(0)
  })
})

function getFilenameByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value)
}
