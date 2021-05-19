#!/usr/bin/env node

const glob = require('glob')
const program = require('commander')
const getOperations = require('./utils/get-operations')

// [start-readme]
//
// Run this script to check if OpenAPI files can be decorated successfully.
//
// [end-readme]

program
  .description('Generate dereferenced OpenAPI and decorated schema files.')
  .requiredOption('-f, --files [files...]', 'A list of OpenAPI description files to check. Can parse literal glob patterns.')
  .parse(process.argv)

const filenames = program.opts().files

const filesToCheck = filenames.flatMap(filename => glob.sync(filename))

if (filesToCheck.length) {
  check(filesToCheck)
} else {
  console.log('No files to verify.')
  process.exit(1)
}

async function check (files) {
  console.log('Verifying OpenAPI files are valid with decorator')

  const documents = files.map(filename => [filename, require(filename)])

  for (const [filename, schema] of documents) {
    try {
      // munge OpenAPI definitions object in an array of operations objects
      const operations = await getOperations(schema)
      // process each operation, asynchronously rendering markdown and stuff
      await Promise.all(operations.map(operation => operation.process()))

      console.log(`Successfully could decorate OpenAPI operations for document ${filename}`)
    } catch (error) {
      console.error(error)
      console.log(`🐛 Whoops! It looks like the decorator script wasn't able to parse the dereferenced schema in file ${filename}. A recent change may not yet be supported by the decorator. Please reach out in the #docs-engineering slack channel for help.`)
      process.exit(1)
    }
  }
}
