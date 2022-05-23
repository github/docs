#!/usr/bin/env node

import setupJestPuppeteer from 'jest-environment-puppeteer/setup.js'

import { main } from '../start-server.mjs'

import { PORT, START_JEST_SERVER, isServerHealthy, isPortRunning } from './server-for-jest.mjs'

export default async () => {
  if (START_JEST_SERVER) {
    console.log(`Starting a server for jest on port :${PORT}.`)

    process.env.NODE_ENV = 'test'
    // Has to be this because that's what the end-to-end tests expect
    process.env.PORT = `${PORT}`

    if (await isPortRunning()) {
      console.error(`Something's already running on :${PORT}`)
      console.log(
        'If you intend to run jest tests with an existing server, set env var START_JEST_SERVER=false'
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

  // The way jest-puppeteer works is that you add a preset in
  // `jest.config.js` but that preset will clash with the execution
  // of this script. So we have to manually do what we do normally
  // do in `jest.config.js`.
  // Note, we can delete this when we migrate to Playwright.
  if (process.env.BROWSER) {
    await setupJestPuppeteer()
  }
}
