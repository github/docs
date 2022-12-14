---
title: Utilisation de la pagination dans l’API REST
intro: Découvrez comment parcourir les réponses paginées de l’API REST.
redirect_from:
  - /guides/traversing-with-pagination
  - /v3/guides/traversing-with-pagination
  - /rest/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Pagination
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3a47974e431b227a225584ff6d3cd65f21a1ab9a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193298'
---
## À propos de la pagination

Lorsqu’une réponse de l’API REST inclut de nombreux résultats, {% data variables.product.company_short %} les pagine et en retourne une partie. Par exemple, `GET /repos/octocat/Spoon-Knife/issues` ne retourne que 30 problèmes du dépôt `octocat/Spoon-Knife`, même si celui-ci compte plus de 1 600 problèmes ouverts. La réponse est ainsi plus facile à gérer pour les serveurs et pour les utilisateurs.

Ce guide montre comment demander des pages de résultats supplémentaires pour les réponses paginées, comment changer le nombre de résultats retournés sur chaque page et comment écrire un script pour récupérer plusieurs pages de résultats.

## Utilisation des en-têtes de lien

Quand une réponse est paginée, les en-têtes de réponse incluent un en-tête de lien. L’en-tête de lien est omis si le point de terminaison ne prend pas en charge la pagination ou si tous les résultats rentrent sur une seule page. L’en-tête de lien contient des URL que vous pouvez utiliser pour récupérer des pages supplémentaires de résultats. Pour voir les en-têtes de réponse si vous utilisez curl ou {% data variables.product.prodname_cli %}, transmettez l’indicateur `--include` avec votre demande. Pour voir les en-têtes de réponse si vous utilisez une bibliothèque pour effectuer des demandes, suivez la documentation de la bibliothèque en question. Par exemple :

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json"
```

Si la réponse est paginée, l’en-tête de lien ressemble à ceci :

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=4>; rel="next", <https://api.github.com/repositories/1300192/issues?page=515>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

L’en-tête de lien fournit l’URL de la page précédente, de la page suivante, de la première page et de la dernière page des résultats :

- L’URL de la page précédente est suivie de `rel="prev"`.
- L’URL de la page suivante est suivie de `rel="next"`.
- L’URL de la dernière page est suivie de `rel="last"`.
- L’URL de la première page est suivie de `rel="first"`.

Dans certains cas, seule une partie de ces liens est disponible. Par exemple, le lien vers la page précédente n’est pas inclus si vous êtes sur la première page de résultats, et le lien vers la dernière page ne le sera pas non plus s’il ne peut pas être calculé.

Vous pouvez utiliser les URL de l’en-tête de lien pour demander une autre page de résultats. Par exemple, pour demander la dernière page de résultats selon l’exemple précédent :

```shell
curl --include --request GET \
--url "https://api.github.com/repositories/1300192/issues?page=515" \
--header "Accept: application/vnd.github+json"
```

Les URL de l’en-tête de lien utilisent des paramètres de requête pour indiquer la page de résultats à retourner. Les paramètres de requête dans les URL de lien peuvent différer d’un point de terminaison à l’autre : chaque point de terminaison paginé utilise les paramètres de requête `page`, `before`/`after` ou `since`. (Certains points de terminaison utilisent le paramètre `since` pour autre chose que la pagination.) Dans tous les cas, vous pouvez utiliser les URL de l’en-tête de lien pour récupérer des pages de résultats supplémentaires. Pour plus d’informations sur les paramètres de requête, consultez « [Bien démarrer avec l’API REST](/rest/guides/getting-started-with-the-rest-api#using-query-parameters) ».  

## Changement du nombre d’éléments par page

Si un point de terminaison prend en charge le paramètre de requête `per_page`, vous pouvez contrôler le nombre de résultats retournés sur une page. Pour plus d’informations sur les paramètres de requête, consultez « [Bien démarrer avec l’API REST](/rest/guides/getting-started-with-the-rest-api#using-query-parameters) ».

Par exemple, cette requête utilise le paramètre de requête `per_page` pour retourner deux éléments par page :

```shell
curl --include --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json"
```

Le paramètre `per_page` est automatiquement inclus dans l’en-tête de lien. Par exemple :

```
link: <https://api.github.com/repositories/1300192/issues?per_page=2&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&page=7715>; rel="last"
```

## Écriture de scripts avec pagination

Au lieu de copier manuellement les URL à partir de l’en-tête de lien, vous pouvez écrire un script pour récupérer plusieurs pages de résultats.

Les exemples suivants utilisent JavaScript et la bibliothèque Octokit.js de {% data variables.product.company_short %}. Pour plus d’informations sur Octokit.js, consultez « [Bien démarrer avec l’API REST](/rest/guides/getting-started-with-the-rest-api?tool=javascript) » et [le fichier README d’Octokit.js](https://github.com/octokit/octokit.js/#readme).

### Exemple utilisant la méthode de pagination Octokit.js

Pour récupérer des résultats paginés avec Octokit.js, vous pouvez utiliser `octokit.paginate()`. `octokit.paginate()` récupère la page de résultats suivante jusqu’à atteindre la dernière page, puis retourne tous les résultats sous la forme d’un tableau. Quelques points de terminaison retournent les résultats paginés sous forme de tableau dans un objet, au lieu de les retourner sous forme de tableau. `octokit.paginate()` retourne toujours un tableau d’éléments même si le résultat brut était un objet. Si les résultats ne sont pas paginés, `octokit.paginate()` se comporte comme `octokit.request()`.

Par exemple, ce script obtient tous les problèmes du dépôt `octocat/Spoon-Knife`. Bien qu’elle demande 100 problèmes à la fois, la fonction n’est pas retournée tant que la dernière page de données n’est pas atteinte.

```javascript{:copy}
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});

