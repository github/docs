---
title: REST API 内での改ページ位置の自動修正の使用
intro: REST API からページ分割された応答間を移動する方法について説明します。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193444'
---
## 改ページ位置の自動修正について

REST API からの応答にたくさんの結果が含まれるとき、{% data variables.product.company_short %} では結果のページが分割され、結果のサブセットが返されます。 たとえば、`GET /repos/octocat/Spoon-Knife/issues` は、リポジトリに 1600 を超える未解決の issue が含まれている場合でも、`octocat/Spoon-Knife` リポジトリから 30 の issue のみを返します。 これにより、サーバーとユーザーに対して、応答の処理が簡単になります。

このガイドでは、ページ分割された応答に結果の追加ページを要求する方法、各ページで返される結果の数を変更する方法、および複数の結果ページをフェッチするスクリプトを記述する方法を示します。

## リンク ヘッダーの使用

応答がページ分割される場合、応答ヘッダーにはリンク ヘッダーが含まれます。 エンドポイントが改ページ位置の自動修正をサポートしていない場合、またはすべての結果が 1 つのページに収まる場合、リンク ヘッダーは省略されます。 リンク ヘッダーには、結果の追加ページをフェッチするために使用できる URL が含まれています。 curl または {% data variables.product.prodname_cli %} を使用している場合に応答ヘッダーを表示するには、要求に `--include` フラグを渡します。 ライブラリを使用して要求を行っている場合に応答ヘッダーを表示するには、そのライブラリのドキュメントに従います。 たとえば、次のように入力します。

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json"
```

応答がページ分割されている場合、リンク ヘッダーは次のようになります。

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=4>; rel="next", <https://api.github.com/repositories/1300192/issues?page=515>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

リンク ヘッダーでは、結果の前、次、最初、最後のページの URL が次のように提供されます。

- 前のページの URL の後には `rel="prev"` が続きます。
- 次のページの URL の後には `rel="next"` が続きます。
- 最後のページの URL の後には `rel="last"` が続きます。
- 最初のページの URL の後には `rel="first"` が続きます。

場合によっては、これらのリンクのサブセットのみが使用できます。 たとえば、結果の最初のページにいる場合、前のページへのリンクは含まれません。また、最後のページへのリンクが計算できない場合、それは含まれません。

リンク ヘッダーの URL を使用して、結果の別のページを要求できます。 たとえば、前の例に基づいて結果の最後のページを要求するには、次のようにします。

```shell
curl --include --request GET \
--url "https://api.github.com/repositories/1300192/issues?page=515" \
--header "Accept: application/vnd.github+json"
```

リンク ヘッダーの URL は、クエリ パラメーターを使用して、どのページの結果を返すかを示します。 リンク URL のクエリ パラメーターは、エンドポイントによって異なる場合があります。ページ分割された各エンドポイントでは、`page`、`before`/`after`、または `since` クエリ パラメーターが使用されます。 (一部のエンドポイントでは、改ページ位置の自動修正以外のものに対しては `since` パラメーターが使用されます)。いずれの場合も、リンク ヘッダーの URL を使用して、結果の追加ページをフェッチできます。 クエリ パラメーターについて詳しくは、「[REST API を使用した作業の開始](/rest/guides/getting-started-with-the-rest-api#using-query-parameters)」を参照してください。  

## ページごとのアイテム数の変更

`per_page` クエリ パラメーターがエンドポイントでサポートされる場合、1 ページで返される結果の数を制御できます。 クエリ パラメーターについて詳しくは、「[REST API を使用した作業の開始](/rest/guides/getting-started-with-the-rest-api#using-query-parameters)」を参照してください。

たとえば、この要求では、`per_page` クエリ パラメーターを使用してページごとに 2 つのアイテムを返します。

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json"
```

`per_page` パラメーターはリンク ヘッダーに自動的に含まれます。 たとえば、次のように入力します。

```
link: <https://api.github.com/repositories/1300192/issues?per_page=2&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&page=7715>; rel="last"
```

## 改ページ位置の自動修正を含むスクリプトの作成

リンク ヘッダーから URL を手動でコピーする代わりに、複数のページの結果をフェッチするスクリプトを記述できます。

次の例では、JavaScript と {% data variables.product.company_short %} の Octokit.js ライブラリを使用します。 Octokit.js について詳しくは、「[REST API を使用した作業の開始](/rest/guides/getting-started-with-the-rest-api?tool=javascript)」と [Octokit.js の README](https://github.com/octokit/octokit.js/#readme) を参照してください。

### Octokit.js の改ページ位置の自動修正メソッドの使用例

Octokit.js を使用してページ分割された結果をフェッチするには、`octokit.paginate()` を使用できます。 `octokit.paginate()` は、最後のページに達するまで結果の次のページをフェッチし、すべての結果を 1 つの配列として返します。 いくつかのエンドポイントは、ページ分割された結果を配列として返すのではなく、ページ分割された結果をオブジェクト内の配列として返します。 生の結果がオブジェクトであっても、`octokit.paginate()` は常にアイテムの配列を返します。 結果がページ分割されていない場合、`octokit.paginate()` は `octokit.request()` のように動作します。

たとえば、このスクリプトは`octocat/Spoon-Knife` リポジトリからすべての issue を取得します。 一度に 100 の issue が要求されますが、データの最後のページに達するまで関数は返されません。

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

省略可能な map 関数を `octokit.paginate()` に渡して最後のページに達する前に改ページ位置の自動修正を終了するか、応答のサブセットのみを保持することでメモリ使用量を削減できます。 `octokit.paginate.iterator()` を使用して、すべてのページを要求するのではなく、一度に 1 つのページを反復処理することもできます。 詳しくは、[Octokit.js のドキュメント](https://github.com/octokit/octokit.js#pagination)を参照してください。

### 改ページ位置の自動修正メソッドの作成例

改ページ位置の自動修正メソッドがない別の言語またはライブラリを使用している場合は、独自の改ページ位置の自動修正メソッドを作成できます。 この例では、引き続き Octokit.js ライブラリを使用して要求を行いますが、`octokit.paginate()` には依存しません。

`getPaginatedData` 関数は、`octokit.request()` を使用してエンドポイントに要求を行います。 応答からのデータは `parseData` によって処理されます。この場合、データが返されないケースや、返されるデータが配列ではなくオブジェクトであるケースが処理されます。 処理されたデータはその後、これまでに収集された、ページ分割されたすべてのデータを含むリストに追加されます。 応答にリンク ヘッダーが含まれており、リンク ヘッダーに次のページのリンクが含まれている場合、関数は RegEx パターン (`nextPattern`) を使用して次のページの URL を取得します。 関数は、今度はこの新しい URL を使用して、前のステップを繰り返します。 リンク ヘッダーに次のページへのリンクが含まれなくなると、すべての結果が返されます。

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
