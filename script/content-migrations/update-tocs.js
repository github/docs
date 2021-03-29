#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const yaml = require('js-yaml')
const frontmatter = require('../../lib/read-frontmatter')
const getDocumentType = require('../../lib/get-document-type')

const linkString = /{% [^}]*?link.*? (\/.*?) ?%}/m
const linksArray = new RegExp(linkString.source, 'gm')

// the product order is determined by data/products.yml
const productsFile = path.join(process.cwd(), 'data/products.yml')
const productsYml = yaml.load(fs.readFileSync(productsFile, 'utf8'))
const sortedProductIds = productsYml.productsInOrder.concat('/early-access')

walk(path.join(process.cwd(), 'content'), { includeBasePath: true, directories: false })
  .filter(file => file.endsWith('index.md'))
  .forEach(file => {
    const relativePath = file.replace(`${path.join(process.cwd(), 'content/')}`, '')
    const documentType = getDocumentType(relativePath)

    const { data, content } = frontmatter(fs.readFileSync(file, 'utf8'))
    let newContent = content

    if (documentType === 'homepage') {
      data.children = sortedProductIds
    }

    const linkItems = newContent.match(linksArray) || []

    // Turn the `{% link /<link> %}` list into an array of /<link>
    if (documentType === 'product' || documentType === 'mapTopic') {
      data.children = getLinks(linkItems)
    }

    if (documentType === 'category') {
      const childMapTopics = linkItems.filter(item => item.includes('topic_'))

      data.children = childMapTopics.length ? getLinks(childMapTopics) : getLinks(linkItems)
    }

    linkItems.forEach(linkItem => {
      newContent = newContent.replace(linkItem, '').trim()
    })

    newContent = newContent.replace(/###? Table of Contents\n/i, '')

    // Fix this one weird file
    if (file.relativePath === 'content/discussions/guides/index.md') {
      data.children = [
        '/best-practices-for-community-conversations-on-github',
        '/finding-discussions-across-multiple-repositories',
        '/granting-higher-permissions-to-top-contributors'
      ]
    }

    fs.writeFileSync(file, frontmatter.stringify(newContent.trim(), data, { lineWidth: 10000 }))
  })

function getLinks (linkItemArray) {
  // do a oneoff replacement while mapping
  return linkItemArray.map(item => item.match(linkString)[1].replace('/discussions-guides', '/guides'))
}
