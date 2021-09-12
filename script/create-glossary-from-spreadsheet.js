#!/usr/bin/env node

// [start-readme]
//
// This script turns a Google Sheets CSV spreadsheet into a YAML file.
//
// [end-readme]

import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'
import yaml from 'js-yaml'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const inputFile = path.join(__dirname, '../data/glossary.yml')

const glossary = yaml.load(await fs.readFile(inputFile, 'utf8'))

console.log(glossary)
const external = []
const internal = []
glossary.forEach((term) => {
  if (term.internal) {
    delete term.internal
    internal.push(term)
  } else {
    external.push(term)
  }
})

await fs.writeFile(path.join(__dirname, '../data/glossaries/internal.yml'), yaml.dump(internal))

await fs.writeFile(path.join(__dirname, '../data/glossaries/external.yml'), yaml.dump(external))
