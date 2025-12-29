import fs from 'fs'

import boxen from 'boxen'
import { Octokit } from '@octokit/rest'
import { retry } from '@octokit/plugin-retry'

import { type Check } from '../../lib/validate-docs-urls'

type PostPRCommentOptions = {
  issueNumber: number | string
  repository: string
  dryRun: boolean
  failOnError?: boolean
  // If someone uses ` ... --changed-files`, Commander will set this to
  // boolean `true`.
  // If someone uses ` ... --changed-files foo bar`, the value
  // becomes `['foo', 'bar']`.
  // And since it defaults to an env var called `CHANGED_FILES`,
  // it could be a string like `'foo bar'`.
  changedFiles?: string | string[] | true
}

// This function is designed to be able to run and potentially do nothing.
export async function postPRComment(filePath: string, options: PostPRCommentOptions) {
  // Check the options before we even begin
  if (!options.dryRun) {
    if (!options.issueNumber) {
      throw new Error(
        'If not in dry-run mode, you must provide an issue number. Either set ISSUE_NUMBER env var or pass the --issue-number flag. Remember, a PR is an issue actually.',
      )
    }
    if (!options.repository) {
      throw new Error(
        'If not in dry-run mode, you must provide a repository name. Either set REPOSITORY env var or pass the --repository flag.',
      )
    }
  }

  // See note on `PostPRCommentOptions` type about this
  if (options.changedFiles === true) {
    throw new Error(
      'If you use --changed-files, you must provide at least one file path. For example, --changed-files foo.md bar.md',
    )
  }

  // Exit early if there's absolutely nothing to "complain" about
  const checks: Check[] = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  const changedFiles: string[] = []
  if (options.changedFiles) {
    if (Array.isArray(options.changedFiles)) {
      changedFiles.push(...options.changedFiles)
    } else if (typeof options.changedFiles === 'string') {
      changedFiles.push(...options.changedFiles.split(/\s+/g))
    } else {
      throw new Error('Unexpected type for changedFiles')
    }
  }

  const checksFiltered = checks.filter((check: Check) => {
    return (
      !changedFiles.length ||
      changedFiles.some((changedFile) => contentFileMatchesURL(changedFile, check.url))
    )
  })

  if (checksFiltered.length !== checks.length && checks.length > 0) {
    console.warn(
      boxen(
        `Due to filtering by changed files (${changedFiles.length}) there are now ${checksFiltered.length} checks to process instead of ${checks.length}.`,
        { padding: 1 },
      ),
    )
  }

  // Really bad. This could lead to a 404 from links in GitHub.
  const failedChecks = checksFiltered.filter((check) => !check.found)

  // Bad. This could lead to the fragment not finding the right
  // heading in the found page.
  const failedFragmentChecks = checksFiltered.filter(
    (check) => check.found && check.fragment && !check.fragmentFound,
  )

  const body: string[] = []

  // Suppose, the first time the PR is created, we post a comment about
  // some failing fragments for example. Then, the PR author addresses
  // that and commits more to the PR. Now, perhaps there are no more failing
  // checks. Then we're going to update the previously posted comment.
  // But(!) suppose there were never any failing checks. Then, we don't
  // want to bother posting a comment at all since it's just noise to
  // say "This PR introduces no failing checks.". Especially, since this
  // will be the case for the large majority of PRs in this repo.
  const onlyIfAlreadyPosted = failedChecks.length === 0 && failedFragmentChecks.length === 0

  if (onlyIfAlreadyPosted) {
    body.push('No failed checks when checking `config/docs-urls.json`  in `github/github`.')
  } else {
    body.push(
      'For every PR, we compare what that means for `config/docs-urls.json` ' +
        'in `github/github`. That file determines how links to Docs are generated ' +
        'in GitHub.\n' +
        "If those links are broken, it's either because the URL pathname is wrong " +
        "or it's because the fragment (a.k.a. anchor or hash) is wrong.\n" +
        'It could be a false positive because `config/docs-urls.json` could ' +
        "have a link to something that only is there under a feature flag and they're " +
        'OK with the documentation not being written, yet.',
    )
    body.push('')

    if (failedChecks.length > 0) {
      body.push(`## Failed URLs`)
      body.push(
        `\n${failedChecks.length} URL${failedChecks.length === 1 ? '' : 's'} failed to be found. ` +
          'This could be intentional or it could be a mistake. Check each URL. ',
      )
      body.push('')
      body.push(
        '**Note** that a URL could be failing because the link is present in `master` ' +
          'but the documentation has **not yet been written**.',
      )
      body.push('')
      for (const check of failedChecks) {
        body.push(`- ❌ [${check.url}](${makeAbsoluteDocsURL(check)}) (${check.identifier})`)
      }
      body.push('')
    }
    if (failedFragmentChecks.length > 0) {
      body.push(`## Failed fragments`)
      body.push(
        `\n${failedFragmentChecks.length} fragment${failedFragmentChecks.length === 1 ? '' : 's'} failed to be found on its page. ` +
          'This could be intentional or it could be a mistake. Check each URL. ',
      )
      body.push('')
      body.push(makeMarkdownTableFragments(failedFragmentChecks))
      body.push('\n')
      body.push(
        '[See `config/docs-urls.json` in `github/github`](https://github.com/github/github/blob/master/config/docs-urls.json)\n',
      )
      body.push(
        'Perhaps you intentionally wanted to change the heading, which "broke" the fragment.\n' +
          'You can go ahead with your fragment-breaking change and once your PR lands ' +
          'go over to github/github and edit the equivalent entry in `config/docs-urls.json`.',
      )
    }
  }

  body.push('\n')
  body.push(
    `*(This comment was posted by \`validate-github-github-docs-urls\` automatically on ${new Date().toISOString()})*`,
  )

  const needle = '__post-pr-comment__'

  if (options.dryRun) {
    console.log(body.join('\n'))
  } else {
    // We must inject this into the comment we're about to start so that it
    // can be possible to find a previously posted comment.
    body.push(`<!-- ${needle} -->`)

    const issueNumber = parseInt(options.issueNumber as string, 10)
    await updateIssueComment(options.repository, issueNumber, body.join('\n'), {
      needle,
      onlyIfAlreadyPosted,
    })
  }

  if (options.failOnError) {
    console.warn(
      boxen(
        `
A failure here doesn't actually mean the *workflow* failed unexpectedly.

It's just that the PR failed the checks.
A red X should yield sufficient attention to the PR author and reviewer(s).

Remember, this workflow check is not required because it's not guaranteed to be free from false positives.
    `.trim(),
      ),
    )
    process.exit(failedChecks.length + failedFragmentChecks.length)
  }
}

