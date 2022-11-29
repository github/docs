---
title: 시각화 그래프 사용
shortTitle: Visualization graph
intro: 모든 워크플로 실행은 실행 진행률을 보여 주는 실시간 그래프를 생성합니다. 이 그래프를 사용하여 워크플로를 모니터링하고 디버그할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009443'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

1. 그래프는 워크플로의 각 작업을 표시합니다. 작업 이름 왼쪽에 있는 아이콘은 작업의 상태를 나타냅니다. 작업 사이의 줄은 종속성을 나타냅니다.
   ![워크플로 그래프](/assets/images/help/images/workflow-graph.png)

2. 작업 로그를 보려면 작업을 클릭합니다.
   ![워크플로 그래프](/assets/images/help/images/workflow-graph-job.png)
