import { describe, expect, test } from 'vitest'

import { updateApiVersionKeys } from '@/ghes-releases/lib/update-api-versions'

describe('updateApiVersionKeys', () => {
  test('keeps calendar versions the current release has that the previous release lacks', () => {
    const apiVersions = {
      fpt: ['2022-11-28', '2026-03-10'],
      'ghes-3.16': ['2022-11-28'],
      'ghes-3.20': ['2022-11-28'],
      'ghes-3.21': ['2022-11-28', '2026-03-10'],
    }

    expect(updateApiVersionKeys(apiVersions, '3.21', '3.20', ['3.16'])).toEqual({
      fpt: ['2022-11-28', '2026-03-10'],
      'ghes-3.20': ['2022-11-28'],
      'ghes-3.21': ['2022-11-28', '2026-03-10'],
    })
  })

  test('copies the previous release versions when the current release has no entry', () => {
    const apiVersions = {
      'ghes-3.16': ['2022-11-28'],
      'ghes-3.20': ['2022-11-28', '2026-03-10'],
    }

    expect(updateApiVersionKeys(apiVersions, '3.21', '3.20', ['3.16'])).toEqual({
      'ghes-3.20': ['2022-11-28', '2026-03-10'],
      'ghes-3.21': ['2022-11-28', '2026-03-10'],
    })
  })
})
