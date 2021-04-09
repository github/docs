const fs = require('fs')
const util = require('util')

// This is faster than using `fs.promises.readFile` for the time being
// See: https://github.com/nodejs/node/issues/37583
module.exports = util.promisify(fs.readFile)
