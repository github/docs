---
title: Migration de REST vers GraphQL
intro: 'Découvrez les bonnes pratiques et les aspects de la migration de l’API REST de {% data variables.product.prodname_dotcom %} vers l’API GraphQL de {% data variables.product.prodname_dotcom %}.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145066656'
---
## Différences dans la logique d’API

La migration de REST vers GraphQL représente un changement important dans la logique d’API. Les différences entre REST en tant que style et GraphQL en tant que spécification rendent difficile, et souvent non souhaitable, le remplacement individuel des appels d’API REST par des requêtes d’API GraphQL. Nous avons inclus des exemples spécifiques de migration ci-dessous.

Pour migrer votre code de l’[API REST](/rest) vers l’API GraphQL :

- Examinez la [spécification GraphQL](https://graphql.github.io/graphql-spec/June2018/)
- Examinez le [schéma GraphQL](/graphql/reference) de GitHub
- Réfléchissez à la façon dont le code existant dont vous disposez interagit actuellement avec l’API REST GitHub
- Utilisez des [ID de nœud global](/graphql/guides/using-global-node-ids) pour référencer des objets entre les versions d’API

GraphQL présente les avantages significatifs suivants :

- [Obtention des données dont vous avez besoin, et rien de plus](#example-getting-the-data-you-need-and-nothing-more)
- [Champs imbriqués](#example-nesting)
- [Typage fort](#example-strong-typing)

Voici quelques exemples de chacun d’entre eux.

## Exemple : Obtention des données dont vous avez besoin, et rien de plus

Un seul appel d’API REST récupère une liste des membres de votre organisation :
```shell
curl -v {% data variables.product.api_url_pre %}/orgs/:org/members
```

La charge utile REST contient des données excessives si votre objectif est de récupérer uniquement des noms de membres et des liens vers des avatars. En revanche, une requête GraphQL retourne uniquement ce que vous spécifiez :

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

Prenons un autre exemple : récupération d’une liste de demandes de tirage (pull request) et vérification de la possibilité, pour chacune d’elles, d’être fusionnée. Un appel à l’API REST récupère une liste de demandes de tirage et leurs [représentations récapitulatives](/rest#summary-representations) :
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls
```

Déterminer si une demande de tirage peut être fusionnée nécessite de récupérer chaque demande de tirage individuellement pour obtenir sa [représentation détaillée](/rest#detailed-representations) (une charge utile volumineuse) et de vérifier si son attribut `mergeable` a la valeur true ou false :
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
```

Avec GraphQL, vous pouvez récupérer uniquement les attributs `number` et `mergeable` de chaque demande de tirage :

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

## Exemple : Imbrication

L’interrogation avec des champs imbriqués vous permet de remplacer plusieurs appels REST par moins de requêtes GraphQL. Par exemple, la récupération d’une demande de tirage avec ses commits, ses commentaires sans révision et ses révisions à l’aide de l’**API REST** nécessite quatre appels distincts :
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/commits
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/issues/:number/comments
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/reviews
```

À l’aide de l’**API GraphQL**, vous pouvez récupérer les données avec une seule requête à l’aide de champs imbriqués :

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

Vous pouvez également étendre la puissance de cette requête en [remplaçant une variable](/graphql/guides/forming-calls-with-graphql#working-with-variables) pour le numéro de demande de tirage.

## Exemple : Typage fort

Les schémas GraphQL sont fortement typés, ce qui rend la gestion des données plus sûre.

Prenons un exemple d’ajout d’un commentaire à un problème ou à une demande de tirage à l’aide d’une [mutation](/graphql/reference/mutations) GraphQL et de spécification erronée d’un entier plutôt que d’une chaîne pour la valeur de [`clientMutationId`](/graphql/reference/mutations#addcomment) :

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

L’exécution de cette requête retourne des erreurs spécifiant les types attendus pour l’opération :

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

Placer `1234` entre guillemets transforme la valeur d’entier en chaîne, le type attendu :

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
