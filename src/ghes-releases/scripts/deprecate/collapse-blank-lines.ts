import fs from 'fs'
import { execFileSync } from 'child_process'

// Deprecated Liquid conditionals leave extra blank lines that content reviewers flag.
// MD012 does not catch them in this repo. Collapse runs of two or more blank lines only
// where the deprecation changed the file, so runs already on main (for example, in code
// samples) stay as they are. Single blank lines still need human review.

type ChangedLines = {
  // 1-based line numbers in the current file that the diff added.
  added: Set<number>
  // Deletions sit between line N and line N + 1 of the current file.
  deletedAfter: Set<number>
}

function git(args: string[]): string {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 })
}

function getBaseRef(): string {
  try {
    return git(['merge-base', 'origin/main', 'HEAD']).trim()
  } catch {
    throw new Error('Cannot find origin/main. Run `git fetch origin main` and try again.')
  }
}

// One diff from the base to the working tree, split by destination path, so renamed files
// compare against their old path instead of looking entirely new.
function getChangedMarkdownDiffs(baseRef: string): Map<string, string> {
  const output = git([
    'diff',
    '-U0',
    '-M',
    '--no-color',
    '--no-ext-diff',
    '--src-prefix=a/',
    '--dst-prefix=b/',
    baseRef,
    '--',
    'content',
    'data',
  ])
  const diffs = new Map<string, string>()
  let current: string | null = null
  for (const line of output.split('\n')) {
    if (line.startsWith('diff --git ')) {
      current = null
      continue
    }
    if (line.startsWith('+++ ')) {
      // Git appends a tab to paths with spaces, and quotes unusual paths. Skip quoted paths rather than guess.
      const file = line.startsWith('+++ b/') ? line.slice('+++ b/'.length).replace(/\t$/, '') : null
      current = file && file.endsWith('.md') && fs.existsSync(file) ? file : null
      if (current) diffs.set(current, '')
      continue
    }
    if (current) diffs.set(current, `${diffs.get(current)}${line}\n`)
  }
  return diffs
}

export function parseChangedLines(diff: string): ChangedLines {
  const added = new Set<number>()
  const deletedAfter = new Set<number>()
  for (const line of diff.split('\n')) {
    const match = line.match(/^@@ -\d+(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/)
    if (!match) continue
    const oldCount = match[1] === undefined ? 1 : Number(match[1])
    const newStart = Number(match[2])
    const newCount = match[3] === undefined ? 1 : Number(match[3])
    for (let i = 0; i < newCount; i++) added.add(newStart + i)
    if (oldCount > 0 && newCount === 0) deletedAfter.add(newStart)
  }
  return { added, deletedAfter }
}

export function collapse(contents: string, changed: ChangedLines): string {
  // Drop the empty element that split() adds after a final newline, so it doesn't count as a blank line.
  const endsWithNewline = contents.endsWith('\n')
  const lines = (endsWithNewline ? contents.slice(0, -1) : contents).split('\n')
  const result: string[] = []
  let index = 0
  while (index < lines.length) {
    if (lines[index].trim() !== '') {
      result.push(lines[index])
      index += 1
      continue
    }
    const start = index
    while (index < lines.length && lines[index].trim() === '') index += 1
    const run = lines.slice(start, index)
    // Runs use 1-based line numbers to match git diff.
    const first = start + 1
    const last = index
    let touched = false
    for (let lineNumber = first; lineNumber <= last; lineNumber++) {
      if (changed.added.has(lineNumber)) touched = true
    }
    for (let lineNumber = first - 1; lineNumber <= last; lineNumber++) {
      if (changed.deletedAfter.has(lineNumber)) touched = true
    }
    // Drop a touched blank run at the end of the file, for example after a removed final {% endif %}.
    if (touched && endsWithNewline && index === lines.length) continue
    if (run.length > 1 && touched) {
      result.push(run[0])
    } else {
      result.push(...run)
    }
  }
  return result.join('\n') + (endsWithNewline ? '\n' : '')
}

export function collapseBlankLines(options: { check?: boolean } = {}) {
  const diffs = getChangedMarkdownDiffs(getBaseRef())
  const offenders: string[] = []

  for (const [file, diff] of [...diffs].sort(([a], [b]) => a.localeCompare(b))) {
    const contents = fs.readFileSync(file, 'utf8')
    const collapsed = collapse(contents, parseChangedLines(diff))
    if (collapsed === contents) continue
    offenders.push(file)
    if (!options.check) {
      fs.writeFileSync(file, collapsed)
      console.log('Collapsed blank lines in: ', file)
    }
  }

  if (options.check) {
    if (offenders.length) {
      console.error('Found 2+ consecutive blank lines introduced in:')
      for (const file of offenders) console.error(`  ${file}`)
      console.error('Run `npm run deprecate-ghes -- collapse-blank-lines` to fix.')
      process.exit(1)
    }
    console.log('No new double blank lines found in changed markdown files.')
    return
  }

  if (!offenders.length) {
    console.log('No new double blank lines found in changed markdown files.')
  }
}
