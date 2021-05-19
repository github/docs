const lunr = require('lunr')
require('lunr-languages/lunr.stemmer.support')(lunr)
require('lunr-languages/tinyseg')(lunr)
require('lunr-languages/lunr.ja')(lunr)
require('lunr-languages/lunr.es')(lunr)
require('lunr-languages/lunr.pt')(lunr)
require('lunr-languages/lunr.de')(lunr)
const fs = require('fs').promises
const path = require('path')
const rank = require('./rank')
const validateRecords = require('./validate-records')
const { compress } = require('./compress')

module.exports = class LunrIndex {
  constructor (name, records) {
    this.name = name

    // Add custom rankings
    this.records = records.map(record => {
      record.customRanking = rank(record)
      return record
    })

    this.validate()

    return this
  }

  validate () {
    return validateRecords(this.name, this.records)
  }

  build () {
    const language = this.name.split('-').pop()
    const records = this.records

    this.index = lunr(function constructIndex () { // No arrow here!
      if (['ja', 'es', 'pt', 'de'].includes(language)) {
        this.use(lunr[language])
      }

      this.ref('objectID')
      this.field('url')
      this.field('slug')
      this.field('breadcrumbs')
      this.field('heading')
      this.field('title')
      this.field('content')
      this.field('topics')
      this.field('customRanking')

      this.metadataWhitelist = ['position']

      for (const record of records) {
        this.add(record)
      }
    })
  }

  toJSON () {
    this.build()
    return JSON.stringify(this.index, null, 2)
  }

  get recordsObject () {
    return Object.fromEntries(
      this.records.map(record => [record.objectID, record])
    )
  }

  async write () {
    this.build()

    // Write the parsed records
    await Promise.resolve(this.recordsObject)
      .then(JSON.stringify)
      .then(compress)
      .then(content => fs.writeFile(
        path.posix.join(__dirname, 'indexes', `${this.name}-records.json.br`),
        content
        // Do not set to 'utf8'
      ))

    // Write the index
    await Promise.resolve(this.index)
      .then(JSON.stringify)
      .then(compress)
      .then(content => fs.writeFile(
        path.posix.join(__dirname, 'indexes', `${this.name}.json.br`),
        content
        // Do not set to 'utf8'
      ))
  }
}
