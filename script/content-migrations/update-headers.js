#!/usr/bin/env node

// [start-readme]
//
// Run this one time script to update headers for accessibility
// Changing H3 to H2, H4 to H3, H5 to H4, and H6 to H5
//
// [end-readme]

import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import walk from 'walk-sync'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const re = /^#.*\n/gm

async function updateMdHeaders(dir) {
  walk(dir, { includeBasePath: true, directories: false })
    .filter((file) => !file.endsWith('README.md') && !file.includes('content/rest/reference'))
    .forEach((file) => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) return console.error(err)
        const matchHeader = data.match(re)
        let firstHeader = matchHeader ? matchHeader[0].split(' ')[0] : null
        if (firstHeader) {
          for (let index = 1; index < matchHeader.length; index++) {
            const nextHeader = matchHeader[index].split(' ')[0]
            if (nextHeader.length < firstHeader.length && nextHeader.length >= 3) {
              console.log(file)
              break
            }
          }
        }
        if (file.includes('data/reusables/')) {
          if (
            !file.endsWith('data/reusables/actions/actions-group-concurrency.md') &&
            !file.endsWith('data/reusables/github-actions/actions-on-examples.md')
          ) {
            firstHeader = 'reusable-' + firstHeader
          }
        }
        let result
        switch (firstHeader) {
          case '#':
            return
          case '##':
            return
          case '###':
            result = data
              .replace(/^miniTocMaxHeadingLevel: 4/gm, 'miniTocMaxHeadingLevel: 3')
              .replace(/^### /gm, '## ')
              .replace(/^#### /gm, '### ')
              .replace(/^##### /gm, '#### ')
              .replace(/^###### /gm, '##### ')
            break
          case '####':
            result = data
              .replace(/^#### /gm, '## ')
              .replace(/^##### /gm, '### ')
              .replace(/^###### /gm, '#### ')
            break
          case 'reusable-####':
            result = data.replace(/^#### /gm, '### ').replace(/^##### /gm, '#### ')
            break
          case 'reusable-#####':
            result = data.replace(/^##### /gm, '#### ')
            break
          case '#####':
            result = data.replace(/^##### /gm, '### ').replace(/^###### /gm, '#### ')
            break
          default:
            return
        }
        fs.writeFile(file, result, 'utf8', function (err) {
          if (err) return console.log(err)
        })
      })
    })
}

async function main() {
  const mdDirPaths = [
    path.join(__dirname, '../../content'),
    path.join(__dirname, '../../data/reusables'),
  ]

  for (const dir of mdDirPaths) {
    await updateMdHeaders(dir)
  }
}

main()
  .catch(console.error)
  .finally(() => console.log('Done'))
