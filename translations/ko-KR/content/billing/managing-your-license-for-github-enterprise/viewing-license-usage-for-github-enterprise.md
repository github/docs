---
title: GitHub Enterprise의 라이선스 사용량 보기
intro: '{% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.location.product_location %}{% endif %}에서 엔터프라이즈의 라이선스 사용량을 볼 수 있습니다.'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: View license usage
ms.openlocfilehash: 993380cfa7c539ea31ffad9eccc0ce00a70ebe62
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097931'
---
## {% data variables.product.prodname_enterprise %}에 대한 라이선스 사용량 정보

{% 데이터 variables.location.product_location %}에서 {% 데이터 variables.product.product_name %}에 대한 라이선스 사용량을 볼 수 있습니다.

{% data variables.product.prodname_ghe_cloud %} 및 {% data variables.product.prodname_ghe_server %}를 사용하고 제품 간 라이선스 사용량을 동기화하는 경우 {% data variables.product.prodname_dotcom_the_website %}에서 둘 다의 라이선스 사용량을 볼 수 있습니다. 라이선스 동기화에 대한 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %} 간에 라이선스 사용량 동기화](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”를 참조하세요.

{% ifversion ghes %}

{% data variables.product.prodname_dotcom_the_website %}의 라이선스 사용량 보기 및 마지막 라이선스 동기화가 발생한 시간 식별에 대한 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서에서 “[{% data variables.product.prodname_enterprise %}에 대한 라이선스 사용량 보기](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)”를 참조하세요.

{% endif %}

REST API를 사용하여 사용된 라이선스 데이터와 라이선스 동기화 작업의 상태를 반환할 수도 있습니다. 자세한 내용은 REST API 설명서의 “[GitHub Enterprise 관리](/enterprise-cloud@latest/rest/enterprise-admin/license)”를 참조하세요.

엔터프라이즈 계정과 연결된 라이선스 데이터 및 사용된 사용자 수 계산 방법에 대한 자세한 내용은 “[GitHub Enterprise의 라이선스 사용 문제 해결](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)”을 참조하세요.


## {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.location.product_location %}{% endif %}에서 라이선스 사용량 보기

엔터프라이즈의 라이선스 사용량을 보고 라이선스 세부 정보가 포함된 파일을 다운로드할 수 있습니다. 이 보고서에 예상 라이선스 수가 표시되지 않으면 구독자의 할당된 {% data variables.product.prodname_vs %} 구독 메일 주소와 {% data variables.product.prodname_dotcom_the_website %} 메일 주소가 정확히 동일하지 않을 수 있습니다. 자세한 내용은 “[GitHub Enterprise에 대한 라이선스 사용 문제 해결](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)”을 참조하세요.

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. 왼쪽 사이드바에서 **Enterprise 라이선스** 를 클릭합니다.
  ![엔터프라이즈 계정 설정 사이드바의 “Enterprise 라이선스” 탭](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. 현재 {% data variables.product.prodname_enterprise %} 라이선스와 사용된 및 사용 가능한 사용자 라이선스를 검토합니다.
    - 사용된 라이선스 보고서를 CSV 파일로 다운로드하려면 오른쪽 위에서 {% octicon "download" aria-label="The download icon" %}을 클릭합니다. 이 보고서의 데이터를 검토하는 방법에 대한 자세한 내용은 “[GitHub Enterprise의 라이선스 사용 문제 해결](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)”을 참조하세요.
    - 라이선스에 {% data variables.product.prodname_GH_advanced_security %}이(가) 포함된 경우 총 사용자 사용을 검토할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 사용량 보기](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)”를 참조하세요.

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. 현재 {% data variables.product.prodname_enterprise %} 라이선스와 사용된 및 사용 가능한 사용자 라이선스를 검토합니다.{% ifversion ghes %}
    - 사용된 라이선스 보고서를 JSON 파일로 다운로드하려면 오른쪽 위에 있는 “빠른 링크”에서 **라이선스 사용량 내보내기** 를 선택합니다. 이 보고서의 데이터를 검토하는 방법에 대한 자세한 내용은 “[GitHub Enterprise의 라이선스 사용 문제 해결](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)”을 참조하세요.
    - 라이선스에 {% data variables.product.prodname_GH_advanced_security %}이(가) 포함된 경우 총 사용자 사용과 조직별 커밋자 분석을 검토할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 관리](/admin/advanced-security)”를 참조하세요.{% endif %}

{% endif %} {% ifversion ghec %}
## 마지막 라이선스 동기화 날짜 보기

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. 왼쪽 사이드바에서 **Enterprise 라이선스** 를 클릭합니다.
  ![엔터프라이즈 계정 설정 사이드바의 “Enterprise 라이선스” 탭](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. 마지막 라이선스 동기화가 발생한 시기를 식별하려면 “엔터프라이즈 서버 인스턴스”에서 업로드되거나 동기화된 이벤트 사용량 옆에 있는 타임스탬프를 찾습니다.
   - “서버 사용량 업로드됨”은 {% data variables.product.prodname_ghe_server %} 라이선스 파일이 업로드될 때 환경 간의 라이선스 사용량이 수동으로 업데이트되었음을 나타냅니다.
   - “{% data variables.product.prodname_github_connect %} 서버 사용량이 동기화됨”은 환경 간의 라이선스 사용량이 자동으로 업데이트되었음을 나타냅니다.
   - “{% data variables.product.prodname_github_connect %} 서버 사용량이 동기화되지 않음”은 {% data variables.product.prodname_github_connect %}가 구성되었지만 환경 간의 라이선스 사용량이 성공적으로 업데이트되지 않음을 나타냅니다.

{% endif %}
