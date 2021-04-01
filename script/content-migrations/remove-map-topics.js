#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const languages = require('../../lib/languages')
const frontmatter = require('../../lib/read-frontmatter')
const addRedirectToFrontmatter = require('../../lib/redirects/add-redirect-to-frontmatter')

const relativeRefRegex = /\/[a-zA-Z0-9-]+/g
const linkString = /{% [^}]*?link.*? \/(.*?) ?%}/m
const linksArray = new RegExp(linkString.source, 'gm')

const walkOpts = {
  includeBasePath: true,
  directories: false
}

// We only want category TOC files, not product TOCs.
const categoryFileRegex = /content\/[^/]+?\/[^/]+?\/index.md/

const fullDirectoryPaths = Object.values(languages).map(langObj => path.join(process.cwd(), langObj.dir, 'content'))
const categoryIndexFiles = fullDirectoryPaths.map(fullDirectoryPath => walk(fullDirectoryPath, walkOpts)).flat()
  .filter(file => categoryFileRegex.test(file))

categoryIndexFiles.forEach(categoryIndexFile => {
  let categoryIndexContent = fs.readFileSync(categoryIndexFile, 'utf8')

  // find array of TOC link strings
  const rawItems = categoryIndexContent.match(linksArray)
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
    const oldTopicDirectory = path.dirname(categoryIndexFile)
    const newTopicDirectory = path.join(oldTopicDirectory, topic)
    const oldTopicFile = path.join(oldTopicDirectory, `${topic}.md`)

    // Some translated category TOCs may be outdated and contain incorrect links
    if (!fs.existsSync(oldTopicFile)) continue

    if (!fs.existsSync(newTopicDirectory)) fs.mkdirSync(newTopicDirectory)

    const { data, content } = frontmatter(fs.readFileSync(oldTopicFile, 'utf8'))
    delete data.mapTopic

    let topicContent = content

    const articles = pageToc[topic]

    articles.forEach(article => {
      // Update the new map topic index file content
      topicContent = topicContent + `{% link_with_intro /${article} %}\n`

      // Update the category index file content
      categoryIndexContent = categoryIndexContent.replace(`{% link_in_list /${article}`, `{% link_in_list /${topic}/${article}`)

      // Early return if the article doesn't exist (some translated category TOCs may be outdated and contain incorrect links)
      if (!fs.existsSync(`${oldTopicDirectory}/${article}.md`)) return

      // Move the file under the new map topic directory
      const newArticlePath = `${newTopicDirectory}/${article}.md`
      fs.renameSync(`${oldTopicDirectory}/${article}.md`, newArticlePath)

      // Read the article file so we can add a redirect from its old path
      const articleContents = frontmatter(fs.readFileSync(newArticlePath, 'utf8'))
      addRedirectToFrontmatter(articleContents.data.redirect_from, `${oldTopicDirectory}/${article}`)

      // Write the article with updated frontmatter
      fs.writeFileSync(newArticlePath, frontmatter.stringify(articleContents.content.trim(), articleContents.data, { lineWidth: 10000 }))
    })

    // Write the map topic index file
    fs.writeFileSync(`${newTopicDirectory}/index.md`, frontmatter.stringify(topicContent.trim(), data, { lineWidth: 10000 }))

    // Write the category index file
    fs.writeFileSync(categoryIndexFile, categoryIndexContent)

    // Delete the old map topic
    fs.unlinkSync(oldTopicFile)
  }
})
