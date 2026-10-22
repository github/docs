import { describe, expect, test } from 'vitest'

import { isOnActiveChain } from '@/landings/components/sidebar-active-chain'

// Sidebar categories auto-expand when they are on the current page's ancestor chain.
// A category whose href is a plain string prefix of a sibling's path must stay closed.

describe('isOnActiveChain', () => {
  test('matches the current page itself', () => {
    expect(isOnActiveChain('/en/get-started/using-github', '/en/get-started/using-github')).toBe(
      true,
    )
  })

  test('matches real ancestors', () => {
    expect(
      isOnActiveChain('/en/get-started/using-github/hello-world', '/en/get-started/using-github'),
    ).toBe(true)
    expect(isOnActiveChain('/en/get-started/using-github/hello-world', '/en/get-started')).toBe(
      true,
    )
    expect(
      isOnActiveChain(
        '/en/enterprise-cloud@latest/rest/git/blobs',
        '/en/enterprise-cloud@latest/rest/git',
      ),
    ).toBe(true)
  })

  test('does not match siblings that share a string prefix', () => {
    expect(
      isOnActiveChain('/en/get-started/using-github/hello-world', '/en/get-started/using-git'),
    ).toBe(false)
    expect(
      isOnActiveChain('/en/get-started/using-github-docs/about', '/en/get-started/using-github'),
    ).toBe(false)
    expect(isOnActiveChain('/en/rest/gitignore/gitignore', '/en/rest/git')).toBe(false)
    expect(isOnActiveChain('/en/rest/copilot-spaces/copilot-spaces', '/en/rest/copilot')).toBe(
      false,
    )
    expect(
      isOnActiveChain(
        '/en/copilot/how-tos/copilot-cli/use-copilot-cli-in-actions',
        '/en/copilot/how-tos/copilot-cli/use-copilot-cli',
      ),
    ).toBe(false)
  })

  test('does not match descendants of the current page', () => {
    expect(isOnActiveChain('/en/rest/git', '/en/rest/git/blobs')).toBe(false)
  })
})
