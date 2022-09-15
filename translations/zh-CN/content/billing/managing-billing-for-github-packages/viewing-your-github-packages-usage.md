---
title: 查看 GitHub Packages 使用情况
intro: '您可以查看 {% data variables.product.prodname_registry %} 的存储空间和数据传输使用详情。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-packages-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/viewing-your-github-packages-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Packages
  - Organizations
  - User account
shortTitle: View your usage
ms.openlocfilehash: 98cce486487c5f8a3801852b6a2b4ce7fdeb210d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060440'
---
## 查看个人帐户的 {% data variables.product.prodname_registry %} 使用情况

任何人都可以查看自己个人帐户的 {% data variables.product.prodname_registry %} 使用情况。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download %}

## 查看组织的 {% data variables.product.prodname_registry %} 使用情况

组织所有者和帐单管理员可查看组织的 {% data variables.product.prodname_registry %} 使用情况。 对于由企业帐户管理的组织，只有组织所有者可以在组织的帐单页面中查看 {% data variables.product.prodname_registry %} 使用情况。

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.packages-data %} {% data reusables.dotcom_billing.actions-packages-storage %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## 查看企业帐户的 {% data variables.product.prodname_registry %} 使用情况

企业所有者和帐单管理员可查看企业帐户的 {% data variables.product.prodname_registry %} 使用情况。

{% note %}

**注意：** 企业帐户的计费详细信息仅汇总每个组织的存储数据使用情况。 {% data reusables.actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. 在“{% data variables.product.prodname_registry %}”下，查看您的企业帐户中每个组织的数据传输使用详情。
  ![数据传输使用情况详细信息](/assets/images/help/billing/packages-data-enterprise.png) {% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %} {% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
