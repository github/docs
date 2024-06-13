#!/usr/bin/env node

// [start-readme]
//
// For testing the GitHub Action that executes
// src/workflows/content-changes-table-comment.ts but doing it
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
//    tsx src/workflows/content-changes-table-comment-cli.ts github docs-internal main 4a0b0f2
//
// [end-readme]

import { program } from 'commander'
import main from '@/workflows/content-changes-table-comment'

program
  .description('Produce a nice table based on the branch diff')
  .arguments('owner repo bash_sha head_sha')
  .parse(process.argv)

const args = program.args
const [owner, repo, baseSHA, headSHA] = args
console.log(await main(owner, repo, baseSHA, headSHA))
