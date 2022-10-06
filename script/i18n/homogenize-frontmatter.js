#!/usr/bin/env node

// [start-readme]
//
// Run this script to fix known frontmatter errors by copying values from english file
// Translatable properties are designated in the frontmatter JSON schema
//
// [end-readme]

import path from 'path'
import fs from 'fs/promises'
import matter from 'gray-matter'
import walk from 'walk-sync'
import fm from '../../lib/frontmatter.js'

// Run!
main()

async function main() {
  const translatedMarkdownFiles = walk('translations')
    .filter((filename) => {
      return (
        filename.includes('/content/') &&
        filename.endsWith('.md') &&
        !filename.endsWith('README.md')
      )
    })
    .map((filename) => `translations/${filename}`)

  console.log(
    (
      await Promise.all(
        translatedMarkdownFiles.map(async (relPath) =>
          updateTranslatedMarkdownFile(relPath).catch((e) => `Error in ${relPath}: ${e.message}`)
        )
      )
    )
      .filter(Boolean)
      .join('\n')
  )
}

async function extractFrontmatter(path) {
  const fileContents = await fs.readFile(path, 'utf8')
  return fm(fileContents)
}

async function updateTranslatedMarkdownFile(relPath) {
  // find the corresponding english file by removing the first 2 path segments: /translations/<language code>
  const engAbsPath = relPath.split(path.sep).slice(2).join(path.sep)

  // Load frontmatter from the source english file
  let englishFrontmatter
  try {
    englishFrontmatter = await extractFrontmatter(engAbsPath)
  } catch {
    // This happens when an English file has been moved or deleted and translations are not in sync.
    // It does mean this script will not homogenous those translated files, but the docs site does not
    // load translated files that don't correlate to an English file, so those translated files can't break things.
    // return `${relPath}: English file does not exist: ${engAbsPath}`
    return // silence
  }

  const localisedFrontmatter = await extractFrontmatter(relPath)
  if (!localisedFrontmatter) return `${relPath}: No localised frontmatter`

  // Look for differences between the english and localised non-translatable properties
  let overwroteSomething = false
  for (const prop in localisedFrontmatter.data) {
    if (
      !fm.schema.properties[prop].translatable &&
      englishFrontmatter.data[prop] &&
      localisedFrontmatter.data[prop] !== englishFrontmatter.data[prop]
    ) {
      localisedFrontmatter.data[prop] = englishFrontmatter.data[prop]
      overwroteSomething = true
    }
  }

  // rewrite the localised file, if it changed
  if (overwroteSomething) {
    const toWrite = matter.stringify(localisedFrontmatter.content, localisedFrontmatter.data, {
      lineWidth: 10000,
      forceQuotes: true,
    })
    await fs.writeFile(relPath, toWrite)

    // return `${relPath}: updated`
    // silence
  }
}
