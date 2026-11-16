import { overrideEnvForTesting } from './mocks/start-mock-server'

let teardownHappened = false
type Server = Awaited<ReturnType<typeof import('@/frame/start-server').main>>

let server: Server | undefined

export async function setup() {
  overrideEnvForTesting()
  // Unit tests and manually started servers don't need the Vitest-managed server.
  if (process.env.START_VITEST_SERVER === 'false') return
  // Import lazily so skipping the server also skips loading the app.
  const { main } = await import('@/frame/start-server')
  server = await main()
}

export async function teardown() {
  if (teardownHappened) throw new Error('teardown called twice')
  teardownHappened = true
  if (server) server.close()
}
