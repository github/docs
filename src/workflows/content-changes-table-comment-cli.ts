// Runs the content-changes-table code locally instead of waiting on a PR run of
// .github/workflows/review-comment.yml, which runs it on pull_request_target.
// Requires GITHUB_TOKEN with content and pull request read access, plus APP_URL
// set to the review environment or production.
//
// Usage:
//   npx tsx src/workflows/content-changes-table-comment-cli.ts github docs-internal main 4a0b0f2

import { program } from 'commander'
import main from '@/workflows/content-changes-table-comment'

program
  .description('Produce a nice table based on the branch diff')
  .arguments('owner repo bash_sha head_sha')
  .parse(process.argv)

const args = program.args
const [owner, repo, baseSHA, headSHA] = args
console.log(await main(owner, repo, baseSHA, headSHA))
