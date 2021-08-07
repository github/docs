#!/usr/bin/env node

// [start-readme]
//
// This script copies any English files that are missing from the translations directory into the translations directory.
// We only need to run this if problems occur with Crowdin's automatic sync.
//
// [end-readme]

import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import walk from 'walk-sync'
import mkdirp from 'mkdirp'
import languages from '../lib/languages.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dirs = ['content', 'data']

for (const dir of dirs) {
  const englishPath = path.join(__dirname, `../${dir}`)
  const filenames = walk(englishPath).filter((filename) => {
    return (
      (filename.endsWith('.yml') || filename.endsWith('.md')) && !filename.endsWith('README.md')
    )
  })

  for (const filename of filenames) {
    for (const language of Object.values(languages)) {
      if (language.code === 'en') return
      const fullPath = path.join(__dirname, '..', language.dir, dir, filename)
      if (!fs.existsSync(fullPath)) {
        console.log('missing', fullPath)
        const englishFullPath = path.join(__dirname, '..', dir, filename)
        await mkdirp(path.dirname(fullPath))
        fs.writeFileSync(fullPath, fs.readFileSync(englishFullPath))
      }
    }
  }
}
