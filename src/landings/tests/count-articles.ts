import { describe, expect, test } from 'vitest'

import { countArticles } from '@/landings/lib/count-articles'
import type { ProductTreeNode } from '@/frame/components/context/MainContext'

// Helper to create a minimal ProductTreeNode for testing
const createNode = (childPages: ProductTreeNode[] = []): ProductTreeNode => ({
  title: 'Test',
  href: '/test',
  childPages,
})

describe('countArticles', () => {
  test('returns 1 for a leaf node (no children)', () => {
    const leaf = createNode()
    expect(countArticles(leaf)).toBe(1)
  })

  test('counts direct children when all are leaf nodes', () => {
    const node = createNode([createNode(), createNode(), createNode()])
    expect(countArticles(node)).toBe(3)
  })

  test('counts all nested leaf articles recursively', () => {
    // Structure: parent -> 2 sections -> each with 3 articles = 6 total
    const section1 = createNode([createNode(), createNode(), createNode()])
    const section2 = createNode([createNode(), createNode(), createNode()])
    const parent = createNode([section1, section2])

    expect(countArticles(parent)).toBe(6)
  })

  test('handles deeply nested structure', () => {
    // 3 levels deep: parent -> section -> subsection -> 2 articles
    const subsection = createNode([createNode(), createNode()])
    const section = createNode([subsection])
    const parent = createNode([section])

    expect(countArticles(parent)).toBe(2)
  })

  test('handles mixed depth structure', () => {
    // parent -> section with 2 articles + section with subsection with 3 articles = 5 total
    const section1 = createNode([createNode(), createNode()])
    const subsection = createNode([createNode(), createNode(), createNode()])
    const section2 = createNode([subsection])
    const parent = createNode([section1, section2])

    expect(countArticles(parent)).toBe(5)
  })
})
