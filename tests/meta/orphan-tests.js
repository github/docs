const fs = require('fs').promises
const path = require('path')
const { filter: asyncFilter } = require('async')

describe('check for orphan tests', () => {
  test('all tests are in sub-directories', async () => {
    // A known list of exceptions that can live outside of directories
    const EXCEPTIONS = ['README.md']
    const pathToTests = path.join(process.cwd(), 'tests')

    // Get a list of files/directories in `/tests`
    const testDirectory = await fs.readdir(pathToTests)

    let filteredList = testDirectory
      // Filter out our exceptions
      .filter(item => !EXCEPTIONS.includes(item))
    // Don't include directories
    filteredList = await asyncFilter(
      filteredList,
      async item => !(
        await fs.stat(
          path.join(pathToTests, item)
        )
      ).isDirectory()
    )

    expect(filteredList).toHaveLength(0)
  })
})
