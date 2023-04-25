const runningActionsOnInternalRepo =
  process.env.GITHUB_ACTIONS === 'true' && process.env.GITHUB_REPOSITORY === 'github/docs-internal'

export const testViaActionsOnly = runningActionsOnInternalRepo ? test : test.skip
export const describeViaActionsOnly = runningActionsOnInternalRepo ? describe : describe.skip
export const describeIfElasticsearchURL = process.env.ELASTICSEARCH_URL ? describe : describe.skip
export const describeIfDocsEarlyAccess =
  process.env.GITHUB_REPOSITORY === 'github/docs-internal' || process.env.TEST_DOCS_EARLY_ACCESS
    ? describe
    : describe.skip

export default {
  testViaActionsOnly,
  describeViaActionsOnly,
  describeIfElasticsearchURL,
  describeIfDocsEarlyAccess,
}
