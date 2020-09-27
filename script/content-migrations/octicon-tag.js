#!/usr/bin/env node

const path = require('path')
const walk = require('walk-sync')
const replace = require('replace')

const FINDER = /{{\s?octicon-([a-z-]+)(\s[\w\s\d-]+)?\s?}}/g

async function rewriteFiles (dir) {
  const files = walk(dir, { includeBasePath: true })
  replace({
    regex: FINDER,
    replacement: (match, p1, p2) => {
      if (p2) {
        return `{% octicon "${p1}" aria-label="${p2.trim()}" %}`
      } else {
        return `{% octicon "${p1}" %}`
      }
    },
    paths: files,
    recursive: true
  })
}

async function main () {
  const dirs = [
    path.join(__dirname, '../../content'),
    path.join(__dirname, '../../data'),
    path.join(__dirname, '../../translations')
  ]

  for (const dir of dirs) {
    await rewriteFiles(dir)
  }
}

main()
  .catch(console.error)
  .finally(() => console.log('Done!'))
