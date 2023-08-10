#!/usr/bin/env node

import { main } from '../start-server.js'

import { PORT, START_JEST_SERVER, isServerHealthy, isPortRunning } from './server-for-jest.js'

export default async () => {
  if (START_JEST_SERVER) {
    console.log(`Starting a server for jest on port :${PORT}.`)

    process.env.NODE_ENV = 'test'
    // Has to be this because that's what the end-to-end tests expect
    process.env.PORT = `${PORT}`

    if (await isPortRunning()) {
      console.error(`Something's already running on :${PORT}`)
      console.log(
        'If you intend to run jest tests with an existing server, set env var START_JEST_SERVER=false',
      )
      process.exit(1)
    }

    // So it can be accessed from the script that
    // is set up by the jest config: `globalTeardown`
    global.__SERVER__ = await main()

    console.assert(await isServerHealthy())
  } else {
    console.warn(`jest is NOT automatically starting a server on port :${PORT}`)
  }
}
