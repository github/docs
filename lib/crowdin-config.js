const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const read = function () {
  const filename = path.join(__dirname, '../crowdin.yml')
  return yaml.load(fs.readFileSync(filename, 'utf8'), { filename })
}

module.exports = { read }
