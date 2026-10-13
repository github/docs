import path from 'path'
import { isEqual, uniqWith } from 'lodash-es'
import { describe, expect, test, vi } from 'vitest'

import patterns from '@/frame/lib/patterns'
import { getDataByLanguage, getDeepDataByLanguage } from '@/data-directory/lib/get-data'

// Extracts dotted data paths from data and indented_data_reference Liquid tags.

// Content cleanup needs a purpose-built test before this rejects nonstandard Liquid spacing.
const getDataPathRegex =
  /{%\s*?(?:data|indented_data_reference)\s+?(\S+?)\s*?(?:spaces=\d\d?\s*?)?%}/

const rawLiquidPattern = /{%\s*raw\s*%}.*?{%\s*endraw\s*%}/gs

// Strip raw Liquid blocks so examples inside {% raw %} do not count as real references.
// Example: "{% raw %}{% data reusables.foo %}{% endraw %}" returns no references.
const getDataReferences = (content: string): string[] => {
  const withoutRawLiquidBlocks = content.replace(rawLiquidPattern, '')
  const refs = withoutRawLiquidBlocks.match(patterns.dataReference) || []
  return refs.map((ref: string) => ref.replace(getDataPathRegex, '$1'))
}

describe('data references', () => {
  vi.setConfig({ testTimeout: 60 * 1000 })

  test('every data reference found in English variable files is defined and has a value', async () => {
    // getDataByLanguage can return any YAML type, so the string check happens below.
    let errors: Array<{ key: string; value: unknown; variableFile: string }> = []
    const allVariables = getDeepDataByLanguage('variables', 'en')
    const variables = Object.values(allVariables)
    expect(variables.length).toBeGreaterThan(0)

    await Promise.all(
      variables.map(async (variablesPerFile) => {
        const variableRefs = getDataReferences(JSON.stringify(variablesPerFile))

        for (const key of variableRefs) {
          const value = getDataByLanguage(key, 'en')
          if (typeof value !== 'string') {
            const filename = getFilenameByValue(allVariables, variablesPerFile)
            const variableFile = path.join('data/variables', filename || '')
            errors.push({ key, value, variableFile })
          }
        }
      }),
    )

    errors = uniqWith(errors, isEqual)
    expect(errors.length, JSON.stringify(errors, null, 2)).toBe(0)
  })
})

// Search allVariables by object identity because getDataByLanguage returns the nested value only.
function getFilenameByValue(object: Record<string, unknown>, value: unknown): string | undefined {
  return Object.keys(object).find((key) => object[key] === value)
}
