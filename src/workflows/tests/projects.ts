import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

const graphql = vi.fn()
vi.mock('@octokit/graphql', () => ({
  graphql: (...args: unknown[]) => graphql(...args),
}))

const { isDocsTeamMember } = await import('@/workflows/projects')

function servesMembers(logins: string[]) {
  return { organization: { team: { members: { nodes: logins.map((login) => ({ login })) } } } }
}

beforeEach(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {})
})

afterEach(() => {
  vi.restoreAllMocks()
  graphql.mockReset()
})

describe('isDocsTeamMember', () => {
  test('looks the team up by its current slug', async () => {
    graphql.mockResolvedValue(servesMembers(['heiskr']))

    await isDocsTeamMember('heiskr')

    // GraphQL returns null for an unknown slug, so a stale value makes every author a non-member.
    const [, variables] = graphql.mock.calls[0]
    expect(variables.slug).toBe('technical-content')
  })

  test('is true for a member and false for a non-member', async () => {
    graphql.mockResolvedValue(servesMembers(['heiskr', 'octocat']))

    await expect(isDocsTeamMember('heiskr')).resolves.toBe(true)
    await expect(isDocsTeamMember('mona')).resolves.toBe(false)
  })

  test('short-circuits bot authors without asking the API', async () => {
    await expect(isDocsTeamMember('docs-bot')).resolves.toBe(true)
    await expect(isDocsTeamMember('copilot')).resolves.toBe(true)
    expect(graphql).not.toHaveBeenCalled()
  })

  test('degrades instead of throwing when the slug no longer resolves', async () => {
    graphql.mockResolvedValue({ organization: { team: null } })

    // Return false so the job keeps populating fields instead of throwing after adding the PR.
    await expect(isDocsTeamMember('heiskr')).resolves.toBe(false)
  })

  test('names the constant to fix when the slug no longer resolves', async () => {
    graphql.mockResolvedValue({ organization: { team: null } })
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    await isDocsTeamMember('heiskr')

    expect(warn).toHaveBeenCalledWith(expect.stringContaining('DOCS_TEAM_SLUG'))
  })
})
