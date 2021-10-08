import '../../lib/feature-flags.js'
import readJsonFile from '../../lib/read-json-file.js'
const ffs = readJsonFile('./feature-flags.json')

describe('feature flags', () => {
  Object.keys(ffs).forEach((featureName) => {
    expect(featureName.startsWith('FEATURE_')).toBe(true)
  })

  test('feature flag true test is true', async () => {
    expect(process.env.FEATURE_TEST_TRUE).toBeTruthy()
  })

  test('feature flag false test is false', async () => {
    expect(process.env.FEATURE_TEST_FALSE).toBeFalsy()
  })
})
