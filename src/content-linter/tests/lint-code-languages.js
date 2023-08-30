// Code languages must be listed in data/variables/code-languages.yml
import fs from 'fs'
import walkFiles from '../../../script/helpers/walk-files.js'
import yaml from 'js-yaml'

const allFiles = walkFiles('content', '.md').concat(walkFiles('data', '.md'))
const languages = Object.keys(
  yaml.load(fs.readFileSync('./data/variables/code-languages.yml', 'utf8')),
)

describe.skip('lint-code-languages', () => {
  test.each(allFiles)('%s', async (file) => {
    const fileContents = await fs.promises.readFile(file, 'utf8')
    for (const [, lang] of fileContents.matchAll(/```(\S+)/gm)) {
      expect(languages).toContain(lang)
    }
  })
})
