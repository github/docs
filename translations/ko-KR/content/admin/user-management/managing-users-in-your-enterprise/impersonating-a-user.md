---
title: 사용자 가장
intro: '문제 해결, 차단 해제 및 기타 합법적인 이유로 사용자를 가장하고 사용자를 대신하여 작업을 수행할 수 있습니다.'
permissions: Enterprise owners can impersonate users within their enterprise.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Impersonate a user
ms.openlocfilehash: df0513c3ca2931378e656f228939540dd5ea5816
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109290'
---
## 사용자 가장 정보

사용자 문제를 해결할 때나 사용자가 활동할 수 없는 데 긴급한 작업이 필요할 때처럼 사용자 계정을 임시로 맡아야 하는 경우에는 가장 세션을 시작하여 사용자 대신 활동할 수 있습니다.

각 가장 세션에서는 가장하는 이유를 제공해야 합니다. 세션은 1시간으로 제한되며 가장 대상 사용자와 동일한 액세스 권한을 갖습니다.

가장 세션 중에 수행하는 작업은 엔터프라이즈 감사 로그와 가장 대상 사용자의 보안 로그에 이벤트로 기록됩니다. 가장 대상 사용자는 가장 세션이 시작될 때 이메일 알림을 받습니다. 자세한 내용은 "[엔터프라이즈에 대한 로그 이벤트 감사](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)" 및 "[보안 로그 검토](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)"를 참조하세요.

## 사용자 가장

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
4. 페이지 왼쪽 위에서 **사용자 정보** 를 클릭합니다.

   ![사용자 정보](/assets/images/enterprise/stafftools/user-info.png)
5. "위험 영역"에서 **@username으로 GitHub에 로그인** 을 클릭합니다.

   ![사용자 가장](/assets/images/enterprise/stafftools/impersonate.png)
6. 드롭다운 목록에서 이유를 선택합니다. **기타** 를 선택하는 경우 **메모** 섹션에 추가 컨텍스트를 입력해야 합니다. **가장 시작** 을 클릭하여 세션을 시작합니다.

   ![가장 이유](/assets/images/enterprise/stafftools/impersonation-reason.png)
7. 가장 세션을 종료할 준비가 되면 페이지 맨 위에 있는 **username의 평범한 삶으로 돌아가기** 배너를 클릭합니다.

   ![가장 종료](/assets/images/enterprise/stafftools/end-impersonation.png)
