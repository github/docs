const runningActionsOnInternalRepo =
  process.env.GITHUB_ACTIONS === 'true' && process.env.GITHUB_REPOSITORY === 'github/docs-internal'

export const testViaActionsOnly = runningActionsOnInternalRepo ? test : test.skip
export const describeViaActionsOnly = runningActionsOnInternalRepo ? describe : describe.skip

export default {
  testViaActionsOnly,
  describeViaActionsOnly,
}
