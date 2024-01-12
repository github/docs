#!/usr/bin/env node

import { START_JEST_SERVER, isServerHealthy, killServer } from './server-for-jest.js'

export default async () => {
  if (START_JEST_SERVER) {
    global.__SERVER__.close()

    if (await isServerHealthy()) {
      killServer()
    }
  }
}
