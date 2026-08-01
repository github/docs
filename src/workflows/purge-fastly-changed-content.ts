import type { Octokit } from '@octokit/rest'

import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import { makePageSurrogateKey } from '@/frame/middleware/set-fastly-surrogate-key'
import github from './github'
import { getActionContext } from './action-context'

// Purges the English content pages whose source changed in a production deploy, by surrogate key.
// Each page has one `language:<lang>,path:<relativePath>` covering all versions.
// Fastly's batch purge takes up to 256 keys per request.
// Uses hard purge instead of soft for PR authors to see their changes more quickly.
// `data/` changes and AUTOTITLE produce too many keys.
// Translations only rebuild once per day.

const CONTENT_PREFIX = 'content/'

// We only purge English pages: content/*.md is the English source, and
// translations lag behind it, so an English deploy shouldn't evict them.
const PURGE_LANGUAGE = 'en'

// Fastly's batch surrogate-key purge accepts at most 256 keys per request.
// https://www.fastly.com/documentation/reference/api/purging/
const MAX_KEYS_PER_PURGE = 256

// The GitHub compare API returns at most 300 files per page. If a deploy changes
// that many, skip the targeted purge and let the short max-age refresh
// everything rather than paginating through a huge change set.
const COMPARE_FILE_LIMIT = 300

// When Fastly rate-limits us (HTTP 429), retry the batch this many times before
// giving up on it.
const PURGE_MAX_RATE_LIMIT_RETRIES = 5

// Jitter ceiling (ms) added to each backoff so retries that saw the same reset
// timestamp don't wake in lockstep and re-burst.
const PURGE_JITTER_MS = 150

// Backoff bounds for retrying a rate-limited (429) purge. Additive (linear)
// growth from BASE per attempt, capped at MAX. Fastly's rate-limit window resets
// on the order of a second, so a batch just needs to wait for the next window.
// This backoff also floors any server-provided hint so a hint that resolves to
// ~0 can't collapse the retry to 0ms, and MAX caps any server-provided delay so
// a single batch can't hang for the full rate-limit window.
const PURGE_RATE_LIMIT_BASE_DELAY_MS = 1000
const PURGE_RATE_LIMIT_MAX_DELAY_MS = 30_000

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// How long to wait before retrying a rate-limited (429) purge. Prefers Fastly's
// own hints (Retry-After in seconds or as an HTTP date; else Fastly-RateLimit-
// Reset as a Unix timestamp), but floors that hint at the additive backoff so a
// stale or current-second reset (which computes to <= 0) can't produce a 0ms
// retry that just re-hammers the limiter. Jitter is always added to decorrelate
// concurrent retries that saw the same reset timestamp. The result is clamped to
// [0, PURGE_RATE_LIMIT_MAX_DELAY_MS].
export function rateLimitDelayMs(response: Response, attempt: number): number {
  const clamp = (ms: number) => Math.min(Math.max(0, ms), PURGE_RATE_LIMIT_MAX_DELAY_MS)

  const backoff = PURGE_RATE_LIMIT_BASE_DELAY_MS * (attempt + 1)
  const hintMs = serverRetryHintMs(response) ?? 0
  const jitter = Math.floor(Math.random() * PURGE_JITTER_MS)

  return clamp(Math.max(hintMs, backoff) + jitter)
}

// Fastly's suggested wait from a 429 response, in ms, or null if it sends no
// usable hint. Can be negative (stale) or zero; callers must floor it.
function serverRetryHintMs(response: Response): number | null {
  const retryAfter = response.headers.get('retry-after')
  if (retryAfter) {
    const seconds = Number(retryAfter)
    if (Number.isFinite(seconds)) return seconds * 1000
    const dateMs = Date.parse(retryAfter)
    if (!Number.isNaN(dateMs)) return dateMs - Date.now()
  }

  const reset = response.headers.get('fastly-ratelimit-reset')
  if (reset) {
    const resetSeconds = Number(reset)
    if (Number.isFinite(resetSeconds)) return resetSeconds * 1000 - Date.now()
  }

  return null
}

type ChangedFile = {
  filename: string
  status: string
}

