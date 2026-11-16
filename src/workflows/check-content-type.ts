import * as coreLib from '@actions/core'

import { checkContentType } from '@/workflows/fm-utils'

const { CHANGED_FILE_PATHS, CONTENT_TYPE } = process.env

main()

async function main() {
  // CHANGED_FILE_PATHS is space-separated: content/actions/index.md content/admin/index.md
  const filePaths = CHANGED_FILE_PATHS?.split(' ') || []
  const containsRai = checkContentType(filePaths, CONTENT_TYPE || '')
  if (containsRai.length === 0) {
    coreLib.setOutput('containsContentType', false)
  } else {
    coreLib.setOutput('containsContentType', true)
  }
}
