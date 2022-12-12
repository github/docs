---
title: 엔터프라이즈의 감사 로그 정보
intro: '디버깅 및 내부 및 외부 규정 준수를 지원하기 위해 {% data variables.product.product_name %}은 감사된{% ifversion ghes %} 시스템,{% endif %} 사용자, 조직, 리포지토리 이벤트의 로그를 제공합니다.'
shortTitle: About audit logs
redirect_from:
  - /enterprise/admin/articles/audit-logging
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
  - /admin/user-management/audit-logging
  - /admin/user-management/monitoring-activity-in-your-enterprise/audit-logging
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/auditing-activity-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: be8600e2037793a145fd2484742ddd3eb52e91a4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159039'
---
## 감사 로그 정보

{% data reusables.audit_log.retention-periods %}

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

감사 로그를 보는 것 외에도 {% ifversion ghes or ghae %}푸시 로그 보기 및 {% endif %}전역 웹후크 관리와 같은 다른 방법으로 엔터프라이즈의 작업을 모니터링할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 사용자 작업 살펴보기](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity)”를 참조하세요.

## 감사 로그 사용

엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}는 다음과 같은 여러 가지 방법으로 엔터프라이즈에 대한 감사 로그 데이터와 상호 작용할 수 있으며,
- 엔터프라이즈에 대한 감사 로그를 볼 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 감사 로그에 액세스](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)”를 참조하세요.
- 감사 로그에서 특정 이벤트{% ifversion ghec %}를 검색하고 감사 로그 데이터{% endif %}를 내보낼 수 있습니다. 자세한 내용은 "[엔터프라이즈에 대한 감사 로그 검색](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)"{% ifversion ghec %} 및 "[엔터프라이즈에 대한 감사 로그 내보내기](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)"{% endif %}를 참조하세요. {% ifversion token-audit-log %}
- 특정 액세스 토큰에 의해 수행된 모든 이벤트를 식별할 수 있습니다. 자세한 내용은 "[액세스 토큰에서 수행하는 감사 로그 이벤트 식별"을 참조하세요](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token). {% endif %} {% ifversion audit-data-retention-tab %}
- 감사 로그 이벤트의 보존 기간{% ifversion enable-git-events %} 및 Git 이벤트가 포함되는지 여부{% endif %} 같은 설정을 구성할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 감사 로그 구성](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)”을 참조하세요.{% endif %} {%- ifversion enterprise-audit-log-ip-addresses %}
- 감사 로그에서 이벤트와 연결된 IP 주소를 표시할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 감사 로그에 IP 주소 표시](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise)”를 참조하세요.
{%- endif %} {%- ifversion audit-log-streaming %}
- 감사 및 Git 이벤트 데이터를 {% data variables.product.prodname_dotcom %}에서 외부 데이터 관리 시스템으로 스트림할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 감사 로그 스트림](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)”을 참조하세요.
{%- endif %} {%- ifversion ghes %}
- 엔터프라이즈에서 타사 호스트 모니터링 시스템으로 감사 및 시스템 로그를 전달할 수 있습니다. 자세한 내용은 “[로그 전달](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)”을 참조하세요.
{%- endif %}
- 감사 로그 API를 사용하여 엔터프라이즈에서 수행한 작업을 볼 수 있습니다. 자세한 내용은 “[엔터프라이즈에 감사 로그 API 사용](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)”을 참조하세요.

엔터프라이즈 감사 로그에 표시될 수 있는 감사 로그 작업의 전체 목록은 “[엔터프라이즈에 대한 감사 로그 작업](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)”을 참조하세요.

## 추가 참고 자료
- “[조직의 감사 로그 검토](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)” {%- ifversion ghes %}
- “[시스템 로그 정보](/admin/enterprise-management/monitoring-your-appliance/about-system-logs)” {%- endif %}
