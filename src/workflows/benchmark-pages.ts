/**
 * Benchmarks page load times across the local docs server.
 *
 * Hits every page via the article API and/or HTML routes, across
 * configurable languages and versions. Reports errors and slow pages.
 *
 * Assumes the server is already running on --port (default 4000).
 *
 * Usage:
 *   npx tsx src/workflows/benchmark-pages.ts [options]
 *
 * Options:
 *   --port <number>        Server port (default: 4000)
 *   --langs <codes>        Comma-separated language codes, or "all" (default: en)
 *   --versions <slugs>     Comma-separated version slugs, or "all" (default: free-pro-team@latest)
 *   --modes <modes>        Comma-separated: article-body, article-meta, html, or "all" (default: article-body)
 *   --sample <number>      Random sample size per lang/version (default: all pages)
 *   --slow <ms>            Threshold in ms to flag as slow (default: 500)
 *   --concurrency <n>      Max concurrent requests (default: 1)
 *   --json <path>          Write JSON results to file (for CI consumption)
 */

import { parseArgs } from 'node:util'

const { values: args } = parseArgs({
  options: {
    port: { type: 'string', default: '4000' },
    langs: { type: 'string', default: 'en' },
    versions: { type: 'string', default: 'free-pro-team@latest' },
    modes: { type: 'string', default: 'article-body' },
    sample: { type: 'string' },
    slow: { type: 'string', default: '500' },
    concurrency: { type: 'string', default: '1' },
    json: { type: 'string' },
  },
})

const PORT = parseInt(args.port!, 10)
const BASE = `http://localhost:${PORT}`
const SLOW_MS = parseInt(args.slow!, 10)
const CONCURRENCY = parseInt(args.concurrency!, 10)
const SAMPLE_SIZE = args.sample ? parseInt(args.sample, 10) : undefined
const ALL_MODES = ['article-body', 'article-meta', 'html']
const MODES = args.modes === 'all' ? ALL_MODES : args.modes!.split(',').map((m) => m.trim())

for (const mode of MODES) {
  if (!ALL_MODES.includes(mode)) {
    console.error(`Unknown mode: "${mode}". Valid modes: ${ALL_MODES.join(', ')}`)
    process.exit(1)
  }
}

interface Result {
  mode: string
  path: string
  status: number
  timeMs: number
}

async function timed(url: string): Promise<{ status: number; timeMs: number }> {
  const start = performance.now()
  const res = await fetch(url)
  await res.text()
  return { status: res.status, timeMs: Math.round(performance.now() - start) }
}

async function getPageList(lang: string, version: string): Promise<string[]> {
  const res = await fetch(`${BASE}/api/pagelist/${lang}/${version}`)
  if (!res.ok) return []
  return (await res.text()).split('\n').filter(Boolean)
}

function buildUrl(mode: string, pagePath: string): string {
  if (mode === 'html') return `${BASE}${pagePath}`
  return `${BASE}/api/article/${mode === 'article-meta' ? 'meta' : 'body'}?pathname=${encodeURIComponent(pagePath)}`
}

function sample<T>(arr: T[], n: number): T[] {
  if (n >= arr.length) return arr
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, n)
}

async function runPool<T>(tasks: (() => Promise<T>)[], concurrency: number): Promise<T[]> {
  const results: T[] = []
  let i = 0
  async function worker() {
    while (i < tasks.length) {
      const idx = i++
      results[idx] = await tasks[idx]()
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, tasks.length) }, () => worker()))
  return results
}

function percentile(sorted: number[], p: number): number {
  return sorted[Math.max(0, Math.ceil((p / 100) * sorted.length) - 1)]
}

