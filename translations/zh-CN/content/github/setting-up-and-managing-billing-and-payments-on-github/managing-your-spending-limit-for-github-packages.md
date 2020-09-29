---
title: 管理 GitHub 包的支出限额
intro: '您可以为 {% data variables.product.prodname_registry %} 的使用设置支出限额。'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

### 关于 {% data variables.product.prodname_registry %} 的支出限额

{% data reusables.package_registry.packages-billing %}

您可以设置更高的支出限额，或者对某些帐户允许无限制的支出。 如果您按发票为组织或企业帐户付款，可以预付超额费用以设置更高的支出限额。 The spending limit applies to your combined overages for {% data variables.product.prodname_registry %} and {% data variables.product.prodname_actions %}. For more information about pricing for {% data variables.product.prodname_registry %} usage, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

只要您将支出限额设定在 0 美元以上，您就要对过去发生的任何超额情况负责。 例如，如果您的组织使用 {% data variables.product.prodname_team %}，不允许超额，并且发布新版私有包，将当月存储使用量从 1.9GB 增加到 2.1GB，那么发布该版本使用的存储空间将比产品包含的 2GB 稍高。

由于您尚未启用超额，因此下次尝试发布包版本将失败。 您不会收到该月 0.1GB 超额费用的帐单。 但是，如果您在下个月启用超额，您的第一份帐单将包括过去的 0.1GB 超额，以及当前计费周期的任何超额。

### 管理您用户帐户的 {% data variables.product.prodname_registry %} 支出限额

任何人都可管理其用户帐户的 {% data variables.product.prodname_registry %} 支出限额。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### 管理组织的 {% data variables.product.prodname_registry %} 支出限额

组织所有者和帐单管理员可管理组织的 {% data variables.product.prodname_registry %} 支出限额。

如果通过发票支付组织帐户，您无法在 {% data variables.product.product_name %} 上管理企业帐户的支出限额。 如果想允许组织拥有的仓库对 {% data variables.product.prodname_registry %} 的使用超出各仓库包含的存储或数据传输量，您可以预付超限费用。 由于超限必须预付，因此不能对按发票付费的帐户启用无限制支出。 您的支出限额将是您预付金额的 150%。 如有任何问题，请[联系我们的客户管理团队](https://enterprise.github.com/contact)。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### 管理企业帐户的 {% data variables.product.prodname_registry %} 支出限额

Enterprise owners and billing managers can manage the spending limit for {% data variables.product.prodname_registry %} for an enterprise account.

{% data reusables.package_registry.spending-limit-enterprise-account %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. 在“{% data variables.product.prodname_actions %} and Packages monthly usage（GitHub 操作和包每月使用）”下，单击 **Cost management（成本管理）**。 ![成本管理选项卡](/assets/images/help/settings/cost-management-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
