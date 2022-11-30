#!/usr/bin/env node

const path = require('path')
const walk = require('walk-sync')
const replace = require('replace')

const FINDER = /{{\s?([#/])([a-z-]+)?\s?}}/g

async function rewriteFiles (dir) {
  const files = walk(dir, { includeBasePath: true })
  replace({
    regex: FINDER,
    replacement: (match, p1, p2) => {
      if (p1 === '#') {
        // The starting tag, like {{#note}}
        return `{% ${p2} %}`
      } else if (p1 === '/') {
        // The ending tag, like {{/note}}
        return `{% end${p2} %}`
      } else {
        throw new Error(`Invalid prefix ${p1} found`)
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
