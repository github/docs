// TODO test ea-config

const fs = require('fs')
const path = require('path')

// TODO this should not fail if run locally without cloning early-access
describe('cloning content/early-access', () => {
  test('the content directory exists', async () => {
    const eaContentDir = path.join(process.cwd(), 'content/early-access-test')
    expect(fs.existsSync(eaContentDir)).toBe(true)
  })
})
