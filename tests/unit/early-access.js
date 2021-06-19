const fs = require('fs').promises
const path = require('path')
const { testViaActionsOnly } = require('../helpers/conditional-runs')

describe('cloning early-access', () => {
  testViaActionsOnly('the content directory exists', async () => {
    const eaDir = path.join(process.cwd(), 'content/early-access')
    expect(await fs.stat(eaDir)).toBeTruthy()
  })

  testViaActionsOnly('the data directory exists', async () => {
    const eaDir = path.join(process.cwd(), 'data/early-access')
    expect(await fs.stat(eaDir)).toBeTruthy()
  })

  testViaActionsOnly('the assets/images directory exists', async () => {
    const eaDir = path.join(process.cwd(), 'assets/images/early-access')
    expect(await fs.stat(eaDir)).toBeTruthy()
  })
})
