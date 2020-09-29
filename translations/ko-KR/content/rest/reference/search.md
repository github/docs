---
title: 검색
redirect_from:
  - /v3/search
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

The Search API helps you search for the specific item you want to find. For example, you can find a user or a specific file in a repository. Think of it the way you think of performing a search on Google. It's designed to help you find the one result you're looking for (or maybe the few results you're looking for). Just like searching on Google, you sometimes want to see a few pages of search results so that you can find the item that best meets your needs. To satisfy that need, the {% data variables.product.product_name %} Search API provides **up to 1,000 results for each search**.

You can narrow your search using queries. To learn more about the search query syntax, see "[Constructing a search query](/v3/search/#constructing-a-search-query)."

### Ranking search results

Unless another sort option is provided as a query parameter, results are sorted by best match in descending order. Multiple factors are combined to boost the most relevant item to the top of the result list.

### Rate limit

The Search API has a custom rate limit. For requests using [Basic Authentication](/v3/#authentication), [OAuth](/v3/#authentication), or [client ID and secret](/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications), you can make up to 30 requests per minute. For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute.

{% data reusables.enterprise.rate_limit %}

See the [rate limit documentation](/rest/reference/rate-limit) for details on determining your current rate limit status.

### Constructing a search query

Each endpoint in the Search API uses [query parameters](https://en.wikipedia.org/wiki/Query_string) to perform searches on {% data variables.product.product_name %}. See the individual endpoint in the Search API for an example that includes the endpoint and query parameters.

A query can contain any combination of search qualifiers supported on GitHub.com. The format of the search query is:

```
q=SEARCH_KEYWORD_1+SEARCH_KEYWORD_N+QUALIFIER_1+QUALIFIER_N
```

For example, if you wanted to search for all _repositories_ owned by `defunkt` that contained the word `GitHub` and `Octocat` in the README file, you would use the following query with the _search repositories_ endpoint:

```
q=GitHub+Octocat+in:readme+user:defunkt
```

See "[Searching on GitHub](/articles/searching-on-github/)" for a complete list of available qualifiers, their format, and an example of how to use them. For information about how to use operators to match specific quantities, dates, or to exclude results, see "[Understanding the search syntax](/articles/understanding-the-search-syntax/)."

### Limitations on query length

The Search API does not support queries that:
- are longer than 256 characters (not including operators or qualifiers).
- have more than five `AND`, `OR`, or `NOT` operators.

These search queries will return a "Validation failed" error message.

### Timeouts and incomplete results

To keep the Search API fast for everyone, we limit how long any individual query can run. For queries that [exceed the time limit](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/), the API returns the matches that were already found prior to the timeout, and the response has the `incomplete_results` property set to `true`.

Reaching a timeout does not necessarily mean that search results are incomplete. More results might have been found, but also might not.

### Access errors or missing search results

You need to successfully authenticate and have access to the repositories in your search queries, otherwise, you'll see a `422 Unprocessible Entry` error with a "Validation Failed" message. For example, your search will fail if your query includes `repo:`, `user:`, or `org:` qualifiers that request resources that you don't have access to when you sign in on {% data variables.product.prodname_dotcom %}.

When your search query requests multiple resources, the response will only contain the resources that you have access to and will **not** provide an error message listing the resources that were not returned.

For example, if your search query searches for the `octocat/test` and `codertocat/test` repositories, but you only have access to `octocat/test`, your response will show search results for `octocat/test` and nothing for `codertocat/test`. This behavior mimics how search works on {% data variables.product.prodname_dotcom %}.

{% include rest_operations_at_current_path %}


### Text match metadata

On GitHub, you can use the context provided by code snippets and highlights in search results. The Search API offers additional metadata that allows you to highlight the matching search terms when displaying search results.

![code-snippet-highlighting](/assets/images/text-match-search-api.png)

Requests can opt to receive those text fragments in the response, and every fragment is accompanied by numeric offsets identifying the exact location of each matching search term.

To get this metadata in your search results, specify the `text-match` media type in your `Accept` header.

```shell
application/vnd.github.v3.text-match+json
```

When you provide the `text-match` media type, you will receive an extra key in the JSON payload called `text_matches` that provides information about the position of your search terms within the text and the `property` that includes the search term. Inside the `text_matches` array, each object includes the following attributes:

| 이름            | 설명                                                                                                                                                                                                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object_url`  | The URL for the resource that contains a string property matching one of the search terms.                                                                                                                                                                      |
| `object_type` | The name for the type of resource that exists at the given `object_url`.                                                                                                                                                                                        |
| `속성`          | The name of a property of the resource that exists at `object_url`. That property is a string that matches one of the search terms. (In the JSON returned from `object_url`, the full content for the `fragment` will be found in the property with this name.) |
| `조각`          | A subset of the value of `property`. This is the text fragment that matches one or more of the search terms.                                                                                                                                                    |
| `matches`     | An array of one or more search terms that are present in `fragment`. The indices (i.e., "offsets") are relative to the fragment. (They are not relative to the _full_ content of `property`.)                                                                   |

#### 예시

Using cURL, and the [example issue search](#search-issues-and-pull-requests) above, our API request would look like this:

``` shell
curl -H 'Accept: application/vnd.github.v3.text-match+json' \
'{% data variables.product.api_url_pre %}/search/issues?q=windows+label:bug+language:python+state:open&sort=created&order=asc'
```

The response will include a `text_matches` array for each search result. In the JSON below, we have two objects in the `text_matches` array.

The first text match occurred in the `body` property of the issue. We see a fragment of text from the issue body. The search term (`windows`) appears twice within that fragment, and we have the indices for each occurrence.

The second text match occurred in the `body` property of one of the issue's comments. We have the URL for the issue comment. And of course, we see a fragment of text from the comment body. The search term (`windows`) appears once within that fragment.

```json
{
  "text_matches": [
    {
      "object_url": "https://api.github.com/repositories/215335/issues/132",
      "object_type": "Issue",
      "property": "body",
      "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly distributed windows font that supports them then no problem (we can use html font tags) but otherwise the '(21)' style is probably better.\n",
      "matches": [
        {
          "text": "windows",
          "indices": [
            14,
            21
          ]
        },
        {
          "text": "windows",
          "indices": [
            78,
            85
          ]
        }
      ]
    },
    {
      "object_url": "https://api.github.com/repositories/215335/issues/comments/25688",
      "object_type": "IssueComment",
      "property": "body",
      "fragment": " right after that are a bit broken IMHO :). I suppose we could have some hack that maxes out at whatever the font does...\n\nI'll check what the state of play is on Windows.\n",
      "matches": [
        {
          "text": "Windows",
          "indices": [
            163,
            170
          ]
        }
      ]
    }
  ]
}
```
