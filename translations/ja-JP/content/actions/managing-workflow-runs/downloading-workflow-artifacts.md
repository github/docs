---
title: Downloading workflow artifacts
intro: アーカイブされたアーティファクトは、自動的に有効期限切れになる前にダウンロードできます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}デフォルトでは、{% data variables.product.product_name %} はビルドログとアーティファクトを 90 日間保存します。リポジトリのタイプに応じて、この保持期間をカスタマイズできます。 詳しい情報については、「[リポジトリ内の GitHub Actions アーティファクトとログの保持期間を設定する](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)」を参照してください。{% endif %}
{% if currentVersion == "enterprise-server@2.22" %} {% data variables.product.product_name %} には、完全なビルドログとアーティファクトが 90 日間保存されます。{% endif %}

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under **Artifacts**, click the artifact you want to download. ![成果物のダウンロードのドロップダウンメニュー](/assets/images/help/repository/artifact-drop-down.png)
