---
title: 엔터프라이즈에 대한 감사 로그 구성
intro: 엔터프라이즈의 감사 로그에 대한 설정을 구성할 수 있습니다.
shortTitle: Configure audit logs
permissions: Enterprise owners can configure the audit log.
versions:
  feature: audit-data-retention-tab
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: f624607d5729d32d836efedf1fa355a96489a175
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106567'
---
## 감사 로그 구성 정보

감사 로그 데이터에 대한 보존 기간을 구성하고 인덱스 스토리지 세부 정보를 볼 수 있습니다.

{% ifversion enable-git-events %} 보존 기간을 구성한 후에는 감사 로그에 Git 관련 이벤트가 표시되도록 하거나 표시되지 않도록 설정할 수 있습니다.
{% endif %}

## 감사 로그 데이터에 대한 보존 기간 구성

{% data variables.location.product_location %}에 대한 감사 로그 데이터에 대한 보존 기간을 구성할 수 있습니다. 구성하는 기간을 초과하는 데이터는 디스크에서 영구적으로 제거됩니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. “감사 로그 보존 설정 구성”에서 드롭다운 메뉴를 선택하고 보존 기간을 클릭합니다.

   ![감사 로그 보존 설정에 대한 드롭다운 메뉴의 스크린샷](/assets/images/help/enterprises/audit-log-retention-dropdown.png)
1. **저장** 을 클릭합니다.

{% ifversion enable-git-events %}
## 감사 로그에서 Git 이벤트 관리

`git.clone` 및 `git.push`와 같은 Git 관련 이벤트가 감사 로그에 나타나거나 나타나지 않도록 설정할 수 있습니다. 기록되는 Git 이벤트 목록은 “[엔터프라이즈에 대한 감사 로그 이벤트](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)”를 참조하세요.

기록되는 Git 이벤트 수가 많아서 Git 이벤트를 사용하도록 설정하는 경우, 인스턴스의 파일 스토리지를 모니터링하고 관련 경고 구성을 검토하는 것이 좋습니다. 자세한 내용은 “[스토리지 모니터링](/admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds#monitoring-storage)”을 참조하세요.

감사 로그에서 Git 이벤트를 사용하도록 설정하기 전에 “무한”이 아닌 감사 로그 데이터에 대한 보존 기간을 구성해야 합니다. 자세한 내용은 “[감사 로그 데이터에 대한 보존 기간 구성](#configuring-a-retention-period-for-audit-log-data)”을 참조하세요.

{% data reusables.audit_log.git-events-not-in-search-results %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. “Git 이벤트 옵트인”에서 **audit-log에서 Git 이벤트 사용** 을 선택하거나 선택 취소합니다.

   ![감사 로그에서 Git 이벤트를 사용하도록 설정하는 확인란의 스크린샷](/assets/images/help/enterprises/enable-git-events-checkbox.png)
1. **저장** 을 클릭합니다.

{% endif %}
