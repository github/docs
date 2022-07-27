#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'

import validateRecords from './validate-records.js'
import { compress } from '../../lib/search/compress.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function writeIndexRecords(
  name,
  records,
  {
    outDirectory = path.posix.join(__dirname, '../../lib/search/indexes'),
    compressFiles = true,
    prettyPrint = false,
  }
) {
  validateRecords(name, records)

  const recordsObject = Object.fromEntries(records.map((record) => [record.objectID, record]))
  const content = JSON.stringify(recordsObject, undefined, prettyPrint ? 2 : 0)

  const filePath = path.join(
    outDirectory,
    compressFiles ? `${name}-records.json.br` : `${name}-records.json`
  )
  await fs.writeFile(filePath, compressFiles ? await compress(content) : content)

  return filePath
}
