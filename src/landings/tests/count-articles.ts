import { describe, expect, test } from 'vitest'

import { countArticles } from '@/landings/lib/count-articles'
import type { ProductTreeNode } from '@/frame/components/context/MainContext'

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
    // Two sections with three articles each produce six leaf articles.
    const section1 = createNode([createNode(), createNode(), createNode()])
    const section2 = createNode([createNode(), createNode(), createNode()])
    const parent = createNode([section1, section2])

    expect(countArticles(parent)).toBe(6)
  })

  test('handles deeply nested structure', () => {
    // Three nested levels end in two leaf articles.
    const subsection = createNode([createNode(), createNode()])
    const section = createNode([subsection])
    const parent = createNode([section])

    expect(countArticles(parent)).toBe(2)
  })

  test('handles mixed depth structure', () => {
    // Two direct leaves plus three nested leaves produce five articles.
    const section1 = createNode([createNode(), createNode()])
    const subsection = createNode([createNode(), createNode(), createNode()])
    const section2 = createNode([subsection])
    const parent = createNode([section1, section2])

    expect(countArticles(parent)).toBe(5)
  })
})
