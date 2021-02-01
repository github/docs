#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const matter = require('gray-matter')
const { schema } = require('../lib/frontmatter')
const properties = Object.keys(schema.properties)
const contentDir = path.join(__dirname, '../content')

const contentFiles = walk(contentDir, { includeBasePath: true })
  .filter(relativePath => relativePath.endsWith('.md') && !relativePath.includes('README'))

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

contentFiles.forEach(fullPath => {
  const { content, data } = matter(fs.readFileSync(fullPath, 'utf8'))
  const newData = {}
  properties.forEach(prop => {
    if (data[prop]) newData[prop] = data[prop]
  })

  fs.writeFileSync(fullPath, matter.stringify(content, newData, { lineWidth: 10000 }))
})
