#!/usr/bin/env node

import path from 'path'
import fs from 'fs'
import zlib from 'zlib'
import walk from 'walk-sync'

const DRY_RUN = Boolean(JSON.parse(process.env.DRY_RUN || 'false'))
// Roughly 100KiB means about 25 files at the moment.
// Set this too low and the overheads will be more than the disk and
// network I/O that this intends to serve.
const MIN_GZIP_SIZE = Number(process.env.MIN_GZIP_SIZE || 1024 * 100)

const BROTLI_OPTIONS = {
  params: {
    [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
    [zlib.constants.BROTLI_PARAM_QUALITY]: 6,
  },
}
main()

async function main() {
  compressFromPattern('lib/**/static/**/*.json')
}

async function compressFromPattern(pattern) {
  const glob = pattern.includes('*') ? pattern.split(path.sep).slice(1).join(path.sep) : undefined
  const walkOptions = {
    globs: glob ? [glob] : undefined,
    directories: false,
    includeBasePath: true,
  }
  const root = path.resolve(pattern.includes('*') ? pattern.split(path.sep)[0] : pattern)
  const filePaths = walk(root, walkOptions).filter((filePath) => {
    return fs.statSync(filePath).size > MIN_GZIP_SIZE
  })

  if (!DRY_RUN) {
    console.time(`Compress ${filePaths.length} files`)
    const compressed = await Promise.all(filePaths.map(compressFile))
    console.timeEnd(`Compress ${filePaths.length} files`)

    console.time(`Delete ${compressed.length} files`)
    compressed.forEach((filePath) => fs.unlinkSync(filePath))
    console.timeEnd(`Delete ${compressed.length} files`)
  }
}

function compressFile(filePath) {
  return new Promise((resolve, reject) => {
    const contentStream = fs.createReadStream(filePath)
    const newFilePath = `${filePath}.br`
    const writeStream = fs.createWriteStream(newFilePath)
    const compressor = zlib.createBrotliCompress(BROTLI_OPTIONS)
    contentStream
      .pipe(compressor)
      .pipe(writeStream)
      .on('finish', (err) => {
        if (err) return reject(err)
        resolve(filePath)
      })
  })
}
