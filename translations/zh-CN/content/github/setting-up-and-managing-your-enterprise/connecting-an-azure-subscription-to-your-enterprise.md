---
title: 将 Azure 订阅连接到您的企业
intro: '您可以使用 Microsoft Enterprise 协议来启用并支付超过企业所含金额的 {% data variables.product.prodname_actions %} 和 {% data variables.product.prodname_registry %} 的使用。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
versions:
  free-pro-team: '*'
---

### 关于 Azure 订阅和 {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 更多信息请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)”和“[关于 {% data variables.product.prodname_registry %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)”。

连接 Azure 订阅后，您还可以管理您的支出限制。 有关管理和更改帐户支出限制的信息，请参阅“[管理 {% data variables.product.prodname_registry %} 的支出限制](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages)”和“[管理 {% data variables.product.prodname_actions %} 的支出限制](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions)”。

### 将 Azure 订阅连接到您的企业帐户

要连接 Azure 订阅，您必须拥有订阅的所有者权限。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. 在“Payment Information（付款信息）”下，单击 **Add Azure Subscription（添加 Azure 订阅）**。
1. 要登录到您的 Microsoft 帐户，请按照提示执行。
1. 查看“请求的权限”提示。 如果您同意条款，请单击 **Accept（接受）**。
1. 在“Select a subscription（选择订阅）”下，选择您想要连接到企业的 Azure 订阅 ID。
1. 单击 **Connect（连接）**。

### 从企业帐户断开您的 Azure 订阅

从企业帐户断开 Azure 订阅后，您的使用不能再超过您的计划所包含的时间量。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. 在“Azure subscription（Azure 订阅）”下您要断开连接的订阅 ID 右侧，单击 **{% octicon "trashcan" aria-label="The trashcan icon" %}**。
1. 查看提示，然后单击 **Remove（删除）**。
