---
title: Migrieren von REST zu GraphQL
intro: 'Hier lernst du Best Practices und Überlegungen zur Migration von der {% data variables.product.prodname_dotcom %}-REST API zur {% data variables.product.prodname_dotcom %}-GraphQL-API kennen.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068451'
---
## Unterschiede in der API-Logik

Beim Migrieren von REST zu GraphQL ändert sich die API-Logik drastisch. Die Unterschiede zwischen REST als Stil und GraphQL als Spezifikation gestalten es oft schwierig (und lästig), REST-API-Aufrufe eins zu eins durch GraphQL-API-Abfragen zu ersetzen. Unten findest du spezifische Beispiele für die Migration.

So migrierst du deinen Code aus der [REST-API](/rest) zur GraphQL-API:

- Überprüfe die [GraphQL-Spezifikation](https://graphql.github.io/graphql-spec/June2018/).
- Überprüfe das [GraphQL-Schema](/graphql/reference) von GitHub.
- Berücksichtige, wie derzeit vorhandener Code mit der REST-API von GitHub interagiert.
- Verwende [globale Knoten-IDs](/graphql/guides/using-global-node-ids), um auf Objekte zwischen API-Versionen zu verweisen.

Folgendes gehört zu den wichtigsten Vorteilen von GraphQL:

- [Nur benötigte Daten werden abgerufen.](#example-getting-the-data-you-need-and-nothing-more)
- [Geschachtelte Felder](#example-nesting)
- [Starke Typisierung](#example-strong-typing)

Im Folgenden findest du Beispiele zu jedem Vorteil.

## Beispiel: Nur benötigte Daten werden abgerufen

Ein einzelner REST-API-Aufruf ruft eine Liste der Mitglieder deiner Organisation ab:
```shell
curl -v {% data variables.product.api_url_pre %}/orgs/:org/members
```

Wenn du nur Namen von Mitgliedern und Links zu Avataren abrufen möchtest, enthalten die REST-Nutzdaten eine zu große Datenmenge. Eine GraphQL-Abfrage gibt jedoch nur das zurück, was du angibst:

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

Weiteres Beispiel: Du rufst eine Liste von Pull Requests ab und überprüfst, ob alle gemergt werden können. Ein Aufruf der REST-API ruft eine Liste der Pull Requests und deren [Zusammenfassungsdarstellungen](/rest#summary-representations) ab:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls
```

Wenn du bestimmen möchtest, ob ein Pull Request zusammengeführt werden kann, muss jeder Pull Request aufgrund der [detaillierten Darstellung](/rest#detailed-representations) (vieler Nutzdaten) einzeln abgerufen werden, und du musst überprüfen, ob das `mergeable`-Attribut TRUE oder FALSE ist.
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
```

Mit GraphQL kannst du nur die `number`- und `mergeable`-Attribute jedes Pull Requests abrufen:

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

## Beispiel: Schachtelung

Bei Abfragen mit geschachtelten Felder kannst du anstelle von mehreren REST-Aufrufen weniger GraphQL-Abfragen verwenden. Beispielsweise erfordert das Abrufen eines Pull Requests mit den Commits, nicht überprüften Kommentaren und Reviews mithilfe der **REST-API** vier separate Aufrufe:
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/commits
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/issues/:number/comments
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/reviews
```

Mit der **GraphQL-API** kannst du die Daten bei Verwendung geschalteter Felder mit einer einzelnen Abfrage abrufen:

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

Du kannst die Leistung dieser Abfrage außerdem verbessern, indem du [eine Variable durch die Nummer des Pull Requests ersetzt](/graphql/guides/forming-calls-with-graphql#working-with-variables).

## Beispiel: Starke Typbindung

GraphQL-Schemas weisen eine starke Typbindung auf, wodurch der Umgang mit Daten sicherer wird.

Stelle dir vor, dass du mithilfe einer GraphQL-[Mutation](/graphql/reference/mutations) einen Kommentar zu einem Issue oder Pull Request hinzufügst und versehentlich eine ganze Zahl anstelle einer Zeichenfolge für den Wert von [`clientMutationId`](/graphql/reference/mutations#addcomment) angibst:

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

Die Ausführung dieser Abfrage gibt Fehler zurück, die angeben, welche Typen bei dem Vorgang erwartet werden:

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

Wenn du `1234` mit Anführungszeichen umschließt, wird der Wert von einer ganzen Zahl in eine Zeichenfolge (den erwarteten Typ) umgewandelt:

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
