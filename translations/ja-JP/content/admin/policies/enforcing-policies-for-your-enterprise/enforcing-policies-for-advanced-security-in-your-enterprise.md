---
title: エンタープライズで Advanced Security のポリシーを適用する
intro: Enterprise の Organization 内で {% data variables.product.prodname_GH_advanced_security %} 機能を管理するためのポリシーを適用したり、各 Organization でポリシーを設定したりできます。
permissions: Enterprise owners can enforce policies for {% data variables.product.prodname_GH_advanced_security %} in an enterprise.
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145116390"
---
## エンタープライズの {% data variables.product.prodname_GH_advanced_security %} のポリシーについて

{% data reusables.advanced-security.ghas-helps-developers %} 詳細については、「[{% data variables.product.prodname_GH_advanced_security %} について](/get-started/learning-about-github/about-github-advanced-security)」を参照してください。

{% ifversion ghes or ghec %}{% data variables.product.prodname_GH_advanced_security %} のライセンスを購入すると、{% data variables.product.product_location %} のあらゆる{% else %}あらゆる{% endif %}組織が {% data variables.product.prodname_advanced_security %} 機能を使用できます。 {% data variables.product.product_name %} のエンタープライズのメンバーが {% data variables.product.prodname_advanced_security %} を使用する方法を制御するポリシーを適用できます。

## エンタープライズで {% data variables.product.prodname_GH_advanced_security %} の使用に関するポリシーを適用する

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %} {% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}
