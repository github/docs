import { jest } from '@jest/globals'
import { liquid } from '../../lib/render-content/index.js'
import { loadPageMap } from '../../lib/page-data.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'

describe('liquid helper tags', () => {
  jest.setTimeout(60 * 1000)

  const context = {}
  let pageMap
  beforeAll(async () => {
    pageMap = await loadPageMap()
    context.currentLanguage = 'en'
    context.currentVersion = nonEnterpriseDefaultVersion
    context.pages = pageMap
    context.redirects = {
      '/en/desktop/contributing-and-collaborating-using-github-desktop': `/en/${nonEnterpriseDefaultVersion}/desktop/contributing-and-collaborating-using-github-desktop`,
      '/ja/desktop/contributing-and-collaborating-using-github-desktop': `/ja/${nonEnterpriseDefaultVersion}/desktop/contributing-and-collaborating-using-github-desktop`,
      '/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories': `/en/${nonEnterpriseDefaultVersion}/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories`,
      '/en/github/writing-on-github/basic-writing-and-formatting-syntax': `/en/${nonEnterpriseDefaultVersion}/github/writing-on-github/basic-writing-and-formatting-syntax`,
    }
    context.site = {
      data: {
        reusables: {
          example: 'a rose by any other name\nwould smell as sweet',
        },
      },
    }
    context.page = {
      relativePath: 'desktop/index.md',
    }
  })

  describe('indented_data_reference tag', () => {
    test('without any number of spaces specified', async () => {
      const template = '{% indented_data_reference reusables.example %}'
      const expected = `  a rose by any other name
  would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })

    test('with 0 spaces specified', async () => {
      const template = '{% indented_data_reference reusables.example spaces=0 %}'
      const expected = `a rose by any other name
would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })

    test('with 0 spaces specified and whitespace around equals sign', async () => {
      const template = '{% indented_data_reference reusables.example spaces = 0 %}'
      const expected = `a rose by any other name
would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })

    test('with 5 spaces specified', async () => {
      const template = '{% indented_data_reference reusables.example spaces=5 %}'
      const expected = `     a rose by any other name
     would smell as sweet`
      const output = await liquid.parseAndRender(template, context)
      expect(output).toBe(expected)
    })
  })

  describe('data tag', () => {
    test('handles bracketed array access within for-in loop', async () => {
      const template = `
{% for term in site.data.glossaries.external %}
### {% data glossaries.external[forloop.index0].term %}
{% data glossaries.external[forloop.index0].description %}
---
{% endfor %}`

      const localContext = { ...context }
      localContext.site = {
        data: {
          variables: {
            fire_emoji: ':fire:',
          },
          glossaries: {
            external: [
              { term: 'lit', description: 'Awesome things. {% data variables.fire_emoji %}' },
              { term: 'Zhu Li', description: '_"Zhu Li, do the thing!"_ :point_up:' },
            ],
          },
        },
      }

      const expected = `

### lit
Awesome things. :fire:
---

### Zhu Li
_"Zhu Li, do the thing!"_ :point_up:
---
`

      const output = await liquid.parseAndRender(template, localContext)
      expect(output).toBe(expected)
    })
  })
})
