---
title: ワークフローの成果物をダウンロードする
intro: アーカイブされた成果物は、自動的に有効期限切れになる前にダウンロードできます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}デフォルトでは、{% data variables.product.product_name %} はビルドログと成果物を 90 日間保存します。リポジトリのタイプに応じて、この保持期間をカスタマイズできます。 詳しい情報については、「[リポジトリ内の GitHub Actionsの成果物とログの保持期間を設定する](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)」を参照してください。{% endif %}
{% if currentVersion == "enterprise-server@2.22" %} {% data variables.product.product_name %} には、完全なビルドログと成果物が 90 日間保存されます。{% endif %}

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. [**Artifacts**] の下で、ダウンロードする成果物をクリックします。
    {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
    ![成果物のダウンロードのドロップダウンメニュー](/assets/images/help/repository/artifact-drop-down-updated.png)
    {% else %}
    ![成果物のダウンロードのドロップダウンメニュー](/assets/images/help/repository/artifact-drop-down.png)
    {% endif %}
