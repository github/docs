const path = require('path')
const walk = require('walk-sync')
const { zip } = require('lodash')
const readFileAsync = require('../../lib/readfile-async')

const rootDir = path.join(__dirname, '../..')
const contentDir = path.join(rootDir, 'content')
const reusablesDir = path.join(rootDir, 'data/reusables')

/*
This will check if the markdown files in the content and data/reusables directorys starts with H3 headers
*/

describe('Check H2 header start in markdown content and reusables files', () => {
  describe('must start with h2', () => {
    const mdWalkOptions = {
      globs: ['**/*.md'],
      ignore: ['**/README.md'],
      directories: false,
      includeBasePath: true
    }
    const re = /^#.*\n/gm
    const contentMarkdownAbsPaths = walk(contentDir, mdWalkOptions).sort()
    const contentMarkdownRelPaths = contentMarkdownAbsPaths.map(p => path.relative(rootDir, p))
    const contentMarkdownTuples = zip(contentMarkdownRelPaths, contentMarkdownAbsPaths)

    const reusableMarkdownAbsPaths = walk(reusablesDir, mdWalkOptions).sort()
    const reusableMarkdownRelPaths = reusableMarkdownAbsPaths.map(p => path.relative(rootDir, p))
    const reusableMarkdownTuples = zip(reusableMarkdownRelPaths, reusableMarkdownAbsPaths)

    test.each([...contentMarkdownTuples, ...reusableMarkdownTuples])(
      'in "%s"',
      async (markdownRelPath, markdownAbsPath) => {
        const fileContents = await readFileAsync(markdownAbsPath, 'utf8')
        const match = fileContents.match(re)
        const firstHeader = (match) ? match[0].split(' ')[0] : null
        const errorMessage = 'Found the wrong header:' + match
        expect(['#', '##', null], errorMessage).toContain(firstHeader)
      }
    )
  })
})
