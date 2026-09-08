---
title: GitHub Docs API
intro: 'Use the official {% data variables.product.prodname_docs %} API to programmatically list pages, search, and retrieve {% data variables.product.company_short %} documentation content.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: GitHub Docs API
category:
  - Explore GitHub plans and features
---

<!-- markdownlint-disable search-replace -->
{% data variables.product.prodname_docs %} provides several ways to access documentation content programmatically. You can retrieve individual articles as Markdown, list all available pages, search across the documentation, or point AI agents to the `llms.txt` file for content discovery.

## Article endpoint

The Article endpoint returns the Markdown content and metadata of any {% data variables.product.prodname_docs %} page. It supports all page types, including standard articles, REST API reference pages, GraphQL reference pages, and landing pages.

The Article endpoint accepts the following query parameter:

* `pathname` (required): The article path, including a language prefix such as `/en/` or `/ja/`.
  * For example, `/en/get-started/start-your-journey/what-is-github`.

In addition, `GET /api/article` and `GET /api/article/body` accept the following optional query parameter:

* `apiVersion`: For REST API reference pages, specifies which API version to use. Defaults to the latest version.

### Getting article content

`GET https://docs.github.com/api/article/body` returns the full article content as Markdown.

```shell
curl "https://docs.github.com/api/article/body?pathname=/en/get-started/start-your-journey/what-is-github"
```

To access a versioned article (for example, for {% data variables.product.prodname_ghe_cloud %}), include the version in the path:

```shell
curl "https://docs.github.com/api/article/body?pathname=/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud"
```

### Getting article metadata

`GET https://docs.github.com/api/article/meta` returns metadata about an article as JSON, including the title, intro, product area, document type, and breadcrumbs.

```shell
curl "https://docs.github.com/api/article/meta?pathname=/en/get-started/start-your-journey/what-is-github"
```

### Getting content and metadata together

`GET https://docs.github.com/api/article` returns both metadata and the article body in a single JSON response, combining the results of the body and meta endpoints.

```shell
curl "https://docs.github.com/api/article?pathname=/en/get-started/start-your-journey/what-is-github"
```

## Pagelist endpoint

The Pagelist endpoint returns a list of every available page path for a given language and documentation version. You can use it to discover all articles, then fetch individual articles with the Article endpoint.

### Listing all pages

`GET https://docs.github.com/api/pagelist/:lang/:version` returns a newline-separated list of all page paths for the specified language and version.

```shell
curl "https://docs.github.com/api/pagelist/en/free-pro-team@latest"
```

#### Languages list

`GET https://docs.github.com/api/pagelist/languages` returns all available language codes as JSON. Use this to find valid values for the `:lang` parameter above.

#### Versions list

`GET https://docs.github.com/api/pagelist/versions` returns all available documentation versions as JSON, including {% data variables.product.prodname_ghe_server %} version numbers. Use this to find valid values for the `:version` parameter above.

## Search endpoint

The Search endpoint lets you search across all {% data variables.product.prodname_docs %} content. It returns results sorted by relevance, with highlights and metadata for each matching page.

### Searching docs content

`GET https://docs.github.com/api/search/v1` accepts the following query parameters:

* `query` (required): The search term.
* `client_name` (required for external clients such as `curl`): A name that identifies your client or integration.
* `version` (optional): The documentation version to search. Defaults to `free-pro-team`. Valid values include `free-pro-team`, `enterprise-cloud`, and {% data variables.product.prodname_ghe_server %} version numbers like `3.19`.
* `language` (optional): The language to search. Defaults to `en`.
* `page` (optional): The page number for paginated results. Defaults to `1`.
* `size` (optional): The number of results per page, up to a maximum of `50`. Defaults to `10`.

```shell
curl "https://docs.github.com/api/search/v1?query=actions&client_name=docs-api-example&version=free-pro-team&language=en"
```

The response includes a `meta` object with information about the total number of matches and a `hits` array containing the matched pages with titles, URLs, breadcrumbs, and content highlights.

## `llms.txt` for AI agents

{% data variables.product.prodname_docs %} publishes an `llms.txt` file at `https://docs.github.com/llms.txt`, following the [`llms.txt` standard](https://llmstxt.org/). This file provides a structured overview of the documentation site designed for consumption by LLMs and AI-powered tools.

If you are building an agent or tool that needs to access {% data variables.product.prodname_docs %}, `llms.txt` is the recommended starting point for discovering available content and API endpoints.

{% ifversion fpt or ghec %}

## Further reading

* [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server)

{% endif %}