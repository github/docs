const { liquid } = require('../../lib/render-content')
const template = `
  {% if page.version ver_gt "2.13" %}up to date{% endif %}
  {% if page.version ver_lt "2.13" %}out of date{% endif %}
`

describe('liquid template parser', () => {
  describe('custom operators', () => {
    describe('ver_gt', () => {
      test('works as expected', async () => {
        const context = {
          page: {
            version: '2.14'
          }
        }
        const output = await liquid.parseAndRender(template, context)
        expect(output.trim()).toBe('up to date')
      })

      test('returns false when given value is not numeric, like `dotcom`', async () => {
        const context = {
          page: {
            version: 'dotcom'
          }
        }
        const output = await liquid.parseAndRender(template, context)
        expect(output.trim()).toBe('')
      })

      test('returns false when given value is falsy', async () => {
        const context = {}
        const output = await liquid.parseAndRender(template, context)
        expect(output.trim()).toBe('')
      })
    })

    describe('ver_lt', () => {
      test('works as expected', async () => {
        const context = {
          page: {
            version: '2.12'
          }
        }
        const output = await liquid.parseAndRender(template, context)
        expect(output.trim()).toBe('out of date')
      })
    })
  })
})
