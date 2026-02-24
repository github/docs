// [start-readme]
//
// This script clones an external source repository, detects whether its docs
// have changed since the last processed commit, and — if so — runs the
// content-pipeline-update Copilot agent to update our reference articles.
//
// The workflow (.github/workflows/content-pipelines.yml) calls this script in CI.
// You can also run it locally for testing and iteration:
//
//   npx tsx src/content-pipelines/scripts/update.ts --id copilot-cli
//   npx tsx src/content-pipelines/scripts/update.ts --id copilot-cli --dry-run
//   npx tsx src/content-pipelines/scripts/update.ts --id copilot-cli --full-scan
//
// Defaults (source-repo, source-path, target-articles) are read from
// src/content-pipelines/config.yml. You can override any value via CLI flags.
//
// [end-readme]

import { execSync, execFileSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { program } from 'commander'

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

type ContentPipelineConfig = {
  name?: string
  'source-repo': string
  'source-path': string
  'target-articles': string[]
  exclusions?: string[]
  'content-mapping'?: string
}

const CONFIG_FILE = path.join(process.cwd(), 'src/content-pipelines/config.yml')

function loadConfig(id: string): ContentPipelineConfig | null {
  if (!fs.existsSync(CONFIG_FILE)) return null
  const raw = yaml.load(fs.readFileSync(CONFIG_FILE, 'utf-8')) as Record<
    string,
    ContentPipelineConfig
  >
  return raw[id] ?? null
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

program
  .description(
    'Clone a source repo, detect doc changes, and run the content-pipeline-update agent.\n\n' +
      'Defaults are read from src/content-pipelines/config.yml. CLI flags override config values.',
  )
  .requiredOption('--id <id>', 'Unique identifier (e.g. copilot-cli)')
  .option('--source-repo <owner/repo>', 'Source repository (overrides config)')
  .option(
    '--source-path <path>',
    'Path within the source repo to the docs directory (overrides config)',
  )
  .option(
    '--target-articles <articles>',
    'Newline-separated list of content files the agent may update (overrides config)',
  )
  .option(
    '--exclusions <exclusions>',
    'Comma-separated list of source topics to exclude (overrides config)',
  )
  .option('--name <name>', 'Human-readable name (overrides config)')
  .option('--dry-run', 'Run the agent to update content locally, but do not save the SHA')
  .option('--full-scan', 'Ignore the stored SHA and force a full scan')
  .parse(process.argv)

const opts = program.opts<{
  id: string
  sourceRepo?: string
  sourcePath?: string
  targetArticles?: string
  exclusions?: string
  name?: string
  dryRun?: boolean
  fullScan?: boolean
}>()

// Load config defaults, then layer CLI overrides on top
const config = loadConfig(opts.id)

const ID = opts.id

if (!config) {
  console.error(
    `Error: No config found for id "${ID}" in ${CONFIG_FILE}. ` +
      'This script requires a configuration entry defining the allowed target articles.',
  )
  process.exit(1)
}

const SOURCE_REPO_RAW = opts.sourceRepo ?? config?.['source-repo']
const SOURCE_PATH_RAW = opts.sourcePath ?? config?.['source-path']
const TARGET_ARTICLES_RAW = opts.targetArticles ?? config?.['target-articles']?.join('\n') ?? ''

if (!TARGET_ARTICLES_RAW.trim()) {
  console.error(
    `Error: --target-articles is required (no non-empty "target-articles" entry found in config for "${ID}").`,
  )
  process.exit(1)
}

const TARGET_ARTICLES = TARGET_ARTICLES_RAW
const EXCLUSIONS_LIST: string[] = opts.exclusions
  ? opts.exclusions.split(',').map((s) => s.trim())
  : (config?.exclusions ?? [])
const EXCLUSIONS = EXCLUSIONS_LIST.length > 0 ? EXCLUSIONS_LIST.join('\n') : 'none'
const NAME = opts.name ?? config?.name ?? ID
const CONTENT_MAPPING = config?.['content-mapping'] ?? ''
const DRY_RUN = opts.dryRun ?? false
const FULL_SCAN = opts.fullScan ?? false

if (!SOURCE_REPO_RAW) {
  console.error(`Error: --source-repo is required (not found in config for "${ID}")`)
  process.exit(1)
}
if (!SOURCE_PATH_RAW) {
  console.error(`Error: --source-path is required (not found in config for "${ID}")`)
  process.exit(1)
}

const SOURCE_REPO: string = SOURCE_REPO_RAW
const SOURCE_PATH: string = SOURCE_PATH_RAW

const STATE_DIR = path.join(process.cwd(), 'src/content-pipelines/state')
const SHA_FILE = path.join(STATE_DIR, `${ID}.sha`)
const DIFF_FILE = path.join(STATE_DIR, `${ID}.diff`)

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function run(cmd: string, options?: { cwd?: string; silent?: boolean }): string {
  try {
    return execSync(cmd, {
      cwd: options?.cwd,
      encoding: 'utf-8',
      stdio: options?.silent ? ['pipe', 'pipe', 'pipe'] : ['pipe', 'pipe', 'inherit'],
    }).trim()
  } catch (error) {
    const err = error as { status?: number; stderr?: string }
    throw new Error(`Command failed (exit ${err.status}): ${cmd}\n${err.stderr ?? ''}`)
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  // ---- Clone source repo ----
  const sourceDir = path.join('/tmp', `content-pipeline-source-${ID}`)

  if (fs.existsSync(sourceDir)) {
    console.log(`Reusing existing clone at ${sourceDir}`)
    run('git fetch origin', { cwd: sourceDir, silent: true })
    run('git reset --hard origin/HEAD', { cwd: sourceDir, silent: true })
  } else {
    console.log(`Cloning ${SOURCE_REPO} into ${sourceDir}...`)
    const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || ''
    const repoUrl = `https://github.com/${SOURCE_REPO}.git`

    try {
      // Use execFileSync so we can pass the token via env/header instead of
      // embedding it in the URL, which would leak in error messages or logs.
      const args = ['clone']
      if (token) {
        args.push(
          '-c',
          `http.extraHeader=Authorization: basic ${Buffer.from(`x-access-token:${token}`).toString('base64')}`,
        )
      }
      args.push(repoUrl, sourceDir)
      execFileSync('git', args, { stdio: 'inherit' })
    } catch {
      throw new Error(`git clone failed for repository ${SOURCE_REPO} into ${sourceDir}`)
    }
  }

  const currentSha = run('git rev-parse HEAD', { cwd: sourceDir, silent: true })
  console.log(`Source repo HEAD: ${currentSha}`)

  // ---- Read stored SHA ----
  let storedSha = ''
  if (!FULL_SCAN && fs.existsSync(SHA_FILE)) {
    storedSha = fs.readFileSync(SHA_FILE, 'utf-8').trim()
    console.log(`Stored SHA: ${storedSha}`)
  } else if (FULL_SCAN) {
    console.log('Full scan requested — ignoring stored SHA')
  } else {
    console.log('No stored SHA found (first run)')
  }

  // ---- Check for changes ----
  if (currentSha === storedSha) {
    console.log('No changes detected. Nothing to do.')
    return
  }

  // ---- Generate diff ----
  fs.mkdirSync(STATE_DIR, { recursive: true })

  let diffContent: string
  if (storedSha && !FULL_SCAN) {
    let nameStatus: string
    let diff: string
    try {
      nameStatus = run(`git diff --name-status ${storedSha} HEAD -- ${SOURCE_PATH}`, {
        cwd: sourceDir,
        silent: true,
      })
      diff = run(`git diff ${storedSha} HEAD -- ${SOURCE_PATH}`, { cwd: sourceDir, silent: true })
    } catch {
      nameStatus = '(unable to diff — stored SHA may have been force-pushed away)'
      diff = '(diff unavailable)'
    }

    diffContent = [
      `# Source doc changes (${storedSha.slice(0, 7)}..${currentSha.slice(0, 7)})`,
      '',
      '## Changed files',
      '',
      nameStatus,
      '',
      '## Diff',
      '',
      diff,
    ].join('\n')
  } else {
    // Initial run or full scan — list all source doc files so the agent
    // has a concrete inventory (mirrors what git diff --name-status provides
    // for incremental runs).
    const sourceDocs = path.join(sourceDir, SOURCE_PATH)
    let fileList: string
    try {
      fileList = run(`find ${sourceDocs} -type f -name '*.md' | sort`, { silent: true })
    } catch {
      fileList = '(unable to list source docs)'
    }

    diffContent = [
      '# Source docs (full scan — no previous SHA)',
      '',
      'No previous SHA stored. Perform a full scan of all source docs.',
      '',
      '## Source doc files',
      '',
      'Read every file listed below:',
      '',
      fileList,
    ].join('\n')
  }

  fs.writeFileSync(DIFF_FILE, diffContent)
  console.log(`\nDiff written to ${DIFF_FILE}`)

  if (DRY_RUN) {
    console.log('\n--- Diff preview ---')
    // Show first 80 lines of the diff to keep output manageable
    const lines = diffContent.split('\n')
    const preview = lines.slice(0, 80).join('\n')
    console.log(preview)
    if (lines.length > 80) {
      console.log(`\n... (${lines.length - 80} more lines, see ${DIFF_FILE})`)
    }
    console.log('\nDry run — agent will run but SHA will not be saved.\n')
  }

  // ---- Run the agent ----
  const sourceDocs = path.join(sourceDir, SOURCE_PATH)

  const prompt = [
    `Pipeline: ${NAME}`,
    `SOURCE_DOCS_DIR: ${sourceDocs}`,
    `DIFF_FILE: ${DIFF_FILE}`,
    `TARGET_ARTICLES:`,
    TARGET_ARTICLES,
    `EXCLUSIONS: ${EXCLUSIONS}`,
    `CONTENT_MAPPING: ${CONTENT_MAPPING || 'none'}`,
    '',
    'Follow all steps in the content-pipeline-update agent to update the target articles based on changes in the source docs.',
  ].join('\n')

  console.log(`\nRunning content-pipeline-update agent for ${NAME}...`)

  execFileSync(
    'copilot',
    [
      '--agent',
      'content-pipeline-update',
      '-p',
      prompt,
      '--allow-all-tools',
      '--add-dir',
      './content',
      '--add-dir',
      './data',
      '--add-dir',
      sourceDocs,
      '--add-dir',
      './.github/instructions',
      '--add-dir',
      './src/content-pipelines/state',
    ],
    {
      stdio: 'inherit',
      env: { ...process.env, S2STOKENS: 'true' },
    },
  )

  // ---- Update stored SHA ----
  if (DRY_RUN) {
    console.log(`\nDry run — skipping SHA update (${SHA_FILE} not modified).`)
  } else {
    fs.writeFileSync(SHA_FILE, `${currentSha}\n`)
    console.log(`\nUpdated ${SHA_FILE} to ${currentSha}`)
  }
  console.log('Done.')
}

try {
  await main()
} catch (error) {
  console.error('Error:', error)
  process.exit(1)
}
