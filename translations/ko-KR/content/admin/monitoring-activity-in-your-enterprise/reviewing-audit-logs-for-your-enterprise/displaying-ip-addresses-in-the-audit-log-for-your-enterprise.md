---
title: 엔터프라이즈의 감사 로그에 IP 주소 표시
intro: 엔터프라이즈의 감사 로그에 이벤트의 원본 IP 주소를 표시할 수 있습니다.
shortTitle: IP addresses in audit log
permissions: Enterprise owners can display IP addresses in the audit log for an enterprise.
versions:
  feature: enterprise-audit-log-ip-addresses
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Networking
  - Security
ms.openlocfilehash: 425cef8193f0ddeeb6c1ac46bb90b36711310c74
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099270'
---
## 감사 로그에 IP 주소 표시 정보

기본적으로 {% data variables.product.product_name %}은 엔터프라이즈의 감사 로그에 이벤트에 대한 원본 IP 주소를 표시하지 않습니다. 필요에 따라 규정 준수를 보장하고 위협에 대응하기 위해 각 이벤트를 담당하는 작업자와 연결된 전체 IP 주소를 표시할 수 있습니다. 작업자는 일반적으로 사용자이지만 앱 또는 통합일 수도 있습니다.

사용자는 엔터프라이즈의 감사 로그에 표시된 IP 주소의 보기 또는 저장에 수반되는 모든 법적 의무를 충족할 책임이 있습니다.

IP 주소를 표시하도록 선택한 경우 IP 주소는 엔터프라이즈의 감사 로그에만 표시됩니다. 엔터프라이즈가 소유한 개별 조직에 대한 감사 로그의 이벤트에 대한 IP 주소는 표시되지 않습니다. 조직 감사 로그에 대한 자세한 내용은 “[조직의 감사 로그 검토](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)”를 참조하세요.

{% 데이터 variables.location.product_location %}에서 엔터프라이즈에 사용하는 인증 방법에 관계없이 감사 로그에 IP 주소를 표시할 수 있습니다. 자세한 내용은 “[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”를 참조하세요.

{% 데이터 variables.location.product_location %}에 계정을 만들면 사용자는 원본 IP 주소를 포함하여 {% 데이터 variables.product.company_short %}의 서비스에 대한 연결에 대한 {% 데이터 variables.product.company_short %}의 기본 정보 수집에 동의합니다. 자세한 내용은 “[GitHub 개인정보처리방침](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#usage-information)”을 참조하세요.

## 감사 로그에 IP 주소를 표시하는 이벤트

{% data variables.product.product_name %}은 엔터프라이즈 구성원이 엔터프라이즈 또는 조직의 소유 리소스와 상호 작용할 때 감사 로그에 IP 주소를 표시합니다. 예를 들어 엔터프라이즈의 조직이 소유한 내부 또는 프라이빗 리포지토리와 관련된 감사 이벤트에 대한 IP 주소 또는 문제, 끌어오기 요청, 작업 또는 프로젝트와 같은 해당 리포지토리와 연결된 리소스가 표시됩니다.

엔터프라이즈 구성원이 자신이 관리하는 개인 계정으로 {% 데이터 variables.location.product_location %}에 액세스하는 경우 {% 데이터 variables.product.prodname_emus %}을(를) 사용하지 않기 때문에 {% 데이터 variables.product.product_name %}은(는) 다음 작업에 대한 이벤트 또는 IP 주소를 감사 로그에 표시하지 않습니다.
  
- {% 데이터 variables.location.product_location %}에 대한 인증
- 리포지토리, gist 또는 프로젝트를 포함하여 개인 계정이 소유한 리소스와의 상호 작용
- 엔터프라이즈의 조직이 소유한 퍼블릭 리포지토리와의 상호 작용

## 감사 로그에 IP 주소 표시 사용

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. “감사 로그”에서 **원본 IP 공개** 를 클릭합니다.

   ![“원본 IP 공개” 탭의 스크린샷](/assets/images/help/enterprises/audit-log-source-ip-disclosure-tab.png)
1. “감사 로그에서 작업자 IP 주소 공개”에서 **원본 IP 공개 사용** 을 선택합니다.

   ![감사 로그에 IP 주소를 표시할 수 있는 확인란의 스크린샷](/assets/images/help/enterprises/audit-log-enable-source-ip-disclosure-checkbox.png)
1. **저장을** 클릭합니다.

이 기능을 사용하도록 설정하면 감사 로그에 액세스하여 IP 주소를 포함하는 이벤트를 볼 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 감사 로그에 액세스](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)”를 참조하세요.
