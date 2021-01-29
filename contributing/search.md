# Search

## Overview

This site's search functionality is powered by [Algolia](https://www.algolia.com), a third-party service.

To see all existing search-related issues and pull requests, visit [github.com/github/docs/labels/search](https://github.com/github/docs/labels/search).

---

![search-screenshot](https://user-images.githubusercontent.com/2289/65067899-68bd1c80-d93c-11e9-93ec-f57293e56113.png)

---

## How to search

The site search is part of every version of docs.github.com. On any page, you can use the search box to search the documents we've indexed. 
You can also query our search endpoint directly at: https://docs.github.com/search?language=en&version=dotcom&query=jekyll
This endpoint responds in JSON format, and fronts Algolia and Lunr. We recommend using this endpoint over directly integrating with Algolia or Lunr, as the endpoint will be more stable.

## Production deploys

A [GitHub Actions workflow](.github/workflows/sync-algolia-search-indices.yml) triggered by pushes to the `main` branch syncs the search data to Algolia. This process generates structured data for all pages on the site, compares that data to what's currently on Algolia, then adds, updates, or removes indices based on the diff of the local and remote data, being careful not to create duplicate records and avoiding any unnecessary (and costly) indexing operations.

The Actions workflow progress can be viewed (by GitHub employees) in the [Actions tab](https://github.com/github/docs/actions?query=workflow%3AAlgolia) of the repo.

Because the workflow runs after a branch is merged to `main`, there is a slight delay for search data updates to appear on the site.

## Manual sync from a checkout

It is also possible to manually sync the indices to Algolia from your local checkout of the repo, before your branch is merged to `main`.

**Prerequisite:** Make sure the environment variables `ALGOLIA_APPLICATION_ID` and `ALGOLIA_API_KEY` are set in your `.env` file. You can find these values on [Algolia](https://www.algolia.com/apps/ZI5KPY1HBE/api-keys/all).

### Build without sync (dry run)

To build all the indices without uploading them to Algolia's servers (this takes about an hour):
```
npm run sync-search-dry-run
```
To build indices for a specific language and/or version (this is much faster):
```
VERSION=<PLAN@RELEASE> LANGUAGE=<TWO-LETTER CODE> npm run sync-search-dry-run
```
You can set `VERSION` and `LANGUAGE` individually, too.

Substitute a currently supported version for `<PLAN@RELEASE>` and a currently supported two-letter language code for `<TWO-LETTER-CODE>`.

### Build and sync

To build all the indices and sync them to Algolia (this also takes about an hour):
```
npm run sync-search
```
To build indices for a specific language and/or version and sync them to Algolia:
```
VERSION=<PLAN@RELEASE LANGUAGE=<TWO-LETTER CODE> npm run sync-search
```
You can set `VERSION` and `LANGUAGE` individually, too.

Substitute a currently supported version for `<PLAN@RELEASE>` and a currently supported two-letter language code for `<TWO-LETTER-CODE>`.

## Label-triggered Actions workflow

Docs team members can use an Actions workflow on GHES release PRs by applying a label in this format:
```
sync-english-index-for-<PLAN@RELEASE>
```
This label will run a workflow on every push that **builds and uploads ONLY** the English index for the specified version. This means:

* The GHES content will be searchable at the same time the release PR is shipped, with no delay.
* The GHES content will be searchable on staging throughout content creation.
* No manual steps (unless you want to do a [dry run test](#build-without-sync-dry-run)).

Why do we need this? For our daily shipping needs, it's tolerable that search updates aren't available for up to an hour after the content goes live. But GHES releases are more time-sensitive, and writers have a greater need to preview search data on staging.

## Files

### Actions workflow files

- [`.github/workflows/sync-algolia-search-indices.yml`](.github/workflows/sync-algolia-search-indices.yml) - Builds and syncs search indices whenever the `main` branch is pushed to (that is, on production deploys).
- [`.github/workflows/dry-run-sync-algolia-search-indices.yml`](.github/workflows/dry-run-sync-algolia-search-indices.yml) - This workflow can be run manually (via `workflow_dispatch`) to do a dry run build of all the indices. Useful for confirming that the indices can build without erroring out.
- [`.github/workflows/sync-single-english-algolia-index.yml`](.github/workflows/sync-single-english-algolia-index.yml) - This workflow is run when a label in the right format is applied to a PR. See "[Label-triggered Actions workflow](#label-triggered-actions-workflow)" for details.

### Code files

- [javascripts/search.js](javascripts/search.js) - The browser-side code that enables search.
- [lib/search/algolia-client.js](lib/search/algolia-client.js) - A thin wrapper around the [algoliasearch](https://ghub.io/algoliasearch) Node.js module for interacting with the Algolia API.
- [lib/search/algolia-search-index.js](lib/search/algolia-search-index.js) - A class for generating structured search data from repository content and syncing it with the remote Algolia service. This class has built-in validation to ensure that all records are valid before they're uploaded. This class also takes care of removing deprecated records, and compares existing remote records with the latest local records to avoid uploading records that haven't changed.
- [script/sync-search-indices.js](script/sync-search-indices.js) - The script used by the Actions workflow to update search indices on our Algolia account. This can also be [run in the development environment](#development).
- [tests/algolia-search.js](tests/algolia-search.js) - Tests!

## Indices

There's a separate search index for each combination of product and language. Some examples:

Index Name | Description
---------- | -----------
`github-docs-dotcom-cn` | GitHub.com Chinese
`github-docs-dotcom-en` | GitHub.com English
`github-docs-dotcom-es` | GitHub.com Spanish
`github-docs-dotcom-ja` | GitHub.com Japanese
`github-docs-2.18-cn` | GitHub Enterprise 2.18 Chinese
`github-docs-2.18-en` | GitHub Enterprise 2.18 English
`github-docs-2.18-es` | GitHub Enterprise 2.18 Spanish
`github-docs-2.18-ja` | GitHub Enterprise 2.18 Japanese
`github-docs-2.17-cn` | GitHub Enterprise 2.17 Chinese
`github-docs-2.17-en` | GitHub Enterprise 2.17 English
`github-docs-2.17-es` | GitHub Enterprise 2.17 Spanish
`github-docs-2.17-ja` | GitHub Enterprise 2.17 Japanese

## Records

Each record represents a section of a page. Sections are derived by splitting up pages by their headings. Each record has a `title`, `intro` (if one exists in the frontmatter), `body` content (in text, not HTML), a `url`, and a unique `objectID` that is currently just the permalink of the article. Here's an example:

```js
{
  objectID: '/en/actions/creating-actions/about-actions#about-actions',
  url: 'https://help.github.com/en/actions/creating-actions/about-actions#about-actions',
  slug: 'about-actions',
  breadcrumbs: 'GitHub Actions / Creating actions / About actions',
  heading: 'About actions',
  title: 'About actions',
  content: "You can create actions by writing custom code that interacts with your repository in any way you'd like..."
}
```

## Notes

- It's not strictly necessary to set an `objectID` as Algolia will create one automatically, but by creating our own we have a guarantee that subsequent invocations of this upload script will overwrite existing records instead of creating numerous duplicate records with differing IDs.
- Algolia has typo tolerance. Try spelling something wrong and see what you get!
- Algolia has lots of controls for customizing each index, so we can add weights to certain attributes and create rules like "title is more important than body", etc. But it works pretty well as-is without any configuration.
- Algolia has support for "advanced query syntax" for exact matching of quoted expressions and exclusion of words preceded by a `-` sign. This is off by default but we have it enabled in our browser client. This and many other settings can be configured in Algolia.com web interface. The settings in the web interface can be overridden by the search endpoint. See [middleware/search.js]([middleware/search.js).
