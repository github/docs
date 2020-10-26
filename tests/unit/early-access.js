const fs = require('fs')
const path = require('path')

const testViaActionsOnly = process.env.GITHUB_ACTIONS ? test : test.skip

// TODO test ea-config

// TODO this should only run locally
describe('cloning content/early-access', () => {
  testViaActionsOnly('the content directory exists', async () => {
    const eaContentDir = path.join(process.cwd(), 'content/early-access-test')
    expect(fs.existsSync(eaContentDir)).toBe(true)
  })
})
