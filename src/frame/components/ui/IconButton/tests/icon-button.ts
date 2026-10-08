import { createElement } from 'react'
import { describe, expect, test } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { load } from 'cheerio'
import { SidebarExpandIcon } from '@primer/octicons-react'

import { IconButton } from '@/frame/components/ui/IconButton'
import type { IconButtonProps } from '@/frame/components/ui/IconButton'

const LABEL = 'Collapse sidebar'

function render(props: Partial<IconButtonProps> = {}) {
  const html = renderToStaticMarkup(
    createElement(IconButton, { icon: SidebarExpandIcon, 'aria-label': LABEL, ...props }),
  )
  return load(html)
}

describe('IconButton', () => {
  test('labels the button through its tooltip, without a second aria-label', () => {
    const $ = render()
    const button = $('button')
    expect(button.attr('aria-label')).toBeUndefined()
    const labelId = button.attr('aria-labelledby')
    expect(labelId).toBeTruthy()
    const tooltip = $(`[id="${labelId}"]`)
    expect(tooltip.text()).toBe(LABEL)
    expect(tooltip.attr('aria-hidden')).toBe('true')
  })

  test('uses aria-label and renders no tooltip when the tooltip is off', () => {
    const $ = render({ tooltip: false })
    expect($('button').attr('aria-label')).toBe(LABEL)
    expect($('button').attr('aria-labelledby')).toBeUndefined()
    expect($('div').length).toBe(0)
  })

  test('renders no tooltip for an aria-hidden button', () => {
    const $ = render({ 'aria-hidden': true, tabIndex: -1 })
    expect($('button').attr('aria-label')).toBe(LABEL)
    expect($('button').attr('aria-hidden')).toBe('true')
    expect($('div').length).toBe(0)
  })

  test('is a type=button and passes through button attributes', () => {
    const $ = render({
      'data-testid': 'sidebar-collapse-toggle',
      'aria-expanded': true,
      tabIndex: 0,
      className: 'consumer',
    } as Partial<IconButtonProps>)
    const button = $('button')
    expect(button.attr('type')).toBe('button')
    expect(button.attr('data-testid')).toBe('sidebar-collapse-toggle')
    expect(button.attr('aria-expanded')).toBe('true')
    expect(button.attr('tabindex')).toBe('0')
    expect(button.hasClass('consumer')).toBe(true)
  })

  test('defaults to the default variant at medium size', () => {
    const $ = render()
    expect($('button').attr('data-variant')).toBe('default')
    expect($('button').attr('data-size')).toBe('medium')
    expect(render({ variant: 'invisible', size: 'small' })('button').attr('data-size')).toBe(
      'small',
    )
  })
})
