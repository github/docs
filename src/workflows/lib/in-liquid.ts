import { getLiquidTokens } from '@/content-linter/lib/helpers/liquid-utils'
import type { TagToken } from 'liquidjs'
import { TokenKind } from 'liquidjs'

// Type guard to check if a token is a TagToken
function isTagToken(token: unknown): token is TagToken {
  return (
    token !== null &&
    typeof token === 'object' &&
    'kind' in token &&
    token.kind === TokenKind.Tag &&
    'name' in token &&
    typeof token.name === 'string' &&
    'args' in token
  )
}

const parsedLiquidTokensCache = new Map<string, TagToken[]>()

export function inLiquid(filePath: string, fileContents: string, needle: string) {
  if (!parsedLiquidTokensCache.has(filePath)) {
    parsedLiquidTokensCache.set(filePath, getLiquidTokens(fileContents).filter(isTagToken))
  }
  const tokens = parsedLiquidTokensCache.get(filePath)!
  for (const token of tokens) {
    if (token.name === 'data') {
      const { args } = token
      if (args === needle) {
        return true
      }
    }
  }
  return false
}
