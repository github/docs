#!/usr/bin/env node

import yaml from 'js-yaml'
import fs from 'fs/promises'

import dataSchemas from '#src/data-directory/lib/data-schemas/index.js'
import ajv from '#src/tests/lib/validate-json-schema.js'

// AJV already has a built-in way to extract out properties
// with a specific keyword using a custom validator function.
// The intended purpose of the validator function is to perform
// validation of course, but we are overloading it here to extract
// the `lintable` properties and their parent path in the schema.

// mdDict contains the extracted `lintable` properties
// and their parent path in the schema.
//
// For example, assuming all items in `bar` are lintable,
// in this yaml file:
//
// foo:
//   bar:
//     - item 1
//     - item 2
//
// mdDict will be populated with:
//
// { '/foo/bar/0': 'item 1', '/foo/bar/1': 'item 2' }
const mdDict = new Map()
const lintableData = Object.keys(dataSchemas)

// To redefine a custom keyword, you must remove it
// then re-add it with the new definition. The default
// ajv instance defines the `lintable` keyword without
// a custom validator function.
ajv.removeKeyword('lintable')
ajv.addKeyword({
  keyword: 'lintable',
  type: 'string',
  // For docs on defining validate see
  // https://ajv.js.org/keywords.html#define-keyword-with-validate-function
  validate: (compiled, data, schema, parentInfo) => {
    mdDict.set(parentInfo.instancePath, data)
    return true
  },
  errors: false,
})

// We do want to validate the value of each `lintable`
// property when running the content linter test.
// Because we have multiple rules, we can't write a single
// validator function that will work for all `lintable`
// properties. So we extract the `lintable` properties
// out of the schema and run those values through each
// linter rule.
// We need to know how to correlate each extracted property
// back to the location in the original schema file,
// so we also need the parent path of the `lintable`
// property in the schema.
export async function getLintableYml(dataFilePath) {
  const matchingDataPath = lintableData.find(
    (ref) => dataFilePath === ref || dataFilePath.startsWith(ref),
  )
  if (!matchingDataPath) return null

  const schemaFilePath = dataSchemas[matchingDataPath]
  const schema = (await import(schemaFilePath)).default
  if (!schema) return null

  const data = yaml.load(await fs.readFile(dataFilePath, 'utf8'))

  mdDict.clear()
  // This validate function will call all keyword validator functions and populate mdDict
  ajv.validate(schema, data)
  return mdDict.size ? Object.fromEntries(addPathToKey(mdDict, dataFilePath)) : null
}

// The key is the parent's instance path, but we also need
// to include the data file path in the key to map the result
// back to a file in the data directory.
// The resulting key looks like:
// 'data/variables/product.yml /pat_v1_caps'
function addPathToKey(mdDict, dataFilePath) {
  const keys = Array.from(mdDict.keys())
  keys.forEach((key) => {
    const newKey = `${dataFilePath} ${key}`
    const value = mdDict.get(key)
    mdDict.delete(key)
    mdDict.set(newKey, value)
  })
  return mdDict
}
