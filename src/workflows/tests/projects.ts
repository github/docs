import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { Kind, parse } from 'graphql'
import type { FieldNode, ObjectValueNode, OperationDefinitionNode } from 'graphql'

const graphql = vi.fn()
vi.mock('@octokit/graphql', () => ({
  graphql: (...args: unknown[]) => graphql(...args),
}))

const { isDocsTeamMember, generateUpdateProjectV2ItemFieldMutation } =
  await import('@/workflows/projects')

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

describe('generateUpdateProjectV2ItemFieldMutation', () => {
  function topLevelFields(mutation: string) {
    const operation = parse(mutation).definitions[0] as OperationDefinitionNode
    return operation.selectionSet.selections as FieldNode[]
  }

  function textValues(fields: FieldNode[]) {
    return fields.flatMap((field) => {
      const input = field.arguments?.find((arg) => arg.name.value === 'input')
      const value = (input?.value as ObjectValueNode).fields.find((f) => f.name.value === 'value')
      const text = (value?.value as ObjectValueNode).fields.find((f) => f.name.value === 'text')
      return text?.value.kind === Kind.STRING ? [text.value.value] : []
    })
  }

  test('cannot add fields to the mutation through the feature value', () => {
    // Feature comes from changed content paths, which fork PRs control.
    const feature =
      'actions,a" } }) { projectV2Item { id } } injected: __typename b: updateProjectV2ItemFieldValue(input: { value: { text: "z'

    const fields = topLevelFields(
      generateUpdateProjectV2ItemFieldMutation({ item: 'PVTI_abc123', author: 'octocat', feature }),
    )

    expect(fields.map((field) => field.name.value)).toEqual(
      Array(7).fill('updateProjectV2ItemFieldValue'),
    )
    expect(textValues(fields)).toEqual([feature, 'octocat'])
  })

  test('keeps quotes and backslashes in text values', () => {
    const feature = 'say "hi"'
    const author = 'back\\slash\\'

    const fields = topLevelFields(
      generateUpdateProjectV2ItemFieldMutation({ item: 'PVTI_abc123', author, feature }),
    )

    expect(textValues(fields)).toEqual([feature, author])
  })
})
