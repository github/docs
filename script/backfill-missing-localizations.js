#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const mkdirp = require('mkdirp').sync
const languages = require('../lib/languages')

const dirs = ['content', 'data']

// [start-readme]
//
// This script copies any English files that are missing from the translations directory into the translations directory.
// We only need to run this if problems occur with Crowdin's automatic sync.
//
// [end-readme]

dirs.forEach(dir => {
  const englishPath = path.join(__dirname, `../${dir}`)
  const filenames = walk(englishPath)
    .filter(filename => {
      return (filename.endsWith('.yml') || filename.endsWith('.md')) &&
        !filename.endsWith('README.md')
    })

  filenames.forEach(filename => {
    Object.values(languages).forEach(language => {
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
