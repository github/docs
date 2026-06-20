/**
 * PR Link Checker
 *
 * Fast validation of internal links in changed files.
 * Designed to run in <10 minutes on typical PRs.
 *
 * Usage:
 *   npm run check-links-pr
 *   npm run check-links-pr -- --files content/actions/index.md content/repos/index.md
 *
 * Environment variables:
 *   FILES_CHANGED - JSON array of changed files (from GitHub Actions)
 *   GITHUB_TOKEN - For posting PR comments
 *   ACTION_RUN_URL - Link to the action run
 *   SHOULD_COMMENT - Whether to post PR comments (default: false)
 *   FAIL_ON_FLAW - Exit with error code if broken links found (default: true)
 */

import { program } from 'commander'
import chalk from 'chalk'

import warmServer from '@/frame/lib/warm-server'
import {
  extractLinksWithLiquid,
  createLiquidContext,
  checkInternalLink,
  checkAssetLink,
  isAssetLink,
  getRelativePath,
} from '@/links/lib/extract-links'
import { type BrokenLink, generatePRComment, groupBrokenLinks } from '@/links/lib/link-report'
import { uploadArtifact } from '@/links/scripts/upload-artifact'
import github from '@/workflows/github'
import { getActionContext } from '@/workflows/action-context'
import type { Page } from '@/types'
import fs from 'fs'
import path from 'path'

interface CheckResult {
  file: string
  brokenLinks: BrokenLink[]
  redirectLinks: BrokenLink[]
  totalLinksChecked: number
}

/**
 * Check all internal links in a single file
 */
async function checkFile(
  filePath: string,
  pageMap: Record<string, Page>,
  redirects: Record<string, string>,
  version: string = 'free-pro-team@latest',
  language: string = 'en',
): Promise<CheckResult> {
  const brokenLinks: BrokenLink[] = []
  const redirectLinks: BrokenLink[] = []
  let totalLinksChecked = 0

  // Read file content
  let content: string
  try {
    content = fs.readFileSync(filePath, 'utf-8')
  } catch {
    console.warn(`Could not read file: ${filePath}`)
    return { file: filePath, brokenLinks, redirectLinks, totalLinksChecked }
  }

  // Create context for Liquid rendering
  const context = createLiquidContext(version, language)

  // Extract links after Liquid rendering
  const { internalLinks } = await extractLinksWithLiquid(content, context)

  // Check each internal link (exclude imageLinks - they're static assets, not docs pages)
  totalLinksChecked = internalLinks.length

  for (const link of internalLinks) {
    // Check if this is an asset link (images, etc.) - verify file exists on disk
    if (isAssetLink(link.href)) {
      if (!checkAssetLink(link.href)) {
        brokenLinks.push({
          href: link.href,
          file: getRelativePath(filePath),
          lines: [link.line],
          text: link.text,
          isAutotitle: link.isAutotitle,
        })
      }
      continue
    }

    const result = checkInternalLink(link.href, pageMap, redirects)

    if (!result.exists) {
      brokenLinks.push({
        href: link.href,
        file: getRelativePath(filePath),
        lines: [link.line],
        text: link.text,
        isAutotitle: link.isAutotitle,
      })
    } else if (result.isRedirect) {
      redirectLinks.push({
        href: link.href,
        file: getRelativePath(filePath),
        lines: [link.line],
        text: link.text,
        isAutotitle: link.isAutotitle,
        isRedirect: true,
        redirectTarget: result.redirectTarget,
      })
    }
  }

  return { file: filePath, brokenLinks, redirectLinks, totalLinksChecked }
}

/**
 * Get list of changed files from environment or CLI args
 */
function getChangedFiles(cliFiles?: string[]): string[] {
  // CLI args take precedence
  if (cliFiles && cliFiles.length > 0) {
    return cliFiles
  }

  // Check environment variable (from GitHub Actions)
  const filesChanged = process.env.FILES_CHANGED
  if (filesChanged) {
    // Try parsing as JSON first
    try {
      const parsed = JSON.parse(filesChanged)
      if (Array.isArray(parsed)) {
        return parsed
      }
    } catch {
      // Not JSON, treat as space-separated string (tj-actions/changed-files format)
      return filesChanged.split(/\s+/).filter(Boolean)
    }
  }

  return []
}

/**
 * Filter to only content/data files that might contain links
 */
function filterContentFiles(files: string[]): string[] {
  return files.filter((file) => {
    // Only check Markdown files in content/ or data/
    if (!file.endsWith('.md')) return false
    if (file.startsWith('content/') || file.startsWith('data/')) return true
    return false
  })
}

/**
 * Post a comment on the PR with broken link results
 */
