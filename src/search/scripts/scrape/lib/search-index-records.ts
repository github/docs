import path from 'path'
import fs from 'fs/promises'
import assert from 'assert'
import { isArray, isString } from 'lodash-es'

import type { Record } from '@/search/scripts/scrape/types'

export async function writeIndexRecords(
  name: string,
  records: Record[],
  outDirectory: string,
): Promise<string> {
  validateRecords(name, records)

  const recordsObject = Object.fromEntries(records.map((record) => [record.objectID, record]))
  const content = JSON.stringify(recordsObject, undefined, 0)

  const filePath = path.join(outDirectory, `${name}-records.json`)
  await fs.writeFile(filePath, content)

  return filePath
}

function validateRecords(name: string, records: Record[]): true {
  assert(isString(name) && name.length, '`name` is required')
  assert(isArray(records) && records.length, '`records` must be a non-empty array')

  // each ID is unique
  const objectIDs = records.map((record) => record.objectID)
  const dupes = countArrayValues(objectIDs)
    .filter(({ count }) => count > 1)
    .map(({ value }) => value)
  assert(!dupes.length, `every objectID must be unique. dupes: ${dupes.join('; ')}`)

  records.forEach((record) => {
    assert(
      isString(record.objectID) && record.objectID.length,
      `objectID must be a string. received: ${record.objectID}, ${JSON.stringify(record)}`,
    )

    assert(
      isString(record.title) && record.title.length,
      `title must be a string. received: ${record.title}, ${JSON.stringify(record)}`,
    )
  })

  return true
}

function countArrayValues(arr: string[]) {
  const counter = new Map()
  arr.forEach((value) => counter.set(value, (counter.get(value) || 0) + 1))
  return [...counter.entries()].map(([value, count]) => {
    return { value, count }
  })
}
