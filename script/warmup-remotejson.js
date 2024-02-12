#!/usr/bin/env node

// [start-readme]
//
// This calls a function directly that is used by our archived enterprise
// middleware. Namely, the `getRemoteJSON` function. That function is
// able to use the disk to cache responses quite aggressively. So when
// it's been run once, with the same disk, next time it can draw from disk
// rather than having to rely on network.
//
// We have this script to avoid excessive network fetches in production
// where, due to production deploys restarting new Node services, we
// can't rely on in-memory caching often enough.
//
// The list of URLs hardcoded in here is based on analyzing the URLs that
// were logged as tags in Datadog for entries that couldn't rely on
// in-memory cache.
//
// [end-readme]

import { program } from 'commander'
import semver from 'semver'

import getRemoteJSON from '../middleware/get-remote-json.js'
import {
  deprecated,
  firstReleaseStoredInBlobStorage,
  lastVersionWithoutArchivedRedirectsFile,
} from '#src/versions/lib/enterprise-server-releases.js'

program
  .description(
    "Visit a bunch of archived redirects.json URLs to warm up getRemoteJSON's disk cache",
  )
  .parse(process.argv)

main()

function version2url(version) {
  const inBlobStorage = semver.gte(
    semver.coerce(version).raw,
    semver.coerce(firstReleaseStoredInBlobStorage).raw,
  )
  return inBlobStorage
    ? `https://githubdocs.azureedge.net/enterprise/${version}/redirects.json`
    : `https://github.github.com/help-docs-archived-enterprise-versions/${version}/redirects.json`
}

function withArchivedRedirectsFile(version) {
  return semver.eq(
    semver.coerce(version).raw,
    semver.coerce(lastVersionWithoutArchivedRedirectsFile).raw,
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
