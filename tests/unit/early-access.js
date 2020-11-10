const fs = require('fs')
const path = require('path')

const testViaActionsOnly = process.env.GITHUB_ACTIONS ? test : test.skip

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
