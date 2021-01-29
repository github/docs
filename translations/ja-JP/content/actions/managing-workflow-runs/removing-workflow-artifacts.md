---
title: ワークフロー アーティファクトを削除する
intro: '{% data variables.product.product_name %} で期限切れになる前にアーティファクトを削除することで、使用済みの {% data variables.product.prodname_actions %} ストレージを再利用できます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### アーティファクトを削除する

{% warning %}

**警告:** いったん削除された成果物をリストアすることはできません。

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.github-actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under **Artifacts**, click
{% octicon "trashcan" aria-label="The trashcan icon" %} next to the artifact you want to remove.
    {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
 ![成果物の削除のドロップダウンメニュー](/assets/images/help/repository/actions-delete-artifact-updated.png)
    {% else %}
    ![成果物の削除のドロップダウンメニュー](/assets/images/help/repository/actions-delete-artifact.png)
    {% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### アーティファクトの保持期間を設定する

アーティファクトとログの保持期間は、リポジトリ、Organization、および Enterprise レベルで設定できます。 詳しい情報については、「[使用制限、支払い、および管理](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)」を参照してください。

ワークフローの `actions/upload-artifact` アクションを使用して、個々のアーティファクトのカスタム保持期間を定義することもできます。 詳しい情報については、「[ワークフローデータをアーティファクトとして保存する](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)」を参照してください。

### アーティファクトの有効期限を探す

API を使用して、アーティファクトの削除がスケジュールされている日付を確認できます。 詳しい情報については、「[リポジトリのアーティファクトの一覧表示](/rest/reference/actions#artifacts)」によって返される `expires_at` 値を参照してください。
{% endif %}
