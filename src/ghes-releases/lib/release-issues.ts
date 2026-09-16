export type IssueState = 'open' | 'closed' | 'all'

const VALID_ISSUE_STATES: IssueState[] = ['open', 'closed', 'all']
const EXCLUDED_RELEASE_LABELS = new Set(['public roadmap', 'not planned'])

interface IssueLike {
  labels: { name: string }[]
}

/**
 * Parse and validate the issue state filter. Defaults to "all".
 */
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

/**
 * Build gh CLI args for listing release issues.
 */
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

/**
 * Excludes release issues that should not produce GHES release notes.
 */
export function isExcludedReleaseIssue(issue: IssueLike): boolean {
  return issue.labels.some((l) => EXCLUDED_RELEASE_LABELS.has(l.name.toLowerCase()))
}
