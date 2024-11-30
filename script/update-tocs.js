#!/usr/bin/env node

// [start-readme]
//
// This script creates or updates an index.md file for a given directory.
// It will add `children` frontmatter in alphabetical order and create versions: '*'.
// It also prints a helpful message to update those values manually if needed.
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import { sentenceCase } from 'change-case'
import { program } from 'commander'
import readFrontmatter from '../lib/read-frontmatter.js'

program
  .description('Create or update an index.md file for a provided content directory')
  .requiredOption('-d, --directory <content directory>')
  .parse(process.argv)

const directory = path.posix.join(process.cwd(), program.opts().directory)

if (!fs.existsSync(directory)) {
  console.error(`Error! ${directory} not found. Make sure directory name starts with "content/".`)
  process.exit(1)
}

// Run it! This function may run recursively.
updateOrCreateToc(directory)

console.log(
  'Done! Review the new or updated index.md files and update the 1) order of the children 2) versions as needed'
)

function updateOrCreateToc(directory) {
  const children = fs.readdirSync(directory).filter((subpath) => !subpath.endsWith('index.md'))
  if (!children.length) return

  const tocFile = path.posix.join(directory, 'index.md')

  let content, data

  // If the index.md file already exists, read it (to be updated later).
  if (fs.existsSync(tocFile)) {
    const parsed = readFrontmatter(fs.readFileSync(tocFile, 'utf8'))
    content = parsed.content
    data = parsed.data
  }
  // If the index.md file does not exist, create it.
  else {
    content = ''
    data = {
      title: sentenceCase(path.basename(directory)), // fake the title of the index.md from the directory name
      versions: '*', // default to all versions
    }
  }

  // Add the children - this will default to the alphabetical list of files in the directory.
  data.children = children.map((child) => `/${child.replace('.md', '')}`)

  // Write the file.
  const newContents = readFrontmatter.stringify(content, data, { lineWidth: 10000 })
  fs.writeFileSync(tocFile, newContents)

  // Process any child directories recursively.
  children.forEach((child) => {
    if (child.endsWith('.md')) return
    updateOrCreateToc(path.posix.join(directory, child))
  })
}
