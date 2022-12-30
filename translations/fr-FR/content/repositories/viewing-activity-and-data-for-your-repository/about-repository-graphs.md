---
title: À propos des graphes d’un dépôt
intro: Les graphes de dépôt vous aident à afficher et analyser les données de votre dépôt.
redirect_from:
  - /articles/using-graphs
  - /articles/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/about-repository-graphs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a8e2b228e4729e0c86d0234aadc7f0eebab7d2d5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132053'
---
Les graphes d’un dépôt vous donnent des informations sur le trafic {% ifversion fpt or ghec %}, les projets qui dépendent du dépôt,{% endif %} les contributeurs et les commits dans le dépôt, ainsi que les duplications (forks) et le réseau du dépôt. Si vous gérez un dépôt, vous pouvez utiliser ces données pour mieux comprendre qui utilise votre dépôt et pourquoi.

{% ifversion fpt or ghec %}

Certains graphes de dépôt sont disponibles uniquement dans les dépôts publics avec {% data variables.product.prodname_free_user %} :
- d’impulsion
- Contributeurs
- Trafic
- Commits
- Fréquence du code
- Réseau

Tous les autres graphes de dépôt sont disponibles dans tous les dépôts. Chaque graphe de dépôt est disponible dans les dépôts publics et privés avec {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} et {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}

{% endif %}
