#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import lunr from 'lunr'
import xLunrStemmerSupport from 'lunr-languages/lunr.stemmer.support.js'
import xTinyseg from 'lunr-languages/tinyseg.js'
import xLunrJa from 'lunr-languages/lunr.ja.js'
import xLunrEs from 'lunr-languages/lunr.es.js'
import xLunrPt from 'lunr-languages/lunr.pt.js'
import xLunrDe from 'lunr-languages/lunr.de.js'
import xFs from 'fs'
import rank from './rank.js'
import validateRecords from './validate-records.js'
import { compress } from '../../lib/search/compress.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
xLunrStemmerSupport(lunr)
xTinyseg(lunr)
xLunrJa(lunr)
xLunrEs(lunr)
xLunrPt(lunr)
xLunrDe(lunr)
const fs = xFs.promises

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
