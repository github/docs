#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const flat = require('flat')
const { get } = require('lodash')
const walk = require('walk-sync').entries
const yaml = require('js-yaml')
const mkdirp = require('mkdirp').sync
const languages = require('../lib/languages')

// [start-readme]
//
// This script moves reusables out of YAML files into individual Markdown files.
//
// [end-readme]

// move reusables for each language
Object.values(languages).forEach(({ dir }) => move(dir))

function move (dir) {
  const fullDir = path.join(__dirname, '..', dir, 'data/reusables')
  console.log('removing', fullDir)
  walk(fullDir)
    .filter(entry => entry.relativePath.endsWith('yml'))
    .forEach(file => {
      const fullPath = path.join(file.basePath, file.relativePath)
      const fileContent = fs.readFileSync(fullPath, 'utf8')
      const data = flat(yaml.safeLoad(fileContent))

      Object.keys(data).forEach(key => {
        const value = get(data, key)
        const markdownFilename = path.join(fullPath.replace('.yml', ''), `${key}.md`)
        mkdirp(path.dirname(markdownFilename))
        fs.writeFileSync(markdownFilename, value)
        console.log('created new markdown file ', path.relative(file.basePath, markdownFilename))
      })
    })
}
