#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const dedent = require('dedent')
const { difference } = require('lodash')
const readme = path.join(__dirname, 'README.md')

// [start-readme]
//
// This script crawls the script directory, hooks on special comment markers
// in each script, and adds the comment to `script/README.md`.
//
// [end-readme]

const startComment = 'start-readme'
const endComment = 'end-readme'
const startCommentRegex = new RegExp(startComment)
const endCommentRegex = new RegExp(endComment)

const ignoreList = [
  'README.md'
]

const scriptsToRuleThemAll = [
  'bootstrap',
  'server',
  'test'
]

const allScripts = walk(__dirname, { directories: false })
  .filter(script => ignoreList.every(ignoredPath => !script.includes(ignoredPath)))

const otherScripts = difference(allScripts, scriptsToRuleThemAll)

// build an object with script name as key and readme comment as value
const allComments = {}
allScripts.forEach(script => {
  const fullPath = path.join(__dirname, script)

  let addToReadme = false
  const readmeComment = fs.readFileSync(fullPath, 'utf8')
    .split('\n')
    .filter(cmt => {
      if (startCommentRegex.test(cmt)) addToReadme = true
      if (endCommentRegex.test(cmt)) addToReadme = false
      if (addToReadme && !cmt.includes(startComment) && !cmt.includes(endComment)) return cmt
      return false
    })
    // remove comment markers and clean up newlines
    .map(cmt => cmt.replace(/^(\/\/|#) ?/m, ''))
    .join('\n')
    .trim()

  allComments[script] = readmeComment
    // preserve double newlines as multiline list items
    .replace(/\n\n/g, '\n\n\n    ')
    // remove single newlines
    .replace(/\n(?!\n)/g, ' ')
})

// turn the script names/comments into itemized lists in the README
const template = `# Scripts

## Scripts to rule them all

This directory follows the [Scripts to Rule Them All](https://githubengineering.com/scripts-to-rule-them-all/) pattern:

${createTemplate(scriptsToRuleThemAll)}

## Additional scripts

${createTemplate(otherScripts)}
`

// update the readme
if (template === fs.readFileSync(readme, 'utf8')) {
  console.log('The README is up-to-date!')
} else {
  fs.writeFileSync(readme, template)
  console.log('The README.md has been updated!')
}

function createTemplate (arrayOfScripts) {
  return arrayOfScripts.map(script => {
    const comment = allComments[script]
    return dedent`### [\`${script}\`](${script})\n\n${comment}\n\n---\n\n`
  }).join('\n')
}
