// Encode the space in [GitHub] (Docs) so Markdown does not parse it as a link.

export default function encodeBracketedParentheses(input: string): string {
  return input.replace(/] \(/g, ']&nbsp;(')
}
