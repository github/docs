const fs = require('fs').promises
const path = require('path')

module.exports = async function getIndexNames () {
  return await fs.readdir(path.join(__dirname, '../../lib/search/indexes'))
}
