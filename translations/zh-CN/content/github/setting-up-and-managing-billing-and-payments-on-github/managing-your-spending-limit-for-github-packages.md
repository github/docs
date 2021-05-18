---
title: 管理 GitHub 包的支出限额
intro: '您可以为 {% data variables.product.prodname_registry %} 的使用设置支出限额。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - Billing
---

### 关于 {% data variables.product.prodname_registry %} 的支出限额

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} 有关 {% data variables.product.prodname_registry %} 使用价格的更多信息，请参阅“[关于 {% data variables.product.prodname_registry %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)”。

如果您通过 Microsoft 企业协议购买 {% data variables.product.prodname_enterprise %}，可以将 Azure 订阅 ID 连接到您的企业帐户，以便启用并支付超出您的帐户金额的 {% data variables.product.prodname_registry %} 使用费用。 更多信息请参阅“[将 Azure 订阅连接到您的企业](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)”。

只要您将支出限额设定在 0 美元以上，您就要对当前结算周期内发生的任何超额费用负责。 例如，如果您的组织使用 {% data variables.product.prodname_team %}，不允许超额，并且发布新版私有包，将当月存储使用量从 1.9GB 增加到 2.1GB，那么发布该版本使用的存储空间将比产品包含的 2GB 稍高。

由于您尚未启用超额，因此下次尝试发布包版本将失败。 您不会收到该月 0.1GB 超额费用的帐单。 但是，如果您启用了超额，您的第一个帐单将包括当前结算周期中 0.1GB 的现有超额以及您累积的任何其他超额。

### 管理您用户帐户的 {% data variables.product.prodname_registry %} 支出限额

任何人都可管理其用户帐户的 {% data variables.product.prodname_registry %} 支出限额。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### 管理组织的 {% data variables.product.prodname_registry %} 支出限额

组织所有者和帐单管理员可管理组织的 {% data variables.product.prodname_registry %} 支出限额。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### 管理企业帐户的 {% data variables.product.prodname_registry %} 支出限额

企业所有者和帐单管理员可管理企业帐户的 {% data variables.product.prodname_registry %} 支出限额。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Above "
{% data variables.product.prodname_actions %} and Packages monthly usage", click **Spending Limit**.
  ![Spending limit tab](/assets/images/help/settings/spending-limit-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
