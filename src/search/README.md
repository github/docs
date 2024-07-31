# Search

## Overview

This site's search functionality.

---

![Screenshot of the search results page for GitHub docs with the example keyword "git".](/assets/images/contributing/search-results.png)

---

## How to search

The site search is part of every version of docs.github.com. This endpoint responds in JSON format, and fronts our search querying functionality. We recommend using this endpoint, as the endpoint will be more stable. On any page, you can use the search box to search the documents we've indexed.
You can also query our search endpoint directly at:
`https://docs.github.com/search?version=<VERSION>&language=<LANGUAGE CODE>&query=<QUERY>`

- The VERSION can be any numbered supported GitHub Enterprise Server version (e.g., `3.12`), Enterprise Cloud (`ghec`), or the Free pro team plan (`dotcom`).
- The LANGUAGE CODE can be one of: `zh`, `es`, `pt`, `ru`, `ja`, `fr`, `de`, `ko`
- Any search QUERY you'd like.

## Production deploys

A [GitHub Actions workflow](/.github/workflows/sync-search-elasticsearch.yml) that runs every four hours syncs the search data. This process generates structured data for all pages on the site, compares that data to what's currently on search, then adds, updates, or removes indices based on the diff of the local and remote data, being careful not to create duplicate records and avoiding any unnecessary (and costly) indexing operations.

The workflow runs are only accessible to GitHub employees using internal resources.

## Manually triggering the search index update workflow

You can manually run the workflow to generate the indexes after you push your changes to `main` to speed up the indexing when needed. It's recommended to do this for only the `free-pro-team@latest` version and the `en` language because running all languages and versions takes about 40 minutes. To run it manually, click "Run workflow" button in the Actions tab. Enter the language and version you'd like to generate the indexes for as inputs to the workflow. By default, all languages and versions are generated.

### Build and sync

The preferred way to build and sync the search indices is to do so via the [GitHub Actions workflow](/.github/workflows/sync-search-elasticsearch.yml).

## Files

### Actions workflow files

- [`.github/workflows/sync-search-elasticsearch.yml`](/.github/workflows/sync-search-elasticsearch.yml) - Builds and syncs search indices on the `main` branch every four hours. Search indices are stored in an internal-only Elasticsearch instance. To run it manually, click "Run workflow" button in the Actions tab.

### Notable code files and directories

- [src/search/components/Search.tsx](/src/search/components/Search.tsx) - The browser-side code that enables the search.
- [src/search/components/SearchResults.tsx](/src/search/components/SearchResults.tsx) - The browser-side code that displays search results.
- [src/search/middleware/es-search.js](/src/search/middleware/es-search.js) - A wrapper around the Node.js Elasticsearch module for interacting with the search API.
- [src/search/scripts/](/src/search/scripts/) - Scripts used by Actions workflows or for manual operations.
- [src/search/tests](/src/search/tests) - Tests!

## Records

Each record represents a page. Each record has `breadcrumbs`, `title`, `headings`, `content` (the article content in text, not HTML), `intro` (if one exists in the frontmatter), and a unique `objectID` that is currently just the permalink of the article. Here's an example:

```json
{
  "objectID":"/en/actions/creating-actions/about-custom-actions",
  "breadcrumbs":"GitHub Actions / Creating actions",
  "title":"About custom actions",
  "headings":"About custom actions\nTypes of actions\n[...]",
  "content":"Actions are individual tasks that you can combine to create jobs and customize your workflow. You can create your own actions, [...]",
  "intro":"Actions are individual tasks that you can combine to create jobs and customize your workflow. You can create your own actions, or use and customize actions shared by the GitHub community.",
  "toplevel":"GitHub Actions",
  "popularity":0
}
```

## Notes

- It's not strictly necessary to set an `objectID` as the search index will create one automatically, but by creating our own we have a guarantee that subsequent invocations of this upload script will overwrite existing records instead of creating numerous duplicate records with differing IDs.
- Our search querying has typo tolerance. Try spelling something wrong and see what you get!
- Our search querying has lots of controls for customizing each index, so we can add weights to certain attributes and create rules like "title is more important than body", etc. But it works pretty well as-is without any configuration.
- Our search querying has support for "advanced query syntax" for exact matching of quoted expressions and exclusion of words preceded by a `-` sign. This is off by default, but it is enabled in our browser client. The settings in the web interface can be overridden by the search endpoint. See [middleware/search.js](middleware/search.js).
- When needed, the Docs Engineering team can commit updates to the search index, as long as the label `skip-index-check` is applied to the PR.
