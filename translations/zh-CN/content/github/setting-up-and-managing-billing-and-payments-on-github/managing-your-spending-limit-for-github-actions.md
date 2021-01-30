---
title: 管理 GitHub 操作的支出限额
intro: '您可以为 {% data variables.product.prodname_actions %} 的使用设置支出限额。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

### 关于 {% data variables.product.prodname_actions %} 的支出限额

{% data reusables.github-actions.actions-billing %}

{% data reusables.github-actions.actions-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} 有关 {% data variables.product.prodname_actions %} 使用价格的更多信息，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)”。

只要您将支出限额设定在 0 美元以上，您就要对当前结算周期内发生的任何超额费用负责。 例如，如果您的组织使用 {% data variables.product.prodname_team %}，不允许超额，并且创建将当月存储使用量从 1.9GB 增加到 2.1GB 的工作流程工件，那么您使用的存储空间将比产品包含的 2GB 稍高。

由于您尚未启用超额，因此下次尝试创建工作流程构件将失败。 您不会收到该月 0.1GB 超额费用的帐单。 但是，如果您启用了超额，您的第一个帐单将包括当前结算周期中 0.1GB 的现有超额以及您累积的任何其他超额。

### 管理您用户帐户的 {% data variables.product.prodname_actions %} 支出限额

任何人都可管理其用户帐户的 {% data variables.product.prodname_actions %} 支出限额。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### 管理组织的 {% data variables.product.prodname_actions %} 支出限额

组织所有者和帐单管理员可管理组织的 {% data variables.product.prodname_actions %} 支出限额。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### 管理企业帐户的 {% data variables.product.prodname_actions %} 支出限额

企业所有者和帐单管理员可管理企业帐户的 {% data variables.product.prodname_actions %} 支出限额。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. 在“
{% data variables.product.prodname_actions %} and Packages monthly usage（GitHub 操作和包每月使用）”下，单击 **Cost management（成本管理）**。
  ![成本管理选项卡](/assets/images/help/settings/cost-management-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
