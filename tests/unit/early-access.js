const fs = require('fs')
const path = require('path')

const { GITHUB_ACTIONS, GITHUB_REPOSITORY } = process.env
const runningActionsOnInternalRepo = GITHUB_ACTIONS === 'true' && GITHUB_REPOSITORY === 'github/docs-internal'
const testViaActionsOnly = runningActionsOnInternalRepo ? test : test.skip

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
