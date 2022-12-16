---
title: 사이트 관리자 대시보드
intro: '{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %}'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
  - /admin/configuration/site-admin-dashboard
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 5567bbfa7be5a7267d7eb68f96bbe5af21b61f4d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094051'
---
대시보드에 액세스하려면 페이지의 오른쪽 위 모서리에서 {% octicon "rocket" aria-label="The rocket ship" %}을 클릭합니다.
![사이트 관리자 설정에 액세스하기 위한 로켓 아이콘](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% ifversion ghes or ghae %}

## 검색

사용자 및 리포지토리를 검색하고 [감사 로그](#audit-log)를 쿼리하려면 사이트 관리자 대시보드의 이 섹션을 참조하세요.

{% else %}

## 라이선스 정보 & 검색

현재 {% data variables.product.prodname_enterprise %} 라이선스를 확인하거나, 사용자 및 리포지토리를 검색하거나, [감사 로그](#audit-log)를 쿼리하려면 사이트 관리자 대시보드의 이 섹션을 참조하세요.

{% endif %} {% ifversion ghes %}
## {% data variables.enterprise.management_console %}

여기서 {% data variables.enterprise.management_console %}을 시작하여 도메인, 인증 및 SSL과 같은 가상 어플라이언스 설정을 관리할 수 있습니다.
{% endif %}
## 탐색

GitHub [추세 페이지][]의 데이터는 리포지토리와 개발자 모두를 위해 매일, 매주, 매월 시간 범위로 계산됩니다. 이 데이터가 마지막으로 캐시된 시점을 확인하고 **탐색** 섹션에서 새로운 추세 계산 작업을 큐에 대기할 수 있습니다.

  [추세 페이지]: https://github.com/blog/1585-explore-what-is-trending-on-github

## 감사 로그

{% data variables.product.product_name %}는 쿼리할 수 있는 감사된 작업의 실행 로그를 유지합니다.

기본적으로 감사 로그에는 감사된 모든 작업의 목록이 시간순으로 표시됩니다. “[엔터프라이즈의 감사 로그 검색](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)”에 설명된 대로 **쿼리** 텍스트 상자에 키-값 쌍을 입력한 다음 **검색** 을 클릭하여 이 목록을 필터링할 수 있습니다.

일반적인 감사 로깅에 대한 자세한 내용은 “[엔터프라이즈의 감사 로그 정보](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)”를 참조하세요. 감사된 작업의 전체 목록은 “[엔터프라이즈의 감사 로그 이벤트](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)”를 참조하세요.

## 보고서

{% 데이터 variables.location.product_location %}에서 사용자, 조직 및 리포지토리에 대한 정보를 가져와야 하는 경우 일반적으로 [GitHub API](/rest)를 통해 JSON 데이터를 가져옵니다. 아쉽게도 API는 원하는 모든 데이터를 제공하지 않을 수 있으며 사용하기 위해 약간의 기술 전문 지식이 필요합니다. 사이트 관리자 대시보드는 사용자, 조직 및 리포지토리에 필요한 대부분의 정보를 사용하여 CSV 보고서를 쉽게 다운로드할 수 있도록 **보고서** 섹션을 제공합니다.

특히 다음을 나열하는 CSV 보고서를 다운로드할 수 있습니다.

- 모든 사용자
- 모든 활성 사용자
- 모든 [휴면 사용자](/admin/user-management/managing-dormant-users)
- 일시 중단된 모든 사용자
- 모든 조직
- 모든 리포지토리

사이트 관리자 계정으로 표준 HTTP 인증을 통해 프로그래밍 방식으로 보고서에 액세스할 수도 있습니다. 범위와 함께 {% 데이터 variables.product.pat_v1 %}을(를 `site_admin` ) 사용해야 합니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.

예를 들어 cURL을 사용하여 “모든 사용자” 보고서를 다운로드하는 방법은 다음과 같습니다.

```shell
curl -L -u USERNAME:TOKEN http(s)://HOSTNAME/stafftools/reports/all_users.csv
```

프로그래밍 방식으로 다른 보고서에 액세스하려면 `all_users`를 `active_users`, `dormant_users`, `suspended_users`, `all_organizations` 또는 `all_repositories`로 바꿉니다.

{% note %}

**참고:** 사용 가능한 캐시된 보고서가 없는 경우 초기 `curl` 요청은 202 HTTP 응답을 반환합니다. 보고서는 백그라운드에서 생성됩니다. 보고서를 다운로드하기 위한 두 번째 요청을 보낼 수 있습니다. 암호 대신 `site_admin` 범위가 있는 암호 또는 OAuth 토큰을 사용할 수 있습니다.

{% endnote %}

### 사용자 보고서

키               | 설명
-----------------:| ------------------------------------------------------------
`created_at`      | 사용자 계정을 만든 시기(ISO 8601 타임스탬프로)
`id`              | 사용자 또는 조직의 계정 ID
`login`           | 계정의 로그인 ID
`email`           | 계정의 기본 메일 주소
`role`            | 계정이 관리자인지 일반 사용자인지 확인
`suspended?`      | 계정이 일시 중단되었는지 확인
`last_logged_ip`  | 계정에 로그인할 최신 IP 주소
`repos`           | 계정이 소유한 리포지토리 수
`ssh_keys`        | 계정에 등록된 SSH 키 수
`org_memberships` | 계정이 속한 조직 수
`dormant?`        | 계정이 휴면 상태인지 확인
`last_active`     | 계정이 마지막으로 활성화된 시기(ISO 8601 타임스탬프로)
`raw_login`       | 원시 로그인 정보(JSON 형식)
`2fa_enabled?`    | 사용자가 2단계 인증을 사용하도록 설정했는지 확인

### 조직 보고서

키            | 설명
--------------:| ------------------------------------
`id`           | 조직 ID
`created_at`   | 조직을 만든 시기
`login`        | 조직의 로그인 ID
`email`        | 조직의 기본 메일 주소
`owners`       | 조직 소유자 수
`members`      | 조직 구성원 수
`teams`        | 조직 팀 수
`repos`        | 조직 리포지토리 수
`2fa_required?`| 조직에 2단계 인증이 필요한지 확인

### 리포지토리 보고서

키             | 설명
---------------:| ------------------------------------------------------------
`created_at`    | 리포지토리를 만든 시기
`owner_id`      | 리포지토리 소유자의 ID
`owner_type`    | 리포지토리 소유자가 사용자인지 조직인지 확인
`owner_name`    | 리포지토리 소유자의 이름
`id`            | 리포지토리 ID
`name`          | 리포지토리 이름
`visibility`    | 리포지토리가 퍼블릭인지 프라이빗인지 확인
`readable_size` | 사람이 읽을 수 있는 형식의 리포지토리 크기
`raw_size`      | 리포지토리의 크기(숫자)
`collaborators` | 리포지토리 협력자 수
`fork?`         | 리포지토리가 포크인지 확인
`deleted?`      | 리포지토리가 삭제되었는지 확인

{% ifversion ghes %}
## 인덱싱

GitHub 검색 기능은 ElasticSearch를 통해 제공됩니다. 사이트 관리자 대시보드의 이 섹션에서는 ElasticSearch 클러스터의 현재 상태를 표시하고 검색 동작 및 인덱싱 동작을 제어하는 몇 가지 도구를 제공합니다.

코드 검색에 관한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 정보 검색](/search-github)”을 참조하세요. Elasticsearch에 관한 자세한 내용은 [Elasticsearch 웹 사이트](https://elastic.co)를 확인하세요.

{% note %}

**참고**: 일반적으로 사이트 관리자는 새 인덱스를 만들거나 복구 작업을 예약할 필요가 없습니다. 문제 해결 또는 기타 지원을 위해 {% data variables.contact.github_support %}에서 복구 작업을 실행하도록 지시할 수 있습니다.

{% endnote %}

### 인덱스 관리

{% data variables.product.product_name %}는 검색 인덱스의 상태를 인스턴스의 데이터와 정기적으로 자동 조정합니다.

- 데이터베이스의 문제, 끌어오기 요청, 리포지토리, 사용자
- 디스크의 Git 리포지토리(소스 코드)

인스턴스는 복구 작업을 사용하여 데이터를 조정하고 다음 이벤트가 발생할 때 백그라운드에서 복구 작업을 예약합니다.

- 새 검색 인덱스가 만들어질 때.
- 누락된 데이터를 백필해야 할 때.
- 이전 검색 데이터를 업데이트해야 할 때.

새 인덱스를 만들거나 목록에서 기존 인덱스로 클릭하여 인덱스를 관리할 수 있습니다. 인덱스에 대해 수행할 수 있는 작업은 다음과 같습니다.

- 인덱스가 검색 가능하게 합니다.
- 인덱스를 쓰기 가능하게 합니다.
- 인덱스를 업데이트합니다.
- 인덱스를 삭제합니다.
- 인덱스 복구 상태를 다시 설정합니다.
- 새 인덱스 복구 작업을 시작합니다.
- 인덱스 복구 작업 사용하거나 사용하지 않습니다.

진행률 표시줄에는 백그라운드 작업자에 대한 복구 작업의 현재 상태가 표시됩니다. 해당 표시줄은 복구 오프셋과 데이터베이스에서 가장 높은 레코드 ID의 백분율 차이입니다. 복구 작업이 완료된 후 진행률 표시줄에 표시된 값을 무시할 수 있습니다. 진행률 표시줄은 복구 오프셋과 데이터베이스에서 가장 높은 레코드 ID의 차이를 표시하며, 해당 리포지토리가 실제로 인덱싱되더라도 {% 데이터 variables.location.product_location %}에 더 많은 리포지토리가 추가되면 감소합니다.

I/O 성능에 미치는 영향을 최소화하고 작업 시간 초과 가능성을 줄이려면 사용량이 적은 시간에 복구 작업을 실행해 보세요. 작업이 검색 인덱스를 데이터베이스 및 Git 리포지토리 데이터와 조정하면 하나의 CPU가 사용됩니다. `top`과 같은 유틸리티를 사용하여 시스템의 부하 평균 및 CPU 사용량을 모니터링합니다. 리소스 사용량이 크게 증가하지 않는 경우 사용량이 많은 시간 동안 인덱스 복구 작업을 실행하는 것도 안전해야 합니다.

복구 작업은 병렬 처리에 “복구 오프셋”을 사용합니다. 조정 중인 레코드에 대한 데이터베이스 테이블의 오프셋입니다. 여러 백그라운드 작업은 이 오프셋에 따라 작업을 동기화할 수 있습니다.

### 코드 검색

이렇게 하면 소스 코드에서 검색 및 인덱스 작업을 모두 사용하거나 사용하지 않도록 설정할 수 있습니다.

{% endif %}
## 예약된 로그인

특정 단어는 {% 데이터 variables.location.product_location %}에서 내부용으로 예약되어 있습니다. 즉, 이러한 단어를 사용자 이름으로 사용할 수 없습니다.

예를 들어 다음 단어는 예약되어 있습니다.

- `admin`
- `enterprise`
- `login`
- `staff`
- `support`

전체 목록 또는 예약어의 경우 사이트 관리자 대시보드에서 “예약된 로그인”으로 이동합니다.

{% ifversion ghas-committers-calculator %}
## {% data variables.product.prodname_advanced_security %}를 커밋한 사람

현재 {% data variables.product.prodname_GH_advanced_security %} 사용자 수를 사용하고 있는 활성 커밋한 사람 수를 확인하고 더 많은 조직 및 리포지토리에 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정한 경우 사용할 추가 사용자 수를 계산할 수 있습니다.

“현재 활성 커밋한 사람 수”에서 {% data variables.product.prodname_GH_advanced_security %}를 사용하는 리포지토리의 활성 커밋한 사람 수를 확인할 수 있습니다. 현재 사용 중인 사용이 허가된 사용자 수입니다.

“전체 인스턴스의 최대 커밋한 사람”에서 엔터프라이즈의 모든 리포지토리의 활성 커밋한 사람 수를 확인할 수 있습니다. 엔터프라이즈의 모든 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}를 사용하는 경우 사용되는 사용자 수입니다.

“추가 고급 커밋한 사람 계산”에서 특정 조직 및 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}를 사용하는 경우 사용할 추가 사용자 수를 계산할 수 있습니다. “조직 및 리포지토리”에서 한 줄당 하나의 조직 또는 리포지토리를 사용하여 조직 및 리포지토리 목록을 입력하거나 붙여넣습니다. 

