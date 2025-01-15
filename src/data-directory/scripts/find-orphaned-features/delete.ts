import fs from 'fs'
import path from 'path'

import chalk from 'chalk'
import languages from '@/languages/lib/languages.js'

type Options = {
  verbose?: boolean
  max: number
}

export async function deleteOrphans(filePath: string, options: Options) {
  const orphans = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  if (!Array.isArray(orphans)) {
    throw new Error(`Expected an array of orphans in ${filePath}`)
  }
  let count = 0
  if (options.verbose) {
    console.log(chalk.yellow(`${orphans.length} orphans found in ${filePath}`))
    if (orphans.length > options.max) {
      console.log(chalk.yellow(`Only deleting the first ${options.max} orphans`))
    }
  }
  let countDeletions = 0
  for (const orphan of orphans.slice(0, options.max)) {
    count++
    const absolutePath = path.join(languages.en.dir, orphan)
    if (!fs.existsSync(absolutePath)) {
      throw new Error(`File does not exist: ${absolutePath} (number ${count} in ${filePath})`)
    }
    if (options.verbose) {
      console.log(chalk.green(`Deleting ${absolutePath}`))
    }
    fs.unlinkSync(absolutePath)
    countDeletions++
  }
  if (countDeletions > 0) {
    console.log(chalk.green(`Deleted ${countDeletions} orphans`))
  } else {
    console.log(chalk.yellow(`Deleted no orphans`))
  }
}
