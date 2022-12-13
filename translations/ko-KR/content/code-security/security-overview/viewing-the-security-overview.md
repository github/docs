---
title: 보안 개요 보기
intro: 보안 개요에서 사용할 수 있는 다양한 보기로 이동합니다.
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '>= 3.4'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: View the security overview
ms.openlocfilehash: bc802d290406bb4e480050ee21bb7a4687475d97
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163221'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## 조직의 보안 개요 보기

{% data reusables.security-overview.beta-org-risk-coverage %}

{% ifversion security-overview-org-risk-coverage %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. 사이드바의 옵션에서 표시할 개요를 선택합니다.
1. 드롭다운 필터 및 검색 상자를 사용하여 가장 관심 있는 정보에 초점을 맞춥니다. "보안 위험" 및 "보안 검사" 보기에는 결과를 필터링하는 데 사용할 수 있는 대화형 헤더도 있습니다.

  ![대화형 헤더가 강조 표시된 보안 위험 보기의 스크린샷](/assets/images/help/security-overview/security-risk-interactive-header.png)

{% else %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. 경고 유형에 대한 집계 정보를 보려면 **자세히 표시** 를 클릭합니다.
  ![더 보기 단추](/assets/images/help/security-overview/security-overview-show-more-button.png) {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-alert-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![코드 검사 관련 페이지의](/assets/images/help/security-overview/security-overview-code-scanning-alerts.png) 스크린샷 {% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## 엔터프라이즈의 보안 개요 보기

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. 왼쪽 사이드바에서 {% octicon "shield" aria-label="The shield icon" %} **코드 보안** 을 클릭합니다.
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %}

{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## 팀의 보안 개요 보기

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %} {% endif %}
