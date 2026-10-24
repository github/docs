import { describe, expect, test } from 'vitest'

import { flattenDescendants, MAX_NAVLIST_LEVEL } from '../components/sidebar-navlist-depth'

// @primer/react-brand NavList supports at most 5 nesting levels; a level-5 item
// that contains a SubNav drops its children. SidebarProduct stops nesting at
// MAX_NAVLIST_LEVEL and flattens the remaining subtree into leaf links so every
// page stays reachable. These tests protect that guarantee.

type TestNode = { title: string; href: string; childPages: TestNode[] }

function node(href: string, childPages: TestNode[] = []): TestNode {
  return { title: href, href, childPages }
}

describe('sidebar NavList depth guard', () => {
  test('MAX_NAVLIST_LEVEL matches the brand NavList 5-level cap', () => {
    expect(MAX_NAVLIST_LEVEL).toBe(5)
  })

  test('flattenDescendants collects every descendant depth-first', () => {
    const tree = node('/a', [node('/a/1', [node('/a/1/x'), node('/a/1/y')]), node('/a/2')])

    expect(flattenDescendants(tree).map((n) => n.href)).toEqual([
      '/a/1',
      '/a/1/x',
      '/a/1/y',
      '/a/2',
    ])
  })

  test('flattenDescendants returns [] for a leaf', () => {
    expect(flattenDescendants(node('/leaf'))).toEqual([])
  })

  test('an over-deep subtree loses no pages when flattened', () => {
    // Nodes deeper than the cap must surface as flat leaves instead of disappearing.
    const deepLeaf = node('/1/2/3/4/5/6/7')
    const chain = node('/1', [
      node('/1/2', [
        node('/1/2/3', [
          node('/1/2/3/4', [node('/1/2/3/4/5', [node('/1/2/3/4/5/6', [deepLeaf])])]),
        ]),
      ]),
    ])

    const flattened = flattenDescendants(chain).map((n) => n.href)
    expect(flattened).toContain('/1/2/3/4/5/6/7')
    // Six descendants below the root must remain reachable.
    expect(flattened).toHaveLength(6)
  })
})
