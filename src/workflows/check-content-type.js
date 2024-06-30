#!/usr/bin/env node

import coreLib from '@actions/core'

import { checkContentType } from '#src/workflows/fm-utils.js'

const { CHANGED_FILE_PATHS, CONTENT_TYPE } = process.env

main()

async function main() {
  // CHANGED_FILE_PATHS is a string of space-separated
  // file paths. For example:
  // 'content/path/foo.md content/path/bar.md'
  const filePaths = CHANGED_FILE_PATHS.split(' ')
  const containsRai = checkContentType(filePaths, CONTENT_TYPE)
  if (containsRai.length === 0) {
    coreLib.setOutput('containsContentType', false)
  } else {
    coreLib.setOutput('containsContentType', true)
  }
}
