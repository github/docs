---
title: 視覚化グラフの利用
intro: すべてのワークフローの実行は、実行の進行を示すリアルタイムのグラフを生成します。 このグラフを使って、ワークフローをモニタリング及びデバッグできます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.visualization-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}

1. このグラフは、ワークフロー中の各ジョブを表示します。 ジョブ名の左のアイコンは、ジョブのステータスを表示します。 ジョブ間の線は、依存関係を示します。 ![ワークフローグラフ](/assets/images/help/images/workflow-graph.png)

2. ジョブをクリックすると、そのジョブのログが表示されます。 ![ワークフローグラフ](/assets/images/help/images/workflow-graph-job.png)
