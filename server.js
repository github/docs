require('dotenv').config()

const throng = require('throng')
const os = require('os')
const portUsed = require('port-used')
const prefixStreamWrite = require('./lib/prefix-stream-write')
const libApp = require('./lib/app')
const libWarmServer = require('./lib/warm-server')
const http = require('http')

// Intentionally require these for both cluster primary and workers
require('./lib/check-node-version')
require('./lib/handle-exceptions')
require('./lib/feature-flags')

const { PORT, NODE_ENV } = process.env
const port = Number(PORT) || 4000

// Start the server!
if (NODE_ENV === 'production') {
  clusteredMain()
} else {
  nonClusteredMain()
}

function clusteredMain () {
  // Spin up a cluster!
  throng({
    master: setupPrimary,
    worker: setupWorker,
    count: calculateWorkerCount()
  })
}

async function nonClusteredMain () {
  await checkPortAvailability()
  await startServer()
}

async function checkPortAvailability () {
  // Check that the development server is not already running
  const portInUse = await portUsed.check(port)
  if (portInUse) {
    console.log(`\n\n\nPort ${port} is not available. You may already have a server running.`)
    console.log('Try running `killall node` to shut down all your running node processes.\n\n\n')
    console.log('\x07') // system 'beep' sound
    process.exit(1)
  }
}

async function startServer () {
  const app = libApp
  const warmServer = libWarmServer

  // If in a deployed environment...
  if (NODE_ENV === 'production') {
    // If in a true production environment, wait for the cache to be fully warmed.
    if (process.env.HEROKU_PRODUCTION_APP || process.env.GITHUB_ACTIONS) {
      await warmServer()
    }
  }

  // Workaround for https://github.com/expressjs/express/issues/1101
  const server = http.createServer(app)
  server
    .listen(port, () => console.log(`app running on http://localhost:${port}`))
    .on('error', () => server.close())
}

// This function will only be run in the primary process
async function setupPrimary () {
  process.on('beforeExit', () => {
    console.log('Shutting down primary...')
    console.log('Exiting!')
  })

  console.log('Starting up primary...')

  await checkPortAvailability()
}

// IMPORTANT: This function will be run in a separate worker process!
async function setupWorker (id, disconnect) {
  let exited = false

  // Wrap stdout and stderr to include the worker ID as a static prefix
  // console.log('hi') => '[worker.1]: hi'
  const prefix = `[worker.${id}]: `
  prefixStreamWrite(process.stdout, prefix)
  prefixStreamWrite(process.stderr, prefix)

  process.on('beforeExit', () => {
    console.log('Exiting!')
  })

  process.on('SIGTERM', shutdown)
  process.on('SIGINT', shutdown)

  console.log('Starting up worker...')

  // Load the server in each worker process and share the port via sharding
  await startServer()

  function shutdown () {
    if (exited) return
    exited = true

    console.log('Shutting down worker...')
    disconnect()
  }
}

function calculateWorkerCount () {
  // Heroku's recommended WEB_CONCURRENCY count based on the WEB_MEMORY config,
  // or explicitly configured by us
  const { WEB_CONCURRENCY } = process.env

  const recommendedCount = parseInt(WEB_CONCURRENCY, 10)
  const cpuCount = os.cpus().length

  // Ensure the recommended count is AT LEAST 1 for safety
  let workerCount = Math.max(recommendedCount || 1, 1)

  // If WEB_CONCURRENCY value was configured to a valid number...
  if (recommendedCount > 0) {
    // Use the smaller value between the recommendation vs. the CPU count
    workerCount = Math.min(workerCount, cpuCount)
  } else if (NODE_ENV === 'production') {
    // Else if in a deployed environment, default to the CPU count
    workerCount = cpuCount
  }

  return workerCount
}
