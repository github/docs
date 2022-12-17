---
title: Présentation de GraphQL
intro: Découvrez la terminologie et les concepts utiles pour l’API GraphQL GitHub.
redirect_from:
  - /v4/guides/intro-to-graphql
  - /graphql/guides/intro-to-graphql
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: abc74dfd4aa65035405fd956c6438a487381284b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145066669'
---
## Terminologie GraphQL

L’API GraphQL GitHub représente un changement architectural et conceptuel de l’API REST GitHub. Vous rencontrerez probablement une nouvelle terminologie dans les [documents de référence](/graphql) de l’API GraphQL.

## schéma

Un schéma définit le système type de l’API GraphQL. Il décrit l’ensemble complet de données possibles (objets, champs, relations, tout) auquel un client peut accéder. Les appels du client sont [validés](https://graphql.github.io/learn/validation/) et [exécutés](https://graphql.github.io/learn/execution/) sur le schéma. Un client peut trouver des informations sur le schéma via [l’introspection](#discovering-the-graphql-api). Un schéma réside sur le serveur de l’API GraphQL. Pour plus d’informations, consultez « [Découverte de l’API GraphQL](#discovering-the-graphql-api) ».

## Champ

Un champ est une unité de données que vous pouvez récupérer à partir d’un objet. Comme il est indiqué dans [les documents GraphQL officiels](https://graphql.github.io/learn/schema/) : « Le langage de requête GraphQL est essentiellement destiné à la sélection des champs sur des objets ».

La [spécification officielle](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields) dit également sur les champs :

> Toutes les opérations GraphQL doivent spécifier leurs sélections vers les champs qui retournent des valeurs scalaires pour garantir une réponse sans ambiguïté.

Cela signifie que si vous essayez de retourner un champ qui n’est pas scalaire, la validation du schéma lève une erreur. Vous devez ajouter des sous-champs imbriqués jusqu’à ce que tous les champs retournent des scalaires.

## Argument

Un argument est un ensemble de paires clé-valeur attachées à un champ spécifique. Certains champs nécessitent un argument. [Les mutations](/graphql/guides/forming-calls-with-graphql#about-mutations) nécessitent un objet d’entrée comme argument.

## Implémentation

Un schéma GraphQL peut utiliser le terme _implémentations_ pour définir la façon dont un objet hérite d’une [interface](/graphql/reference/interfaces).

Voici un exemple fictif de schéma qui définit l’interface `X` et l’objet `Y` :

```
interface X {
  some_field: String!
  other_field: String!
}

type Y implements X {
  some_field: String!
  other_field: String!
  new_field: String!
}
```

Cela signifie que l’objet `Y` nécessite les mêmes champs/arguments/types de retour que l’interface `X`, tout en ajoutant de nouveaux champs spécifiques à l’objet `Y`. (`!` signifie que le champ est requis.)

Dans les documents de référence, vous trouverez ce qui suit :

* Chaque [objet](/graphql/reference/objects) répertorie les interfaces _dont il hérite sous_ **Implémentations**.

* Chaque [interface](/graphql/reference/interfaces) répertorie les objets _qui héritent de celui-ci_ sous **Implémentations**.

## Connexion

Les connexions vous permettent d’interroger des objets associés dans le cadre du même appel. Avec les connexions, vous pouvez utiliser un seul appel GraphQL où vous devrez utiliser plusieurs appels vers une API REST. Pour plus d’informations, consultez l’article « [Migration pour le passage de REST vers GraphQL](/graphql/guides/migrating-from-rest-to-graphql). »

Il est utile d’imager un graphique : points connectés par des lignes. Les points sont des nœuds, les lignes sont des arêtes. Une connexion définit une relation entre les nœuds.

## Edge

Les arêtes représentent les connexions entre les nœuds. Lorsque vous interrogez une connexion, vous parcourez ses arêtes pour accéder à ses nœuds. Chaque champ `edges` a un champ `node` et un champ `cursor`. Les curseurs sont utilisés pour la [pagination](https://graphql.github.io/learn/pagination/).

## Nœud

_Noeud_ est un terme générique pour un objet. Vous pouvez rechercher un nœud directement ou accéder aux nœuds associés via une connexion. Si vous spécifiez un `node` qui ne retourne pas de [scalaire](/graphql/reference/scalars), vous devez inclure des sous-champs jusqu’à ce que tous les champs retournent des scalaires. Pour plus d’informations sur l’accès aux ID de nœud via l’API REST et leur utilisation dans les requêtes GraphQL, consultez « [Utilisation des ID de nœud globaux](/graphql/guides/using-global-node-ids) ».

## Découverte de l’API GraphQL

GraphQL est [introspectif](https://graphql.github.io/learn/introspection/). Cela signifie que vous pouvez interroger un schéma GraphQL pour plus d’informations sur lui-même.

* Requête `__schema` pour répertorier tous les types définis dans le schéma et obtenir des détails sur chacun d’eux :

  ```graphql
  query {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
        }
      }
    }
  }
  ```

* Requête `__type` pour obtenir des détails sur n’importe quel type :

  ```graphql
  query {
    __type(name: "Repository") {
      name
      kind
      description
      fields {
        name
      }
    }
  }
  ```

* Vous pouvez également exécuter une _requête d’introspection_ du schéma via une requête `GET` :

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" {% data variables.product.graphql_url_pre %}
  ```
  
  {% note %}

  **Remarque** : s vous obtenez la réponse `"message": "Bad credentials"` ou `401 Unauthorized`, vérifiez que vous utilisez un jeton valide. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ». 

  {% endnote %}
  
  Les résultats sont au format JSON, nous vous recommandons donc de les imprimer pour faciliter la lecture et la recherche. Vous pouvez utiliser un outil de ligne de commande tel que [jq](https://stedolan.github.io/jq/) ou diriger les résultats dans `python -m json.tool` dans ce but.
  
  Vous pouvez également transmettre le type de média `idl` pour renvoyer les résultats au format IDL, qui est une version condensée du schéma :

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" -H "Accept: application/vnd.github.v4.idl" \
  {% data variables.product.graphql_url_pre %}
  ```

  {% note %}

  **Remarque** : la requête d’introspection est probablement la seule requête `GET` que vous allez exécuter dans GraphQL. Si vous transmettez un corps, la méthode de requête GraphQL est `POST`, qu’il s’agisse d’une requête ou d’une mutation.

  {% endnote %}

  Pour plus d’informations sur l’exécution de requêtes, consultez « [Formation d’appels avec GraphQL](/graphql/guides/forming-calls-with-graphql) ».
