// Maximum query length (chars) we will forward to cse-copilot. Larger
// payloads are almost always pasted docs pages or unrelated content
// and either time out or return no-answer. See github/cse-copilot#1214.
export const MAX_QUERY_LENGTH = 2000
