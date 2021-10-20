#!/usr/bin/env node

// [start-readme]
//
// This script moves reusables out of YAML files into individual Markdown files.
//
// [end-readme]

import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'
import flat from 'flat'
import { get } from 'lodash-es'
import WalkSync from 'walk-sync'
import yaml from 'js-yaml'
import mkdirp from 'mkdirp'
import languages from '../lib/languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const walk = WalkSync.entries

// move reusables for each language
Object.values(languages).map(async ({ dir }) => move(dir))

async function move(dir) {
  const fullDir = path.join(__dirname, '..', dir, 'data/reusables')
  console.log('removing', fullDir)
  const files = walk(fullDir).filter((entry) => entry.relativePath.endsWith('yml'))

  for (const file of files) {
    const fullPath = path.join(file.basePath, file.relativePath)
    const fileContent = await fs.readFile(fullPath, 'utf8')
    const data = flat(yaml.load(fileContent))

    for (const key of Object.keys(data)) {
      const value = get(data, key)
      const markdownFilename = path.join(fullPath.replace('.yml', ''), `${key}.md`)
      await mkdirp(path.dirname(markdownFilename))
      await fs.writeFile(markdownFilename, value)
      console.log('created new markdown file ', path.relative(file.basePath, markdownFilename))
    }
  }
}
