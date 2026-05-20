/**
 * @purpose Writer tool
 * @description Generate GHES release notes from github/releases issues using Copilot CLI
 *
 * Generate GHES release notes by:
 * 1. Querying github/releases for open issues labeled "GHES <version>"
 * 2. Finding corresponding changelog PRs in github/blog
 * 3. Running each through the ghes-release-notes agent via Copilot CLI
 * 4. Stitching the YAML outputs into a release notes file
 */
import { Command } from 'commander'
import { execFileSync, spawn, type ChildProcess } from 'child_process'
import fs from 'fs'
import os from 'os'
import path from 'path'
import ora from 'ora'
import yaml from 'js-yaml'

import {
  type NoteEntry,
  extractYaml,
  extractSkipReason,
  parseNoteEntries,
  loadExistingEntries,
  buildReleaseNotesYaml,
  appendNoteLines,
} from '@/ghes-releases/lib/parse-release-notes'

// ─── Ctrl+C handling ─────────────────────────────────────────────────────────
// Copilot CLI puts the terminal in raw mode, so we catch Ctrl+C (0x03) manually.

let activeChild: ChildProcess | null = null
let flushBeforeExit: (() => void) | null = null

if (process.stdin.isTTY) {
  process.stdin.setRawMode(true)
  process.stdin.resume()
  process.stdin.on('data', (key: Buffer) => {
    if (key[0] !== 0x03) return
    if (activeChild?.pid) {
      try {
        process.kill(-activeChild.pid, 'SIGKILL')
      } catch {}
    }
    if (flushBeforeExit) flushBeforeExit()
    try {
      execFileSync('stty', ['sane'], { stdio: 'ignore' })
    } catch {}
    process.exit(130)
  })
}

// ─── Types ───────────────────────────────────────────────────────────────────

interface ReleaseIssue {
  number: number
  title: string
  url: string
  body: string
  labels: { name: string }[]
}

