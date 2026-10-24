// @purpose Writer tool
// @description Notify PMs to review their GHES release notes on a PR
//
// Posts docs-bot review comments on github/releases source issues from YAML source comments.
// Product managers (PMs) review the PR and react with 🚀 when satisfied.
// GitHub Actions usage: gh workflow run notify-release-pms.yml -f release=<release> -f pr=<pr>
// Local preview: npm run notify-release-pms -- --release <release> --pr <pr> --dry-run
import { Command } from 'commander'
import { execFileSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import ora from 'ora'

export interface SourceNote {
  issueUrl: string
  issueNumber: number
}

// DOCS_BOT_PAT_BASE authenticates CI reads; caller gh auth handles local reads.
function ghRead(args: string[]): string {
  const env = { ...process.env }
  if (env.DOCS_BOT_PAT_BASE) {
    env.GH_TOKEN = env.DOCS_BOT_PAT_BASE
  }
  delete (env as Record<string, string | undefined>).GITHUB_TOKEN
  return execFileSync('gh', args, {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    env,
    maxBuffer: 10 * 1024 * 1024,
  })
}

// Posting comments requires DOCS_BOT_PAT_BASE so they come from docs-bot.
function ghWrite(args: string[]): string {
  const token = process.env.DOCS_BOT_PAT_BASE
  if (!token) {
    console.error(
      'Error: DOCS_BOT_PAT_BASE environment variable is not set.\n' +
        'To post comments as docs-bot, run this script via the GitHub Actions workflow:\n' +
        '  gh workflow run notify-release-pms.yml -f release=<version> -f pr=<number>\n' +
        'To preview comments locally, use --dry-run (no token needed).',
    )
    process.exit(1)
  }
  const env = { ...process.env, GH_TOKEN: token }
  // GH_TOKEN must take precedence over any pre-existing GITHUB_TOKEN.
  delete (env as Record<string, string | undefined>).GITHUB_TOKEN
  return execFileSync('gh', args, {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    env,
    maxBuffer: 10 * 1024 * 1024,
  })
}

// Source issue URL comments attach each generated note to its github/releases issue.
export function parseSourceNotes(content: string): SourceNote[] {
  const lines = content.split('\n')
  const notes: SourceNote[] = []
  const seen = new Set<number>()

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^\s*#\s*(https:\/\/github\.com\/github\/releases\/issues\/(\d+))/)
    if (match) {
      const issueNumber = parseInt(match[2], 10)
      // Keep the first occurrence so duplicate issue links point to the primary note.
      if (!seen.has(issueNumber)) {
        seen.add(issueNumber)
        notes.push({
          issueUrl: match[1],
          issueNumber,
        })
      }
    }
  }

  return notes
}

function extractSourceNotes(yamlPath: string): SourceNote[] {
  const content = fs.readFileSync(yamlPath, 'utf8')
  return parseSourceNotes(content)
}

export function buildCommentBody(
  version: string,
  rc: boolean,
  prNumber: number,
  assignees: string[],
): string {
  const releaseType = rc ? 'RC' : 'GA'
  const prUrl = `https://github.com/github/docs-internal/pull/${prNumber}`
  const fileUrl = `${prUrl}/files`

  // Mark comments for duplicate detection; releaseType keeps RC and GA distinct.
  const marker = buildMarker(version, releaseType.toLowerCase() as 'rc' | 'ga')

  const mentions = assignees.length > 0 ? `${assignees.map((a) => `@${a}`).join(' ')} ` : ''

  return `${marker}
### GHES ${version} ${releaseType} release note review

👋 ${mentions}A Copilot-generated release note has been added in [docs-internal PR #${prNumber}](${fileUrl}).

You're welcome to edit it in the PR. If you do nothing, the note will be published after review from a Docs team member.

Any questions, ask in [#docs-ghes-releases](https://github-grid.enterprise.slack.com/archives/C0AQ37XBK7D).`
}

export function buildMarker(version: string, releaseType: 'rc' | 'ga'): string {
  return `<!-- ghes-release-note-review: ${version}-${releaseType} -->`
}

const program = new Command()

