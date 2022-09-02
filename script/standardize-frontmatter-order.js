#!/usr/bin/env node

// [start-readme]
//
// Run this script to standardize frontmatter fields in all content files,
// per the order:
// - title
// - intro
// - product callout
// - productVersion
// - map topic status
// - hidden status
// - layout
// - redirect
//
// [end-readme]

import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import walk from 'walk-sync'
import matter from 'gray-matter'
import { schema } from '../lib/frontmatter.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const properties = Object.keys(schema.properties)
const contentDir = path.join(__dirname, '../content')

const contentFiles = walk(contentDir, { includeBasePath: true }).filter(
  (relativePath) => relativePath.endsWith('.md') && !relativePath.includes('README')
)

contentFiles.forEach((fullPath) => {
  const { content, data } = matter(fs.readFileSync(fullPath, 'utf8'))
  const newData = {}
  properties.forEach((prop) => {
    if (data[prop]) newData[prop] = data[prop]
  })

  fs.writeFileSync(fullPath, matter.stringify(content, newData, { lineWidth: 10000 }))
})
