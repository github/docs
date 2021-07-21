import fs from 'fs'
import util from 'util'

// This is faster than using `fs.promises.readFile` for the time being
// See: https://github.com/nodejs/node/issues/37583
export default util.promisify(fs.readFile)
