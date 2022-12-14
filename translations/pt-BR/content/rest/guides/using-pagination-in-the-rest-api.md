---
title: Como usar paginação na API REST
intro: Saiba como navegar pelas respostas paginadas da API REST.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193155'
---
## Sobre paginação

Quando uma resposta da API REST incluir muitos resultados, {% data variables.product.company_short %} paginará os resultados e retornará um subconjunto dos resultados. Por exemplo, `GET /repos/octocat/Spoon-Knife/issues` retornará apenas 30 problemas do repositório `octocat/Spoon-Knife`, embora o repositório inclua mais de 1600 problemas abertos. Isso torna a resposta mais fácil de lidar para os servidores e para as pessoas.

Este guia demonstra como solicitar páginas adicionais de resultados para respostas paginadas, como alterar o número de resultados retornados em cada página e como escrever um script para buscar várias páginas de resultados.

## Como usar cabeçalhos de link

Quando uma resposta for paginada, os cabeçalhos de resposta incluirão um cabeçalho de link. O cabeçalho do link será omitido se o ponto de extremidade não der suporte à paginação ou se todos os resultados se ajustarem em uma única página. O cabeçalho do link contém URLs que você pode usar para buscar páginas adicionais de resultados. Para ver os cabeçalhos de resposta se você estiver usando curl ou {% data variables.product.prodname_cli %}, passe o sinalizador `--include` com sua solicitação. Para ver os cabeçalhos de resposta se você estiver usando uma biblioteca para fazer solicitações, siga a documentação dessa biblioteca. Por exemplo:

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json"
```

Se a resposta for paginada, o cabeçalho do link terá esta aparência:

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=4>; rel="next", <https://api.github.com/repositories/1300192/issues?page=515>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

O cabeçalho do link fornece a URL para a página anterior, a seguinte, a primeira e a última página de resultados:

- A URL da página anterior é seguida por `rel="prev"`.
- A URL da próxima página é seguida por `rel="next"`.
- A URL da última página é seguida por `rel="last"`.
- A URL da primeira página é seguida por `rel="first"`.

Em alguns casos, apenas um subconjunto desses links está disponível. Por exemplo, o link para a página anterior não será incluído se você estiver na primeira página de resultados e o link para a última página não será incluído se não puder ser calculado.

Você pode usar as URLs do cabeçalho do link para solicitar outra página de resultados. Por exemplo, para solicitar a última página de resultados com base no exemplo anterior:

```shell
curl --include --request GET \
--url "https://api.github.com/repositories/1300192/issues?page=515" \
--header "Accept: application/vnd.github+json"
```

As URLs no cabeçalho do link usam parâmetros de consulta para indicar qual página de resultados retornar. Os parâmetros de consulta nas URLs de link podem ser diferentes entre pontos de extremidade: cada ponto de extremidade paginado usará os parâmetros de consulta `page`, `before`/`after` ou `since`. (Alguns pontos de extremidade usam o parâmetro `since` para algo diferente de paginação). Em todos os casos, você pode usar as URLs no cabeçalho do link para buscar páginas adicionais de resultados. Para obter mais informações sobre parâmetros de consulta, confira "[Introdução à API REST](/rest/guides/getting-started-with-the-rest-api#using-query-parameters)".  

## Como alterar o número de itens por página

Se um ponto de extremidade der suporte ao parâmetro de consulta `per_page`, você poderá controlar quantos resultados são retornados em uma página. Para obter mais informações sobre parâmetros de consulta, confira "[Introdução à API REST](/rest/guides/getting-started-with-the-rest-api#using-query-parameters)".

Por exemplo, esta solicitação usa o parâmetro de consulta `per_page` para retornar dois itens por página:

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json"
```

O parâmetro `per_page` será incluído automaticamente no cabeçalho do link. Por exemplo:

```
link: <https://api.github.com/repositories/1300192/issues?per_page=2&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&page=7715>; rel="last"
```

## Script com paginação

Em vez de copiar manualmente URLs do cabeçalho do link, você pode escrever um script para buscar várias páginas de resultados.

Os exemplos a seguir usam o JavaScript e a biblioteca Octokit.js do {% data variables.product.company_short %}. Para obter mais informações sobre Octokit.js, confira "[Introdução à API REST](/rest/guides/getting-started-with-the-rest-api?tool=javascript)" e [o LEIAME do Octokit.js](https://github.com/octokit/octokit.js/#readme).

### Exemplo de uso do método de paginação Octokit.js

Para buscar resultados paginados com Octokit.js, você pode usar `octokit.paginate()`. `octokit.paginate()` buscará a próxima página de resultados até chegar à última página e retornará todos os resultados como uma única matriz. Alguns pontos de extremidade retornam resultados paginados como matriz em um objeto, em vez de retornar os resultados paginados como uma matriz. `octokit.paginate()` sempre retorna uma matriz de itens, mesmo que o resultado bruto tenha sido um objeto . Se os resultados não forem paginados, `octokit.paginate()` se comportará como `octokit.request()`.

Por exemplo, esse script obtém todos os problemas do repositório `octocat/Spoon-Knife`. Embora solicite 100 solicitações por vez, a função não retornará até que a última página de dados seja atingida.

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

Você pode passar uma função de mapa opcional para `octokit.paginate()` para encerrar a paginação antes que a última página seja atingida ou para reduzir o uso de memória mantendo apenas um subconjunto da resposta. Você também pode usar `octokit.paginate.iterator()` para iterar uma única página por vez, em vez de solicitar todas as páginas. Para obter mais informações, confira [a documentação do Octokit.js](https://github.com/octokit/octokit.js#pagination).

### Exemplo de criação de um método de paginação

Se você estiver usando outro idioma ou biblioteca que não tenha um método de paginação, poderá criar seu próprio método de paginação. Este exemplo ainda usa a biblioteca de Octokit.js para fazer solicitações, mas não depende de `octokit.paginate()`.

A função `getPaginatedData` faz uma solicitação para um ponto de extremidade com `octokit.request()`. Os dados da resposta são processados por `parseData`, que manipula casos em que nenhum dado é retornado ou casos em que os dados retornados são um objeto em vez de uma matriz. Os dados processados são acrescentados a uma lista que contém todos os dados paginados coletados até o momento. Se a resposta incluir um cabeçalho de link e se o cabeçalho do link incluir um link para a próxima página, a função usará um padrão RegEx (`nextPattern`) para obter a URL da próxima página. Em seguida, a função repete as etapas anteriores, agora usando essa nova URL. Depois que o cabeçalho do link não incluir mais um link para a próxima página, todos os resultados serão retornados.

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
