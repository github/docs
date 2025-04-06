/**
 * This script is used to analyze posted survey comments in a CSV file.
 * The CSV file is expected to have come from the Azure Data Explorer
 * after having queries the `docs_v0_survey_event` table.
 *
 *
 */

import fs from 'node:fs'
import util from 'node:util'

import chalk from 'chalk'
import { parse } from 'csv-parse'
import { program } from 'commander'

import { SIGNAL_RATINGS } from '../analyze-comment'

type Options = {
  outputFile: string
  limit: string
  random: boolean
}
program
  .description('Analyze survey comments in a CSV file')
  .option('-o, --output-file <path>', 'path to the output', 'stdout')
  .option('--limit <number>', 'limit number of records analyzed', 'Infinity')
  .option(
    '--random',
    'randomize the lines analyzed (useful when limit is less than size of CSV)',
    false,
  )
  .argument('<csv-files...>', 'path to the exported CSV file')
  .action(main)

program.parse(process.argv)

async function main(csvFile: string[], options: Options) {
  for (const file of csvFile) {
    await analyzeFile(file, options)
  }
}

type Record = {
  [key: string]: string | number
}

async function analyzeFile(csvFile: string, options: Options) {
  const parser = fs.createReadStream(csvFile).pipe(
    parse({
      // Needed when parsing CSVs from the Azure Data Explorer
      bom: true,
    }),
  )
  let headers: null | string[] = null
  const records: Record[] = []
  for await (const record of parser) {
    if (headers === null) {
      headers = record as string[]
    } else {
      const obj: {
        [key: string]: string
      } = {}
      for (let i = 0; i < headers.length; i++) {
        obj[headers[i]] = record[i]
      }
      records.push(obj)
    }
  }

  const limit = parseInt(options.limit)
  if (options.random) {
    records.sort(() => Math.random() - 0.5)
  }
  for (const record of records.slice(0, limit)) {
    const language = record.survey_comment_language || 'en'
    let rating = 1.0
    let first = true
    for (const { reduction, name, validator } of SIGNAL_RATINGS) {
      const hit = validator(record.survey_comment, language)
      if (hit) {
        rating -= reduction
        if (first) {
          console.log(util.inspect(record.survey_comment))
          first = false
        }
        console.log(name.padEnd(10), reduction)
        if (rating <= 0.0) {
          break
        }
      }
    }
    if (rating !== 1.0) {
      console.log(chalk.yellow(`Rating: ${rating}`))
    } else {
      console.log(chalk.green('No rating reduction'))
    }

    console.log('\n')
  }
}
