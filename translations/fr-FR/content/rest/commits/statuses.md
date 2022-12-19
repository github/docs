---
title: États de validation
intro: 'L’API États de commits permet aux services externes de marquer les validations avec un état, qui est ensuite reflété dans les demandes de tirage impliquant ces commits.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c75b4817ecddad0e91460d7d12eddabc634d588
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882294'
---
## À propos de l’API États de validation

L’API États de validation permet aux services externes de marquer les validations avec un état `error`, `failure`, `pending` ou `success`, qui est ensuite reflété dans les demandes de tirage impliquant ces validations. Les états peuvent également inclure `description` et `target_url` en option ; nous vous recommandons vivement de les fournir, car ils rendent les états beaucoup plus utiles dans l’interface utilisateur GitHub.

Par exemple, une utilisation courante est de permettre aux services d’intégration continue de marquer les validations comme des builds validées ou ayant échoué à l’aide de l’état.  Le `target_url` serait l’URL complète de la sortie de la build, et `description` le résumé de haut niveau de ce qui s’est passé avec la build.

Les états peuvent inclure un `context` pour indiquer quel service fournit cet état. Par exemple, vous pouvez avoir vos états push de service d’intégration continue avec un contexte de `ci`, et des états push d’outil d’audit de sécurité avec un contexte de `security`.  Vous pouvez ensuite utiliser [Obtenir l’état combiné d’une référence spécifique](/rest/reference/commits#get-the-combined-status-for-a-specific-reference) pour récupérer l’état entier d’une validation.

Notez que l’[étendue OAuth](/developers/apps/scopes-for-oauth-apps) `repo:status` accorde un accès ciblé aux états **sans** accorder également l’accès au code du référentiel, tandis que l’étendue `repo` accorde l’autorisation au code ainsi qu’aux états.

Si vous développez une application GitHub et souhaitez fournir des informations plus détaillées sur un service externe, vous pouvez utiliser [l’API Vérifications](/rest/reference/checks).
