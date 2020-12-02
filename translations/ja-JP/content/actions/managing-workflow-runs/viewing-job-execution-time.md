---
title: ジョブの実行時間を表示する
intro: 'ジョブの実行時間 (ジョブの発生した支払対象の分を含む) を表示できます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

請求可能なジョブ実行時間（分）は、{% data variables.product.prodname_dotcom %} ホストランナーを使用するプライベートリポジトリで実行されるジョブに対してのみ表示されます。 パブリックリポジトリで {% data variables.product.prodname_actions %} を使用する場合、またはセルフホストランナーで実行されるジョブの場合、請求対象となる実行時間はありません。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. ジョブの概要の下で、ジョブの実行時間を表示できます。 請求対象となるジョブの実行時間を表示するには、[**Run and billable time details**] をクリックします。 ![実行および支払請求可能な時間の詳細リンク](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **注:** 表示される請求可能な時間には、丸めや分数の乗数は含まれません。 四捨五入や分乗数を含む {% data variables.product.prodname_actions %} の使用状況の合計を表示するには、「[{% data variables.product.prodname_actions %} の使用状況を表示する](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage)」を参照してください。

   {% endnote %}
