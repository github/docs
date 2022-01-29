import fs from 'fs'
import { brotliDecompressSync } from 'zlib'

export default function readJsonFile(xpath) {
  return JSON.parse(fs.readFileSync(xpath, 'utf8'))
}

export function readCompressedJsonFile(xpath) {
  if (!xpath.endsWith('.br')) {
    xpath += '.br'
  }
  return JSON.parse(brotliDecompressSync(fs.readFileSync(xpath)))
}

// Ask it to read a `foo.json` file and it will automatically
// first see if there's a `foo.json.br` and only if it's not,
// will fallback to reading the `foo.json` file.
// The reason for this is that staging builds needs to as small as
// possible (in terms of disk) for them to deploy faster. So the
// staging deployment process will compress a bunch of large
// `.json` files before packaging it up.
export function readCompressedJsonFileFallback(xpath) {
  try {
    return readCompressedJsonFile(xpath)
  } catch (err) {
    if (err.code === 'ENOENT') {
      return readJsonFile(xpath)
    } else {
      throw err
    }
  }
}
