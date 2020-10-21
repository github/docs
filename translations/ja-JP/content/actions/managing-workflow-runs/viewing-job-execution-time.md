---
title: Viewing job execution time
intro: 'ジョブの実行時間 (ジョブの発生した支払対象の分を含む) を表示できます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

Billable job execution minutes are only shown for jobs run on private repositories that use {% data variables.product.prodname_dotcom %}-hosted runners. There are no billable minutes when using {% data variables.product.prodname_actions %} in public repositories or for jobs run on self-hosted runners.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under the job summary, you can view the job's execution time. To view the billable job execution time, click **Run and billable time details**. ![実行および支払請求可能な時間の詳細リンク](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **注:** 表示される請求可能な時間には、丸めや分数の乗数は含まれません。 To view your total {% data variables.product.prodname_actions %} usage, including rounding and minute multipliers, see "[Viewing your {% data variables.product.prodname_actions %} usage](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage)."

   {% endnote %}
