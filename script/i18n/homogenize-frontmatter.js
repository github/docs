#!/usr/bin/env node

// [start-readme]
//
// Run this script to fix known frontmatter errors by copying values from english file
// Translatable properties are designated in the frontmatter JSON schema
//
// [end-readme]

const fs = require('fs').promises
const path = require('path')
const matter = require('gray-matter')
const walk = require('walk-sync')
const readFileAsync = require('../../lib/readfile-async')
const fm = require('../../lib/frontmatter')

// Run!
main()

async function main () {
  const translationDir = path.posix.join(__dirname, '../../translations')
  const translatedMarkdownFiles = walk(translationDir)
    .filter(filename => {
      return filename.includes('/content/') &&
      filename.endsWith('.md') &&
      !filename.endsWith('README.md')
    })
    .map(filename => `translations/${filename}`)

  console.log(
    (await Promise.all(
      translatedMarkdownFiles
        .map(async relPath => updateTranslatedMarkdownFile(relPath)
          .catch(e => `Error in ${relPath}: ${e.message}`)
        )
    )).filter(Boolean).join('\n')
  )
}

async function extractFrontmatter (path) {
  const fileContents = await readFileAsync(path, 'utf8')
  return fm(fileContents)
}

async function updateTranslatedMarkdownFile (relPath) {
  const localisedAbsPath = path.posix.join(__dirname, '../..', relPath)
  // find the corresponding english file by removing the first 2 path segments: /translations/<language code>
  const engAbsPath = path.posix.join(__dirname, '../..', relPath.split(path.sep).slice(2).join(path.sep))

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

  const localisedFrontmatter = await extractFrontmatter(localisedAbsPath)
  if (!localisedFrontmatter) return `${relPath}: No localised frontmatter`

  // Look for differences between the english and localised non-translatable properties
  let overwroteSomething = false
  for (const prop in localisedFrontmatter.data) {
    if (!fm.schema.properties[prop].translatable && englishFrontmatter.data[prop] && localisedFrontmatter.data[prop] !== englishFrontmatter.data[prop]) {
      localisedFrontmatter.data[prop] = englishFrontmatter.data[prop]
      overwroteSomething = true
    }
  }

  // rewrite the localised file, if it changed
  if (overwroteSomething) {
    const toWrite = matter.stringify(localisedFrontmatter.content, localisedFrontmatter.data, { lineWidth: 10000, forceQuotes: true })
    await fs.writeFile(localisedAbsPath, toWrite)

    // return `${relPath}: updated`
    // silence
  }
}
