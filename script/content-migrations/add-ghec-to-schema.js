#!/usr/bin/env node

// [start-readme]
//
// A one-time use script to add GHEC to the REST schema on github/github.
//
// [end-readme]

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import walk from 'walk-sync'
import yaml from 'js-yaml'
import { program } from 'commander'

let fullDir
let fileCount = 0
const updatedFilesAll = []
const updatedFilesGHECOnly = []
const notUpdated = []
const logFile = process.cwd() + '/log.txt'

program
  .description('One time script to add a GHEC property to the REST API schema on github/github.')
  .argument('<schema-directory>', 'Path to the schema files to update from github/github.')
  .action((schemaDirectory) => {
    fullDir = join(process.cwd(), schemaDirectory)
  })
program.parse()

// use the operations from github/github
walk
  .entries(fullDir, {
    ignore: ['.keep'],
    directories: false,
  })
  // only work on yaml files
  .filter((entry) => entry.relativePath.endsWith('yaml'))
  .forEach((file) => {
    fileCount++
    const fullPath = join(file.basePath, file.relativePath)
    let fileContent = readFileSync(fullPath, 'utf8')
    const data = yaml.load(fileContent)

    if (data['x-github-releases'] && data['x-github-releases'].includes('api.github.com')) {
      // always:
      // remove githubCloudOnly from x-github
      // add ghec to x-github-releases
      fileContent = fileContent.replace(/x-github-releases:\n/g, 'x-github-releases:\n  - ghec\n')
      fileContent = fileContent.replace(/\n\s{2}githubCloudOnly:.*\n/g, '\n')
      updatedFilesAll.push(fullPath)

      // if githubCloudOnly in x-github is true
      // also remove api.github.com from x-github-releases
      if (data['x-github'] && data['x-github'].githubCloudOnly) {
        fileContent = fileContent.replace(/\n\s{2}- api.github.com\n/g, '\n')
        updatedFilesGHECOnly.push(fullPath)
      }

      writeFileSync(fullPath, fileContent)
    } else {
      // doesn't have an api.github.com endpoint
      // log it, ignore it
      notUpdated.push(fullPath)
    }

    writeFileSync(
      logFile,
      `${fileCount} Total operations processed
  ${notUpdated.length} Operations not updated
  ${updatedFilesAll.length} Operations updated
    ${updatedFilesGHECOnly.length} Operations with api.github.com removed

---
Operations not updated:
${notUpdated.join('\r\n')}

All updated operations:
${updatedFilesAll.join('\r\n')}

Updated operations with api.github.com removed (GHEC only):
${updatedFilesGHECOnly.join('\r\n')}`,
    )
  })
console.log(
  `${fileCount} Total operations processed
  ${notUpdated.length} Operations not updated
  ${updatedFilesAll.length} Operations updated
    ${updatedFilesGHECOnly.length} Operations with api.github.com removed (GHEC only)
Log file at ${logFile}`,
)
