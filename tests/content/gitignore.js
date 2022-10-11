import fs from 'fs'
import path from 'path'
const gitignorePath = path.join(process.cwd(), '.gitignore')
const gitignore = fs.readFileSync(gitignorePath, 'utf8')
const entries = gitignore.split(/\r?\n/)

describe('.gitignore file', () => {
  test('includes an entry for .env', () => {
    expect(entries.some((entry) => entry === '.env')).toBe(true)
  })
})
