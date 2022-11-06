import { allVersions } from '../../lib/all-versions.js'
import { liquid } from '../../lib/render-content/index.js'
import getApplicableVersions from '../../lib/get-applicable-versions.js'
import shortVersionsMiddleware from '../../middleware/contextualizers/short-versions.js'

// These tests check the `internalLatestRelease` prop set on GHAE in lib/all-versions.js.
// It will be incremented over time but will always be >3.2, so the tests should be evergreen.

describe('Versions frontmatter', () => {
  test('wildcard', async () => {
    const versions = {
      fpt: '*',
      ghae: '*',
    }
    const applicableVersions = getApplicableVersions(versions)
    expect(applicableVersions.includes('github-ae@latest')).toBe(true)
  })

  test('greater than', async () => {
    const versions = {
      fpt: '*',
      ghae: '>3.2',
    }
    const applicableVersions = getApplicableVersions(versions)
    expect(applicableVersions.includes('github-ae@latest')).toBe(true)
  })

  test('less than', async () => {
    const versions = {
      fpt: '*',
      ghae: '<3.2',
    }
    const applicableVersions = getApplicableVersions(versions)
    expect(applicableVersions.includes('github-ae@latest')).toBe(false)
  })
})

describe('ifversion conditionals', () => {
  const req = {}
  beforeAll(async () => {
    req.context = {
      allVersions,
      currentVersion: 'github-ae@latest',
    }
    await shortVersionsMiddleware(req, null, () => {})
  })

  test('greater than', async () => {
    const template = `
      {% ifversion ghae > 3.2 %}
      FOO
      {% else %}
      BAR
      {% endif %}
    `
    const output = await liquid.parseAndRender(template, req.context)
    expect(output.trim()).toBe('FOO')
  })

  test('less than', async () => {
    const template = `
      {% ifversion ghae < 3.2 %}
      FOO
      {% else %}
      BAR
      {% endif %}
    `
    const output = await liquid.parseAndRender(template, req.context)
    expect(output.trim()).toBe('BAR')
  })

  test('Equal', async () => {
    const template = `
      {% ifversion ghae %}
      FOO
      {% else %}
      BAR
      {% endif %}
    `
    const output = await liquid.parseAndRender(template, req.context)
    expect(output.trim()).toBe('FOO')
  })

  test('Not', async () => {
    const template = `
      {% ifversion not ghae %}
      FOO
      {% else %}
      BAR
      {% endif %}
    `
    const output = await liquid.parseAndRender(template, req.context)
    expect(output.trim()).toBe('BAR')
  })
})
