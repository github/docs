import { statSync } from 'fs'
import fs from 'fs/promises'
import path from 'path'

describe('check for orphan tests', () => {
  test('all tests are in sub-directories', async () => {
    // A known list of exceptions that can live outside of directories
    const EXCEPTIONS = ['README.md', 'package.json', 'utils.js']
    const pathToTests = path.join(process.cwd(), 'tests')

    // Get a list of files/directories in `/tests`
    const testDirectory = await fs.readdir(pathToTests)

    // Filter out our exceptions and directories
    const filteredList = testDirectory
      .filter((item) => !EXCEPTIONS.includes(item))
      .filter((item) => !statSync(path.join(pathToTests, item)).isDirectory())

    expect(filteredList).toHaveLength(0)
  })
})
