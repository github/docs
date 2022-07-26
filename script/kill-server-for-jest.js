#!/usr/bin/env node

import teardownJestPuppeteer from 'jest-environment-puppeteer/teardown.js'

import { START_JEST_SERVER, isServerHealthy, killServer } from './server-for-jest.js'

export default async () => {
  if (START_JEST_SERVER) {
    global.__SERVER__.close()

    if (await isServerHealthy()) {
      killServer()
    }
  }

  // The way jest-puppeteer works is that you add a preset in
  // `jest.config.js` but that preset will clash with the execution
  // of this script. So we have to manually do what we do normally
  // do in `jest.config.js`
  // Note, we can delete this when we migrate to Playwright.
  if (process.env.BROWSER) {
    await teardownJestPuppeteer()
  }
}
