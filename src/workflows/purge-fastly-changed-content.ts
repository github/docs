import type { Octokit } from '@octokit/rest'

import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import warmServer from '@/frame/lib/warm-server'
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
// Scope: content/ only. data/ changes (reusables, variables, ...) fan out to
// far too many URLs to enumerate cheaply, so they stay covered by the soft
// purge of the whole language.

const PROD_HOST = 'docs.github.com'
const CONTENT_PREFIX = 'content/'

// A defensive ceiling. A normal content deploy touches a handful of files ->
// tens of URLs. If a deploy changes so much that we'd hard-purge more than this,
// skip the targeted purge: the soft purge of the whole `language:en` key (which
// always runs) already covers it, and we don't want to hammer Fastly.
const MAX_URLS = 1000

// The GitHub compare API returns at most 300 files per page. If we hit that, the
// deploy is large enough that the soft-purge-all is the right tool; bail rather
// than paginate through a huge change set.
const COMPARE_FILE_LIMIT = 300

// How many purge requests to keep in flight at once.
const PURGE_CONCURRENCY = 10

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

// Build relativePath -> English permalink hrefs from the warmed page list.
async function loadEnglishPermalinkIndex(): Promise<Map<string, string[]>> {
  const { pageList } = await warmServer(['en'])
  const index = new Map<string, string[]>()
  for (const page of pageList) {
    if (page.languageCode !== 'en') continue
    const hrefs = page.permalinks
      .filter((permalink) => permalink.languageCode === 'en')
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
async function hardPurgeUrl(url: string, fastlyToken: string): Promise<void> {
  const withoutScheme = url.replace(/^https?:\/\//, '')
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
  if (!response.ok) {
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
): Promise<void> {
  const queue = [...urls]
  const errors: Error[] = []

  async function worker() {
    while (queue.length) {
      const url = queue.shift()
      if (!url) break
      try {
        console.log(`Hard-purging ${url}`)
        await hardPurgeUrl(url, fastlyToken)
      } catch (error) {
        console.error(error)
        errors.push(error instanceof Error ? error : new Error(String(error)))
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, urls.length) }, worker))

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
