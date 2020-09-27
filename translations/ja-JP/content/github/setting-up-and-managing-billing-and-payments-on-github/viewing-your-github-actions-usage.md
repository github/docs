---
title: GitHub Actions の使用状況を表示する
intro: '{{ site.data.variables.product.prodname_actions }} の利用時間 (分) とストレージの使用状況について詳細を表示できます。'
product: '{{ site.data.reusables.gated-features.actions }}'
versions:
  free-pro-team: '*'
---

個々のワークフロー実行について、請求可能なジョブ実行の時間（分）を確認することもできます。 詳しい情報については「[ワークフロー実行の管理](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-billable-job-execution-minutes)」を参照してください。

### ユーザアカウントの {{ site.data.variables.product.prodname_actions }} の使用状況を表示する

自身のユーザアカウントの {{ site.data.variables.product.prodname_actions }} の使用状況は、誰でも表示できます。

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### Organizationの {{ site.data.variables.product.prodname_actions }} の使用状況を表示する

Organization については、Organization のオーナーと支払いマネージャーが {{ site.data.variables.product.prodname_actions }} の使用状況を管理できます。 Enterprise アカウントで管理されている Organization の場合、Organization の支払いページで {{ site.data.variables.product.prodname_actions }} の使用状況を確認できるのは Organization のオーナーだけです。

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.dotcom_billing.actions-minutes }}
{{ site.data.reusables.dotcom_billing.actions-packages-storage }}
{{ site.data.reusables.dotcom_billing.actions-packages-report-download }}

### Enterprise アカウントの {{ site.data.variables.product.prodname_actions }} の使用状況を表示する

Enterprise owners and billing managers can view {{ site.data.variables.product.prodname_actions }} usage for an enterprise account.

{% note %}

**注釈:** Enterprise アカウントの支払い詳細には、オペレーティングシステムごとの利用時間 (分) の概要は示されません。 {{ site.data.reusables.github-actions.enterprise-billing-details }}

{% endnote %}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.billing-tab }}
1. [{{ site.data.variables.product.prodname_actions }}] で、Enterprise アカウントの Organization ごとにデータ転送の使用状況の詳細を表示します。 ![利用時間 (分) の詳細](/assets/images/help/billing/actions-minutes-enterprise.png)
{{ site.data.reusables.dotcom_billing.actions-packages-storage-enterprise-account }}
{{ site.data.reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts }}
