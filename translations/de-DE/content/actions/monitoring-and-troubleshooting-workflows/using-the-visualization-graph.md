---
title: Verwenden des Visualisierungsdiagramms
intro: 'Jede Workflowausführung generiert ein Echtzeitdiagramm, das den Ausführungsfortschritt veranschaulicht. Du kannst dieses Diagramm verwenden, um Workflows zu überwachen und zu debuggen.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107208'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

1. Das Diagramm zeigt jeden Auftrag im Workflow an. Ein Symbol links neben dem Auftragsnamen gibt den Status des Auftrags an. Zeilen zwischen Aufträgen geben Abhängigkeiten an.
   ![Workflowdiagramm](/assets/images/help/images/workflow-graph.png)

2. Klicke auf einen Auftrag, um das Auftragsprotokoll anzuzeigen.
   ![Workflowdiagramm](/assets/images/help/images/workflow-graph-job.png)
