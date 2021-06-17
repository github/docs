#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const XlsxPopulate = require('xlsx-populate') // this is an optional dependency, install with `npm i --include=optional`
const readFrontmatter = require('../../lib/read-frontmatter')

const START_ROW = 2

// Load an existing workbook
XlsxPopulate.fromFileAsync('./SanitizedInformationArchitecture.xlsx')
  .then(workbook => {
    const sheet = workbook.sheet('New content architecture')

    for (let row = START_ROW; sheet.row(row).cell(1).value() !== undefined; row++) {
      const pageUrl = sheet.row(row).cell(1).hyperlink()
      // article, learning path, or category
      const contentStructure = sheet.row(row).cell(2).value()
      // comma-separated keywords
      const topics = sheet.row(row).cell(5).value()

      // The spreadsheet cell sometimes contains the string "null"
      if (!topics || topics === 'null') continue

      // enterprise admin article urls will always include enterprise-server@3.0
      let fileName = pageUrl.replace('https://docs.github.com/en', 'content')
        .replace('enterprise-server@3.0', '')

      // Only category files use the index.md format
      if (contentStructure === 'article' || contentStructure === 'learning path') {
        fileName = fileName + '.md'
      } else {
        fileName = fileName + '/index.md'
      }

      const topicsArray = topics.split(',').map(topic => topic.trim()) || []
      updateFrontmatter(path.join(process.cwd(), fileName), topicsArray)
    }
  })

function updateFrontmatter (filePath, newTopics) {
  const articleContents = fs.readFileSync(filePath, 'utf8')
  const { content, data } = readFrontmatter(articleContents)

  let topics = []
  if (typeof data.topics === 'string') {
    topics = [data.topics]
  } else if (Array.isArray(data.topics)) {
    topics = topics.concat(data.topics)
  }

  newTopics.forEach(topic => {
    topics.push(topic)
  })

  // remove any duplicates
  const uniqueTopics = [...new Set(topics)]
  data.topics = uniqueTopics

  const newContents = readFrontmatter.stringify(content, data, { lineWidth: 10000 })
  fs.writeFileSync(filePath, newContents)
}
