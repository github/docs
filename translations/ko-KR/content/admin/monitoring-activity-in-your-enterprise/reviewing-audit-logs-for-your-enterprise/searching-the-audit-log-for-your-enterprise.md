---
title: 엔터프라이즈에 대한 감사 로그 검색
intro: 엔터프라이즈에서 감사된 작업의 광범위한 목록을 검색할 수 있습니다.
shortTitle: Search audit logs
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can search the audit log.'
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
  - /admin/user-management/searching-the-audit-log
  - /admin/user-management/monitoring-activity-in-your-enterprise/searching-the-audit-log
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 12bc44b7d81df55366f8b839261cf8899a53729d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183998'
---
## 엔터프라이즈 감사 로그에 대한 검색 정보

**필터** 드롭다운을 사용하거나 검색 쿼리를 입력하여 사용자 인터페이스에서 직접 엔터프라이즈 감사 로그를 검색할 수 있습니다.

  ![검색 쿼리](/assets/images/enterprise/site-admin-settings/search-query.png)

엔터프라이즈 감사 로그를 보는 방법에 대한 자세한 내용은 “[엔터프라이즈에 대한 감사 로그에 액세스](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)”를 참조하세요. 

{% data reusables.audit_log.git-events-not-in-search-results %}

API를 사용하여 감사 로그 이벤트를 검색할 수도 있습니다. 자세한 내용은 “[엔터프라이즈에 감사 로그 API 사용](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)”을 참조하세요.

