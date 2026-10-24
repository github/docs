import { describe, expect, test, vi } from 'vitest'
import type { Response } from 'express'

import layoutContext from '@/frame/middleware/context/layout'
import type { ExtendedRequest } from '@/types'

function runLayoutContext(layout?: string | boolean) {
  const req = {
    context: {
      page: layout === undefined ? {} : { layout },
    },
  } as unknown as ExtendedRequest
  const next = vi.fn()

  layoutContext(req, {} as Response, next)

  return { req, next }
}

describe('layout context middleware', () => {
  test('uses the default layout when layout frontmatter is missing', () => {
    const { req, next } = runLayoutContext()

    expect(req.context?.currentLayoutName).toBe('default')
    expect(next).toHaveBeenCalledOnce()
  })

  test('uses named layouts from layout frontmatter', () => {
    const { req, next } = runLayoutContext('inline')

    expect(req.context?.currentLayoutName).toBe('inline')
    expect(next).toHaveBeenCalledOnce()
  })

  test('uses no layout when layout frontmatter is false', () => {
    const { req, next } = runLayoutContext(false)

    expect(req.context?.currentLayoutName).toBe('')
    expect(next).toHaveBeenCalledOnce()
  })
})
