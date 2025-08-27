import fs from 'fs/promises'
import path from 'path'

import { describe, expect, test } from 'vitest'

const gitignorePath = path.join(process.cwd(), '.gitignore')
const gitignore = await fs.readFile(gitignorePath, 'utf8')
const entries = gitignore.split(/\r?\n/)

describe('.gitignore file', () => {
  test('includes an entry for .env', () => {
    expect(entries.some((entry) => entry === '.env')).toBe(true)
  })
})
