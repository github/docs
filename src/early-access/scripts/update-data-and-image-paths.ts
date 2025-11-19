/**
 * @purpose Writer tool
 * @description Add or remove "early-access" from data and image paths
 */

import fs from 'fs'
import path from 'path'
import { program } from 'commander'
import walkFiles from '@/workflows/walk-files'
import { escapeRegExp } from 'lodash-es'
import patterns from '@/frame/lib/patterns'

interface ProgramOptions {
  add?: boolean
  remove?: boolean
  earlyAccessPath?: string
}

program
  .description('Update data and image paths.')
  .option(
    '-p, --early-access-path <PATH>',
    'Early access filepath. Defaults to all Early Access content and data files if not provided.',
  )
  .option('-a, --add', 'Add "early-access" to data and image paths.')
  .option('-r, --remove', 'Remove "early-access" from data and image paths.')
  .parse(process.argv)

const { add, remove, earlyAccessPath }: ProgramOptions = program.opts()

if (!(add || remove)) {
  console.error('Error! Must specify either `--add` or `--remove`.')
  process.exit(1)
}

if (earlyAccessPath && !earlyAccessPath.startsWith('content/early-access')) {
  console.error(`Error! Make sure ${earlyAccessPath} starts with 'content/early-access'.`)
  process.exit(1)
}

const allEarlyAccessFiles: string[] = walkFiles('content', '.md', {
  includeEarlyAccess: true,
}).concat(walkFiles('data', ['.md', '.yml'], { includeEarlyAccess: true }))

let selectedFiles: string[] = allEarlyAccessFiles
if (earlyAccessPath) {
  const contentFiles = allEarlyAccessFiles.filter((file) => file.includes(earlyAccessPath))

  // We also need to include any reusable files that are referenced in the selected content files.
  const referencedDataFiles: string[] = []
  for (const file of contentFiles) {
    const contents = fs.readFileSync(file, 'utf8')
    const dataRefs: string[] = contents.match(patterns.dataReference) || []
    const filepaths: string[] = dataRefs
      .filter((dataRef) => dataRef.includes('reusables') && dataRef.includes('early-access'))
      .map((dataRef) => {
        const filepath =
          dataRef
            .match(/{% (?:data|indented_data_reference) (\S*?) .*%}/)?.[1]
            .split('.')
            .join('/') || ''
        return path.posix.join(process.cwd(), 'data', `${filepath}.md`)
      })
    referencedDataFiles.push(...filepaths)
  }

  const dataFiles = allEarlyAccessFiles.filter((file) => {
    return referencedDataFiles.some((f) =>
      f.includes(file.replace('data/reusables', 'data/early-access/reusables')),
    )
  })

  selectedFiles = contentFiles.concat(dataFiles)
}

// Update the EA content and data files
for (const file of selectedFiles) {
  const oldContents = fs.readFileSync(file, 'utf8')

  const dataRefs: string[] = oldContents.match(patterns.dataReference) || []
  const imageRefs: string[] = oldContents.match(patterns.imagePath) || []

  const replacements: Record<string, string> = {}

  if (add) {
    // Since we're adding early-access to the path, filter for those that do not already include it
    const dataRefsToAdd = dataRefs.filter((ref) => !ref.includes(' early-access.'))
    for (const dataRef of dataRefsToAdd) {
      // Add to the { oldRef: newRef } replacements object
      replacements[dataRef] = dataRef.replace(
        /({% (?:data|indented_data_reference) )(.*)/,
        '$1early-access.$2',
      )
    }

    // Since we're adding early-access to the path, filter for those that do not already include it
    const imageRefsToAdd = imageRefs.filter((ref) => !ref.split('/').includes('early-access'))
    for (const imageRef of imageRefsToAdd) {
      // Add to the { oldRef: newRef } replacements object
      replacements[imageRef] = imageRef.replace('/assets/images/', '/assets/images/early-access/')
    }
  }

  if (remove) {
    // Since we're removing early-access from the path, filter for those that include it
    const dataRefsToRemove = dataRefs.filter((ref) => ref.includes(' early-access.'))
    for (const dataRef of dataRefsToRemove) {
      // Add to the { oldRef: newRef } replacements object
      replacements[dataRef] = dataRef.replace('early-access.', '').replace('-alt.', '.')
      // replacements[dataRef] = dataRef.replace('early-access.', '')
    }

    // Since we're removing early-access from the path, filter for those that include it
    const imageRefsToRemove = imageRefs.filter((ref) => ref.split('/').includes('early-access'))
    for (const imageRef of imageRefsToRemove) {
      // Add to the { oldRef: newRef } replacements object
      replacements[imageRef] = imageRef.replace('/assets/images/early-access/', '/assets/images/')
    }
  }

  // Return early if nothing to replace
  if (!Object.keys(replacements).length) {
    continue
  }

  // Make the replacement in the content
  let newContents = oldContents
  for (const [oldRef, newRef] of Object.entries(replacements)) {
    newContents = newContents.replace(new RegExp(escapeRegExp(oldRef), 'g'), newRef)
  }

  // Write the updated content
  fs.writeFileSync(file, newContents)
}

console.log('Done! Run "git status" in your docs-early-access checkout to see the changes.\n')
