import { describe, expect, test } from 'vitest'

import { flattenDescendants, MAX_NAVLIST_LEVEL } from '../components/sidebar-navlist-depth'

// The sidebar renders on @primer/react-brand NavList, which supports at most 5
// nesting levels — a level-5 item that contains a SubNav is dropped. SidebarProduct
// guards against this: at MAX_NAVLIST_LEVEL it stops nesting and flattens the
// remaining subtree into leaf links so no page becomes unreachable. These tests
// pin that reachability guarantee.

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
    // A chain deeper than the cap: every node past the cap must still be reachable
    // as a flat leaf, i.e. flattening the capped node surfaces all of them.
    const deepLeaf = node('/1/2/3/4/5/6/7')
    const chain = node('/1', [
      node('/1/2', [
        node('/1/2/3', [
          node('/1/2/3/4', [node('/1/2/3/4/5', [node('/1/2/3/4/5/6', [deepLeaf])])]),
        ]),
      ]),
    ])

    const flattened = flattenDescendants(chain).map((n) => n.href)
    // Nothing is dropped: the deepest page is present.
    expect(flattened).toContain('/1/2/3/4/5/6/7')
    // And the count equals the total descendant node count (6 below the root).
    expect(flattened).toHaveLength(6)
  })
})
