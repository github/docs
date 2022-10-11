## Overview

The day after a GHES version's [deprecation date](https://github.com/github/docs-internal/tree/main/lib/enterprise-dates.json), a banner on the docs will say: `This version was deprecated on <date>.` This is all users need to know. However, we don't want to update those docs anymore or link to them in the nav.  Follow the steps in this issue to **archive** the docs.

**Note**: Do each step below in a separate PR. Only move on to the next step when the previous PR has been merged.

## Step 1: Scrape the docs and archive the files

- [ ] In your checkout of the [repo with archived GHES content](https://github.com/github/help-docs-archived-enterprise-versions), create a new branch: `git checkout -b deprecate-<version>`
- [ ] In your `docs-internal` checkout, download the static files for the oldest supported version into your archival checkout:
    ```
    $ script/enterprise-server-deprecations/archive-version.js -p <path-to-archive-repo-checkout>
    ```
    If your checkouts live in the same directory, this command would be:
    ```
    $ script/enterprise-server-deprecations/archive-version.js -p ../help-docs-archived-enterprise-versions
    ```
    **Note:** You can pass the `--dry-run` flag to scrape only the first 10 pages plus their redirects for testing purposes.
  
## Step 2: Upload the assets directory to Azure storage

- [ ] Log in to the Azure portal from Okta. Navigate to the [githubdocs Azure Storage Blob resoruce](https://portal.azure.com/#@githubazure.onmicrosoft.com/resource/subscriptions/fa6134a7-f27e-4972-8e9f-0cedffa328f1/resourceGroups/docs-production/providers/Microsoft.Storage/storageAccounts/githubdocs/overview).
- [ ] Click the "Open in Explorer" button to the right of search box.If you haven't already, click the download link to download "Microsoft Azure Storage Explorer." To login to the app, click the plug icon in the left sidebar and click the option to "add an azure account." When you login, you'll need a yubikey to authenticate through Okta.
- [ ] From the Microsoft Azure Storage Explorer app, select the `githubdocs` storage account resource and navigate to the `github-images` blob container. 
- [ ] Click "Upload" and select "Upload folder." Click the "Selected folder" input to navigate to the `help-docs-archived-enterprise-versions` repository and select the `assets` directory for the version you just generated. In the "Destination folder" input, add the version number. For example, `/enterprise/2.22/`.
- [ ] Check the log to ensure all files were uploaded successfully.
- [ ] Removed the `assets` directory from the `/help-docsc-archived-enterprise-versions` repository.

## Step 3: Commit and push changes to help-docs-archived-enterprise-versions repo

- [ ] In your archival checkout, `git add <version>`, commit, and push.
- [ ] Open a PR and merge it in. Note that the version will _not_ be deprecated on the docs site until you do the next step.

## Step 4: Deprecate the version in docs-internal

In your `docs-internal` checkout:
- [ ] Create a new branch: `git checkout -b deprecate-<version>`.
- [ ] Edit `lib/enterprise-server-releases.js` by moving the number to be deprecated into the `deprecated` array.
- [ ] Run `script/enterprise-server-deprecations/remove-static-files.js` and commit results.
- [ ] Manually remove entries for the deprecated version from `lib/redirects/static/developer-docs-routes-for-supported-versions.json`.
    - **Note**: These entries only go up to 2.21. We can remove this step once 2.21 is deprecated.
- [ ] Open a new PR. Make sure to check the following:
    - [ ] Tests are passing.
    - [ ] The deprecated version renders on staging as expected.
    - [ ] The new oldest supported version renders on staging as expected. Also check the banner text.
- [ ] When the PR is approved, merge it in to complete the deprecation.

## Step 5: Remove outdated Liquid markup and frontmatter

The following steps are somewhat optional and can be completed at any time. They do not have user impact; they just clear out old Liquid statements for the deprecated version, which makes things easier for content writers.

In your `docs-internal` checkout:
- [ ] Create a new branch: `git checkout -b remove-<version>-markup`
- [ ] Run the script: `script/remove-deprecated-enterprise-version-markup.js --release <number>`.
- [ ] Spot check a few changes. Content, frontmatter, and data files should all have been updated.
- [ ] Open a PR with the results. The diff may be large and complex, so make sure to get a review from `@github/docs-content`.
- [ ] Debug any test failures or unexpected results.
