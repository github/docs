const assert = require('assert')
const { chain, chunk, difference, isArray, isString, inRange } = require('lodash')
const eventToPromise = require('event-to-promise')
const objectHash = require('object-hash')
const countArrayValues = require('count-array-values')
const isURL = require('is-url')
const rank = require('./rank')

class AlgoliaIndex {
  // records must be truncated to avoid going over Algolia's 10K limit
  static get maxRecordLength () { return 8000 }
  static get maxContentLength () { return 5000 }
  static get namePrefix () { return 'github-docs' }

  constructor (name, records) {
    this.name = name
    this.records = records
      .map(record => {
        record.customRanking = rank(record)
        return record
      })
    this.validate()
    return this
  }

  validate () {
    assert(isString(this.name) && this.name.length, '`name` is required')
    assert(isArray(this.records) && this.records.length, '`records` must be a non-empty array')

    // each ID is unique
    const objectIDs = this.records.map(record => record.objectID)
    const dupes = countArrayValues(objectIDs)
      .filter(({ value, count }) => count > 1)
      .map(({ value }) => value)
    assert(!dupes.length, `every objectID must be unique. dupes: ${dupes.join('; ')}`)

    this.records.forEach(record => {
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
        recordLength <= AlgoliaIndex.maxRecordLength,
        `record ${record.url} is too long! ${recordLength} (max: ${AlgoliaIndex.maxRecordLength})`
      )
    })

    return true
  }

  // This method consumes Algolia's `browseAll` event emitter,
  // aggregating results into an array of all the records
  // https://www.algolia.com/doc/api-reference/api-methods/browse/
  async fetchExistingRecords () {
    const client = require('./client')

    // return an empty array if the index does not exist yet
    const { items: indices } = await client.listIndexes()

    if (!indices.find(index => index.name === this.name)) {
      console.log(`index '${this.name}' does not exist!`)
      return []
    }

    const index = client.initIndex(this.name)
    const browser = index.browseAll()
    let records = []

    browser.on('result', (content) => {
      records = records.concat(content.hits)
    })

    browser.on('error', (err) => {
      throw err
    })

    await eventToPromise(browser, 'end')

    return records
  }

  async syncWithRemote () {
    const client = require('./client')

    console.log('\n\nsyncing %s with remote', this.name)
    this.validate()

    const existingRecords = await this.fetchExistingRecords()

    const existingIds = chain(existingRecords).map('objectID').value()
    const currentIds = chain(this.records).map('objectID').value()
    const deprecatedIds = difference(existingIds, currentIds)
    const newIds = difference(currentIds, existingIds)

    // Create a hash of every existing record, to compare to the new records
    // The `object-hash` module is indifferent to object key order by default. :+1:
    const existingHashes = existingRecords.map(record => objectHash(record))

    // If a hash is found, that means the existing Algolia record contains the
    // same data as new record, and the record doesn't need to be updated.
    const recordsToUpdate = this.records.filter(record => {
      return !existingHashes.includes(objectHash(record))
    })

    console.log('deprecated objectIDs:', deprecatedIds)
    console.log('new objectIDs:', newIds)
    console.log('total current records:', this.records.length)
    console.log('records to update:', recordsToUpdate.length)

    const index = client.initIndex(this.name)

    if (deprecatedIds.length) {
      console.log('deleting %d deprecated record(s)', deprecatedIds.length)
      await index.deleteObjects(deprecatedIds)
    }

    if (recordsToUpdate.length) {
      console.log('uploading %d new or modified record(s)', recordsToUpdate.length)
      const chunks = chunk(recordsToUpdate, 1000)

      for (const batch of chunks) {
        await index.addObjects(batch)
      }
    }
  }
}

module.exports = AlgoliaIndex
