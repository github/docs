import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fetchWithRetry } from '@/frame/lib/fetch-utils'

// Polls production until it serves the current commit, then exits. The post-deploy
// content purge waits on this so it doesn't evict pages before the new build is live.
// A single /_build match only proves one Moda instance updated, so require several
// consecutive matches before declaring the rollout done.

const REQUIRED_MATCHES = 5
const INTERVAL = 15 * 1000
const TIMEOUT = 1200 * 1000

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

type WaitForBuildOptions = {
  requiredMatches?: number
  intervalMs?: number
  timeoutMs?: number
}

export async function waitForBuild({
  requiredMatches = REQUIRED_MATCHES,
  intervalMs = INTERVAL,
  timeoutMs = TIMEOUT,
}: WaitForBuildOptions = {}) {
  const needs = execFileSync('git', ['rev-parse', 'HEAD']).toString().trim()
  const startTime = Date.now()
  let consecutive = 0

  console.log(`Waiting for production to serve build ${needs}...`)

  while (consecutive < requiredMatches) {
    if (Date.now() - startTime > timeoutMs) {
      throw new Error(
        `Production did not reach ${requiredMatches} consecutive build matches within ${timeoutMs / 1000} seconds`,
      )
    }

    let current = ''
    try {
      const response = await fetchWithRetry(
        'https://docs.github.com/_build',
        {},
        { retries: 5, timeout: 30_000, throwHttpErrors: false },
      )
      if (response.ok) {
        current = (await response.text()).trim()
      }
    } catch {
      // Treat a fetch failure like a non-match: reset and keep polling.
      current = ''
    }

    if (current && current === needs) {
      consecutive += 1
      console.log(`Production matches the build commit (${consecutive}/${requiredMatches})...`)
    } else {
      if (consecutive > 0) {
        console.log('Production stopped matching the build commit; resetting consecutive count...')
      } else {
        console.log('Production is not up to date with the build commit yet...')
      }
      consecutive = 0
    }

    if (consecutive < requiredMatches) {
      await sleep(intervalMs)
    }
  }

  console.log(`Production is serving the build commit. ${requiredMatches} consecutive matches.`)
}

// Only poll when run as a script. Importing this module, from a test or anywhere
// else, must not kick off a 20-minute production poll.
const isEntryPoint =
  !!process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isEntryPoint) {
  await waitForBuild()
}
