---
title: 升级或降级客户的付费组织
intro: 帐单管理员可以随时升级或降级客户的付费组织。
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Upgrades
shortTitle: Upgrade or downgrade
ms.openlocfilehash: 2309c89fabf2a81aab18df90b8c545f0f3f684e1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084422'
---
{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**提示**：
- 升级客户的组织之前，可以[查看或更新组织文件的付款方式](/articles/adding-or-editing-a-payment-method)。
- 这些说明适用于升级或降级按席位订阅的组织。 如果客户使用旧的按存储库方案支付 {% data variables.product.product_name %}，可以升级或[降级](/articles/downgrading-your-github-subscription)其旧方案，或[将其组织切换为按席位定价](/articles/upgrading-your-github-subscription)。

{% endtip %}

## 升级组织的付费席位数量

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

添加席位后，将基于您添加的席位数量以及结算周期的剩余时间对组织存档的付款方式按比例收取费用。

## 将组织的付费席位数量降级为免费

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.downgrade-org-to-free %} {% data reusables.dotcom_billing.confirm_cancel_org_plan %}
