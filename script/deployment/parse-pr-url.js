#!/usr/bin/env node
const USERNAME_FORMAT = '([A-Za-z0-9-]+)'
const REPO_NAME_FORMAT = '([A-Za-z0-9._-]+)'
const PR_NUMBER_FORMAT = '(\\d+)'

const ALLOWED_PR_URL_FORMAT = new RegExp(
  '^' +
    '[\'"]?' +
    `https://github\\.com/${USERNAME_FORMAT}/${REPO_NAME_FORMAT}/pull/${PR_NUMBER_FORMAT}` +
    '[\'"]?' +
    '$'
)

export default function parsePullRequestUrl(prUrl) {
  const [, /* fullMatch */ owner, repo, pr] = (prUrl || '').match(ALLOWED_PR_URL_FORMAT) || []
  return {
    owner,
    repo,
    pullNumber: parseInt(pr, 10) || undefined,
  }
}
