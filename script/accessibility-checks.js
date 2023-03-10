#!/usr/bin/env node

import { program } from 'commander'
import fs from 'fs/promises'
import flat from 'flat'
import { visit } from 'unist-util-visit'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { gfmTable } from 'micromark-extension-gfm-table'
import { gfmTableFromMarkdown } from 'mdast-util-gfm-table'
import { getDataByLanguage } from '../lib/get-data.js'
import walkFiles from './helpers/walk-files.js'
import readFm from '../lib/read-frontmatter.js'

const reusablesRegex = /{% data (reusables.+?) %}/g
const justReusablesRegex = new RegExp(reusablesRegex.source)

program
  .description('Run accessibility checks.')
  .option('-a, --all', 'Run all heading checks.')
  .option('-d, --duplicates', 'List any duplicate headings per file.')
  .option('-f, --firsts', 'List any first headings in an article that are not an H2.')
  .option('-l, --levels', 'List any headings that increment by more than one level.')
  .option('-c, --content', 'List any headings that lack content between them.')
  .option('-t, --tables', 'List every table in the content.')
  .option('-p, --paths [paths...]', 'Specify filepaths to include.')
  .parse(process.argv)

const opts = Object.assign({}, program.opts())

const headingChecks = ['duplicates', 'firsts', 'levels', 'content']
const tableChecks = ['tables']
const allChecks = headingChecks.concat(tableChecks)

// Some options handling.
if (opts.all) headingChecks.forEach((headingCheck) => (opts[headingCheck] = true))
const requestedChecks = Object.keys(opts).filter((key) => allChecks.includes(key))
if (!requestedChecks.length) program.help()
const requestedheadingChecks = requestedChecks.filter((requestedCheck) =>
  headingChecks.includes(requestedCheck)
)
if (!opts.all && requestedheadingChecks.length) opts.all = true
console.log(`\nNotes:
* This script does not check specially rendered pages: REST, GraphQL, webhook payloads, release notes.
* The reported results may have their source in data/reusables files.`)

const checkEmoji = '🔎'
const errorEmoji = '👉'
const cleanEmoji = '✅'

const checkMsgs = {
  firsts: {
    checkingMsg: 'Checking for non-H2 first headings',
    resultsMsg: 'pages with a first heading that is not an h2!',
  },
  duplicates: {
    checkingMsg: 'Checking for duplicate headings',
    resultsMsg: 'pages with duplicate headings!',
  },
  levels: {
    checkingMsg: 'Checking for headings that skip levels',
    resultsMsg: 'pages with headings that increment by more than one level!',
  },
  content: {
    checkingMsg: 'Checking for headings without content in between',
    resultsMsg: 'pages with headings that do not have any content in between!',
  },
  tables: {
    checkingMsg: 'Finding all tables',
    resultsMsg: 'pages with tables!',
  },
}

console.log('')
// Log which checks will be running.
requestedChecks.forEach((requestedCheck) => {
  console.log(`${checkEmoji} ${checkMsgs[requestedCheck].checkingMsg}...`)
})
console.log('')

const errors = []
const tables = []

// Run the checks!
await checkMarkdownPages()

// Format the results
if (opts.tables) {
  const allTables = []
  formatTableResults(tables, allTables)
  const total = allTables.length
  console.log(`Total tables found in Markdown files: ${total}`)
}
if (opts.all) {
  formatHeadingErrors(errors)
}

async function checkMarkdownPages() {
  const mdFiles = filterFiles(getAllFiles())
  await Promise.all(
    mdFiles.map(async (file) => {
      const rawContents = await fs.readFile(file, 'utf8')
      const { content: body } = readFm(rawContents)
      const withReusables = await getReusableText(body)
      const ast = getAst(withReusables)
      const shortPath = file.replace(`${process.cwd()}/`, '')
      if (opts.tables) {
        const tableObj = createTableObj(shortPath)
        getTablesFromMdast(ast, tableObj)
      }
      if (opts.all) {
        const errorObj = createErrorObj(shortPath)
        const headingNodes = getElementFromMdast('heading', ast)
        const headingObjs = getheadingObjs(headingNodes)
        runheadingChecks(headingObjs, ast, errorObj)
      }
    })
  )
}

/* HEADING CHECKS */
function runheadingChecks(headingObjs, parsed, errorObj) {
  if (!headingObjs.length) return
  if (opts.firsts) {
    checkFirsts(headingObjs, errorObj)
  }
  if (opts.levels) {
    checkLevels(headingObjs, errorObj)
  }
  if (opts.duplicates) {
    checkDuplicates(headingObjs, errorObj)
  }
  if (opts.content) {
    typeof parsed === 'function'
      ? checkContentInHtml(parsed, errorObj)
      : checkContentInMdast(parsed, errorObj)
  }
  errors.push(errorObj)
}

/* VALIDATION FUNCTIONS */
function checkFirsts(headingObjs, errorObj) {
  const firstHeading = headingObjs[0]
  if (firstHeading.level !== 2) {
    errorObj.firsts.add(cleanHeading(firstHeading))
  }
}

function checkLevels(headingObjs, errorObj) {
  headingObjs.forEach((headingObj, ix) => {
    if (ix === 0) return
    const previousIndex = ix - 1
    const previousObj = headingObjs[previousIndex]
    const isInvalid = headingObj.level - previousObj.level > 1
    if (!isInvalid) return
    errorObj.levels.add(`${cleanHeading(previousObj)}\n${cleanHeading(headingObj)}`)
  })
}

