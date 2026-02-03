# Redirects

Docs redirects are complex! Some reasons why:

* Docs URLs have changed many times over the years, whether because docs team members have renamed individual articles or made global changes (e.g., moving all `/articles` to `/github`).
* Redirects can be hardcoded in frontmatter or generated via code in this directory (or both!).
* Live docs and archived docs require different redirect handling because they may have differently formatted URLs (e.g., legacy `/enterprise/2.17` vs. modern `/enterprise-server@2.22`).

Read on for more about how redirects work under the hood.

## Precompiled redirects

Precompiled redirects account for the majority of the docs site's redirect handling.

When [`lib/warm-server.ts`](lib/warm-server.ts) runs on server start, it creates all pages in the site by instantiating the [`Page` class](lib/page.ts) for each content file, then passes the pages to `lib/redirects/precompile.ts` to create redirects. The precompile script runs `lib/redirects/permalinks.ts`, which:

1. Includes all legacy redirects from `static/developerjson`
2. Loops over each page's [frontmatter `redirect_from` entries](content/README.md#redirect_from) and creates an array of legacy paths for each one (using the same handling as for permalinks).
3. Any other exceptions from the `static/redirect-exceptions.txt` file

The results comprise the `page.redirects` object, whose keys are always only the path without language.
Sometimes it contains the specific plan/version (e.g. `/enterprise-server@3.0/v3/integrations` to `enterprise-server@3.0/developers/apps`) and sometimes it's just the plain path
(e.g. `/articles/viewing-your-repositorys-workflows` to `/actions/monitoring-and-troubleshooting-workflows`)

All of the above are merged into a global redirects object. This object gets added to `req.context` via `src/frame/middleware/context/context.ts` and is made accessible on every request.

In the `handle-redirects.ts` middleware, the language part of the URL is
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

Some background on archival: a snapshot of the HTML files for each deprecated Enterprise Server version is archived in a separate repo and proxied to docs.github.com via `src/archives/middleware/archived-enterprise-versions.ts`.

Starting with Enterprise Server 2.18, we updated the archival process to start preserving frontmatter and permalink redirects. But these redirects for 2.13 to 2.17 are not recoverable.

As a workaround for these lost redirects, we have two files in `lib/redirects/static`:

* `archived-redirects-from-213-to-217.json`

  This file contains keys equal to old routes and values equal to new routes (aka snapshots of permalinks at the time) for versions 2.13 to 2.17. (The old routes were generated via `lib/redirects/get-old-paths-from-permalink.ts`.)

* `archived-frontmatter-valid-urls.json`

  This file is an object of VALID_URL to VALID_REDIRECT_SOURCES.
  E.g. `"/enterprise/2.13/foo": ["/enterprise/2.13/bar", "/enterprise/2.13/buzz"]`
  It was originally based on a previous file called `archived-frontmatter-fallbacks.json`
  which had a record of each possible redirect candidate that we should bother
  redirecting too.
  Now, this new file has been created by accurately comparing it to the actual
  content inside one of the `github/docs-ghes-<release number>` repos for the
  version range of 2.13 to 2.17. So every key in `archived-frontmatter-valid-urls.json`
  corresponds to a file that would work.

Here's how the `src/archives/middleware/archived-enterprise-versions.ts` fallback works: if someone tries to access an article that was updated via a now-lost frontmatter redirect (for example, an article at the path `/en/enterprise/2.15/user/articles/viewing-contributions-on-your-profile-page`), the middleware will first look for a redirect in `archived-redirects-from-213-to-217.json`. If it does not find one, it will look for it in `archived-frontmatter-valid-urls.json` that contains the requested path. If it finds it, it will redirect to it to because that file knows exactly which URLs are valid in the `docs-ghes-<release number>` repos.

## Tests

Redirect tests are mainly found in `tests/routing/*`, with some additional tests in `tests/rendering/server.ts`.

The `src/fixtures/fixtures/*` directory includes `developer-redirects.json`, `graphql-redirects.json`, and `rest-redirects.json`.

## Local debugging

### Testing redirects locally

Run the dev server and test redirect behavior:

```bash
npm run dev
# Visit http://localhost:4000/<old-path> to verify redirect
```

### Viewing all redirects

The global redirects object is available in `req.context.redirects`. You can inspect it during debugging or in tests.

### Adding a new redirect

**Via frontmatter** (preferred for content moves):
```yaml
---
title: My Article
redirect_from:
  - /old-path
  - /another-old-path
---
```

**Via developer.json** (for API/reference):
Add to `src/redirects/lib/static/developer.json` (or similar files).

### Testing redirect code

```bash
npm run test -- src/redirects/tests/routing
```

## Cross-links & Ownership

### Related subjects
- [`src/frame`](../frame/README.md) - `warm-server.ts` creates Page instances for redirect generation
- [`src/archives`](../archives/README.md) - Archived Enterprise redirect handling
- Content frontmatter - `redirect_from` field in all content files

### Ownership
- Team: Docs Engineering

Note: Most redirects are in docs-content control via frontmatter `redirect_from` field.

We aren't expecting significant changes here moving forward.

4. **Documentation gaps**
   - Some legacy redirect files lack clear provenance
   - Need better tracking of redirect addition reasons

### Known limitations

- Archived Enterprise redirects (2.13-2.17) incomplete
- Redirect lookup not cached (happens per-request)
- Multiple redirect sources can conflict
- No automated redirect expiry/cleanup

### Adding redirects best practices

1. Prefer frontmatter `redirect_from` for content moves
2. Keep redirects indefinite (links live forever on the internet)
3. Test redirects locally before deploying
4. Document reason for redirect (PR description)
5. Consider version-specific redirects for GHES

### Troubleshooting

**Redirect not working:**
- Check frontmatter `redirect_from` syntax
- Verify redirect in `req.context.redirects` object
- Ensure `handle-redirects` middleware is running
- Check for conflicting redirects

**Archived Enterprise redirect fails:**
- Check `archived-redirects-from-213-to-217.json` for version 2.13-2.17
- Check `archived-frontmatter-valid-urls.json` for valid target
- Verify archived version is properly proxied

**Performance issues:**
- Large redirect maps can slow server startup
- Consider profiling `precompile.ts` execution
- Check for duplicate redirects

