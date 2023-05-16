import { allVersions } from '../../lib/all-versions.js'
import { liquid } from '../../lib/render-content/index.js'
import shortVersionsMiddleware from '../../middleware/contextualizers/short-versions.js'

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
