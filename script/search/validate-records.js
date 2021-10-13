#!/usr/bin/env node
import assert from 'assert'
import { isArray, isString, inRange } from 'lodash-es'
import isURL from 'is-url'
import countArrayValues from 'count-array-values'
import { maxRecordLength } from '../../lib/search/config.js'

export default function validateRecords(name, records) {
  assert(isString(name) && name.length, '`name` is required')
  assert(isArray(records) && records.length, '`records` must be a non-empty array')

  // each ID is unique
  const objectIDs = records.map((record) => record.objectID)
  const dupes = countArrayValues(objectIDs)
    .filter(({ value, count }) => count > 1)
    .map(({ value }) => value)
  assert(!dupes.length, `every objectID must be unique. dupes: ${dupes.join('; ')}`)

  records.forEach((record) => {
    assert(
      isString(record.objectID) && record.objectID.length,
      `objectID must be a string. received: ${record.objectID}, ${JSON.stringify(record)}`
    )

    assert(
      isString(record.title) && record.title.length,
      `title must be a string. received: ${record.title}, ${JSON.stringify(record)}`
    )

    assert(
      isURL(record.url),
      `url must be a fully qualified URL. received: ${record.url}, ${JSON.stringify(record)}`
    )

    assert(
      inRange(record.customRanking, 0, 4),
      `customRanking must be an in-range number. received: ${record.customRanking}, (record: ${record.url})`
    )

    const recordLength = JSON.stringify(record).length
    assert(
      recordLength <= maxRecordLength,
      `record ${record.url} is too long! ${recordLength} (max: ${maxRecordLength})`
    )
  })

  return true
}
