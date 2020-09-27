const config = require('../../lib/crowdin-config').read()

describe('crowdin.yml config file', () => {
  test('has expected file stucture', async () => {
    expect(config.files.length).toBe(3)
    expect(config.files[0].source).toBe('/content/**/*.md')
    expect(config.files[0].ignore).toContain('/content/README.md')
  })
})
