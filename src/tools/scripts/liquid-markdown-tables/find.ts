import fs from 'fs'

import chalk from 'chalk'
import walk from 'walk-sync'

import { processFile } from './lib'

type Options = {
  filter?: string[]
}

export async function find(options: Options) {
  const files = [
    ...walk('data', {
      includeBasePath: true,
      globs: ['**/*.md'],
      ignore: ['**/README.md'],
    }),
    ...walk('content', {
      includeBasePath: true,
      globs: ['**/*.md'],
      ignore: ['**/README.md'],
    }),
  ].filter((filePath) => {
    if (options.filter && options.filter.length) {
      return options.filter.some((filter) => filePath.includes(filter))
    }
    return true
  })
  console.log(chalk.grey(`${chalk.bold(files.length.toLocaleString())} files to search.`))

  const found: string[] = []
  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8')
    const newContent = await processFile(content)
    if (content !== newContent) {
      console.log(chalk.green(filePath))
      found.push(filePath)
    }
  }
  console.log('\n')
  console.log(
    chalk.grey(`Found ${chalk.bold(found.length.toLocaleString())} files that can be converted.`),
  )
}
