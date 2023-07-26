import { jest } from '@jest/globals'

import { head } from '../../../../tests/helpers/e2etest.js'

jest.useFakeTimers({ legacyFakeTimers: true })

describe('developer.github.com redirects', () => {
  jest.setTimeout(60 * 1000)

  const paths = [
    '/v3',
    '/v4',
    '/v3/repos',
    '/webhooks',
    '/v3/guides/managing-deploy-keys',
    '/apps/building-oauth-apps/authorizing-oauth-apps',
    '/v4/explorer',
    '/v3/search',
    '/apps',
    '/v3/activity/events/types',
    '/v3/repos/statuses',
    '/v3/auth',
    '/v3/users',
    '/v4/guides/forming-calls',
    '/v3/pulls',
    '/v3/repos/contents',
    '/apps/building-oauth-apps/understanding-scopes-for-oauth-apps',
    '/v4/guides/intro-to-graphql',
    '/v3/issues',
    '/webhooks/creating',
    '/v3/repos/releases',
    '/v3/libraries',
    '/v3/repos/commits',
    '/marketplace',
    '/v4/query',
    '/v3/guides/getting-started',
    '/v3/guides',
    '/v3/guides/using-ssh-agent-forwarding',
    '/v3/oauth_authorizations',
    '/enterprise/2.20',
    '/v3/repos/statistics',
    '/v3/orgs',
    '/program',
    '/v3/media',
    '/v3/repos/hooks',
    '/v4/guides/using-the-explorer',
    '/v4/guides',
    '/apps/building-github-apps/authenticating-with-github-apps',
    '/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps',
    '/v3/git/refs',
    '/v3/guides/basics-of-authentication',
    '/v3/git',
    '/v3/checks',
    '/v3/projects',
    '/v4/guides/migrating-from-rest',
    '/v3/activity/events',
    '/v3/repos/deployments',
    '/v3/apps',
    '/v3/checks/runs',
  ]

  test.each(paths)('responds with 200 on %p', async (path) => {
    const { statusCode } = await head(path, { followRedirects: false })
    expect(statusCode).toEqual(302)
  })
})
