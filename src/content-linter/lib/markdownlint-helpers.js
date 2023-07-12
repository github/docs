import { newLineRe } from 'markdownlint-rule-helpers'

export function getCodeFenceTokens(params) {
  return params.tokens.filter((t) => t.type === 'fence')
}

export function getCodeFenceLines(token) {
  return token.content.split(newLineRe)
}
