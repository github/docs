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
    test('repos category page renders with markdown structure', async () => {
      const res = await getCached('/en/graphql/reference/repos')
      expect(res.statusCode).toBe(200)
      expect(res.headers['content-type']).toContain('text/markdown')

      // Check for the main heading
      expect(res.body).toContain('# Repositories')

      // Items render as flat alphabetical level 2 headings with a kind suffix
      expect(res.body).toContain('## createRepository - mutation')
      expect(res.body).toContain('## repository - query')
    })

    test('queries are formatted correctly on a category page', async () => {
      const res = await getCached('/en/graphql/reference/repos')
      expect(res.statusCode).toBe(200)

      // Item headings are now at level 3
      expect(res.body).toContain('## repository - query')

      // Check for query description
      expect(res.body).toContain('Lookup a given repository by the owner and repository name.')

      // Check for type (without link)
      expect(res.body).toContain('**Type:** Repository')
    })

    test('query arguments are listed in bullet format', async () => {
      const res = await getCached('/en/graphql/reference/meta')
      expect(res.statusCode).toBe(200)

      // codeOfConduct query is in the meta category
      expect(res.body).toContain('### Arguments for `codeOfConduct`')

      // Check for specific arguments in bullet format
      expect(res.body).toContain('`key` (String!)')
      expect(res.body).toContain("The code of conduct's key.")
    })

    test('mutations page renders correctly', async () => {
      const res = await getCached('/en/graphql/reference/repos')
      expect(res.statusCode).toBe(200)

      // Mutation heading (level 3) and surrounding sections (level 4)
      expect(res.body).toContain('## createRepository - mutation')
      expect(res.body).toContain('Create a new repository.')
      expect(res.body).toContain('### Input fields for `createRepository`')
      expect(res.body).toContain('`input`')
      expect(res.body).toContain('### Return fields for `createRepository`')
      expect(res.body).toContain('`repository`')
      expect(res.body).toContain('The new repository.')
    })

    test('objects page renders with implements and fields', async () => {
      const res = await getCached('/en/graphql/reference/pulls')
      expect(res.statusCode).toBe(200)

      // AddedToMergeQueueEvent is in the pulls category and implements Node
      expect(res.body).toContain('## AddedToMergeQueueEvent - object')
      expect(res.body).toContain('**Implements:** Node')
      expect(res.body).toContain('### Fields for `AddedToMergeQueueEvent`')
      expect(res.body).toContain('`id`')
      expect(res.body).toContain('`actor`')
      expect(res.body).toContain('`createdAt`')
    })

    test('objects page shows field arguments as nested bullets', async () => {
      const res = await getCached('/en/graphql/reference/users')
      expect(res.statusCode).toBe(200)

      // User object lives in the users category
      expect(res.body).toContain('## User - object')
      expect(res.body).toContain('`repositories`')

      // Check for nested argument bullets
      expect(res.body).toContain('`first`')
      expect(res.body).toContain('Returns the first n elements from the list.')
      expect(res.body).toContain('`orderBy`')
    })

    test('interfaces page renders correctly', async () => {
      const res = await getCached('/en/graphql/reference/meta')
      expect(res.statusCode).toBe(200)

      expect(res.body).toContain('## Node - interface')
      expect(res.body).toContain('An object with an ID.')
      expect(res.body).toContain('### Fields for `Node`')
      expect(res.body).toContain('`id`')
      expect(res.body).toContain('ID of the object.')
    })

    test('enums page renders with values', async () => {
      const res = await getCached('/en/graphql/reference/repos')
      expect(res.statusCode).toBe(200)

      // RepositoryVisibility is in the repos category
      expect(res.body).toContain('## RepositoryVisibility - enum')
      expect(res.body).toContain("The repository's visibility level.")
      expect(res.body).toContain('### Values for `RepositoryVisibility`')
      expect(res.body).toContain('`PUBLIC`')
      expect(res.body).toContain('The repository is visible to everyone.')
      expect(res.body).toContain('`PRIVATE`')
      expect(res.body).toContain('The repository is visible only to those with explicit access.')
      expect(res.body).toContain('`INTERNAL`')
    })

    test('unions page renders with possible types', async () => {
      const res = await getCached('/en/graphql/reference/branches')
      expect(res.statusCode).toBe(200)

      expect(res.body).toContain('## BranchActorAllowanceActor - union')
      expect(res.body).toContain('Types which can be actors for')
      expect(res.body).toContain('### Possible types for `BranchActorAllowanceActor`')
      expect(res.body).toMatch(/\*\s*App/)
      expect(res.body).toMatch(/\*\s*Team/)
      expect(res.body).toMatch(/\*\s*User/)
    })

    test('input-objects page renders correctly', async () => {
      const res = await getCached('/en/graphql/reference/migrations')
      expect(res.statusCode).toBe(200)

      expect(res.body).toContain('## AbortQueuedMigrationsInput - input object')
      expect(res.body).toContain('Autogenerated input type of AbortQueuedMigrations.')
      expect(res.body).toContain('### Input fields for `AbortQueuedMigrationsInput`')
      expect(res.body).toContain('`ownerId`')
      expect(res.body).toContain('The ID of the organization that is running the migrations.')
    })

    test('scalars page renders correctly', async () => {
      const res = await getCached('/en/graphql/reference/other')
      expect(res.statusCode).toBe(200)

      // Built-in scalars are uncategorized and end up in "other"
      expect(res.body).toContain('## Boolean - scalar')
      expect(res.body).toContain('Represents true or false values.')
      expect(res.body).toContain('## String - scalar')
      expect(res.body).toContain('## ID - scalar')
      expect(res.body).toContain('## Int - scalar')
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
    test('changelog index page renders with latest year changes', async () => {
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

      // Index page shows latest year (2026) entries only
      expect(res.body).toContain('## Schema changes for 2026-')

      // Check for change items
      expect(res.body).toContain('### The GraphQL schema includes these changes:')

      // Should NOT contain entries from other years
      expect(res.body).not.toContain('## Schema changes for 2025-')

      // Check for year navigation
      expect(res.body).toContain('2026')
      expect(res.body).toContain('2025')
    })

    test('changelog year page renders with that year only', async () => {
      const res = await getCached('/en/graphql/overview/changelog/2025')
      expect(res.statusCode).toBe(200)

      // Check for year-specific heading
      expect(res.body).toContain('# GraphQL changelog for 2025')

      // Check for date-based changelog sections from 2025
      expect(res.body).toContain('## Schema changes for 2025-')

      // Should NOT contain entries from other years
      expect(res.body).not.toContain('## Schema changes for 2026-')
      expect(res.body).not.toContain('## Schema changes for 2024-')
    })

    test('changelog removes HTML tags from changes', async () => {
      // Use a year page that has the specific test data
      const res = await getCached('/en/graphql/overview/changelog/2025')
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
      // The repos category page renders the manual content section of its
      // landing markdown, including AUTOTITLE links if present.
      const res = await getCached('/en/graphql/reference/repos')
      expect(res.statusCode).toBe(200)

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
    test('multiple queries are all rendered on a category page', async () => {
      const res = await getCached('/en/graphql/reference/repos')
      expect(res.statusCode).toBe(200)

      // Multiple repos-category queries appear as level 3 headings
      expect(res.body).toContain('## repository - query')
      expect(res.body).toContain('## repositoryOwner - query')
    })

    test('multiple objects are all rendered on a category page', async () => {
      const res = await getCached('/en/graphql/reference/repos')
      expect(res.statusCode).toBe(200)

      // Repos-category object headings
      expect(res.body).toContain('## Language - object')
      expect(res.body).toContain('## ContributingGuidelines - object')
    })

    test('multiple enums are all rendered on a category page', async () => {
      const res = await getCached('/en/graphql/reference/repos')
      expect(res.statusCode).toBe(200)

      // Repos-category enum headings
      expect(res.body).toContain('## RepositoryVisibility - enum')
      expect(res.body).toContain('## CollaboratorAffiliation - enum')
    })
  })
})
