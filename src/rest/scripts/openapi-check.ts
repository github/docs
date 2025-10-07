// [start-readme]
//
// Run this script to check if OpenAPI files can be decorated successfully.
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import { globSync } from 'glob'
import { program } from 'commander'
import { createOperations, processOperations } from './utils/get-operations'

interface ProgramOptions {
  files: string[]
}

program
  .description('Generate dereferenced OpenAPI and decorated schema files.')
  .requiredOption(
    '-f, --files [files...]',
    'A list of OpenAPI description files to check. Can parse literal glob patterns.',
  )
  .parse(process.argv)

const filenames: string[] = (program.opts() as ProgramOptions).files

const filesToCheck: string[] = filenames.flatMap((filename: string) => globSync(filename))

if (filesToCheck.length) {
  check(filesToCheck)
} else {
  console.log('No files to verify.')
  process.exit(1)
}

async function check(files: string[]): Promise<void> {
  console.log('Verifying OpenAPI files are valid with decorator')
  const documents: [string, any][] = files.map((filename: string) => [
    filename,
    JSON.parse(fs.readFileSync(path.join(filename), 'utf8')),
  ])

  for (const [filename, schema] of documents as [string, any][]) {
    try {
      // munge OpenAPI definitions object in an array of operations objects
      const operations = await createOperations(schema)
      // process each operation, asynchronously rendering markdown and stuff
      await processOperations(operations, {})

      console.log(`Successfully could decorate OpenAPI operations for document ${filename}`)
    } catch (error: unknown) {
      console.error(error)
      console.log(
        `🐛 Whoops! It looks like the decorator script wasn't able to parse the dereferenced schema in file ${filename}. A recent change may not yet be supported by the decorator. Please reach out in the #docs-engineering slack channel for help.`,
      )
      process.exit(1)
    }
  }
}
