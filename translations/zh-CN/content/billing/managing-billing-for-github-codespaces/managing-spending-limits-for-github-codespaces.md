---
title: 管理 GitHub Codespaces 的支出限制
intro: '可以为 {% data variables.product.prodname_github_codespaces %} 的使用设置支出限制。'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
shortTitle: Spending limits
redirect_from:
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
ms.openlocfilehash: 562b4406c06370869b9ae185cedaa803700ad63e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111498'
---
## 关于 {% data variables.product.prodname_github_codespaces %} 的支出限制

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

达到支出限制后，您的组织或存储库将不再能够创建新的代码空间，也无法启动现有代码空间。 任何仍在运行的现有代码空间都不会关闭。如果不更改支出限制，则不会为超出限制的金额向您收费。

有关 {% data variables.product.prodname_codespaces %} 使用定价的详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”。

{% ifversion ghec %}
## 使用 Azure 订阅
如果您通过微软企业协议购买 {% data variables.product.prodname_enterprise %} ， 您可以将您的 Azure 订阅ID 连接到您的企业账户，以启用并支付您的 {% data variables.product.prodname_codespaces %} 使用费用。 有关详细信息，请参阅“[将 Azure 订阅连接到企业](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”。
{% endif %}

## 管理组织的 {% data variables.product.prodname_codespaces %} 支出限制

组织所有者和帐单管理员可管理组织的 {% data variables.product.prodname_codespaces %} 支出限制。

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## 管理企业帐户的 {% data variables.product.prodname_codespaces %} 支出限制

企业所有者和帐单管理员可管理企业帐户的 {% data variables.product.prodname_codespaces %} 支出限制。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. 在“{% data variables.product.prodname_codespaces %} 每月使用”上方，单击“支出限制”。
  ![“支出限制”选项卡](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## 在达到支出限制时导出更改

{% data reusables.codespaces.exporting-changes %}
## 管理使用和支出限制电子邮件通知

当支出达到帐户支出限制的 50%、75%、90% 和 100% 时，系统会向帐户所有者和帐单管理员发送电子邮件通知。 

可以通过导航到“支出限制”页面底部随时禁用这些通知。

![帐单邮箱通知设置的屏幕截图](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## 延伸阅读

- “[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”
- “[管理组织中的 {% data variables.product.prodname_github_codespaces %} 计费](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)”
