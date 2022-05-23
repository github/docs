# Redirects

There are a number of ways to configure redirects in the site.

## Local redirects

Within docs.github.com, you can redirect from one file to another or from one version to another.

### Redirects across files

Sometimes we change the name of an article but want its old URL to redirect to its new URL. For these types of redirects, we use `redirect_from` frontmatter. See [/content#redirect_from](/content#redirect_from) for details.

### Redirects across versions

If you want the URL for one version of an article to redirect to the URL for another version, you must use [/lib/redirects/static/redirect-exceptions.txt](/lib/redirects/static/redirect-exceptions.txt) instead. For example, if you remove the Free, Pro, & Team (`fpt`) version of an article, to prevent 404s, the URL for the `fpt` version should redirect to a version of the article that still exists.

Each entry in this file should start with the path you want to redirect _to_, including the version, followed by an unordered list of the paths you want to redirect _from_. For example, if you removed the `fpt` version of "[Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)", you would redirect folks who attempt to access that path to the `ghec` version with the following entry.

```
/enterprise-cloud@latest/repositories/creating-and-managing-repositories/cloning-a-repository
- /articles/cloning-a-repository
- /articles/cloning-a-repository-from-github
- /github/creating-cloning-and-archiving-repositories/cloning-a-repository
- /github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
- /repositories/creating-and-managing-repositories/cloning-a-repository
```

Note that you must add redirects for both the current `fpt` path and any previous `fpt` paths.

## External redirects

Sometimes the canonical home of some content moves outside the help site. For these types of redirects, we add entries to [/lib/redirects/external-sites.json](/lib/redirects/external-sites.json).

## Custom redirects

We also have custom routing code that automatically creates redirects under the hood for things like moved Admin guide pages. This code lives in [/lib/redirects/get-old-paths-from-permalink.js](/lib/redirects/get-old-paths-from-permalink.js). All redirects for the site are compiled when the server starts by [/lib/redirects/precompile.js](/lib/redirects/precompile.js).

See [Links and image paths](../content/README.md#links-and-image-paths) for info on how links and images are rewritten on the fly at page render time.

See [Troubleshooting](./troubleshooting.md#debugging-locally) for info on viewing the redirects for any page.