async function commentOnPR(brokenLinks: BrokenLink[], actionUrl?: string) {
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    console.warn('No GITHUB_TOKEN, skipping PR comment')
    return
  }

  const actionContext = getActionContext()
  const { owner, repo } = actionContext
  const pullNumber = actionContext.pull_request?.number

  if (!owner || !repo || !pullNumber) {
    console.warn('Not in PR context, skipping comment')
    return
  }

  const octokit = github()
  const comment = generatePRComment(brokenLinks, { actionUrl })

  if (!comment) {
    console.log('No broken links to report')
    return
  }

  // Find existing comment
  const { data: comments } = await octokit.rest.issues.listComments({
    owner,
    repo,
    issue_number: pullNumber,
  })

  const marker = '<!-- link-checker-pr-comment -->'
  const existingComment = comments.find((c) => c.body?.includes(marker))

  if (existingComment) {
    await octokit.rest.issues.updateComment({
      owner,
      repo,
      comment_id: existingComment.id,
      body: comment,
    })
    console.log(`Updated PR comment: ${existingComment.id}`)
  } else {
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: pullNumber,
      body: comment,
    })
    console.log(`Created PR comment on #${pullNumber}`)
  }
}

/**
 * Main entry point
 */
async function main() {
  program
    .name('check-links-pr')
    .description('Check internal links in changed files')
    .option('-f, --files <files...>', 'Files to check (overrides FILES_CHANGED env)')
    .option('--all', 'Check all content files (for testing)')
    .option('--verbose', 'Verbose output')
    .parse()

  const options = program.opts()
  const startTime = Date.now()

  console.log(chalk.blue('🔗 PR Link Checker'))
  console.log('')

  // Get files to check
  let files = getChangedFiles(options.files)

  if (options.all) {
    // For testing: check all content files (limited)
    const glob = await import('glob')
    files = glob.sync('content/**/*.md').slice(0, 50)
    console.log(`Checking ${files.length} files (--all mode, limited to 50)`)
  } else if (files.length === 0) {
    console.log('No files to check. Exiting.')
    process.exit(0)
  }

  // Filter to content files only
  const contentFiles = filterContentFiles(files)
  if (contentFiles.length === 0) {
    console.log('No content files in changed files. Exiting.')
    process.exit(0)
  }

  console.log(`Checking ${contentFiles.length} file(s)...`)

  // Load page data
  console.log('Loading page data...')
  const { pages: pageMap, redirects } = await warmServer(['en'])
  console.log(
    `Loaded ${Object.keys(pageMap).length} pages, ${Object.keys(redirects).length} redirects`,
  )

  // Check each file
  const allBrokenLinks: BrokenLink[] = []
  const allRedirectLinks: BrokenLink[] = []
  let totalLinksChecked = 0

  for (const file of contentFiles) {
    const filePath = path.resolve(file)
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${file}`)
      continue
    }

    if (options.verbose) {
      console.log(`  Checking: ${file}`)
    }

    const result = await checkFile(filePath, pageMap, redirects)
    allBrokenLinks.push(...result.brokenLinks)
    allRedirectLinks.push(...result.redirectLinks)
    totalLinksChecked += result.totalLinksChecked
  }

  // Report results
  const duration = ((Date.now() - startTime) / 1000).toFixed(1)
  console.log('')
  console.log(chalk.blue(`Checked ${totalLinksChecked} links in ${duration}s`))

  if (allBrokenLinks.length === 0 && allRedirectLinks.length === 0) {
    console.log(chalk.green('✅ All links valid!'))
    process.exit(0)
  }

  // Group and display results
  if (allBrokenLinks.length > 0) {
    console.log('')
    console.log(chalk.red(`❌ ${allBrokenLinks.length} broken link(s):`))
    const grouped = groupBrokenLinks(allBrokenLinks)
    for (const group of grouped) {
      console.log(`  ${chalk.yellow(group.target)}`)
      for (const occ of group.occurrences) {
        console.log(`    - ${occ.file}:${occ.lines.join(',')}`)
      }
    }
  }

  if (allRedirectLinks.length > 0) {
    console.log('')
    console.log(chalk.yellow(`⚠️  ${allRedirectLinks.length} redirect(s) to update:`))
    const grouped = groupBrokenLinks(allRedirectLinks)
    for (const group of grouped) {
      const target = group.occurrences[0]?.redirectTarget || '?'
      console.log(`  ${chalk.yellow(group.target)} → ${chalk.green(target)}`)
      for (const occ of group.occurrences) {
        console.log(`    - ${occ.file}:${occ.lines.join(',')}`)
      }
    }
  }

  // Write artifact for debugging
  const allFlaws = [...allBrokenLinks, ...allRedirectLinks]
  await uploadArtifact('broken-links.json', JSON.stringify(groupBrokenLinks(allFlaws), null, 2))

  // Post PR comment if configured
  const shouldComment = process.env.SHOULD_COMMENT === 'true'
  if (shouldComment) {
    const actionUrl = process.env.ACTION_RUN_URL
    await commentOnPR(allFlaws, actionUrl)
  }

  // Exit with error if broken links found
  const failOnFlaw = process.env.FAIL_ON_FLAW !== 'false'
  if (failOnFlaw && allBrokenLinks.length > 0) {
    console.log('')
    console.log(chalk.red('Failing due to broken links'))
    process.exit(1)
  }
}

// Run if invoked directly
;(async () => {
  try {
    await main()
  } catch (err: unknown) {
    console.error('Fatal error:', err)
    process.exit(1)
  }
})()