function contentFileMatchesURL(filePath: string, url: string) {
  if (!filePath.startsWith('content/')) return false

  // This strips and omits any query string or hash
  const pathname = new URL(url, 'https://docs.github.com').pathname

  const fileUrl = filePath.replace('content', '').replace('/index.md', '').replace(/\.md$/, '')
  return pathname === fileUrl
}

function makeAbsoluteDocsURL(check: Check) {
  let absURL = `https://docs.github.com${check.pageURL}`
  if (check.fragment) {
    absURL += `#${check.fragment}`
  }
  return absURL
}

function makeMarkdownTableFragments(checks: Check[]) {
  let markdown = ''
  for (const check of checks) {
    let table = '<table>'

    table += '<tr><th>Identifier</th>'
    table += `<td><code>${check.identifier}</code></td></tr>`

    table += '<tr><th>URL</th>'
    table += `<td><code>${check.url}</code> <a href="${makeAbsoluteDocsURL(check)}">on prod</a></td></tr>`

    table += '<tr><th>Fragment</th>'
    table += `<td><code>${check.fragment}</code></td></tr>`

    table += '<tr><th>Candidates</th>'
    table += `<td>${(check.fragmentCandidates || []).map((x) => `<code>${x}</code>`).join(', ')}</td></tr>`

    table += '</table>'
    markdown += table
    markdown += '\n'
  }
  return markdown
}

async function updateIssueComment(
  repository: string,
  issueNumber: number,
  body: string,
  {
    needle = '',
    onlyIfAlreadyPosted = false,
  }: { needle?: string; onlyIfAlreadyPosted?: boolean } = {},
) {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('When not in dry-run mode, you must set the GITHUB_TOKEN environment variable.')
  }
  const octokit = retryingOctokit(process.env.GITHUB_TOKEN)

  const [owner, repo] = repository.split('/')
  const { data: existingComments } = await octokit.issues.listComments({
    owner,
    repo,
    issue_number: issueNumber,
  })
  for (const comment of existingComments) {
    if (comment.body && comment.body.includes(needle)) {
      console.warn(`Editing comment ${comment.id}`)
      await octokit.issues.updateComment({
        owner,
        repo,
        comment_id: comment.id,
        body,
      })
      return
    }
  }

  // It found no comment to *edit*, so it create *create* a new comment.
  // But `onlyIfAlreadyPosted` is true, so it does nothing.
  // This is convenient when might have, during the lifetime of a PR,
  // posted a comment, then committed more changes, and then realize
  // that what was posted previously is no long the case.
  if (onlyIfAlreadyPosted) {
    console.warn(`Deliberately not creating a new comment`)
    return
  }

  console.warn(`Creating new comment in ${issueNumber}`)
  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: issueNumber,
    body,
  })
}

function retryingOctokit(token: string) {
  const RetryingOctokit = Octokit.plugin(retry)
  return new RetryingOctokit({
    auth: `token ${token}`,
  })
}
