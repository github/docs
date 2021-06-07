---
title: GitHub GraphQL API
intro: 'You can use the {% data variables.product.prodname_dotcom %} GraphQL API to create precise and flexible queries for the data you need to integrate with {% data variables.product.prodname_dotcom %}.'
shortTitle: GraphQL API
redirect_from:
  - /v4
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
children:
  - /overview
  - /reference
  - /guides
---

test/fixtures/slack/config_migration_single.json
0s
Run github/codeql-action/upload-sarif@v1
RequestError [HttpError]: repository not enabled for code scanning
    at /home/runner/work/_actions/github/codeql-action/v1/node_modules/@octokit/request/dist-node/index.js:66:23
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async Object.sendStatusReport (/home/runner/work/_actions/github/codeql-action/v1/lib/actions-util.js:506:9)
    at async run (/home/runner/work/_actions/github/codeql-action/v1/lib/upload-sarif-action.js:25:11)
    at async runWrapper (/home/runner/work/_actions/github/codeql-action/v1/lib/upload-sarif-action.js:46:9) {
  name: 'HttpError',
  status: 403,
  headers: {
    'access-control-allow-origin': '*',
    'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, Deprecation, Sunset',
    connection: 'close',
    'content-encoding': 'gzip',
    'content-security-policy': "default-src 'none'",
    'content-type': 'application/json; charset=utf-8',
    date: 'Sun, 06 Jun 2021 03:24:15 GMT',
    'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
    server: 'GitHub.com',
    'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
    'transfer-encoding': 'chunked',
    vary: 'Accept-Encoding, Accept, X-Requested-With',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'deny',
    'x-github-media-type': 'github.v3; format=json',
    'x-github-request-id': '04C2:531E:36D728:FBB7F1:60BC3FDF',
    'x-ratelimit-limit': '1000',
    'x-ratelimit-remaining': '997',
    'x-ratelimit-reset': '1622953455',
    'x-ratelimit-resource': 'core',
    'x-ratelimit-used': '3',
    'x-xss-protection': '0'
  },
  request: {
    method: 'PUT',
    url: 'https://api.github.com/repos/jasminesundaymatcha/bluebird/code-scanning/analysis/status',
    headers: {
      accept: 'application/vnd.github.v3+json',
      'user-agent': 'CodeQL Action octokit-core.js/3.1.2 Node.js/12.13.1 (linux; x64)',
      authorization: 'token [REDACTED]',
      'content-type': 'application/json; charset=utf-8'
    },
    body: '{"workflow_run_id":910762753,"workflow_name":"SL Scan","job_name":"Scan-Build","analysis_key":".github/workflows/shiftleft-analysis.yml:Scan-Build","commit_oid":"08476f2937a7b0163bea47b7dcd97de78b754afa","ref":"refs/heads/jasminesundaymatcha-patch-1","action_name":"upload-sarif","action_ref":"v1","action_oid":"unknown","started_at":"2021-06-06T03:24:15.398Z","action_started_at":"2021-06-06T03:24:15.398Z","status":"starting","matrix_vars":"null"}',
    request: { agent: [Agent], hook: [Function: bound bound register] }
  },
  documentation_url: 'https://docs.github.com/rest'
}
Error: repository not enabled for code scanning
/usr/bin/git version
git version 2.31.1
/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
/usr/bin/git submodule foreach --recursive git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :
/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
http.https://github.com/.extraheader
/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
/usr/bin/git submodule foreach --recursive git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :
