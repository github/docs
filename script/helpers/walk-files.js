#!/usr/bin/env node

// [start-readme]
//
// A helper that returns an array of files for a given path and file extension.
//
// [end-readme]

import path from 'path'
import walk from 'walk-sync'

export default function walkFiles(dir, ext, opts = {}) {
  const dirPath = path.posix.join(process.cwd(), dir)
  const walkSyncOpts = { includeBasePath: true, directories: false }

  return walk(dirPath, walkSyncOpts)
    .filter((file) => file.endsWith(ext) && !file.endsWith('README.md'))
    .filter((file) => (opts.includeEarlyAccess ? file : !file.includes('/early-access/')))
}
