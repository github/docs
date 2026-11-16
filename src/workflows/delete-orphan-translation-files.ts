import fs from 'fs'
import path from 'path'

import { program } from 'commander'
import walkFiles from '@/workflows/walk-files'
import { ROOT } from '@/frame/lib/constants'

// Deletes orphaned translation content files from a checked-out translation repo.
// It deletes files from the working tree only; it does not stage removals with git rm.
//
// Usage:
//   npm run delete-orphan-translation-files -- /tmp/docs-internal.ja-jp
//
// Use --dry-run to print deletions without removing files. --max defaults to 100
// so one run does not create an oversized PR.

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

// Walk content only. Translated content can still use {% data variables.x %} after English
// deletes data/variables/x.yml, so translated data files may be orphans on purpose.
function getContentAndDataFiles(root: string) {
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
