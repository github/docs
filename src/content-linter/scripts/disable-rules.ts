// Add same-line markdownlint disables when a new rule creates many failures.
// Run as src/content-linter/scripts/disable-rules.ts no-generic-link-text.

import fs from 'fs'
import { spawn } from 'child_process'

type Violation = { lineNumber: number; isYamlFile?: boolean }

const rule: string | undefined = process.argv[2]
if (!rule) {
  console.error('Please specify a rule to disable.')
  process.exit(1)
}
let verbose = false
if (process.argv[3] === '--verbose' || process.argv[3] === '-v') {
  verbose = true
}

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

childProcess.stdout.on('data', (data: Buffer) => {
  if (verbose) console.log(data.toString())
})

childProcess.stderr.on('data', function (data: Buffer) {
  if (verbose) console.log(data.toString())
})

let matchingRulesFound = 0
childProcess.on('close', (code: number | null) => {
  if (code === 0) {
    console.log(`No violations for rule, "${rule}" found.`)
    process.exit(0)
  }

  const markdownViolations: Record<string, Violation[]> = JSON.parse(
    fs.readFileSync('markdown-violations.json', 'utf8'),
  )
  console.log(`${Object.values(markdownViolations).flat().length} violations found.`)

  const violationEntries = Object.entries(markdownViolations) as [string, Violation[]][]
  const skipped: string[] = []
  for (const [fileName, results] of violationEntries) {
    console.log(fileName)
    console.log(results)
    // YAML data keys are "<file> <instancePath>" and line numbers point into the extracted string.
    if (results.some((result) => result.isYamlFile) || !fs.existsSync(fileName)) {
      skipped.push(fileName)
      continue
    }
    const fileLines = fs.readFileSync(fileName, 'utf8').split('\n')
    for (const result of results) {
      matchingRulesFound++
      const lineIndex = result.lineNumber - 1
      const offendingLine = fileLines[lineIndex]
      fileLines[lineIndex] = offendingLine.concat(` <!-- markdownlint-disable-line ${rule} -->`)
    }
    fs.writeFileSync(fileName, fileLines.join('\n'), 'utf8')
  }

  console.log(`${matchingRulesFound} violations ignored.`)

  if (skipped.length) {
    console.log(
      `\n${skipped.length} YAML data values were skipped. Add <!-- markdownlint-disable-line ${rule} --> by hand inside each YAML string:`,
    )
    for (const key of skipped) console.log(`  ${key}`)
  }
})
