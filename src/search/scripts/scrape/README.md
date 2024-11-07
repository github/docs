# Scraping for General Search

We need to scrape each page on the Docs site and use the data we scrape to index Elasticsearch.

We currently only scrape for **general search** results.

Autocomplete search data is generated from analytics events and GPT queries.

## CLI Script

Before running the scraping script ensure that the server is running in another terminal with `npm run general-search-scrape-server`

Run the script with `npm run general-search-scrape -- <scrape-directory>`

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
