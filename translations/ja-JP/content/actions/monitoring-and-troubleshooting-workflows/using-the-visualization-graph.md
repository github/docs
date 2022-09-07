---
title: 視覚化グラフの利用
intro: すべてのワークフローの実行は、実行の進行を示すリアルタイムのグラフを生成します。 このグラフを使って、ワークフローをモニタリング及びデバッグできます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145121229'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

1. このグラフは、ワークフロー中の各ジョブを表示します。 ジョブ名の左のアイコンは、ジョブのステータスを表示します。 ジョブ間の線は、依存関係を示します。
   ![ワークフローグラフ](/assets/images/help/images/workflow-graph.png)

2. ジョブをクリックすると、そのジョブのログが表示されます。
   ![ワークフローグラフ](/assets/images/help/images/workflow-graph-job.png)
