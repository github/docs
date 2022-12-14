---
title: 在 REST API 中使用分页
intro: 了解如何从 REST API 浏览分页响应。
redirect_from:
  - /guides/traversing-with-pagination
  - /v3/guides/traversing-with-pagination
  - /rest/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Pagination
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3a47974e431b227a225584ff6d3cd65f21a1ab9a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193219'
---
## 关于分页

当 REST API 的响应包含许多结果时，{% data variables.product.company_short %} 将对结果进行分页并返回部分结果。 例如，`GET /repos/octocat/Spoon-Knife/issues` 将仅返回 `octocat/Spoon-Knife` 存储库中的 30 个问题，即使存储库包含 1600 多个未解决的问题。 这使得服务器和用户的响应更易于处理。

本指南演示如何在分页响应中请求其他结果页，如何更改每页返回的结果数，以及如何编写脚本来获取多页结果。

## 使用链接标头

如果响应已分页，则响应头将包含链接标头。 如果终结点不支持分页或所有结果都显示在一页中，将省略链接标头。 链接标头包含可用于提取其他结果页的 URL。 使用 curl 或 {% data variables.product.prodname_cli %} 时，若要要查看响应头，请在请求中传递 `--include` 标志。 使用库发出请求时，若要查看响应头，请按照该库的文档进行操作。 例如：

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json"
```

如果响应已分页，链接标头将如下所示：

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=4>; rel="next", <https://api.github.com/repositories/1300192/issues?page=515>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

链接标头提供上一页、下一页、第一页和最后一页结果的 URL：

- 上一页的 URL 后跟 `rel="prev"`。
- 下一页的 URL 后跟 `rel="next"`。
- 最后一页的 URL 后跟 `rel="last"`。
- 第一页的 URL 后跟 `rel="first"`。

在某些情况下，其中只有部分链接可用。 例如，如果位于结果的第一页，则不会包含指向上一页的链接；如果无法计算，则不会包含指向最后一页的链接。

可以使用链接标头中的 URL 请求另一页的结果。 例如，根据上一个示例请求最后一页的结果：

```shell
curl --include --request GET \
--url "https://api.github.com/repositories/1300192/issues?page=515" \
--header "Accept: application/vnd.github+json"
```

链接标头中的 URL 使用查询参数来指示要返回的结果页。 链接 URL 中的查询参数可能因终结点而异：每个分页终结点都将使用 `page`、`before`/`after` 或 `since` 查询参数。 （某些终结点将 `since` 参数用于非分页内容。）在所有情况下，都可以使用链接标头中的 URL 来提取其他结果页面。 有关查询参数的详细信息，请参阅“[REST API 入门](/rest/guides/getting-started-with-the-rest-api#using-query-parameters)”。  

## 更改每页显示的项数

如果终结点支持 `per_page` 查询参数，则可以控制在页面上返回的结果数。 有关查询参数的详细信息，请参阅“[REST API 入门](/rest/guides/getting-started-with-the-rest-api#using-query-parameters)”。

例如，此请求使用 `per_page` 查询参数，每页返回两个项：

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json"
```

`per_page` 参数将自动包含在链接标头中。 例如：

```
link: <https://api.github.com/repositories/1300192/issues?per_page=2&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&page=7715>; rel="last"
```

## 使用分页编写脚本

可以编写脚本来提取多页结果，而不是手动复制链接标头中的 URL。

以下示例使用 JavaScript 和 {% data variables.product.company_short %} 的 Octokit.js 库。 有关 Octokit.js 的详细信息，请参阅“[REST API 入门](/rest/guides/getting-started-with-the-rest-api?tool=javascript)”和 [Octokit.js 自述文件](https://github.com/octokit/octokit.js/#readme)。

### 使用 Octokit.js 分页方法的示例

若要使用 Octokit.js 提取分页结果，可以使用 `octokit.paginate()`。 `octokit.paginate()` 将提取下一个结果页到最后一页的结果，然后将所有结果作为单个数组返回。 一些终结点将分页结果作为对象中的数组返回，而不是以数组的形式返回分页结果。 `octokit.paginate()` 始终返回项的数组，即使原始结果为一个对象。 如果未对结果进行分页，则 `octokit.paginate()` 的作用将类似于 `octokit.request()`。

例如，此脚本从 `octocat/Spoon-Knife` 存储库获取所有问题。 虽然它一次请求 100 个问题，但函数在到达最后一页数据之前不会返回。

```javascript{:copy}
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});

const data = await octokit.paginate("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 100,{% ifversion api-date-versioning %}
  headers: {
    "X-GitHub-Api-Version": "{{ allVersions[currentVersion].latestApiVersion }}",
  },{% endif %}
});

console.log(data)
```

可以将可选的 map 函数传递给 `octokit.paginate()`，从而在到达最后一页之前结束分页，或者通过仅保留部分响应来减少内存使用量。 还可以使用 `octokit.paginate.iterator()` 一次循环访问单个页面，而不是请求每个页面。 有关详细信息，请参阅 [Octokit.js 文档](https://github.com/octokit/octokit.js#pagination)。

### 创建分页方法的示例

如果使用的其他语言或库没有分页方法，则可以生成自己的分页方法。 此示例仍使用 Octokit.js 库发出请求，但不依赖于 `octokit.paginate()`。

`getPaginatedData` 函数使用 `octokit.request()` 向终结点发出请求。 响应中的数据由 `parseData` 处理，它处理以下两种情况：不返回数据或返回的数据是对象而不是数组。 然后，处理后的数据将追加到包含目前为止收集的所有分页数据的列表中。 如果响应包含链接标头，并且链接标头包含下一页的链接，则该函数使用 RegEx 模式 (`nextPattern`) 获取下一页的 URL。 然后，函数将重复上述步骤，现在使用此新 URL。 链接标头不再包含指向下一页的链接后，将返回所有结果。

```javascript{:copy}
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});

async function getPaginatedData(url) {
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
  let pagesRemaining = true;
  let data = [];

  while (pagesRemaining) {
    const response = await octokit.request(`GET ${url}`, {
      per_page: 100,{% ifversion api-date-versioning %}
      headers: {
        "X-GitHub-Api-Version":
          "{{ allVersions[currentVersion].latestApiVersion }}",
      },{% endif %}
    });

    const parsedData = parseData(response.data)
    data = [...data, ...parsedData];

    const linkHeader = response.headers.link;

    pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

    if (pagesRemaining) {
      url = linkHeader.match(nextPattern)[0];
    }
  }

  return data;
}

function parseData(data) {
  // If the data is an array, return that
    if (Array.isArray(data)) {
      return data
    }

  // Some endpoints respond with 204 No Content instead of empty array
  //   when there is no data. In that case, return an empty array.
  if (!data) {
    return []
  }

  // Otherwise, the array of items that we want is in an object
  // Delete keys that don't include the array of items
  delete data.incomplete_results;
  delete data.repository_selection;
  delete data.total_count;
  // Pull out the array of items
  const namespaceKey = Object.keys(data)[0];
  data = data[namespaceKey];
  
  return data;
}

const data = await getPaginatedData("/repos/octocat/Spoon-Knife/issues");

console.log(data);
```
