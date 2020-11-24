const patterns = require('../patterns')
const { latest } = require('../enterprise-server-releases')
const { getVersionedPathWithLanguage } = require('../path-utils')

// This function takes a known pre-migration path from developer.github.com and
// infers and returns a current, correct docs.github.com path.
module.exports = function getDocsPathFromDeveloperPath (oldDeveloperPath, allRedirects, pages) {
  let newPath = oldDeveloperPath

  // Look up the old path in the redirects object BEFORE modifying /v3 and /v4 paths
  // in case there is a frontmatter redirect.
  // e.g. /v3/activity/event_types -> /en/developers/webhooks-and-events/github-event-types
  newPath = allRedirects[newPath] || newPath

  // oneoff redirect
  const v3OrgPreReceiveHooks = '/v3/orgs/pre_receive_hooks'
  if (newPath.endsWith(v3OrgPreReceiveHooks)) {
    newPath = newPath.replace(v3OrgPreReceiveHooks, '/v3/enterprise-admin/org_pre_receive_hooks')
  }

  // oneoff redirect for a dotcom developer path to Enterprise-only path on docs.github.com
  const oauthAuthorizations = '/v3/oauth_authorizations'
  if (newPath.endsWith(oauthAuthorizations)) {
    newPath = newPath.replace(oauthAuthorizations, '/enterprise-server/v3/oauth_authorizations')
  }

  // Change /v4/foo/bar to /v4/foo#bar
  // Change /v3/foo/bar to /v3/foo#bar
  // Then we can look up the hashless path in the redirect object,
  // get the new path like /graphql/reference/foo or /rest/reference/foo,
  // and add the #bar fragment back after.
  let fragment
  if (patterns.oldApiPath.test(newPath)) {
    // pathParts = [ '', 'v4', 'foo', 'bar' ]
    const pathParts = newPath.split('/')
    // lastSegment = bar
    const lastSegment = pathParts.pop()
    // newPath = /v4/foo
    newPath = pathParts.join('/')

    // Underscores in the final segment of REST paths (`/admin_stats`)
    // get changed to hyphens when they become fragments (`#admin-stats`).
    // GraphQL paths rarely have underscores, but when they do, they are preserved (`__directive`).
    fragment = newPath.includes('/v3/')
      ? lastSegment
          .replace(/_/g, '-')
          // this is a special oneoff replacement
          .replace('org-pre-receive-hooks', 'organization-pre-receive-hooks')
      : lastSegment
  }

  // do a second lookup to find /v4/foo or /v3/foo without the last segment
  newPath = allRedirects[newPath] || newPath

  // old developer routes that include 'enterprise-admin' should always redirect to enterprise server
  if (fragment && newPath.includes('/rest/reference/enterprise-admin') && !patterns.enterpriseServer.test(newPath)) {
    newPath = getVersionedPathWithLanguage(newPath, `enterprise-server@${latest}`, 'en')
  }

  // show an error if the page to be redirected to doesn't exist
  // but only if the current collection of pages includes REST and GraphQL reference pages
  if (process.env.NODE_ENV !== 'test' && !pages[newPath] && pages['/en/rest/reference'] && pages['/en/graphql/reference']) {
    console.error(`can't find ${newPath}! based on ${oldDeveloperPath}`)
  }

  // add fragment back in and return
  return fragment
    ? newPath + '#' + fragment
    : newPath
}
