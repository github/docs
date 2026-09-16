# Scraping for General Search

We fetch each page's content via the Article API and use the structured data to index Elasticsearch. This replaced the previous approach of rendering full HTML pages and scraping them with cheerio.

We currently only scrape for **general search** results.

Autocomplete search data is generated from analytics events and GPT queries.

## How it works

The scrape script starts by loading all indexable pages, then for each page it calls the Article API (`/api/article?pathname=<path>`) on the local server. The API returns structured JSON with the page's title, intro, breadcrumbs, and markdown body. The markdown is parsed into an AST with GFM support (so tables are handled cleanly), navigational headings like "Further reading" are filtered out, and the full content (including code blocks) is converted to plain text for indexing.

The implementation lives in `lib/build-records-from-api.ts`.

## CLI Script

Before running the scraping script, start the server in another terminal:

```bash
npm run general-search-scrape-server
```

Then run the scrape:

```bash
npm run general-search-scrape -- <scrape-directory>
```

To scrape a specific language and version:

```bash
npx tsx src/search/scripts/scrape/scrape-cli.ts -l en -V fpt <scrape-directory>
```

After a successful run it will generate a series of JSON files with the page data of every page of the Docs site into the passed directory.

The `index-general-search.yml` workflow will scrape the records into `/tmp/records` then proceed to run the [general-search indexing script](../index/README.md)

To see the arguments accepted by the script, pass the `--help` argument, for example

```bash
npm run general-search-scrape -- --help
```

## Records (scraped pages)

In the context of an Elasticsearch index, a record represents a page. Each record has `breadcrumbs`, `title`, `headings`, `content` (the article content in text, not HTML), `intro` (if one exists in the frontmatter), and a unique `objectID` that is currently just the permalink of the article. Here's an example:

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
