// Maximum query length (chars) we will forward to cse-copilot. Larger
// payloads are almost always pasted docs pages or unrelated content
// and either time out or return no-answer. See github/cse-copilot#1214.
export const MAX_QUERY_LENGTH = 500

// cse-copilot returns HTTP 400 with this code in `detail.code` when Azure's
// Responsible AI input content filter rejects a query. These are expected,
// user-triggered rejections, so they are tracked separately and kept out of
// the AI search error-rate monitor. See github/cse-copilot#1214.
export const RAI_CONTENT_FILTER_CODE = 'RAI_INPUT_CONTENT_POLICY_BREACH_ERROR'
