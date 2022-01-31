#!/usr/bin/env node

// [start-readme]
//
// This script is run automatically via GitHub Actions on every push to `main` to generate searchable data.
// It can also be run manually. For more info see [contributing/search.md](contributing/search.md)
//
// [end-readme]

import searchSync from './search/sync.js'
import 'make-promises-safe'

main()

async function main() {
  const sync = searchSync
  // When called by the .github/workflows/sync-search-indices workflow
  // the variable can be set to all or an empty string.
  //
  // The script/search/sync script expects the variables to be unset
  // to select all languages or versions.
  if (process.env.LANGUAGE === 'all' || process.env.LANGUAGE === '') {
    delete process.env.LANGUAGE
  }
  if (process.env.VERSION === 'all' || process.env.VERSION === '') {
    delete process.env.VERSION
  }

  const opts = {
    dryRun: 'DRY_RUN' in process.env,
    language: process.env.LANGUAGE,
    version: process.env.VERSION,
  }
  await sync(opts)
}
