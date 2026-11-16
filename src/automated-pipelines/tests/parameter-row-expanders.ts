import { createElement } from 'react'
import { describe, expect, test, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { load } from 'cheerio'

import { ParameterRow } from '@/automated-pipelines/components/parameter-table/ParameterRow'
import type { ChildParameter } from '@/automated-pipelines/components/parameter-table/types'

vi.mock('@/languages/components/useTranslation', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

// The real component pulls in @primer/react CSS, which Node cannot load.
vi.mock('@/frame/components/ui/RenderedHTML/RenderedHTML', () => ({
  RenderedHTML: () => null,
}))

const expandCallback = () => {}

function renderRow(rowParams: ChildParameter, withCallback = true) {
  const html = renderToStaticMarkup(
    createElement(ParameterRow, {
      rowParams,
      slug: 'x',
      bodyParamExpandCallback: withCallback ? expandCallback : undefined,
    }),
  )
  return load(html)
}

function lazyExpanders(rowParams: ChildParameter, withCallback = true) {
  return renderRow(rowParams, withCallback)('details[data-nested-param-id]')
}

describe('ParameterRow lazy expanders', () => {
  test('renders for an unloaded object when it can load children', () => {
    const row = { name: 'issue', type: 'object', description: '', childParamsGroups: [] }
    expect(lazyExpanders(row).attr('data-nested-param-id')).toBe('issue')
  })

  test('renders for an unloaded array of objects when it can load children', () => {
    const row = { name: 'labels', type: 'array of objects', description: '', childParamsGroups: [] }
    expect(lazyExpanders(row).length).toBe(1)
  })

  test('does not render without an expand callback', () => {
    const row = { name: 'issue', type: 'object', description: '', childParamsGroups: [] }
    expect(lazyExpanders(row, false).length).toBe(0)
  })

  test('does not render for an array of primitives', () => {
    const row = {
      name: 'secret_types',
      type: 'array of strings or null',
      description: '',
      childParamsGroups: [],
    }
    expect(lazyExpanders(row).length).toBe(0)
  })

  test('does not render for comment, which has no child properties', () => {
    const row = { name: 'comment', type: 'object', description: '', childParamsGroups: [] }
    expect(lazyExpanders(row).length).toBe(0)
  })

  test('does not render for nested rows, which cannot load children', () => {
    const row = {
      name: 'conditions',
      type: 'object',
      description: '',
      childParamsGroups: [{ name: '', type: 'object', description: '', childParamsGroups: [] }],
    }
    const $ = renderRow(row)
    expect($('table').length).toBe(1)
    expect($('details[data-nested-param-id]').length).toBe(0)
  })
})
