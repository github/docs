---
title: Utilisation d’Explorer
intro: 'Vous pouvez exécuter des requêtes sur des données réelles {% data variables.product.prodname_dotcom %} à l’aide de l’explorateur GraphQL, un environnement de développement intégré à votre navigateur qui comprend une documentation, une coloration syntaxique et des erreurs de validation.'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 19c534dd0cdcacdfd0d96bb93d055ff3fca8690b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146749488'
---
## À propos de GraphQL Explorer

{% ifversion fpt or ghec %}

[GraphQL Explorer](/graphql/overview/explorer) est une instance de [GraphiQL](https://github.com/graphql/graphiql), qui est un « IDE GraphQL interactif graphique dans le navigateur ».

{% else %}

[GraphiQL](https://github.com/graphql/graphiql), également désigné dans cette documentation comme GraphQL Explorer, est un « IDE GraphQL interactif dans navigateur graphique ».

{% endif %}

## Utilisation de GraphiQL

Pour utiliser l’application GraphiQL, téléchargez et installez-la à partir de https://github.com/skevy/graphiql-app.

### Configuration de GraphiQL

1. Obtenez un [jeton OAuth](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql).
1. Lancez GraphiQL.
1. Dans le coin supérieur droit de GraphiQL, cliquez sur **Edit HTTP Headers**.
1. Dans le champ **Key**, entrez `Authorization`. Dans le champ **Value**, entrez `Bearer <token>`, où `<token>` est votre jeton OAuth généré.
![en-têtes graphiql](/assets/images/developer/graphiql-headers.png)
1. Cliquez sur la coche à droite du jeton pour l’enregistrer.
1. Pour revenir à l’éditeur, cliquez en dehors de la fenêtre modale **Modifier des en-têtes HTTP**.
1. Dans le champ **GraphQL Endpoint**, entrez `{% data variables.product.graphql_url_pre %}`.
1. Dans la liste déroulante **Méthode**, sélectionnez **POST**.

{% note %}

**Remarque** : pour plus d’informations sur la raison pour laquelle `POST` est la méthode, consultez « [Communication avec GraphQL](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql) ».

{% endnote %}

Vous pouvez tester votre accès en vous interrogeant vous-même :

```graphql
query {
  viewer {
    login
  }
}
```

Si tout a fonctionné correctement, votre connexion s’affiche. Vous êtes tous prêts à commencer à effectuer des requêtes.

## Accès aux documents de la barre latérale

Tous les types d’un schéma GraphQL incluent un champ `description` compilé dans la documentation. Le volet réductible **Docs** sur le côté droit de la page Explorer vous permet de parcourir la documentation sur le système type. Les documents sont automatiquement mis à jour et suppriment les champs déconseillés.

{% note %}

La barre latérale **Docs** contient le même contenu que celui généré automatiquement à partir du schéma sous « [Référence](/graphql) », bien qu’il soit mis en forme différemment sur place.

{% endnote %}

## Utilisation du volet Variable

Voici quelques exemples d’appels qui incluent des [variables](/graphql/guides/forming-calls-with-graphql#working-with-variables) écrites comme suit :

```graphql
query($number_of_repos:Int!){
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

Il s’agit du format approprié pour envoyer l’appel via une CURL `POST` (tant que vous [échappez des lignes](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)).

Si vous souhaitez exécuter l’appel dans Explorer, entrez le segment `query` dans le volet principal et les variables dans le volet **Variables de requête** en dessous. Omettez le mot `variables` d’Explorer :

```graphql
{
   "number_of_repos": 3
}
```

## Demande de support

{% data reusables.support.help_resources %}

## Dépannage des erreurs

Étant donné que GraphQL est [introspectif](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), Explorer prend en charge :

* les typesaheads intelligents prenant en compte le schéma actuel
* les aperçus des erreurs de validation lors de la saisie

Si vous entrez une requête qui n’est pas correctement formée ou ne passe pas la [validation de schéma](/graphql/guides/introduction-to-graphql#schema), une fenêtre contextuelle vous avertit d’une erreur. Si vous exécutez la requête, l’erreur est retournée dans le volet réponse.

Une réponse GraphQL contient plusieurs clés : une synthèse `data` et un tableau `errors`.

```json
{
  "data": null,
  "errors": [
    {
      "message": "Objects must have selections (field 'nodes' returns Repository but has no selections)",
      "locations": [
        {
          "line": 5,
          "column": 8
        }
      ]
    }
  ]
}
```

Il est possible de rencontrer une erreur inattendue qui n’est pas liée au schéma. Dans ce cas, le message inclut un code de référence que vous pouvez utiliser lors de la création de rapports sur le problème :

```json
{
  "data": null,
  "errors": [
    {
      "message": "Something went wrong while executing your query. This is most likely a GitHub bug. Please include \"7571:3FF6:552G94B:69F45B7:5913BBEQ\" when reporting this issue."
    }
  ]
}
```

{% note %}

**Remarque :** {% data variables.product.prodname_dotcom %} recommande de vérifier les erreurs avant d’utiliser des données dans un environnement de production. Dans GraphQL, la défaillance n’est pas totale : des parties des requêtes GraphQL peuvent réussir alors que d’autres échouent.

{% endnote %}
