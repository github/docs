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
import { CSE_COPILOT_PREFIX, cseCopilotPostAnswersMock } from './cse-copilot-mock'

// Define the default port for the mock server
const MOCK_SERVER_PORT = 3012

// Construct the server URL using the defined port
const serverUrl = `http://localhost:${MOCK_SERVER_PORT}`

// Variable to hold the server instance
let server: any = null

// Override environment variables for testing purposes
export function overrideEnvForTesting() {
  process.env.CSE_COPILOT_ENDPOINT = `${serverUrl}/${CSE_COPILOT_PREFIX}`
}

// Function to start the mock server
export function startMockServer(port = MOCK_SERVER_PORT) {
  const app = express()
  app.use(express.json())

  // Define your mock routes here
  app.post(`/${CSE_COPILOT_PREFIX}/answers`, cseCopilotPostAnswersMock)

  // Start the server and store the server instance
  server = app.listen(port, () => {
    console.log(`Mock server is running on port ${port}`)
  })
}

// Function to stop the mock server
export function stopMockServer(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (server) {
      server.close((err: any) => {
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
