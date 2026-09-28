import { describe, expect, test, vi } from 'vitest'

import { getDOM } from '@/tests/helpers/e2etest'
import { allVersions } from '@/versions/lib/all-versions'
import { getWebhooks } from '../lib/index'

describe('webhooks events and payloads', () => {
  vi.setConfig({ testTimeout: 3 * 60 * 1000 })

  // Keeps the page component, Markdown, and generated webhook data in sync.
  test('loads webhook schema data for all versions', async () => {
    for (const version in allVersions) {
      const webhooks = await getWebhooks(version)
      const webhookNames = Object.keys(webhooks)
      const versionedWebhooksPage = `/en/${version}/webhooks-and-events/webhooks/webhook-events-and-payloads`
      const $ = await getDOM(versionedWebhooksPage)
      const domH2Ids = $('h2')
        .map((i, h2) => $(h2).attr('id'))
        .get()

      const everyWebhookEventPresent = webhookNames.every((webhookName) =>
        domH2Ids.includes(webhookName),
      )
      expect(everyWebhookEventPresent).toBe(true)
    }
  })

  test('Non-GHES versions do not load GHES only webhook', async () => {
    const ghesOnlyWebhook = 'cache_sync'

    for (const version in allVersions) {
      if (!version.includes('enterprise-server') && !version.includes('github-ae')) {
        const $ = await getDOM(
          `/en/${version}/webhooks-and-events/webhooks/webhook-events-and-payloads`,
        )
        const domH2Ids = $('h2')
          .map((i, h2) => $(h2).attr('id'))
          .get()

        expect(domH2Ids.length).toBeGreaterThan(0)
        expect(domH2Ids.includes(ghesOnlyWebhook)).toBe(false)
      }
    }
  })

  test('Webhooks events and payloads page has DOM markers needed for extracting search content', async () => {
    const $ = await getDOM('/en/webhooks-and-events/webhooks/webhook-events-and-payloads')
    const rootSelector = '[data-search=article-body]'
    const $root = $(rootSelector)
    expect($root.length).toBe(1)

    // Webhooks pages render the lead outside the article body for search extraction.
    const leadSelector = '[data-search=lead] p'
    const $lead = $(leadSelector)
    expect($lead.length).toBe(1)
  })

  // Not all webhook types have examples in the schema yet.
  describe.skip('rendering', () => {
    test('every webhook event has at least one payload example', async () => {
      const versions = Object.values(allVersions).map((value) => value.version)

      // nextUntil finds payload code blocks in later siblings, not only the next one.
      for (const version of versions) {
        const page = `/${version}/webhooks-and-events/webhooks/webhook-events-and-payloads`
        const $ = await getDOM(page)
        const payloadExampleElem = $('[id^=webhook-payload-example]')

        payloadExampleElem.each((i, elem) => {
          const siblings = $(elem)
            .nextUntil('[id^=webhook-payload-example]')
            .filter((idx, sibling) => $(sibling).hasClass('height-constrained-code-block'))
          expect(siblings.length).toBeGreaterThan(0)
        })
      }
    })
  })
})
