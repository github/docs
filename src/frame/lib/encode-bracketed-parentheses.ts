// prevent `[foo] (bar)` strings with a space between from being interpreted as markdown links
// by encoding the space character

export default function encodeBracketedParentheses(input: string): string {
  return input.replace(/] \(/g, ']&nbsp;(')
}
