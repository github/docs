import { expect, test, describe } from 'vitest'
import { generateAISearchLinksJson } from '@/search/components/helpers/ai-search-links-json'

describe('generateAISearchLinksJson', () => {
  test('should return empty array JSON for no links', () => {
    const sources: { url: string }[] = []
    const aiResponse = 'This is a response with no links.'
    const result = generateAISearchLinksJson(sources, aiResponse)
    expect(JSON.parse(result)).toEqual([])
  })

  test('should handle only reference links', () => {
    const sources = [
      { url: 'https://docs.github.com/en/codespaces/overview' },
      { url: 'https://docs.github.com/en/actions/learn-github-actions' },
    ]
    const aiResponse = 'Response text.'
    const result = generateAISearchLinksJson(sources, aiResponse)
    expect(JSON.parse(result)).toEqual([
      {
        type: 'reference',
        url: 'https://docs.github.com/en/codespaces/overview',
        product: 'codespaces',
      },
      {
        type: 'reference',
        url: 'https://docs.github.com/en/actions/learn-github-actions',
        product: 'actions',
      },
    ])
  })

  test('should handle only inline links', () => {
    const sources: { url: string }[] = []
    const aiResponse =
      'Check out [Codespaces](https://docs.github.com/en/codespaces/overview) and [Actions](https://docs.github.com/en/actions/learn-github-actions).'
    const result = generateAISearchLinksJson(sources, aiResponse)
    expect(JSON.parse(result)).toEqual([
      {
        type: 'inline',
        url: 'https://docs.github.com/en/codespaces/overview',
        product: 'codespaces',
      },
      {
        type: 'inline',
        url: 'https://docs.github.com/en/actions/learn-github-actions',
        product: 'actions',
      },
    ])
  })

  test('should handle both reference and inline links', () => {
    const sources = [{ url: 'https://docs.github.com/en/billing/managing-billing' }]
    const aiResponse = 'Learn about [Billing](https://docs.github.com/en/billing/managing-billing).'
    const result = generateAISearchLinksJson(sources, aiResponse)
    // Note: The inline link appears first because it's processed first
    expect(JSON.parse(result)).toEqual([
      {
        type: 'inline',
        url: 'https://docs.github.com/en/billing/managing-billing',
        product: 'billing',
      },
      {
        type: 'reference',
        url: 'https://docs.github.com/en/billing/managing-billing',
        product: 'billing',
      },
    ])
  })

  test('should handle versioned URLs correctly', () => {
    const sources = [
      { url: 'https://docs.github.com/en/enterprise-cloud@latest/codespaces/overview' },
    ]
    const aiResponse =
      'See [Codespaces for Enterprise](https://docs.github.com/en/enterprise-server@3.10/codespaces/overview).'
    const result = generateAISearchLinksJson(sources, aiResponse)
    expect(JSON.parse(result)).toEqual([
      {
        type: 'inline',
        url: 'https://docs.github.com/en/enterprise-server@3.10/codespaces/overview',
        product: 'codespaces',
      },
      {
        type: 'reference',
        url: 'https://docs.github.com/en/enterprise-cloud@latest/codespaces/overview',
        product: 'codespaces',
      },
    ])
  })

  test('should handle non-docs URLs with empty product', () => {
    const sources = [{ url: 'https://github.com/features/actions' }]
    const aiResponse = 'Visit [GitHub](https://github.com/).'
    const result = generateAISearchLinksJson(sources, aiResponse)
    expect(JSON.parse(result)).toEqual([
      { type: 'inline', url: 'https://github.com/', product: '' }, // Non-docs inline link
      { type: 'reference', url: 'https://github.com/features/actions', product: '' }, // Non-docs reference link
    ])
  })

  test('should ignore invalid URLs in markdown', () => {
    const sources = [{ url: 'https://docs.github.com/en/copilot/overview' }]
    const aiResponse =
      'See [Copilot](https://docs.github.com/en/copilot/overview) and [invalid](not-a-valid-url).'
    const result = generateAISearchLinksJson(sources, aiResponse)
    expect(JSON.parse(result)).toEqual([
      { type: 'inline', url: 'https://docs.github.com/en/copilot/overview', product: 'copilot' },
      { type: 'reference', url: 'https://docs.github.com/en/copilot/overview', product: 'copilot' },
    ])
  })

  test('should handle URLs without language code', () => {
    const sources: { url: string }[] = []
    const aiResponse = 'Link: [Copilot](https://docs.github.com/copilot/overview)'
    const result = generateAISearchLinksJson(sources, aiResponse)
    expect(JSON.parse(result)).toEqual([
      { type: 'inline', url: 'https://docs.github.com/copilot/overview', product: 'copilot' },
    ])
  })

  test('should handle URLs with only language code', () => {
    const sources = [{ url: 'https://docs.github.com/en' }]
    const aiResponse = 'Visit [English Docs](https://docs.github.com/en).'
    const result = generateAISearchLinksJson(sources, aiResponse)
    expect(JSON.parse(result)).toEqual([
      { type: 'inline', url: 'https://docs.github.com/en', product: '' },
      { type: 'reference', url: 'https://docs.github.com/en', product: '' },
    ])
  })

  test('should handle URLs with language code and version but no product', () => {
    const sources = [{ url: 'https://docs.github.com/en/enterprise-server@3.10' }]
    const aiResponse =
      'Visit [Enterprise Server Docs](https://docs.github.com/en/enterprise-server@3.10).'
    const result = generateAISearchLinksJson(sources, aiResponse)
    expect(JSON.parse(result)).toEqual([
      { type: 'inline', url: 'https://docs.github.com/en/enterprise-server@3.10', product: '' },
      { type: 'reference', url: 'https://docs.github.com/en/enterprise-server@3.10', product: '' },
    ])
  })
})
