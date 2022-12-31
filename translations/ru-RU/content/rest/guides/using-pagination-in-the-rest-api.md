---
title: Использование разбиения на страницы в REST API
intro: 'Узнайте, как перемещаться по ответам с разбивкой на страницы из REST API.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193443'
---
## Сведения о разбиении на страницы

Если ответ от REST API будет содержать много результатов, {% data variables.product.company_short %} будет размножевать результаты на страницы и возвращать подмножество результатов. Например, возвращает только 30 проблем из `octocat/Spoon-Knife` репозитория, `GET /repos/octocat/Spoon-Knife/issues` хотя репозиторий содержит более 1600 открытых проблем. Это упрощает обработку ответа для серверов и пользователей.

В этом руководстве показано, как запросить дополнительные страницы результатов для ответов с разбивкой на страницы, как изменить количество результатов, возвращаемых на каждой странице, и как написать скрипт для получения нескольких страниц результатов.

## Использование заголовков ссылок

При разбивке ответа на страницы заголовки ответа будут содержать заголовок ссылки. Заголовок ссылки будет опущен, если конечная точка не поддерживает разбиение на страницы или если все результаты помещаются на одной странице. Заголовок ссылки содержит URL-адреса, которые можно использовать для получения дополнительных страниц результатов. Чтобы просмотреть заголовки ответов, если вы используете curl или {% data variables.product.prodname_cli %}, передайте `--include` флаг вместе с запросом. Чтобы просмотреть заголовки ответов, если вы используете библиотеку для выполнения запросов, следуйте документации по этой библиотеке. Пример:

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json"
```

Если ответ разбит на страницы, заголовок ссылки будет выглядеть примерно так:

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=4>; rel="next", <https://api.github.com/repositories/1300192/issues?page=515>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

Заголовок ссылки содержит URL-адрес для предыдущей, следующей, первой и последней страниц результатов:

- За URL-адресом предыдущей страницы следует `rel="prev"`.
- За URL-адресом следующей страницы следует `rel="next"`.
- За URL-адресом последней страницы следует `rel="last"`.
- За URL-адресом первой страницы следует `rel="first"`.

В некоторых случаях доступно только подмножество этих ссылок. Например, ссылка на предыдущую страницу не будет включена, если вы находитесь на первой странице результатов, а ссылка на последнюю страницу не будет включена, если ее невозможно вычислить.

Вы можете использовать URL-адреса из заголовка ссылки, чтобы запросить другую страницу результатов. Например, чтобы запросить последнюю страницу результатов на основе предыдущего примера:

```shell
curl --include --request GET \
--url "https://api.github.com/repositories/1300192/issues?page=515" \
--header "Accept: application/vnd.github+json"
```

URL-адреса в заголовке ссылки используют параметры запроса для указания страницы возвращаемых результатов. Параметры запроса в URL-адресах ссылок могут отличаться между конечными точками: каждая конечная точка с разбивкой на `page`страницы будет использовать параметры запроса ,`after``before`/ или .`since` (Некоторые конечные точки используют `since` параметр не для разбиения на страницы.) Во всех случаях можно использовать URL-адреса в заголовке ссылки для получения дополнительных страниц результатов. Дополнительные сведения о параметрах запроса см. в разделе [Начало работы с REST API](/rest/guides/getting-started-with-the-rest-api#using-query-parameters).  

## Изменение количества элементов на странице

Если конечная точка поддерживает `per_page` параметр запроса, можно управлять количеством результатов, возвращаемых на странице. Дополнительные сведения о параметрах запроса см. в разделе [Начало работы с REST API](/rest/guides/getting-started-with-the-rest-api#using-query-parameters).

Например, этот запрос использует `per_page` параметр запроса для возврата двух элементов на страницу:

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json"
```

Параметр `per_page` будет автоматически включен в заголовок ссылки. Пример:

```
link: <https://api.github.com/repositories/1300192/issues?per_page=2&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&page=7715>; rel="last"
```

## Создание скриптов с разбивкой на страницы

Вместо того, чтобы вручную копировать URL-адреса из заголовка ссылки, можно написать скрипт для получения нескольких страниц результатов.

В следующих примерах используется JavaScript и библиотека Octokit.js {% data variables.product.company_short %}. Дополнительные сведения о Octokit.js см. в разделе [Начало работы с REST API](/rest/guides/getting-started-with-the-rest-api?tool=javascript) и [файл сведений Octokit.js](https://github.com/octokit/octokit.js/#readme).

### Пример использования метода Octokit.js разбиения на страницы

Для получения результатов с разбивкой на страницы с помощью Octokit.js можно использовать `octokit.paginate()`. `octokit.paginate()` получает следующую страницу результатов, пока не достигнет последней страницы, а затем возвращает все результаты в виде одного массива. Несколько конечных точек возвращают результаты с разбивкой на страницы в виде массива в объекте, а не возвращают результаты с разбивкой на страницы в виде массива. `octokit.paginate()` всегда возвращает массив элементов, даже если необработанным результатом был объект . Если результаты не разбиты на страницы, `octokit.paginate()` будет вести себя как `octokit.request()`.

Например, этот скрипт получает все проблемы из репозитория `octocat/Spoon-Knife` . Хотя она запрашивает 100 проблем за раз, функция не возвращается, пока не будет достигнута последняя страница данных.

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

Вы можете передать необязательную функцию `octokit.paginate()` сопоставления в до конца разбиения на страницы до достижения последней страницы или уменьшить использование памяти, сохранив только подмножество ответа. Вы также можете использовать для `octokit.paginate.iterator()` итерации по одной странице за раз, а не для запроса каждой страницы. Дополнительные сведения см. [в документации по Octokit.js](https://github.com/octokit/octokit.js#pagination).

### Пример создания метода разбиения на страницы

Если вы используете другой язык или библиотеку, у которых нет метода разбиения на страницы, можно создать собственный метод разбиения на страницы. В этом примере для выполнения запросов по-прежнему используется библиотека Octokit.js, но он не использует `octokit.paginate()`.

Функция `getPaginatedData` отправляет запрос к конечной точке с `octokit.request()`помощью . Данные из ответа обрабатываются методом `parseData`, который обрабатывает случаи, когда данные не возвращаются, или случаи, когда возвращаемые данные являются объектом, а не массивом. Обработанные данные затем добавляются в список, содержащий все данные с разбивкой на страницы, собранные на данный момент. Если ответ содержит заголовок ссылки, а заголовок ссылки содержит ссылку на следующую страницу, функция использует шаблон регулярных выражений (`nextPattern`) для получения URL-адреса следующей страницы. Затем функция повторяет предыдущие шаги, используя этот новый URL-адрес. Когда заголовок ссылки больше не содержит ссылку на следующую страницу, возвращаются все результаты.

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
