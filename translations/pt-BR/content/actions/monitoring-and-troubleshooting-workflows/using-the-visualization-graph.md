---
title: Usar o gráfico de visualização
intro: Cada execução de fluxo de trabalho gera um gráfico em tempo real que ilustra o progresso da execução. Você pode usar este gráfico para monitorar e depurar fluxos de trabalho.
redirect_from:
  - /actions/managing-workflow-runs/using-the-visualization-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Use the visualization graph
ms.openlocfilehash: 7bd21c783afe21b10bdf64b8ccc42a84a009109a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145096105'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

1. O gráfico exibe cada trabalho no fluxo de trabalho. Um ícone à esquerda do nome do trabalho indica o status do trabalho. As linhas entre as trabalhos indicam dependências.
   ![Grafo de fluxo de trabalho](/assets/images/help/images/workflow-graph.png)

2. Clique em um trabalho para visualizar o registro da tarefa.
   ![Grafo de fluxo de trabalho](/assets/images/help/images/workflow-graph-job.png)
