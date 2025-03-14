# Elastic Search Indexing

Elasticsearch uses indexes to store the data that is used to determine search results.

We use this scripts in this directory to index our Elasticsearch instances.

In production, the indexing happens in the GitHub workflows: `index-autocomplete-search.yml` and `index-general-search.yml`

## CLI Script

Before running the indexing for **general search** you run the [scrape](../scrape/README.md) script to scrape page data into files.

Before running the indexing for **general autocomplete** and **AI search autocomplete** you need to clone [docs-internal-data](https://github.com/github/docs-internal-data) to the root of this directory.

There is a separate run command for indexing each type of search data:
1. **general search**: `npm run index-general-search -- <scrape-directory>`
2. **general autocomplete**: `npm run index-general-autocomplete -- docs-internal-data` (if `docs-internal-data` is cloned to root directory)
3. **AI search autocomplete**: `npm run index-ai-search-autocomplete -- docs-internal-data` (if `docs-internal-data` is cloned to root directory)

To see the arguments accepted by any script, pass the `--help` argument, for example

```bash
npm run index-general-autocomplete -- --help
```