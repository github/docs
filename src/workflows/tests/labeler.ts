import { describe, expect, test, vi } from 'vitest'
import type { Octokit } from '@octokit/rest'

import main, { parseLabels } from '../../../.github/actions/labeler/labeler'

describe('parseLabels', () => {
  test('returns no labels for a missing or empty input', () => {
    expect(parseLabels(undefined)).toEqual([])
    expect(parseLabels('')).toEqual([])
  })

  test('splits, trims, and drops blank labels', () => {
    expect(parseLabels('waiting for review')).toEqual(['waiting for review'])
    expect(parseLabels(' a, b ,')).toEqual(['a', 'b'])
  })
})

describe('labeler main', () => {
  test('does not add labels when the addLabels input is empty', async () => {
    const addLabels = vi.fn()
    const removeLabel = vi.fn()
    const octokit = {
      issues: {
        get: vi.fn().mockResolvedValue({ data: { labels: [{ name: 'waiting for review' }] } }),
        addLabels,
        removeLabel,
      },
    } as unknown as Octokit
    const core = {
      info: vi.fn(),
      debug: vi.fn(),
      warning: vi.fn(),
      error: vi.fn(),
      setOutput: vi.fn(),
      setFailed: vi.fn(),
    }

    await main(core, octokit, {
      addLabels: parseLabels(''),
      removeLabels: parseLabels('waiting for review'),
      issue_number: 1,
      owner: 'github',
      repo: 'docs',
    })

    expect(removeLabel).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'waiting for review' }),
    )
    expect(addLabels).not.toHaveBeenCalled()
  })
})
