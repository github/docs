import { beforeAll, describe, expect, test } from 'vitest'

import { allVersions } from '#src/versions/lib/all-versions.js'
import { liquid } from '#src/content-render/index.js'
import { supported } from '#src/versions/lib/enterprise-server-releases.js'
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
      currentVersion: `enterprise-server@${supported[0]}`,
    }
    contextualize(req)
  })

  test('greater than', async () => {
    const template = `
      {% ifversion ghes > 3.2 %}
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
      {% ifversion ghes < 3.2 %}
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
      {% ifversion ghes %}
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
      {% ifversion not ghes %}
      FOO
      {% else %}
      BAR
      {% endif %}
    `
    const output = await liquid.parseAndRender(template, req.context)
    expect(output.trim()).toBe('BAR')
  })
})
