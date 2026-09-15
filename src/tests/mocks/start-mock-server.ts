/* When testing API routes via an integration test, e.g.

const res = await post('/api/<some-route>', {
  body: JSON.stringify(api_body),
  headers: { 'Content-Type': 'application/json' },
})

expect(res.status).toBe(200)

The `api/<route>` may call an external URL.

We are unable to use `nock` in this circumstance since we run the server in a separate instance.

Instead, we can use the `startMockServer` helper to start a mock server that will intercept the request and return a canned response.

In order for this to work you MUST use a process.env variable for the URL you are calling, 

e.g. `process.env.CSE_COPILOT_ENDPOINT`

You should override the variable  in the overrideEnvForTesting function in this file.
*/

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
