import { createElement } from 'react'
import { describe, expect, test, vi } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'

import { ParameterRow } from '@/automated-pipelines/components/parameter-table/ParameterRow'
import type { ChildParameter } from '@/automated-pipelines/components/parameter-table/types'

vi.mock('@/languages/components/useTranslation', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

// The real component pulls in @primer/react CSS, which Node cannot load.
vi.mock('@/frame/components/ui/RenderedHTML/RenderedHTML', () => ({
  RenderedHTML: () => null,
}))

function renderEnum(values: ChildParameter['enum']) {
  return renderToStaticMarkup(
    createElement(ParameterRow, {
      rowParams: { name: 'locked', type: 'boolean', description: '', enum: values },
      slug: 'x',
    }),
  )
}

describe('ParameterRow enum values', () => {
  test('renders true', () => {
    expect(renderEnum([true])).toContain('<code>true</code>')
  })

  test('renders false', () => {
    expect(renderEnum([false])).toContain('<code>false</code>')
  })

  test('renders strings without quotes', () => {
    const html = renderEnum(['open', 'closed'])
    expect(html).toContain('<code>open</code>')
    expect(html).toContain('<code>closed</code>')
  })

  test('renders null in italics', () => {
    expect(renderEnum([null])).toContain('<code><i>null</i></code>')
  })
})
