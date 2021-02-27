#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')

// iterate through enterprise images from most recent to oldest
// for each asset and move any images from /assets/enterprise,
// with file paths that don't already exist, to the /assets/images
// directory. Then the existing Markdown will just work.

async function main () {
  const directories = [
    path.join('assets/enterprise/3.0'),
    path.join('assets/enterprise/github-ae'),
    path.join('assets/enterprise/2.22'),
    path.join('assets/enterprise/2.21'),
    path.join('assets/enterprise/2.20')
  ]

  for (const directory of directories) {
    const files = walk(path.join(process.cwd(), directory), { includeBasePath: true, directories: false })

    for (const file of files) {
      // get the /assets/images path from the enterprise asset path
      const enterpriseRegex = /\/assets\/enterprise\/(2\.20|2\.21|2\.22|3\.0|github-ae)/
      const existingFileToCompare = file.replace(enterpriseRegex, '')

      if (!fs.existsSync(existingFileToCompare)) {
        const newDirectoryName = path.dirname(existingFileToCompare)
        if (!fs.existsSync(newDirectoryName)) {
          fs.mkdirSync(newDirectoryName, { recursive: true })
        }
        fs.renameSync(file, existingFileToCompare)
      }
    }
  }
}

main()
  .catch(console.error)
  .finally(() => console.log('Done!'))
