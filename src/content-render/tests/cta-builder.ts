import { describe, expect, test } from 'vitest'

import { convertOldCTAUrl } from '@/content-render/scripts/cta-builder'

describe('convertOldCTAUrl', () => {
  test('maps legacy Copilot Pro+ CTA to the pro-plus plan', () => {
    const { newUrl } = convertOldCTAUrl(
      'https://github.com/github-copilot/signup?ref_cta=Copilot+Pro%2B&ref_loc=subscriptions+page&ref_page=docs',
    )
    const params = new URL(newUrl).searchParams
    expect(params.get('ref_plan')).toBe('pro-plus')
    expect(params.get('ref_type')).toBe('purchase')
    expect(params.get('ref_product')).toBe('copilot')
    expect(params.has('ref_cta')).toBe(false)
  })
})
