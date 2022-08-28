import { jest } from '@jest/globals'
import { getDOM } from '../helpers/supertest.js'
import { allVersions } from '../../lib/all-versions.js'

describe('webhooks events and payloads', () => {
  jest.setTimeout(300 * 1000)

  describe('rendering', () => {
    test('every webhook event has at least one payload example', async () => {
      const versions = Object.values(allVersions).map((value) => value.version)

      // For all versions, check that the webhook events and payloads page
      // has at least one payload example for each event. Payload examples
      // start with the id `webhook-payload-example` and have a sibling div
      // with the class `height-constrained-code-block`. The sibling is
      // usually but not always the next sibling element, which is why
      // `nextUntil` is used.
      for (const version of versions) {
        const page = `/${version}/developers/webhooks-and-events/webhooks/webhook-events-and-payloads`
        const $ = await getDOM(page)
        const payloadExampleElem = $('[id^=webhook-payload-example]')

        payloadExampleElem.each((i, elem) => {
          const siblings = $(elem)
            .nextUntil('[id^=webhook-payload-example]')
            .filter((i, elem) => $(elem).hasClass('height-constrained-code-block'))
          expect(siblings.length).toBeGreaterThan(0)
        })
      }
    })
  })
})