// The most recent production deployment that was actually live before `headSha`.
// We diff against this to find what changed in the current deploy. The merge
// queue can batch several PRs into one deploy, so this range can span multiple
// merge commits — that's intentional, we want every changed file in the batch.
export async function resolvePreviousProductionSha(
  octokit: Octokit,
  owner: string,
  repo: string,
  headSha: string,
): Promise<string | null> {
  const { data: deployments } = await octokit.rest.repos.listDeployments({
    owner,
    repo,
    environment: 'production',
    per_page: 30,
  })

  for (const deployment of deployments) {
    if (deployment.sha === headSha) continue
    const { data: statuses } = await octokit.rest.repos.listDeploymentStatuses({
      owner,
      repo,
      deployment_id: deployment.id,
      per_page: 30,
    })
    // Require evidence the sha was actually live: a `success` status. The
    // previous live deploy keeps its `success` status in history even after a
    // newer deploy marks it `inactive`, so this still finds it. We deliberately
    // do NOT accept `inactive` alone, since a deploy that failed and was later
    // auto-inactivated never served traffic and would give a wrong base.
    if (statuses.some((status) => status.state === 'success')) {
      return deployment.sha
    }
  }
  return null
}

// The content/*.md files that changed between two commits. Removed files are
// excluded: there's no page left to derive a key from. Their old URL is covered
// by the redirect that replaces a removed/renamed page plus the short max-age,
// so it isn't enumerated here.
//
// Note: compareCommitsWithBasehead uses three-dot (merge-base) semantics. For
// normal forward-moving deploys that equals the tree diff. For a rollback (head
// is an ancestor of, or diverged from, the previous live sha) it can miss the
// reverted files; those simply fall back to the short max-age refresh, so it's
// not a regression. Returns null if the change set is too large to handle as a
// targeted purge.
export async function getChangedContentFiles(
  octokit: Octokit,
  owner: string,
  repo: string,
  baseSha: string,
  headSha: string,
): Promise<ChangedFile[] | null> {
  const { data } = await octokit.rest.repos.compareCommitsWithBasehead({
    owner,
    repo,
    basehead: `${baseSha}...${headSha}`,
  })

  const files = data.files || []
  if (files.length >= COMPARE_FILE_LIMIT) {
    return null
  }

  return files
    .filter(
      (file) =>
        file.filename.startsWith(CONTENT_PREFIX) &&
        file.filename.toLowerCase().endsWith('.md') &&
        file.status !== 'removed',
    )
    .map((file) => ({ filename: file.filename, status: file.status }))
}

// Map changed content files to their per-page surrogate keys, deduped. One key
// per source page, and that single key covers every version-URL of the page
// (fpt, ghec, each ghes release), so a page that changed once is purged once
// regardless of how many versions it fans out to. The key is derived purely from
// the language and the path under content/, matching what the response
// middleware emits, so we don't need to warm the server or resolve permalinks.
export function contentFilesToPageKeys(
  changedFiles: ChangedFile[],
  langCode: string = PURGE_LANGUAGE,
): string[] {
  const keys = new Set<string>()
  for (const file of changedFiles) {
    const relativePath = file.filename.slice(CONTENT_PREFIX.length)
    const key = makePageSurrogateKey(langCode, relativePath)
    if (key) keys.add(key)
  }
  return [...keys]
}

// Split a list into chunks of at most `size`.
export function chunk<T>(items: T[], size: number): T[][] {
  const batches: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    batches.push(items.slice(index, index + size))
  }
  return batches
}

