#!/usr/bin/env node

const path = require('path')
const walk = require('walk-sync')
const replace = require('replace')

const FINDER = /{{\s?site\.data\.([a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]+)+)\s*}}/g
const REPLACER = '{% data $1 %}'

async function rewriteFiles (dir) {
  const files = walk(dir, { includeBasePath: true })
  replace({
    regex: FINDER,
    replacement: REPLACER,
    paths: files,
    recursive: true
  })
}

async function main () {
  const dirs = [
    path.join(__dirname, '../../content'),
    path.join(__dirname, '../../data'),
    path.join(__dirname, '../../translations'),
    path.join(__dirname, '../../includes'),
    path.join(__dirname, '../../layouts')
  ]

  for (const dir of dirs) {
    await rewriteFiles(dir)
  }
}

main()
  .catch(console.error)
  .finally(() => console.log('Done!'))
