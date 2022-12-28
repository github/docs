---
title: Limitations des ressources
intro: 'L’API GraphQL {% data variables.product.prodname_dotcom %} a des limitations en place pour se protéger d’appels excessifs ou abusifs aux serveurs de {% data variables.product.prodname_dotcom %}.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381423'
---
## Limite du nombre de nœuds

Pour passer la validation de [schéma](/graphql/guides/introduction-to-graphql#schema), tous les [appels](/graphql/guides/forming-calls-with-graphql) d’API GraphQL doivent respecter les standards suivants :

* Les clients doivent fournir un argument `first` ou `last` sur toute [connexion](/graphql/guides/introduction-to-graphql#connection).
* Les valeurs de `first` et `last` doivent être comprises entre 1 et 100.
* Des appels individuels ne peuvent pas demander plus de 500 000 [nœuds](/graphql/guides/introduction-to-graphql#node) au total.

### Calcul des nœuds dans un appel

Les deux exemples suivants montrent comment calculer le nombre total de nœuds dans un appel.

1. Requête simple :

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

  Calcul :

  <pre><span class="redbox">50</span>         = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">10</span>  = 500 repository issues

              = 550 total nodes</pre>

2. Requête complexe :

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

  Calcul :

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

## Limite du taux

La limite de l’API GraphQL diffère des [limites de taux](/rest/overview/resources-in-the-rest-api#rate-limiting) de l’API REST.

Pourquoi les limites de taux d’API diffèrent-elles ? Avec [GraphQL](/graphql), un appel GraphQL peut remplacer [plusieurs appels REST](/graphql/guides/migrating-from-rest-to-graphql). Un seul appel GraphQL complexe pourrait équivaloir à milliers de demandes REST. Bien qu’un seul appel GraphQL tombe bien en dessous de la limite de taux d’API REST, la requête pourrait être tout aussi coûteuse à calculer pour les serveurs de GitHub.

Pour représenter exactement le coût de serveur d’une requête, l’API GraphQL calcule le **score de limite de taux** d’un appel en fonction d’une échelle de points normalisée. Facteurs de score d’une requête dans les premier et dernier arguments sur une connexion parente et ses enfants.

* La formule utilise les arguments `first` et `last` sur une connexion parente et ses enfants pour pré-calculer la charge potentielle sur les systèmes de GitHub, tels que MySQL, ElasticSearch et Git.
* Chaque nouvelle connexion a sa propre valeur de point. Les points sont combinés avec d’autres points de l’appel dans un score de limite de taux global.

La limite de taux de l’API GraphQL est de **5 000 points par heure**. 

Notez que 5 000 points par heure n’équivaut pas à 5 000 appels par heure : l’API GraphQL et l’API REST utilisent des limites de taux différentes.

{% note %}

**Remarque** : La formule actuelle et la limite de taux sont sujettes à modification au fur et à mesure que nous observons la manière dont les développeurs utilisent l’API GraphQL.

{% endnote %}

### Retour de l’état de la limite de taux d’un appel

Avec l’API REST, vous pouvez vérifier l’état de la limite de taux en [inspectant](/rest/overview/resources-in-the-rest-api#rate-limiting) les en-têtes HTTP retournés.

Avec l’API GraphQL, vous pouvez vérifier l’état de la limite de taux en interrogeant des champs sur l’objet `rateLimit` :

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

* Le champ `limit` retourne le nombre maximal de points que le client est autorisé à consommer dans une fenêtre de 60 minutes.

* Le champ `cost` retourne le coût du point pour l’appel actuel qui compte par rapport à la limite de taux.

* Le champ `remaining` retourne le nombre de points restants dans la fenêtre de limite de taux actuelle.

* Le champ `resetAt` retourne l’heure à laquelle la fenêtre de limite de taux actuelle se réinitialise en [secondes de l’époque UTC](http://en.wikipedia.org/wiki/Unix_time).

### Calcul d’un score de limite de taux avant d’exécuter l’appel

L’interrogation de l’objet `rateLimit` retourne le score d’un appel, mais l’exécution de l’appel compte par rapport à la limite. Pour éviter ce dilemme, vous pouvez calculer le score d’un appel avant de l’exécuter. Le calcul suivant donne à peu près le même coût que celui retourné par `rateLimit { cost }`.

1. Ajoutez le nombre de demandes nécessaires pour assurer chaque connexion unique dans l’appel. Supposons que chaque demande atteigne les limites de l’argument `first` ou `last`.
2. Divisez le nombre par **100** et arrondissez le résultat pour obtenir le coût d’agrégation final. Cette étape normalise les grands nombres.

{% note %}

**Remarque** : Le coût minimal d’un appel à l’API GraphQL est **1**, représentant une seule demande.

{% endnote %}

Voici un exemple de calcul de requête et de score :

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

La satisfaction de cette requête nécessite 5 101 :

* Bien que nous retournions 100 dépôts, l’API doit se connecter au compte de la visionneuse **une fois** pour obtenir la liste des dépôts. Ainsi, les demandes de dépôts = **1**
* Bien que nous retournions 50 problèmes, l’API doit se connecter à chacun des **100** dépôts pour obtenir la liste des problèmes. Ainsi, les demandes de problèmes = **100**
* Bien que nous retournions 60 étiquettes, l’API doit se connecter à chacun des **5 000** problèmes potentiels pour obtenir la liste des étiquettes. Ainsi, les demandes d’étiquettes = **5 000**
* Total = **5 101**

Une division par 100 et un arrondi nous donnent le score final de la requête : **51**
