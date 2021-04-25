#!/usr/bin/env node

const program = require('commander')
const getOperations = require('./utils/get-operations')

// [start-readme]
//
// Run this script to check if OpenAPI files can be decorated successfully.
//
// [end-readme]

program
  .description('Generate dereferenced OpenAPI and decorated schema files.')
  .requiredOption('-f, --files [files...]', 'A list of OpenAPI description files to check')
  .parse(process.argv)

const files = program.files

check(files)

async function check (files) {
  console.log('Verifying OpenAPI files are valid with decorator')

  const schemas = files.map(filename => require(filename))

  for (const schema of schemas) {
    try {
      // munge OpenAPI definitions object in an array of operations objects
      const operations = await getOperations(schema)
      // process each operation, asynchronously rendering markdown and stuff
      await Promise.all(operations.map(operation => operation.process()))

      console.log('Successfully could decorate OpenAPI operations!')
    } catch (error) {
      console.error(error)
      console.log('🐛 Whoops! It looks like the decorator script wasn\'t able to parse the dereferenced schema. A recent change may not yet be supported by the decorator. Please reach out in the #docs-engineering slack channel for help.')
      process.exit(1)
    }
  }
}
