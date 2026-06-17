import fs from 'fs'
import { execSync } from 'child_process'

// Removing deprecated Liquid conditionals leaves behind extra blank lines.
// The content team flags these every deprecation, and the MD012 linter rule
// is off so nothing catches them automatically. This collapses any run of
// two or more consecutive blank lines down to one, but only in the markdown
// files the deprecation actually changed. Single blank lines are left alone:
// removed Liquid can introduce one in a place where it doesn't belong, so a
// human still reviews each removal site one at a time.

function getChangedMarkdownFiles(): string[] {
  const commands = [
    'git diff --name-only HEAD',
    'git diff --name-only --cached',
    'git diff --name-only origin/main...HEAD',
  ]
  const files = new Set<string>()
  for (const command of commands) {
    let output = ''
    try {
      output = execSync(command, { encoding: 'utf8' })
    } catch {
      // origin/main may not be fetched locally; skip that source.
      continue
    }
    for (const line of output.split('\n')) {
      const file = line.trim()
      if (!file) continue
      if (!file.endsWith('.md')) continue
      if (!file.startsWith('content/') && !file.startsWith('data/')) continue
      if (fs.existsSync(file)) files.add(file)
    }
  }
  return [...files].sort()
}

// Collapses any run of 2+ blank lines into a single blank line.
function collapse(contents: string): string {
  const lines = contents.split('\n')
  const result: string[] = []
  let blankRun = 0
  for (const line of lines) {
    if (line.trim() === '') {
      blankRun += 1
      if (blankRun <= 1) result.push('')
    } else {
      blankRun = 0
      result.push(line)
    }
  }
  return result.join('\n')
}

export function collapseBlankLines(options: { check?: boolean } = {}) {
  const files = getChangedMarkdownFiles()
  const offenders: string[] = []

  for (const file of files) {
    const contents = fs.readFileSync(file, 'utf8')
    const collapsed = collapse(contents)
    if (collapsed === contents) continue
    offenders.push(file)
    if (!options.check) {
      fs.writeFileSync(file, collapsed)
      console.log('Collapsed blank lines in: ', file)
    }
  }

  if (options.check) {
    if (offenders.length) {
      console.error('Found 2+ consecutive blank lines in:')
      for (const file of offenders) console.error(`  ${file}`)
      console.error('Run `npm run deprecate-ghes -- collapse-blank-lines` to fix.')
      process.exit(1)
    }
    console.log('No double blank lines found in changed markdown files.')
    return
  }

  if (!offenders.length) {
    console.log('No double blank lines found in changed markdown files.')
  }
}
