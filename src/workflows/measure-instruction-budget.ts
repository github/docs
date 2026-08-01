/**
 * @purpose Writer tool
 * @description Measure the always-on Copilot instruction budget for a content interaction.
 *
 * Scans `.github/instructions/*.instructions.md`, reads each file's `applyTo`
 * frontmatter, works out which files load for a representative content path,
 * and reports the combined budget against soft guardrails.
 *
 * The primary number is the discrete **rule count** (instruction-following
 * degrades with the number of discrete instructions). The **token count** is a
 * mechanical backstop. Both guardrails are soft: the script warns, it does not
 * fail, unless you pass `--strict`.
 *
 * Usage:
 *   npm run measure-instruction-budget
 *   npm run measure-instruction-budget -- --path content/get-started/foo.md
 *   npm run measure-instruction-budget -- --json
 *   npm run measure-instruction-budget -- --strict   # exit 1 if over budget
 */
import fs from 'fs'
import path from 'path'

import { program } from 'commander'
import { encode } from 'gpt-tokenizer/encoding/o200k_base'

import readFrontmatter from '@/frame/lib/read-frontmatter'

// Single source of truth for the guardrails. Keep these in sync with the
// instruction architecture doc (github/docs-team) and any future CI check.
// Derived in github/docs-team#6829: frontier models stay near-perfect to
// ~150 discrete instructions; ~45 tokens/rule puts the token backstop at ~6,500.
const RULE_BUDGET = 150
const TOKEN_BUDGET = 6500

const INSTRUCTIONS_DIR = '.github/instructions'
const DEFAULT_PATH = 'content/get-started/example.md'

type FileReport = {
  file: string
  applyTo: string
  tokens: number
  rules: number
}

type Options = {
  dir: string
  path: string
  json?: boolean
  strict?: boolean
}

program
  .description('Measure the always-on Copilot instruction budget for a content interaction')
  .option('--dir <path>', 'directory of instruction files', INSTRUCTIONS_DIR)
  .option('--path <path>', 'representative edited file path to simulate', DEFAULT_PATH)
  .option('--json', 'serialize output as JSON')
  .option('--strict', 'exit 1 when a guardrail is exceeded (default: warn only)')

const isEntryPoint =
  import.meta.url === `file://${process.argv[1]}` ||
  process.argv[1]?.endsWith('measure-instruction-budget.ts')

if (isEntryPoint) {
  program.parse(process.argv)
  main(program.opts<Options>())
}

function main(options: Options): void {
  const dir = options.dir
  if (!fs.existsSync(dir)) {
    console.error(`No instructions directory found at ${dir}`)
    process.exit(2)
  }

  const files = fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.instructions.md'))
    .sort()

  if (files.length === 0) {
    console.error(`No *.instructions.md files found in ${dir}`)
    process.exit(2)
  }

  // Normalize to POSIX separators so backslash paths (e.g. on Windows) still
  // match the forward-slash applyTo globs.
  const simulatedPath = options.path.replace(/\\/g, '/')

  const loaded: FileReport[] = []
  for (const name of files) {
    const raw = fs.readFileSync(path.join(dir, name), 'utf-8')
    const { content, data, errors } = readFrontmatter(raw, { filepath: name })
    if (errors && errors.length > 0) {
      // Don't silently fall back to applyTo '**' (which matches everything) and
      // distort the budget. Skip the file and warn so the numbers stay trustworthy.
      console.warn(
        `Warning: skipping ${name} because its frontmatter could not be parsed ` +
          `(${errors.map((e) => e.reason).join('; ')}).`,
      )
      continue
    }
    const applyTo = typeof data?.applyTo === 'string' ? data.applyTo : '**'
    if (!matchesPath(applyTo, simulatedPath)) continue
    const body = content || ''
    loaded.push({
      file: name,
      applyTo,
      // Count the frontmatter-stripped body: the `applyTo` frontmatter is
      // metadata that governs when the file loads, not text injected into the
      // prompt, so including it would systematically overcount.
      tokens: encode(body).length,
      rules: countRules(body),
    })
  }

  const totalTokens = loaded.reduce((sum, f) => sum + f.tokens, 0)
  const totalRules = loaded.reduce((sum, f) => sum + f.rules, 0)
  const overTokens = Math.max(0, totalTokens - TOKEN_BUDGET)
  const overRules = Math.max(0, totalRules - RULE_BUDGET)

  if (options.json) {
    console.log(
      JSON.stringify(
        {
          path: simulatedPath,
          ruleBudget: RULE_BUDGET,
          tokenBudget: TOKEN_BUDGET,
          totalRules,
          totalTokens,
          overRules,
          overTokens,
          withinBudget: overRules === 0 && overTokens === 0,
          files: loaded,
        },
        null,
        2,
      ),
    )
  } else {
    printReport(simulatedPath, loaded, totalRules, totalTokens, overRules, overTokens)
  }

  if (options.strict && (overRules > 0 || overTokens > 0)) {
    process.exit(1)
  }
}

