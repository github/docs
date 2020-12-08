const fs = require('fs')
const path = require('path')
const { testViaActionsOnly } = require('../helpers/conditional-runs')

describe('cloning early-access', () => {
  testViaActionsOnly('the content directory exists', async () => {
    const eaContentDir = path.join(process.cwd(), 'content/early-access')
    expect(fs.existsSync(eaContentDir)).toBe(true)
  })

  testViaActionsOnly('the data directory exists', async () => {
    const eaContentDir = path.join(process.cwd(), 'data/early-access')
    expect(fs.existsSync(eaContentDir)).toBe(true)
  })

  testViaActionsOnly('the assets/images directory exists', async () => {
    const eaContentDir = path.join(process.cwd(), 'assets/images/early-access')
    expect(fs.existsSync(eaContentDir)).toBe(true)
  })
})
