#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import readFrontmatter from '../../lib/read-frontmatter.js'
import { sentenceCase } from 'change-case'

const earlyAccessDir = path.posix.join(process.cwd(), 'content', 'early-access')

updateOrCreateToc(earlyAccessDir)

console.log('Updated Early Access TOCs!')

function updateOrCreateToc(directory) {
  const children = fs.readdirSync(directory).filter((subpath) => !subpath.endsWith('index.md'))

  if (!children.length) return

  const tocFile = path.posix.join(directory, 'index.md')

  let content, data

  if (fs.existsSync(tocFile)) {
    const matter = readFrontmatter(fs.readFileSync(tocFile, 'utf8'))
    content = matter.content
    data = matter.data
  } else {
    content = ''
    data = {
      title: sentenceCase(path.basename(directory)),
      versions: '*',
      hidden: true,
    }
  }

  data.children = children.map((child) => `/${child.replace('.md', '')}`)
  const newContents = readFrontmatter.stringify(content, data, { lineWidth: 10000 })
  fs.writeFileSync(tocFile, newContents)

  children.forEach((child) => {
    if (child.endsWith('.md')) return
    updateOrCreateToc(path.posix.join(directory, child))
  })
}
