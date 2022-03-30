import { fileURLToPath } from 'url'
import path from 'path'
import { get, isPlainObject } from 'lodash-es'
import flat from 'flat'
import walkSync from 'walk-sync'
import { ParseError } from 'liquidjs'
import loadSiteData from '../../lib/site-data.js'
import patterns from '../../lib/patterns.js'
import { liquid } from '../../lib/render-content/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('siteData module (English)', () => {
  const data = loadSiteData()

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
    const reusable = get(
      data,
      'en.site.data.reusables.command_line.switching_directories_procedural'
    )
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

  test('all Liquid tags are valid', async () => {
    const dataMap = flat(data)
    for (const key in dataMap) {
      const value = dataMap[key]
      if (!patterns.hasLiquid.test(value)) continue
      try {
        await liquid.parseAndRender(value)
      } catch (err) {
        if (err instanceof ParseError) {
          console.warn('value that failed to parse:', value)
          throw new Error(`Unable to parse with Liquid: ${err.message}`)
        }
        // Note, the parseAndRender() might throw other errors. For
        // example errors about the the data. But at least it
        // managed to get paste the Liquid parsing phase.
      }
    }
  })

  test('includes markdown files as data', async () => {
    const reusable = get(data, 'en.site.data.reusables.support.submit-a-ticket')
    expect(typeof reusable).toBe('string')
    expect(reusable.includes('1. ')).toBe(true)
  })

  // Docs Engineering issue: 965
  test.skip('encodes bracketed parentheses to prevent them from becoming links', async () => {
    const reusable = get(data, 'ja.site.data.reusables.organizations.team_name')
    const expectation = `reusable should contain a bracket followed by a space. Actual value: ${reusable}`
    expect(reusable.includes(']&nbsp;('), expectation).toBe(true)
  })

  test('warn if any YAML reusables are found', async () => {
    const reusables = walkSync(path.join(__dirname, '../../data/reusables'))
    expect(reusables.length).toBeGreaterThan(100)
    const yamlReusables = reusables.filter(
      (filename) => filename.endsWith('.yml') || filename.endsWith('.yaml')
    )
    const message = `reusables are now written as individual Markdown files. Please migrate the following YAML files to Markdown:\n${yamlReusables.join(
      '\n'
    )}`
    expect(yamlReusables.length, message).toBe(0)
  })
})