function checkDuplicates(headingObjs, errorObj) {
  const duplicates = headingObjs.filter((headingObj, index) => {
    return headingObjs.filter(
      (hObj, ix) => headingObj.text.toLowerCase() === hObj.text.toLowerCase() && index !== ix
    ).length
  })
  if (!duplicates.length) return
  const dupesString = duplicates.map((hObj) => cleanHeading(hObj)).join('\n')
  errorObj.duplicates.add(dupesString)
}

function checkContentInMdast(ast, errorObj) {
  const results = []
  ast.children.forEach((childNode, index) => {
    if (index === 0) return false
    if (childNode.type === 'heading') {
      const previousNodeIndex = index - 1
      const previousNode = ast.children[previousNodeIndex]
      if (previousNode.type === 'heading') {
        results.push({
          previous: getheadingObjs([previousNode]),
          current: getheadingObjs([childNode]),
        })
      }
    }
  })
  if (!results.length) return
  results.forEach((resultObj) => {
    errorObj.content.add(
      `${cleanHeading(resultObj.previous[0])}\n${cleanHeading(resultObj.current[0])}`
    )
  })
}

function checkContentInHtml(parsed, errorObj) {
  const results = []
  parsed('*').map(async (index, currentNode) => {
    if (index === 0) return false
    if (/h[2-6]/.test(currentNode.name)) {
      const previousNodeIndex = index - 1
      const previousNode = parsed('*')[previousNodeIndex]
      if (/h[2-6]/.test(previousNode.name)) {
        results.push({
          previous: {
            level: previousNode.name.replace('h', ''),
            text: parsed(previousNode).text(),
          },
          current: {
            level: currentNode.name.replace('h', ''),
            text: parsed(currentNode).text(),
          },
        })
      }
    }
  })
  if (!results.length) return
  results.forEach((resultObj) => {
    errorObj.content.add(`${cleanHeading(resultObj.previous)}\n${cleanHeading(resultObj.current)}`)
  })
}

/* MARKDOWN FUNCTIONS */
function getAst(doc) {
  return fromMarkdown(doc, {
    extensions: [gfmTable],
    mdastExtensions: [gfmTableFromMarkdown],
  })
}

async function getReusableText(body) {
  const reusables = body.match(reusablesRegex) || []
  if (!reusables.length) return body

  let newBody = body
  await Promise.all(
    reusables.map(async (reusable) => {
      const justReusable = reusable.match(justReusablesRegex)[1].trim()
      const text = getDataByLanguage(justReusable, 'en')
      newBody = body.replace(reusable, text)
    })
  )
  return newBody
}

function getElementFromMdast(element, ast) {
  const elements = []
  visit(ast, (node) => {
    if (node.type === element) {
      elements.push(node)
    }
  })
  return elements
}

function getTablesFromMdast(ast, tableObj) {
  const tableNodes = getElementFromMdast('table', ast)
  if (!tableNodes.length) return
  const firstRows = tableNodes.map((table) => {
    const firstRow = table.children[0]
    return Object.entries(flat(firstRow))
      .filter(([key, _val]) => key.endsWith('value'))
      .map(([_key, val]) => val)
      .join(', ')
  })
  tableObj.tables.push(...firstRows)
  tables.push(tableObj)
}

/* SHARED UTILITIES */
function getAllFiles() {
  return walkFiles('content', '.md')
}

function filterFiles(files) {
  if (!opts.paths) return files
  const filtered = files.filter((file) => opts.paths.some((path) => file.includes(path)))
  if (!filtered.length) {
    console.error(`Error! Did not find any files. Check provided paths.`)
    process.exit(1)
  }
  return filtered
}

function getheadingObjs(headingNodes) {
  return headingNodes.map((n) => {
    const flatNodes = flat(n)
    const text = Object.entries(flatNodes)
      .filter(([key, _val]) => key.endsWith('value'))
      .map(([_key, val]) => val)
      .join('')
    return {
      level: n.depth,
      text,
    }
  })
}

function cleanHeading({ level, text }) {
  return `${'#'.repeat(level)} ${text}`
}

/* REPORTING FUNCTIONS */
function createErrorObj(shortPath) {
  return {
    file: shortPath,
    firsts: new Set(),
    duplicates: new Set(),
    levels: new Set(),
    content: new Set(),
  }
}

function createTableObj(shortPath) {
  return {
    file: shortPath,
    tables: [],
  }
}

function formatHeadingErrors(errors) {
  requestedheadingChecks.forEach((requestedCheck) => {
    const errorsPerCheck = errors.filter((errorObj) => errorObj[requestedCheck].size)
    const emoji = errorsPerCheck.length ? `\n${errorEmoji}` : cleanEmoji
    const msg = `${emoji} Found ${errorsPerCheck.length} ${checkMsgs[requestedCheck].resultsMsg}`
    console.log(msg)
    if (!errorsPerCheck.length) return
    errors.forEach((errorObj) => {
      errorObj[requestedCheck].forEach((error) => {
        console.log('')
        console.log(errorObj.file)
        console.log(error)
        console.log('')
      })
    })
  })
}

function formatTableResults(tables, allTables) {
  const pagesWithTables = tables.filter((tableObj) => tableObj.tables.length)
  if (!pagesWithTables.length) return
  console.log(`${errorEmoji} Found ${pagesWithTables.length} ${checkMsgs.tables.resultsMsg}`)
  tables.forEach((tableObj) => {
    console.log('')
    console.log(tableObj.file)
    allTables.push(tableObj.tables)
    console.log(`Found ${tableObj.tables.length} tables`)
    tableObj.tables.forEach((table) => console.log(`First row includes: ${table}`))
    console.log('')
  })
}
