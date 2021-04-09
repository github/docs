---
title: ワークフロー実行の削除
intro: '完了した、または 2 週間以上経過したワークフロー実行を削除できます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. ワークフロー実行を削除するには、[ {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}] ドロップダウン メニューを使用して、[**Delete workflow run（ワークフロー実行の削除）**] を選択します。

    ![ワークフロー実行の削除](/assets/images/help/settings/workflow-delete-run.png)
2. 確認プロンプトを確認し、[**Yes, permanently delete this workflow run（はい、このワークフローの実行を完全に削除します）**をクリックします。

    ![ワークフロー実行確認の削除](/assets/images/help/settings/workflow-delete-run-confirmation.png)
