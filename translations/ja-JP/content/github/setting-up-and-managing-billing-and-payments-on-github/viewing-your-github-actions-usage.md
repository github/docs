---
title: GitHub Actions の使用状況を表示する
intro: '{% data variables.product.prodname_actions %} の利用時間 (分) とストレージの使用状況について詳細を表示できます。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
topics:
  - Billing
---

個々のワークフロー実行について、請求可能なジョブ実行の時間（分）を確認することもできます。 詳しい情報については、「[ジョブの実行時間を表示する](/actions/managing-workflow-runs/viewing-job-execution-time)」を参照してください。

### ユーザアカウントの {% data variables.product.prodname_actions %} の使用状況を表示する

自身のユーザアカウントの {% data variables.product.prodname_actions %} の使用状況は、誰でも表示できます。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Organizationの {% data variables.product.prodname_actions %} の使用状況を表示する

Organization については、Organization のオーナーと支払いマネージャーが {% data variables.product.prodname_actions %} の使用状況を管理できます。 Enterprise アカウントで管理されている Organization の場合、Organization の支払いページで {% data variables.product.prodname_actions %} の使用状況を確認できるのは Organization のオーナーだけです。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Enterprise アカウントの {% data variables.product.prodname_actions %} の使用状況を表示する

Enterprise アカウントについては、Enterprise オーナーと支払いマネージャーが {% data variables.product.prodname_actions %} の使用状況を確認できます。

{% note %}

**注釈:** Enterprise アカウントの支払い詳細には、オペレーティングシステムごとの利用時間 (分) の概要は示されません。 {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. [
[{% data variables.product.prodname_actions %}] で、Enterprise アカウントの Organization ごとにデータ転送の使用状況の詳細を表示します。
  ![利用時間 (分) の詳細](/assets/images/help/billing/actions-minutes-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
