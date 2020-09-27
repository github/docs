#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const rimraf = require('rimraf').sync
const englishContentDir = 'content'
const walk = require('walk-sync')
const frontmatter = require('@github-docs/frontmatter')
const addRedirect = require('../../lib/redirects/add-redirect-to-frontmatter')

execSync(`mv ${englishContentDir}/enterprise/admin/ ${englishContentDir}/admin`)
rimraf(`${englishContentDir}/enterprise`)

fs.readdirSync('translations')
  .filter(file => !file.endsWith('.md'))
  .forEach(dir => {
    const translatedContentDir = path.join('translations', dir, 'content')
    execSync(`mv ${translatedContentDir}/enterprise/admin/ ${translatedContentDir}/admin`)
    rimraf(`${translatedContentDir}/enterprise`)
  })

const adminDir = path.join(process.cwd(), englishContentDir, 'admin')

// Add redirects to English
walk(adminDir, { includeBasePath: true, directories: false })
  .filter(file => file.endsWith('.md'))
  .forEach(file => {
    const contents = fs.readFileSync(file, 'utf8')
    const { data, content } = frontmatter(contents)

    const oldPath = file
      .replace(adminDir, '/enterprise/admin')
      .replace('.md', '')
      .replace('/index', '')

    data.redirect_from = addRedirect(data.redirect_from, oldPath)

    fs.writeFileSync(file, frontmatter.stringify(content, data, { lineWidth: 10000 }))
  })

// Add redirects to translations
const translationDirs = fs.readdirSync('translations')
  .filter(file => !file.endsWith('.md'))
  .map(dir => path.join('translations', dir, 'content/admin'))

translationDirs
  .forEach(translationDir => {
    walk(translationDir, { includeBasePath: true, directories: false })
      .filter(file => file.endsWith('.md'))
      .forEach(file => {
        const contents = fs.readFileSync(file, 'utf8')
        const { data, content } = frontmatter(contents)

        const oldPath = file
          .replace(translationDir, '/enterprise/admin')
          .replace('.md', '')
          .replace('/index', '')

        data.redirect_from = addRedirect(data.redirect_from, oldPath)

        fs.writeFileSync(file, frontmatter.stringify(content, data, { lineWidth: 10000 }))
      })
  })
