import path from 'node:path'

import { getLiquidTokens } from '@/content-linter/lib/helpers/liquid-utils'
import type { TagToken } from 'liquidjs'
import { TokenKind } from 'liquidjs'

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
    } else if (token.name === 'indented_data_reference') {
      // The reference is followed by an optional spaces=N argument.
      const [reference] = token.args.trim().split(/\s+/)
      if (reference === needle) {
        return true
      }
    }
  }
  return false
}

export function reusableNeedle(filePath: string) {
  const relativePath = path.relative('data/reusables', filePath).replace(/\.md$/, '')
  return `reusables.${relativePath.replace(/[\\/]/g, '.')}`
}

// Reusables often include other reusables, so an article can render a changed
// reusable without referencing it directly.
export function expandReusableNeedles(needles: Set<string>, reusableFiles: Map<string, string>) {
  const expanded = new Set(needles)
  const pending = [...needles]
  while (pending.length) {
    const needle = pending.pop()!
    for (const [filePath, fileContents] of reusableFiles) {
      const outerNeedle = reusableNeedle(filePath)
      if (expanded.has(outerNeedle)) continue
      if (inLiquid(filePath, fileContents, needle)) {
        expanded.add(outerNeedle)
        pending.push(outerNeedle)
      }
    }
  }
  return expanded
}
