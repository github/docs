import http from 'http'

import tcpPortUsed from 'tcp-port-used'
import dotenv from 'dotenv'

import { checkNodeVersion } from './lib/check-node-version'
import '../observability/lib/handle-exceptions.js'
import createApp from './lib/app'
import warmServer from './lib/warm-server'

dotenv.config()

checkNodeVersion()

const { PORT, NODE_ENV } = process.env
const port = Number(PORT) || 4000

export async function main() {
  if (NODE_ENV !== 'production') {
    await checkPortAvailability()
  }

  return await startServer()
}

async function checkPortAvailability() {
  // Check that the development server is not already running
  const portInUse = await tcpPortUsed.check(port)
  if (portInUse) {
    console.log(`\n\n\nPort ${port} is not available. You may already have a server running.`)
    console.log(
      `Try running \`npx kill-port ${port}\` to shut down all your running node processes.\n\n\n`,
    )
    console.log('\x07') // system 'beep' sound
    process.exit(1)
  }
}

async function startServer() {
  const app = createApp()

  // Warm up as soon as possible.
  // The `warmServer()` function is idempotent and it will soon be used
  // by some middleware, but there's no point in having a started server
  // without this warmed up. Besides, by starting this slow thing now,
  // it can start immediately instead of waiting for the first request
  // to trigger it to warm up. That way, when in development and triggering
  // a `nodemon` restart, there's a good chance the warm up has come some
  // way before you manage to reach for your browser to do a page refresh.
  await warmServer([])

  // Workaround for https://github.com/expressjs/express/issues/1101
  const server = http.createServer(app)

  return server
    .listen(port, () => console.log(`app running on http://localhost:${port}`))
    .on('error', () => server.close())
}
