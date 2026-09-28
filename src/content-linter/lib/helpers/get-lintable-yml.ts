import { load } from 'js-yaml'
import fs from 'fs/promises'

import dataSchemas from '@/data-directory/lib/data-schemas/index'
import ajv from '@/tests/lib/validate-json-schema'

// AJV custom validators can collect data values whose schema properties use lintable.

// mdDict keeps each lintable value next to its schema instance path.
// Example: foo.bar values item 1 and item 2 become /foo/bar/0 and /foo/bar/1 entries.
const mdDict = new Map<string, string>()
const lintableData: string[] = Object.keys(dataSchemas)

// Remove lintable before redefining it because the shared AJV instance already defines it.
ajv.removeKeyword('lintable')
ajv.addKeyword({
  keyword: 'lintable',
  type: 'string',
  // AJV validate keyword docs: https://ajv.js.org/keywords.html#define-keyword-with-validate-function
  validate: (
    _compiled: boolean,
    data: string,
    _schema: unknown,
    parentInfo?: { instancePath: string },
  ): boolean => {
    if (parentInfo) mdDict.set(parentInfo.instancePath, data)
    return true
  },
  errors: false,
})

// The content linter validates lintable data values with multiple rules, so this extracts
// each value with its schema path instead of validating it inside AJV.
export async function getLintableYml(dataFilePath: string): Promise<Record<string, string> | null> {
  const matchingDataPath = lintableData.find(
    (ref) => dataFilePath === ref || dataFilePath.startsWith(ref),
  )
  if (!matchingDataPath) return null

  const schemaFilePath = dataSchemas[matchingDataPath]
  if (!schemaFilePath) return null
  const schema = (await import(schemaFilePath)).default
  if (!schema) return null

  const data = load(await fs.readFile(dataFilePath, 'utf8'))

  mdDict.clear()
  // Custom keyword validators populate mdDict during schema validation.
  ajv.validate(schema, data)
  return mdDict.size ? Object.fromEntries(addPathToKey(mdDict, dataFilePath)) : null
}

// Prefix instance paths with dataFilePath, so lint results can point back to data files.
function addPathToKey(mdDictMap: Map<string, string>, dataFilePath: string): Map<string, string> {
  const keys = Array.from(mdDictMap.keys())
  for (const key of keys) {
    const newKey = `${dataFilePath} ${key}`
    const value = mdDictMap.get(key)
    if (value !== undefined) {
      mdDictMap.delete(key)
      mdDictMap.set(newKey, value)
    }
  }
  return mdDictMap
}
