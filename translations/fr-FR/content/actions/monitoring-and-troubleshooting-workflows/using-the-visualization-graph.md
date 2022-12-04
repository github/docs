---
title: Utilisation du graphe de visualisation
intro: Chaque exécution de workflow génère un graphe en temps réel qui illustre la progression de l’exécution. Vous pouvez utiliser ce graphe pour superviser et déboguer des workflows.
redirect_from:
  - /actions/managing-workflow-runs/using-the-visualization-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Use the visualization graph
ms.openlocfilehash: 7bd21c783afe21b10bdf64b8ccc42a84a009109a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107209'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

1. Le graphe affiche chaque travail dans le workflow. Une icône à gauche du nom du travail indique l’état du travail. Les lignes entre les travaux indiquent les dépendances.
   ![Graphe de workflow](/assets/images/help/images/workflow-graph.png)

2. Cliquez sur un travail pour afficher son journal.
   ![Graphe de workflow](/assets/images/help/images/workflow-graph-job.png)
