#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import lunr from 'lunr'
import lunrStemmerSupport from 'lunr-languages/lunr.stemmer.support.js'
import tinyseg from 'lunr-languages/tinyseg.js'
import lunrJa from 'lunr-languages/lunr.ja.js'
import lunrEs from 'lunr-languages/lunr.es.js'
import lunrPt from 'lunr-languages/lunr.pt.js'
import fs from 'fs/promises'
import rank from './rank.js'
import validateRecords from './validate-records.js'
import { compress } from '../../lib/search/compress.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
lunrStemmerSupport(lunr)
tinyseg(lunr)
lunrJa(lunr)
lunrEs(lunr)
lunrPt(lunr)

export default class LunrIndex {
  constructor(name, records) {
    this.name = name

    // Add custom rankings
    this.records = records.map((record) => {
      record.customRanking = rank(record)
      return record
    })

    this.validate()

    return this
  }

  validate() {
    return validateRecords(this.name, this.records)
  }

  build() {
    const language = this.name.split('-').pop()
    const records = this.records

    this.index = lunr(function constructIndex() {
      // No arrow here!
      if (['ja', 'es', 'pt'].includes(language)) {
        this.use(lunr[language])
      }

      // By default Lunr considers the `-` character to be a word boundary.
      // This allows hyphens to be included in the search index.
      // If you change this, remember to make it match the indexing separator
      // in lib/search/lunr-search.js so the query is tokenized
      // identically to the way it was indexed.
      this.tokenizer.separator = /[\s]+/

      this.ref('objectID')
      this.field('url')
      this.field('breadcrumbs')
      this.field('headings', { boost: 3 })
      this.field('title', { boost: 5 })
      this.field('content')
      this.field('topics')
      this.field('customRanking')

      this.metadataWhitelist = ['position']

      for (const record of records) {
        this.add(record)
      }
    })
  }

  toJSON() {
    this.build()
    return JSON.stringify(this.index, null, 2)
  }

  get recordsObject() {
    return Object.fromEntries(this.records.map((record) => [record.objectID, record]))
  }

  async write() {
    this.build()

    // Write the parsed records
    await Promise.resolve(this.recordsObject)
      .then(JSON.stringify)
      .then(compress)
      .then((content) =>
        fs.writeFile(
          path.posix.join(__dirname, '../../lib/search/indexes', `${this.name}-records.json.br`),
          content
          // Do not set to 'utf8'
        )
      )

    // Write the index
    await Promise.resolve(this.index)
      .then(JSON.stringify)
      .then(compress)
      .then((content) =>
        fs.writeFile(
          path.posix.join(__dirname, '../../lib/search/indexes', `${this.name}.json.br`),
          content
          // Do not set to 'utf8'
        )
      )
  }
}
