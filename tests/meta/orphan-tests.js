const fs = require('fs')
const path = require('path')

describe('check for orphan tests', () => {
  test('all tests are in sub-directories', () => {
    // A known list of exceptions that can live outside of directories
    const EXCEPTIONS = ['README.md']
    const pathToTests = path.join(process.cwd(), 'tests')

    // Get a list of files/directories in `/tests`
    const testDirectory = fs.readdirSync(pathToTests)

    const filteredList = testDirectory
      // Filter out our exceptions
      .filter(item => !EXCEPTIONS.includes(item))
      // Don't include directories
      .filter(item => !fs.statSync(path.join(pathToTests, item)).isDirectory())

    expect(filteredList).toHaveLength(0)
  })
})
