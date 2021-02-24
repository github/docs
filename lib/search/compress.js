const { promisify } = require('util')
const zlib = require('zlib')
const brotliCompress = promisify(zlib.brotliCompress)
const brotliDecompress = promisify(zlib.brotliDecompress)

const options = {
  params: {
    [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
    [zlib.constants.BROTLI_PARAM_QUALITY]: 6
  }
}

module.exports = {
  async compress (data) {
    return brotliCompress(data, options)
  },

  async decompress (data) {
    return brotliDecompress(data, options)
  }
}
