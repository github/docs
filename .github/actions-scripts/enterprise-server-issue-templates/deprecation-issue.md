## Overview

The day after a GHES version's [deprecation date](https://github.com/github/docs-internal/tree/main/lib/enterprise-dates.json), a banner on the docs will say: `This version was deprecated on <date>.` This is all users need to know. However, we don't want to update those docs anymore or link to them in the nav. Follow the steps in this issue to **archive** the docs.

**Note**: Do each step below in a separate PR. Only move on to the next step when the previous PR has been merged.

The following large repositories are used throughout this checklist, it may be useful to clone them before you begin:

- `github/github`
- `github/docs-internal`

Additionally, download:

- [Azure Storage Explorer](https://aka.ms/portalfx/downloadstorageexplorer)

## Step 0: Remove deprecated version numbers from docs-content issue forms

**Note**: This step can be performed independently of all other steps, and can be done several days before or along with the other steps.

- [ ] In the `docs-content` repo, remove the deprecated GHES version number from the `options` list in [`release-tracking.yml`](https://github.com/github/docs-content/blob/main/.github/ISSUE_TEMPLATE/release-tracking.yml).
- [ ] When the PR is approved, merge it in. This can be merged independently from all other steps.

## Step 1: Scrape the docs and archive the files

- [ ] In your `docs-internal` checkout, download the static files for the oldest supported version into your archival checkout:
      The archive script depends on an optional dependency so install optional dependencies first:
  ```
  $ npm i --include=optional
  ```
  Ensure your build is up to date:
  ```
  $ npm run build
  ```
  Then run the archive script:
  ```
  $ script/enterprise-server-deprecations/archive-version.js
  ```

  This will generate a directory in `github/docs-internal` called `tmpArchivalDir_<VERSION_TO_DEPRECATE>`. For example 'tmpArchivalDir_3.0'. You can also create a specific output directory using the `--output` flag.

  **Note:** You can pass the `--dry-run` flag to scrape only the first 10 pages plus their redirects for testing purposes. **If you use the dry run command, be sure to run the full script without `--dry-run` before you commit the changes.**

## Step 2: Manually remove the search input from the archived docs

- [ ] Search for `site-search-input` in the compressed Javascript files (should find the file in the `_next` directory). When you find it, use something like https://beautifier.io/ or VSCode to reformat it to be readable. To reformat using VSCode, use the "Format document" option or <kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd>. Find `site-search-input` in the file, the result will be enclosed in a function that looks something like... `(0,f.jsx)("input",{"data-testid":"site-search-input",` Delete the entire function. For example, this:
  ```
  (0, f.jsxs)("label", {
    className: "text-normal width-full",
    children: [(0, f.jsx)("span", {
      className: "visually-hidden",
      "aria-label": R($ || ($ = (0, k.Z)(["label"]))),
      "aria-describedby": R(W || (W = (0, k.Z)(["description"]))),
      children: R(U || (U = (0, k.Z)(["placeholder"])))
  }), (0, f.jsx)("input", {
      "data-testid": "site-search-input",
      ref: I,
      className: h()(pe().searchInput, 24 === p && pe().searchIconBackground24, 24 === p && "form-control px-6 f4", 16 === p && pe().searchIconBackground16, 16 === p && "form-control px-5 f4", "compact" === i && "py-2", "expanded" === i && "py-3", r && pe().searchInputHeader, !r && "width-full", r && j && pe().searchInputExpanded, r && j && "position-absolute top-0 right-0"),
      type: "search",
      placeholder: R(G || (G = (0, k.Z)(["placeholder"]))),
      autoComplete: _ ? "on" : "off",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: "false",
      maxLength: 512,
      onChange: function(e) {
          S(e.target.value)
      },
      value: _,
      "aria-label": R(K || (K = (0, k.Z)(["label"]))),
      "aria-describedby": R(J || (J = (0, k.Z)(["description"])))
    })
  ```

  becomes:

  ```
  (0, f.jsxs)('label', {
    className: 'text-normal width-full',
    children: [
      (0, f.jsx)('span', {
        className: 'visually-hidden',
        'aria-label': y(Q || (Q = (0, k.Z)(['label']))),
        'aria-describedby': y(X || (X = (0, k.Z)(['description']))),
        children: y(ee || (ee = (0, k.Z)(['placeholder']))),
      }),
    ],
  }),
  ```
- [ ] Save the file. If using beautifier, copy and paste the updated file back into your temp directory with the scraped archive content.

## Step 3: Upload the scraped content directory to Azure storage

- [ ] Log in to the Azure portal from Okta. Navigate to the [githubdocs Azure Storage Blob resource](https://portal.azure.com/#@githubazure.onmicrosoft.com/resource/subscriptions/fa6134a7-f27e-4972-8e9f-0cedffa328f1/resourceGroups/docs-production/providers/Microsoft.Storage/storageAccounts/githubdocs/overview).
- [ ] Click the "Open in Explorer" button to the right of search box. If you haven't already, click the download link to download "Microsoft Azure Storage Explorer." To login to the app, click the plug icon in the left sidebar and click the option to "add an azure account." When you login, you'll need a yubikey to authenticate through Okta.
- [ ] From the Microsoft Azure Storage Explorer app, select the `githubdocs` storage account resource and navigate to the `enterprise` blob container.
- [ ] Click "Upload" and select "Upload folder." Click the "Selected folder" input to navigate to the temp directory you just generated. Inside that temp directory, select the `<VERSION_TO_DEPRECATE>` directory (e.g., `3.2`). Leave the destination directory input blank.
- [ ] Check the log to ensure all files were uploaded successfully.
- [ ] Remove the temporarily created directory from your `github/docs-internal` checkout.

## Step 4: Create a tag and long-running branch

Create a new tag for the most recent commit on the `main` branch so that we can keep track of where in commit history we removed the GHES release. Create a tag called `enterprise-<release number>-release`. Then from that commit on `main` create a new branch called `enterprise-<release number>-release`. This branch will be long-lived and used to rerender and scrape content that is added after a release is deprecated.

## Step 5: Deprecate the version in docs-internal

In your `docs-internal` checkout:

- [ ] Create a new branch: `git checkout -b deprecate-<version>`.
- [ ] Edit `lib/enterprise-server-releases.js` by removing the version number to be deprecated from the `supported` array and move it to the `deprecatedWithFunctionalRedirects` array.

## Test that the archived static pages were generated correctly

You can test that the static pages were generated correctly on localhost and on staging. Verify that the static pages are accessible by running `npm run dev` in your local `docs-internal` checkout and navigate to:
`http://localhost:3000/enterprise/<version>/`.

Poke around several pages, ensure that the stylesheets are working properly, images are rendering properly, and that the search functionality was disabled.

## Step 6: Remove static files for the version

**Note:** We do not remove the old content for GHES release notes. New release notes can be added after we perform a deprecation in some rare cases, and not removing this content makes it easier for us to re-scrape the content to add to Azure Blob Storage.

- [ ] In your `docs-internal` checkout, create a new branch `remove-<version>-static-files` branch: `git checkout -b remove-<version>-static-files` (you can branch off of `main` or from your `deprecate-<version>` branch, up to you).
- [ ] Run `script/enterprise-server-deprecations/remove-static-files.js` and commit results.
- [ ] Re-generate the static files by running `src/rest/scripts/update-files.js --decorate-only`.
- [ ] Open a new PR.
- [ ] Get a review from docs-engineering and merge. This step can be merged independently from step 6. The purpose of splitting up steps 5 and 6 is to focus the review on specific files.

## Step 7: Remove the liquid conditionals and content for the version

- [ ] In your `docs-internal` checkout, create a new branch `remove-<version>-markup` branch: `git checkout -b remove-<version>-markup` (you can branch off of `main` or from your `deprecate-<version>` branch, up to you).
- [ ] Remove the outdated Liquid markup and frontmatter.
  - [ ] Run the script: `script/enterprise-server-deprecations/remove-version-markup.js --release <number>`.
  - [ ] Spot check a few changes. Content, frontmatter, and data files should all have been updated.
  - [ ] Open a PR with the results. The diff may be large and complex, so make sure to get a review from `@github/docs-content`.
  - [ ] Debug any test failures or unexpected results -- it's very likely manual updates will be necessary, the script does a lot of work but doesn't automate everything and can't 100% replace human intent.
- [ ] When the PR is approved, merge it in to complete the deprecation. This can be merged independently from step 5.

## Step 8: Deprecate the OpenAPI description in `github/github`

- [ ] In `github/github`, edit the release's config file in `app/api/description/config/releases/`, and change `deprecated: false` to `deprecated: true`.
- [ ] Open a new PR, and get the required code owner approvals. A docs-content team member can approve it for the docs team.
- [ ] When the PR is approved, [deploy the `github/github` PR](https://thehub.github.com/epd/engineering/devops/deployment/deploying-dotcom/). If you haven't deployed a `github/github` PR before, work with someone that has -- the process isn't too involved depending on how you deploy, but there are a lot of details that can potentially be confusing as you can see from the documentation.

**Note**: you can do this step independently of the other steps after a GHES version is deprecated since it should no longer get updates in github/github. You should plan to get this PR merged as soon as possible, otherwise if you wait too long our OpenAPI automation may re-add the static files that you removed in step 5.

## Step 9: Continue to deprecate the version in docs-internal

- [ ] Open a new PR. Make sure to check the following:
  - [ ] Tests are passing (you may need to include the changes in step 6 to get tests to pass).
  - [ ] The deprecated version renders in preview as expected. You should be able to navigate to `docs.github.com/enterprise/<DEPRECATED VERSION>` to access the docs. You should also be able to navigate to a page that is available in the deprecated version and change the version in the URL to the deprecated version, to test redirects.
  - [ ] The new oldest supported version renders on staging as expected. You should see a banner on the top of every page for the oldest supported version that notes when the version will be deprecated.

## Re-scraping a page or all pages

Occasionally, a change will need to be added to our archived enterprise versions. If this occurs, you can check out the `enterprise-<release number>-release` branch and re-scrape the page or all pages using `script/enterprise-server-deprecations/archive-version.js`. To scrape a single page you can use the `—page <page relative path>` option.

For each language, upload the new file to Azure blob storage in the `enterprise` container.

After uploading the new files, you will need to purge the Fastly cache for the single page. From Okta, go to Fastly and select `docs`. Click `Purge` then `Purge URL`. If you need to purge a whole path, just do a `Purge All`

![](/contributing/images/fastly_purge.jpg)

Enter the URL or path and do a soft purge.

![](/contributing/images/fastly_purge_url.jpg)
