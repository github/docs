#!/usr/bin/env node
import path from 'path'
import fs from 'fs/promises'

import validateRecords from './validate-records.js'

export async function writeIndexRecords(name, records, outDirectory) {
  validateRecords(name, records)

  const recordsObject = Object.fromEntries(records.map((record) => [record.objectID, record]))
  const content = JSON.stringify(recordsObject, undefined, 0)

  const filePath = path.join(outDirectory, `${name}-records.json`)
  await fs.writeFile(filePath, content)

  return filePath
}
