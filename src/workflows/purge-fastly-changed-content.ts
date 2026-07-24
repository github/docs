import type { Octokit } from '@octokit/rest'

import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import warmServer from '@/frame/lib/warm-server'
import { allVersions } from '@/versions/lib/all-versions'
import github from './github'
import { getActionContext } from './action-context'

// Hard-purges the specific English URLs whose content changed in a production
// deploy. It runs *in addition to* the routine soft purge of the whole
// `language:en` surrogate key (see purge-fastly.ts / purge-fastly.yml).
//
// Why: the soft purge only marks `language:en` stale. With stale-while-
// revalidate, Fastly keeps serving the pre-deploy copy of a just-changed page
// until a background revalidation completes, so an author who reloads the page
// they just edited can still see the old content for a while. (The classic
// "add ?bla=1234 and it shows the new content" symptom: the query string is a
// cache miss that fetches fresh, proving origin is fresh and the cached object
// is stale.) A hard purge *evicts* the changed URLs so the next request fetches
// fresh. By the time deployment succeeds, the old pods are already terminated
// (Heaven waits for the rollout to fully reconcile), so this is deterministic.
//
// Scope: content/ only, and only the latest release of each plan (fpt, ghec,
// latest ghes — see PURGEABLE_PAGE_VERSIONS). data/ changes (reusables,
// variables, ...) fan out to far too many URLs to enumerate cheaply, so they
// stay covered by the soft purge of the whole language.

const PROD_HOST = 'docs.github.com'
const CONTENT_PREFIX = 'content/'

// Which page versions we hard-purge. A page that applies to every
// version fans out to one URL per version: fpt + ghec + one per *supported* GHES
// release (8+ URLs today, growing with each GHES release). Enumerating all of
// them for a large deploy blew past Fastly's URL-purge rate limit (HTTP 429) and
// failed the job. So we only target the newest ("latest") release of each plan:
// free-pro-team (fpt), enterprise-cloud (ghec), and the newest supported
// enterprise-server (ghes). Older still-supported GHES releases change far less
// often and remain covered by the routine soft purge of the whole `language:en`
// key that always runs. A version is the latest of its plan exactly when its
// `version` equals its plan's `latestVersion`, so this set is {fpt, ghec, latest
// ghes} and updates itself as GHES releases come and go.
export const PURGEABLE_PAGE_VERSIONS = new Set(
  Object.values(allVersions)
    .filter((version) => version.version === version.latestVersion)
    .map((version) => version.version),
)

// A defensive ceiling. A normal content deploy touches a handful of files ->
// tens of URLs. If a deploy changes so much that we'd hard-purge more than this,
// skip the targeted purge: the soft purge of the whole `language:en` key (which
// always runs) already covers it, and we don't want to hammer Fastly.
const MAX_URLS = 1000

// The GitHub compare API returns at most 300 files per page. If we hit that, the
// deploy is large enough that the soft-purge-all is the right tool; bail rather
// than paginate through a huge change set.
const COMPARE_FILE_LIMIT = 300

// How many purge requests to keep in flight at once. Fastly rate-limits URL
// purges (documented average: 100,000/customer/hour ~= 27/sec, with a stricter
// undocumented burst limit). Keep this low and pair it with per-worker spacing
// below so we stay well under the burst ceiling and stop tripping HTTP 429s.
const PURGE_CONCURRENCY = 3

// Minimum spacing between consecutive purge requests within a single worker.
// With PURGE_CONCURRENCY workers this caps the steady-state rate at roughly
// (concurrency / spacing) req/sec: 3 / 0.15s ~= 20/sec, comfortably under the
// documented 27/sec average.
const PURGE_THROTTLE_MS = 150

// When Fastly still rate-limits us (HTTP 429), retry the individual URL this
// many times before giving up on it.
const PURGE_MAX_RATE_LIMIT_RETRIES = 5

// Backoff bounds for retrying a rate-limited (429) purge. Additive (linear)
// growth from BASE per attempt, capped at MAX. Fastly's rate-limit window resets
// on the order of a second, so a URL just needs to wait for the next window, not
// escalate exponentially toward a minutes-long wait. This backoff also acts as a
// floor under any server-provided hint (see rateLimitDelayMs): a hint that
// resolves to ~0 must not collapse the retry to 0ms. MAX also caps any
// server-provided delay so a worker can't hang for the full rate-limit window
// (up to an hour) on a single URL.
const PURGE_RATE_LIMIT_BASE_DELAY_MS = 1000
const PURGE_RATE_LIMIT_MAX_DELAY_MS = 30_000

