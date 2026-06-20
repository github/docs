/**
 * @purpose Writer tool
 * @description Check PM approval status for GHES release notes
 *
 * Scans release issues that were previously notified by `notify-release-pms`
 * and checks for 🚀 reactions on the notification comments.
 *
 * Usage:
 *   npm run check-release-approvals -- --release 3.20 [--rc|--ga]
 */
import { Command } from 'commander'
import { execFileSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import ora from 'ora'

import { buildMarker } from '@/ghes-releases/scripts/notify-release-pms'

// ─── Types ───────────────────────────────────────────────────────────────────

interface ApprovalStatus {
  issueNumber: number
  issueUrl: string
  commentId: number | null
  approved: boolean
  rocketCount: number
  rocketUsers: string[]
  hasReplies: boolean
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
 * Extract unique release issue numbers from a YAML file's source comments.
 */
function extractIssueNumbers(yamlPath: string): number[] {
  const content = fs.readFileSync(yamlPath, 'utf8')
  const numbers = new Set<number>()
  const regex = /^\s*#\s*https:\/\/github\.com\/github\/releases\/issues\/(\d+)/gm
  let match
  while ((match = regex.exec(content)) !== null) {
    numbers.add(parseInt(match[1], 10))
  }
  return [...numbers]
}

/**
 * Find our notification comment on an issue and check its reactions.
 */
function checkIssueApproval(issueNumber: number, marker: string): ApprovalStatus {
  const issueUrl = `https://github.com/github/releases/issues/${issueNumber}`
  const result: ApprovalStatus = {
    issueNumber,
    issueUrl,
    commentId: null,
    approved: false,
    rocketCount: 0,
    rocketUsers: [],
    hasReplies: false,
  }

  try {
    // Fetch all comments on the issue
    const commentsJson = gh([
      'api',
      `repos/github/releases/issues/${issueNumber}/comments`,
      '--paginate',
    ])
    const comments = JSON.parse(commentsJson) as Array<{
      id: number
      body: string
      created_at: string
    }>

    // Find our notification comment (use findLast so re-runs pick up the latest)
    const ourComment = comments.findLast((c) => c.body.includes(marker))
    if (!ourComment) {
      return result
    }

    result.commentId = ourComment.id

    // Check if there are replies after our comment (indicating feedback)
    const ourCommentTime = new Date(ourComment.created_at).getTime()
    result.hasReplies = comments.some(
      (c) => c.id !== ourComment.id && new Date(c.created_at).getTime() > ourCommentTime,
    )

    // Fetch reactions on our comment
    const reactionsJson = gh([
      'api',
      `repos/github/releases/issues/comments/${ourComment.id}/reactions`,
      '--paginate',
    ])
    const reactions = JSON.parse(reactionsJson) as Array<{
      content: string
      user: { login: string }
    }>

    const rockets = reactions.filter((r) => r.content === 'rocket')
    result.rocketCount = rockets.length
    result.rocketUsers = rockets.map((r) => r.user.login)
    result.approved = rockets.length > 0
  } catch {
    // API error — leave as unapproved
  }

  return result
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

const program = new Command()

program
  .name('check-release-approvals')
  .description('Check PM approval status for generated GHES release notes')
  .requiredOption('-r, --release <version>', 'GHES release number (e.g., 3.20)')
  .option('--rc', 'Check the release candidate file')
  .option('--ga', 'Check the GA release file')
  .option('--json', 'Output results as JSON')
  .action((options: { release: string; rc?: boolean; ga?: boolean; json?: boolean }) => {
    const { release } = options
    const spinner = ora()

    // Validate release version format
    if (!/^\d+\.\d+$/.test(release)) {
      console.error(
        `Error: Invalid release version format "${release}". Expected: X.Y (e.g., 3.20)`,
      )
      process.exit(1)
    }

    // Determine which file to check
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

    let yamlPath: string
    if (options.rc) {
      yamlPath = rcPath
    } else if (options.ga) {
      yamlPath = gaPath
    } else {
      // Auto-detect: prefer GA if it exists, otherwise RC (consistent with generate-release-notes)
      if (fs.existsSync(gaPath)) {
        yamlPath = gaPath
      } else if (fs.existsSync(rcPath)) {
        yamlPath = rcPath
      } else {
        console.error(`Error: No release notes file found for ${release}.`)
        process.exit(1)
      }
    }

    if (!fs.existsSync(yamlPath)) {
      console.error(`Error: File not found: ${yamlPath}`)
      process.exit(1)
    }

    const relativeFilePath = path.relative(process.cwd(), yamlPath)

    // ── Step 1: Extract issue numbers ──
    spinner.start('Parsing release notes file...')
    const issueNumbers = extractIssueNumbers(yamlPath)
    spinner.succeed(`Found ${issueNumbers.length} release issue(s) in ${relativeFilePath}`)

    if (issueNumbers.length === 0) {
      console.log('No release issues found.')
      process.exit(0)
    }

    // ── Step 2: Check each issue ──
    const isRc = yamlPath === rcPath
    const releaseType = isRc ? 'rc' : 'ga'
    const marker = buildMarker(release, releaseType)
    const statuses: ApprovalStatus[] = []

    for (let i = 0; i < issueNumbers.length; i++) {
      const issueNumber = issueNumbers[i]
      spinner.start(`[${i + 1}/${issueNumbers.length}] Checking #${issueNumber}...`)
      const status = checkIssueApproval(issueNumber, marker)
      statuses.push(status)
      spinner.succeed(
        `[${i + 1}/${issueNumbers.length}] #${issueNumber} — ${
          status.commentId === null
            ? '⚪ Not notified'
            : status.approved
              ? `🚀 Approved (${status.rocketUsers.join(', ')})`
              : status.hasReplies
                ? '💬 Has replies (pending)'
                : '⏳ Pending'
        }`,
      )
    }

    // ── Step 3: Output results ──
    if (options.json) {
      console.log(JSON.stringify(statuses, null, 2))
      return
    }

    // Summary table
    const approved = statuses.filter((s) => s.approved)
    const pending = statuses.filter((s) => s.commentId !== null && !s.approved)
    const notNotified = statuses.filter((s) => s.commentId === null)
    const withReplies = pending.filter((s) => s.hasReplies)

    console.log(`\n${'═'.repeat(60)}`)
    console.log(`GHES ${release} Release Note Approval Status`)
    console.log(`${'═'.repeat(60)}`)
    console.log(`  🚀 Approved:     ${approved.length}/${statuses.length}`)
    if (pending.length > 0) {
      console.log(`  ⏳ Pending:      ${pending.length}`)
    }
    if (withReplies.length > 0) {
      console.log(`  💬 Has replies:  ${withReplies.length} (may have feedback)`)
    }
    if (notNotified.length > 0) {
      console.log(`  ⚪ Not notified: ${notNotified.length}`)
    }

    // List pending issues for easy follow-up
    if (pending.length > 0) {
      console.log(`\nPending review:`)
      for (const s of pending) {
        const suffix = s.hasReplies ? ' 💬' : ''
        console.log(`  #${s.issueNumber} — ${s.issueUrl}${suffix}`)
      }
    }

    if (notNotified.length > 0) {
      console.log(`\nNot yet notified (run notify-release-pms first):`)
      for (const s of notNotified) {
        console.log(`  #${s.issueNumber} — ${s.issueUrl}`)
      }
    }

    // Exit code: 0 if all approved, 1 if any pending
    if (approved.length < statuses.length) {
      process.exit(1)
    }
  })

program.parse(process.argv)
