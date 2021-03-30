#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')

const relativeRefRegex = /\/[a-zA-Z0-9-]+/g
const linkString = /{% [^}]*?link.*? \/(.*?) ?%}/m
const linksArray = new RegExp(linkString.source, 'gm')

const fullDirectoryPath = path.join(process.cwd(), '/content')
const files = walk(fullDirectoryPath, {
  includeBasePath: true,
  directories: false
})

files.forEach(file => {
  if (path.basename(file) !== 'index.md') return

  let fileContent = fs.readFileSync(file, 'utf-8')
  // find array of TOC link strings
  const rawItems = fileContent.match(linksArray)
  if (!rawItems || !rawItems[0].includes('topic_link_in_list')) return

  const pageToc = {}
  let currentTopic = ''

  // Create an object of topics and articles
  rawItems.forEach(tocItem => {
    const relativePath = tocItem.match(relativeRefRegex).pop().replace('/', '')
    if (tocItem.includes('topic_link_in_list')) {
      currentTopic = relativePath
      pageToc[relativePath] = []
    } else {
      const tmpArray = pageToc[currentTopic]
      tmpArray.push(relativePath)
      pageToc[currentTopic] = tmpArray
    }
  })
  for (const topic in pageToc) {
    const oldTopicDirectory = path.dirname(file)
    const newTopicDirectory = path.join(oldTopicDirectory, topic)
    const topicFile = path.join(oldTopicDirectory, `${topic}.md`)

    if (!fs.existsSync(newTopicDirectory)) fs.mkdirSync(newTopicDirectory)

    let topicContent = fs.readFileSync(topicFile, 'utf-8')
    topicContent = topicContent.replace('mapTopic: true\n', '')

    const articles = pageToc[topic]

    articles.forEach(article => {
      fs.renameSync(`${oldTopicDirectory}/${article}.md`, `${newTopicDirectory}/${article}.md`)
      topicContent = topicContent + `{% link_with_intro /${article} %}\n`
      fileContent = fileContent.replace(`/{% link_in_list /${article}`, `/{% link_in_list /${newTopicDirectory}/${article}`)
    })
    fs.writeFileSync(`${newTopicDirectory}/index.md`, topicContent)
    fs.unlinkSync(topicFile)
  }
})
