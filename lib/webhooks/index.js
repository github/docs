const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const { set } = require('lodash')
const staticDir = path.join(__dirname, 'static')

// compile contents of individual .payload.json files into a single object, with versions as top-level keys
const payloads = {}

// array of versions based on subdirectory names: lib/webhooks/static/<version>
const versions = fs.readdirSync(staticDir)

versions.forEach(version => {
  const payloadsPerVersion = {}
  const versionSubdir = path.join(staticDir, version)

  walk(versionSubdir, { includeBasePath: true })
    .forEach(payloadFile => {
      // payload file: /path/to/check_run.completed.payload.json
      // payload path: check_run.completed
      const payloadPath = path.basename(payloadFile).replace('.payload.json', '')
      set(payloadsPerVersion, payloadPath, formatAsJsonCodeBlock(require(payloadFile)))
    })

  payloads[version] = payloadsPerVersion
})

function formatAsJsonCodeBlock (payloadObj) {
  return '<div class="height-constrained-code-block">\n\n```json\n' + JSON.stringify(payloadObj, null, 2) + '\n```\n\n</div>'
}

module.exports = payloads
