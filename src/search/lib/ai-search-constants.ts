// Forward at most 500 chars to cse-copilot because 15k-60k pasted inputs
// caused timeouts and no-answer responses.
export const MAX_QUERY_LENGTH = 500

// Azure Responsible AI input filtering returns this detail.code for expected
// user-triggered rejections, so the error-rate monitor excludes them.
export const RAI_CONTENT_FILTER_CODE = 'RAI_INPUT_CONTENT_POLICY_BREACH_ERROR'

// buildSearchOptions truncates to this, so aria-activedescendant never names a missing row.
export const MAX_REFERENCES_TO_SHOW = 5
