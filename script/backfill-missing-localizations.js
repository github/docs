#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import walk from 'walk-sync'
import xMkdirp from 'mkdirp'
import languages from '../lib/languages.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const mkdirp = xMkdirp.sync

const dirs = ['content', 'data']

// [start-readme]
//
// This script copies any English files that are missing from the translations directory into the translations directory.
// We only need to run this if problems occur with Crowdin's automatic sync.
//
// [end-readme]

dirs.forEach((dir) => {
  const englishPath = path.join(__dirname, `../${dir}`)
  const filenames = walk(englishPath).filter((filename) => {
    return (
      (filename.endsWith('.yml') || filename.endsWith('.md')) && !filename.endsWith('README.md')
    )
  })

  filenames.forEach((filename) => {
    Object.values(languages).forEach((language) => {
      if (language.code === 'en') return
      const fullPath = path.join(__dirname, '..', language.dir, dir, filename)
      if (!fs.existsSync(fullPath)) {
        console.log('missing', fullPath)
        const englishFullPath = path.join(__dirname, '..', dir, filename)
        mkdirp(path.dirname(fullPath))
        fs.writeFileSync(fullPath, fs.readFileSync(englishFullPath))
      }
    })
  })
})
