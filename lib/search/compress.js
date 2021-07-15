import { promisify } from 'util'
import zlib from 'zlib'
const brotliCompress = promisify(zlib.brotliCompress)
const brotliDecompress = promisify(zlib.brotliDecompress)

const options = {
  params: {
    [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
    [zlib.constants.BROTLI_PARAM_QUALITY]: 6,
  },
}

export async function compress(data) {
  return brotliCompress(data, options)
}

export async function decompress(data) {
  return brotliDecompress(data, options)
}

export default {
  compress,
  decompress,
}
