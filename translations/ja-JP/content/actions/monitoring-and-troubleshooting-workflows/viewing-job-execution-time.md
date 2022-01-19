---
title: ジョブの実行時間を表示する
intro: ジョブの実行時間 (ジョブの発生した支払対象の分を含む) を表示できます。
redirect_from:
  - /actions/managing-workflow-runs/viewing-job-execution-time
versions:
  fpt: '*'
  ghec: '*'
shortTitle: View job execution time
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Billable job execution minutes are only shown for jobs run on private repositories that use {% data variables.product.prodname_dotcom %}-hosted runners and are rounded up to the next minute. パブリックリポジトリで {% data variables.product.prodname_actions %} を使用する場合、またはセルフホストランナーで実行されるジョブの場合、請求対象となる実行時間はありません。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. ジョブの概要の下で、ジョブの実行時間を表示できます。 請求可能なジョブの実行時間に関する詳細を表示するには、**Billable time（請求可能な時間）**の下の時間をクリックしてください。 ![実行および支払請求可能な時間の詳細リンク](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **Note:** The billable time shown does not include any minute multipliers. To view your total {% data variables.product.prodname_actions %} usage, including minute multipliers, see "[Viewing your {% data variables.product.prodname_actions %} usage](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage)."

   {% endnote %}
