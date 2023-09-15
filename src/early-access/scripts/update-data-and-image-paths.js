#!/usr/bin/env node

// [start-readme]
//
// This script is run on a writer's machine while developing Early Access content locally. It
// updates the data and image paths to either include `early-access` or remove it.
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import { program } from 'commander'
import walkFiles from '../../../script/helpers/walk-files.js'
import { escapeRegExp } from 'lodash-es'
import patterns from '../../../lib/patterns.js'

program
  .description('Update data and image paths.')
  .option(
    '-p, --early-access-path <PATH>',
    'Early access filepath. Defaults to all Early Access content and data files if not provided.',
  )
  .option('-a, --add', 'Add "early-access" to data and image paths.')
  .option('-r, --remove', 'Remove "early-access" from data and image paths.')
  .parse(process.argv)

const { add, remove, earlyAccessPath } = program.opts()

if (!(add || remove)) {
  console.error('Error! Must specify either `--add` or `--remove`.')
  process.exit(1)
}

if (earlyAccessPath && !earlyAccessPath.startsWith('content/early-access')) {
  console.error(`Error! Make sure ${earlyAccessPath} starts with 'content/early-access'.`)
  process.exit(1)
}

const allEarlyAccessFiles = walkFiles('content', '.md', { includeEarlyAccess: true }).concat(
  walkFiles('data', ['.md', '.yml'], { includeEarlyAccess: true }),
)

let selectFiles = allEarlyAccessFiles
if (earlyAccessPath) {
  const contentFiles = allEarlyAccessFiles.filter((file) => file.includes(earlyAccessPath))

  // We also need to include any reusable files that are referenced in the selected content files.
  const referencedDataFiles = []
  contentFiles.forEach((file) => {
    const contents = fs.readFileSync(file, 'utf8')
    const dataRefs = contents.match(patterns.dataReference) || []
    const filepaths = dataRefs
      .filter((dataRef) => dataRef.includes('reusables') && dataRef.includes('early-access'))
      .map((dataRef) => {
        const filepath = dataRef
          .match(/{% (?:data|indented_data_reference) (\S*?) .*%}/)[1]
          .split('.')
          .join('/')
        return path.posix.join(process.cwd(), 'data', `${filepath}.md`)
      })
    referencedDataFiles.push(...filepaths)
  })

  const dataFiles = allEarlyAccessFiles.filter((file) => {
    return referencedDataFiles.some((f) =>
      f.includes(file.replace('data/reusables', 'data/early-access/reusables')),
    )
  })

  selectFiles = contentFiles.concat(dataFiles)
}

// Update the EA content and data files
selectFiles.forEach((file) => {
  const oldContents = fs.readFileSync(file, 'utf8')

  const dataRefs = oldContents.match(patterns.dataReference) || []
  const imageRefs = oldContents.match(patterns.imagePath) || []

  const replacements = {}

  if (add) {
    dataRefs
      // Since we're adding early-access to the path, filter for those that do not already include it
      .filter((dataRef) => !dataRef.includes(' early-access.'))
      // Add to the { oldRef: newRef } replacements object
      .forEach((dataRef) => {
        replacements[dataRef] = dataRef.replace(
          /({% (?:data|indented_data_reference) )(.*)/,
          '$1early-access.$2',
        )
      })

    imageRefs
      // Since we're adding early-access to the path, filter for those that do not already include it
      .filter((imageRef) => !imageRef.split('/').includes('early-access'))
      // Add to the { oldRef: newRef } replacements object
      .forEach((imageRef) => {
        replacements[imageRef] = imageRef.replace('/assets/images/', '/assets/images/early-access/')
      })
  }

  if (remove) {
    dataRefs
      // Since we're removing early-access from the path, filter for those that include it
      .filter((dataRef) => dataRef.includes(' early-access.'))
      // Add to the { oldRef: newRef } replacements object
      .forEach((dataRef) => {
        replacements[dataRef] = dataRef.replace('early-access.', '').replace('-alt.', '.')
        // replacements[dataRef] = dataRef.replace('early-access.', '')
      })

    imageRefs
      // Since we're removing early-access from the path, filter for those that include it
      .filter((imageRef) => imageRef.split('/').includes('early-access'))
      // Add to the { oldRef: newRef } replacements object
      .forEach((imageRef) => {
        replacements[imageRef] = imageRef.replace('/assets/images/early-access/', '/assets/images/')
      })
  }

  // Return early if nothing to replace
  if (!Object.keys(replacements).length) {
    return
  }

  // Make the replacement in the content
  let newContents = oldContents
  Object.entries(replacements).forEach(([oldRef, newRef]) => {
    newContents = newContents.replace(new RegExp(escapeRegExp(oldRef), 'g'), newRef)
  })

  // Write the updated content
  fs.writeFileSync(file, newContents)
})

console.log('Done! Run "git status" in your docs-early-access checkout to see the changes.\n')
