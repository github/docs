#!/usr/bin/env node

// [start-readme]
//
// This script turns a Google Sheets CSV spreadsheet into a YAML file.
//
// [end-readme]

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const inputFile = path.join(__dirname, '../data/glossary.yml')

const glossary = yaml.safeLoad(fs.readFileSync(inputFile, 'utf8'))

console.log(glossary)
const external = []
const internal = []
glossary.forEach(term => {
  if (term.internal) {
    delete term.internal
    internal.push(term)
  } else {
    external.push(term)
  }
})

fs.writeFileSync(
  path.join(__dirname, '../data/glossaries/internal.yml'),
  yaml.safeDump(internal)
)

fs.writeFileSync(
  path.join(__dirname, '../data/glossaries/external.yml'),
  yaml.safeDump(external)
)