// Hard-purge one batch (<= 256) of surrogate keys. Fastly's batch endpoint is
// service-scoped; omitting the soft-purge header makes it a hard purge, so every
// object tagged with any listed key is evicted and the next request is a fresh
// miss. Retries on HTTP 429, honoring Fastly's rate-limit hint.
// https://www.fastly.com/documentation/reference/api/purging/
async function hardPurgeKeyBatch(
  keys: string[],
  fastlyToken: string,
  serviceId: string,
  rateLimitDelayFn: (response: Response, attempt: number) => number = rateLimitDelayMs,
): Promise<void> {
  for (let attempt = 0; ; attempt++) {
    const response = await fetchWithRetry(
      `https://api.fastly.com/service/${encodeURIComponent(serviceId)}/purge`,
      {
        method: 'POST',
        headers: {
          'fastly-key': fastlyToken,
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({ surrogate_keys: keys }),
      },
      { retries: 3, timeout: 30_000, throwHttpErrors: false },
    )
    if (response.ok) return

    // Fastly rate limit. fetchWithRetry doesn't retry 429 when throwHttpErrors
    // is false, so back off and retry the batch ourselves, honoring Fastly's hint.
    if (response.status === 429 && attempt < PURGE_MAX_RATE_LIMIT_RETRIES) {
      const waitMs = rateLimitDelayFn(response, attempt)
      console.warn(
        `Fastly rate-limited batch purge; retrying in ${waitMs}ms (attempt ${
          attempt + 1
        }/${PURGE_MAX_RATE_LIMIT_RETRIES})`,
      )
      await sleep(waitMs)
      continue
    }

    let body = ''
    try {
      body = await response.text()
    } catch {
      body = ''
    }
    throw new Error(
      `Fastly batch surrogate-key purge failed: HTTP ${response.status} ${response.statusText}${
        body ? `: ${body}` : ''
      }`,
    )
  }
}

// Hard-purge every key in batches of <= 256, one batch at a time. Collects
// failures so one bad batch doesn't drop the rest, then throws at the end if any
// failed so the workflow's failure alerting fires.
export async function hardPurgeSurrogateKeys(
  keys: string[],
  fastlyToken: string,
  serviceId: string,
  rateLimitDelayFn: (response: Response, attempt: number) => number = rateLimitDelayMs,
): Promise<void> {
  const batches = chunk(keys, MAX_KEYS_PER_PURGE)
  const errors: Error[] = []
  for (const [index, batch] of batches.entries()) {
    const label = `batch ${index + 1}/${batches.length} (${batch.length} key(s))`
    try {
      console.log(`Hard-purging ${label}...`)
      await hardPurgeKeyBatch(batch, fastlyToken, serviceId, rateLimitDelayFn)
      console.log(`Hard-purged ${label}.`)
    } catch (error) {
      console.error(error)
      errors.push(error instanceof Error ? error : new Error(String(error)))
    }
  }
  if (errors.length) {
    throw new Error(`${errors.length} of ${batches.length} batch purge(s) failed`)
  }
}

async function main() {
  const { FASTLY_TOKEN, FASTLY_SERVICE_ID, HEAD_SHA } = process.env
  if (!FASTLY_TOKEN) {
    throw new Error('FASTLY_TOKEN not detected; refusing to purge')
  }
  if (!FASTLY_SERVICE_ID) {
    throw new Error('FASTLY_SERVICE_ID not detected; refusing to purge')
  }

  const context = getActionContext()
  const owner: string = context.owner
  const repo: string = context.repo
  const headSha: string | undefined = HEAD_SHA || context.deployment?.sha
  if (!headSha) {
    throw new Error('Could not determine the deployed (head) SHA')
  }

  const octokit = github()

  const baseSha = await resolvePreviousProductionSha(octokit, owner, repo, headSha)
  if (!baseSha) {
    // First-ever deploy, or we couldn't find a prior production deploy. The short
    // max-age still refreshes everything, so just no-op rather than fail.
    console.warn('No previous production deployment found; skipping targeted purge.')
    return
  }
  console.log(`Diffing content between ${baseSha}..${headSha}...`)

  const changedFiles = await getChangedContentFiles(octokit, owner, repo, baseSha, headSha)
  if (changedFiles === null) {
    console.warn(
      `Change set is too large (>= ${COMPARE_FILE_LIMIT} files); ` +
        'relying on the short max-age to refresh instead.',
    )
    return
  }
  if (!changedFiles.length) {
    console.log('No content/ files changed in this deploy; nothing to purge.')
    return
  }
  console.log(`Found ${changedFiles.length} changed content file(s).`)

  const keys = contentFilesToPageKeys(changedFiles)
  if (!keys.length) {
    console.log('Changed content files did not resolve to any page keys; nothing to purge.')
    return
  }

  console.log(`Hard-purging ${keys.length} page key(s)...`)
  await hardPurgeSurrogateKeys(keys, FASTLY_TOKEN, FASTLY_SERVICE_ID)
  console.log(`Hard-purged ${keys.length} page key(s).`)
}

const isEntryPoint =
  import.meta.url === `file://${process.argv[1]}` ||
  process.argv[1]?.endsWith('purge-fastly-changed-content.ts')

if (isEntryPoint) {
  await main()
}
