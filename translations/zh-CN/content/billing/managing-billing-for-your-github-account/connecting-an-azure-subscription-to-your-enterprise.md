---
title: 将 Azure 订阅连接到您的企业
intro: '您可以使用 Microsoft 企业协议启用并支付 {% data variables.product.prodname_actions %}、{% data variables.product.prodname_registry %} 和 {% data variables.product.prodname_codespaces %} 的使用。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: 连接 Azure 订阅
---

## 关于 Azure 订阅和 {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 更多信息请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”和“[关于 {% data variables.product.prodname_registry %} 的计费](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”。

{% note %}

**注意：** 如果您的企业帐户使用 Microsoft 企业协议，则连接 Azure 订阅是使用超出 {% data variables.product.prodname_actions %} 和 {% data variables.product.prodname_registry %} 所包含金额或使用 {% data variables.product.prodname_codespaces %} 的唯一方法。

{% endnote %}

连接 Azure 订阅后，您还可以管理您的支出限制。

- “[管理 {% data variables.product.prodname_registry %} 的支出限额](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)”
- “[管理 {% data variables.product.prodname_actions %} 的支出限额](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)”
- “[管理 {% data variables.product.prodname_codespaces %} 的支出限额](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”

## 将 Azure 订阅连接到您的企业帐户

要连接 Azure 订阅，您必须拥有订阅的所有者权限。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. 在“Payment Information（付款信息）”下，单击 **Add Azure Subscription（添加 Azure 订阅）**。
1. 要登录到您的 Microsoft 帐户，请按照提示执行。
1. 查看“请求的权限”提示。 如果您同意条款，请单击 **Accept（接受）**。
1. 在“Select a subscription（选择订阅）”下，选择您想要连接到企业的 Azure 订阅 ID。

   {% note %}

   **注意：**{% data variables.product.company_short %}的订阅权限验证请求只读访问权限以显示可用订阅的列表。 要选择 Azure 订阅，必须对订阅拥有所有者权限。 如果默认租户没有正确的权限，则可能需要指定其他租户 ID。 更多信息请参阅 Microsoft 文档中的 [Microsoft 身份平台和 OAuth 2.0 授权代码流](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code)。

   {% endnote %}
1. 单击 **Connect（连接）**。

## 从企业帐户断开您的 Azure 订阅

从企业帐户断开 Azure 订阅后，您的使用不能再超过您的计划所包含的时间量。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. 在“Azure subscription（Azure 订阅）”下您要断开连接的订阅 ID 右侧，单击 **{% octicon "trash" aria-label="The trash icon" %}**。
1. 查看提示，然后单击 **Remove（删除）**。
