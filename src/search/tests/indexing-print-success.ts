import { afterEach, describe, expect, test, vi } from 'vitest'

import { printSuccess } from '@/search/scripts/index/utils/indexing-elasticsearch-utils'

describe('printSuccess', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('prints the view and search hints in verbose mode', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {})

    expect(() => printSuccess('github-docs-fpt-en', new Date(), true)).not.toThrow()

    const output = log.mock.calls.map((args) => args.join(' ')).join('\n')
    expect(output).toContain('To view index: <elasticsearch-url>/github-docs-fpt-en')
    expect(output).toContain('To search index: <elasticsearch-url>/github-docs-fpt-en/_search')
  })
})
