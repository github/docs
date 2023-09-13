# Redirects

There are a number of ways to configure redirects in the site.

## Local redirects

Within docs.github.com, you can redirect from one file to another or from one version to another.

### Redirects across files

Sometimes we change the name of an article but want its old URL to redirect to its new URL. For these types of redirects, we use `redirect_from` frontmatter. See [/content#redirect_from](/content#redirect_from) for details.

### Automatic redirects for URLs that do not include a version

If a URL for a docs page is entered without a version segment (e.g., `https://docs.github.com/foo` instead of `https://docs.github.com/<version>/foo`), the site will automatically redirect it to the **first available version** of the page. The order of precedence is specified in `lib/all-versions.js`, where the current order is:

1. Free, Pro, & Team (`fpt`)
1. Enterprise Cloud (`ghec`)
1. Enterprise Server (`ghes`)
1. GitHub AE (`ghae`)

So if a page `foo.md` is only available in Cloud and Server, the link `https://docs.github.com/foo` will automatically redirect to `https://docs.github.com/enterprise-cloud@latest/foo` because Cloud has precedence over Server.

If `foo.md` is available in Free, Pro, & Team, no redirect will occur because `fpt` pages do not have a version segment, so the `fpt` content at `https://docs.github.com/foo` will render.

### Redirects across versions

If you want the URL for one version of an article to redirect to a URL for another version, you must use [/src/redirects/lib/static/redirect-exceptions.txt](/src/redirects/lib/static/redirect-exceptions.txt) instead. For example, if you remove the Free, Pro, & Team (`fpt`) version of an article, the URL will [automatically redirect](#automatic-redirects-for-urls-that-do-not-include-a-version) to the next available version of the page. If you want it to redirect to a version that is **lower in the order of precedence**, or to a different page entirely, you must specify an exception.

Another example: we removed the `ghes` version of "[Exporting member information for your organization](https://docs.github.com/en/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization)," but we don't want URLs that include the `enterprise-server@<release>` version segment to 404. In order to redirect `ghes` URLs to another version (such as `ghec`), we need to add an exception.

Each entry in [the exceptions file](/src/redirects/lib/static/redirect-exceptions.txt) should start with the path you want to redirect _to_, including the version, followed by an unordered list of the paths you want to redirect _from_:

```
/enterprise-cloud@latest/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization
  - /enterprise-server@3.3/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization
  - /enterprise-server@3.4/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization
  - /enterprise-server@3.5/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization
```

## External redirects

Sometimes the canonical home of some content moves outside the help site. For these types of redirects, we add entries to [/src/redirects/lib/external-sites.json](/src/redirects/lib/external-sites.json).

## Custom redirects

We also have custom routing code that automatically creates redirects under the hood for things like moved Admin guide pages. This code lives in [/src/redirects/lib/get-old-paths-from-permalink.js](/src/redirects/lib/get-old-paths-from-permalink.js). All redirects for the site are compiled when the server starts by [/src/redirects/lib/precompile.js](/src/redirects/lib/precompile.js).

See [Links and image paths](../content/README.md#links-and-image-paths) for info on how links and images are rewritten on the fly at page render time.

See [Troubleshooting](./troubleshooting.md#debugging-locally) for info on viewing the redirects for any page.
