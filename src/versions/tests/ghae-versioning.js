import { allVersions } from '#src/versions/lib/all-versions.js'
import { liquid } from '#src/content-render/index.js'
import shortVersionsMiddleware from '#src/versions/middleware/short-versions.js'

const contextualize = (req) => {
  req.context.currentVersionObj = req.context.allVersions[req.context.currentVersion]
  shortVersionsMiddleware(req, null, () => {})
}

describe('ifversion conditionals', () => {
  const req = {}
  beforeAll(async () => {
    req.context = {
      allVersions,
      currentVersion: 'github-ae@latest',
    }
    contextualize(req)
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
