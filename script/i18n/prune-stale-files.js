#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import walk from 'walk-sync'
import { program } from 'commander'
import languages from '../../lib/languages.js'

program
  .description(
    `Removes any file in the translations directory that doesn't have a 1-1 mapping with an English file in the content directory`
  )
  .option('-d, --dry-run', `List the files that will be deleted, but don't remove them).`)
  .parse(process.argv)

const languageDir = Object.keys(languages)
  .filter((language) => !languages[language].wip && language !== 'en')
  .map((language) => languages[language].dir)

main()

async function main() {
  const listOfContentFiles = walk(path.join(process.cwd(), 'content'), {
    includeBasePath: false,
    directories: false,
  })

  const translatedFilePaths = []
  languageDir.forEach((directory) => {
    const listOfFiles = walk(path.join(directory, 'content'), {
      includeBasePath: true,
      directories: false,
    }).map((path) => path.replace(process.cwd(), ''))
    translatedFilePaths.push(...listOfFiles)
  })

  let outOfSyncFilesCount = 0
  translatedFilePaths.forEach((translatedFilePath) => {
    const translationRelativePath = translatedFilePath.split('/content/')[1]

    // If there is a 1:1 mapping of translated file to english file
    // we're in sync, don't log
    if (listOfContentFiles.includes(translationRelativePath)) {
      return
    }

    outOfSyncFilesCount++
    if (!program.opts().dryRun) {
      fs.unlinkSync(translatedFilePath)
    } else {
      console.log(translatedFilePath)
    }
  })

  console.log(`Out of sync file size: ${outOfSyncFilesCount}`)
}
