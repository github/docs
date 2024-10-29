/**
 * See docstring in index.ts for more information about how to use this script.
 */
import fs from 'fs'

import chalk from 'chalk'

import { processFile } from './lib'

type Options = {
  dryRun: boolean
}

export async function convert(files: string[], options: Options) {
  if (!files.length) {
    console.error(chalk.red('No files specified'))
    process.exit(1)
  }

  for (const file of files) {
    const info = fs.statSync(file)
    if (info.isDirectory()) {
      console.error(chalk.red('Directories are currently not supported. Only files.'))
      process.exit(1)
    }
  }

  for (const file of files) {
    console.log(chalk.grey(`Processing file ${chalk.bold(file)}`))
    const content = fs.readFileSync(file, 'utf8')
    const newContent = await processFile(content)
    if (content !== newContent) {
      if (options.dryRun) {
        console.log(chalk.green('Would have written changes to disk'))
      } else {
        console.log(chalk.green(`Updating ${chalk.bold(file)}`))
        fs.writeFileSync(file, newContent, 'utf-8')
      }
    } else {
      console.log(chalk.yellow('No changes needed'))
    }
  }
}
