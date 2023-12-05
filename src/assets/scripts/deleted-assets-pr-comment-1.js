#!/usr/bin/env node

// [start-readme]
//
// For testing the GitHub Action that executes
// src/assets/scripts/deleted-assets-pr-comment.js but doing it
// locally.
// This is more convenient and faster than relying on seeing that the
// Action produces in a PR.
//
// To try it you need to generate a local `GITHUB_TOKEN` that has read-access
// "content" and "pull requests" on the repo.
// Example use:
//
//    export GITHUB_TOKEN=github_pat_11AAAG.....
//    ./src/assets/scripts/deleted-assets-pr-comment.js github docs-internal main 4a0b0f2
//
// [end-readme]

import { program } from 'commander'
import main from './deleted-assets-pr-comment.js'

program
  .description('If applicable, print a snippet of Markdown about deleted assets')
  .arguments('owner repo base_sha head_sha', 'Simulate what the Actions workflow does')
  .parse(process.argv)

const opts = program.opts()
const args = program.args

console.log(await main(...args, { ...opts }))
