import { getLiquidTokens } from '@/content-linter/lib/helpers/liquid-utils.js'

type Token = {
  name?: string
  args?: string
}

const parsedLiquidTokensCache = new Map<string, Token[]>()

export function inLiquid(filePath: string, fileContents: string, needle: string) {
  if (!parsedLiquidTokensCache.has(filePath)) {
    parsedLiquidTokensCache.set(filePath, getLiquidTokens(fileContents))
  }
  const tokens = parsedLiquidTokensCache.get(filePath) as Token[]
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
