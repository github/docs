// Finds the content/github path for an old dotcom path.
// content/github no longer exists, so this script currently fails.

import assert from 'assert'
import { last } from 'lodash-es'
import fs from 'fs'
import { execSync } from 'child_process'

const markdownExtension = '.md'
const markdownRegex = new RegExp(`${markdownExtension}$`, 'm')

const newDotcomDir = 'content/github'

const oldPath: string = process.argv.slice(2)[0]
assert(oldPath, 'must provide old dotcom path like "foo" or "articles/foo"')

let filename: string = oldPath

if (filename.includes('/')) filename = last(filename.split('/')) as string

const categoryDir = `${newDotcomDir}/${filename.replace(markdownRegex, '')}`

if (fs.existsSync(categoryDir)) {
  console.log(`New path:\n${categoryDir}/`)
  process.exit(0)
}

if (!filename.endsWith(markdownExtension)) filename = filename + markdownExtension

const newPath: string = execSync(`find ${newDotcomDir} -name ${filename}`).toString()

if (!newPath) {
  console.log(`Cannot find new path for "${oldPath}". Check the name and try again.\n`)
  process.exit(0)
}

console.log(`New path:\n${newPath}`)
