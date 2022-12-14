---
title: 将 Azure 订阅连接到您的企业
intro: '你可以使用 Microsoft 企业协议来启用 {% data variables.product.prodname_actions %}、{% data variables.product.prodname_registry %} 和 {% data variables.product.prodname_github_codespaces %} 的使用并为其付费。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: Connect an Azure subscription
ms.openlocfilehash: a5473ff19e403eb21242982e005663d1c8ac5962
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110880'
---
## 关于 Azure 订阅和 {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”和“[关于 {% data variables.product.prodname_registry %} 的计费](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”。

{% note %}

注意：如果企业帐户签署了 Microsoft 企业协议，则连接 Azure 订阅是使用超出包含金额的 {% data variables.product.prodname_actions %} 和 {% data variables.product.prodname_registry %}，或使用 {% data variables.product.prodname_codespaces %} 的唯一方法。

{% endnote %}

连接 Azure 订阅后，你还可以管理你的支出限制。

- "[Managing your spending limit for {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)"
- "[Managing your spending limit for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)"
- “[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”

## 将 Azure 订阅连接到您的企业帐户

要连接 Azure 订阅，您必须拥有订阅的所有者权限。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. 在“付款信息”下，单击“添加 Azure 订阅”。
1. 要登录到您的 Microsoft 帐户，请按照提示执行。
1. 查看“请求的权限”提示。 如果同意条款，请单击“接受”。
1. 在“Select a subscription（选择订阅）”下，选择您想要连接到企业的 Azure 订阅 ID。

   {% note %}

   **注意：** {% data variables.product.company_short %} 的订阅权限验证将请求只读访问权限以显示可用订阅的列表。 要选择 Azure 订阅，必须对订阅拥有所有者权限。 如果默认租户没有正确的权限，则可能需要指定其他租户 ID。 有关详细信息，请参阅 Microsoft Docs 中的 [Microsoft 标识平台和 OAuth 2.0 授权代码流](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code)。

   {% endnote %}
1. 单击“连接”  。

## 从企业帐户断开您的 Azure 订阅

从企业帐户断开 Azure 订阅后，您的使用不能再超过您的计划所包含的时间量。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. 在“Azure 订阅”下你要断开连接的订阅 ID 右侧，单击“{% octicon "trash" aria-label="The trash icon" %}”。
1. 查看提示，然后单击“删除”。
