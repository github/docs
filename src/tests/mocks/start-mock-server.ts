// Integration tests cannot use nock when API routes call external URLs from a separate server.
// Example: post to /api/<some-route>, and let that route call the mock server.
// Point the route at this mock server through an env var such as CSE_COPILOT_ENDPOINT.
// Set that env var in overrideEnvForTesting.

import express from 'express'
import type { Server } from 'http'
import { CSE_COPILOT_PREFIX, cseCopilotPostAnswersMock } from './cse-copilot-mock'

const MOCK_SERVER_PORT = 3012

const serverUrl = `http://localhost:${MOCK_SERVER_PORT}`

let server: Server | null = null

export function overrideEnvForTesting() {
  process.env.CSE_COPILOT_ENDPOINT = `${serverUrl}/${CSE_COPILOT_PREFIX}`
}

export function startMockServer(port = MOCK_SERVER_PORT) {
  const app = express()
  app.use(express.json())

  app.post(`/${CSE_COPILOT_PREFIX}/answers`, cseCopilotPostAnswersMock)

  server = app.listen(port, () => {
    console.log(`Mock server is running on port ${port}`)
  })
}

export function stopMockServer(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (server) {
      server.close((err: Error | undefined) => {
        if (err) {
          console.error('Error stopping the mock server:', err)
          reject(err)
        } else {
          console.log('Mock server has been stopped.')
          server = null
          resolve()
        }
      })
    } else {
      console.warn('Mock server is not running.')
      resolve()
    }
  })
}