// Source of truth: data/release-notes/PLACEHOLDER-TEMPLATE.yml
let _featureHeadingsCache: string[] | null = null
function loadFeatureHeadings(): string[] {
  if (_featureHeadingsCache) return _featureHeadingsCache
  const templatePath = path.join(process.cwd(), 'data/release-notes/PLACEHOLDER-TEMPLATE.yml')
  const templateContent = fs.readFileSync(templatePath, 'utf8')
  const template = yaml.load(templateContent) as {
    sections?: { features?: Array<{ heading: string }> }
  }
  const features = template?.sections?.features
  if (!Array.isArray(features)) {
    throw new Error('Could not parse feature headings from PLACEHOLDER-TEMPLATE.yml')
  }
  _featureHeadingsCache = features.map((f) => f.heading).filter(Boolean)
  return _featureHeadingsCache
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Run `gh` CLI commands with native auth (no GITHUB_TOKEN interference)
 */
function gh(args: string[]): string {
  const env = { ...process.env }
  delete env.GITHUB_TOKEN
  return execFileSync('gh', args, {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    env,
    maxBuffer: 10 * 1024 * 1024,
  })
}

/**
 * Fetch open release issues labeled "GHES <version>"
 */
function fetchReleaseIssues(version: string): ReleaseIssue[] {
  const label = `GHES ${version}`
  const output = gh([
    'issue',
    'list',
    '--repo',
    'github/releases',
    '--label',
    label,
    '--state',
    'open',
    '--limit',
    '200',
    '--json',
    'number,title,url,body,labels',
  ])
  return JSON.parse(output) as ReleaseIssue[]
}

interface ChangelogInfo {
  url: string
  body: string | null
}

/**
 * Try to extract a changelog PR URL from a release issue body.
 * Looks for patterns like:
 *   📄 **Changelog post:** https://github.com/github/blog/pull/1234
 */
function extractChangelogPrUrl(issueBody: string): string | null {
  const match = issueBody.match(/https:\/\/github\.com\/github\/blog\/pull\/\d+/)
  return match ? match[0] : null
}

/**
 * Fetch the body of a changelog PR by URL.
 */
function fetchChangelogPrBody(prUrl: string): string | null {
  try {
    const output = gh(['pr', 'view', prUrl, '--json', 'body'])
    const parsed = JSON.parse(output) as { body: string }
    return parsed.body
  } catch {
    return null
  }
}

/**
 * Search github/blog for a merged PR that references a release issue number.
 * Caches the fetched PR list to avoid redundant API calls.
 * Returns URL + body when found.
 */
let _blogPrsCache: { number: number; body: string; url: string }[] | null = null
function searchChangelogPr(issueNumber: number): ChangelogInfo | null {
  try {
    if (!_blogPrsCache) {
      const sixMonthsAgo = new Date()
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
      const since = sixMonthsAgo.toISOString().split('T')[0]

      const output = gh([
        'pr',
        'list',
        '--repo',
        'github/blog',
        '--state',
        'merged',
        '--search',
        `Changelog in:title merged:>=${since}`,
        '--limit',
        '200',
        '--json',
        'number,body,url',
      ])
      _blogPrsCache = JSON.parse(output) as { number: number; body: string; url: string }[]
    }

    for (const pr of _blogPrsCache) {
      if (
        pr.body.includes(
          `**Release issue:** https://github.com/github/releases/issues/${issueNumber}`,
        )
      ) {
        return { url: pr.url, body: pr.body }
      }
    }
  } catch {
    // Search failed — fall back to no changelog
  }
  return null
}

/**
 * Find the changelog PR for a release issue, checking the issue body first,
 * then falling back to searching github/blog. Returns URL + body.
 */
function findChangelogPr(issue: ReleaseIssue): ChangelogInfo | null {
  const fromBody = extractChangelogPrUrl(issue.body)
  if (fromBody) {
    const body = fetchChangelogPrBody(fromBody)
    return { url: fromBody, body }
  }
  return searchChangelogPr(issue.number)
}

/**
 * Resolve the Copilot CLI path. Checks common locations.
 * Result is cached after first call.
 */
let _copilotCliPath: string | null = null
function findCopilotCli(): string {
  if (_copilotCliPath) return _copilotCliPath

  // Check if `copilot` is on PATH
  try {
    const result = execFileSync('which', ['copilot'], { encoding: 'utf8' }).trim()
    if (result) {
      _copilotCliPath = result
      return result
    }
  } catch {
    // not on PATH
  }

  // Fallback: check VS Code extension storage locations.
  // These paths are macOS-only. On Linux/Windows the `which` check above should
  // find Copilot CLI if it's installed globally. If needed, add platform-specific
  // paths here (e.g., ~/.config/Code/User/globalStorage/... for Linux).
  const homeDir = os.homedir()
  const vsCodePath = path.join(
    homeDir,
    'Library/Application Support/Code - Insiders/User/globalStorage/github.copilot-chat/copilotCli/copilot',
  )
  if (fs.existsSync(vsCodePath)) {
    _copilotCliPath = vsCodePath
    return vsCodePath
  }

  // Check VS Code stable location (macOS)
  const vsCodeStablePath = path.join(
    homeDir,
    'Library/Application Support/Code/User/globalStorage/github.copilot-chat/copilotCli/copilot',
  )
  if (fs.existsSync(vsCodeStablePath)) {
    _copilotCliPath = vsCodeStablePath
    return vsCodeStablePath
  }

  throw new Error('Copilot CLI not found. Install via: npm install -g @github/copilot@prerelease')
}

/**
 * Run the ghes-release-notes agent on a release issue (+optional changelog PR)
 * via Copilot CLI and return the raw output.
 * Uses async spawn so SIGINT (Ctrl+C) is not blocked.
 */
interface AgentContext {
  issueUrl: string
  issueTitle: string
  issueBody: string
  changelogUrl: string | null
  changelogBody: string | null
  featureHeadings: string[]
}

/**
 * Extract the title tag (e.g., "GA", "Public Preview") from a release issue title.
 */
function parseTitleTag(title: string): string | null {
  const match = title.match(/\[(GA|Public Preview|Beta|Private Preview|Closing Down|Retired)\]/i)
  return match ? match[1] : null
}

function runAgent(ctx: AgentContext): Promise<string> {
  const copilotPath = findCopilotCli()

  const titleTag = parseTitleTag(ctx.issueTitle)

  // Build an optimized prompt that pre-includes all context so the agent
  // doesn't need to make tool calls to fetch it.
  let prompt = `You are running in non-interactive mode. Do NOT ask any follow-up questions. `
  prompt += `Generate a release note for ${ctx.issueUrl}. `
  prompt += `Follow the ghes-release-notes agent instructions. `
  prompt += `Return ONLY a single YAML code block (\`\`\`yaml ... \`\`\`). No conversation, no questions, no explanations outside the code block.\n\n`

  // Pre-supply the title tag so the agent doesn't need to re-parse
  if (titleTag) {
    prompt += `The issue title tag is [${titleTag}].\n\n`
  }

  // Pre-supply valid headings so the agent doesn't need to read PLACEHOLDER-TEMPLATE.yml
  prompt += `IMPORTANT: Do NOT read PLACEHOLDER-TEMPLATE.yml or data/variables/product.yml — all necessary context is provided below.\n\n`
  prompt += `Valid feature headings (use ONLY these for feature notes):\n`
  for (const h of ctx.featureHeadings) {
    prompt += `- ${h}\n`
  }
  prompt += `\nFor non-feature notes, use: Changes, Closing down, or Retired.\n\n`

  // Pre-supply the issue body so the agent doesn't need to fetch it
  prompt += `--- RELEASE ISSUE (${ctx.issueUrl}) ---\n`
  prompt += `Title: ${ctx.issueTitle}\n`
  prompt += ctx.issueBody.substring(0, 15000)
  prompt += `\n--- END RELEASE ISSUE ---\n\n`

  // Pre-supply the changelog PR body if available
  if (ctx.changelogUrl && ctx.changelogBody) {
    prompt += `--- CHANGELOG PR (${ctx.changelogUrl}) ---\n`
    prompt += ctx.changelogBody.substring(0, 10000)
    prompt += `\n--- END CHANGELOG PR ---\n\n`
  } else if (ctx.changelogUrl) {
    prompt += `Changelog PR: ${ctx.changelogUrl} (body not available — fetch it if needed).\n\n`
  }

  const env = { ...process.env }
  delete env.GITHUB_TOKEN

  return new Promise((resolve, reject) => {
    const child = spawn(
      copilotPath,
      [
        '--agent',
        'ghes-release-notes',
        '-p',
        prompt,
        '--available-tools=view',
        '--allow-tool=view',
        '--add-dir',
        process.cwd(),
      ],
      {
        env,
        stdio: ['ignore', 'pipe', 'pipe'],
        detached: true, // Own process group so we can kill the tree with -pid
      },
    )

    activeChild = child

    let stdout = ''
    let stderr = ''
    let timedOut = false
    child.stdout?.on('data', (data: Buffer) => {
      stdout += data.toString()
    })
    child.stderr?.on('data', (data: Buffer) => {
      stderr += data.toString()
    })

    const timeout = setTimeout(() => {
      timedOut = true
      // Kill the entire process group (matches Ctrl+C handler)
      if (child.pid) {
        try {
          process.kill(-child.pid, 'SIGKILL')
        } catch {
          child.kill('SIGKILL')
        }
      }
      reject(new Error('Agent timed out after 5 minutes'))
    }, 300_000)

    child.on('close', (code) => {
      clearTimeout(timeout)
      activeChild = null
      if (process.stdin.isTTY) {
        try {
          execFileSync('stty', ['sane'], { stdio: 'ignore' })
        } catch {}
      }
      // If the timeout already rejected, don't settle the promise again
      if (timedOut) return
      if (code === 0 || stdout.length > 0) {
        if (code !== 0) {
          console.error(
            `  ⚠ Agent exited with code ${code} but produced output (stderr: ${stderr.substring(0, 100)})`,
          )
        }
        resolve(stdout)
      } else {
        const errorOutput = stderr && stderr.length > 0 ? stderr : stdout || '(no output)'
        reject(new Error(`Agent exited with code ${code}: ${errorOutput.substring(0, 200)}`))
      }
    })

    child.on('error', (err) => {
      clearTimeout(timeout)
      activeChild = null
      if (timedOut) return
      reject(err)
    })
  })
}

/**
 * Sleep for the given number of milliseconds (non-blocking).
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

interface AgentResult {
  kind: 'success'
  yamlStr: string
  rawOutput: string
  attempts: number
  skipWarning?: string
}

/**
 * Run the agent with retry logic. Retries up to `maxRetries` times on failure.
 * Validates that extracted YAML parses into non-empty entries before accepting.
 * If the agent tries to skip (returns `# SKIP: reason` + `[]`), treats it as a
 * failed attempt and retries — issues that matched the GHES label filter should
 * always get a release note. If all attempts result in skips, the last skip
 * reason is attached as a warning.
 */
async function runAgentWithRetry(ctx: AgentContext, maxRetries = 2): Promise<AgentResult> {
  let lastError: Error | null = null
  let lastRawOutput = ''
  let lastSkipReason: string | null = null
  for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
    try {
      const output = await runAgent(ctx)
      lastRawOutput = output
      const yamlStr = extractYaml(output)
      if (yamlStr) {
        // Detect agent skip signals and treat as retryable failures.
        // The issue already matched GHES labels, so we always want a release note.
        const skipReason =
          extractSkipReason(yamlStr) ||
          (Array.isArray(yaml.load(yamlStr)) && (yaml.load(yamlStr) as unknown[]).length === 0
            ? extractSkipReason(output)
            : null)
        if (skipReason) {
          lastSkipReason = skipReason
          lastError = new Error(`Agent tried to skip: ${skipReason}`)
          // Fall through to retry
        } else {
          // Validate that the YAML actually contains usable entries
          const testEntries = parseNoteEntries(yamlStr, ctx.issueUrl)
          if (testEntries.length > 0) {
            return {
              kind: 'success',
              yamlStr,
              rawOutput: output,
              attempts: attempt,
              skipWarning: lastSkipReason ?? undefined,
            }
          }
          // YAML was extracted but empty/unparseable — retry
          lastError = new Error(
            `Agent returned YAML but it contained no valid entries (got: ${yamlStr.substring(0, 80)})`,
          )
        }
      } else {
        lastError = new Error('No YAML output from agent')
      }
    } catch (error) {
      lastError = error as Error
    }
    // Brief delay before retry
    if (attempt <= maxRetries) {
      await sleep(3000)
    }
  }
  // Attach raw output to the error for debugging
  const err = lastError || new Error('Agent failed after retries')
  ;(err as Error & { rawOutput?: string }).rawOutput = lastRawOutput
  throw err
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

const program = new Command()

program
  .name('generate-release-notes')
  .description(
    'Generate GHES release notes from github/releases issues using the ghes-release-notes agent',
  )
  .requiredOption('-r, --release <version>', 'GHES release number (e.g., 3.20, 3.21)')
  .option('--rc [boolean]', 'Generate release candidate notes (omit for GA)', (val: string) => {
    // Support both `--rc` (no value → true) and `--rc true`/`--rc false` (legacy)
    if (val === undefined || val === 'true') return true
    if (val === 'false') return false
    return true
  })
  .option('--stdout', 'Print output to console instead of writing to file')
  .option(
    '-i, --issue <value>',
    'Process a single issue by number or URL (replaces its entry if it already exists)',
    (val: string) => {
      // Accept a full URL like https://github.com/github/releases/issues/6768
      const urlMatch = val.match(/\/issues\/(\d+)/)
      if (urlMatch) return parseInt(urlMatch[1], 10)
      const num = parseInt(val, 10)
      if (isNaN(num)) {
        console.error(
          `Error: --issue must be a number or a github/releases issue URL, got "${val}"`,
        )
        process.exit(1)
      }
      return num
    },
  )
  .option('--force', 'Regenerate all notes from scratch, ignoring any existing file')
  .action(
    async (options: {
      release: string
      rc: boolean
      stdout?: boolean
      issue?: number
      force?: boolean
    }) => {
      const { release, stdout, issue: singleIssue, force } = options
      const rc = options.rc ?? false
      const spinner = ora()

      // ── Prerequisite checks ──
      try {
        execFileSync('gh', ['--version'], { stdio: 'ignore' })
      } catch {
        console.error(
          'Error: GitHub CLI (gh) is not installed or not on your PATH.\n' +
            'Install it from https://cli.github.com/ and run `gh auth login` to authenticate.',
        )
        process.exit(1)
      }

      try {
        findCopilotCli()
      } catch {
        console.error(
          'Error: Copilot CLI is not installed.\n' +
            "Install it from https://github.com/features/copilot/cli or via VS Code's GitHub Copilot Chat extension.",
        )
        process.exit(1)
      }

      // Validate release version format
      if (!/^\d+\.\d+$/.test(release)) {
        console.error(
          `Error: Invalid release version format "${release}". Expected: X.Y (e.g., 3.20)`,
        )
        process.exit(1)
      }

      // ── Step 1: Fetch release issues ──
      let issues: ReleaseIssue[]

      if (singleIssue) {
        // For a single issue, fetch it directly — no need to list all issues
        spinner.start(`Fetching issue #${singleIssue}...`)
        try {
          const output = gh([
            'issue',
            'view',
            String(singleIssue),
            '--repo',
            'github/releases',
            '--json',
            'number,title,url,body,labels',
          ])
          const issue = JSON.parse(output) as ReleaseIssue
          issues = [issue]
          spinner.succeed(`Fetched issue #${singleIssue}: ${issue.title}`)
        } catch (error) {
          spinner.fail(`Failed to fetch issue #${singleIssue}: ${(error as Error).message}`)
          process.exit(1)
        }
      } else {
        spinner.start(`Fetching open issues labeled "GHES ${release}"...`)
        try {
          issues = fetchReleaseIssues(release)
          spinner.succeed(`Found ${issues.length} open issues labeled "GHES ${release}"`)
        } catch (error) {
          spinner.fail(`Failed to fetch issues: ${(error as Error).message}`)
          process.exit(1)
        }

        if (issues.length === 0) {
          console.log('No issues found. Nothing to generate.')
          process.exit(0)
        }

        // Filter out GA meta-issues (e.g., "GHES 3.20 GA [GA]") — these are tracking issues, not features
        const originalCount = issues.length
        issues = issues.filter((issue) => {
          const title = issue.title.trim()
          // Strip all trailing label tags like [GA], [Public Preview], etc.
          const stripped = title.replace(/\s*\[[^\]]*\]/g, '').trim()
          // Skip issues whose title is just "GHES X.Y GA" or "GHES X.Y release"
          if (/^ghes\s+\d+\.\d+\s+ga$/i.test(stripped)) return false
          if (/^ghes\s+\d+\.\d+\s+release$/i.test(stripped)) return false
          return true
        })
        const filteredCount = originalCount - issues.length
        if (filteredCount > 0) {
          console.log(`  Filtered out ${filteredCount} meta-issue(s) (GA/release tracking)`)
        }

        // Filter out [Private Preview] issues — these never get release notes
        const beforePrivateFilter = issues.length
        issues = issues.filter((issue) => {
          return !/\[Private Preview\]/i.test(issue.title)
        })
        const privateFilteredCount = beforePrivateFilter - issues.length
        if (privateFilteredCount > 0) {
          console.log(
            `  Filtered out ${privateFilteredCount} private preview issue(s) (no release notes needed)`,
          )
        }

        // Filter out issues labeled "internal release" — these are internal-only and don't get release notes
        const beforeInternalFilter = issues.length
        issues = issues.filter((issue) => {
          return !issue.labels.some((l) => l.name.toLowerCase() === 'internal release')
        })
        const internalFilteredCount = beforeInternalFilter - issues.length
        if (internalFilteredCount > 0) {
          console.log(`  Filtered out ${internalFilteredCount} internal release issue(s)`)
        }
      }

      // Compute output path upfront so we can check for existing file
      const dirName = release.replace('.', '-')
      const fileName = rc ? '0-rc1.yml' : '0.yml'
      const outputDir = path.join(process.cwd(), 'data/release-notes/enterprise-server', dirName)
      const outputPath = path.join(outputDir, fileName)

      // ── Incremental mode: load existing entries ──
      const allEntries: NoteEntry[] = []
      let existingCoveredUrls = new Set<string>()

      if (!force && !stdout && fs.existsSync(outputPath)) {
        const existing = loadExistingEntries(outputPath)
        if (existing && existing.entries.length > 0) {
          // When --issue is specified, remove the old entry for that issue so it gets regenerated
          if (singleIssue) {
            const issueUrl = `https://github.com/github/releases/issues/${singleIssue}`
            const kept = existing.entries.filter((e) => e.sourceUrl !== issueUrl)
            allEntries.push(...kept)
            existing.coveredUrls.delete(issueUrl)
            existingCoveredUrls = existing.coveredUrls
            console.log(`  Loaded ${kept.length} existing note(s), will regenerate #${singleIssue}`)
          } else {
            allEntries.push(...existing.entries)
            existingCoveredUrls = existing.coveredUrls
            console.log(
              `  Loaded ${existing.entries.length} existing note(s) from ${path.relative(process.cwd(), outputPath)}`,
            )
          }
        }
      }

      // Filter out issues already covered by existing file (incremental mode)
      if (existingCoveredUrls.size > 0 && !singleIssue) {
        const beforeCount = issues.length
        issues = issues.filter((issue) => !existingCoveredUrls.has(issue.url))
        const skippedCount = beforeCount - issues.length
        if (skippedCount > 0) {
          console.log(`  Skipping ${skippedCount} already-processed issue(s)`)
        }
        if (issues.length === 0) {
          console.log('All issues already have notes. Use --force to regenerate.')
          process.exit(0)
        }
      }

      // ── Step 2: Find changelog PRs ──
      spinner.start('Finding changelog PRs...')
      const issueChangelogMap = new Map<number, ChangelogInfo | null>()
      let changelogFound = 0

      for (const issue of issues) {
        const changelog = findChangelogPr(issue)
        issueChangelogMap.set(issue.number, changelog)
        if (changelog) changelogFound++
      }
      spinner.succeed(`Found changelog PRs for ${changelogFound}/${issues.length} issues`)

      // ── Step 3: Run agent on each issue ──
      const failures: { issue: ReleaseIssue; error: string }[] = []
      const existingEntryCount = allEntries.length

      // Load valid headings once (cached, but clearer when hoisted)
      const featureHeadings = loadFeatureHeadings()

      // Helper to write current entries to file (called after each success and on Ctrl+C)
      const writeCurrentOutput = () => {
        if (stdout || allEntries.length === 0) return
        try {
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true })
          }
          const yamlOutput = buildReleaseNotesYaml(allEntries, rc, featureHeadings)
          fs.writeFileSync(outputPath, yamlOutput, 'utf8')
        } catch (err) {
          console.error(`  ⚠ Failed to write output file: ${(err as Error).message}`)
        }
      }

      // Register so Ctrl+C saves progress
      flushBeforeExit = writeCurrentOutput

      for (let i = 0; i < issues.length; i++) {
        const issue = issues[i]
        const changelog = issueChangelogMap.get(issue.number) || null
        const label = `[${i + 1}/${issues.length}] #${issue.number}: ${issue.title}`

        spinner.start(`${label}`)
        spinner.suffixText = `\n  Issue: ${issue.url}${changelog ? `\n  Changelog: ${changelog.url}` : ''}`

        try {
          const ctx: AgentContext = {
            issueUrl: issue.url,
            issueTitle: issue.title,
            issueBody: issue.body,
            changelogUrl: changelog?.url ?? null,
            changelogBody: changelog?.body ?? null,
            featureHeadings,
          }
          const result = await runAgentWithRetry(ctx)

          if (result.skipWarning) {
            console.log(
              `    ⚠ Check if this actually applies to GHES and not just GHEC: ${result.skipWarning}`,
            )
          }

          // entries are pre-validated by runAgentWithRetry, but re-parse for the actual list
          const entries = parseNoteEntries(result.yamlStr, issue.url)

          // Warn about headings that don't match any known feature heading or special section
          const specialHeadings = ['Changes', 'Closing down', 'Retired']
          const validHeadings = new Set([...featureHeadings, ...specialHeadings])
          for (const entry of entries) {
            if (!validHeadings.has(entry.heading)) {
              // Check for near-matches (case-insensitive)
              const lowerHeading = entry.heading.toLowerCase()
              const closeMatch = featureHeadings.find((h) => h.toLowerCase() === lowerHeading)
              if (closeMatch) {
                console.log(`    ⚠ Heading "${entry.heading}" auto-corrected to "${closeMatch}"`)
                entry.heading = closeMatch
              } else {
                console.log(
                  `    ⚠ Unknown heading "${entry.heading}" — will be placed in changes section`,
                )
              }
            }
          }

          // Dedup: avoid duplicate notes if the same issue was partially loaded from an existing file
          for (const entry of entries) {
            const isDuplicate = allEntries.some(
              (existing) =>
                existing.sourceUrl === entry.sourceUrl &&
                existing.heading === entry.heading &&
                existing.notes.length === entry.notes.length &&
                existing.notes.every((n, idx) => n === entry.notes[idx]),
            )
            if (!isDuplicate) {
              allEntries.push(entry)
            }
          }
          const retryNote = result.attempts > 1 ? ` (attempt ${result.attempts})` : ''
          spinner.suffixText = ''
          spinner.succeed(`${label}${retryNote}`)

          // Write incrementally so progress is saved
          writeCurrentOutput()
        } catch (error) {
          const err = error as Error & { rawOutput?: string }
          const msg = err.message
          const isSkipFailure = msg.startsWith('Agent tried to skip:')
          failures.push({ issue, error: msg })
          spinner.suffixText = ''
          if (isSkipFailure) {
            // Clean output for skip failures — no raw agent dump
            const skipReason = msg.replace('Agent tried to skip: ', '')
            spinner.warn(`${label} — skipped by agent`)
            console.log(`    Reason: ${skipReason}`)
          } else {
            spinner.fail(`${label} — ${msg.substring(0, 100)}`)
            // Show raw agent output only for real errors
            if (err.rawOutput) {
              console.log('\n  --- Raw agent output (last attempt) ---')
              const truncated =
                err.rawOutput.length > 2000
                  ? `${err.rawOutput.substring(0, 2000)}\n  ... (truncated)`
                  : err.rawOutput
              console.log(truncated)
              console.log('  ---')
            }
          }
        }
      }

      // ── Step 4: Final summary ──
      flushBeforeExit = null
      const newCount = allEntries.length - existingEntryCount
      if (existingEntryCount > 0) {
        console.log(
          `\nTotal: ${allEntries.length} note(s) (${existingEntryCount} existing + ${newCount} new from ${issues.length} issues)`,
        )
      } else {
        console.log(`\nGenerated ${allEntries.length} note(s) from ${issues.length} issues`)
      }
      if (failures.length > 0) {
        console.log(`⚠️  ${failures.length} issue(s) failed:`)
        for (const f of failures) {
          console.log(`   #${f.issue.number}: ${f.error.substring(0, 100)}`)
        }
      }

      if (stdout) {
        if (failures.length > 0 && allEntries.length === 0) {
          // All issues failed — don't print empty template
          process.exit(1)
        }
        if (singleIssue) {
          // For a single issue + stdout, print just the raw note YAML (not the full template)
          const newEntries = allEntries.filter(
            (e) => e.sourceUrl === `https://github.com/github/releases/issues/${singleIssue}`,
          )
          if (newEntries.length > 0) {
            console.log('\n--- Generated YAML ---\n')
            const noteLines: string[] = []
            for (const entry of newEntries) {
              noteLines.push(`- heading: ${entry.heading}`)
              noteLines.push('  notes:')
              appendNoteLines(noteLines, [entry], '    ')
            }
            console.log(noteLines.join('\n'))
          }
        } else {
          const yamlOutput = buildReleaseNotesYaml(allEntries, rc, featureHeadings)
          console.log('\n--- Generated YAML ---\n')
          console.log(yamlOutput)
        }
      } else if (allEntries.length > 0) {
        writeCurrentOutput()
        console.log(`\n✅ Written to: ${path.relative(process.cwd(), outputPath)}`)
      } else {
        console.log('\nNo entries generated — no file written.')
      }

      // Clean up stdin raw mode so the process can exit gracefully
      if (process.stdin.isTTY) {
        process.stdin.setRawMode(false)
        process.stdin.pause()
      }
    },
  )

program.parse(process.argv)
