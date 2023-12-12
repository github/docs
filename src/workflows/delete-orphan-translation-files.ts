#!/usr/bin/env node

/**
 * This script will delete files from a translation repo of files that
 * only exist there and not "here". Here being the docs repo.
 * It will only look at *.md files in `content/` and
 * only look at *.md and *.yml files in `data/`.
 *
 * If executed with `--dry-run` it will only print what it would delete.
 *
 * To avoid deleting too many files at once, which can make PRs too big,
 * there's a `--max <number>` options which is defaulted to 100.
 *
 * To run this locally, check out a translation repo and then run it like this:
 *
 *    git clone git@github.com:github/docs-internal.ja-jp.git /tmp/docs-internal.ja-jp
 *    npm run delete-orphan-translation-files -- /tmp/docs-internal.ja-jp
 *
 * Note that it doesn't execute `git rm ...` for you. Just regular
 * file deletion. It's up to you now to commit and push.
 */

import fs from 'fs'
import path from 'path'

import { program } from 'commander'
import walkFiles from 'src/workflows/walk-files.js'
import { ROOT } from 'src/frame/lib/constants.js'

program
  .description('Delete orphan translation files')
  .option('--dry-run', 'Just print what it would delete')
  .option('--max <number>', 'Max. number of files to delete', '100')
  .argument('<repo-root>', 'path to repo root')
  .parse(process.argv)

const opts = program.opts()

type Options = {
  dryRun: boolean
  max: number
}
main(program.args[0], {
  dryRun: Boolean(opts.dryRun),
  max: parseInt(opts.max, 10),
})

function main(root: string, options: Options) {
  let deleted = 0
  let countInSync = 0
  let countOrphan = 0
  for (const filePath of getContentAndDataFiles(root)) {
    const relPath = path.relative(root, filePath)
    if (!fs.existsSync(path.join(ROOT, relPath))) {
      countOrphan++
      if (deleted < options.max) {
        if (options.dryRun) {
          console.log('DELETE', filePath)
        } else {
          fs.rmSync(filePath)
          console.log('DELETED', filePath)
        }
        deleted++

        if (deleted >= options.max) {
          console.log(`Max. number (${options.max}) of files deleted`)
        }
      }
    } else {
      countInSync++
    }
  }
  console.log(`In conclusion, deleted ${deleted.toLocaleString()} files.`)
  console.log(
    `There are ${countInSync.toLocaleString()} files in sync and ${countOrphan.toLocaleString()} orphan files in ${root}`,
  )
}

function getContentAndDataFiles(root: string) {
  return [
    ...walkFiles(path.join(root, 'content'), ['.md']),
    ...walkFiles(path.join(root, 'data'), ['.md', '.yml']),
  ]
}
