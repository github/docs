---
title: 엔터프라이즈의 고급 보안 정책 적용
intro: 엔터프라이즈 조직 내에서 {% data variables.product.prodname_GH_advanced_security %} 기능을 관리하는 정책을 적용하거나 각 조직에서 정책을 설정하도록 허용할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145116391"
---
## 엔터프라이즈의 {% data variables.product.prodname_GH_advanced_security %}에 대한 정책 정보

{% data reusables.advanced-security.ghas-helps-developers %} 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 정보](/get-started/learning-about-github/about-github-advanced-security)”를 참조하세요.

{% ifversion ghes or ghec %} {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스를 구매하는 경우 {% data variables.product.product_location %}의 {% else %}모든{% endif %} 조직은 {% data variables.product.prodname_advanced_security %} 기능을 사용할 수 있습니다. 정책을 적용하여 {% data variables.product.product_name %}의 엔터프라이즈 멤버가 {% data variables.product.prodname_advanced_security %}를 사용하는 방법을 제어할 수 있습니다.

## 엔터프라이즈에서 {% data variables.product.prodname_GH_advanced_security %}를 사용하기 위한 정책 적용

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %} {% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}
