import fs from 'fs/promises'
import path from 'path'
import { filter as asyncFilter } from 'async'

describe('check for orphan tests', () => {
  test('all tests are in sub-directories', async () => {
    // A known list of exceptions that can live outside of directories
    const EXCEPTIONS = ['README.md', 'package.json']
    const pathToTests = path.join(process.cwd(), 'tests')

    // Get a list of files/directories in `/tests`
    const testDirectory = await fs.readdir(pathToTests)

    // Filter out our exceptions
    let filteredList = testDirectory.filter((item) => !EXCEPTIONS.includes(item))

    // Don't include directories
    filteredList = await asyncFilter(
      filteredList,
      async (item) => !(await fs.stat(path.join(pathToTests, item))).isDirectory()
    )

    expect(filteredList).toHaveLength(0)
  })
})
