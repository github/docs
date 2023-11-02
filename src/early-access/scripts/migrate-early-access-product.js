#!/usr/bin/env node

// [start-readme]
//
// Move the files from an early-access product level docs set into an existing product.
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { last } from 'lodash-es'
import { program } from 'commander'
import { execFileSync } from 'child_process'
import frontmatter from '../../../lib/read-frontmatter.js'
import patterns from '../../../lib/patterns.js'
import addRedirectToFrontmatter from '#src/redirects/scripts/helpers/add-redirect-to-frontmatter.js'
import walkFiles from '../../../script/helpers/walk-files.js'

const contentFiles = walkFiles('content', '.md', { includeEarlyAccess: true })
const contentDir = path.posix.join(process.cwd(), 'content')

program
  .description('Move a product-level early access docs set to a category level.')
  .requiredOption(
    '-o, --oldPath <PATH>',
    'Provide the path of the existing product, e.g., content/early-access/enterprise-importer',
  )
  .requiredOption(
    '-n, --newPath <PATH>',
    'Provide the new path it will move under, e.g., content/migrations/using-enterprise-importer',
  )
  .option(
    '-t, --newTitle <TITLE>',
    'Provide the new title if it is different from the existing title, e.g., Using Enterprise Importer',
  )
  .parse(process.argv)

const oldPathId = program.opts().oldPath.replace('content/', '')
const newPathId = program.opts().newPath.replace('content/', '')

const oldPath = path.posix.join(contentDir, oldPathId)
const newPath = path.posix.join(contentDir, newPathId)

if (!fs.existsSync(oldPath)) {
  console.error(`Error! Can't find ${oldPath}`)
  process.exit(1)
}

const filesToMigrate = contentFiles.filter((file) => file.includes(`/${oldPathId}/`))

if (!filesToMigrate.length) {
  console.error(`Error! Can't find any files in ${oldPath}`)
  process.exit(1)
}

const migratePath = path.posix.join(contentDir, newPathId)

// 1. Update the image and data refs in the to-be-migrated early access files BEFORE moving them.
try {
  execFileSync('src/early-access/scripts/update-data-and-image-paths.js', [
    '-p',
    `content/${oldPathId}`,
    '--remove',
  ])
} catch (e) {
  console.error(e)
  process.exit(1)
}

const variablesToMove = []
const reusablesToMove = []
const imagesToMove = []

// 2. Add redirects to and update frontmatter in the to-be-migrated early access files BEFORE moving them.
filesToMigrate.forEach((filepath) => {
  const { content, data } = frontmatter(fs.readFileSync(filepath, 'utf8'))
  const redirectString = filepath
    .replace('content/', '/')
    .replace('/index.md', '')
    .replace('.md', '')
  data.redirect_from = addRedirectToFrontmatter(data.redirect_from, redirectString)
  delete data.hidden
  delete data.noEarlyAccessBanner
  delete data.earlyAccessToc
  fs.writeFileSync(filepath, frontmatter.stringify(content, data, { lineWidth: 10000 }))

  // 4. Find the data files and images referenced in the early access files so we can move them over.
  const dataRefs = content.match(patterns.dataReference) || []
  const variables = dataRefs.filter((ref) => ref.includes('variables'))
  const reusables = dataRefs.filter((ref) => ref.includes('reusables'))
  const images = content.match(patterns.imagePath) || []

  variablesToMove.push(...variables)
  reusablesToMove.push(...reusables)
  imagesToMove.push(...images)
})

// 3. Move the data files and images.
Array.from(new Set(variablesToMove)).forEach((varRef) => moveVariable(varRef))
Array.from(new Set(reusablesToMove)).forEach((varRef) => moveReusable(varRef))
Array.from(new Set(imagesToMove)).forEach((imageRef) => moveImage(imageRef))

// 4. Move the content files.
execFileSync('mv', [oldPath, migratePath])

// 5. Update the parent product TOC with the new child path.
const parentProductTocPath = path.posix.join(path.dirname(newPath), 'index.md')
const parentProducToc = frontmatter(fs.readFileSync(parentProductTocPath, 'utf-8'))
parentProducToc.data.children.push(`/${path.basename(newPathId)}`)

fs.writeFileSync(
  parentProductTocPath,
  frontmatter.stringify(parentProducToc.content, parentProducToc.data, { lineWidth: 10000 }),
)

// 6. Optionally, update the new product TOC with the new title.
if (program.opts().newTitle) {
  const productTocPath = path.posix.join(newPath, 'index.md')
  const productToc = frontmatter(fs.readFileSync(productTocPath, 'utf-8'))
  productToc.data.title = program.opts().newTitle

  fs.writeFileSync(
    productTocPath,
    frontmatter.stringify(productToc.content, productToc.data, { lineWidth: 10000 }),
  )
}

