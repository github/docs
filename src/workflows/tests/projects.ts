import { readFileSync } from 'node:fs'

import { graphql } from '@octokit/graphql'
import { buildSchema, parse, validate } from 'graphql'
import { afterEach, expect, test, vi } from 'vitest'

import { generateUpdateProjectV2ItemFieldMutation, getFeature } from '../projects'

afterEach(() => {
  vi.unstubAllEnvs()
})

test('sends filename-derived Feature text separately from the ProjectV2 mutation', async () => {
  vi.stubEnv('REPO', 'github/docs')
  const directory = 'example "quoted" \\ directory'
  const feature = getFeature({
    item: {
      __typename: 'PullRequest',
      files: {
        nodes: [{ path: `content/${directory}/article.md`, additions: 1, deletions: 0 }],
      },
    },
  })
  const item = 'project-item'
  const author = 'Copilot + contributor'
  const { mutation, variables } = generateUpdateProjectV2ItemFieldMutation({
    item,
    author,
    feature,
  })
  const ordinary = generateUpdateProjectV2ItemFieldMutation({
    item: 'another-item',
    author: 'contributor',
  })
  expect(mutation).toBe(ordinary.mutation)
  expect(ordinary.variables.feature).toBe('')

  const schema = buildSchema(
    readFileSync(new URL('../../graphql/data/fpt/schema.docs.graphql', import.meta.url), 'utf8'),
  )
  expect(validate(schema, parse(mutation))).toEqual([])

  const projectVariables = {
    project: 'project-id',
    statusID: 'status-id',
    statusValueID: 'ready',
    datePostedID: 'date-posted-id',
    reviewDueDateID: 'review-due-date-id',
    contributorTypeID: 'contributor-type-id',
    contributorType: 'open-source',
    sizeTypeID: 'size-id',
    sizeType: 'small',
    featureID: 'feature-id',
    authorID: 'author-id',
  }
  const fetch = vi.fn<typeof globalThis.fetch>().mockResolvedValue(
    new Response(JSON.stringify({ data: {} }), {
      headers: { 'content-type': 'application/json' },
    }),
  )
  await graphql(mutation, { ...variables, ...projectVariables, request: { fetch } })

  expect(fetch).toHaveBeenCalledTimes(1)
  const requestBody = JSON.parse(fetch.mock.calls[0][1]?.body as string)
  expect(requestBody).toEqual({
    query: mutation,
    variables: {
      ...projectVariables,
      item,
      feature: directory,
      author,
      datePosted: expect.any(String),
      reviewDueDate: expect.any(String),
    },
  })
})
