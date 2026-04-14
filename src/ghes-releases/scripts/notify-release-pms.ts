/**
 * @purpose Writer tool
 * @description Notify PMs to review their GHES release notes on a PR
 *
 * Notify PMs about generated GHES release notes by posting a review comment
 * on each source release issue in github/releases.
 *
 * For each release issue URL found in the YAML file's `# https://...` comments,
 * this script posts a comment asking the PM to review the note in the PR and
 * react with 🚀 once satisfied.
 *
 * Usage:
 *   npm run notify-release-pms -- --release 3.20 --rc --pr 12345 [--dry-run]
 */
import { Command } from 'commander'
import { execFileSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import ora from 'ora'

// ─── Types ───────────────────────────────────────────────────────────────────

interface SourceNote {
  issueUrl: string
  issueNumber: number
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
 * Parse the release notes YAML file and extract source issue URLs with their
 * line numbers. Each `# https://github.com/github/releases/issues/NNNN` comment
 * maps to the note(s) that follow it.
 */
function extractSourceNotes(yamlPath: string): SourceNote[] {
  const content = fs.readFileSync(yamlPath, 'utf8')
  const lines = content.split('\n')
  const notes: SourceNote[] = []
  const seen = new Set<number>()

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^\s*#\s*(https:\/\/github\.com\/github\/releases\/issues\/(\d+))/)
    if (match) {
      const issueNumber = parseInt(match[2], 10)
      // Deduplicate — some issues appear multiple times (e.g., in features + changes)
      // We use the first occurrence so the link points to the primary note
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

/**
 * Calculate the next weekday (Mon–Fri) at least `days` calendar days from now.
 * If the resulting date lands on a weekend, it rolls forward to Monday.
 */
function getReviewDeadline(days: number): string {
  const date = new Date()
  date.setDate(date.getDate() + days)
  const day = date.getDay()
  if (day === 0) date.setDate(date.getDate() + 1) // Sunday → Monday
  if (day === 6) date.setDate(date.getDate() + 2) // Saturday → Monday
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

/**
 * Build the comment body for a release issue notification.
 */
function buildCommentBody(
  version: string,
  rc: boolean,
  prNumber: number,
  relativeFilePath: string,
  reviewDate?: string,
): string {
  const releaseType = rc ? 'RC' : 'GA'
  const prUrl = `https://github.com/github/docs-internal/pull/${prNumber}`
  const fileUrl = `${prUrl}/files`
  const deadline = reviewDate
    ? new Date(`${reviewDate}T00:00:00`).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : getReviewDeadline(10)

  // Use a marker so we can identify our comments later (for check-release-approvals).
  // Include releaseType so RC and GA comments are distinguishable.
  const marker = `<!-- ghes-release-note-review: ${version}-${releaseType.toLowerCase()} -->`

  return `${marker}
### GHES ${version} ${releaseType} release note review

Hello! A release note has been created for this feature by a Docs team member assisted by Copilot. If you'd like to review it:

1. [**Review the note in the PR**](${fileUrl}) (search for this issue's URL within \`${relativeFilePath}\`)
2. If the note looks good, **react to this comment with 🚀**.
3. If it needs changes, suggest edits directly in the PR, then **react with 🚀** to this comment when you're done.

We ask that you submit any changes by **${deadline}** to help ensure timely release notes.

The 🚀 tells us you've completed your review. If we don't hear from you, we'll go ahead with this note.

Questions? Ask us in [#docs-ghes-releases](https://github-grid.enterprise.slack.com/archives/C0AQ37XBK7D).`
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

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

      // Validate --review-date format if provided
      if (reviewDate && !/^\d{4}-\d{2}-\d{2}$/.test(reviewDate)) {
        console.error(
          `Error: Invalid date format "${reviewDate}". Expected: YYYY-MM-DD (e.g., 2026-04-20)`,
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

      // Determine RC vs GA
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

      let rc: boolean
      let yamlPath: string

      if (options.rc) {
        rc = true
        yamlPath = rcPath
      } else if (options.ga) {
        rc = false
        yamlPath = gaPath
      } else {
        // Auto-detect: prefer GA if it exists, otherwise RC (consistent with generate-release-notes)
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

      if (!fs.existsSync(yamlPath)) {
        console.error(`Error: Release notes file not found: ${relativeFilePath}`)
        process.exit(1)
      }

      // ── Step 1: Extract source issue URLs ──
      spinner.start('Parsing release notes file...')
      const sourceNotes = extractSourceNotes(yamlPath)
      spinner.succeed(`Found ${sourceNotes.length} unique release issue(s) in ${relativeFilePath}`)

      if (sourceNotes.length === 0) {
        console.log('No release issues found in the YAML file. Nothing to notify.')
        process.exit(0)
      }

      // ── Step 2: Check for existing comments (avoid duplicates) ──
      const releaseType = rc ? 'rc' : 'ga'
      const marker = `<!-- ghes-release-note-review: ${release}-${releaseType} -->`
      const alreadyCommented = new Set<number>()

      if (!dryRun) {
        spinner.start('Checking for existing notification comments...')
        for (const note of sourceNotes) {
          try {
            const comments = gh([
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
            // If we can't read comments, we'll try to post and handle errors then
          }
        }
        spinner.succeed(
          alreadyCommented.size > 0
            ? `Skipping ${alreadyCommented.size} issue(s) already notified`
            : 'No existing notifications found',
        )
      }

      // ── Step 3: Post comments ──
      const toNotify = sourceNotes.filter((n) => !alreadyCommented.has(n.issueNumber))

      if (toNotify.length === 0) {
        console.log('All release issues have already been notified. Nothing to do.')
        process.exit(0)
      }

      let posted = 0
      let failed = 0

      for (let i = 0; i < toNotify.length; i++) {
        const note = toNotify[i]
        const commentBody = buildCommentBody(release, rc, prNumber, relativeFilePath, reviewDate)

        const label = `[${i + 1}/${toNotify.length}] #${note.issueNumber}`

        if (dryRun) {
          console.log(`\n${'─'.repeat(60)}`)
          console.log(`${label} — ${note.issueUrl}`)
          console.log(`(Dry run) Comment body that would be posted:`)
          console.log(`${'─'.repeat(60)}`)
          console.log(commentBody)
          posted++
          continue
        }

        spinner.start(`${label} — Posting comment...`)
        try {
          gh([
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

      // ── Summary ──
      console.log(`\n${'─'.repeat(40)}`)
      console.log(`${dryRun ? '🔍 Dry run' : '✅ Done'}`)
      console.log(`  ${posted} comment(s) ${dryRun ? 'would be posted' : 'posted'}`)
      if (failed > 0) console.log(`  ${failed} failed`)
      if (alreadyCommented.size > 0) {
        console.log(`  ${alreadyCommented.size} previously notified (skipped)`)
      }
    },
  )

program.parse(process.argv)
