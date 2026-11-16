import { afterEach, describe, expect, test, vi } from 'vitest'

import { compareByName } from '@/graphql/lib/categories'

describe('compareByName', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  // Czech collation sorts "ch" after "h", so an unpinned locale reorders names in a Czech browser.
  test('sorts the same way when the default locale is Czech', () => {
    const original = String.prototype.localeCompare
    vi.spyOn(String.prototype, 'localeCompare').mockImplementation(function (
      this: string,
      that: string,
      locales?: Intl.LocalesArgument,
      options?: Intl.CollatorOptions,
    ) {
      return original.call(this, that, locales ?? 'cs', options)
    })

    const inputs = [{ name: 'CreateCheckRunInput' }, { name: 'CheckAnnotationData' }]
    expect(inputs.sort(compareByName).map((item) => item.name)).toEqual([
      'CheckAnnotationData',
      'CreateCheckRunInput',
    ])

    const mutations = [{ name: 'followUser' }, { name: 'changeUserStatus' }]
    expect(mutations.sort(compareByName).map((item) => item.name)).toEqual([
      'changeUserStatus',
      'followUser',
    ])
  })
})
