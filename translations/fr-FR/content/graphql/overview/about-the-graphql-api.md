---
title: À propos de l’API GraphQL
intro: 'L’API GraphQL {% data variables.product.prodname_dotcom %} offre la flexibilité et la possibilité de définir précisément les données que vous voulez récupérer.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 9b447925609425157d5d965370c09fdd12d30b56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145066640'
---
## Vue d’ensemble

Voici quelques liens rapides pour vous aider à devenir opérationnel avec l’API GraphQL :

* [Authentification](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [Point de terminaison racine](/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [Introspection de schéma](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [Limites du taux de transfert](/graphql/overview/resource-limitations)
* [Migration à partir de REST](/graphql/guides/migrating-from-rest-to-graphql)

## À propos de GraphQL

Le langage de requête de données [GraphQL](https://graphql.github.io/) est :

* **Une [spécification](https://graphql.github.io/graphql-spec/June2018/).** La spécification détermine la validité du [schéma](/graphql/guides/introduction-to-graphql#schema) sur le serveur API. Le schéma détermine la validité des appels clients.

* **[Fortement typé](#about-the-graphql-schema-reference).** Le schéma définit le système de type et toutes les relations d’objet d’une API.

* **[Introspectif](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api).** Un client peut interroger le schéma afin d’obtenir des détails sur celui-ci.

* **[Hiérarchique](/graphql/guides/forming-calls-with-graphql)** La forme d’un appel GraphQL reflète celle des données JSON qu’il retourne. Des [champs imbriqués](/graphql/guides/migrating-from-rest-to-graphql#example-nesting) vous permettent d’interroger et recevoir uniquement les données que vous spécifiez en un seul aller-retour.

* **Une couche d’application** GraphQL n’est pas un modèle de stockage ou un langage de requête de base de données. Le _graphique_ fait référence à des structures graphiques définies dans le schéma, où des [nœuds](/graphql/guides/introduction-to-graphql#node) définissent des objets, et des [arêtes](/graphql/guides/introduction-to-graphql#edge) définissent des relations entre ceux-ci. L’API traverse et retourne des données d’application en fonction des définitions du schéma, indépendamment de la façon dont les données sont stockées.

## Pourquoi GitHub utilise GraphQL

GitHub a choisi GraphQL parce qu’il offre sensiblement plus de flexibilité pour nos intégrateurs. La possibilité de définir précisément les données que vous souhaitez &mdash;et _uniquement_  celles-ci&mdash; offre un avantage puissant par rapport aux points de terminaison d’API REST traditionnels. GraphQL vous permet de remplacer plusieurs requêtes REST par _un seul appel_ pour extraire les données que vous spécifiez.

Pour plus d’informations sur la raison qui a conduit GitHub à investir dans GraphQL, consultez le [billet de blog d’annonce](https://github.blog/2016-09-14-the-github-graphql-api/) d’origine.

## À propos de la référence du schéma GraphQL

Les documents dans la barre latérale sont générés à partir du [schéma](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) GraphQL {% data variables.product.prodname_dotcom %}. Tous les appels sont validés et exécutés par rapport au schéma. Utilisez ces documents pour découvrir les données que vous pouvez appeler :

* Opérations autorisées : [requêtes](/graphql/reference/queries) et [mutations](/graphql/reference/mutations).

* Types définis par le schéma : [scalaires](/graphql/reference/scalars), [objets](/graphql/reference/objects), [énumérations](/graphql/reference/enums), [interfaces](/graphql/reference/interfaces), [unions](/graphql/reference/unions) et [objets d’entrée](/graphql/reference/input-objects).

Vous pouvez accéder à ce même contenu via la [barre latérale de la documentation d’Explorer](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs). Notez qu’il se peut que vous deviez vous appuyer tant sur la documentation que sur la validation du schéma pour appeler correctement l’API GraphQL.

Pour d’autres informations, telles que des détails sur la limite de débit et l’authentification, consultez les [guides](/graphql/guides).

## Demande de support

{% data reusables.support.help_resources %}
