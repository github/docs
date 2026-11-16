import fs from 'fs'
import { brotliDecompressSync } from 'zlib'

import { createLogger } from '@/observability/logger'
const logger = createLogger(import.meta.url)

export default function readJsonFile(xpath: string): unknown {
  return JSON.parse(fs.readFileSync(xpath, 'utf8'))
}

export function readCompressedJsonFile(xpath: string): unknown {
  if (!xpath.endsWith('.br')) {
    xpath += '.br'
  }
  return JSON.parse(brotliDecompressSync(fs.readFileSync(xpath)).toString())
}

// Staging ships large JSON as .br files to keep deployments smaller.
// Callers pass the .json path; read .json.br first, then fall back to .json.
export function readCompressedJsonFileFallback(xpath: string): unknown {
  try {
    return readCompressedJsonFile(xpath)
  } catch (err: unknown) {
    if (err instanceof Error && 'code' in err && (err as NodeJS.ErrnoException).code === 'ENOENT') {
      return readJsonFile(xpath)
    } else {
      throw err
    }
  }
}

// Each path gets one lazy reader; duplicate readers throw after the first read.
const globalCacheCounter: Record<string, number> = {}

// Lazy reads verify file presence early but defer parsing until first use.
export function readCompressedJsonFileFallbackLazily(xpath: string): () => unknown {
  const cache = new Map<string, unknown>()
  // Presence checks accept either the uncompressed file or staging's compressed .br replacement.
  try {
    fs.accessSync(xpath)
  } catch (err: unknown) {
    if (err instanceof Error && 'code' in err && (err as NodeJS.ErrnoException).code === 'ENOENT') {
      try {
        fs.accessSync(`${xpath}.br`)
      } catch (innerErr: unknown) {
        if (
          innerErr instanceof Error &&
          'code' in innerErr &&
          (innerErr as NodeJS.ErrnoException).code === 'ENOENT'
        ) {
          throw new Error(`Neither ${xpath} nor ${xpath}.br is accessible`)
        }
        throw innerErr
      }
    } else {
      throw err
    }
  }
  return () => {
    if (!cache.has(xpath)) {
      cache.set(xpath, readCompressedJsonFileFallback(xpath))
      if (globalCacheCounter[xpath]) {
        logger.warn(
          'readCompressedJsonFileFallbackLazily called non-globally. Only use readCompressedJsonFileFallback once at module-level.',
          { xpath },
        )
        throw new Error(`Globally reading the same file more than once (${xpath})`)
      }
      globalCacheCounter[xpath] = 1
    }
    return cache.get(xpath)
  }
}