// A wall-clock ceiling for the whole targeted-purge phase. If Fastly is
// rate-limiting us systemically (not just a one-off burst), the per-URL 429
// retries above could otherwise stretch this non-blocking job out for hours.
// Once we pass this deadline we stop starting new purges and fail loudly, so
// the workflow's failure alerting fires and the routine soft-purge-all (which
// always runs) remains the backstop for cache freshness.
const PURGE_TIME_BUDGET_MS = 5 * 60_000

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// How long to wait before retrying a rate-limited (429) purge. Prefers Fastly's
// own hints (Retry-After in seconds or as an HTTP date; else Fastly-RateLimit-
// Reset as a Unix timestamp), but floors that hint at the additive backoff so a
// stale or current-second reset (which computes to <= 0) can't produce a 0ms
// retry that just re-hammers the limiter. Jitter is always added to decorrelate
// concurrent workers that saw the same reset timestamp. The result is clamped to
// [0, PURGE_RATE_LIMIT_MAX_DELAY_MS].
export function rateLimitDelayMs(response: Response, attempt: number): number {
  const clamp = (ms: number) => Math.min(Math.max(0, ms), PURGE_RATE_LIMIT_MAX_DELAY_MS)

  const backoff = PURGE_RATE_LIMIT_BASE_DELAY_MS * (attempt + 1)
  const hintMs = serverRetryHintMs(response) ?? 0
  const jitter = Math.floor(Math.random() * PURGE_THROTTLE_MS)

  // Honor the larger of Fastly's hint and our backoff floor, then always add
  // jitter so concurrent workers that saw the same reset timestamp don't wake in
  // lockstep and re-burst.
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
// excluded: there's no page left to derive permalinks from. Their old URL is
// covered by the soft purge of the whole language plus the redirect that
// replaces a removed/renamed page, so it isn't enumerated here.
//
// Note: compareCommitsWithBasehead uses three-dot (merge-base) semantics. For
// normal forward-moving deploys that equals the tree diff. For a rollback (head
// is an ancestor of, or diverged from, the previous live sha) it can miss the
// reverted files; those simply fall back to the existing soft-purge-of-all
// behavior, so it's not a regression. Returns null if the change set is too
// large to handle as a targeted purge.
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

// Map changed content files to the full English production URLs Fastly caches.
// `permalinksFor` looks up a page's English permalink paths by its relativePath
// (the path under content/). A page yields one URL per applicable version
// (e.g. fpt, ghec, each ghes release). Unknown files (e.g. a page that doesn't
// resolve to permalinks) are skipped.
export function contentFilesToEnglishUrls(
  changedFiles: ChangedFile[],
  permalinksFor: (relativePath: string) => string[],
): string[] {
  const urls = new Set<string>()
  for (const file of changedFiles) {
    const relativePath = file.filename.slice(CONTENT_PREFIX.length)
    for (const href of permalinksFor(relativePath)) {
      urls.add(`https://${PROD_HOST}${href}`)
    }
  }
  return [...urls]
}

// Build relativePath -> English permalink hrefs from the warmed page list. Only
// the latest release of each plan is kept (see PURGEABLE_PAGE_VERSIONS) to cap
// the URL fan-out that was tripping Fastly's purge rate limiter.
async function loadEnglishPermalinkIndex(): Promise<Map<string, string[]>> {
  const { pageList } = await warmServer(['en'])
  const index = new Map<string, string[]>()
  for (const page of pageList) {
    if (page.languageCode !== 'en') continue
    const hrefs = page.permalinks
      .filter(
        (permalink) =>
          permalink.languageCode === 'en' && PURGEABLE_PAGE_VERSIONS.has(permalink.pageVersion),
      )
      .map((permalink) => permalink.href)
    if (hrefs.length) {
      index.set(page.relativePath, hrefs)
    }
  }
  return index
}

// Single-URL hard purge. Fastly's URL purge API is host+path scoped (not service
// scoped) and uses only the Fastly-Key. Omitting the soft-purge header makes it
// a hard purge: the object is evicted, so the next request is a fresh miss.
// https://www.fastly.com/documentation/reference/api/purging/#purge-a-url
async function hardPurgeUrl(
  url: string,
  fastlyToken: string,
  rateLimitDelayFn: (response: Response, attempt: number) => number = rateLimitDelayMs,
): Promise<void> {
  const withoutScheme = url.replace(/^https?:\/\//, '')
  for (let attempt = 0; ; attempt++) {
    const response = await fetchWithRetry(
      `https://api.fastly.com/purge/${withoutScheme}`,
      {
        method: 'POST',
        headers: {
          'fastly-key': fastlyToken,
          accept: 'application/json',
        },
      },
      { retries: 3, timeout: 30_000, throwHttpErrors: false },
    )
    if (response.ok) return

    // Fastly rate limit. fetchWithRetry doesn't retry 429 when throwHttpErrors
    // is false, so back off and retry the URL ourselves, honoring Fastly's hint.
    if (response.status === 429 && attempt < PURGE_MAX_RATE_LIMIT_RETRIES) {
      const waitMs = rateLimitDelayFn(response, attempt)
      console.warn(
        `Fastly rate-limited purge of ${url}; retrying in ${waitMs}ms (attempt ${
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
      `Fastly URL purge failed for ${url}: HTTP ${response.status} ${response.statusText}${
        body ? `: ${body}` : ''
      }`,
    )
  }
}

// Purge every URL, bounded concurrency, collecting failures so one bad URL
// doesn't drop the rest. Throws at the end if any failed so the workflow's
// failure alerting fires.
export async function hardPurgeUrls(
  urls: string[],
  fastlyToken: string,
  concurrency = PURGE_CONCURRENCY,
  throttleMs = PURGE_THROTTLE_MS,
  budgetMs = PURGE_TIME_BUDGET_MS,
  rateLimitDelayFn: (response: Response, attempt: number) => number = rateLimitDelayMs,
): Promise<void> {
  const queue = [...urls]
  const errors: Error[] = []
  const deadline = Date.now() + budgetMs

  async function worker() {
    let first = true
    while (queue.length) {
      // Space out requests within a worker so concurrency * (1/spacing) stays
      // under Fastly's burst limit. Skip the wait before the first request.
      if (!first && throttleMs > 0) await sleep(throttleMs)
      first = false
      // Re-check the budget *after* the throttle sleep so the sleep can't push a
      // purge past the deadline; stop starting new purges once we're out of time
      // (see PURGE_TIME_BUDGET_MS). Anything left in the queue is reported below.
      if (Date.now() > deadline) break
      const url = queue.shift()
      if (!url) break
      try {
        console.log(`Hard-purging ${url}`)
        await hardPurgeUrl(url, fastlyToken, rateLimitDelayFn)
      } catch (error) {
        console.error(error)
        errors.push(error instanceof Error ? error : new Error(String(error)))
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, urls.length) }, worker))

  // Anything still queued means we hit the time budget before draining it.
  for (const url of queue) {
    errors.push(new Error(`Fastly URL purge skipped (time budget exceeded) for ${url}`))
  }

  if (errors.length) {
    throw new Error(`${errors.length} of ${urls.length} URL purge(s) failed`)
  }
}

async function main() {
  const { FASTLY_TOKEN, HEAD_SHA } = process.env
  if (!FASTLY_TOKEN) {
    throw new Error('FASTLY_TOKEN not detected; refusing to purge')
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
    // First-ever deploy, or we couldn't find a prior production deploy. The
    // soft purge already ran, so just no-op rather than fail the workflow.
    console.warn('No previous production deployment found; skipping targeted purge.')
    return
  }
  console.log(`Diffing content between ${baseSha}..${headSha}`)

  const changedFiles = await getChangedContentFiles(octokit, owner, repo, baseSha, headSha)
  if (changedFiles === null) {
    console.warn(
      `Change set is too large (>= ${COMPARE_FILE_LIMIT} files); ` +
        'relying on the soft purge of the whole language instead.',
    )
    return
  }
  if (!changedFiles.length) {
    console.log('No content/ files changed in this deploy; nothing to hard-purge.')
    return
  }
  console.log(`${changedFiles.length} changed content file(s).`)

  const permalinkIndex = await loadEnglishPermalinkIndex()
  const urls = contentFilesToEnglishUrls(
    changedFiles,
    (relativePath) => permalinkIndex.get(relativePath) || [],
  )

  if (!urls.length) {
    console.log('Changed content files did not resolve to any English URLs; nothing to purge.')
    return
  }
  if (urls.length > MAX_URLS) {
    console.warn(
      `Resolved ${urls.length} URLs (> ${MAX_URLS}); skipping targeted purge and ` +
        'relying on the soft purge of the whole language instead.',
    )
    return
  }

  console.log(`Hard-purging ${urls.length} English URL(s)...`)
  await hardPurgeUrls(urls, FASTLY_TOKEN)
  console.log('Done.')
}

const isEntryPoint =
  import.meta.url === `file://${process.argv[1]}` ||
  process.argv[1]?.endsWith('purge-fastly-changed-content.ts')

if (isEntryPoint) {
  await main()
}
