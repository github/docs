---
title: 管理 GitHub Codespaces 的支出限制
intro: '可以为 {% data variables.product.prodname_github_codespaces %} 的使用设置支出限制。'
shortTitle: Spending limit
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces
ms.openlocfilehash: 87dd5204bb41ddaef911562cfb4662125e04139a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159789'
---
## 关于 {% data variables.product.prodname_github_codespaces %} 的支出限制

{% data reusables.codespaces.codespaces-free-for-personal-intro %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)。”

{% data reusables.codespaces.codespaces-spending-limit-requirement %} {% data reusables.codespaces.codespaces-monthly-billing %} 

达到支出限制后，将无法再创建新的 codespace，也无法启动现有的 codespace。 仍在运行的任何现有 codespace 将在不久后关闭，但在达到支出限制后，不会向你收取使用费。

{% ifversion ghec %}
## 使用 Azure 订阅
如果通过 Microsoft 企业协议购买 {% data variables.product.prodname_enterprise %}，可以将 Azure 订阅 ID 连接到企业帐户，以启用并支付 {% data variables.product.prodname_github_codespaces %} 使用费用。 有关详细信息，请参阅“[将 Azure 订阅连接到企业](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”。
{% endif %}

## 管理个人帐户的 {% data variables.product.prodname_github_codespaces %} 支出限制

可以为个人帐户的 {% data variables.product.prodname_github_codespaces %} 设置支出限制。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

## 管理组织帐户的 {% data variables.product.prodname_github_codespaces %} 支出限制

组织所有者和帐单管理员可管理组织的 {% data variables.product.prodname_github_codespaces %} 支出限制。

{% note %}

注意：企业帐户拥有的组织不能指定其自己的支出限制，因为这是在企业设置中指定的。

{% endnote %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## 管理企业帐户的 {% data variables.product.prodname_github_codespaces %} 支出限制

企业所有者和账单管理员可以管理企业帐户的 {% data variables.product.prodname_github_codespaces %} 的支出限制。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. 单击“支出限制”。

   ![“支出限制”选项卡](/assets/images/help/settings/spending-limit-tab-enterprise.png)

{% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## 在达到支出限制时导出更改

{% data reusables.codespaces.exporting-changes %}

## 管理使用和支出限制电子邮件通知

当支出达到帐户支出限制的 75%、90% 和 100% 时，系统会向帐户所有者和帐单管理员发送电子邮件通知。 

可以随时关闭这些通知，方法是导航到“计费和计划/每月支出限制”页的底部，然后清除“支出限制警报”复选框。

仅对于个人帐户，还可以选择关闭在已使用个人帐户中包含的 75%、90% 和 100% 免费使用量时发送的电子邮件通知。 为此，请清除“包含的资源警报”复选框。

![帐单邮箱通知设置的屏幕截图](/assets/images/help/codespaces/codespaces-spending-limit-notifications.png)

## 延伸阅读

- “[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
- “[管理组织中的 {% data variables.product.prodname_github_codespaces %} 成本](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)”
