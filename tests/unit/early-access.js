const fs = require('fs')
const path = require('path')

const { GITHUB_ACTIONS, GITHUB_REPOSITORY } = process.env
const runningActionsOnInternalRepo = GITHUB_ACTIONS === 'true' && GITHUB_REPOSITORY === 'github/docs-internal'
const testViaActionsOnly = runningActionsOnInternalRepo ? test : test.skip

//
// TODO test ea-config
//

describe('cloning early-access', () => {
  testViaActionsOnly('the content directory exists', async () => {
    const eaContentDir = path.join(process.cwd(), 'content/early-access')
    expect(fs.existsSync(eaContentDir)).toBe(true)
  })

  // testViaActionsOnly('the data directory exists', async () => {
  //   const eaContentDir = path.join(process.cwd(), 'data/early-access')
  //   expect(fs.existsSync(eaContentDir)).toBe(true)
  // })

  // testViaActionsOnly('the assets directory exists', async () => {
  //   const eaContentDir = path.join(process.cwd(), 'assets/early-access')
  //   expect(fs.existsSync(eaContentDir)).toBe(true)
  // })
})
