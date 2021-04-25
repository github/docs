const path = require('path')
const fs = require('fs')
const readFrontmatter = require('../../../lib/read-frontmatter')
const walk = require('walk-sync')
const { difference } = require('lodash')
const allowedTopics = require('../../../data/allowed-topics')

const contentDir = path.join(process.cwd(), 'content')
const topics = walk(contentDir, { includeBasePath: true })
  .filter(filename => filename.endsWith('.md') && !filename.includes('README'))
  .map(filename => {
    const fileContent = fs.readFileSync(filename, 'utf8')
    const { data } = readFrontmatter(fileContent)
    return data.topics || []
  })
  .flat()

const allUsedTopics = [...new Set(topics)].sort()

describe('Check for allowed frontmatter topics', () => {
  test('all used topics are allowed in /data/allowed-topics.js', () => {
    expect(allUsedTopics.length).toBeGreaterThan(0)
    const unusedTopics = difference(allUsedTopics, allowedTopics)
    expect(unusedTopics).toEqual([])
  })

  test('all allowed topics are used by at least one content file', () => {
    expect(allowedTopics.length).toBeGreaterThan(0)
    const disallowedTopics = difference(allowedTopics, allUsedTopics)
    expect(disallowedTopics).toEqual([])
  })
})
