import { createElement } from 'react'
import { describe, expect, test } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { load } from 'cheerio'

import { PatternsTable } from '@/secret-scanning/components/PatternsTable'
import type { PatternsTableColumn, SortDirection } from '@/secret-scanning/components/PatternsTable'

type Row = { id: string; provider: string; secret: string }

const ROWS: Row[] = [
  { id: 'a', provider: 'Adafruit', secret: 'adafruit_io_key' },
  { id: 'b', provider: 'Adobe', secret: 'adobe_client_secret' },
]

const COLUMNS: PatternsTableColumn<Row>[] = [
  {
    field: 'provider',
    header: 'Provider',
    width: '140px',
    rowHeader: true,
    sortable: true,
    renderCell: (row) => row.provider,
  },
  { field: 'secret', header: 'Secret', renderCell: (row) => row.secret },
]

function render(sortColumn?: string, sortDirection: SortDirection = 'ASC') {
  const html = renderToStaticMarkup(
    createElement(PatternsTable<Row>, {
      titleId: 'title',
      rows: ROWS,
      columns: COLUMNS,
      sortColumn,
      sortDirection,
      onSort: () => {},
    }),
  )
  return { $: load(html), html }
}

describe('PatternsTable', () => {
  test('renders native table semantics without explicit roles', () => {
    const { $, html } = render()
    expect($('table').attr('aria-labelledby')).toBe('title')
    expect($('thead th[scope="col"]').length).toBe(COLUMNS.length)
    expect($('tbody th[scope="row"]').length).toBe(ROWS.length)
    expect($('tbody td').length).toBe(ROWS.length)
    expect(html).not.toContain('role=')
  })

  test('marks an unsorted sortable column without aria-sort', () => {
    const { $ } = render()
    const provider = $('thead th').first()
    expect(provider.attr('aria-sort')).toBeUndefined()
    expect(provider.find('button .visually-hidden').text()).toBe('sort ascending')
    expect($('thead th').last().find('button').length).toBe(0)
  })

  test.each([
    ['ASC', 'ascending'],
    ['DESC', 'descending'],
  ] as const)('sets aria-sort for %s on the sorted column only', (direction, ariaSort) => {
    const { $ } = render('provider', direction)
    expect($('thead th').first().attr('aria-sort')).toBe(ariaSort)
    expect($('thead th[aria-sort]').length).toBe(1)
    expect($('thead .visually-hidden').length).toBe(0)
  })

  test('applies column widths to the header cells', () => {
    const { $ } = render()
    expect($('thead th').first().attr('style')).toContain('width:140px')
    expect($('thead th').last().attr('style')).toBeUndefined()
  })
})
