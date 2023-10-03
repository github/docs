// Content files with {% annotate %} must also have layout: inline
import fs from 'fs'
import walkFiles from '../../../script/helpers/walk-files.js'

const files = walkFiles('content', '.md')
  .map((file) => [file, fs.readFileSync(file, 'utf8')])
  .filter(([, contents]) => /```.*annotate/.test(contents))

describe('lint-annotate', () => {
  test.each(files)('%s', async (file, contents) => {
    if (!/layout:\s*inline/.test(contents)) {
      throw new Error(`File ${file} contains \`\`\`* annotate but is missing layout: inline`)
    }
  })
})
