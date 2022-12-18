---
title: Setting exit codes for actions
shortTitle: Set exit codes
intro: 'Vous pouvez utiliser des codes de sortie pour définir l’état d’une action. {% data variables.product.prodname_dotcom %} affiche des états pour indiquer la réussite ou l’échec des actions.'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: 394b17dc03c4998797df222fe7c81c3269003ec9
ms.sourcegitcommit: d3929a033c42c99b153910685256d079d7d87467
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114276'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des codes de sortie

{% data variables.product.prodname_dotcom %} utilise le code de sortie pour définir l’état de vérification de l’exécution de l’action, qui peut être `success` ou `failure`.

État de sortie | Vérifier l’état de l’exécution | Description
------------|------------------|------------
`0` | `success` | L’action s’est terminée correctement et d’autres tâches qui en dépendent peuvent démarrer.
Valeur différente de zéro (tous les entiers, sauf 0)| `failure` | Tout autre code de sortie indique que l’action a échoué. En cas d’échec d’une action, toutes les actions simultanées sont annulées et les actions futures sont ignorées. L’exécution de la vérification et la suite de vérification obtiennent toutes les deux l’état `failure`.

## Configuration d’un code de sortie d’échec dans une action JavaScript

Si vous créez une action JavaScript, vous pouvez utiliser le package [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) du kit de ressources d’actions afin de journaliser un message et configurer un code de sortie d’échec. Par exemple :

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

Pour plus d’informations, consultez « [Création d’une action JavaScript](/articles/creating-a-javascript-action) ».

## Configuration d’un code de sortie d’échec dans une action de conteneur Docker

Si vous créez une action de conteneur Docker, vous pouvez définir un code de sortie d’échec dans votre script `entrypoint.sh`. Par exemple :

```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

Pour plus d’informations, consultez « [Création d’une action de conteneur Docker](/articles/creating-a-docker-container-action) ».
