---
title: REST API에서 페이지 매김 사용
intro: REST API에서 페이지를 매긴 응답을 탐색하는 방법을 알아봅니다.
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
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193445'
---
## 페이지 매김 정보

REST API의 응답에 많은 결과가 포함되는 경우 {% data variables.product.company_short %}은 결과를 페이지를 매긴 후 결과의 하위 집합을 반환합니다. 예를 들어 는 `GET /repos/octocat/Spoon-Knife/issues` 리포지토리에 1600개가 넘는 미해결 문제가 포함되어 있더라도 리포지토리에서 `octocat/Spoon-Knife` 30개의 문제만 반환합니다. 이렇게 하면 서버 및 사용자에 대한 응답을 더 쉽게 처리할 수 있습니다.

이 가이드에서는 페이지를 매긴 응답에 대한 추가 결과 페이지를 요청하는 방법, 각 페이지에서 반환되는 결과 수를 변경하는 방법 및 여러 페이지의 결과를 가져오는 스크립트를 작성하는 방법을 보여 줍니다.

## 링크 헤더 사용

응답의 페이지가 매겨지면 응답 헤더에 링크 헤더가 포함됩니다. 엔드포인트가 페이지 매김을 지원하지 않거나 모든 결과가 단일 페이지에 맞는 경우 링크 헤더는 생략됩니다. 링크 헤더에는 결과의 추가 페이지를 가져오는 데 사용할 수 있는 URL이 포함되어 있습니다. curl 또는 {% data variables.product.prodname_cli %}를 사용하는 경우 응답 헤더를 보려면 요청과 함께 플래그를 `--include` 전달합니다. 라이브러리를 사용하여 요청을 만드는 경우 응답 헤더를 보려면 해당 라이브러리에 대한 설명서를 따르세요. 예를 들면 다음과 같습니다.

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json"
```

응답이 페이지를 매긴 경우 링크 헤더는 다음과 같이 표시됩니다.

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=4>; rel="next", <https://api.github.com/repositories/1300192/issues?page=515>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

링크 헤더는 결과의 이전, 다음, 첫 번째 및 마지막 페이지에 대한 URL을 제공합니다.

- 이전 페이지의 URL 뒤에 가 잇 `rel="prev"`습니다.
- 다음 페이지의 URL 뒤에 가 잇 `rel="next"`습니다.
- 마지막 페이지의 URL 뒤에 가 잇 `rel="last"`습니다.
- 첫 번째 페이지의 URL 뒤에 가 잇 `rel="first"`습니다.

경우에 따라 이러한 링크의 하위 집합만 사용할 수 있습니다. 예를 들어 결과의 첫 번째 페이지에 있는 경우 이전 페이지에 대한 링크가 포함되지 않으며 계산할 수 없는 경우 마지막 페이지에 대한 링크가 포함되지 않습니다.

링크 헤더의 URL을 사용하여 결과의 다른 페이지를 요청할 수 있습니다. 예를 들어 이전 예제를 기반으로 결과의 마지막 페이지를 요청하려면 다음을 수행합니다.

```shell
curl --include --request GET \
--url "https://api.github.com/repositories/1300192/issues?page=515" \
--header "Accept: application/vnd.github+json"
```

링크 헤더의 URL은 쿼리 매개 변수를 사용하여 반환할 결과의 페이지를 나타냅니다. 링크 URL의 쿼리 매개 변수는 엔드포인트 간에 다를 수 있습니다. 페이지를 매긴 각 엔드포인트는 ,`after``before`/ 또는 `since` 쿼리 매개 변수를 `page`사용합니다. (일부 엔드포인트는 페이지 매김 이외의 다른 항목에 매개 변수를 사용합니다 `since` .) 모든 경우에 링크 헤더의 URL을 사용하여 결과의 추가 페이지를 가져올 수 있습니다. 쿼리 매개 변수에 대한 자세한 내용은 "[REST API 시작"을](/rest/guides/getting-started-with-the-rest-api#using-query-parameters) 참조하세요.  

## 페이지당 항목 수 변경

엔드포인트가 쿼리 매개 변수를 `per_page` 지원하는 경우 페이지에서 반환되는 결과 수를 제어할 수 있습니다. 쿼리 매개 변수에 대한 자세한 내용은 "[REST API 시작"을](/rest/guides/getting-started-with-the-rest-api#using-query-parameters) 참조하세요.

예를 들어 이 요청은 쿼리 매개 변수를 `per_page` 사용하여 페이지당 두 개의 항목을 반환합니다.

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json"
```

