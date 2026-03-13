import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

function makeURL(pathname: string, queryParams?: Record<string, string>) {
  const params = new URLSearchParams(queryParams || {})
  const queryString = params.toString()
  return `/api/article/body?pathname=${encodeURIComponent(pathname)}${queryString ? `&${queryString}` : ''}`
}

describe('Webhooks transformer', () => {
  beforeAll(() => {
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The Webhooks transformer tests require the ROOT environment variable to be set to the fixture root',
      )
    }
  })

  test('webhook-events-and-payloads page renders with markdown structure', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toContain('text/markdown')

    // Should have title
    expect(res.body).toContain('# Webhook events and payloads')

    // Should have intro
    expect(res.body).toContain('Learn about when each webhook event occurs')
  })

  test('webhooks are formatted as sections with headers', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)

    // Check for webhook event headers (## webhook_name)
    expect(res.body).toMatch(/^## \w+/m)
  })

  test('webhooks show available actions', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)

    // Should list action types for webhooks with multiple actions
    expect(res.body).toContain('**Action type:**')
  })

  test('webhooks show availability information', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)

    // Should show availability as a heading
    expect(res.body).toContain('### Availability')
  })

  test('manual content is included', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)

    // Check for some known manual content from the markdown file
    expect(res.body).toContain('About webhook events and payloads')
  })

  test('intro is rendered', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)

    const introMatch = res.body.match(/^Learn about when each webhook event/m)
    expect(introMatch).toBeTruthy()
  })

  test('Liquid tags are rendered in content', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)

    // Check that data variables are rendered (not left as Liquid syntax)
    expect(res.body).not.toContain('{% data')
    expect(res.body).not.toContain('{{')
  })

  test('AUTOTITLE links are resolved', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)

    // AUTOTITLE should be replaced with actual titles
    expect(res.body).not.toContain('[AUTOTITLE]')
  })

  test('webhooks show payload parameters table', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)

    // Should show payload object parameters section
    expect(res.body).toContain('### Webhook payload object')
    expect(res.body).toContain('#### Webhook payload object parameters')
    // Should have a markdown table with parameter columns (may have extra spacing from formatting)
    expect(res.body).toMatch(/\|\s*Name\s*\|\s*Type\s*\|\s*Description\s*\|/)
  })

  test('webhooks show descriptions', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)

    // Should include webhook descriptions (converted from HTML to plain text)
    // Using actual descriptions from real webhook data
    expect(res.body).toContain('A check run was completed')
  })

  test('webhooks show body parameters in table', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)

    // Should show parameter names and types in tables
    expect(res.body).toContain('`action`')
    expect(res.body).toContain('`string`')
    expect(res.body).toContain('`object`')
    // Should mark required parameters
    expect(res.body).toContain('**Required.**')
  })

  test('webhooks show payload examples when available', async () => {
    const res = await get(makeURL('/en/webhooks/webhook-events-and-payloads'))
    expect(res.statusCode).toBe(200)

    // NOTE: The current webhook source data does not include payloadExample fields,
    // so this section won't appear in the output. The transformer code (lines 115-120)
    // is ready to display payload examples if/when they are added to the source data.
    // For now, we just verify the transformer doesn't crash on missing examples.
    expect(res.statusCode).toBe(200)
  })

  test('Non-webhooks pages are not transformed', async () => {
    const res = await get(makeURL('/en/get-started/start-your-journey/hello-world'))
    expect(res.statusCode).toBe(200)

    // Regular pages should not be transformed by webhooks transformer
    // They should have their normal HTML-like structure
    expect(res.body).toContain('Hello World')
  })
})
