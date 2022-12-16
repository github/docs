---
title: 엔터프라이즈에 대한 코드 보안 및 분석을 위한 정책 적용
intro: '정책을 적용하여 엔터프라이즈 조직 내에서 {% ifversion security-feature-enablement-policies %}코드 보안 및 분석{% else %}{% 데이터 variables.product.prodname_GH_advanced_security %}{% endif %} 기능의 사용을 관리할 수 있습니다.'
permissions: 'Enterprise owners can enforce {% ifversion security-feature-enablement-policies %}code security and analysis{% endif %} policies for {% data variables.product.prodname_GH_advanced_security %} in an enterprise.'
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
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise
shortTitle: Code security & analysis
ms.openlocfilehash: 25c580911b69decabe94fd7f376e17bcea949b35
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093779'
---
{% ifversion security-feature-enablement-policies %}
## 엔터프라이즈의 코드 보안 및 분석에 대한 정책 정보

정책을 적용하여 엔터프라이즈가 소유한 조직 내에서 코드 보안 및 분석 기능의 사용을 관리할 수 있습니다. 관리자가 리포지토리에 액세스할 수 있도록 허용하거나 허용하지 않으면 보안 및 분석 기능을 사용하거나 사용하지 않도록 설정할 수 있습니다.
{% else %}
## 엔터프라이즈의 {% data variables.product.prodname_GH_advanced_security %}에 대한 정책 정보
{% endif %}

{% data reusables.advanced-security.ghas-helps-developers %} 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 정보](/get-started/learning-about-github/about-github-advanced-security)”를 참조하세요.

{% ifversion ghes 또는 ghec %} {% 데이터 variables.product.prodname_GH_advanced_security %}에 대한 라이선스를 구매한 경우 {% 데이터 variables.location.product_location %}에서 엔터프라이즈{% endif %}가 소유한 {% else %}임의{% endif %} 조직{% ifversion ghec %}에서 {% 데이터 variables.product.prodname_advanced_security %} 기능을 사용할 수 있습니다. 정책을 적용하여 {% data variables.product.product_name %}의 엔터프라이즈 멤버가 {% data variables.product.prodname_advanced_security %}를 사용하는 방법을 제어할 수 있습니다.

{% ifversion security-feature-enablement-policies %}
## 엔터프라이즈에서 {% 데이터 variables.product.prodname_dependabot_alerts %}의 사용을 관리하는 정책 적용

엔터프라이즈가 소유한 모든 조직에서 리포지토리에 대한 관리자 권한이 있는 구성원이 {% 데이터 variables.product.prodname_dependabot_alerts %}을(를) 사용하거나 사용하지 않도록 설정하고 {% 데이터 variables.product.prodname_dependabot_alerts %} 설정을 변경할 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. "{% 데이터 variables.product.prodname_dependabot_alerts %} 설정 변경"에서 드롭다운 메뉴를 사용하고 정책을 선택합니다.

   !["Dependabot 경고 설정 변경" 드롭다운 스크린샷](/assets/images/help/enterprises/change-dependabot-alerts-settings.png)

{% endif %}

## 엔터프라이즈 조직에서 {% 데이터 variables.product.prodname_GH_advanced_security %}을(를) 사용하기 위한 정책 적용

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% ifversion security-feature-enablement-policies %} {% data reusables.enterprise-accounts.code-security-and-analysis-policies %} {% else %} {% data reusables.enterprise-accounts.advanced-security-policies %} {% endif %} {% ifversion security-feature-enablement-policies %}
1. "{% 데이터 variables.product.prodname_GH_advanced_security %} 정책 섹션의 "가용성"에서 드롭다운 메뉴를 선택하고 엔터프라이즈가 소유한 조직의 정책을 클릭합니다.

   !["가용성" 드롭다운 스크린샷](/assets/images/help/enterprises/advanced-security-policies-availability.png){% else %}

{% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %} {% endif %} {% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}

{% ifversion security-feature-enablement-policies %}
## 엔터프라이즈 리포지토리에서 {% 데이터 variables.product.prodname_GH_advanced_security %} 기능의 사용을 관리하는 정책 적용

모든 엔터프라이즈 조직에서 리포지토리에 대한 관리자 액세스 권한이 있는 사용자가 리포지토리에서 {% 데이터 variables.product.prodname_GH_advanced_security %} 기능의 사용을 관리하도록 허용하거나 허용하지 않을 수 있습니다. {% data reusables.advanced-security.ghas-must-be-enabled %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. "{% 데이터 variables.product.prodname_GH_advanced_security %} 정책 섹션의 "{% 데이터 variables.product.prodname_GH_advanced_security %}을(를) 사용하거나 사용하지 않도록 설정"에서 드롭다운 메뉴를 사용하고 정책을 선택합니다.

   !["{% 데이터 variables.product.prodname_GH_advanced_security %}을(를) 사용하거나 사용하지 않도록 설정" 드롭다운 스크린샷](/assets/images/help/enterprises/advanced-security-policies-enable-or-disable.png)

## 엔터프라이즈 리포지토리에서 {% 데이터 variables.product.prodname_secret_scanning %}의 사용을 관리하는 정책 적용

모든 엔터프라이즈 조직에서 리포지토리에 대한 관리자 액세스 권한이 있는 사용자가 리포지토리에 대한 {% 데이터 variables.product.prodname_secret_scanning %}을(를) 관리하고 구성할 수 있도록 허용하거나 허용하지 않을 수 있습니다. {% data reusables.advanced-security.ghas-must-be-enabled %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. "{% 데이터 variables.product.prodname_GH_advanced_security %} 정책 섹션의 "{% 데이터 variables.product.prodname_secret_scanning %} 설정 변경"에서 드롭다운 메뉴를 사용하고 정책을 선택합니다.

   !["{% 데이터 variables.product.prodname_secret_scanning %} 설정 변경" 드롭다운 스크린샷](/assets/images/help/enterprises/advanced-security-policies-secret-scanning.png)

{% endif %}