```
example-org
octo-org/octo-repo
```

그 결과는 해당 조직 및 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}를 사용하는 경우 사용될 추가 사용자 수입니다.

{% data variables.product.prodname_advanced_security %} 청구에 대한 자세한 내용은 “[{% data variables.product.prodname_advanced_security %} 청구 정보](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”를 참조하세요.
{% endif %}

## 엔터프라이즈 개요

조직, 사람, 정책 및 설정을 관리하려면 사이트 관리자 대시보드의 이 섹션을 참조하세요.

## 리포지토리

{% 데이터 variables.location.product_location %}의 리포지토리 목록입니다. 리포지토리 이름을 클릭하고 리포지토리를 관리하기 위한 함수에 액세스할 수 있습니다.

- [리포지토리에 강제 푸시 차단](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [{% data variables.large_files.product_name_long %} 구성](/enterprise/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [보관 및 보관되지 않는 리포지토리](/enterprise/admin/guides/user-management/archiving-and-unarchiving-repositories/)

## 모든 사용자가 액세스할 수 있습니다.

여기에서 {% 데이터 variables.location.product_location %}에서 모든 사용자를 확인하고 [SSH 키 감사를 시작할](/enterprise/admin/guides/user-management/auditing-ssh-keys) 수 있습니다.

## 사이트 관리자

여기에서 {% 데이터 variables.location.product_location %}에서 모든 관리자를 확인하고 [SSH 키 감사를 시작할](/enterprise/admin/guides/user-management/auditing-ssh-keys) 수 있습니다.

## 휴면 사용자
{% ifversion ghes %} 여기에서 {% 데이터 variables.location.product_location %}에서 모든 비활성 사용자를 보고 [일시 중단할](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) 수 있습니다. 사용자 계정은 비활성("휴면")인 것으로 간주됩니다. {% endif %} {% ifversion ghae %} 여기에서 {% 데이터 variables.location.product_location %}에서 모든 비활성 사용자를 보고 일시 중단할 수 있습니다. 사용자 계정은 다음과 같은 경우 비활성(“휴면”)으로 간주됩니다. {% endif %}

- {% 데이터 variables.location.product_location %}에 대해 설정된 휴면 임계값보다 오랫동안 존재했습니다.
- 해당 기간 내에 어떤 활동도 생성하지 않은 경우
- 사이트 관리자가 아닌 경우

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} 자세한 내용은 “[휴면 사용자 관리](/enterprise/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold)”를 참조하세요.

## 일시 중단된 사용자

여기에서 {% 데이터 variables.location.product_location %}에서 일시 중단된 모든 사용자를 확인하고 [SSH 키 감사를 시작할](/enterprise/admin/guides/user-management/auditing-ssh-keys) 수 있습니다.
