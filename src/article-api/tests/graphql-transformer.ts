import { beforeAll, describe, expect, test } from 'vitest'

import { get } from '@/tests/helpers/e2etest'

const makeURL = (pathname: string): string => {
  const params = new URLSearchParams({ pathname })
  return `/api/article/body?${params}`
}

describe('GraphQL transformer', { timeout: 10000 }, () => {
  // Cache expensive responses to avoid duplicate requests
  const responseCache = new Map<string, Awaited<ReturnType<typeof get>>>()

  const getCached = async (url: string) => {
    if (!responseCache.has(url)) {
      responseCache.set(url, await get(makeURL(url)))
    }
    return responseCache.get(url)!
  }

  beforeAll(() => {
    if (!process.env.ROOT) {
      console.warn(
        'WARNING: The GraphQL transformer tests require the ROOT environment variable to be set to the fixture root',
      )
    }
  })

  describe('Reference pages', () => {
    test('queries page renders with markdown structure', async () => {
      const res = await getCached('/en/graphql/reference/queries')
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')

      // Check for the main heading
      expect(res.body).toContain('# Queries')

      // Check for intro
      expect(res.body).toContain(
        'The query type defines GraphQL operations that retrieve data from the server.',
      )

      // Check for manual content section
      expect(res.body).toContain('## About queries')
      expect(res.body).toContain('Every GraphQL schema has a root type')
    })

    test('queries are formatted correctly', async () => {
      const res = await getCached('/en/graphql/reference/queries')
      expect(res.statusCode).toBe(200)

      // Check for query heading
      expect(res.body).toContain('## repository')

      // Check for query description
      expect(res.body).toContain('Lookup a given repository by the owner and repository name.')

      // Check for type link
      expect(res.body).toContain('**Type:** [Repository](/en/graphql/reference/objects#repository)')
    })

    test('query arguments are listed in table format', async () => {
      const res = await getCached('/en/graphql/reference/queries')
      expect(res.statusCode).toBe(200)

      // Check for arguments table for codeOfConduct query
      expect(res.body).toContain('### Arguments for `codeOfConduct`')
      expect(res.body).toMatch(/\|\s*Name\s*\|\s*Type\s*\|\s*Description\s*\|/)
      expect(res.body).toMatch(/\|\s*-+\s*\|\s*-+\s*\|\s*-+\s*\|/)

      // Check for specific arguments
      expect(res.body).toMatch(/\|\s*`key`\s*\|/)
      expect(res.body).toContain('[`String!`](/en/graphql/reference/scalars#string)')
      expect(res.body).toContain("The code of conduct's key.")
    })

    test('mutations page renders correctly', async () => {
      const res = await getCached('/en/graphql/reference/mutations')
      expect(res.statusCode).toBe(200)

      // Check for mutation heading
      expect(res.body).toContain('## createRepository')

      // Check for mutation description
      expect(res.body).toContain('Create a new repository.')

      // Check for input fields table
      expect(res.body).toContain('### Input fields for `createRepository`')
      expect(res.body).toContain('| `input` |')

      // Check for return fields table
      expect(res.body).toContain('### Return fields for `createRepository`')
      expect(res.body).toMatch(/\|\s*`repository`\s*\|/)
      expect(res.body).toContain('The new repository.')
    })

    test('objects page renders with implements and fields', async () => {
      const res = await getCached('/en/graphql/reference/objects')
      expect(res.statusCode).toBe(200)

      // Check for object heading - AddedToMergeQueueEvent has implements
      expect(res.body).toContain('## AddedToMergeQueueEvent')

      // Check for implements section
      expect(res.body).toContain('### Implements')
      expect(res.body).toMatch(/[*-]\s*\[`Node`\]\(\/.*graphql\/reference\/interfaces#node\)/)

      // Check for fields table
      expect(res.body).toContain('### Fields for `AddedToMergeQueueEvent`')
      expect(res.body).toMatch(/\|\s*`id`\s*\|/)
      expect(res.body).toMatch(/\|\s*`actor`\s*\|/)
      expect(res.body).toMatch(/\|\s*`createdAt`\s*\|/)
    })

    test('objects page shows field arguments inline', async () => {
      const res = await getCached('/en/graphql/reference/objects')
      expect(res.statusCode).toBe(200)

      // Check for User object with repositories field that has arguments
      expect(res.body).toContain('## User')
      expect(res.body).toContain('| `repositories` |')

      // Check for inline arguments formatting
      expect(res.body).toContain('**Arguments:**')
      expect(res.body).toContain('- `first`')
      expect(res.body).toContain('Returns the first n elements from the list.')
      expect(res.body).toContain('- `orderBy`')
    })

    test('interfaces page renders correctly', async () => {
      const res = await getCached('/en/graphql/reference/interfaces')
      expect(res.statusCode).toBe(200)

      // Check for interface heading
      expect(res.body).toContain('## Node')

      // Check for interface description
      expect(res.body).toContain('An object with an ID.')

      // Check for fields table
      expect(res.body).toContain('### Fields for `Node`')
      expect(res.body).toContain('| `id` |')
      expect(res.body).toContain('ID of the object.')
    })

    test('enums page renders with values', async () => {
      const res = await getCached('/en/graphql/reference/enums')
      expect(res.statusCode).toBe(200)

      // Check for enum heading
      expect(res.body).toContain('## RepositoryVisibility')

      // Check for enum description
      expect(res.body).toContain("The repository's visibility level.")

      // Check for values section
      expect(res.body).toContain('### Values for `RepositoryVisibility`')
      expect(res.body).toContain('**`PUBLIC`**')
      expect(res.body).toContain('The repository is visible to everyone.')
      expect(res.body).toContain('**`PRIVATE`**')
      expect(res.body).toContain('The repository is visible only to those with explicit access.')
      expect(res.body).toContain('**`INTERNAL`**')
    })

    test('unions page renders with possible types', async () => {
      const res = await getCached('/en/graphql/reference/unions')
      expect(res.statusCode).toBe(200)

      // Check for union heading
      expect(res.body).toContain('## SearchResultItem')

      // Check for union description
      expect(res.body).toContain('The results of a search.')

      // Check for possible types
      expect(res.body).toContain('### Possible types for `SearchResultItem`')
      expect(res.body).toMatch(/[*-]\s*\[`Bot`\]\(\/.*graphql\/reference\/objects#bot\)/)
      expect(res.body).toMatch(
        /[*-]\s*\[`PullRequest`\]\(\/.*graphql\/reference\/objects#pullrequest\)/,
      )
      expect(res.body).toMatch(/[*-]\s*\[`User`\]\(\/.*graphql\/reference\/objects#user\)/)
    })

    test('input-objects page renders correctly', async () => {
      const res = await getCached('/en/graphql/reference/input-objects')
      expect(res.statusCode).toBe(200)

      // Check for input object heading
      expect(res.body).toContain('## AbortQueuedMigrationsInput')

      // Check for input object description
      expect(res.body).toContain('Autogenerated input type of CreateRepository.')

      // Check for input fields table
      expect(res.body).toContain('### Input fields for `AbortQueuedMigrationsInput`')
      expect(res.body).toMatch(/\|\s*`ownerId`\s*\|/)
      expect(res.body).toContain('The ID of the organization that is running the migrations.')
    })

    test('scalars page renders correctly', async () => {
      const res = await getCached('/en/graphql/reference/scalars')
      expect(res.statusCode).toBe(200)

      // Check for scalar heading
      expect(res.body).toContain('## Boolean')

      // Check for scalar description
      expect(res.body).toContain('Represents true or false values.')

      // Check for other scalars
      expect(res.body).toContain('## String')
      expect(res.body).toContain('## ID')
      expect(res.body).toContain('## Int')
    })

    test('reference index page renders', async () => {
      const res = await getCached('/en/graphql/reference')
      expect(res.statusCode).toBe(200)

      // Check for main heading
      expect(res.body).toContain('# Reference')

      // Check for intro with liquid variable rendered
      expect(res.body).toMatch(/(GitHub|HubGit) GraphQL API schema/)
    })
  })

  describe('Overview pages', () => {
    test('changelog page renders with changes', async () => {
      const res = await getCached('/en/graphql/overview/changelog')
      expect(res.statusCode).toBe(200)

      // Check for main heading
      expect(res.body).toContain('# Changelog')

      // Check for intro
      expect(res.body).toContain(
        'The GraphQL schema changelog is a list of recent and upcoming changes',
      )

      // Check for manual content
      expect(res.body).toContain(
        'Breaking changes include changes that will break existing queries',
      )

      // Check for date-based changelog sections
      expect(res.body).toContain('## Schema changes for 2025-11-30')

      // Check for change items
      expect(res.body).toContain('### The GraphQL schema includes these changes:')
      expect(res.body).toContain('Type SuggestedReviewerActor was added')
    })

    test('changelog removes HTML tags from changes', async () => {
      const res = await getCached('/en/graphql/overview/changelog')
      expect(res.statusCode).toBe(200)

      // Check that HTML tags are removed
      expect(res.body).toContain('Field suggestedReviewerActors was added')
      expect(res.body).not.toContain('<code>')
      expect(res.body).not.toContain('</code>')
      expect(res.body).not.toContain('<p>')
      expect(res.body).not.toContain('</p>')
    })

    test('breaking changes page renders with scheduled changes', async () => {
      const res = await getCached('/en/graphql/overview/breaking-changes')
      expect(res.statusCode).toBe(200)

      // Check for main heading
      expect(res.body).toContain('# Breaking changes')

      // Check for intro
      expect(res.body).toContain('Learn about recent and upcoming breaking changes')

      // Check for manual content
      expect(res.body).toContain('## About breaking changes')
      expect(res.body).toContain('Breaking:** Changes that will break existing queries')

      // Check for date-based sections
      expect(res.body).toContain('## Changes scheduled for 2025-04-01')
      expect(res.body).toContain('## Changes scheduled for 2026-04-01')
    })

    test('breaking changes shows criticality levels', async () => {
      const res = await getCached('/en/graphql/overview/breaking-changes')
      expect(res.statusCode).toBe(200)

      // Check for breaking criticality
      expect(res.body).toMatch(/\*\*Breaking\*\*\s+A change will be made to `\w+\.\w+`\./)
      expect(res.body).toMatch(/\*\*Description:\*\*.*will be removed/)
      expect(res.body).toMatch(/\*\*Reason:\*\*/)
    })

    test('breaking changes removes HTML tags', async () => {
      const res = await getCached('/en/graphql/overview/breaking-changes')
      expect(res.statusCode).toBe(200)
      expect(res.body).toContain('scheduled for')

      // Check that HTML tags are removed from descriptions
      expect(res.body).not.toContain('<p>')
      expect(res.body).not.toContain('</p>')
      expect(res.body).not.toContain('<code>')
      expect(res.body).not.toContain('</code>')
      expect(res.body).not.toContain('<p>')
      expect(res.body).not.toContain('</p>')
    })
  })

  describe('Liquid tags', () => {
    test('AUTOTITLE links are resolved in manual content', async () => {
      const res = await getCached('/en/graphql/reference/queries')
      expect(res.statusCode).toBe(200)

      // Check that AUTOTITLE has been resolved
      expect(res.body).toMatch(/(Forming calls with GraphQL|Hello World)/)
      expect(res.body).toContain('(/en/get-started/start-your-journey/hello-world)')

      // Make sure the raw AUTOTITLE tag is not present
      expect(res.body).not.toContain('[AUTOTITLE]')
    })

    test('Liquid variables are rendered in intro', async () => {
      const res = await getCached('/en/graphql/reference')
      expect(res.statusCode).toBe(200)

      // Liquid variables should be rendered
      expect(res.body).toMatch(/(GitHub|HubGit) GraphQL API schema/)
      expect(res.body).not.toContain('{% data variables.product.prodname_dotcom %}')
    })

    test('Liquid variables are rendered in breaking changes', async () => {
      const res = await getCached('/en/graphql/overview/breaking-changes')
      expect(res.statusCode).toBe(200)

      // Check that liquid variables in intro are rendered
      expect(res.body).toMatch(/(GitHub|HubGit) GraphQL API/)
      expect(res.body).not.toContain('{% data variables.product.prodname_dotcom %}')
    })
  })

  describe('Multiple items', () => {
    test('multiple queries are all rendered', async () => {
      const res = await getCached('/en/graphql/reference/queries')
      expect(res.statusCode).toBe(200)

      // Check for multiple query headings
      expect(res.body).toContain('## repository')
      expect(res.body).toContain('## viewer')
    })

    test('multiple objects are all rendered', async () => {
      const res = await getCached('/en/graphql/reference/objects')
      expect(res.statusCode).toBe(200)

      // Check for multiple object headings
      expect(res.body).toContain('## Repository')
      expect(res.body).toContain('## User')
    })

    test('multiple enums are all rendered', async () => {
      const res = await getCached('/en/graphql/reference/enums')
      expect(res.statusCode).toBe(200)

      // Check for multiple enum headings
      expect(res.body).toContain('## RepositoryVisibility')
      expect(res.body).toContain('## OrderDirection')
    })
  })
})
