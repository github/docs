#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const readFrontmatter = require('../../lib/read-frontmatter')
const allowTopics = require('../../data/allowed-topics')

// key is the downcased valued for comparison
// value is the display value with correct casing
const topicLookupObject = {}

allowTopics.forEach(topic => {
  const lowerCaseTopic = topic.toLowerCase()
  topicLookupObject[lowerCaseTopic] = topic
})

const files = walk(path.join(process.cwd(), 'content'), { includeBasePath: true, directories: false })
files.forEach(file => {
  const fileContent = fs.readFileSync(file, 'utf8')
  const { content, data } = readFrontmatter(fileContent)
  if (data.topics === undefined) return

  const topics = data.topics.map(elem => elem.toLowerCase())
  const newTopics = []
  topics.forEach(topic => {
    // for each topic in the markdown file, lookup the display value
    // and add it to a new array
    newTopics.push(topicLookupObject[topic])
  })
  data.topics = newTopics
  const newContents = readFrontmatter.stringify(content, data, { lineWidth: 10000 })
  fs.writeFileSync(file, newContents)
})
