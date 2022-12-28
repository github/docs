---
title: Ограничения ресурсов
intro: 'API GraphQL {% data variables.product.prodname_dotcom %} имеет ограничения для защиты от чрезмерных вызовов к серверам {% data variables.product.prodname_dotcom %} или злоупотребления ими.'
redirect_from:
  - /v4/guides/resource-limitations
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 7a0f040b86435573171c4022a72f8d558ad06c29
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381427'
---
## Предельное число узлов

Чтобы пройти проверку [схемы](/graphql/guides/introduction-to-graphql#schema), все [вызовы](/graphql/guides/forming-calls-with-graphql) API GraphQL должны соответствовать следующим стандартам:

* Клиенты должны предоставлять аргумент `first` или `last` для любого [подключения](/graphql/guides/introduction-to-graphql#connection).
* Значения `first` и `last` должны находиться в пределах 1–100.
* В отдельных вызовах не может запрашивать более 500 000 [узлов](/graphql/guides/introduction-to-graphql#node).

### Подсчет узлов в вызове

В этих двух примерах показано, как вычислить общее количество узлов в вызове.

1. Простой запрос:

  <pre>query {
    viewer {
      repositories(first: <span class="redbox">50</span>) {
        edges {
          repository:node {
            name

            issues(first: <span class="greenbox">10</span>) {
              totalCount
              edges {
                node {
                  title
                  bodyHTML
                }
              }
            }
          }
        }
      }
    }
  }</pre>

  Расчет:

  <pre><span class="redbox">50</span>         = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">10</span>  = 500 repository issues

              = 550 total nodes</pre>

2. Сложный запрос:

  <pre>query {
    viewer {
      repositories(first: <span class="redbox">50</span>) {
        edges {
          repository:node {
            name

            pullRequests(first: <span class="greenbox">20</span>) {
              edges {
                pullRequest:node {
                  title

                  comments(first: <span class="bluebox">10</span>) {
                    edges {
                      comment:node {
                        bodyHTML
                      }
                    }
                  }
                }
              }
            }

            issues(first: <span class="greenbox">20</span>) {
              totalCount
              edges {
                issue:node {
                  title
                  bodyHTML

                  comments(first: <span class="bluebox">10</span>) {
                    edges {
                      comment:node {
                        bodyHTML
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      followers(first: <span class="bluebox">10</span>) {
        edges {
          follower:node {
            login
          }
        }
      }
    }
  }</code></pre>

  Расчет:

  <pre><span class="redbox">50</span>              = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 pullRequests
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 pullRequest comments
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 issues
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 issue comments
   +
  <span class="bluebox">10</span>              = 10 followers

                   = 22,060 total nodes</pre>

## Ограничение скорости

Ограничение скорости для API GraphQL версии 4 отличается от [ограничения скорости](/rest/overview/resources-in-the-rest-api#rate-limiting) для REST API.

Почему различаются ограничения скорости API? Один вызов [GraphQL](/graphql) может заменять [несколько вызовов REST](/graphql/guides/migrating-from-rest-to-graphql). Один сложный вызов GraphQL может быть эквивалентен тысячам запросов REST. Хотя вызов GraphQL может спокойно укладываться в ограничение скорости REST API, запрос может быть столь же затратным для обработки на серверах GitHub.

Чтобы точно представить затраты на обработку запроса на сервере, API GraphQL вычисляет **оценку ограничения скорости** для вызова на основе нормализованной шкалы баллов. При оценке запроса учитываются первый и последний аргументы родительского соединения и его дочерних элементов.

* Формула использует аргументы `first` и `last` родительского соединения и его дочерних элементов для предварительного вычисления потенциальной нагрузки на системы GitHub, такие как MySQL, ElasticSearch и GIT.
* Каждое новое соединение имеет собственное значение. Баллы объединяются с другими баллами вызова в общую оценку ограничения скорости.

Ограничение скорости в API GraphQL составляет **5000 баллов в час**. 

Обратите внимание, что 5000 баллов в час — это не то же самое, что 5000 вызовов в час: в API GraphQL и REST API используются разные ограничения скорости.

{% note %}

**Примечание**. Текущая формула и ограничение скорости могут изменяться по мере наблюдения за тем, как разработчики используют API GraphQL.

{% endnote %}

### Возвращение состояния ограничения скорости для вызова

При использовании REST API состояние ограничения скорости можно проверить, [просмотрев](/rest/overview/resources-in-the-rest-api#rate-limiting) возвращенные заголовки HTTP.

При использовании API GraphQL состояние ограничения скорости можно проверить, запросив поля объекта `rateLimit`:

```graphql
query {
  viewer {
    login
  }
  rateLimit {
    limit
    cost
    remaining
    resetAt
  }
}
```

* В поле `limit` возвращается максимальное количество баллов, которое клиент может использовать за 60-минутный период.

* В поле `cost` возвращается стоимость в баллах для текущего вызова, который засчитывается при определении ограничения скорости.

* В поле `remaining` возвращается количество баллов, оставшихся в текущем периоде ограничения скорости.

* В поле `resetAt` возвращается время сброса текущего интервала ограничения скорости в [секундах с эпохи UTC](http://en.wikipedia.org/wiki/Unix_time).

### Вычисление оценки ограничения скорости перед выполнением вызова

При запросе объекта `rateLimit` возвращается оценка для вызова, но этот запрос учитывается при расчете ограничения. Чтобы избежать этой проблемы, можно вычислить оценку для вызова перед его выполнением. Приведенный ниже расчет дает примерно тот же результат, что и `rateLimit { cost }`.

1. Сложите количество запросов, необходимых для выполнения каждого уникального подключения в вызове. Предположим, что каждый запрос будет достигать ограничений для аргумента `first` или `last`.
2. Разделите число на **100** и округлите результат, чтобы получить итоговые совокупные затраты. На этом шаге нормализуется большое число.

{% note %}

**Примечание.** Минимальная стоимость вызова API GraphQL равна **1**, что соответствует одному запросу.

{% endnote %}

Ниже приведен пример запроса и вычисления оценки.

```graphql
query {
  viewer {
    login
    repositories(first: 100) {
      edges {
        node {
          id

          issues(first: 50) {
            edges {
              node {
                id

                labels(first: 60) {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

Для выполнения этого запроса требуется 5101 вызов:

* Хотя возвращается 100 репозиториев, API должен подключиться к учетной записи зрителя **один раз**, чтобы получить список репозиториев. Таким образом, число запросов для репозиториев = **1**.
* Хотя возвращается 50 проблем, API должен подключиться к каждому из **100** репозиториев, чтобы получить список проблем. Таким образом, число запросов для проблем = **100**.
* Хотя возвращается 60 меток, API должен подключиться к каждой из **5000** потенциальных проблем, чтобы получить список меток. Таким образом, число запросов для меток = **5000**.
* Всего **5101** запрос.

Разделим на 100, округлим, и получим окончательную оценку для запроса: **51**.
