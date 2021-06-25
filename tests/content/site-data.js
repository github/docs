const fs = require('fs')
const path = require('path')
const { get, isPlainObject, has } = require('lodash')
const flat = require('flat')
const loadSiteData = require('../../lib/site-data')
const patterns = require('../../lib/patterns')
const { liquid } = require('../../lib/render-content')
const walkSync = require('walk-sync')

describe('siteData module (English)', () => {
  let data
  beforeAll(async (done) => {
    data = await loadSiteData()
    done()
  })

  test('makes an object', async () => {
    expect(isPlainObject(data)).toBe(true)
  })

  test('sets a top-level key for each language', async () => {
    expect('en' in data).toEqual(true)
    expect('ja' in data).toEqual(true)
  })

  test('includes English variables', async () => {
    const prodName = get(data, 'en.site.data.variables.product.prodname_dotcom')
    expect(prodName).toBe('GitHub')
  })

  test('includes English reusables', async () => {
    const reusable = get(data, 'en.site.data.reusables.command_line.switching_directories_procedural')
    expect(reusable).toBe('1. Change the current working directory to your local repository.')
  })

  test('includes Japanese variables', async () => {
    const prodName = get(data, 'ja.site.data.variables.product.prodname_dotcom')
    expect(prodName).toBe('GitHub')
  })

  test('includes Japanese reusables', async () => {
    const reusable = get(data, 'ja.site.data.reusables.audit_log.octicon_icon')
    expect(reusable.includes('任意のページの左上で')).toBe(true)
  })

  // TODO: re-enable once Janky flakyness is resolved
  test.skip('backfills missing translated site data with English values', async () => {
    const newFile = path.join(__dirname, '../../data/newfile.yml')
    await fs.writeFile(newFile, 'newvalue: bar')
    const data = await loadSiteData()
    expect(get(data, 'en.site.data.newfile.newvalue')).toEqual('bar')
    expect(get(data, 'ja.site.data.newfile.newvalue')).toEqual('bar')
    await fs.unlink(newFile)
  })

  test('all Liquid templating is valid', async () => {
    const dataMap = flat(data)
    for (const key in dataMap) {
      const value = dataMap[key]
      if (!patterns.hasLiquid.test(value)) continue
      let message = `${key} contains a malformed Liquid expression`
      let result = null
      try {
        result = await liquid.parseAndRender(value)
      } catch (err) {
        console.trace(err)
        message += `: ${err.message}`
      }
      expect(typeof result, message).toBe('string')
    }
  })

  test('includes markdown files as data', async () => {
    const reusable = get(data, 'en.site.data.reusables.enterprise_enterprise_support.submit-support-ticket-first-section')
    expect(typeof reusable).toBe('string')
    expect(reusable.includes('1. ')).toBe(true)
  })

  test.skip('encodes bracketed parentheses to prevent them from becoming links', async () => {
    const reusable = get(data, 'ja.site.data.reusables.organizations.team_name')
    const expectation = `reusable should contain a bracket followed by a space. Actual value: ${reusable}`
    expect(reusable.includes(']&nbsp;('), expectation).toBe(true)
  })

  test('warn if any YAML reusables are found', async () => {
    const reusables = walkSync(path.join(__dirname, '../../data/reusables'))
    expect(reusables.length).toBeGreaterThan(100)
    const yamlReusables = reusables.filter(filename => filename.endsWith('.yml') || filename.endsWith('.yaml'))
    const message = `reusables are now written as individual Markdown files. Please migrate the following YAML files to Markdown:\n${yamlReusables.join('\n')}`
    expect(yamlReusables.length, message).toBe(0)
  })

  test('all non-English data has matching English data', async () => {
    for (const languageCode of Object.keys(data)) {
      if (languageCode === 'en') continue

      const nonEnglishKeys = Object.keys(flat(data[languageCode]))
      for (const key of nonEnglishKeys) {
        if (!has(data.en, key)) {
          throw new Error(`matching data not found for ${languageCode}.${key}`)
        }
      }
    }
  })
})
