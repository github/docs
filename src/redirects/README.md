# Redirects

Docs redirects are complex! Some reasons why:

* Docs URLs have changed many times over the years, whether because docs team members have renamed individual articles or made global changes (e.g., moving all `/articles` to `/github`).
* Redirects can be hardcoded in frontmatter or generated via code in this directory (or both!).
* Live docs and archived docs require different redirect handling because they may have differently formatted URLs (e.g., legacy `/enterprise/2.17` vs. modern `/enterprise-server@2.22`).

Read on for more about how redirects work under the hood.

## Precompiled redirects

Precompiled redirects account for the majority of the docs site's redirect handling.

When [`lib/warm-server.js`](lib/warm-server.js) runs on server start, it creates all pages in the site by instantiating the [`Page` class](lib/page.js) for each content file, then passes the pages to `lib/redirects/precompile.js` to create redirects. The precompile script runs `lib/redirects/permalinks.js`, which:

1. Includes all legacy redirects from `static/developerjson`
2. Loops over each page's [frontmatter `redirect_from` entries](content/README.md#redirect_from) and creates an array of legacy paths for each one (using the same handling as for permalinks).
3. Any other exceptions from the `static/redirect-exceptions.txt` file

The results comprise the `page.redirects` object, whose keys are always only the path without language.
Sometimes it contains the specific plan/version (e.g. `/enterprise-server@3.0/v3/integrations` to `enterprise-server@3.0/developers/apps`) and sometimes it's just the plain path
(e.g. `/articles/viewing-your-repositorys-workflows` to `/actions/monitoring-and-troubleshooting-workflows`)

All of the above are merged into a global redirects object. This object gets added to `req.context` via `middleware/context.js` and is made accessible on every request.

In the `handle-redirects.js` middleware, the language part of the URL is
removed, looked up, and if matched to something, redirects with language
put back in. Demonstrated with pseudo code:

```javascript
var fullPath = '/ja/foo'
var newPath = redirects['/foo']
if (newPath) {
  redirect('/ja' + newPath)
}
```

### Archived Enterprise redirects

Archived Enterprise redirects account for a much smaller percentage of redirects on the docs site.

Some background on archival: a snapshot of the HTML files for each deprecated Enterprise Server version is archived in a separate repo and proxied to docs.github.com via `middleware/archived-enterprise-versions.js`.

Starting with Enterprise Server 2.18, we updated the archival process to start preserving frontmatter and permalink redirects. But these redirects for 2.13 to 2.17 are not recoverable.

As a workaround for these lost redirects, we have two files in `lib/redirects/static`:

* `archived-redirects-from-213-to-217.json`

  This file contains keys equal to old routes and values equal to new routes (aka snapshots of permalinks at the time) for versions 2.13 to 2.17. (The old routes were generated via `lib/redirects/get-old-paths-from-permalink.js`.)

* `archived-frontmatter-valid-urls.json`

  This file is an object of VALID_URL to VALID_REDIRECT_SOURCES.
  E.g. `"/enterprise/2.13/foo": ["/enterprise/2.13/bar", "/enterprise/2.13/buzz"]`
  It was originally based on a previous file called `archived-frontmatter-fallbacks.json`
  which had a record of each possible redirect candidate that we should bother
  redirecting too.
  Now, this new file has been created by accurately comparing it to the actual
  content inside the `github/help-docs-archived-enterprise-versions` repo for the
  version range of 2.13 to 2.17. So every key in `archived-frontmatter-valid-urls.json`
  corresponds to a file that would work.

Here's how the `middleware/archived-enterprise-versions.js` fallback works: if someone tries to access an article that was updated via a now-lost frontmatter redirect (for example, an article at the path `/en/enterprise/2.15/user/articles/viewing-contributions-on-your-profile-page`), the middleware will first look for a redirect in `archived-redirects-from-213-to-217.json`. If it does not find one, it will look for it in `archived-frontmatter-valid-urls.json` that contains the requested path. If it finds it, it will redirect to it to because that file knows exactly which URLs are valid in
`help-docs-archived-enterprise-versions`.

## Tests

Redirect tests are mainly found in `tests/routing/*`, with some additional tests in `tests/rendering/server.js`.

The `tests/fixtures/*` directory includes `developer-redirects.json`, `graphql-redirects.json`, and `rest-redirects.json`.