async function main() {
  // Check server
  try {
    const res = await fetch(`${BASE}/api/pagelist/versions`)
    if (!res.ok) throw new Error()
  } catch {
    console.error(`Server not reachable at ${BASE}`)
    process.exit(1)
  }

  // Resolve versions and languages
  let versions: string[]
  if (args.versions === 'all') {
    const res = await fetch(`${BASE}/api/pagelist/versions`)
    const data = (await res.json()) as { versions: string[] }
    versions = data.versions
  } else {
    versions = args.versions!.split(',').map((v) => v.trim())
  }
  let langs: string[]
  if (args.langs === 'all') {
    const res = await fetch(`${BASE}/api/pagelist/languages`)
    const data = (await res.json()) as { languages: string[] }
    langs = data.languages
  } else {
    langs = args.langs!.split(',').map((l) => l.trim())
  }

  console.log(`\nBenchmarking ${BASE}`)
  console.log(`  langs=${langs.join(',')}  versions=${versions.join(',')}`)
  console.log(
    `  modes=${MODES.join(',')}  sample=${SAMPLE_SIZE ?? 'all'}  slow=${SLOW_MS}ms  concurrency=${CONCURRENCY}\n`,
  )

  const all: Result[] = []

  for (const lang of langs) {
    for (const version of versions) {
      let pages = await getPageList(lang, version)
      if (!pages.length) {
        console.log(`⚠ No pages for ${lang}/${version}`)
        continue
      }
      if (SAMPLE_SIZE) pages = sample(pages, SAMPLE_SIZE)

      for (const mode of MODES) {
        const label = `${mode} ${lang}/${version}`
        let done = 0
        const tasks = pages.map((p) => async (): Promise<Result> => {
          const { status, timeMs } = await timed(buildUrl(mode, p))
          done++
          if (done % 50 === 0) process.stdout.write(`  ${label}: ${done}/${pages.length}\r`)
          return { mode, path: p, status, timeMs }
        })

        const results = await runPool(tasks, CONCURRENCY)
        all.push(...results)

        const times = results.map((r) => r.timeMs).sort((a, b) => a - b)
        const errors = results.filter((r) => r.status >= 400).length
        const slow = results.filter((r) => r.timeMs >= SLOW_MS).length
        console.log(
          `${label}: ${pages.length} pages  p50=${percentile(times, 50)}ms  p99=${percentile(times, 99)}ms  max=${times[times.length - 1]}ms  errors=${errors}  slow=${slow}`,
        )
      }
    }
  }

  // Report problems
  const errors = all.filter((r) => r.status >= 400)
  const slow = all.filter((r) => r.timeMs >= SLOW_MS).sort((a, b) => b.timeMs - a.timeMs)

  console.log(`\n${'='.repeat(60)}`)
  console.log(
    `${all.length} requests  |  ${errors.length} errors  |  ${slow.length} slow (>=${SLOW_MS}ms)`,
  )
  console.log(`${'='.repeat(60)}`)

  if (errors.length) {
    console.log(`\n❌ Errors:`)
    for (const e of errors.slice(0, 20)) {
      console.log(`  ${e.status}  ${e.mode}  ${e.path}`)
    }
    if (errors.length > 20) console.log(`  ... and ${errors.length - 20} more`)
  }

  if (slow.length) {
    console.log(`\n🐌 Slowest pages:`)
    for (const s of slow.slice(0, 20)) {
      console.log(`  ${s.timeMs}ms  ${s.mode}  ${s.path}`)
    }
    if (slow.length > 20) console.log(`  ... and ${slow.length - 20} more`)
  }

  if (!errors.length && !slow.length) {
    console.log(`\n✅ All clear!`)
  }

  // Write JSON for CI consumption
  if (args.json) {
    const fs = await import('fs')
    const allTimes = all.map((r) => r.timeMs).sort((a, b) => a - b)
    fs.writeFileSync(
      args.json,
      JSON.stringify(
        {
          totalRequests: all.length,
          p50: allTimes.length ? percentile(allTimes, 50) : 0,
          p99: allTimes.length ? percentile(allTimes, 99) : 0,
          max: allTimes.length ? allTimes[allTimes.length - 1] : 0,
          errors: errors.map((e) => ({ status: e.status, mode: e.mode, path: e.path })),
          slow: slow.map((s) => ({ timeMs: s.timeMs, mode: s.mode, path: s.path })),
        },
        null,
        2,
      ),
    )
    console.log(`Results written to ${args.json}`)
  }

  console.log()
  process.exit(errors.length ? 1 : 0)
}

try {
  await main()
} catch (err) {
  console.error(err)
  process.exit(1)
}
