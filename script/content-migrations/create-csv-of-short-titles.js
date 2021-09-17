#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import walk from 'walk-sync'
import readFrontmatter from '../../lib/read-frontmatter.js'

const csvFile = path.join(process.cwd(), 'shortTitles.csv')
fs.writeFileSync(csvFile, 'Product,Article Title,Short title,Relative path\n')

const files = walk(path.join(process.cwd(), 'content'), {
  includeBasePath: true,
  directories: false,
})
files.forEach((file) => {
  const relativeFilePath = file.replace(process.cwd(), '')
  const productName = relativeFilePath.split('/')[2]

  const fileContent = fs.readFileSync(file, 'utf8')
  const { data } = readFrontmatter(fileContent)
  const { title, shortTitle } = data

  if (title && !shortTitle && title.length > 25) {
    fs.appendFileSync(csvFile, `"${productName}","${title}",,${relativeFilePath}\n`)
  }
})
