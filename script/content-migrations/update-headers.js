#!/usr/bin/env node

// [start-readme]
//
// Run this one time script to update headers for accessibility
// Changing H3 to H2, H4 to H3, H5 to H4, and H6 to H5
//
// [end-readme]

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')

async function updateMdHeaders (dir) {
  walk(dir, { includeBasePath: true, directories: false })
    .filter(file => !file.endsWith('README.md'))
    .forEach(file => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) return console.error(err)

        const result = data
          .replace(/^### /gm, '## ')
          .replace(/^#### /gm, '### ')
          .replace(/^##### /gm, '#### ')
          .replace(/^###### /gm, '##### ')

        fs.writeFile(file, result, 'utf8', function (err) {
          if (err) return console.log(err)
        })
      })
    })
}

async function main () {
  const mdDirPaths = [
    path.join(__dirname, '../../content'),
    path.join(__dirname, '../../data/reusables')
  ]

  for (const dir of mdDirPaths) {
    await updateMdHeaders(dir)
  }
}

main()
  .catch(console.error)
  .finally(() => console.log('Done'))
