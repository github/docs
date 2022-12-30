---
title: Migration d’ID de nœud globaux GraphQL
intro: Découvrez les deux formats d’ID de nœud globaux et comment migrer du format hérité vers le nouveau format.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
shortTitle: Migrating global node IDs
ms.openlocfilehash: 7d62d81e52b848e4fb8b5f6b2bae9997e0ac1209
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717852'
---
## Contexte

L’API GraphQL {% data variables.product.product_name %} prend actuellement en charge deux types de formats d’ID de nœud globaux. Le format hérité sera déprécié et remplacé par un nouveau format.  Ce guide vous montre comment migrer vers le nouveau format, si nécessaire. 

En migrant vers le nouveau format, vous vous garantissez que les temps de réponse de vos demandes restent cohérents et petits. Vous vous assurez également que votre application continue de fonctionner une fois que les ID hérités sont complètement dépréciés.

Pour en savoir plus sur la raison pour laquelle le format d’ID de nœud global hérité sera déprécié, consultez « [Nouveau format d’ID global à venir dans GraphQL](https://github.blog/2021-02-10-new-global-id-format-coming-to-graphql) ».

## Déterminer si vous devez prendre des mesures

Vous devez uniquement suivre les étapes de migration si vous stockez des références aux ID de nœud globaux GraphQL.  Ces ID correspondent au champ `id` de tout objet du schéma.  Si vous ne stockez pas d’ID de nœud global, vous pouvez continuer à interagir avec l’API sans modification.

En outre, si vous décodez actuellement les ID hérités pour extraire des informations sur les types (par exemple, si vous utilisez les deux premiers caractères de `PR_kwDOAHz1OX4uYAah` pour déterminer si l’objet est une demande de tirage (pull request)), votre service s’interrompt car le format des ID a changé.  Vous devez migrer votre service pour traiter ces ID comme des chaînes opaques.  Ces ID seront uniques. Par conséquent, vous pouvez vous appuyer directement dessus comme références.


## Migration vers les nouveaux ID globaux

Pour faciliter la migration vers le nouveau format d’ID, vous pouvez utiliser l’en-tête `X-Github-Next-Global-ID` dans vos demandes d’API GraphQL. La valeur de l’en-tête `X-Github-Next-Global-ID` peut être `1` ou `0`.  Définir la valeur sur `1` force la charge utile de réponse à toujours utiliser le nouveau format d’ID pour tout objet pour lequel vous avez demandé le champ `id`.  Définir la valeur sur `0` rétablit le comportement par défaut, qui consiste à afficher l’ID hérité ou le nouvel ID en fonction de la date de création de l’objet. 

Voici un exemple de demande à l’aide de cURL :

```
$ curl \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-Github-Next-Global-ID: 1" \
  https://api.github.com/graphql \
  -d '{ "query": "{ node(id: \"MDQ6VXNlcjM0MDczMDM=\") { id } }" }'
```

Même si l’ID hérité `MDQ6VXNlcjM0MDczMDM=` a été utilisé dans la requête, la réponse contient le nouveau format d’ID :
```
{"data":{"node":{"id":"U_kgDOADP9xw"}}}
```
Avec l’en-tête `X-Github-Next-Global-ID`, vous trouverez le nouveau format d’ID pour les ID hérités que vous référencez dans votre application. Vous pouvez ensuite mettre à jour ces références avec l’ID reçu dans la réponse. Vous devez mettre à jour toutes les références aux ID hérités et utiliser le nouveau format d’ID pour toutes les demandes suivantes à l’API. Pour effectuer des opérations en bloc, vous pouvez utiliser des alias pour envoyer plusieurs requêtes de nœud dans un appel d’API. Pour plus d’informations, consultez la « [documentation GraphQL](https://graphql.org/learn/queries/#aliases) ».

Vous pouvez également obtenir le nouvel ID pour une collection d’éléments. Par exemple, si vous souhaitez obtenir le nouvel ID pour les 10 derniers dépôts de votre organisation, vous pouvez utiliser une requête comme celle-ci :
```
{
  organization(login: "github") {
    repositories(last: 10) {
      edges {
        cursor
        node {
          name
          id
        }
      }
    }
  }
}
```

Notez que le paramètre `X-Github-Next-Global-ID` défini sur `1` affecte la valeur de retour de chaque champ `id` de votre requête.  Cela signifie que même lorsque vous envoyez une requête non `node`, vous obtenez le nouvel ID de format si vous avez demandé le champ `id`.

## Partage de commentaires

Si vous avez des préoccupations concernant le lancement de ce changement qui a un impact sur votre application, [contactez {% data variables.product.product_name %}](https://support.github.com/contact) et incluez des informations telles que le nom de votre application afin que nous puissions vous aider au mieux.
