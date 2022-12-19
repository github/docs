---
title: GitHub Advanced Security 사용량 보기
intro: '엔터프라이즈의 {% data variables.product.prodname_GH_advanced_security %} 사용량을 볼 수 있습니다.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
versions:
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: View Advanced Security usage
ms.openlocfilehash: e91314c3a0f853cc59b4125ea068f274cdd5101d
ms.sourcegitcommit: c45cc7325ed19e69ddd7506e46fcafd0b5182b3f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/12/2022
ms.locfileid: '148019607'
---
## {% data variables.product.prodname_GH_advanced_security %} 라이선스 정보

{% data reusables.advanced-security.about-ghas-license-seats %} 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 요금 청구 정보](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”를 참조하세요.

{% ifversion ghas-committers-calculator %} 사이트 관리자 대시보드로 더 많은 조직 및 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}를 사용하는 경우 사용할 추가 사용자를 계산할 수 있습니다. 자세한 내용은 "[사이트 관리자 대시보드](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-active-committers)"를 참조하세요.
{% endif %}

## 엔터프라이즈 계정의 {% data variables.product.prodname_GH_advanced_security %} 라이선스 사용량 보기

라이선스에 포함된 사용자 수와 현재 사용 중인 사용자 수를 확인할 수 있습니다.

{% ifversion fpt or ghec %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %} “{% data variables.product.prodname_GH_advanced_security %}” 섹션에는 현재 사용량의 세부 정보가 표시됩니다.
  ![엔터프라이즈 라이선스 설정의 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) 사용자가 모두 소진되면 섹션이 빨간색으로 표시되고 “한도 초과”가 표시됩니다. {% data variables.product.prodname_GH_advanced_security %} 사용을 줄이거나 더 많은 사용자를 구매해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 요금 청구 정보](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security)”를 참조하세요.
  ![“한도 초과”가 표시된 엔터프라이즈 라이선스 설정의 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. 필요에 따라 조직당 사용량에 대한 자세한 분석을 보려면 왼쪽 사이드바에서 **청구** 를 클릭합니다.
  ![엔터프라이즈 계정 설정 사이드바의 청구 탭](/assets/images/help/business-accounts/settings-billing-tab.png) “{% data variables.product.prodname_GH_advanced_security %}” 섹션에서 각 조직의 커밋한 사람 수와 고유한 커밋한 사람 수를 확인할 수 있습니다.
  ![엔터프라이즈 청구 설정의 {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/billing/ghas-orgs-list-enterprise-dotcom.png)
5. 필요에 따라 소유한 조직의 이름을 클릭하여 조직의 보안 및 분석 설정을 표시합니다.
  ![엔터프라이즈 청구 설정 {% data variables.product.prodname_GH_advanced_security %} 섹션의 소유한 조직](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. “보안 및 분석” 설정 페이지에서 “{% data variables.product.prodname_GH_advanced_security %} 리포지토리” 섹션으로 스크롤하여 이 조직의 리포지토리별 사용량에 대한 자세한 분석을 확인합니다.
  ![{% data variables.product.prodname_GH_advanced_security %} 리포지토리 섹션](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %} “{% data variables.product.prodname_GH_advanced_security %}” 섹션에는 현재 사용량의 세부 정보가 표시됩니다. 각 조직의 커밋한 사람 수와 고유한 커밋한 사람 수가 포함된 테이블 및 사용 중인 총 사용자 수를 확인할 수 있습니다.
  ![엔터프라이즈 라이선스의 {% data variables.product.prodname_GH_advanced_security %} 섹션](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. 필요에 따라 소유한 조직의 이름을 클릭하여 조직의 보안 및 분석 설정을 표시합니다.
  ![엔터프라이즈 청구 설정 {% data variables.product.prodname_GH_advanced_security %} 섹션의 소유한 조직](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. “보안 및 분석” 설정 페이지에서 “{% data variables.product.prodname_GH_advanced_security %} 리포지토리” 섹션으로 스크롤하여 이 조직의 리포지토리별 사용량에 대한 자세한 분석을 확인합니다.
  ![{% data variables.product.prodname_GH_advanced_security %} 리포지토리 섹션](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

{% endif %}

{% ifversion ghec 또는 ghes > 3.3 %}

## {% data variables.product.prodname_GH_advanced_security %} 라이선스 사용량 정보 다운로드

엔터프라이즈 및 조직 수준에서 모두 {% data variables.product.prodname_GH_advanced_security %} 라이선스 사용량 정보가 포함된 CSV 파일을 다운로드할 수 있습니다. CSV 파일에는 다음을 포함하여 사용 중인 각 {% data variables.product.prodname_advanced_security %} 사용자에 대한 정보가 포함되어 있습니다.

- 사용자를 사용 중인 사람의 사용자 이름
- 커밋이 수행된 {% data variables.product.prodname_advanced_security %} 사용 리포지토리
- 사용자를 사용 중인 사람이 속한 조직
- 가장 최근 커밋 날짜

이 정보를 사용하여 {% data variables.product.prodname_advanced_security %} 라이선스의 사용 현황(예: {% data variables.product.prodname_advanced_security %} 사용자를 사용 중인 엔터프라이즈 멤버 또는 조직 전체의 {% data variables.product.prodname_advanced_security %} 라이선스 사용 현황)에 대한 인사이트를 얻을 수 있습니다.

{% data variables.product.product_name %} 사용자 인터페이스 또는 REST API를 통해 {% data variables.product.prodname_advanced_security %} 라이선스 사용량 CSV를 다운로드할 수 있습니다.

### UI를 통해 {% data variables.product.prodname_advanced_security %} 라이선스 사용량 정보 다운로드

#### 조직 수준

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
1. "{% data variables.product.prodname_GH_advanced_security %}" 아래에서 "커밋자 **" 옆에 있는 {% 옥티콘 "다운로드" aria-label="다운로드 아이콘" %} CSV 보고서를** 클릭합니다.
  ![조직 수준 데이터 다운로드 단추](/assets/images/help/billing/download-organization-GHAS-usage-data.png)

#### 엔터프라이즈 수준

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. "{% data variables.product.prodname_GH_advanced_security %}"에서 "커밋자 **" 옆에 있는 {% 옥티콘 "다운로드" aria-label="다운로드 아이콘" %} CSV 보고서를** 클릭합니다.
  ![엔터프라이즈 수준 데이터 다운로드 단추](/assets/images/help/billing/download-enterprise-GHAS-usage-data.png)

### REST API를 통해 {% data variables.product.prodname_advanced_security %} 라이선스 사용량 정보 다운로드

청구 API를 통해 {% data variables.product.prodname_advanced_security %} 사용량 정보를 검색할 수 있습니다.

{% ifversion ghec %}

조직 수준 데이터의 경우 `/orgs/{org}/settings/billing/advanced-security` 엔드포인트를 사용합니다. 자세한 내용은 {% data variables.product.prodname_dotcom %} REST API 설명서에서 “[청구](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization)”를 참조하세요.

{% endif %}

엔터프라이즈 수준 데이터의 경우 `/enterprises/{enterprise}/settings/billing/advanced-security` 엔드포인트를 사용합니다. 자세한 내용은 {% data variables.product.prodname_dotcom %} REST API 설명서에서 “[{% data variables.product.prodname_enterprise %} 관리](/rest/reference/enterprise-admin#get-github-advanced-security-active-committers-for-an-enterprise)”를 참조하세요.

{% endif %}
