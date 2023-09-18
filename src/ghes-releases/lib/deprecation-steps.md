# Deprecation steps for GHES releases

The day after a GHES version's [deprecation date](https://github.com/github/docs-internal/tree/main/src/ghes-releases/lib/enterprise-dates.json), a banner on the docs will say: `This version was deprecated on <date>.` This is all users need to know. However, we don't want to update those docs anymore or link to them in the nav. Follow the steps in this issue to **archive** the docs.

**Note**: Each step below, except step 0, must be done in order. Only move on to the next step after successfully completing the previous step.

The following large repositories are used throughout this checklist, it may be useful to clone them before you begin:

- `github/github`
- `github/docs-internal`

Additionally, you can download:

- [Azure Storage Explorer](https://aka.ms/portalfx/downloadstorageexplorer)

## Step 0: Remove deprecated version numbers from docs-content issue forms

- [ ] Completed step 0 ✅

**Note**: This step can be performed independently of all other steps, and can be done several days before or along with the other steps.

In the `docs-content` repo, remove the deprecated GHES version number from the `options` list in [`release-tracking.yml`](https://github.com/github/docs-content/blob/main/.github/ISSUE_TEMPLATE/release-tracking.yml).

When the PR is approved, merge it in.

## Step 1: Before beginning the deprecation, ensure the date of the deprecation is correctly defined

- [ ] Completed step 1 ✅

The dates we use for Enterprise releases and deprecations are stored in [releases](https://github.com/github/enterprise-releases/blob/master/releases.json). However, that file isn't always up-to-date when deprecations get pushed out. This date is added to `src/ghes-releases/lib/enterprise-dates.json`, stored in this repo.

1. Check that the deprecation date is correct by looking up the version you are deprecating in the [release date list](https://github.com/github/enterprise-releases/blob/master/releases.json) and finding the corresponding `prp` owner. Send them a slack message to confirm that the date is correct.

   If there is no `prp` defined, reach out to our content friends for help in the #docs-content-enterprise Slack channel.

2. If the actual deprecation date differs from what we have documented in `src/ghes-releases/lib/enterprise-dates.json`, update the date in that file. If the date is correct, there is nothing to do. The date in `src/ghes-releases/lib/enterprise-dates.json` will be the date used in the deprecation banner of the scraped content.

## Step 2: Dry run: Scrape the docs and archive the files

- [ ] Completed step 2 ✅

1. You can do this on the main branch or check out a new temporary branch.
1. Hide search component temporarily while scraping docs in `src/search/components/Search.tsx`, by adding the `visually-hidden` class to the `form` element:

    ```javascript
    return (
      <div data-testid="search">
        <div className="position-relative z-2">
          <form
            role="search"
            className="width-full d-flex visually-hidden"
    ```

1. Ensure your build is up to date:

    ```shell
    npm run build
    ```

1. Do a dry run by scraping a small amount of files to test locally on your machine. This command does not overwrite the references to asset files so they will render on your machine.

    ```shell
    node --max-old-space-size=8192 src/ghes-releases/scripts/archive-version.js --dry-run --local-dev
    ```

1. Navigate to the scraped files directory (`tmpArchivalDir_<VERSION_TO_DEPRECATE>`) inside your docs-internal checkout. Open a few HTML files and ensure they render and drop-down pickers work correctly.

1. If the dry-run looks good, scrape all content files. This will take about 20-30 minutes. **Note:**  This will overwrite the directory that was previously generated with new files. You can also create a specific output directory using the `--output` flag.

    ```shell
    node --max-old-space-size=8192 src/ghes-releases/scripts/archive-version.js
    ```

1. Revert changes to `src/search/components/Search.tsx`.

1. Check in any change to `src/ghes-releases/lib/enterprise-dates.json`.

## Step 3: Upload the scraped content directory to Azure storage

- [ ] Completed step 3 ✅

1. Log in to the Azure portal from Okta. You'll first need to use the Azure JIT tile in Okta, and request access. Then either logout after being redirected to Azure and log back in, or log into the normal Azure tile from Okta. That will force a refresh on your access and give you write permissions to upload files.

1. Once in Azure, navigate to the [githubdocs Azure Storage Blob resource](https://portal.azure.com/#@githubazure.onmicrosoft.com/resource/subscriptions/fa6134a7-f27e-4972-8e9f-0cedffa328f1/resourceGroups/docs-production/providers/Microsoft.Storage/storageAccounts/githubdocs/overview).

1. Upload the files. You can do this directly from the UI or using the Microsoft Azure Storage Explorer app. The app allows you more insight into the status of the upload and allows you to delete directories.

   UI method:

   1. Click `Containers` in the left sidebar, then click the `enterprise` container.

   1. Click `Upload` in the top bar. Drag and drop or click `Browse for files` to select the directory inside of `tmpArchivalDir_<VERSION_TO_DEPRECATE>`. For example, at the time of this writing, the directory name was `3.5`. The upload will take several minutes and the UI may not give feedback immediately. Don't close the browser tab or navigate away from the page until the upload is complete.
  
   App method:

   1. Open the Microsoft Azure Storage Explorer app from the `Overview` tab [githubdocs Azure Storage Blob resource page](https://portal.azure.com/#@githubazure.onmicrosoft.com/resource/subscriptions/fa6134a7-f27e-4972-8e9f-0cedffa328f1/resourceGroups/docs-production/providers/Microsoft.Storage/storageAccounts/githubdocs/overview).
   1. You'll need to navigate to the correct subscription, resource, and container.
   1. To upload, Click "Upload" and select "Upload folder." Click the "Selected folder" input to navigate to the temp directory you just generated. Inside that temp directory, select the `<VERSION_TO_DEPRECATE>` directory (e.g., `3.2`). Leave the destination directory input blank.

1. From the UI, click on the newly uploaded directory navigate to an HTML file. Clicking on the file will show you a metadata page for that file. Click the `URL` copy button. Navigate to that URL in your browser to see the rendered HTML page. Ensure that the pages render correctly and that the drop-down pickers work correctly.

1. Remove the temporarily created directory from your `github/docs-internal` checkout.

## Step 4: Test the archived static pages

- [ ] Completed step 4 ✅

1. In your `docs-internal` checkout, create a new branch: `git checkout -b deprecate-<version>`.

1. In your `docs-internal` checkout, edit `lib/enterprise-server-releases.js` by removing the version number to be deprecated from the `supported` array and move it to the `deprecatedWithFunctionalRedirects` array.

1. You can test that the static pages were generated correctly on localhost and on staging. Verify that the static pages are accessible by running `npm run dev` in your local `docs-internal` checkout and navigate to:
`http://localhost:3000/enterprise/<version>/`.

1. Poke around several deprecated pages by navigating to `docs.github.com/enterprise/<DEPRECATED VERSION>`, and ensure that:
   - Stylesheets are working properly
   - Images are rendering properly
   - The search functionality was disabled
   - Look at any console errors to ensure that no new unexpected errors were introduced. You can look at previous errors by viewing a previously completed deprecation page.
   - You should see a banner on the top of every deprecated page with the date that the version was deprecated.
   - You should see a banner at the top of every page for the oldes currently supported version with the date that it will be deprecated in the ~3 months.

## Step 5: Deprecate the version in docs-internal

- [ ] ✅ Completed step 5

1. In your `deprecate-<version>` branch, create a new branch: `git checkout -b deprecate-<version>`.
1. Ensure that CI is passing or make any changes to content needed to get tests to pass.
1. 🚢 Ship the change.

The version is now effectively deprecated. 🎉

## Step 🎉: You can complete the remaining steps in any order. And get a snack, you deserve it! 🍪

## Step 6: Create a tag

- [ ] ✅ Completed step 6

1. Create a new tag for the most recent commit on the `main` branch so that we can keep track of where in commit history we removed the GHES release. Create a tag called `enterprise-<release number>-release`. To create only a tag and not a release, you can [create a new release](https://github.com/github/docs-internal/releases), which allows you to "Choose a tag." Select add a new tag and use the tag name as the release title. After creating the new release, you wil see the new tag as well. You can then delete the release.

## Step 7: Remove static files for the version

- [ ] Completed step 7 ✅

1. In your `docs-internal` checkout, create a new branch: `git checkout -b remove-<version>-data-files`.

1. Run `src/ghes-releases/scripts/sync-automated-pipeline-data.js` and commit results.

1. Manually delete the deprecated directory in `data/graphql`. For example, if you are deprecating the 3.5 release, you'd delete the `data/graphql/ghes-3.5` directory.

1. Open a new PR. Reviewers will be automatically assigned. 

1. When the PR is approved, merge it in. 🚢

## Step 8: Remove the liquid conditionals and content for the version

- [] Completed step 8 ✅

1. In your `docs-internal` checkout, create a new branch `remove-<version>-markup` branch: `git checkout -b remove-<version>-markup`.

1. Remove the outdated Liquid markup and frontmatter.

   ```shell
   src/ghes-releases/scripts/remove-version-markup.js --release <number>
   ```

1. If data resuables were deleted automatically, you'll need to remove references to the deleted reusable in the content. Using VSCode to find the occurrences is quick and there are typically only a few to update. If you have any questions, reach out to the docs-content team in #docs-content to ask for help updating the Markdown files.

1. Open a PR with the results.

1. There are typically a few bugs in the updated Markdown, which will be caught by CI. Check the tests, and fix any bugs you find. For example, a liquid end tag may be removed but the start tag still exists. There are typically only a few bugs to fix. The script does a pretty great job of fixing most use cases, so this is typically a lightweight task. If there are several errors, something is likely broken and should be fixed in the script.

1. When the CI is 🍏, add the PR to the [docs content review board](https://github.com/orgs/github/projects/2936/views/2) for a docs-content writer to pick up and review. When the PR is approved, merge it in to complete the deprecation.

## Step 8: Deprecate the OpenAPI description in `github/github`

1. In `github/github`, edit the release's config file in `app/api/description/config/releases/`, and change `deprecated: false` to `deprecated: true`.

1. Open a new PR, and get the required code owner approvals. A docs-content team member can approve it for the docs team.

1. When the PR is approved, [deploy the `github/github` PR](https://thehub.github.com/epd/engineering/devops/deployment/deploying-dotcom/). If you haven't deployed a `github/github` PR before, work with someone that has -- the process isn't too involved depending on how you deploy, but there are a lot of details that can potentially be confusing as you can see from the documentation.

## Re-scraping a page or all pages

Occasionally, a change will need to be added to our archived enterprise versions. If this occurs, you can check out the `enterprise-<release number>-release` branch and re-scrape the page or all pages using `src/ghes-releases/scripts/archive-version.js`. To scrape a single page you can use the `—page <page relative path>` option.

For each language, upload the new file to Azure blob storage in the `enterprise` container.

After uploading the new files, you will need to purge the Fastly cache for the single page. From Okta, go to Fastly and select `docs`. Click `Purge` then `Purge URL`. If you need to purge a whole path, just do a `Purge All`

![The Fastly UI URL purge drop-down selector options.](/contributing/images/fastly_purge.jpg)

Enter the URL or path and do a soft purge.

![The Fastly UI purging guide.](/contributing/images/fastly_purge_url.jpg)
