import fs from 'fs'

import { describe, expect, test } from 'vitest'

import { PagePathToVaFlowMapping } from '@/frame/components/context/ArticleContext'

describe('PagePathToVaFlowMapping', () => {
  // Keys are matched against page.fullPath, so a moved article silently loses its VA iframe.
  test.each(Object.keys(PagePathToVaFlowMapping))('%s exists', (pagePath) => {
    expect(fs.existsSync(pagePath)).toBe(true)
  })
})
