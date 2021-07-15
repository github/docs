#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import flat from 'flat'
import { get } from 'lodash-es'
import xWalkSync from 'walk-sync'
import yaml from 'js-yaml'
import xMkdirp from 'mkdirp'
import languages from '../lib/languages.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const walk = xWalkSync.entries
const mkdirp = xMkdirp.sync

// [start-readme]
//
// This script moves reusables out of YAML files into individual Markdown files.
//
// [end-readme]

// move reusables for each language
Object.values(languages).forEach(({ dir }) => move(dir))

function move(dir) {
  const fullDir = path.join(__dirname, '..', dir, 'data/reusables')
  console.log('removing', fullDir)
  walk(fullDir)
    .filter((entry) => entry.relativePath.endsWith('yml'))
    .forEach((file) => {
      const fullPath = path.join(file.basePath, file.relativePath)
      const fileContent = fs.readFileSync(fullPath, 'utf8')
      const data = flat(yaml.load(fileContent))

      Object.keys(data).forEach((key) => {
        const value = get(data, key)
        const markdownFilename = path.join(fullPath.replace('.yml', ''), `${key}.md`)
        mkdirp(path.dirname(markdownFilename))
        fs.writeFileSync(markdownFilename, value)
        console.log('created new markdown file ', path.relative(file.basePath, markdownFilename))
      })
    })
}