텍스트를 사용하여 항목을 검색할 수 없습니다. 그러나 다양한 필터를 사용하여 검색 쿼리를 생성할 수 있습니다. `-`, `>` 또는 `<`과 같이 로그를 쿼리할 때 사용되는 많은 연산자는 {% data variables.product.product_name %}에서 검색하는 것과 동일한 형식입니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서의 검색](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”을 참조하세요.

{% note %}

**참고**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## 쿼리 필터 검색

Assert| 설명
--------------:| -----------
`Yesterday's activity` | 지난날에 만들어진 모든 작업입니다.
`Enterprise account management` | `business` 범주의 모든 작업입니다.
`Organization membership` | 새 사용자가 조직에 가입하도록 초대된 경우에 대한 모든 작업입니다.
`Team management` | 팀 관리와 관련된 모든 작업입니다.<br/>- 사용자 계정 또는 리포지토리가 팀에 추가되거나 팀에서 제거된 경우<br/>- 팀 유지 관리자가 승격되거나 강등된 경우<br/>- 팀이 삭제된 경우
`Repository management` | 리포지토리 관리에 대한 모든 작업입니다.<br/>- 리포지토리를 만들거나 삭제한 경우<br/>- 리포지토리 표시 여부가 변경된 경우<br/>- 팀이 리포지토리에 추가되거나 리포지토리에서 제거된 경우{% ifversion ghec %}
`Billing updates` | 엔터프라이즈에서 {% data variables.product.prodname_dotcom %}에 대해 결제하는 방법 및 청구 메일 주소가 변경된 시기와 관련된 모든 작업입니다.{% endif %}
`Hook activity` | 웹후크 및 사전 수신 후크에 대한 모든 작업입니다.
`Security management` | SSH 키, 배포 키, 보안 키, 2FA, SAML Single Sign-On 자격 증명 권한 부여 및 리포지토리에 대한 취약성 경고와 관련된 모든 작업입니다.

## 검색 쿼리 구문

AND/OR 논리 연산자로 구분된 하나 이상의 `key:value` 쌍에서 검색 쿼리를 작성할 수 있습니다. 예를 들어 2017년 초부터 리포지토리 `octocat/Spoon-Knife`에 영향을 미치는 모든 작업을 확인하려면 다음을 수행합니다.

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

`key:value` 검색 쿼리에 사용할 수 있는 쌍은 다음과 같습니다.

키            | 값
--------------:| --------------------------------------------------------
`actor_id`     | 작업을 시작한 사용자 계정의 ID
`actor`        | 작업을 시작한 사용자 계정의 이름
`oauth_app_id` | 작업과 연결된 OAuth 애플리케이션의 ID
`action`       | 감사된 작업의 이름
`user_id`      | 작업의 영향을 받는 사용자의 ID
`user`         | 작업의 영향을 받는 사용자의 이름
`repo_id`      | 작업의 영향을 받는 리포지토리의 ID(해당하는 경우)
`repo`         | 작업의 영향을 받는 리포지토리의 이름(해당하는 경우)
`actor_ip`     | 작업이 시작된 IP 주소
`created`      | 작업이 발생한 시간{% ifversion ghes %}. 사이트 관리자 대시보드에서 감사 로그를 쿼리하는 경우 대신{% endif %} `created_at`을 사용합니다.
`from`         | 작업이 시작된 보기
`note`         | 기타 이벤트 관련 정보(일반 텍스트 또는 JSON 형식)
`org`          | 작업의 영향을 받는 조직의 이름(해당하는 경우)
`org_id`       | 작업의 영향을 받는 조직의 ID(해당하는 경우)
`business` | 작업의 영향을 받는 엔터프라이즈의 이름(해당하는 경우)
`business_id` | 작업의 영향을 받는 엔터프라이즈의 ID(해당하는 경우)
{%- ifversion token-audit-log %} `hashed_token` | 작업을 인증하는 데 사용되는 토큰(해당하는 경우 "[액세스 토큰에서 수행한 감사 로그 이벤트 식별](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)"참조) {%- endif %}

범주별로 그룹화된 작업을 보려면 작업 한정자를 `key:value` 쌍으로 사용할 수도 있습니다. 자세한 내용은 “[수행된 작업을 기반으로 검색](#search-based-on-the-action-performed)”을 참조하세요.

엔터프라이즈 감사 로그의 전체 작업 목록은 “[엔터프라이즈에 대한 감사 로그 작업](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)”을 참조하세요.

## 감사 로그 검색

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### 수행된 작업을 기반으로 검색

특정 이벤트를 검색하려면 쿼리에서 `action` 한정자를 사용합니다. 예를 들면 다음과 같습니다.

  * `action:team`은 팀 범주 내에서 그룹화된 모든 이벤트를 찾습니다.
  * `-action:hook`는 웹후크 카테고리의 모든 이벤트를 제외합니다.

각 범주에는 필터링할 수 있는 연결된 작업 집합이 있습니다. 예를 들면 다음과 같습니다.

  * `action:team.create`는 팀이 만들어진 모든 이벤트를 찾습니다.
  * `-action:hook.events_changed` 는 웹후크의 이벤트가 변경된 모든 이벤트를 제외합니다.

엔터프라이즈 감사 로그에서 찾을 수 있는 작업은 다음 범주 내에서 그룹화됩니다.

{% data reusables.audit_log.audit-log-action-categories %}

### 작업 시간을 기준으로 검색

`created` 한정자를 사용하여 발생한 시기에 따라 감사 로그에서 이벤트를 필터링합니다.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

예를 들면 다음과 같습니다.

  * `created:2014-07-08`은 2014년 7월 8일에 발생한 모든 이벤트를 찾습니다.
  * `created:>=2014-07-08`은 2014년 7월 8일에 발생하거나 그 이후에 발생한 모든 이벤트를 찾습니다.
  * `created:<=2014-07-08`은 2014년 7월 8일에 발생하거나 그 이전에 발생한 모든 이벤트를 찾습니다.
  * `created:2014-07-01..2014-07-31`은 2014년 7월에 발생한 모든 이벤트를 찾습니다.

### 위치를 기반으로 검색

한정자 `country`를 사용하여 원래 국가를 기반으로 감사 로그의 이벤트를 필터링할 수 있습니다. 국가의 두 글자 짧은 코드 또는 전체 이름을 사용할 수 있습니다. 이름에 공백이 있는 국가는 따옴표로 묶어야 합니다. 예를 들면 다음과 같습니다.

  * `country:de`는 독일에서 발생한 모든 이벤트를 찾습니다.
  * `country:Mexico`는 멕시코에서 발생한 모든 이벤트를 찾습니다.
  * `country:"United States"`는 미국에서 발생한 모든 이벤트를 찾습니다.

{% ifversion token-audit-log %}
### 작업을 수행한 토큰을 기반으로 검색

한정자를 `hashed_token` 사용하여 작업을 수행한 토큰을 기반으로 검색합니다. 토큰을 검색하려면 먼저 SHA-256 해시를 생성해야 합니다. 자세한 내용은 "[액세스 토큰에서 수행하는 감사 로그 이벤트 식별"을 참조하세요](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token).
{% endif %}
