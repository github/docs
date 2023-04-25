import { jest, test } from '@jest/globals'

import { getDOM } from '../../../tests/helpers/e2etest.js'

describe('automated page heading accessibility', () => {
  jest.setTimeout(3 * 60 * 1000)

  test('rest pages do not render any headings with duplicate text', async () => {
    const $ = await getDOM('/en/rest/actions/artifacts')
    const headingText = $('body')
      .find('h2, h3, h4, h5, h6')
      .map((i, el) => $(el).text())
      .get()
      .sort()

    const dupes = headingText.filter((item, index) => headingText.indexOf(item) !== index)

    const message = `The following duplicate heading texts were found: ${dupes.join(', ')}`
    expect(dupes.length, message).toBe(0)
  })

  test('rest pages do not render any headings with duplicate ids', async () => {
    const $ = await getDOM('/en/rest/actions/artifacts')
    const headingIDs = $('body')
      .find('h2, h3, h4, h5, h6')
      .map((i, el) => $(el).attr('id'))
      .get()
      .sort()

    const dupes = headingIDs.filter((item, index) => headingIDs.indexOf(item) !== index)

    const message = `The following duplicate heading IDs were found: ${dupes.join(', ')}`
    expect(dupes.length, message).toBe(0)
  })

  test('webhook pages do not render any headings with duplicate text', async () => {
    const $ = await getDOM('/en/webhooks-and-events/webhooks/webhook-events-and-payloads')
    const headingText = $('body')
      .find('h2, h3, h4, h5, h6')
      .map((i, el) => $(el).text())
      .get()
      .sort()

    const dupes = headingText.filter((item, index) => headingText.indexOf(item) !== index)

    const message = `The following duplicate heading texts were found: ${dupes.join(', ')}`
    expect(dupes.length, message).toBe(0)
  })

  test('webhook pages do not render any headings with duplicate ids', async () => {
    const $ = await getDOM('/en/webhooks-and-events/webhooks/webhook-events-and-payloads')
    const headingIDs = $('body')
      .find('h2, h3, h4, h5, h6')
      .map((i, el) => $(el).attr('id'))
      .get()
      .sort()

    const dupes = headingIDs.filter((item, index) => headingIDs.indexOf(item) !== index)

    const message = `The following duplicate heading IDs were found: ${dupes.join(', ')}`
    expect(dupes.length, message).toBe(0)
  })
})
