## Search

This site's search functionality is powered by [Algolia](https://www.algolia.com), a third-party service.

To see all existing search-related issues and pull requests, visit [github.com/github/docs/labels/search](https://github.com/github/docs/labels/search).

---

![search-screenshot](https://user-images.githubusercontent.com/2289/65067899-68bd1c80-d93c-11e9-93ec-f57293e56113.png)

---

## How it Works

The search data is synced automatically using a [GitHub Actions workflow](.github/workflows/sync-algolia-search-indices.yml) that is triggered by pushes to the `main` branch. This process generates structured data for all pages on the site, compares that data to what's currently on Algolia, then adds, updates, or removes indices based on the diff of the local and remote data, being careful not to create duplicate records and avoiding any unnecessary (and costly) indexing operations.

The Actions workflow usually takes about five minutes, and the progress can be viewed (by GitHub employees) in the [Actions tab](https://github.com/github/docs/actions?query=workflow%3AAlgolia) of the repo.

## Development

In cases where a publicity event like GitHub Satellite or GitHub Universe demands a very tight shipping window, it is also possible to manually sync the indices with Algolia's servers from your local checkout of the repo, before your feature branch is merged to main. Manually syncing the indices can also be useful to test an unreleased GitHub Enterprise version or a translated language (Portuguese, Chinese, etc) that is not yet in production.

To sync the indices from your development environment:

1. Make sure the two required environment variables `ALGOLIA_APPLICATION_ID` and `ALGOLIA_API_KEY` are set in your `.env` file. These can be retrieved from the [Algolia site](https://www.algolia.com/apps/ZI5KPY1HBE/api-keys/all).
2. Run `npm run sync-search-dry-run`. This takes a while to complete. It will prepare, test, and validate all the indices without actually uploading anything to Algolia's servers.
3. Run `npm run sync-search` to prepare the indices again and upload them to the Algolia servers.

## Files

- [.github/workflows/sync-algolia-search-indices.yml](.github/workflows/sync-algolia-search-indices.yml) - the GitHub Actions workflow file that updates search indices whenever the main branch is updated.
- [javascripts/search.js](javascripts/search.js) - the browser-side code that enables search using Algolia's [InstantSearch.js](https://github.com/algolia/instantsearch.js/) library.
- [lib/algolia/client.js](lib/algolia/client.js) - a thin wrapper around the [algoliasearch](https://ghub.io/algoliasearch) Node.js module for interacting with the Algolia API.
- [lib/algolia/search-index.js](lib/algolia/search-index.js) - a class for generating structured search data from repository content and syncing it with the remote Algolia service. This class has built-in validation to ensure that all records are valid before they're uploaded. This class also takes care of removing deprecated records, and compares existing remote records with the latest local records to avoid uploading records that haven't changed.
- [script/sync-algolia-search-indices.js](script/sync-algolia-search-indices.js) - the script used by the Actions workflow to update search indices on our Algolia account. This can also be [run in the development environment](#development).
- [tests/algolia-search.js](tests/algolia-search.js) - tests!

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
- Algolia has support for "advanced query syntax" for exact matching of quoted expressions and exclusion of words preceded by a `-` sign. This is off by default but we have it enabled in our browser client. This and many other settings can be configured in Algolia.com web interface. The settings in the web interface can be overridden by the InstantSearch.js client. See [javascripts/search.js]([javascripts/search.js).
