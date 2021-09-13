# Redirects

There are a number of ways to configure redirects in the site.

## Local redirects

Sometimes we change the name of an article but want its old URL to redirect to its new URL. For these types of redirects, we use `redirect_from` frontmatter. See [/content#redirect_from](/content#redirect_from) for details.

## External redirects

Sometimes the canonical home of some content moves outside the help site. For these types of redirects, we add entries to [/lib/redirects/external-sites.json](/lib/redirects/external-sites.json).

## Custom redirects

We also have custom routing code that automatically creates redirects under the hood for things like moved Admin guide pages. This code lives in [/lib/redirects/get-old-paths-from-permalink.js](/lib/redirects/get-old-paths-from-permalink.js). All redirects for the site are compiled when the server starts by [/lib/redirects/precompile.js](/lib/redirects/precompile.js).

See [Links and image paths](../content/README.md#links-and-image-paths) for info on how links and images are rewritten on the fly at page render time.

See [Troubleshooting](./troubleshooting.md#debugging-locally) for info on viewing the redirects for any page.
