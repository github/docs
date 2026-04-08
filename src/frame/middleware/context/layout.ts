import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'

export default function layoutContext(req: ExtendedRequest, res: Response, next: NextFunction) {
  if (!req.context) throw new Error('request is not contextualized')
  if (!req.context.page) return next()

  let layoutName = 'default'
  if (req.context.page.layout) {
    if (typeof req.context.page.layout === 'boolean') {
      // A `layout: false` value means use no layout.
      layoutName = ''
    } else if (typeof req.context.page.layout === 'string') {
      layoutName = req.context.page.layout
    } else {
      throw new Error(`Invalid layout value type: ${req.context.page.layout}`)
    }
  }

  req.context.currentLayoutName = layoutName

  return next()
}
