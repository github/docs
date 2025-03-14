import path from 'path'
import fs from 'fs'

import { describe, expect, test } from 'vitest'
import walk from 'walk-sync'
import { difference } from 'lodash-es'

import readFrontmatter from '@/frame/lib/read-frontmatter'
import allowedTopics from '../../../data/allowed-topics'

const contentDir: string = path.join(process.cwd(), 'content')

const topics: string[] = walk(contentDir, { includeBasePath: true })
  .filter((filename: string) => filename.endsWith('.md') && !filename.includes('README'))
  .map((filename: string) => {
    const fileContent: string = fs.readFileSync(filename, 'utf8')
    const { data, errors } = readFrontmatter(fileContent)

    if (errors.length > 0) {
      console.warn(errors)
      throw new Error(`More than 0 front-matter errors in file: ${filename}`)
    }

    return (data as any).topics || []
  })
  .flat()

const allUsedTopics: string[] = Array.from(new Set(topics)).sort()

describe('Check for allowed frontmatter topics', () => {
  test('all used topics are allowed in /data/allowed-topics.js', () => {
    expect(allUsedTopics.length).toBeGreaterThan(0)

    const unusedTopics: string[] = difference(allUsedTopics, allowedTopics)
    expect(unusedTopics).toEqual([])
  })

  test('all allowed topics are used by at least one content file', () => {
    expect(allowedTopics.length).toBeGreaterThan(0)

    const disallowedTopics: string[] = difference(allowedTopics, allUsedTopics)
    expect(disallowedTopics).toEqual([])
  })
})
