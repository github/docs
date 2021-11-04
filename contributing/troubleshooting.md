# Troubleshooting <!-- omit in toc -->

- [Troubleshooting server tests that fail locally but pass in CI](#troublshooting-server-tests-that-fail-locally-but-pass-in-ci)
- [Troubleshooting stalled deployments and CI](#troubleshooting-stalled-deployments-and-ci)
  - [Staging deployment stalled](#staging-deployment-stalled)
  - [CI stalled or stuck](#ci-stalled-or-stuck)
- [Troubleshooting failed deployments and CI](#troubleshooting-failed-deployments-and-ci)
  - [Can't run the site locally](#cant-run-the-site-locally)
  - [Failed staging deployment](#failed-staging-deployment)
  - [500 error on specific page on staging](#500-error-on-specific-page-on-staging)
- [Check internal links](#check-internal-links)
- [Check external links](#check-external-links)
- [Debugging locally](#debugging-locally)

## Troubleshooting

### Troubleshooting server tests that fail locally but pass in CI

If you run the tests locally and get failures in `tests/rendering/server.js` around static assets, stylesheets, and/or the client-side JavaScript bundle, but **the same tests pass in CI** on a PR, you likely need to run `npm run build`. This is a one-time command that creates static assets locally.

See [`development.md`](./development.md) for more info.

### Staging deployment stalled
If a staging deployment is pending for more than 5-10min, try the following:

1. Close the PR (don't delete the branch) and reopen it. This will trigger a new staging deployment. It won't break anything.
2. If that doesn't work, trigger a new staging deployment by pushing an empty commit on the command line:

```
$ git commit --allow-empty -m 'empty commit to redeploy staging'
```

### CI stalled or stuck
:yellow_heart: If tests are stuck yellow for more than an hour, rerun CI by pushing an empty commit on the command line:

```
$ git commit --allow-empty -m 'empty commit to rerun CI'
```

## Troubleshooting failed deployments and CI

### Can't run the site locally
If you are running `script/server` and get a `Cannot find module` error, try:

```
$ npm install
```

If that doesn't fix it, try:

```
$ rm -rf node_modules
$ npm install
```

### Failed staging deployment
Check out the branch and run the site locally:

```
$ script/server
```

Go to https://localhost:4000

You should see more information about the error in your browser or in your Terminal (or both).

If you see an error like this:

```
error parsing file: /Users/z/git/github/docs/content/dotcom/articles/troubleshooting-custom-domains-and-github-pages.md
(node:89324) UnhandledPromiseRejectionWarning: YAMLException: can not read a block mapping entry; a multiline key may not be an implicit key at line 4, column 14:
    redirect_from:
                 ^
```

make sure single quotes are properly escaped in the frontmatter. Also, check the formatting in `redirect_from` blocks.

### 500 error on specific page on staging
Check out the branch and run the site locally:

```
$ script/server
```

Go to whatever page is 500ing on staging on your local server: https://localhost:4000/page-with-error

Again, you should see more information about the error either in your browser or in your Terminal (or both). Staging just shows Oops, but the local server should a stack trace for debugging.

## Check internal links

The `check internal links` test reports any broken links on the site, including images. The test reports the URL of the broken link, _not_ the file that includes that link, so you'll need to search the `docs` repository to find the file.

Broken images include `assets/images/` in the URL and are often caused by images being versioned for previous versions of GHES but not uploaded to the appropriate folder in S3. Search the `docs` repository for the file name (e.g., `assets/images/help/repository/security-tab.png`), then make sure the image is versioned correctly in each result. If the image is in a reusable, you'll also need to search for each occurrence of that reusable. If the image is versioned correctly, upload the image to the appropriate folder(s) in S3.

For broken links to articles on our site, find the file that contains the link by searching the `docs` repository for the file name (e.g., `incorporating-feedback-in-your-pull-request`). Try the following fixes:

1. Make sure the link is versioned correctly. For example, if the article only exists for 2.17+, make sure the link is versioned for 2.17+.
2. If an article that is available for GHES links to a dotcom-only article, use a dotcom-only class to prevent the URL from automatically converting to include a GHES version number:
  ```
  <a href="/articles/github-connect-addendum-to-the-github-enterprise-license-agreement/" class="dotcom-only">{{ site.data.variables.product.prodname_github_connect }} Addendum to the {{ site.data.variables.product.prodname_enterprise }} License Agreement</a>
  ```

## Check external links

For broken external links, investigate whether the site is permanently removed. If so, find an alternative site that provides equivalent context.

## Debugging locally

During development, you can visit any page on `http://localhost:4000` and add `?json=page` to the end of the path to show some underlying information that may be helpful for debugging. In addition to basic info like title and intro, these are a few fields that may be useful.

| Field | Description |
| ----- | ----------- |
|`productVersions` | Shows what the site is parsing from the [`productVersions` frontmatter](content#productVersions).
| `permalinks` | Shows all [permalinks](contributing/permalinks.md) that the site is generating for the page.
| `redirect_from` | Shows the hardcoded redirects in the [`redirect_from` frontmatter](content#redirect_from).
| `redirects` | Shows all redirects that the site is generating for the page.
| `includesPlatformSpecificContent` | Shows whether the site detects any [platform-specific content](#operating-system-tags) on the page.

## Liquid processing

If your text or code example includes `{` or `}` that should render, you need to wrap it in `{% raw %}` `{% endraw %}` to disable Liquid processing for that section. For example:

- **Use**:

  ```
  GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
  ```

- **Avoid**:

  ```
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  ```
