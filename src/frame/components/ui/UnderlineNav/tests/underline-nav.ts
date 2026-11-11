import { createElement } from 'react'
import { describe, expect, test } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { load } from 'cheerio'

import { UnderlineNav } from '@/frame/components/ui/UnderlineNav'
import type { UnderlineNavItemProps } from '@/frame/components/ui/UnderlineNav'
import { splitOverflow } from '@/frame/components/ui/UnderlineNav/overflow'

function render(variant?: 'default' | 'flush') {
  const cli = {
    href: '?tool=cli',
    'aria-current': 'page',
    'data-tool': 'cli',
    children: 'GitHub CLI',
  } as UnderlineNavItemProps
  const html = renderToStaticMarkup(
    createElement(UnderlineNav, {
      'aria-label': 'Tool',
      variant,
      children: [
        createElement(UnderlineNav.Item, {
          key: 'webui',
          href: '?tool=webui',
          children: 'Web browser',
        }),
        createElement(UnderlineNav.Item, { key: 'cli', ...cli }),
      ],
    }),
  )
  return load(html)
}

describe('UnderlineNav', () => {
  test('renders a labelled nav with a list of links and no heading', () => {
    const $ = render()
    expect($('nav').attr('aria-label')).toBe('Tool')
    expect($('nav').attr('data-variant')).toBe('default')
    expect($('h2').length).toBe(0)
    const links = $('nav > ul[role="list"] > li > a')
    expect(links.length).toBe(2)
    expect(links.first().attr('href')).toBe('?tool=webui')
  })

  test('server render shows every item and no More button', () => {
    const $ = render()
    expect($('nav').attr('data-overflow-measured')).toBe('false')
    expect($('button').length).toBe(0)
    expect($('a').length).toBe(2)
  })

  test('marks only the selected item and passes data attributes through', () => {
    const $ = render('flush')
    expect($('nav').attr('data-variant')).toBe('flush')
    expect($('a[aria-current="page"]').length).toBe(1)
    expect($('a[aria-current="page"]').attr('data-tool')).toBe('cli')
  })
})

describe('splitOverflow', () => {
  const widths = [100, 100, 100, 100]

  test('keeps every item visible when they fit', () => {
    expect(splitOverflow(widths, 500, 86, 0)).toEqual({ visible: [0, 1, 2, 3], overflow: [] })
  })

  test('moves items that do not fit into the menu', () => {
    // 320px minus the More button leaves room for two items.
    expect(splitOverflow(widths, 320, 86, 0)).toEqual({ visible: [0, 1], overflow: [2, 3] })
  })

  test('never leaves a single item in the menu', () => {
    // Three items fit beside the More button, which would leave one in the menu.
    expect(splitOverflow(widths, 420, 86, 0)).toEqual({ visible: [0, 1], overflow: [2, 3] })
  })

  test('keeps the selected item visible in the last slot', () => {
    expect(splitOverflow(widths, 320, 86, 3)).toEqual({ visible: [0, 3], overflow: [1, 2] })
  })

  test('does not count a gap after the last item', () => {
    // Two 100px items and one 8px gap fit exactly in 208px.
    expect(splitOverflow([100, 100], 208, 86, 0)).toEqual({ visible: [0, 1], overflow: [] })
  })

  test('drops leading items when a wider selected item would not fit', () => {
    // Swapping 130px item 3 in for item 1 needs 312px, so item 0 moves to the menu.
    expect(splitOverflow([80, 80, 80, 130], 300, 86, 3)).toEqual({
      visible: [3],
      overflow: [0, 1, 2],
    })
  })

  test('falls back to the menu when the selected item alone does not fit', () => {
    expect(splitOverflow([60, 60, 60, 200], 220, 86, 3)).toEqual({
      visible: [],
      overflow: [0, 1, 2, 3],
    })
  })

  test('shows only the menu when nothing fits', () => {
    expect(splitOverflow(widths, 120, 86, 2)).toEqual({ visible: [], overflow: [0, 1, 2, 3] })
  })
})