매개 변수는 `per_page` 링크 헤더에 자동으로 포함됩니다. 예를 들면 다음과 같습니다.

```
link: <https://api.github.com/repositories/1300192/issues?per_page=2&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&page=7715>; rel="last"
```

## 페이지 매김을 사용하여 스크립팅

링크 헤더에서 URL을 수동으로 복사하는 대신 스크립트를 작성하여 결과의 여러 페이지를 가져올 수 있습니다.

다음 예제에서는 JavaScript 및 {% data variables.product.company_short %}의 Octokit.js 라이브러리를 사용합니다. Octokit.js 대한 자세한 내용은 "[REST API 시작](/rest/guides/getting-started-with-the-rest-api?tool=javascript)" 및 [Octokit.js 추가 정보를 참조하세요](https://github.com/octokit/octokit.js/#readme).

### Octokit.js 페이지 매김 메서드를 사용하는 예제

Octokit.js 페이지를 매긴 결과를 가져오려면 를 사용할 `octokit.paginate()`수 있습니다. `octokit.paginate()` 는 마지막 페이지에 도달할 때까지 결과의 다음 페이지를 가져온 다음 모든 결과를 단일 배열로 반환합니다. 페이지가 매겨진 결과를 배열로 반환하는 것이 아니라 일부 엔드포인트는 페이지를 매긴 결과를 개체의 배열로 반환합니다. `octokit.paginate()` 원시 결과가 개체인 경우에도 항상 항목 배열을 반환합니다. 결과가 페이지를 매기지 않으면 는 `octokit.paginate()` 처럼 `octokit.request()`동작합니다.

예를 들어 이 스크립트는 리포지토리에서 `octocat/Spoon-Knife` 모든 문제를 가져옵니다. 한 번에 100개의 문제를 요청하지만 함수는 데이터의 마지막 페이지에 도달할 때까지 반환되지 않습니다.

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

선택적 맵 함수를 에 전달하여 `octokit.paginate()` 마지막 페이지에 도달하기 전에 페이지 매김을 종료하거나 응답의 하위 집합만 유지하여 메모리 사용량을 줄일 수 있습니다. 를 사용하여 `octokit.paginate.iterator()` 모든 페이지를 요청하는 대신 한 번에 하나의 페이지를 반복할 수도 있습니다. 자세한 내용은 [Octokit.js 설명서를 참조하세요](https://github.com/octokit/octokit.js#pagination).

### 페이지 매김 메서드를 만드는 예제

페이지 매김 메서드가 없는 다른 언어 또는 라이브러리를 사용하는 경우 고유한 페이지 매김 메서드를 빌드할 수 있습니다. 이 예제에서는 여전히 Octokit.js 라이브러리를 사용하여 요청을 수행하지만 에 의존 `octokit.paginate()`하지는 않습니다.

함수는 `getPaginatedData` 를 사용하여 엔드포인트 `octokit.request()`에 요청합니다. 응답의 데이터는 에 의해 `parseData`처리되며, 데이터가 반환되지 않는 경우 또는 반환되는 데이터가 배열 대신 개체인 경우를 처리합니다. 그런 다음, 처리된 데이터는 지금까지 수집된 모든 페이지를 매긴 데이터를 포함하는 목록에 추가됩니다. 응답에 링크 헤더가 포함되어 있고 링크 헤더에 다음 페이지에 대한 링크가 포함된 경우 함수는 RegEx 패턴(`nextPattern`)을 사용하여 다음 페이지의 URL을 가져옵니다. 그런 다음 함수는 이 새 URL을 사용하여 이전 단계를 반복합니다. 링크 헤더에 더 이상 다음 페이지에 대한 링크가 포함되어 있지 않으면 모든 결과가 반환됩니다.

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
