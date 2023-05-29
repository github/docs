#!/usr/bin/env node

// [start-readme]
//
// A helper that returns an array of files for a given path and file extension.
//
// [end-readme]

import walk from 'walk-sync'

export default function walkFiles(dir, ext, opts = {}) {
  const extensions = Array.isArray(ext) ? ext : [ext]
  const walkSyncOpts = { includeBasePath: true, directories: false }

  return walk(dir, walkSyncOpts)
    .filter((file) => extensions.some((ext) => file.endsWith(ext)) && !file.endsWith('README.md'))
    .filter((file) => (opts.includeEarlyAccess ? file : !file.includes('/early-access/')))
}
