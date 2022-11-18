---
title: Использование графа визуализации
shortTitle: Visualization graph
intro: 'Во время каждого выполнения рабочего процесса создается граф в режиме реального времени, иллюстрирующий ход выполнения. Этот граф можно использовать для рабочих процессов мониторинга и отладки.'
redirect_from:
  - /actions/managing-workflow-runs/using-the-visualization-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fcd1008666dd9b9e67862bddcdd5bf5800fccbdc
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009976'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

1. Граф отображает каждое задание в рабочем процессе. Значок слева от имени задания указывает состояние задания. Линии между заданиями указывают на зависимости.
   ![Граф рабочего процесса](/assets/images/help/images/workflow-graph.png)

2. Щелкните задание, чтобы просмотреть журнал заданий.
   ![Граф рабочего процесса](/assets/images/help/images/workflow-graph-job.png)
