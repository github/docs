---
title: 管理 GitHub Actions 的支出限制
intro: '您可以为 {% data variables.product.prodname_actions %} 的使用设置支出限额。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - Spending limits
  - User account
shortTitle: Spending limits for Actions
ms.openlocfilehash: c1bd595a866b9e48fa4e82ebe93718328514fad9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084537'
---
## 关于 {% data variables.product.prodname_actions %} 的支出限额

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} 有关 {% data variables.product.prodname_actions %} 使用量定价的详细信息，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。

{% ifversion ghec %} 如果通过 Microsoft 企业协议购买了 {% data variables.product.prodname_enterprise %}，则可以将 Azure 订阅 ID 连接到企业帐户，以启用和支付超出额度的 {% data variables.product.prodname_actions %} 使用量，包括帐户。 有关详细信息，请参阅“[将 Azure 订阅连接到企业](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”。
{% endif %}

只要您将支出限额设定在 0 美元以上，您就要对当前结算周期内发生的任何超额费用负责。 例如，如果您的组织使用 {% data variables.product.prodname_team %}，不允许超额，并且创建将当月存储使用量从 1.9GB 增加到 2.1GB 的工作流程工件，那么您使用的存储空间将比产品包含的 2GB 稍高。

由于您尚未启用超额，因此下次尝试创建工作流程构件将失败。 您不会收到该月 0.1GB 超额费用的帐单。 但是，如果您启用了超额，您的第一个帐单将包括当前结算周期中 0.1GB 的现有超额以及您累积的任何其他超额。

## 管理个人帐户的 {% data variables.product.prodname_actions %} 支出限额

任何人都可管理其个人帐户的 {% data variables.product.prodname_actions %} 支出限额。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %}

## 管理组织的 {% data variables.product.prodname_actions %} 支出限额

组织所有者和帐单管理员可管理组织的 {% data variables.product.prodname_actions %} 支出限额。

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-actions-packages %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## 管理企业帐户的 {% data variables.product.prodname_actions %} 支出限额

企业所有者和帐单管理员可管理企业帐户的 {% data variables.product.prodname_actions %} 支出限额。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. 在“{% data variables.product.prodname_actions %} 和包每月使用量”上方，单击“支出限制”。
  ![“支出限制”选项卡](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## 管理使用和支出限制电子邮件通知
{% data reusables.billing.email-notifications %}
