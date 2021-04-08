# Redirects

Docs redirects are complex! Some reasons why:

* Docs URLs have changed many times over the years, whether because docs team members have renamed individual articles or made global changes (e.g., moving all `/articles` to `/github`).
* Redirects can be hardcoded in frontmatter or generated via code in this directory (or both!).
* Live docs and archived docs require different redirect handling because they may have differently formatted URLs (e.g., legacy `/enterprise/2.17` vs. modern `/enterprise-server@2.22`).

Read on for more about how redirects work under the hood.

## Precompiled redirects

Precompiled redirects account for the majority of the docs site's redirect handling.

When [`lib/warm-server.js`](lib/warm-server.js) runs on server start, it creates all pages in the site by instantiating the [`Page` class](lib/page.js) for each content file, then passes the pages to `lib/redirects/precompile.js` to create redirects. The precompile script runs `lib/redirects/permalinks.js`, which:

1. Loops over each page's [permalinks](contributing/permalinks.md) and creates an array of legacy paths for each one (via `lib/redirects/get-old-paths-from-permalink.js`). For example, a permalink that starts with `/en/enterprise-server@2.22` results in an array that includes `/en/enterprise/2.22`, `/enterprise/2.22`, etc.
2. Loops over each page's [frontmatter `redirect_from` entries](content/README.md#redirect_from) and creates an array of legacy paths for each one (using the same handling as for permalinks).

The results comprise the `page.redirects` object, where the **keys are legacy paths** and the **values are current permalinks**.

Additionally, a [static JSON file](lib/redirects/static/developer.json) gets `require`d that contains keys with legacy developer.github.com paths (e.g., `/v4/object/app`) and values with new docs.github.com paths (e.g., `/graphql/reference/objects#app`).

All of the above are merged into a global redirects object. This object gets added to `req.context` via `middleware/context.js` and is made accessible on every request.

Because the redirects are precompiled via `warm-server`, that means `middleware/redirects/handle-redirects.js` just needs to do a simple lookup of the requested path in the redirects object.

### Archived Enterprise redirects

Archived Enterprise redirects account for a much smaller percentage of redirects on the docs site.

Some background on archival: a snapshot of the HTML files for each deprecated Enterprise Server version is archived in a separate repo and proxied to docs.github.com via `middleware/archived-enterprise-versions.js`.

Starting with Enterprise Server 2.18, we updated the archival process to start preserving frontmatter and permalink redirects. But these redirects for 2.13 to 2.17 are not recoverable.

As a workaround for these lost redirects, we have two files in `lib/redirects/static`:

* `archived-redirects-from-213-to-217.json`

  This file contains keys equal to old routes and values equal to new routes (aka snapshots of permalinks at the time) for versions 2.13 to 2.17. (The old routes were generated via `lib/redirects/get-old-paths-from-permalink.js`.)

* `archived-frontmatter-fallbacks.json`

  This file contains an array of arrays, where the child arrays are a group of all frontmatter redirects for each content file. This is essentially list of all the historical paths for the articles in old versions. The problem is, we don't know which historical paths correspond to which versions.

Here's how the `middleware/archived-enterprise-versions.js` fallback works: if someone tries to access an article that was updated via a now-lost frontmatter redirect (for example, an article at the path `/en/enterprise/2.15/user/articles/viewing-contributions-on-your-profile-page`), the middleware will first look for a redirect in `archived-redirects-from-213-to-217.json`. If it does not find one, it will look for a child array in `archived-frontmatter-fallbacks.json` that contains the requested path. If it finds a relevant array, it will try accessing all the other paths in the array until it finds one that returns a 200. For this example, it would successfully reach `/en/enterprise/2.15/user/articles/viewing-contributions-on-your-profile` (no `-page`).

This is admittedly an inefficient brute-force approach. But requests for archived docs <2.18 are getting less and less common as organizations upgrade their Enterprise instances, and all the expensive calculation happens in the middleware on page request, not on server warmup, so at least it's a relatively isolated process.

## Tests

Redirect tests are mainly found in `tests/routing/*`, with some additional tests in `tests/rendering/server.js`.

The `tests/fixtures/*` directory includes `developer-redirects.json`, `graphql-redirects.json`, and `rest-redirects.json`.