// Count discrete list-item rules (a proxy for "number of instructions"),
// ignoring fenced code blocks so example code is not counted as instructions.
export function countRules(body: string): number {
  const withoutCode = body.replace(/```[\s\S]*?```/g, '')
  const matches = withoutCode.match(/^\s*([-*]|\d+\.)\s/gm)
  return matches ? matches.length : 0
}

// True if any comma-separated glob in `applyTo` matches `filePath`. Both sides
// are normalized to POSIX separators so backslash paths still match.
export function matchesPath(applyTo: string, filePath: string): boolean {
  const normalizedPath = filePath.replace(/\\/g, '/')
  return applyTo
    .split(',')
    .map((pattern) => pattern.trim().replace(/\\/g, '/'))
    .filter(Boolean)
    .some((pattern) => globToRegExp(pattern).test(normalizedPath))
}

// Convert a VS Code-style applyTo glob to a RegExp. `**/` matches zero or more
// path segments (so `**/*.md` matches both `README.md` and `dir/README.md`),
// a standalone `**` matches across segments, and `*` matches within a segment.
export function globToRegExp(glob: string): RegExp {
  let out = ''
  let i = 0
  while (i < glob.length) {
    const c = glob[i]
    if (c === '*' && glob[i + 1] === '*') {
      if (glob[i + 2] === '/') {
        out += '(?:.*/)?'
        i += 3
      } else {
        out += '.*'
        i += 2
      }
    } else if (c === '*') {
      out += '[^/]*'
      i += 1
    } else if ('.+()[]{}^$|\\/'.includes(c)) {
      out += `\\${c}`
      i += 1
    } else {
      out += c
      i += 1
    }
  }
  return new RegExp(`^${out}$`)
}

function printReport(
  simulatedPath: string,
  loaded: FileReport[],
  totalRules: number,
  totalTokens: number,
  overRules: number,
  overTokens: number,
): void {
  const width = Math.max('TOTAL'.length, ...loaded.map((f) => f.file.length))

  console.log(`Always-on instruction budget for a content interaction (${simulatedPath})\n`)
  for (const f of loaded) {
    console.log(
      `  ${f.file.padEnd(width)}  ${String(f.rules).padStart(3)} rules  ` +
        `${String(f.tokens).padStart(5)} tok   (${f.applyTo})`,
    )
  }
  console.log(
    `  ${'TOTAL'.padEnd(width)}  ${String(totalRules).padStart(3)} rules  ` +
      `${String(totalTokens).padStart(5)} tok`,
  )

  const ruleStatus =
    overRules > 0 ? `OVER by ${overRules}` : `within budget, ${RULE_BUDGET - totalRules} headroom`
  const tokenStatus =
    overTokens > 0
      ? `OVER by ${overTokens}`
      : `within budget, ${TOKEN_BUDGET - totalTokens} headroom`

  console.log(`\nRules (primary):  ${totalRules} / ~${RULE_BUDGET}   ${ruleStatus}`)
  console.log(`Tokens (backstop): ${totalTokens} / ~${TOKEN_BUDGET}   ${tokenStatus}`)
  console.log(
    '\nInstruction-following degrades with the number of discrete rules, ' +
      'so fewer, higher-value rules are always better.',
  )
}
