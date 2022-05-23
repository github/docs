# Search

## Overview

This site's search functionality.

To see all existing search-related issues and pull requests, visit [github.com/github/docs/labels/search](https://github.com/github/docs/labels/search).

---

![search-screenshot](https://user-images.githubusercontent.com/2289/65067899-68bd1c80-d93c-11e9-93ec-f57293e56113.png)

---

## How to search

The site search is part of every version of docs.github.com. This endpoint responds in JSON format, and fronts our search querying functionality. We recommend using this endpoint, as the endpoint will be more stable. On any page, you can use the search box to search the documents we've indexed.
You can also query our search endpoint directly at: 
`https://docs.github.com/search?version=<VERSION>&language=<LANGUAGE CODE>&filters=topics:<TOPIC>&query=<QUERY>`
 
- The VERSION can be any numbered GitHub Enterprise Server version (e.g., `2.22`, `3.0`), GitHub AE (`ghae`), or the Free pro team plan (`dotcom`).
- The LANGUAGE CODE can be: `cn`, `de`, `en`, `es`, `ja`, or `pt`.
- TOPIC can be any topics in [the allowed list of topics](/data/allowed-topics.js). The values in the `topics` attribute are **not** case sensitive, so filtering on `GitHub actions` or `github actions` will return the same result. **Note:** Currently, the topics filter only works for the dotcom version in the English language. We plan to expand this search query to other languages and versions in the future.
- Any search QUERY you'd like.

For example, to filter on the topic `ssh` and the query `passphrases`, you'd use this search query:

https://docs.github.com/search?version=dotcom&language=en&filters=topics:ssh&query=passphrases

To filter for the topics `oauth apps` and `github apps` and the query `install`, you'd use this search query:

https://docs.github.com/search?version=dotcom&language=en&filters=topics:'oauth apps'+AND+topics:'github apps'&query=install

### Using the topics search filter

Using the attribute `topics` in your query will only return results that have the matching topic value. When the topic contains spaces, you must use quotes. Filters with spaces or combining filters requires special syntax.

## Production deploys

A [GitHub Actions workflow](.github/workflows/sync-search-indices.yml) that runs every four hours syncs the search data. This process generates structured data for all pages on the site, compares that data to what's currently on search, then adds, updates, or removes indices based on the diff of the local and remote data, being careful not to create duplicate records and avoiding any unnecessary (and costly) indexing operations.

The Actions workflow progress can be viewed (by GitHub employees) in the [Actions tab](https://github.com/github/docs/actions?query=workflow%3Asearch) of the repo.

## Manually triggering the search index update workflow

You can manually run the workflow to generate the indexes after you push your changes to `main` to speed up the indexing when needed. It's recommended to do this for only the `free-pro-team@latest` version and the `en` language because running all languages and versions takes about 40 minutes. To run it manually, click "Run workflow" button in the [Actions tab](https://github.com/github/docs-internal/actions/workflows/sync-search-indices.yml). Enter the language and version you'd like to generate the indexes for as inputs to the workflow. By default, all languages and versions are generated.

## Generating search indexes for your local checkout

You can locally generate search indexes, but please do not check them into your local branch because they can get out-of-sync with the `main` branch quickly.

To locally generate the English version of the Dotcom search index locally, run `LANGUAGE=en VERSION=free-pro-team@latest npm run sync-search`. See [Build and sync](#build-and-sync) below for more details. To revert those files run `git checkout lib/search/indexes`.

### Build and sync

To build all the indices (this takes about an hour):
```
npm run sync-search
```
To build indices for a specific language and/or version and sync them:
```
VERSION=<PLAN@RELEASE LANGUAGE=<TWO-LETTER CODE> npm run sync-search
```
You can set `VERSION` and `LANGUAGE` individually, too.

Substitute a currently supported version for `<PLAN@RELEASE>` and a currently supported two-letter language code for `<TWO-LETTER-CODE>`. Languages and versions are lowercase. The options for version are currently `free-pro-team`, `github-ae`, and `enterprise-server`.

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

- [`.github/workflows/sync-search-indices.yml`](.github/workflows/sync-search-indices.yml) - Builds and syncs search indices on the `main` branch every four hours. Search indices are committed directly to the `main` branch on both the `github/docs-internal` and `github/docs` repositories. It can also be run manually. To run it manually, click "Run workflow" button in the [Actions tab](https://github.com/github/docs-internal/actions/workflows/sync-search-indices.yml).
- [`.github/workflows/sync-single-english-index.yml`](.github/workflows/sync-single-english-index.yml) - This workflow is run when a label in the right format is applied to a PR. See "[Label-triggered Actions workflow](#label-triggered-actions-workflow)" for details.

### Code files

- [components/lib/search.ts](components/lib/search.ts) - The browser-side code that enables search.
- [lib/search/client.js](lib/search/client.js) - A thin wrapper around the Node.js module for interacting with the search API.
- [lib/search/search-index.js](lib/search/search-index.js) - A class for generating structured search data from repository content and syncing it. This class has built-in validation to ensure that all records are valid before they're uploaded. This class also takes care of removing deprecated records, and compares existing remote records with the latest local records to avoid uploading records that haven't changed.
- [script/sync-search-indices.js](script/sync-search-indices.js) - The script used by the Actions workflow to update search indices. This can also be [run in the development environment](#development).
- [tests/content/search.js](tests/content/search.js) - Tests!

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
  url: 'https://docs.github.com/en/actions/creating-actions/about-actions#about-actions',
  slug: 'about-actions',
  breadcrumbs: 'GitHub Actions / Creating actions / About actions',
  heading: 'About actions',
  title: 'About actions',
  content: "You can create actions by writing custom code that interacts with your repository in any way you'd like..."
}
```

## Notes

- It's not strictly necessary to set an `objectID` as the search index will create one automatically, but by creating our own we have a guarantee that subsequent invocations of this upload script will overwrite existing records instead of creating numerous duplicate records with differing IDs.
- Our search querying has typo tolerance. Try spelling something wrong and see what you get!
- Our search querying has lots of controls for customizing each index, so we can add weights to certain attributes and create rules like "title is more important than body", etc. But it works pretty well as-is without any configuration.
- Our search querying has support for "advanced query syntax" for exact matching of quoted expressions and exclusion of words preceded by a `-` sign. This is off by default but we have it enabled in our browser client. The settings in the web interface can be overridden by the search endpoint. See [middleware/search.js]([middleware/search.js).
- When needed, the Docs Engineering team can commit updates to the search index, as long as the label `skip-index-check` is applied to the PR.