// 7. Update internal links now that the files have been moved.
console.log('\nRunning script to update internal links...')
execFileSync('src/links/scripts/update-internal-links.js')

console.log(`
Done! Did the following:
- Moved content/${oldPathId} files to content/${newPathId}
- Ran script/early-access/update-data-and-images-paths.js
- Added redirects to the moved files
- Updated children frontmatter entries in index.md files
- Ran ./src/links/scripts/update-internal-links.js

Please review all the changes in docs-internal and docs-early-access, especially to index.md files. You may need to do some manual cleanup.
`)

function moveVariable(dataRef) {
  // Get the data filepath from the data reference,
  // where the data reference looks like: {% data variables.foo.bar %}
  // and the data filepath looks like: data/variables/foo.yml with key of 'bar'.
  const variablePathArray = dataRef
    .match(/{% (?:data|indented_data_reference) (.*?) %}/)[1]
    .split('.')
    // If early access is part of the path, remove it (since the path below already includes it)
    .filter((n) => n !== 'early-access')

  // Given a string `variables.foo.bar` split into an array, we want the last segment 'bar', which is the variable key.
  // Then pop 'bar' off the array because it's not really part of the filepath.
  // The filepath we want is `variables/foo.yml`.
  const variableKey = last(variablePathArray)

  variablePathArray.pop()

  const oldVariablePath = path.posix.join(
    process.cwd(),
    'data/early-access',
    `${variablePathArray.join('/')}.yml`,
  )
  const newVariablePath = path.posix.join(
    process.cwd(),
    'data',
    `${variablePathArray.join('/')}.yml`,
  )
  const nonAltPath = newVariablePath.replace('-alt.yml', '.yml')
  const oldAltPath = oldVariablePath.replace('.yml', '-alt.yml')

  let oldPath = oldVariablePath

  // If the old variable path doesn't exist, assume no migration needed.
  if (!fs.existsSync(oldVariablePath)) {
    if (!fs.existsSync(newVariablePath)) {
      console.log(`Problem migrating files for ${dataRef}`)
      return
    }
    if (fs.existsSync(oldAltPath)) {
      oldPath = oldAltPath
    } else {
      return
    }
  }

  const variableFileContent = yaml.load(fs.readFileSync(oldPath, 'utf8'))
  const value = variableFileContent[variableKey]

  // If the variable file already exists, add the key/value pair.
  if (fs.existsSync(nonAltPath)) {
    const content = yaml.load(fs.readFileSync(nonAltPath, 'utf8'))
    if (!content[variableKey]) {
      const newString = `\n\n${variableKey}: ${value}`
      fs.appendFileSync(nonAltPath, newString)
    }
  } else {
    execFileSync('mv', [oldPath, newVariablePath])
  }
}

function moveReusable(dataRef) {
  // Get the data filepath from the data reference,
  // where the data reference looks like: {% data reusables.foo.bar %}
  // and the data filepath looks like: data/reusables/foo/bar.md.
  const reusablePath = dataRef
    .match(/{% (?:data|indented_data_reference) (\S*?) .*%}/)[1]
    .split('.')
    // If early access is part of the path, remove it (since the path below already includes it)
    .filter((n) => n !== 'early-access')
    .join('/')

  const oldReusablePath = path.posix.join(process.cwd(), 'data/early-access', `${reusablePath}.md`)
  const newReusablePath = path.posix.join(process.cwd(), 'data', `${reusablePath}.md`)

  // If the old reusable path doesn't exist, assume no migration needed.
  if (!fs.existsSync(oldReusablePath)) {
    if (!fs.existsSync(newReusablePath)) {
      console.log(`Problem migrating files for ${dataRef}`)
      return
    }
    // return
  }

  // If the reusable file doesn't exist, move it.
  if (!fs.existsSync(newReusablePath)) {
    execFileSync('mkdir', ['-p', path.dirname(newReusablePath)])
    execFileSync('mv', [oldReusablePath, newReusablePath])
  }
}

function moveImage(imageRef) {
  const imagePath = imageRef
    .replace('/assets/images/', '')
    // If early access is part of the path, remove it (since the path below already includes it)
    .replace('early-access', '')

  const oldImagePath = path.posix.join(process.cwd(), 'assets/images/early-access', imagePath)
  const newImagePath = path.posix.join(process.cwd(), 'assets/images', imagePath)

  // If the old image path doesn't exist, assume no migration needed.
  if (!fs.existsSync(oldImagePath)) {
    if (!fs.existsSync(newImagePath)) {
      console.log(`Problem migrating files for ${imageRef}`)
      return
    }
    // return
  }

  // If the reusable file doesn't exist, move it.
  if (!fs.existsSync(newImagePath)) {
    execFileSync('mkdir', ['-p', path.dirname(newImagePath)])
    execFileSync('mv', [oldImagePath, newImagePath])
  }
}
