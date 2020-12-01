---
title: ワークフローを再実行する
intro: ワークフローのインスタンスを再実行できます。 ワークフローの再実行では、ワークフローの実行をトリガーした元のイベントと同じ 「GITHUB_SHA」（コミット SHA）と「GITHUB_REF」（Git ref）が使用されます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. ワークフローの右上隅にある [**Re-run jobs**] ドロップダウンメニューを使用して、[**Re-run all jobs**] を選択します。 ![[Re-run checks] ドロップダウンメニュー](/assets/images/help/repository/rerun-checks-drop-down.png)
