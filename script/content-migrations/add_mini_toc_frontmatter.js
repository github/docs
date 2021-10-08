#!/usr/bin/env node

// [start-readme]
//
// Run this one time script to add max mini toc
// to rest reference documentation
//
// [end-readme]

import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import walk from 'walk-sync'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const re = /^---\n/gm

async function updateMdHeaders(dir) {
  walk(dir, { includeBasePath: true, directories: false })
    .filter(
      (file) =>
        !file.endsWith('README.md') &&
        !file.endsWith('index.md') &&
        file.includes('content/rest/reference')
    )
    .forEach((file) => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) return console.error(err)
        const matchHeader = data.match(re)[1]
        let result
        let t = 0
        if (matchHeader) {
          result = data.replace(re, function (match) {
            t++
            return t === 2 ? 'miniTocMaxHeadingLevel: 3\n---\n' : match
          })
        }
        fs.writeFile(file, result, 'utf8', function (err) {
          if (err) return console.log(err)
        })
      })
    })
}

async function main() {
  await updateMdHeaders(path.join(__dirname, '../../content'))
}

main()
  .catch(console.error)
  .finally(() => console.log('Done'))
