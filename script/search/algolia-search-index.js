const { chain, chunk, difference } = require('lodash')
const objectHash = require('object-hash')
const rank = require('./rank')
const validateRecords = require('./validate-records')
const getAlgoliaClient = require('./algolia-client')

class AlgoliaIndex {
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
    return validateRecords(this.name, this.records)
  }

  // This method consumes Algolia's `browseObjects` event emitter,
  // aggregating results into an array of all the records
  // https://www.algolia.com/doc/api-client/getting-started/upgrade-guides/javascript/#the-browse-and-browsefrom-methods
  async fetchExistingRecords () {
    const client = getAlgoliaClient()

    // return an empty array if the index does not exist yet
    const { items: indices } = await client.listIndices()

    if (!indices.find(index => index.name === this.name)) {
      console.log(`index '${this.name}' does not exist!`)
      return []
    }

    const index = client.initIndex(this.name)
    let records = []

    await index.browseObjects({
      batch: batch => (records = records.concat(batch))
    })

    return records
  }

  async syncWithRemote () {
    const client = getAlgoliaClient()

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
        // https://www.algolia.com/doc/api-client/getting-started/upgrade-guides/javascript/#the-addobject-and-addobjects-methods
        index.saveObjects(batch, { autoGenerateObjectIDIfNotExist: true })
      }
    }
  }
}

module.exports = AlgoliaIndex
