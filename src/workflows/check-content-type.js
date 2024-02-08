#!/usr/bin/env node

import coreLib from '@actions/core'

import { checkContentType } from '#src/workflows/fm-utils.js'

const { FILE_PATHS_CONTENT_TYPES, CONTENT_TYPE } = process.env

main()

async function main() {
  const filePaths = JSON.parse(FILE_PATHS_CONTENT_TYPES)
  const containsRai = checkContentType(filePaths, CONTENT_TYPE)
  console.log('filePaths', filePaths)
  console.log('containsRai', containsRai)
  if (containsRai.length === 0) {
    coreLib.setOutput('contentType', false)
  } else {
    coreLib.setOutput('contentType', true)
  }
}
