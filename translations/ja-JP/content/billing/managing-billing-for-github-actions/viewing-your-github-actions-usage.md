---
title: GitHub Actions の使用状況を表示する
intro: '{% data variables.product.prodname_actions %} の利用時間 (分) とストレージの使用状況について詳細を表示できます。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/viewing-your-github-actions-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - User account
shortTitle: Actionsの使用状況の表示
---

個々のワークフロー実行について、請求可能なジョブ実行の時間（分）を確認することもできます。 詳しい情報については、「[ジョブの実行時間を表示する](/actions/managing-workflow-runs/viewing-job-execution-time)」を参照してください。

## 個人アカウントの {% data variables.product.prodname_actions %} の使用状況を表示する

自身の個人アカウントの {% data variables.product.prodname_actions %} の使用状況は、誰でも表示できます。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

## Organizationの {% data variables.product.prodname_actions %} の使用状況を表示する

Organization については、Organization のオーナーと支払いマネージャーが {% data variables.product.prodname_actions %} の使用状況を管理できます。 Enterprise アカウントで管理されている Organization の場合、Organization の支払いページで {% data variables.product.prodname_actions %} の使用状況を確認できるのは Organization のオーナーだけです。

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.actions-minutes %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## Enterprise アカウントの {% data variables.product.prodname_actions %} の使用状況を表示する

Enterprise アカウントについては、Enterprise オーナーと支払いマネージャーが {% data variables.product.prodname_actions %} の使用状況を確認できます。

{% note %}

**注釈:** Enterprise アカウントの支払い詳細には、オペレーティングシステムごとの利用時間 (分) の概要は示されません。 {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. [{% data variables.product.prodname_actions %}] で、Enterprise アカウントの Organization ごとにデータ転送の使用状況の詳細を表示します。 ![利用時間 (分) の詳細](/assets/images/help/billing/actions-minutes-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
{% endif %}
