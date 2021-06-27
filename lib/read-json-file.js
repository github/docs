const fs = require('fs')
const path = require('path')

module.exports = function readJsonFile (xpath) {
  return JSON.parse(
    fs.readFileSync(
      path.join(
        process.cwd(),
        xpath
      ),
      'utf8'
    )
  )
}
