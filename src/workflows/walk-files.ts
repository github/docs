#!/usr/bin/env node

// [start-readme]
//
// A helper that returns an array of files for a given path and file extension.
//
// [end-readme]

import walk from 'walk-sync'
import fs from 'fs'

export default function walkFiles(
  dir: string,
  ext: string | string[],
  opts: Record<string, any> = {},
) {
  const extensions = Array.isArray(ext) ? ext : [ext]
  const walkSyncOpts = { includeBasePath: true, directories: false }

  return walk(dir, walkSyncOpts)
    .filter((file) => extensions.some((ext) => file.endsWith(ext)) && !file.endsWith('README.md'))
    .filter((file) => (opts.includeEarlyAccess ? file : !file.includes('/early-access/')))
}

export function readFiles(dir = 'content', ext = 'md', opts = {}) {
  const paths = walkFiles(dir, ext, opts)
  return paths.map((path) => [path, fs.readFileSync(path, 'utf8')])
}

export function filterFiles(files: [path: string, file: string][], fn: Function) {
  return files.filter(([path, file]) => fn(path, file))
}

export function withFiles(files: [path: string, file: string][], fn: Function) {
  return files.map(([path, file]) => [path, fn(path, file)])
}

export function writeFiles(files: [path: string, file: string][]) {
  return files.map(([path, file]) => fs.writeFileSync(path, file))
}
