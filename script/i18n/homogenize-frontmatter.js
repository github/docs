#!/usr/bin/env node

// [start-readme]
//
// Run this script to fix known frontmatter errors by copying values from english file
// Translatable properties are designated in the frontmatter JSON schema
//
// [end-readme]

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const readFileAsync = require('../../lib/readfile-async')
const fm = require('../../lib/frontmatter')
const matter = require('gray-matter')

const extractFrontmatter = async (path) => {
  const fileContents = await readFileAsync(path, 'utf8')
  return fm(fileContents)
}

// Find all content files that differ from the default branch
// TODO: make sure this will work in an Actions workflow
const cmd = 'git -c diff.renameLimit=10000 diff --name-only origin/main'
const changedFilesRelPaths = execSync(cmd)
  .toString()
  .split('\n')
  .filter(filename => {
    return filename.startsWith('translations/') &&
    filename.includes('/content/') &&
    !filename.endsWith('README.md')
  })

changedFilesRelPaths.forEach(async (relPath) => {
  const localisedAbsPath = path.join(__dirname, '../..', relPath)
  // find the corresponding english file by removing the first 2 path segments: /translations/<language code>
  const engAbsPath = path.join(__dirname, '../..', relPath.split(path.sep).slice(2).join(path.sep))

  const localisedFrontmatter = await extractFrontmatter(localisedAbsPath)
  if (!localisedFrontmatter) return

  // Load frontmatter from the source english file
  const englishFrontmatter = await extractFrontmatter(engAbsPath)

  // Look for differences between the english and localised non-translatable properties
  let overWroteSomething = false
  for (const prop in englishFrontmatter.data) {
    if (!fm.schema.properties[prop].translatable && localisedFrontmatter.data[prop] !== englishFrontmatter.data[prop]) {
      localisedFrontmatter.data[prop] = englishFrontmatter.data[prop]
      overWroteSomething = true
    }
  }

  // rewrite the localised file, if it changed
  if (overWroteSomething) {
    const toWrite = matter.stringify(localisedFrontmatter.content, localisedFrontmatter.data, { lineWidth: 10000, forceQuotes: true })
    fs.writeFileSync(localisedAbsPath, toWrite)
  }
})
