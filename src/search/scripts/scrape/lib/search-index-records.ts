import path from 'path'
import fsSync from 'fs'
import fs from 'fs/promises'
import chalk from 'chalk'
import { isArray, isString } from 'lodash-es'

import type { Record } from '@/search/scripts/scrape/types'

export interface SkippedRecord {
  objectID: string
  reason: string
}

export interface WriteIndexRecordsResult {
  filePath: string
  skippedRecords: SkippedRecord[]
}

export async function writeIndexRecords(
  name: string,
  records: Record[],
  outDirectory: string,
): Promise<WriteIndexRecordsResult> {
  const { validRecords, skippedRecords } = validateRecords(name, records)

  if (validRecords.length === 0) {
    return { filePath: '', skippedRecords }
  }

  const recordsObject = Object.fromEntries(validRecords.map((record) => [record.objectID, record]))
  const content = JSON.stringify(recordsObject, undefined, 0)

  // If the outDirectory doesn't exist, create it
  if (!fsSync.existsSync(outDirectory)) {
    await fs.mkdir(outDirectory, { recursive: true })
  }

  const filePath = path.join(outDirectory, `${name}-records.json`)
  await fs.writeFile(filePath, content, { flag: 'w' })

  return { filePath, skippedRecords }
}

interface ValidateResult {
  validRecords: Record[]
  skippedRecords: SkippedRecord[]
}

function validateRecords(name: string, records: Record[]): ValidateResult {
  if (!isString(name) || !name.length) {
    return {
      validRecords: [],
      skippedRecords: [{ objectID: '(unknown)', reason: 'name is required' }],
    }
  }
  if (!isArray(records) || !records.length) {
    return {
      validRecords: [],
      skippedRecords: [{ objectID: '(unknown)', reason: 'records array is empty' }],
    }
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
  const skippedRecords: SkippedRecord[] = []

  for (const record of records) {
    if (!isString(record.objectID) || !record.objectID.length) {
      skippedRecords.push({ objectID: '(unknown)', reason: 'invalid objectID' })
      continue
    }

    if (!isString(record.title) || !record.title.length) {
      skippedRecords.push({ objectID: record.objectID, reason: 'empty title' })
      continue
    }

    if (seen.has(record.objectID)) {
      continue
    }
    seen.add(record.objectID)

    validRecords.push(record)
  }

  return { validRecords, skippedRecords }
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
