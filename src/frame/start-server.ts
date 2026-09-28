// Import tracing before framework code so auto-instrumentation can patch Node.js built-ins.
// Moving it later silently breaks OTel tracing.
import '@/observability/lib/tracing'

import http from 'http'

import tcpPortUsed from 'tcp-port-used'
import dotenv from 'dotenv'

import { checkNodeVersion } from './lib/check-node-version'
import '../observability/lib/handle-exceptions'
import { startRuntimeMetrics } from '@/observability/lib/runtime-metrics'
import createApp from './lib/app'
import warmServer from './lib/warm-server'
import { createLogger } from '@/observability/logger'

dotenv.config()

checkNodeVersion()

const logger = createLogger(import.meta.url)

const { PORT, NODE_ENV } = process.env
const port = Number(PORT) || 4000

export async function main() {
  if (NODE_ENV !== 'production') {
    await checkPortAvailability()
  }

  return await startServer()
}

async function checkPortAvailability() {
  const portInUse = await tcpPortUsed.check(port)
  if (portInUse) {
    logger.error('Port is not available. You may already have a server running.', { port })
    logger.error(
      `Try running \`npx kill-port ${port}\` to shut down all your running node processes.`,
    )
    logger.info('\x07') // system 'beep' sound
    process.exit(1)
  }
}

// startServer warms the idempotent server cache before listen, so development restarts do not
// block the first page refresh.
// The SIGTERM timer forces exit after 25s because the preStop hook sleeps 5s and Kubernetes
// SIGKILLs at 60s, while the deploy controller can time out on old terminating pods.
async function startServer() {
  const app = createApp()

  await warmServer([])

  // Workaround for https://github.com/expressjs/express/issues/1101
  const server = http.createServer(app)

  startRuntimeMetrics()

  process.once('SIGTERM', () => {
    logger.info('Received SIGTERM, beginning graceful shutdown', { pid: process.pid, port })

    // Force-close idle keep-alive sockets so server.close() does not wait for natural disconnects.
    try {
      server.closeIdleConnections()
    } catch (err) {
      logger.warn('closeIdleConnections failed (server may not be running)', { error: err })
    }

    server.close(() => {
      logger.info('HTTP server closed')
    })

    setTimeout(() => {
      logger.warn('Graceful shutdown timed out, forcing exit')
      try {
        server.closeAllConnections()
      } catch (err) {
        logger.warn('closeAllConnections failed (server may not be running)', { error: err })
      }
      process.exit(0)
    }, 25_000).unref()
  })

  return server
    .listen(port, () =>
      logger.info('Server started', { port, pid: process.pid, nodeEnv: process.env.NODE_ENV }),
    )
    .on('error', () => server.close())
}
