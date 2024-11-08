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

- The `VERSION` can be any numbered supported GitHub Enterprise Server version (e.g., `3.12`), Enterprise Cloud (`ghec`), or the Free pro team plan (`dotcom`).
- The `LANGUAGE CODE` can be one of: `zh`, `es`, `pt`, `ru`, `ja`, `fr`, `de`, `ko`
- The `QUERY` can be any alphanumeric string value.

## Types of search

Our backend currently supports 3 "types" of searching.

All searches accept a `query` param, e.g. `?query=how` and return results based on their type:

1. **general search**
  - Results: The pages of our sites that match the query, sorted by popularity
  - Example: Query = "clone" -> Results <URLs to Docs Page about cloning>
  - Endpoint: `/api/search/v1`
2. **general autocomplete**
  - Results: Potential terms that can be autocompleted from the query based on previous user searches
  - Example: Query = "cl" -> A Result = "clone"
  - Endpoint: `/api/search/autocomplete/v1`
3. **AI search autocomplete**
  - Results: Human-readable full-sentence questions that best match the query. Questions are based on previous searches and popular pages
  - Example: Query = "How do I clone" -> A Result = "How do I clone a repository?"
  - Endpoint: `/api/search/ai-search-autocomplete/v1`

## Elasticsearch

Elasticsearch is an external service that we use for searching. When a user types a search, our backend queries Elasticsearch for the most relevant results.

### Indexing Elasticsearch

In order to provide relevant results to queries, we prefill Elasticsearch with data via Indexes. See the [Indexing README](./scripts/index/README.md) for how we index on Docs.

## Production deploys

A [GitHub Actions workflow](/.github/workflows/sync-search-elasticsearch.yml) that runs every twenty four hours syncs the search data. This process generates structured data for all pages on the site, compares that data to what's currently on search, then adds, updates, or removes indices based on the diff of the local and remote data, being careful not to create duplicate records and avoiding any unnecessary (and costly) indexing operations.

The workflow runs are only accessible to GitHub employees using internal resources.

## Manually triggering the search index update workflow

You can manually run the workflow to generate the indexes after you push your changes to `main` to speed up the indexing when needed. It's recommended to do this for only the `free-pro-team@latest` version and the `en` language because running all languages and versions takes about 40 minutes. To run it manually, click "Run workflow" button in the Actions tab. Enter the language and version you'd like to generate the indexes for as inputs to the workflow. By default, all languages and versions are generated.

### Build and sync

The preferred way to build and sync the search indices is to do so via the [GitHub Actions workflow](/.github/workflows/index-general-search.yml).

## Files

### Actions workflow files

- [`.github/workflows/index-general-search.yml`](/.github/workflows/index-general-search.yml) - Populates search indices for **general search** using the `main` branch every four hours. Search indices are stored in an internal-only Elasticsearch instance. To run it manually, click "Run workflow" button in the Actions tab.
- [`.github/workflows/index-autocomplete-search.yml`](/.github/workflows/index-general-search.yml) - Populates search indices for both **general autocomplete** and **AI search autocomplete** using data from an internal repo. Runs daily. 

### Notable code files and directories

- [src/search/components/Search.tsx](/src/search/components/Search.tsx) - The browser-side code that enables the search.
- [src/search/components/SearchResults.tsx](/src/search/components/SearchResults.tsx) - The browser-side code that displays search results.
- [src/search/middleware/general-search-middleware.ts](src/search/middleware/general-search-middleware.ts) - Entrypoint to general search when you hit docs.github/search
- [src/search/middleware/search-routes](src/search/middleware/general-search-middleware.ts) - Entrypoint to the API endpoints for our search routes
- [src/search/scripts/](/src/search/scripts/) - Scripts used by Actions workflows or for manual operations like scraping data for indexing and performing the indexing.
- [src/search/tests](/src/search/tests) - Tests relevant to searching.

## Miscellaneous Notes

- It's not strictly necessary to set an `objectID` as the search index will create one automatically, but by creating our own we have a guarantee that subsequent invocations of this upload script will overwrite existing records instead of creating numerous duplicate records with differing IDs.
- Our search querying has typo tolerance. Try spelling something wrong and see what you get!
- Our search querying has lots of controls for customizing each index, so we can add weights to certain attributes and create rules like "title is more important than body", etc. But it works pretty well as-is without any configuration.
- Our search querying has support for "advanced query syntax" for exact matching of quoted expressions and exclusion of words preceded by a `-` sign. This is off by default, but it is enabled in our browser client. The settings in the web interface can be overridden by the search endpoint. See [middleware/search.js](middleware/search.js).
- When needed, the Docs Engineering team can commit updates to the search index, as long as the label `skip-index-check` is applied to the PR.
