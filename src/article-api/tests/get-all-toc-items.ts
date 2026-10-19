import { describe, expect, test, vi } from 'vitest'
import { getAllTocItems } from '@/article-api/lib/get-all-toc-items'
import type { Context, Page, Permalink } from '@/types'

function createMockPage(options: {
  rawTitle: string
  applicableVersions: string[]
  permalinks: Partial<Permalink>[]
  children?: string[]
}): Page {
  return {
    languageCode: 'en',
    rawTitle: options.rawTitle,
    applicableVersions: options.applicableVersions,
    permalinks: options.permalinks as Permalink[],
    children: options.children,
    renderProp: vi.fn().mockResolvedValue(''),
  } as unknown as Page
}

describe('getAllTocItems', () => {
  test('omits children that are not available in the current version', async () => {
    const parent = createMockPage({
      rawTitle: 'REST API',
      applicableVersions: ['free-pro-team@latest', 'enterprise-cloud@latest'],
      permalinks: [{ languageCode: 'en', pageVersion: 'free-pro-team@latest', href: '/en/rest' }],
      children: ['/quickstart', '/enterprise-admin'],
    })
    const quickstart = createMockPage({
      rawTitle: 'Quickstart',
      applicableVersions: ['free-pro-team@latest', 'enterprise-cloud@latest'],
      permalinks: [
        { languageCode: 'en', pageVersion: 'free-pro-team@latest', href: '/en/rest/quickstart' },
      ],
    })
    const enterpriseAdmin = createMockPage({
      rawTitle: 'Enterprise administration',
      applicableVersions: ['enterprise-cloud@latest'],
      permalinks: [
        {
          languageCode: 'en',
          pageVersion: 'enterprise-cloud@latest',
          href: '/en/enterprise-cloud@latest/rest/enterprise-admin',
        },
      ],
    })
    const context = {
      currentVersion: 'free-pro-team@latest',
      pages: {
        '/en/rest': parent,
        '/en/rest/quickstart': quickstart,
        '/en/enterprise-cloud@latest/rest/enterprise-admin': enterpriseAdmin,
      },
      redirects: {
        '/rest/enterprise-admin': '/enterprise-cloud@latest/rest/enterprise-admin',
      },
    } as unknown as Context

    const items = await getAllTocItems(parent, context)

    expect(items.map((item) => item.href)).toEqual(['/en/rest/quickstart'])
    expect(items[0].title).toBe('Quickstart')
  })
})
