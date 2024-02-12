#!/usr/bin/env node

// [start-readme]
//
// For testing the GitHub Action that executes
// src/workflows/content-changes-table-comment.js but doing it
// locally.
// This is more convenient and faster than relying on seeing that the
// Action produces in a PR. Especially since
// .github/workflows/content-changes-table-comment.yml only runs
// on `pull_request_target`.
//
// To try it you need to generate a local `GITHUB_TOKEN` that has read-access
// "content" and "pull requests" on the repo.
// You also need to set an APP_URL which can be the domain of the
// preview environment or just the production domain. Example:
//
//
//    export GITHUB_TOKEN=github_pat_11AAAG.....
//    export APP_URL=https://docs.github.com
//    ./script/content-changes-table-comment.js github docs-internal main 4a0b0f2
//
// [end-readme]

import { program } from 'commander'
import main from '#src/workflows/content-changes-table-comment.js'

program
  .description('Produce a nice table based on the branch diff')
  .option('-v, --verbose', 'Verbose outputs')
  .option('--debug', "Loud about everything it's doing")
  .arguments('owner repo bash_sha head_sha', 'bla bla')
  .parse(process.argv)

const opts = program.opts()
const args = program.args

console.log(await main(...args, { ...opts }))
