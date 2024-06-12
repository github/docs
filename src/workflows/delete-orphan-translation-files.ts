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
  const deleted: number[] = []
  const inSync: number[] = []
  const orphan: number[] = []
  for (const filePath of getContentAndDataFiles(root)) {
    const relPath = path.relative(root, filePath)
    const size = fs.statSync(filePath).size
    if (!fs.existsSync(path.join(ROOT, relPath))) {
      orphan.push(size)
      if (deleted.length < options.max) {
        if (options.dryRun) {
          console.log('DELETE', filePath)
        } else {
          fs.rmSync(filePath)
          console.log('DELETED', filePath)
        }
        deleted.push(size)

        if (deleted.length >= options.max) {
          console.log(`Max. number (${options.max}) of files deleted`)
        }
      }
    } else {
      inSync.push(size)
    }
  }
  const sumDeleted = deleted.reduce((a, b) => a + b, 0)
  console.log(
    `In conclusion, deleted ${deleted.length.toLocaleString()} files (${formatFileSize(
      sumDeleted,
    )}).`,
  )
  const sumInSync = inSync.reduce((a, b) => a + b, 0)
  const sumOrphan = orphan.reduce((a, b) => a + b, 0)
  console.log(
    `There are ${inSync.length.toLocaleString()} files (${formatFileSize(
      sumInSync,
    )}) in sync and ${orphan.length.toLocaleString()} orphan files (${formatFileSize(
      sumOrphan,
    )}) in ${root}`,
  )
}

function getContentAndDataFiles(root: string) {
  // The reason we're only looking at content files, and not data files,
  // is because data files can be *included* in content files.
  // Best illustrated with an imaginary example:
  //
  // Suppose there exists, in English, a `content/some-page.md` and
  // a `data/variables/some-var.yml`.
  // The English content contains: `{% data variables.some-var.some-thing %}`
  // Soon enough, this is present in the translations too.
  // Then, the English writer decides to stop referencing that variable
  // in `content/some-page.md`. And additionally, since no content references
  // the file, they also decide to `git rm data/variables/some-var.yml`.
  // At this point, there's technically an "orphan" file in the translation
  // repo that doesn't have an equivalent in the English repo. But! The
  // translation's copy of `content/some-page.md` might still *refer*
  // to `{% data variables.some-var.some-thing %}` since it hasn't yet
  // picked up that the English content changed.
  //
  // In conclusion, we need to be OK with the data files in translations
  // being potentially "full of orphans" because they might still be
  // referred to the in the content files.
  return walkFiles(path.join(root, 'content'), ['.md'])
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} kB`
  }
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}
