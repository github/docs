#!/usr/bin/env node

// [start-readme]
//
// Pass this script any old dotcom path (e.g., `articles/foo` or `foo.md`) and it
// will output the new path in the content/github directory.
//
// [end-readme]

import assert from 'assert'
import { last } from 'lodash-es'
import fs from 'fs'
import { execSync } from 'child_process'

const markdownExtension = '.md'
const markdownRegex = new RegExp(`${markdownExtension}$`, 'm')

const newDotcomDir = 'content/github'

const oldPath = process.argv.slice(2)[0]
assert(oldPath, 'must provide old dotcom path like "foo" or "articles/foo"')

let filename = oldPath

// get last part of path
if (filename.includes('/')) filename = last(filename.split('/'))

// first check whether name is a category
const categoryDir = `${newDotcomDir}/${filename.replace(markdownRegex, '')}`

if (fs.existsSync(categoryDir)) {
  console.log(`New path:\n${categoryDir}/`)
  process.exit(0)
}

// otherwise add extension and check whether it's a file
if (!filename.endsWith(markdownExtension)) filename = filename + markdownExtension

// run find command
const newPath = execSync(`find ${newDotcomDir} -name ${filename}`).toString()

if (!newPath) {
  console.log(`Cannot find new path for "${oldPath}". Check the name and try again.\n`)
  process.exit(0)
}

console.log(`New path:\n${newPath}`)
