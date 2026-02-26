import path from 'path'
import fsSync from 'fs'
import fs from 'fs/promises'
import chalk from 'chalk'
import { isArray, isString } from 'lodash-es'

import type { Record } from '@/search/scripts/scrape/types'

export async function writeIndexRecords(
  name: string,
  records: Record[],
  outDirectory: string,
): Promise<string> {
  const validRecords = validateRecords(name, records)

  const recordsObject = Object.fromEntries(validRecords.map((record) => [record.objectID, record]))
  const content = JSON.stringify(recordsObject, undefined, 0)

  // If the outDirectory doesn't exist, create it
  if (!fsSync.existsSync(outDirectory)) {
    await fs.mkdir(outDirectory, { recursive: true })
  }

  const filePath = path.join(outDirectory, `${name}-records.json`)
  await fs.writeFile(filePath, content, { flag: 'w' })

  return filePath
}

function validateRecords(name: string, records: Record[]): Record[] {
  if (!isString(name) || !name.length) {
    throw new Error('`name` is required')
  }
  if (!isArray(records) || !records.length) {
    throw new Error('`records` must be a non-empty array')
  }

  // each ID is unique — deduplicate rather than crash
  const objectIDs = records.map((record) => record.objectID)
  const dupes = countArrayValues(objectIDs)
    .filter(({ count }) => count > 1)
    .map(({ value }) => value)
  if (dupes.length) {
    console.warn(
      chalk.yellow(`⚠ Duplicate objectIDs found and will be deduplicated: ${dupes.join('; ')}`),
    )
  }

  const seen = new Set<string>()
  const validRecords: Record[] = []

  for (const record of records) {
    if (!isString(record.objectID) || !record.objectID.length) {
      console.warn(
        chalk.yellow(
          `⚠ Skipping record with invalid objectID: ${JSON.stringify({ objectID: record.objectID, title: record.title })}`,
        ),
      )
      continue
    }

    if (!isString(record.title) || !record.title.length) {
      console.warn(chalk.yellow(`⚠ Skipping record with empty title: ${record.objectID}`))
      continue
    }

    if (seen.has(record.objectID)) {
      continue
    }
    seen.add(record.objectID)

    validRecords.push(record)
  }

  return validRecords
}

function countArrayValues(arr: string[]) {
  const counter = new Map()
  for (const value of arr) {
    counter.set(value, (counter.get(value) || 0) + 1)
  }
  return [...counter.entries()].map(([value, count]) => {
    return { value, count }
  })
}
