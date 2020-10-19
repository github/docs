require('./lib/check-node-version')
require('./lib/handle-exceptions')
require('./lib/feature-flags')

const express = require('express')
const portUsed = require('port-used')
const warmServer = require('./lib/warm-server')
const fs = require('fs')
const path = require('path')
const dirTree = require('directory-tree')
const port = Number(process.env.PORT) || 4000
const app = express()

const { transform } = require('./lib/react/babel')

const tree = dirTree('./react/')
for (const index in tree.children) {
  const file = tree.children[index]
  if (file.type === 'file') {
    if (!fs.existsSync(path.join('dist', 'react'))) {
      fs.mkdirSync(path.join('dist', 'react'), { recursive: true })
    }
    const content = transform(fs.readFileSync(file.path, 'utf8'))
    fs.writeFileSync(path.join('dist', file.path), content)
  }
}
// End Build React Components

require('./middleware')(app)

// prevent the app from starting up durings tests
/* istanbul ignore next */
if (!module.parent) {
  // check that the development server is not already running
  portUsed.check(port).then(async status => {
    if (status === false) {
      // If in production, warm the server at the start
      if (process.env.NODE_ENV === 'production') await warmServer()

      // workaround for https://github.com/expressjs/express/issues/1101
      const server = require('http').createServer(app)
      server.listen(port, () => console.log(`app running on http://localhost:${port}`))
        .on('error', () => server.close())
    } else {
      console.log(`\n\n\nPort ${port} is not available. You may already have a server running.`)
      console.log('Try running `killall node` to shut down all your running node processes.\n\n\n')
      console.log('\x07') // system 'beep' sound
      process.exit(1)
    }
  })
}

module.exports = app
