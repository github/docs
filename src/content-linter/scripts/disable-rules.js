#!/usr/bin/env node
// Disables markdownlint rules in markdown files with same-line comments. This is
// useful when introducing a new rule that causes many failures. The comments
// can be fixed and removed at while updating the file later.
//
// Usage:
//
//  src/content-linter/scripts/disable-rules.js no-generic-link-text

import fs from 'fs'
import { spawn } from 'child_process'

const rule = process.argv[2]
if (!rule) {
  console.error('Please specify a rule to disable.')
  process.exit(1)
}
let verbose = false
if (process.argv[3] === '--verbose' || process.argv[3] === '-v') {
  verbose = true
}

// Cleanup from previous run
if (fs.existsSync('markdown-violations.json')) {
  fs.unlinkSync('markdown-violations.json')
}

console.log(`Disabling "${rule}" rule in markdown files...`)
const childProcess = spawn('npm', [
  'run',
  'lint-content',
  '--',
  '-p',
  'content',
  'data',
  '-o',
  'markdown-violations.json',
  '-r',
  rule,
])

childProcess.stdout.on('data', (data) => {
  if (verbose) console.log(data.toString())
})

childProcess.stderr.on('data', function (data) {
  if (verbose) console.log(data.toString())
})

let matchingRulesFound = 0
childProcess.on('close', (code) => {
  if (code === 0) {
    console.log(`No violations for rule, "${rule}" found.`)
    process.exit(0)
  }

  const markdownViolations = JSON.parse(fs.readFileSync('markdown-violations.json', 'utf8'))
  console.log(`${Object.values(markdownViolations).flat().length} violations found.`)

  Object.entries(markdownViolations).forEach(([fileName, results]) => {
    console.log(fileName)
    console.log(results)
    const fileLines = fs.readFileSync(fileName, 'utf8').split('\n')
    results.forEach((result) => {
      matchingRulesFound++
      const lineIndex = result.lineNumber - 1
      const offendingLine = fileLines[lineIndex]
      fileLines[lineIndex] = offendingLine.concat(` <!-- markdownlint-disable-line ${rule} -->`)
    })
    fs.writeFileSync(fileName, fileLines.join('\n'), 'utf8')
  })

  console.log(`${matchingRulesFound} violations ignored.`)
})
