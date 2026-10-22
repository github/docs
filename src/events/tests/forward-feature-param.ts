import { describe, expect, test } from 'vitest'

import { shouldForwardFeatureParam } from '@/events/components/experiments/forward-feature-param'

const origin = 'https://docs.github.com'
const plainClick = { button: 0, metaKey: false, ctrlKey: false, shiftKey: false, altKey: false }
const sameOriginLink = { target: '', hasDownload: false, href: `${origin}/en/get-started` }

describe('shouldForwardFeatureParam', () => {
  test('forwards a plain left-click on a same-origin link', () => {
    expect(shouldForwardFeatureParam(plainClick, sameOriginLink, origin)).toBe(true)
  })

  test('forwards a relative link and target=_self', () => {
    expect(
      shouldForwardFeatureParam(
        plainClick,
        { ...sameOriginLink, href: '/en/copilot', target: '_self' },
        origin,
      ),
    ).toBe(true)
  })

  test('skips links that open in a new tab', () => {
    expect(
      shouldForwardFeatureParam(plainClick, { ...sameOriginLink, target: '_blank' }, origin),
    ).toBe(false)
  })

  test('skips download links', () => {
    expect(
      shouldForwardFeatureParam(plainClick, { ...sameOriginLink, hasDownload: true }, origin),
    ).toBe(false)
  })

  test.each(['metaKey', 'ctrlKey', 'shiftKey', 'altKey'] as const)(
    'skips clicks with %s',
    (key) => {
      expect(
        shouldForwardFeatureParam({ ...plainClick, [key]: true }, sameOriginLink, origin),
      ).toBe(false)
    },
  )

  test('skips non-primary button clicks', () => {
    expect(shouldForwardFeatureParam({ ...plainClick, button: 1 }, sameOriginLink, origin)).toBe(
      false,
    )
  })

  test('skips cross-origin links', () => {
    expect(
      shouldForwardFeatureParam(
        plainClick,
        { ...sameOriginLink, href: 'https://github.com/copilot' },
        origin,
      ),
    ).toBe(false)
  })

  test('skips non-http links and anchors without href', () => {
    expect(
      shouldForwardFeatureParam(plainClick, { ...sameOriginLink, href: 'mailto:a@b.c' }, origin),
    ).toBe(false)
    expect(shouldForwardFeatureParam(plainClick, { ...sameOriginLink, href: '' }, origin)).toBe(
      false,
    )
  })
})
