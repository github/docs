import fs from 'fs'
import { brotliDecompressSync } from 'zlib'

// Returns parsed JSON which can be any valid JSON type
export default function readJsonFile(xpath: string): any {
  return JSON.parse(fs.readFileSync(xpath, 'utf8'))
}

// Returns parsed JSON which can be any valid JSON type
export function readCompressedJsonFile(xpath: string): any {
  if (!xpath.endsWith('.br')) {
    xpath += '.br'
  }
  // Cast to any needed due to TypeScript's strict typing of Buffer vs expected input types for brotliDecompressSync
  return JSON.parse(brotliDecompressSync(fs.readFileSync(xpath) as any).toString())
}

// Ask it to read a `foo.json` file and it will automatically
// first see if there's a `foo.json.br` and only if it's not,
// will fallback to reading the `foo.json` file.
// The reason for this is that staging builds needs to as small as
// possible (in terms of disk) for them to deploy faster. So the
// staging deployment process will compress a bunch of large
// `.json` files before packaging it up.
// Returns parsed JSON which can be any valid JSON type
export function readCompressedJsonFileFallback(xpath: string): any {
  try {
    return readCompressedJsonFile(xpath)
  } catch (err: any) {
    // err is any because fs errors can have various shapes with code property
    if (err.code === 'ENOENT') {
      return readJsonFile(xpath)
    } else {
      throw err
    }
  }
}

// This is used to make sure the `readCompressedJsonFileFallbackLazily()`
// function isn't used with the same exact first argument more than once.
const globalCacheCounter: Record<string, number> = {}

// Wrapper on readCompressedJsonFileFallback that initially only checks
// if the file exists but doesn't read the content till you call it.
// Returns a function that returns parsed JSON which can be any valid JSON type
export function readCompressedJsonFileFallbackLazily(xpath: string): () => any {
  // Cache stores parsed JSON values which can be any valid JSON type
  const cache = new Map<string, any>()
  // This will throw if the file isn't accessible at all, e.g. ENOENT
  // But, the file might have been replaced by one called `SAMENAME.json.br`
  // because in staging, we ship these files compressed to make the
  // deployment faster. So, in our file-presence check, we need to
  // account for that.
  try {
    fs.accessSync(xpath)
  } catch (err: any) {
    // err is any because fs errors can have various shapes with code property
    if (err.code === 'ENOENT') {
      try {
        fs.accessSync(`${xpath}.br`)
      } catch (innerErr: any) {
        // innerErr is any because fs errors can have various shapes with code property
        if (innerErr.code === 'ENOENT') {
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
        console.warn(
          "If this happens it's because the readCompressedJsonFileFallbackLazily " +
            'function has been called non-globally. Only use ' +
            'readCompressedJsonFileFallback once at module-level.',
        )
        throw new Error(`Globally reading the same file more than once (${xpath})`)
      }
      globalCacheCounter[xpath] = 1
    }
    return cache.get(xpath)
  }
}
