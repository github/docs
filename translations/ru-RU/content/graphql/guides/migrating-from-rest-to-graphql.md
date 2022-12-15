---
title: Миграция из REST в GraphQL
intro: 'Ознакомьтесь с рекомендациями по миграции из REST API {% data variables.product.prodname_dotcom %}в API GraphQL {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/guides/migrating-from-rest
  - /graphql/guides/migrating-from-rest
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Migrate from REST to GraphQL
ms.openlocfilehash: dbafde83c8acac664b6a0f712927af82c646d397
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145069729'
---
## Отличия в логике API

Миграция из REST в GraphQL сопровождается существенным изменением в логике API. Различия между стилем REST и спецификацией GraphQL затрудняют&mdash; и часто делают нежелательной&mdash; замену вызовов REST API на запросы API GraphQL один к одному. Ниже приведены примеры миграции.

Чтобы перенести код из [REST API](/rest) в GraphQL API, выполните следующие действия:

- ознакомьтесь со [спецификацией GraphQL](https://graphql.github.io/graphql-spec/June2018/);
- ознакомьтесь со [схемой GraphQL](/graphql/reference) в GitHub;
- проанализируйте, как существующий код взаимодействует с REST API в GitHub;
- используйте [идентификаторы глобальных узлов](/graphql/guides/using-global-node-ids) для ссылки на объекты в разных версиях API.

К значительным преимуществам GraphQL относятся:

- [получение только необходимых данных](#example-getting-the-data-you-need-and-nothing-more);
- [вложенные поля](#example-nesting);
- [строгая типизация;](#example-strong-typing)

Ниже приведены примеры каждого из них.

## Пример: получение только необходимых данных

Один вызов REST API получает список участников вашей организации:
```shell
curl -v {% data variables.product.api_url_pre %}/orgs/:org/members
```

Полезные данные REST содержат избыточную информацию, и какая-то ее часть окажется ненужной, если вам нужно получить только имена членов и ссылки на аватары. Запрос GraphQL, напротив, возвращает только то, что вы указываете:

```graphql
query {
    organization(login:"github") {
    membersWithRole(first: 100) {
      edges {
        node {
          name
          avatarUrl
        }
      }
    }
  }
}
```

Рассмотрим другой пример: получение списка запросов на включение внесенных изменений и проверка возможности слияния для каждого из них. Вызов REST API получает список запросов на включение внесенных изменений и их [сводные представления](/rest#summary-representations):
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls
```

Чтобы определить, можно ли выполнить слияние для запроса на включение внесенных изменений, требуется получить каждый запрос на включение внесенных изменений по отдельности ради его [подробного представления](/rest#detailed-representations) (большой объем полезных данных) и проверить, имеет ли его атрибут `mergeable` значение true или false:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
```

При использовании GraphQL для каждого запроса на включение внесенных изменений можно получить только необходимые атрибуты `number` и `mergeable`:

```graphql
query {
    repository(owner:"octocat", name:"Hello-World") {
    pullRequests(last: 10) {
      edges {
        node {
          number
          mergeable
        }
      }
    }
  }
}
```

## Пример: вложенные поля

Благодаря поддержке запросов с вложенными полями можно заменить несколько вызовов REST на меньшее количество запросов GraphQL. Например, получение запроса на включение внесенных изменений вместе с его фиксациями, комментариев без проверки и проверок с помощью **REST API** требует четырех отдельных вызовов:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/commits
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/issues/:number/comments
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/reviews
```

С помощью **API GraphQL** эти данные можно получить с помощью одного запроса с вложенными полями:

```graphql
{
  repository(owner: "octocat", name: "Hello-World") {
    pullRequest(number: 1) {
      commits(first: 10) {
        edges {
          node {
            commit {
              oid
              message
            }
          }
        }
      }
      comments(first: 10) {
        edges {
          node {
            body
            author {
              login
            }
          }
        }
      }
      reviews(first: 10) {
        edges {
          node {
            state
          }
        }
      }
    }
  }
}
```

Эффективность этого запроса можно увеличить, [заменив номер запроса на включение внесенных изменений на переменную ](/graphql/guides/forming-calls-with-graphql#working-with-variables).

## Пример: строгая типизация

Схемы GraphQL строго типизированы, что делает обработку данных безопаснее.

Рассмотрим добавление комментария к проблеме или запросу на включение внесенных изменений с помощью [изменения](/graphql/reference/mutations) GraphQL, когда для значения [`clientMutationId`](/graphql/reference/mutations#addcomment) по ошибке было указано целое число вместо строки:

```graphql
mutation {
  addComment(input:{clientMutationId: 1234, subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```

При выполнении этого запроса возвращаются ошибки с указанием ожидаемых типов для операции:

```json
{
  "data": null,
  "errors": [
    {
      "message": "Argument 'input' on Field 'addComment' has an invalid value. Expected type 'AddCommentInput!'.",
      "locations": [
        {
          "line": 3,
          "column": 3
        }
      ]
    },
    {
      "message": "Argument 'clientMutationId' on InputObject 'AddCommentInput' has an invalid value. Expected type 'String'.",
      "locations": [
        {
          "line": 3,
          "column": 20
        }
      ]
    }
  ]
}
```

Если заключить `1234` в кавычки, значение будет преобразовано из целого числа в строку ожидаемого типа:

```graphql
mutation {
  addComment(input:{clientMutationId: "1234", subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```
