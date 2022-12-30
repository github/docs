---
title: Affichage d’un résumé de l’activité d’un dépôt
intro: 'Vous pouvez afficher une vue d’ensemble de la demande de tirage (pull request), du problème et de l’activité de commit d’un dépôt.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository activity
ms.openlocfilehash: 2dafe04a8214e2840d8b36bdd3aaeb87f0ad2764
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882302'
---
## À propos de Pulse

Vous pouvez voir une vue d’ensemble de l’activité d’un dépôt par le biais de Pulse. Pulse inclut la liste des demandes de tirage (pull requests) ouvertes et fusionnées, des problèmes ouverts et fermés, ainsi qu’un graphe montrant l’activité liée aux commits des 15 premiers utilisateurs qui ont poussé (push) des commits dans la branche par défaut du projet pendant la [période](/articles/viewing-a-summary-of-repository-activity#filtering-by-time) sélectionnée.

Les co-auteurs des commits sont inclus dans le résumé de l’activité des commits si leurs commits ont été fusionnés dans la branche par défaut du dépôt et s’ils figurent dans les 15 premiers utilisateurs ayant contribué au plus grand nombre de commits.

## Accès à Pulse

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}

## Filtrage par période

Par défaut, Pulse présente les sept derniers jours d’activité d’un dépôt. Pour choisir une autre période, cliquez sur la liste déroulante **Période** située dans l’angle supérieur droit de la vue d’ensemble de Pulse.

![Filtrage de l’activité Pulse par période](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
