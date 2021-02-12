require('./lib/check-node-version')
require('./lib/handle-exceptions')
require('./lib/feature-flags')

const express = require('express')
const portUsed = require('port-used')
const warmServer = require('./lib/warm-server')
const port = Number(process.env.PORT) || 4000
const app = express()

require('./middleware')(app)

// prevent the app from starting up during tests
/* istanbul ignore next */
if (!module.parent) {
  // check that the development server is not already running
  portUsed.check(port).then(async status => {
    if (status === false) {
      // If in a deployed environment, warm the server at the start
      if (process.env.NODE_ENV === 'production') {
        // If in a true production environment, wait for the cache to be fully warmed.
        if (process.env.HEROKU_PRODUCTION_APP || process.env.GITHUB_ACTIONS) {
          await warmServer()
        }
      }

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
