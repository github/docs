---
title: Repository Statistics
shortTitle: Statistics
allowTitleToDifferFromFilename: true
intro: 'L’API Repository Statistics vous permet de récupérer les données que {% data variables.product.product_name %} utilise pour visualiser différents types d’activités de dépôt.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 74692780426dd848634bf18f16bacd3770da001c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066129'
---
## À propos de l’API Repository Statistics

L’API Repository Statistics vous permet de récupérer les données que {% data variables.product.product_name %} utilise pour visualiser différents types d’activités de dépôt.

### À propos de la mise en cache

Le calcul des statistiques de dépôt est une opération coûteuse. Nous essayons donc de retourner les données mises en cache chaque fois que nous le pouvons.  Si les données n’ont pas été mises en cache lorsque vous interrogez les statistiques d’un dépôt, vous recevrez une réponse `202`. Un travail en arrière-plan sera également déclenché pour commencer la compilation de ces statistiques. Attendez la fin du travail pour renvoyer la demande. Si le travail est terminé, cette demande recevra une réponse `200` dont le corps contiendra les statistiques.

Les statistiques de dépôt sont mises en cache par le SHA de la branche par défaut du dépôt. Si vous poussez les données vers la branche par défaut, cela réinitialisera le cache des statistiques.

### Les statistiques excluent certains types de commits

Les statistiques exposées par l’API correspondent aux statistiques qui apparaissent dans [différents graphes de dépôt](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

Pour récapituler :
- Toutes les statistiques excluent les commits de fusion.
- Les statistiques de contributeur excluent également les commits vides.
