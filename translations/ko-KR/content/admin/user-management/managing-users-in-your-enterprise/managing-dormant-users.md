---
title: 휴면 사용자 관리
redirect_from:
  - /enterprise/admin/articles/dormant-users
  - /enterprise/admin/articles/viewing-dormant-users
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant
  - /enterprise/admin/user-management/managing-dormant-users
  - /admin/user-management/managing-dormant-users
intro: '{% data reusables.enterprise-accounts.dormant-user-activity-threshold %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
ms.openlocfilehash: 7594a0fc22bef10e84334727ad9e79aa02cd1da6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146680927'
---
{% ifversion ghec %} {% data reusables.enterprise-accounts.dormant-user-release-phase %} {% endif %}

## 휴면 사용자 정보

{% data reusables.enterprise-accounts.dormant-user-activity %}

{% ifversion ghes or ghae%}
## 휴면 사용자 보기

{% data reusables.enterprise-accounts.viewing-dormant-users %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 왼쪽 사이드바에서 **휴면 사용자** 를 클릭합니다.
![휴면 사용자 탭](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% ifversion ghes %}
4. 이 목록의 휴면 사용자를 모두 일시 중단하려면 페이지 맨 위에서 **모두 일시 중단** 을 클릭합니다.
![모두 일시 중단 단추](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

## 사용자 계정이 휴면 상태인지 확인

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
5. **사용자 정보** 섹션에서 "휴면"이라는 단어가 있는 빨간색 점은 사용자 계정이 휴면 상태임을 나타내고, " 활성"이라는 단어가 있는 녹색 점은 사용자 계정이 활성 상태임을 나타냅니다.
![휴면 사용자 계정](/assets/images/enterprise/stafftools/dormant-user.png)
![활성 사용자 계정](/assets/images/enterprise/stafftools/active-user.png)

## 휴면 임계값 구성

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. "휴면 임계값"에서 드롭다운 메뉴를 사용하여 원하는 휴면 임계값을 클릭합니다.
![휴면 임계값 드롭다운 메뉴](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)

{% endif %}

{% ifversion ghec %}
## 엔터프라이즈 계정에서 휴면 사용자 보고서 다운로드

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. 유휴 사용자(베타) 보고서를 CSV 파일로 다운로드하려면 "기타"에서 {% octicon "download" aria-label="The Download icon" %} **다운로드** 를 클릭합니다.
  ![규정 준수 페이지의 "기타" 아래에 있는 다운로드 단추](/assets/images/help/business-accounts/dormant-users-download-button.png)

{% tip %}

**팁:** 사용자 기숙사를 평가하기 위해 사용자 활동은 엔터프라이즈와 연결된 조직, 리포지토리 또는 로그온 이벤트와 연결된 사용자 활동만 포함하도록 범위가 지정됩니다. 예를 들어 사용자가 최근에 엔터프라이즈와 연결되지 않은 퍼블릭 리포지토리의 문제에 대해 댓글을 달았으면 휴면 상태로 간주될 수 있습니다. 그러나 최근에 엔터프라이즈의 조직과 연결된 퍼블릭 리포지토리의 문제에 대해 댓글을 달았으면 휴면 상태로 간주되지 않으며 유휴 사용자 보고서에 표시되지 않습니다.

웹 로그온 이벤트의 경우 엔터프라이즈와 연결된 SSO 도메인을 통한 로그온 이벤트만 엔터프라이즈와 연결된 사용자 활동으로 간주됩니다.

{% endtip %}

{% endif %}
