#!/usr/bin/env node

// [start-readme]
//
// Run this one-time script to convert `if <feature name>` Liquid tags
// to `ifversion <feature name>`.
//
// [end-readme]

import fs from 'fs'
import walkFiles from '../helpers/walk-files.js'

const allFiles = walkFiles('content', '.md')
  .concat(walkFiles('data', ['.yml', '.md']))
  // We need to update translations files directly so the new tests don't fail on them.
  .concat(walkFiles('translations', ['.yml', '.md']))
  // GraphQL content files have some non-FBV if statements that we don't want to change.
  // Fortunately they do not include any FBV if statements, so we can just ignore the whole dir.
  .filter((file) => !file.includes('/content/graphql/'))

allFiles.forEach((file) => {
  const fileContents = fs.readFileSync(file, 'utf8')
  const newContents = fileContents.replace(/({%-?\s+?)if\s/g, '$1ifversion ')
  fs.writeFileSync(file, newContents)
})
