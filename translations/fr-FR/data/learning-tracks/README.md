---
ms.openlocfilehash: dcc6cf1e8adf15c4997d4d62cd34bde99f7d37cd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145101457"
---
# Parcours d’apprentissage

Les parcours d’apprentissage sont une collection d’articles qui vous aident à maîtriser un sujet particulier. Les parcours d’apprentissage sont définis produit par produit. Par exemple, consultez https://docs.github.com/en/actions/guides.

## Fonctionnement

Les données des parcours d’apprentissage d’un produit sont définies à deux endroits :

1. Un tableau simple de noms de parcours d’apprentissage est défini dans les informations préliminaires de la page d’index des guides de produit.

    Par exemple, dans `content/actions/guides/index.md` :
    ```
    learningTracks:
      - getting_started
      - continuous_integration
      - continuous_deployment
      - deploy_to_the_cloud
      - hosting_your_own_runners
      - create_actions
    ```

2. Des données supplémentaires pour chaque parcours sont définies dans un fichier YAML nommé pour le **produit** dans le répertoire `data`.

    Par exemple, dans `data/learning-tracks/actions.yml`, chacun des éléments du tableau `learningTracks` du fichier de contenu est représenté par des données supplémentaires telles que `title`, `description` et un tableau de liens `guides`.

    Un parcours d’apprentissage dans ce fichier YAML **par version** doit être désigné en tant que parcours d’apprentissage « recommandé » via `featured_track: true`, ce qui permet de l’afficher en haut de la page des guides de produit. Un test échoue si cette propriété est manquante.

    La propriété `featured_track` peut être un simple booléen (c’est-à-dire `featured_track: true`) ou une chaîne qui comprend des instructions de gestion de versions (par exemple `featured_track: '{% ifversion fpt %}true{% else %}false{% endif %}'`). Si vous utilisez la gestion de versions, vous aurez plusieurs `featured_track` par fichier YML. Toutefois, vérifiez qu’un seul d’entre s’affiche dans chaque version prise en charge. Un test échoue s’il existe plus ou moins d’un lien proposé pour chaque version.

## Gestion de version

La gestion de versions des parcours d’apprentissage est traitée au moment de l’affichage de la page. Le code réside dans [`lib/learning-tracks.js`](lib/learning-tracks.js), qui est appelé par `page.render()`. Les parcours d’apprentissage traités sont ensuite affichés par `components/guides`.

Les instructions conditionnelles Liquid ne doivent **pas** être utilisées pour la gestion de versions dans le fichier YAML des guides. Seuls les guides de parcours d’apprentissage qui s’appliquent à la version actuelle sont affichés automatiquement. S’il n’existe aucune piste avec des repères appartenant à la version actuelle, la section des parcours d’apprentissage ne s’affiche pas du tout.

La gestion de versions explicite au sein des données YML des parcours d’apprentissage d’un produit est également prise en charge. Le format et les valeurs autorisées sont les mêmes que pour la [propriété versions des informations préliminaires](/content#versions).

Par exemple :

```
learning_track_name:
  title: 'Learning track title'
  description: 'Learning track description'
  featured_track: true
  versions:
    ghes: '>=3.0'
  guides:
   - /path/to/guide1
   - /path/to/guide2
```

Si la propriété `versions` n’est pas incluse, le parcours est censé être disponible dans toutes les versions.

## Application du schéma

Le schéma de validation du parcours d’apprentissage YAML réside dans [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) et est utilisé par [`tests/content/lint-files.js`](tests/content/lint-files.js).
