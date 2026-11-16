// Warms getRemoteJSON's disk cache for archived redirects.json files.
// Production deploys restart Node services often enough that in-memory cache misses repeat.
// Production reuses these entries only when it starts from the same warmed cache directory.
// URLs come from Datadog tags for redirects.json requests that missed the in-memory cache.

import { program } from 'commander'
import semver, { SemVer } from 'semver'

import getRemoteJSON from '@/frame/lib/get-remote-json'
import {
  deprecated,
  lastVersionWithoutArchivedRedirectsFile,
} from '@/versions/lib/enterprise-server-releases'

program
  .description(
    "Visit a bunch of archived redirects.json URLs to warm up getRemoteJSON's disk cache",
  )
  .parse(process.argv)

main()

function version2url(version: string | SemVer) {
  return `https://github.github.com/docs-ghes-${version}/redirects.json`
}

function withArchivedRedirectsFile(version: string | SemVer) {
  return semver.eq(
    semver.coerce(version)?.raw || '',
    semver.coerce(lastVersionWithoutArchivedRedirectsFile)?.raw || '',
  )
}

async function main() {
  const urls = []
  for (const version of deprecated) {
    if (withArchivedRedirectsFile(version)) {
      break
    }
    urls.push(version2url(version))
  }
  const config = {
    retry: { limit: 3 },
    timeout: { response: 1000 },
  }
  console.time(`Time to fetch ${urls.length} URLs`)
  await Promise.all(urls.map((url) => getRemoteJSON(url, config)))
  console.timeEnd(`Time to fetch ${urls.length} URLs`)
}
