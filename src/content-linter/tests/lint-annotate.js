// Content files with {% annotate %} must also have layout: inline
import fs from 'fs/promises'
import walkFiles from '../../../script/helpers/walk-files.js'

const allFiles = walkFiles('content', '.md')

describe('lint-annotate', () => {
  test.each(allFiles)('%s', async (file) => {
    const fileContents = await fs.readFile(file, 'utf8')
    if (fileContents.includes('{% annotate') && !fileContents.includes('layout: inline')) {
      throw new Error(`File ${file} contains {% annotate %} but is missing layout: inline`)
    }
  })
})