const data = await octokit.paginate("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 100,{% ifversion api-date-versioning %}
  headers: {
    "X-GitHub-Api-Version": "{{ allVersions[currentVersion].latestApiVersion }}",
  },{% endif %}
});

console.log(data)
```

Vous pouvez passer une fonction de mappage facultative à `octokit.paginate()` pour mettre fin à la pagination avant que la dernière page ne soit atteinte ou pour réduire l’utilisation de la mémoire en conservant uniquement une partie de la réponse. Vous pouvez également utiliser `octokit.paginate.iterator()` pour itérer au sein d’une seule page à la fois au lieu de demander chaque page. Pour plus d’informations, consultez [la documentation d’Octokit.js](https://github.com/octokit/octokit.js#pagination).

### Exemple de création d’une méthode de pagination

Si vous utilisez un autre langage ou une autre bibliothèque qui n’a pas de méthode de pagination, vous pouvez créer votre propre méthode de pagination. Cet exemple utilise quand même la bibliothèque Octokit.js pour faire des demandes, mais ne s’appuie pas sur `octokit.paginate()`.

La fonction `getPaginatedData` fait une demande à un point de terminaison avec `octokit.request()`. Les données de la réponse sont traitées par `parseData`, qui gère les cas où aucune donnée n’est retournée ou les cas où les données retournées sont un objet au lieu d’un tableau. Les données traitées sont ensuite ajoutées à une liste qui contient toutes les données paginées collectées jusqu’ici. Si la réponse inclut un en-tête de lien et si l’en-tête de lien inclut un lien pour la page suivante, la fonction utilise un pattern RegEx (`nextPattern`) pour obtenir l’URL de la page suivante. La fonction répète ensuite les étapes précédentes, en utilisant désormais cette nouvelle URL. Une fois que l’en-tête de lien n’inclut plus de lien vers la page suivante, tous les résultats sont retournés.

```javascript{:copy}
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});

async function getPaginatedData(url) {
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
  let pagesRemaining = true;
  let data = [];

  while (pagesRemaining) {
    const response = await octokit.request(`GET ${url}`, {
      per_page: 100,{% ifversion api-date-versioning %}
      headers: {
        "X-GitHub-Api-Version":
          "{{ allVersions[currentVersion].latestApiVersion }}",
      },{% endif %}
    });

    const parsedData = parseData(response.data)
    data = [...data, ...parsedData];

    const linkHeader = response.headers.link;

    pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

    if (pagesRemaining) {
      url = linkHeader.match(nextPattern)[0];
    }
  }

  return data;
}

function parseData(data) {
  // If the data is an array, return that
    if (Array.isArray(data)) {
      return data
    }

  // Some endpoints respond with 204 No Content instead of empty array
  //   when there is no data. In that case, return an empty array.
  if (!data) {
    return []
  }

  // Otherwise, the array of items that we want is in an object
  // Delete keys that don't include the array of items
  delete data.incomplete_results;
  delete data.repository_selection;
  delete data.total_count;
  // Pull out the array of items
  const namespaceKey = Object.keys(data)[0];
  data = data[namespaceKey];
  
  return data;
}

const data = await getPaginatedData("/repos/octocat/Spoon-Knife/issues");

console.log(data);
```
