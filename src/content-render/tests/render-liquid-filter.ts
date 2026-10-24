import { describe, expect, test } from 'vitest'

import { liquid } from '@/content-render/index'
import shortVersionsMiddleware from '@/versions/middleware/short-versions'
import { allVersions } from '@/versions/lib/all-versions'
import enterpriseServerReleases from '@/versions/lib/enterprise-server-releases'
import type { Context, ExtendedRequest } from '@/types'

function contextFor(currentVersion: string) {
  const req = { language: 'en', query: {} } as ExtendedRequest
  req.context = {
    currentVersion,
    currentLanguage: 'en',
    allVersions,
    enterpriseServerReleases,
  } as Context
  req.context!.currentVersionObj = allVersions[currentVersion]
  shortVersionsMiddleware(req, null, () => {})
  return req.context!
}

describe('render_liquid filter', () => {
  test('leaves strings without Liquid untouched', async () => {
    const context = contextFor('free-pro-team@latest')
    const output = await liquid.parseAndRender('{{ value | render_liquid }}', {
      ...context,
      value: 'read, triage, write',
    })
    expect(output).toBe('read, triage, write')
  })

  test('renders a data reference held in a variable', async () => {
    const context = contextFor('free-pro-team@latest')
    const output = await liquid.parseAndRender('{{ value | render_liquid }}', {
      ...context,
      value: '{% data variables.product.prodname_discussions %}',
    })
    expect(output).toBe('GitHub Discussions')
  })

  test('renders ifversion held in a variable, matching an inline conditional', async () => {
    const template = '{% ifversion ghes %}server{% else %}not server{% endif %}'
    for (const version of [
      'free-pro-team@latest',
      `enterprise-server@${enterpriseServerReleases.latest}`,
    ]) {
      const context = contextFor(version)
      const inline = await liquid.parseAndRender(template, context)
      const viaFilter = await liquid.parseAndRender('{{ value | render_liquid }}', {
        ...context,
        value: template,
      })
      expect(viaFilter).toBe(inline)
    }
  })

  test('survives chaining into other filters', async () => {
    const context = contextFor('free-pro-team@latest')
    const output = await liquid.parseAndRender(
      '{% assign roles = value | render_liquid | split: ", " %}{% if roles contains "write" %}yes{% else %}no{% endif %}',
      { ...context, value: '{% ifversion fpt %}write, admin{% else %}admin{% endif %}' },
    )
    expect(output).toBe('yes')
  })

  test('passes through values that are not strings', async () => {
    const context = contextFor('free-pro-team@latest')
    const output = await liquid.parseAndRender('{{ value | render_liquid }}', {
      ...context,
      value: 42,
    })
    expect(output).toBe('42')
  })
})
