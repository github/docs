---
title: 엔터프라이즈 전체의 사용자 감사
intro: '감사 로그 대시보드는 사이트 관리자에게 현재 달 및 이전 6개월 이내에 엔터프라이즈 전체의 모든 사용자 및 조직에서 수행한 작업을 보여 줍니다. 감사 로그에는 작업을 수행한 사람, 작업 유형, 작업이 수행된 시기 같은 세부 정보가 포함됩니다.'
redirect_from:
  - /enterprise/admin/guides/user-management/auditing-users-across-an-organization
  - /enterprise/admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Organizations
  - Security
  - User account
shortTitle: Audit users
ms.openlocfilehash: 18ea00b69f452ff496670fbd31e41bb8038cc46d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331690'
---
## 감사 로그 액세스

감사 로그 대시보드는 기업 전체의 감사 데이터를 시각적으로 표시합니다.

![인스턴스 전체 감사 로그 대시보드](/assets/images/enterprise/site-admin-settings/audit-log-dashboard-admin-center.png)

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}

지도 내에서 이동 및 확대/축소하여 전 세계의 이벤트를 볼 수 있습니다. 해당 국가의 이벤트 수를 빠르게 보려면 국가를 마우스로 가리킵니다.

## 엔터프라이즈 전체에서 이벤트 검색

감사 로그에는 엔터프라이즈 내에서 수행된 작업에 대한 다음 정보가 나열됩니다.

* 작업이 수행된 [리포지토리](#search-based-on-the-repository)
* 작업을 수행한 [사용자](#search-based-on-the-user)
* 작업과 관련된 [조직](#search-based-on-the-organization)
* 수행된 [작업](#search-based-on-the-action-performed)
* 작업이 수행된 [국가](#search-based-on-the-location)
* 작업이 발생한 [날짜와 시간](#search-based-on-the-time-of-action)

{% warning %}

**참고:**

- 텍스트를 사용하여 감사 항목을 검색할 수는 없지만 다양한 필터를 사용하여 검색 쿼리를 구성할 수 있습니다. {% data variables.product.product_name %}은 {% data variables.product.product_name %}에서 검색할 수 있는 많은 연산자를 지원합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 검색 정보](/github/searching-for-information-on-github/about-searching-on-github)”를 참조하세요.
- 감사 레코드는 현재 월과 이전 6개월 동안 매일 사용할 수 있습니다.

{% endwarning %}

### 리포지토리를 기반으로 검색

`repo` 한정자는 작업을 조직 소유의 특정 리포지토리로 제한합니다. 예를 들면 다음과 같습니다.

* `repo:my-org/our-repo`는 `my-org` 조직의 `our-repo` 리포지토리에 대해 발생한 모든 이벤트를 찾습니다.
* `repo:my-org/our-repo repo:my-org/another-repo`는 `my-org` 조직의 `our-repo` 및 `another-repo` 리포지토리 모두에 대해 발생한 모든 이벤트를 찾습니다.
* `-repo:my-org/not-this-repo`는 `my-org` 조직의 `not-this-repo` 리포지토리에 대해 발생한 모든 이벤트를 제외합니다.

`repo` 한정자 내에 조직의 이름을 포함해야 합니다. `repo:our-repo`만 검색하면 작동하지 않습니다.

### 사용자에 따라 검색

`actor` 한정자는 작업을 수행한 조직의 구성원에 따라 이벤트의 범위를 지정합니다. 예를 들면 다음과 같습니다.

* `actor:octocat`는 `octocat`에서 수행하는 모든 이벤트를 찾습니다.
* `actor:octocat actor:hubot`은 `octocat` 및 `hubot`에서 수행하는 모든 이벤트를 찾습니다.
* `-actor:hubot`은 `hubot`에서 수행하는 모든 이벤트를 제외합니다.

{% data variables.product.product_name %} 사용자 이름만 사용할 수 있으며 개인의 실명은 사용할 수 없습니다.

### 조직에 따라 검색

`org` 한정자는 작업을 특정 조직으로 제한합니다. 예를 들면 다음과 같습니다.

* `org:my-org`는 `my-org` 조직에 대해 발생한 모든 이벤트를 찾습니다.
* `org:my-org action:team`은 `my-org` 조직 내에서 수행되는 모든 팀 이벤트를 찾습니다.
* `-org:my-org`는 `my-org` 조직에 대해 발생한 모든 이벤트를 제외합니다.

### 수행된 작업을 기반으로 검색

`action` 한정자는 범주 내에서 그룹화된 특정 이벤트를 검색합니다. 이러한 범주와 연결된 이벤트에 대한 정보는 "[엔터프라이즈에 대한 감사 로그 이벤트](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)"를 참조하세요.

| 범주 이름. | 설명
|------------------|-------------------
| `hook` | 웹후크와 관련된 모든 작업을 포함합니다.
| `org` | 모든 활동 관련 조직 구성원 자격 포함
| `repo` | 조직에서 소유한 리포지토리와 관련된 모든 활동을 포함합니다.
| `team` | 조직의 팀과 관련된 모든 활동을 포함합니다.

이러한 용어를 사용하여 특정 작업 세트를 검색할 수 있습니다. 예를 들면 다음과 같습니다.

* `action:team`은 팀 범주 내에서 그룹화된 모든 이벤트를 찾습니다.
* `-action:billing`은 청구 범주의 모든 이벤트를 제외합니다.

각 범주에는 필터링할 수 있는 연결된 이벤트 세트가 있습니다. 예를 들면 다음과 같습니다.

* `action:team.create`는 팀이 만들어진 모든 이벤트를 찾습니다.
* `-action:billing.change_email`은 청구 이메일이 변경된 모든 이벤트를 제외합니다.

### 위치에 따라 검색

`country` 한정자는 원래 국가별 작업을 필터링합니다.
- 국가의 두 글자 짧은 코드 또는 전체 이름을 사용할 수 있습니다.
- 이름에 공백이 있는 국가는 따옴표로 묶어야 합니다. 예를 들면 다음과 같습니다.
  * `country:de`는 독일에서 발생한 모든 이벤트를 찾습니다.
  * `country:Mexico`는 멕시코에서 발생한 모든 이벤트를 찾습니다.
  * `country:"United States"`는 미국에서 발생한 모든 이벤트를 찾습니다.

### 작업 시간을 기준으로 검색

`created` 한정자는 발생한 시간별로 작업을 필터링합니다.
- `YYYY-MM-DD` 형식을 사용하여 날짜(연도, 월, 일 순)를 정의합니다.
- 날짜는 [보다 큼, 보다 작음 및 범위 한정자](/enterprise/user/articles/search-syntax)를 지원합니다. 예를 들면 다음과 같습니다.
  * `created:2014-07-08`은 2014년 7월 8일에 발생한 모든 이벤트를 찾습니다.
  * `created:>=2014-07-01`은 2014년 7월 8일에 발생하거나 그 이후에 발생한 모든 이벤트를 찾습니다.
  * `created:<=2014-07-01`은 2014년 7월 8일에 발생하거나 그 이전에 발생한 모든 이벤트를 찾습니다.
  * `created:2014-07-01..2014-07-31`은 2014년 7월에 발생한 모든 이벤트를 찾습니다.
