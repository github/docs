---
title: Utilizar la gráfica de visualización
intro: Cada ejecución de flujo de trabajo genera una gráfica en tiempo real que ilustra el progreso de la misma. Puedes utilizar esta gráfica para monitorear y depurar los flujos de trabajo.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121226'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

1. La gráfica muestra cda job en el flujo de trabajo. Un icono a la izquierda del nombre del job indica el estado del mismo. Las líneas entre los jobs indican las dependencias.
   ![Grafo de flujo de trabajo](/assets/images/help/images/workflow-graph.png)

2. Da clic en un job para ver la bitácora del mismo.
   ![Grafo de flujo de trabajo](/assets/images/help/images/workflow-graph-job.png)
