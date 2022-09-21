---
title: 在企业中执行高级安全策略
intro: '您可以执行策略来管理企业组织内的 {% data variables.product.prodname_GH_advanced_security %} 功能，或者允许在每个组织中设置策略。'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_GH_advanced_security %} in an enterprise.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Policies
  - Secret scanning
  - Security
redirect_from:
  - /admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-policies-for-advanced-security-in-your-enterprise-account
shortTitle: Advanced Security policies
ms.openlocfilehash: 1858a854f78695b2fa36e0b84944f2fa05db0d00
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145098990'
---
## 关于企业中 {% data variables.product.prodname_GH_advanced_security %} 的策略

{% data reusables.advanced-security.ghas-helps-developers %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)”。

{% ifversion ghes or ghec %}如果您购买了 {% data variables.product.prodname_GH_advanced_security %} 许可证，任何{% else %}任何 {% data variables.product.product_location %} {% endif %} 组织都可以使用 {% data variables.product.prodname_advanced_security %} 功能。 您可以执行策略来控制 {% data variables.product.product_name %} 上的企业成员如何使用 {% data variables.product.prodname_advanced_security %}。

## 在企业中执行使用 {% data variables.product.prodname_GH_advanced_security %} 的策略

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %} {% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}