program
  .name('notify-release-pms')
  .description(
    'Post review notification comments on release issues for generated GHES release notes',
  )
  .requiredOption('-r, --release <version>', 'GHES release number (e.g., 3.20)')
  .requiredOption('--pr <number>', 'Pull request number in docs-internal', (val: string) => {
    const n = parseInt(val, 10)
    if (Number.isNaN(n) || n <= 0) {
      console.error(`Error: --pr must be a positive integer, got "${val}"`)
      process.exit(1)
    }
    return n
  })
  .option('--rc', 'Whether this is a release candidate (defaults to auto-detect from filename)')
  .option('--ga', 'Whether this is a GA release (defaults to auto-detect from filename)')
  .option('--dry-run', 'Print comments to stdout instead of posting them')
  .option(
    '--review-date <date>',
    'Override the review deadline date (YYYY-MM-DD format, e.g., 2026-04-20)',
  )
  .action(
    (options: {
      release: string
      pr: number
      rc?: boolean
      ga?: boolean
      dryRun?: boolean
      reviewDate?: string
    }) => {
      const { release, pr: prNumber, dryRun, reviewDate } = options
      const spinner = ora()

      if (reviewDate && !/^\d{4}-\d{2}-\d{2}$/.test(reviewDate)) {
        console.error(
          `Error: Invalid date format "${reviewDate}". Expected: YYYY-MM-DD (e.g., 2026-04-20)`,
        )
        process.exit(1)
      }

      if (!/^\d+\.\d+$/.test(release)) {
        console.error(
          `Error: Invalid release version format "${release}". Expected: X.Y (e.g., 3.20)`,
        )
        process.exit(1)
      }

      const dirName = release.replace('.', '-')
      const rcPath = path.join(
        process.cwd(),
        'data/release-notes/enterprise-server',
        dirName,
        '0-rc1.yml',
      )
      const gaPath = path.join(
        process.cwd(),
        'data/release-notes/enterprise-server',
        dirName,
        '0.yml',
      )

      if (options.rc && options.ga) {
        console.error('Error: --rc and --ga cannot be used together.')
        process.exit(1)
      }

      let rc: boolean
      let yamlPath: string

      if (options.rc) {
        rc = true
        yamlPath = rcPath
        if (!fs.existsSync(yamlPath)) {
          console.error(`Error: RC release notes file not found: ${rcPath}`)
          process.exit(1)
        }
      } else if (options.ga) {
        rc = false
        yamlPath = gaPath
        if (!fs.existsSync(yamlPath)) {
          console.error(`Error: GA release notes file not found: ${gaPath}`)
          process.exit(1)
        }
      } else {
        // Auto-detect prefers GA over RC to match generate-release-notes.
        if (fs.existsSync(gaPath)) {
          rc = false
          yamlPath = gaPath
        } else if (fs.existsSync(rcPath)) {
          rc = true
          yamlPath = rcPath
        } else {
          console.error(
            `Error: No release notes file found for ${release}. Expected:\n  ${rcPath}\n  ${gaPath}`,
          )
          process.exit(1)
        }
      }

      const relativeFilePath = path.relative(process.cwd(), yamlPath)

      spinner.start('Parsing release notes file...')
      const sourceNotes = extractSourceNotes(yamlPath)
      spinner.succeed(`Found ${sourceNotes.length} unique release issue(s) in ${relativeFilePath}`)

      if (sourceNotes.length === 0) {
        console.log('No release issues found in the YAML file. Nothing to notify.')
        process.exit(0)
      }

      const releaseType = rc ? 'rc' : 'ga'
      const marker = buildMarker(release, releaseType)
      const alreadyCommented = new Set<number>()

      spinner.start('Checking for existing notification comments...')
      for (const note of sourceNotes) {
        try {
          const comments = ghRead([
            'api',
            `repos/github/releases/issues/${note.issueNumber}/comments`,
            '--paginate',
            '--jq',
            `.[].body`,
          ])
          if (comments.includes(marker)) {
            alreadyCommented.add(note.issueNumber)
          }
        } catch {
          // Post anyway when comment reads fail; posting reports permission errors.
        }
      }
      if (alreadyCommented.size > 0) {
        spinner.succeed(`Found ${alreadyCommented.size} issue(s) already notified`)
        for (const issueNumber of alreadyCommented) {
          console.log(
            `  Skipping #${issueNumber} — auto-comment on github/releases#${issueNumber} already exists`,
          )
        }
      } else {
        spinner.succeed('No existing notifications found')
      }

      const toNotify = sourceNotes.filter((n) => !alreadyCommented.has(n.issueNumber))

      if (toNotify.length === 0) {
        console.log('All release issues have already been notified. Nothing to do.')
        process.exit(0)
      }

      let posted = 0
      let failed = 0

      for (let i = 0; i < toNotify.length; i++) {
        const note = toNotify[i]
        // Mention assignees, or the non-bot issue author when no assignee exists.
        let assignees: string[] = []
        try {
          const raw = ghRead(['api', `repos/github/releases/issues/${note.issueNumber}`])
          const issue = JSON.parse(raw)
          assignees = (issue.assignees || []).map((a: { login: string }) => a.login)
          if (assignees.length === 0 && issue.user?.login && issue.user.type !== 'Bot') {
            assignees = [issue.user.login]
          }
        } catch {
          // Post without mentions when the issue fetch fails.
        }

        const commentBody = buildCommentBody(release, rc, prNumber, assignees)

        const label = `[${i + 1}/${toNotify.length}] #${note.issueNumber}`

        if (dryRun) {
          console.log(`\n${'─'.repeat(60)}`)
          console.log(`${label} — ${note.issueUrl}`)
          console.log(`(Dry run) Comment that would be posted by docs-bot:`)
          console.log(`${'─'.repeat(60)}`)
          console.log(commentBody)
          posted++
          continue
        }

        spinner.start(`${label} — Posting comment...`)
        try {
          ghWrite([
            'issue',
            'comment',
            String(note.issueNumber),
            '--repo',
            'github/releases',
            '--body',
            commentBody,
          ])
          spinner.succeed(`${label} — Comment posted`)
          posted++
        } catch (error) {
          spinner.fail(`${label} — Failed: ${(error as Error).message.substring(0, 100)}`)
          failed++
        }
      }

      console.log(`\n${'─'.repeat(40)}`)
      console.log(`${dryRun ? '🔍 Dry run' : '✅ Done'}`)
      console.log(
        `  ${posted} comment(s) ${dryRun ? 'would be posted by docs-bot' : 'posted by docs-bot'}`,
      )
      if (failed > 0) console.log(`  ${failed} failed`)
      if (alreadyCommented.size > 0) {
        console.log(`  ${alreadyCommented.size} previously notified (skipped)`)
      }
      if (failed > 0) process.exit(1)
    },
  )

// Tests import helpers without running the CLI.
if (import.meta.url === `file://${process.argv[1]}`) {
  program.parse(process.argv)
}
