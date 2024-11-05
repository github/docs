---
title: Enterprise Server {{ release-number }} deprecation steps
labels:
  - enterprise deprecation
  - priority-1
  - time sensitive
---

# Deprecation steps for GHES releases

The day after a GHES version's [deprecation date](https://github.com/github/docs-internal/tree/main/src/ghes-releases/lib/enterprise-dates.json), a banner on the docs will say: `This version was deprecated on <date>.` This is all users need to know. However, we don't want to update those docs anymore or link to them in the nav. Follow the steps in this issue to **archive** the docs.

**Note**: Each step below, except step 0, must be done in order. Only move on to the next step after successfully completing the previous step.

The following large repositories are used throughout this checklist, it may be useful to clone them before you begin:

- `github/github`
- `github/docs-internal`

Additionally, you can download:

- [Azure Storage Explorer](https://aka.ms/portalfx/downloadstorageexplorer)

## Step 0: Before beginning the deprecation, ensure the date of the deprecation is correctly defined

- [ ] Completed step 0 ✅

1. Check that the deprecation date is correct by looking up the version you are deprecating in the [release date list](https://github.com/github/enterprise-releases/blob/master/releases.json) and finding the corresponding `prp` owner. Send them a slack message to confirm that the date is correct. If the date is being pushed out, you can ask the `prp` to update the date in the release date list. If the release date list does not get updated (it doesn't always) we have to prepare that our version of that file (`src/ghes-releases/lib/enterprise-dates.json`) will also be inaccurate.

   If there is no `prp` defined, reach out to our content friends for help in the #docs-content-enterprise Slack channel.

1. If this release is being pushed out, update the target date of this issue and you can wait to proceed with any futher steps.

## Step 1: Remove deprecated version numbers from docs-content issue forms

- [ ] Completed step 1 ✅

**Note**: This step can be performed independently of all other steps, and can be done several days before or along with the other steps.

In the `docs-content` repo, remove the deprecated GHES version number from the `options` list in [`release-tracking.yml`](https://github.com/github/docs-content/blob/main/.github/ISSUE_TEMPLATE/release-tracking.yml).

When the PR is approved, merge it in.

## Step 2: Dry run: Scrape the docs and archive the files

- [ ] Completed step 2 ✅

1. If the release date documented in the [release date list](https://github.com/github/enterprise-releases/blob/master/releases.json) is incorrect or differs from what we have documented in `src/ghes-releases/lib/enterprise-dates.json`, update the date in `src/ghes-releases/lib/enterprise-dates.json` to the correct deprecation date before proceeding with the deprecation. A banner is displayed on each page with a version that will be deprecated soon. The banner uses the dates defined in `src/ghes-releases/lib/enterprise-dates.json`.
1. Ensure you have local clones of the [translation repositories](#configuring-the-translation-repositories).
1. Update all translation directories to the latest `main` branch.
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
    npm run archive-version -- --dry-run --local-dev
    ```

1. Navigate to the scraped files directory (`tmpArchivalDir_<VERSION_TO_DEPRECATE>`) inside your docs-internal checkout. Open a few HTML files and ensure they render and drop-down pickers work correctly.

1. If the dry-run looks good, scrape all content files. This will take about 20-30 minutes. **Note:**  This will overwrite the directory that was previously generated with new files. You can also create a specific output directory using the `--output` flag.

    ```shell
    npm run archive-version
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

## Step 4: Deprecate the GHES release in docs-internal

- [ ] Completed step 4 ✅

This step will remove the version from the drop-down picker, effectively deprecating the version from a user's perspective. The content for the deprecated release will still exist in the Markdown files.

1. In your `docs-internal` checkout, create a new branch: `git checkout -b deprecate-<version>`.

1. In your `docs-internal` checkout, edit `src/versions/lib/enterprise-server-releases.js` by removing the version number to be deprecated from the `supported` array and move it to the `deprecatedWithFunctionalRedirects` array.

1. You can test that the static pages were generated correctly on localhost and on staging. Verify that the static pages are accessible by running `npm run dev` in your local `docs-internal` checkout and navigate to:
`http://localhost:3000/enterprise/<version>/`.

1. Poke around several deprecated pages by navigating to `docs.github.com/enterprise/<DEPRECATED VERSION>`, and ensure that:
   - Stylesheets are working properly
   - Images are rendering properly
   - The search functionality was disabled
   - Look at any console errors to ensure that no new unexpected errors were introduced. You can look at previous errors by viewing a previously completed deprecation page.
   - You should see a banner on the top of every deprecated page with the date that the version was deprecated.
   - You should see a banner at the top of every page for the oldes currently supported version with the date that it will be deprecated in the ~3 months.

1. If everything looks good, check in the changes to `src/versions/lib/enterprise-server-releases.js` and create a pull request.

1. Ensure that CI is passing or make any changes to content needed to get tests to pass.

1. 🚢 Ship the change.

## Step 5: Create a tag

- [ ] ✅ Completed step 5

1. Create a new tag for the most recent commit on the `main` branch so that we can keep track of where in commit history we removed the GHES release. Create a tag called `enterprise-<release number>-release`. To create only a tag and not a release, you can [create a new release](https://github.com/github/docs-internal/releases), which allows you to "Choose a tag." Select add a new tag and use the tag name as the release title. After creating the new release, you will see the new tag as well. You can then delete the release.

## Step 6: Remove static files and liquid conditionals for the version

- [ ] Completed step 6 ✅

1. In your `docs-internal` checkout, create a new branch: `git checkout -b remove-<version>-content`.

1. Run `src/ghes-releases/scripts/sync-automated-pipeline-data.js` and commit results.

1. Remove the outdated Liquid markup and frontmatter. **Note:** There are typically a few bugs in the updated Markdown, which will be caught by the content linter or CI. Fix any bugs you find. For example, a liquid end tag may be removed but the start tag still exists. There are typically only a few bugs to fix. The script does a pretty great job of fixing most use cases, so this is typically a lightweight task. If there are several errors, something is likely broken and should be fixed in the script.

   ```shell
   npm run remove-version-markup -- --release <number>
   ```

1. If data reusables were deleted automatically, you'll need to remove references to the deleted reusable in the content. Using VSCode to find the occurrences is quick and there are typically only a few to update. If you have any questions, reach out to the docs-content team in #docs-content to ask for help updating the Markdown files.

1. Open a new PR. When the CI is 🍏, add the PR to the [docs-content review board](https://github.com/orgs/github/projects/2936/views/2).

1. When the PR is approved, merge it in. 🚢

## Step 7: Deprecate the OpenAPI description in `github/github`

1. In `github/github`, edit the release's config file in `app/api/description/config/releases/`, and change `deprecated: false` to `deprecated: true`.

1. Open a new PR, and get the required code owner approvals. A docs-content team member can approve it for the docs team.

1. When the PR is approved, [deploy the `github/github` PR](https://thehub.github.com/epd/engineering/devops/deployment/deploying-dotcom/). If you haven't deployed a `github/github` PR before, work with someone that has -- the process isn't too involved depending on how you deploy, but there are a lot of details that can potentially be confusing as you can see from the documentation.

## Configuring the translation repositories

You can clone the translation repositories directly inside of your docs-internal checkout, but I'd recommend cloning them in a separate directory. For example, create a `translations` directory at the same level as your `docs-internal` directory. Inside of the `translations` directory, clone the following repoisitories (ensure this list includes all languages that we are supporting):

- [docs-internal.de-de](https://github.com/github/docs-internal.de-de)
- [docs-internal.fr-fr](https://github.com/github/docs-internal.fr-fr)
- [docs-internal.ko-kr](https://github.com/github/docs-internal.ko-kr)
- [docs-internal.ru-ru](https://github.com/github/docs-internal.ru-ru)
- [docs-internal.es-es](https://github.com/github/docs-internal.es-es)
- [docs-internal.ja-jp](https://github.com/github/docs-internal.ja-jp)
- [docs-internal.pt-br](https://github.com/github/docs-internal.pt-br)
- [docs-internal.zh-cn](https://github.com/github/docs-internal.zh-cn)

To map the location of each translation repository, edit your `.env` file with the mapping. For example, if following the locations suggested above, your `.env` file might look like this:

```shell
TRANSLATIONS=/Users/mona/repos/github-repos/translations
TRANSLATIONS_ROOT_ES_ES=${TRANSLATIONS}/docs-internal.es-es
TRANSLATIONS_ROOT_ZH_CN=${TRANSLATIONS}/docs-internal.zh-cn
TRANSLATIONS_ROOT_JA_JP=${TRANSLATIONS}/docs-internal.ja-jp
TRANSLATIONS_ROOT_PT_BR=${TRANSLATIONS}/docs-internal.pt-br
TRANSLATIONS_ROOT_FR_FR=${TRANSLATIONS}/docs-internal.fr-fr
TRANSLATIONS_ROOT_RU_RU=${TRANSLATIONS}/docs-internal.ru-ru
TRANSLATIONS_ROOT_KO_KR=${TRANSLATIONS}/docs-internal.ko-kr
TRANSLATIONS_ROOT_DE_DE=${TRANSLATIONS}/docs-internal.de-de
```

## Re-scraping a page or all pages

Occasionally, a change will need to be added to our archived enterprise versions. If this occurs, you can check out the `enterprise-<release number>-release` branch and re-scrape the page or all pages using `npm run archive-version`. To scrape a single page you can use the `—page <page relative path>` option.

For each language, upload the new file to Azure blob storage in the `enterprise` container.

After uploading the new files, you will need to purge the Fastly cache for the single page. From Okta, go to Fastly and select `docs`. Click `Purge` then `Purge URL`. If you need to purge a whole path, just do a `Purge All`

![The Fastly UI URL purge drop-down selector options.](/contributing/images/fastly_purge.jpg)

Enter the URL or path and do a soft purge.

![The Fastly UI purging guide.](/contributing/images/fastly_purge_url.jpg)
