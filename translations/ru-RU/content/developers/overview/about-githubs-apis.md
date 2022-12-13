---
title: Сведения об API GitHub
intro: 'Сведения об API {% data variables.product.prodname_dotcom %}, которые позволяют расширить и изменить взаимодействие с {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v3/versions
  - /articles/getting-started-with-the-api
  - /github/extending-github/getting-started-with-the-api
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 8b2f1c35e7dba7b31943b3fbb34aad1885bdd540
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098903'
---
## Об API-интерфейсах %% данных variables.product.company_short %}

{% данных variables.product.company_short %} предоставляет два API: REST API и API GraphQL. Вы можете взаимодействовать с обоими API с помощью {% данных variables.product.prodname_cli %}, curl, официальных библиотек Octokit и сторонних библиотек. Иногда функция может поддерживаться в одном API, но не в другом.

Следует использовать API, который лучше всего соответствует вашим потребностям и что вы наиболее удобно использовать. Вам не нужно использовать только один API поверх другого. Идентификаторы узлов позволяют перемещаться между REST API и API GraphQL. Дополнительные сведения см. в разделе "[Использование идентификаторов глобальных узлов](/graphql/guides/using-global-node-ids)".

В этой статье рассматриваются преимущества каждого API. Дополнительные сведения об API GraphQL см. в разделе "[Сведения об API GraphQL](/graphql/overview/about-the-graphql-api)". Дополнительные сведения о REST API см. [в документации по REST](/rest).

## Выбор API GraphQL

API GraphQL возвращает именно запрашиваемые данные. GraphQL также возвращает данные в предварительно известной структуре на основе запроса. В отличие от этого, REST API возвращает больше данных, чем запрошено, и возвращает их в предварительно определенной структуре. Вы также можете выполнить эквивалент нескольких запросов REST API в одном запросе GraphQL. Возможность сделать меньше запросов и получить меньше данных делает GraphQL привлекательным для разработчиков мобильных приложений.

Например, чтобы получить {% данных variables.product.product_name %} имя входа десяти подписчиков и имя входа десяти подписчиков каждого из ваших подписчиков, можно отправить один запрос, например:

```graphql
{
  viewer {
    followers(first: 10) {
      nodes {
        login
        followers(first: 10) {
          nodes {
            login
          }
        }
      }
    }
  }
}
```

Ответ будет объектом JSON, который соответствует структуре запроса.

В отличие от этого, чтобы получить эти же сведения из REST API, необходимо сначала выполнить запрос.`GET /user/followers` API возвратит имя входа каждого подписчика, а также другие данные о подписчиках, которые вам не нужны. Затем для каждого подписчика необходимо отправить запрос.`GET /users/{username}/followers` В общей сложности вам потребуется выполнить 11 запросов, чтобы получить те же сведения, которые можно получить из одного запроса GraphQL, и вы получите лишние данные.

## Выбор REST API

Так как интерфейсы REST API существуют дольше, чем API GraphQL, некоторые разработчики более комфортно работают с REST API. Так как ИНТЕРФЕЙСы REST API используют стандартные http-команды и понятия, многие разработчики уже знакомы с основными понятиями для использования REST API.

Например, чтобы создать проблему в репозитории `octocat/Spoon-Knife` , необходимо отправить запрос `POST /repos/octocat/Spoon-Knife/issues` в текст запроса JSON:

```json
{
  "title": "Bug with feature X",
  "body": "If you do A, then B happens"
}
```

В отличие от этого, чтобы устранить проблему с помощью API GraphQL, необходимо получить идентификатор `octocat/Spoon-Knife` узла репозитория, а затем отправить запрос следующим образом:

```graphql
mutation {
  createIssue(
    input: {
      repositoryId: "MDEwOlJlcG9zaXRvcnkxMzAwMTky"
      title: "Bug with feature X"
      body: "If you do A, then B happens"}
  ) {
    issue {
      number
      url
    }
  }
}
```
