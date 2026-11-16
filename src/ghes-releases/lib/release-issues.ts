export type IssueState = 'open' | 'closed' | 'all'

const VALID_ISSUE_STATES: IssueState[] = ['open', 'closed', 'all']
const EXCLUDED_RELEASE_LABELS = new Set(['public roadmap', 'not planned'])

interface IssueLike {
  labels: { name: string }[]
}

export function parseIssueState(value?: string): IssueState {
  if (!value) return 'all'

  const normalized = value.toLowerCase()
  if (VALID_ISSUE_STATES.includes(normalized as IssueState)) {
    return normalized as IssueState
  }

  throw new Error(
    `Invalid issue state "${value}". Expected one of: ${VALID_ISSUE_STATES.join(', ')}`,
  )
}

export function buildReleaseIssueListArgs(version: string, issueState: IssueState): string[] {
  const label = `GHES ${version}`
  return [
    'issue',
    'list',
    '--repo',
    'github/releases',
    '--label',
    label,
    '--state',
    issueState,
    '--limit',
    '200',
    '--json',
    'number,title,url,body,labels',
  ]
}

// gh paginates up to this many results, and 1000 is the GitHub search API maximum.
export const CHANGELOG_PR_LIMIT = 1000

export function buildChangelogPrListArgs(since: string): string[] {
  return [
    'pr',
    'list',
    '--repo',
    'github/blog',
    '--state',
    'merged',
    '--search',
    `Changelog in:title merged:>=${since}`,
    '--limit',
    String(CHANGELOG_PR_LIMIT),
    '--json',
    'number,body,url',
  ]
}

// "public roadmap" and "not planned" issues never produce GHES release notes.
export function isExcludedReleaseIssue(issue: IssueLike): boolean {
  return issue.labels.some((l) => EXCLUDED_RELEASE_LABELS.has(l.name.toLowerCase()))
}
