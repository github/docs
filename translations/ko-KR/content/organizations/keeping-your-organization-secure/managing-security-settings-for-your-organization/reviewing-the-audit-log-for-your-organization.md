---
title: 조직의 감사 로그 검토
intro: '감사 로그를 사용하면 조직 관리자가 조직 구성원이 수행한 작업을 신속하게 검토할 수 있습니다. 여기에는 작업을 수행한 사람, 작업 유형, 작업이 수행된 시기 같은 세부 정보가 포함됩니다.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
  - /organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review audit log
ms.openlocfilehash: 430cf928f91cad2851c9ad0c661f159177866463
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180679'
---
## 감사 로그 액세스

감사 로그에는 현재 달 및 이전 6개월 내에 조직에 영향을 주는 활동에 의해 트리거된 이벤트가 나열됩니다. 소유자만 조직의 감사 로그에 액세스할 수 있습니다.

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## 감사 로그 검색

{% data reusables.audit_log.audit-log-search %}

### 수행된 작업을 기반으로 검색

특정 이벤트를 검색하려면 쿼리에서 `action` 한정자를 사용합니다. 감사 로그에 나열된 작업은 다음 범주 내에서 그룹화됩니다.

| 범주 이름 | 설명 |------------------|-------------------{% ifversion fpt or ghec %} | [`account`](#account-category-actions) | 조직 계정과 관련된 모든 활동을 포함합니다. {% endif %} {% ifversion fpt or ghec %} | [`advisory_credit`](#advisory_credit-category-actions) | {% data variables.product.prodname_advisory_database %}의 보안 공지 기여자 크레딧과 관련된 모든 활동을 포함합니다. 자세한 내용은 "[{% data variables.product.prodname_dotcom %} 보안 권고 정보](/github/managing-security-vulnerabilities/about-github-security-advisories)"를 참조하세요. {% endif %} {% ifversion pat-v2%} | [`auto_approve_personal_access_token_requests`](#auto_approve_personal_access_token_requests-category-actions) | {% data variables.product.pat_v2 %}s에 대한 조직의 승인 정책과 관련된 활동을 포함합니다. 자세한 내용은 "[조직에 대한 {% 데이터 variables.product.pat_generic %} 정책 설정"을 참조하세요](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization). {% endif %} {% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | 조직의 청구와 관련된 모든 활동을 포함합니다. {% endif %} {% ifversion fpt or ghec %} | [`business`](#business-category-actions) | 엔터프라이즈의 비즈니스 설정과 관련된 활동을 포함합니다. | {% endif %} {% ifversion fpt or ghec %} | [`codespaces`](#codespaces-category-actions) | 조직의 codespace와 관련된 모든 활동을 포함합니다. | {% endif %} | [`dependabot_alerts`](#dependabot_alerts-category-actions) | 기존 리포지토리의 {% data variables.product.prodname_dependabot_alerts %}에 대한 조직 수준 구성 활동을 포함합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”를 참조하세요.
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions) | 조직에서 만든 새 리포지토리의 {% data variables.product.prodname_dependabot_alerts %}에 대한 조직 수준 구성 활동을 포함합니다. {% ifversion fpt or ghec or ghes %} | [`dependabot_security_updates`](#dependabot_security_updates-category-actions) | 기존 리포지토리의 {% data variables.product.prodname_dependabot_security_updates %}에 대한 조직 수준 구성 활동을 포함합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_security_updates %} 구성](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)”을 참조하세요.
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions) | 조직에서 만든 새 리포지토리의 {% data variables.product.prodname_dependabot_security_updates %}에 대한 조직 수준 구성 활동을 포함합니다.{% endif %}{% ifversion fpt or ghec %} | [`dependency_graph`](#dependency_graph-category-actions) | 리포지토리에 대한 조직 수준 구성 활동을 포함합니다. 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”를 참조하세요.
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions) | 조직에서 만든 새 리포지토리에 대한 조직 수준 구성 활동을 포함합니다. {% endif %} | [`discussion_post`](#discussion_post-category-actions) | 팀 페이지에 게시된 토론과 관련된 모든 활동을 포함합니다.
| [`discussion_post_reply`](#discussion_post_reply-category-actions) | 팀 페이지에 게시된 토론에 대한 회신과 관련된 모든 활동을 포함합니다. {% ifversion fpt or ghes or ghec %} | [`enterprise`](#enterprise-category-actions) | 엔터프라이즈 설정과 관련된 활동을 포함합니다. | {% endif %} | [`hook`](#hook-category-actions) | 웹후크와 관련된 모든 활동을 포함합니다.
| [`integration_installation`](#integration_installation-category-actions) | 계정에 설치된 통합과 관련된 활동을 포함합니다. [`integration_installation_request`](#integration_installation_request-category-actions) | 소유자가 조직에서 사용할 통합을 승인하도록 조직 구성원 요청과 관련된 모든 활동을 포함합니다. |{% ifversion ghec or ghae %} | [`ip_allow_list`](#ip_allow_list-category-actions) | 조직에 대한 IP 허용 목록을 사용하거나 사용하지 않도록 설정하는 작업과 관련된 활동을 포함합니다.
| [`ip_allow_list_entry`](#ip_allow_list_entry-category-actions) | 조직에 대한 IP 허용 목록 항목의 생성, 삭제 및 편집과 관련된 활동을 포함합니다. {% endif %} | [`issue`](#issue-category-actions) | 문제 삭제와 관련된 활동을 포함합니다. {% ifversion fpt or ghec %} | [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | {% data variables.product.prodname_marketplace %} 개발자 계약 서명과 관련된 활동을 포함합니다.
| [`marketplace_listing`](#marketplace_listing-category-actions) | {% data variables.product.prodname_marketplace %}의 앱 나열과 관련된 모든 활동을 포함합니다. {% endif %} {% ifversion fpt or ghes or ghec %} | [`members_can_create_pages`](#members_can_create_pages-category-actions) | 조직의 리포지토리에 대한 {% data variables.product.prodname_pages %} 사이트의 게시 관리와 관련된 모든 활동을 포함합니다. 자세한 내용은 “[조직의 {% data variables.product.prodname_pages %} 사이트의 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”를 참조하세요. | {% endif %} | [`org`](#org-category-actions) | 조직 구성원 자격과 관련된 활동을 포함합니다. {% ifversion ghec %} | [`org_credential_authorization`](#org_credential_authorization-category-actions) | SAML Single Sign-On에 사용할 자격 증명 권한 부여와 관련된 모든 활동을 포함합니다. {% endif %} {% ifversion secret-scanning-audit-log-custom-patterns %} | [`org_secret_scanning_custom_pattern`](#org_secret_scanning_custom_pattern-category-actions) | 비밀 검사 사용자 지정 패턴과 관련된 조직 수준 활동을 포함합니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”를 참조하세요. {% endif %} | [`organization_default_label`](#organization_default_label-category-actions) | 조직의 리포지토리에 대한 기본 레이블과 관련된 모든 활동을 포함합니다.
| [`oauth_application`](#oauth_application-category-actions) | OAuth 앱과 관련된 모든 활동을 포함합니다.
| [`packages`](#packages-category-actions) | {% data variables.product.prodname_registry %}과 관련된 모든 활동을 포함합니다. {% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | 조직에서 GitHub에 대한 요금을 지불하는 방법과 관련된 모든 활동을 포함합니다. {% endif %} {% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | 조직의 {% data variables.product.pat_v2 %}s와 관련된 활동을 포함합니다. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). {% endif %} | [`profile_picture`](#profile_picture-category-actions) | 조직의 프로필 사진과 관련된 모든 활동을 포함합니다.
| [`project`](#project-category-actions) | 프로젝트 보드와 관련된 모든 작업을 포함합니다.
| [`protected_branch`](#protected_branch-category-actions) |보호된 분기와 관련된 모든 활동을 포함합니다.
| [`repo`](#repo-category-actions) | 조직에서 소유한 리포지토리와 관련된 활동을 포함합니다. {% ifversion fpt or ghec %} | [`repository_advisory`](#repository_advisory-category-actions) | {% data variables.product.prodname_advisory_database %}의 보안 권고와 관련된 리포지토리 수준 활동을 포함합니다.  자세한 내용은 “[{% data variables.product.prodname_dotcom %} 보안 공지 정보](/github/managing-security-vulnerabilities/about-github-security-advisories)”를 참조하세요.
| [`repository_content_analysis`](#repository_content_analysis-category-actions) | [개인 리포지토리에 대한 데이터 사용을 사용하거나 사용하지 않도록 설정](/articles/about-github-s-use-of-your-data)하는 작업과 관련된 모든 활동을 포함합니다. {% endif %} {% ifversion fpt or ghec %} | [`repository_dependency_graph`](#repository_dependency_graph-category-actions) | {% ifversion fpt or ghec %}private {% endif %}리포지토리에 대한 종속성 그래프를 사용하거나 사용하지 않도록 설정하는 데 관련된 리포지토리 수준 작업을 포함합니다. 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”를 참조하세요. {% endif %} {% ifversion ghes or ghae or ghec %} | [`repository_secret_scanning`](#repository_secret_scanning-category-actions) | 비밀 검사와 관련된 리포지토리 수준 활동을 포함합니다. 자세한 내용은 “[비밀 검사 정보](/github/administering-a-repository/about-secret-scanning)”를 참조하세요. {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_custom_pattern`](#repository_secret_scanning_custom_pattern-category-actions) | 비밀 검색 사용자 지정 패턴과 관련된 리포지토리 수준 활동을 포함합니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”를 참조하세요. {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_push_protection`](#repository_secret_scanning_push_protection-category-actions) | 비밀 검색 사용자 지정 패턴과 관련된 리포지토리 수준 활동을 포함합니다. 자세한 내용은 “[비밀 검사를 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”를 참조하세요. {% endif %} | [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions) | [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)와(과) 관련된 모든 활동을 포함합니다.{% ifversion fpt or ghec %} | [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions) | {% data variables.product.prodname_dependabot_alerts %}에 대한 리포지토리 수준 구성 작업을 포함합니다.{% endif %} {% ifversion custom-repository-roles %} | [`role`](#role-category-actions) | [사용자 지정 리포지토리 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)과 관련된 모든 활동을 포함합니다.{% endif %}{% ifversion ghes or ghae or ghec %} | [`secret_scanning`](#secret_scanning-category-actions) | 기존 리포지토리에서 비밀 검색을 위한 조직 수준 구성 작업을 포함합니다. 자세한 내용은 “[비밀 검사 정보](/github/administering-a-repository/about-secret-scanning)”를 참조하세요.
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions) | 조직에서 만든 새 리포지토리에 대한 비밀 검사를 위한 조직 수준 구성 활동을 포함합니다. {% endif %}{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | 스폰서 단추와 관련된 모든 이벤트를 포함합니다(“[리포지토리에 스폰서 단추 표시](/articles/displaying-a-sponsor-button-in-your-repository)” 참조){% endif %} | [`team`](#team-category-actions) | 조직의 팀과 관련된 모든 활동을 포함합니다.
| [`team_discussions`](#team_discussions-category-actions) | 조직의 팀 토론 관리와 관련된 활동을 포함합니다.
| [`workflows`](#workflows-category-actions) | {% data variables.product.prodname_actions %} 워크플로와 관련된 활동을 포함합니다.

이러한 용어를 사용하여 특정 작업 집합을 검색할 수 있습니다. 예를 들면 다음과 같습니다.

  * `action:team`은 팀 범주 내에서 그룹화된 모든 이벤트를 찾습니다.
  * `-action:hook`는 웹후크 카테고리의 모든 이벤트를 제외합니다.

각 범주에는 필터링할 수 있는 연결된 작업 집합이 있습니다. 예를 들면 다음과 같습니다.

  * `action:team.create`는 팀이 만들어진 모든 이벤트를 찾습니다.
  * `-action:hook.events_changed` 는 웹후크의 이벤트가 변경된 모든 이벤트를 제외합니다.

### 작업 시간을 기준으로 검색

`created` 한정자를 사용하여 발생한 시기에 따라 감사 로그에서 이벤트를 필터링합니다. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

예를 들면 다음과 같습니다.

  * `created:2014-07-08`은 2014년 7월 8일에 발생한 모든 이벤트를 찾습니다.
  * `created:>=2014-07-08`은 2014년 7월 8일에 발생하거나 그 이후에 발생한 모든 이벤트를 찾습니다.
  * `created:<=2014-07-08`은 2014년 7월 8일에 발생하거나 그 이전에 발생한 모든 이벤트를 찾습니다.
  * `created:2014-07-01..2014-07-31`은 2014년 7월에 발생한 모든 이벤트를 찾습니다.

{% note %}

**참고**: 감사 로그에는 현재 월과 이전 6개월의 매일에 대한 데이터가 포함됩니다.

{% endnote %}

### 위치를 기반으로 검색

한정자 `country`를 사용하여 원래 국가를 기반으로 감사 로그의 이벤트를 필터링할 수 있습니다. 국가의 두 글자 짧은 코드 또는 전체 이름을 사용할 수 있습니다. 이름에 공백이 있는 국가는 따옴표로 묶어야 합니다. 예를 들면 다음과 같습니다.

  * `country:de`는 독일에서 발생한 모든 이벤트를 찾습니다.
  * `country:Mexico`는 멕시코에서 발생한 모든 이벤트를 찾습니다.
  * `country:"United States"`는 미국에서 발생한 모든 이벤트를 찾습니다.

{% ifversion fpt or ghec %}
## 감사 로그 내보내기

{% data reusables.audit_log.export-log %}

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %} {% endif %}

## 감사 로그 API 사용

{% ifversion fpt %}

{% data variables.product.prodname_ghe_cloud %}을(를) 사용하는 조직은 GraphQL API 및 REST API를 사용하여 감사 로그와 상호 작용할 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api)를 참조하세요.

{% else %}

GraphQL API{% ifversion fpt or ghec %} 또는 REST API{% endif %}를 사용하여 감사 로그와 상호 작용할 수 있습니다. {% ifversion read-audit-scope %} 범위를 사용하여 `read:audit_log` API를 통해 감사 로그에 액세스할 수 있습니다.{ % endif %}

{% ifversion ghec %}

{% note %}

**참고:** 감사 로그 API를 사용하려면 조직에서 {% data variables.product.prodname_ghe_cloud %}을(를) 사용해야 합니다. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

### GraphQL API 사용

{% endif %}

지적 재산권의 안전을 보장하고 조직에 대한 규정 준수를 유지하기 위해 감사 로그 GraphQL API를 사용하여 감사 로그 데이터의 복사본을 유지하고 모니터링할 수 있습니다. {% data reusables.audit_log.audit-log-api-info %}

{% ifversion ghec %} GraphQL API를 사용하여 Git 이벤트를 검색할 수 없습니다. Git 이벤트를 검색하려면 REST API를 대신 사용합니다. 자세한 내용은 “[`git` 범주 작업](#git-category-actions)”을 참조하세요.
{% endif %}

GraphQL 응답에는 최대 90~120일 동안의 데이터가 포함될 수 있습니다.

예를 들어 GraphQL을 요청하여 조직에 추가된 새 조직 구성원을 모두 볼 수 있습니다. 자세한 내용은 “[GraphQL API 감사 로그](/graphql/reference/interfaces#auditentry/)”를 참조하세요.

{% ifversion ghec %}

### REST API 사용

지적 재산권의 안전을 보장하고 조직에 대한 규정 준수를 유지하기 위해 감사 로그 REST API를 사용하여 감사 로그 데이터의 복사본을 유지하고 모니터링할 수 있습니다. {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

기본적으로 지난 3개월의 이벤트만 반환됩니다. 이전 이벤트를 포함하려면 쿼리에 타임스탬프를 지정해야 합니다.

감사 로그 REST API에 대한 자세한 내용은 “[조직](/rest/reference/orgs#get-the-audit-log-for-an-organization)”을 참조하세요.

{% endif %} {% endif %}

## 감사 로그 작업

감사 로그에 이벤트로 기록되는 가장 일반적인 작업 중 일부에 대한 개요입니다.

{% ifversion fpt or ghec %}
### `account` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `billing_plan_change` | 조직의 [청구 주기](/articles/changing-the-duration-of-your-billing-cycle)가 변경되면 트리거됩니다.
| `plan_change` | 조직의 [구독](/articles/about-billing-for-github-accounts)이 변경되면 트리거됩니다.
| `pending_plan_change` | 조직 소유자 또는 청구 관리자가 [유료 구독을 취소하거나 다운그레이드](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/)하면 트리거됩니다.
| `pending_subscription_change` | [{% data variables.product.prodname_marketplace %} 평가판이 시작되었거나 만료](/articles/about-billing-for-github-marketplace/)되면 트리거됩니다.
{% endif %}

{% ifversion fpt or ghec %}
### `advisory_credit` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `accept` | 누군가가 보안 권고에 대한 크레딧을 수락하면 트리거됩니다. 자세한 내용은 “[보안 공지 편집](/github/managing-security-vulnerabilities/editing-a-security-advisory)”을 참조하세요.
| `create` | 보안 권고의 관리자가 신용 섹션에 누군가를 추가하면 트리거됩니다.
| `decline` | 누군가가 보안 권고에 대한 크레딧을 거부하면 트리거됩니다.
| `destroy` | 보안 권고의 관리자가 신용 섹션에서 누군가를 제거하면 트리거됩니다.
{% endif %}

{% ifversion pat-v2 %}

### `auto_approve_personal_access_token_requests` 범주 작업

| 작업 | Description
|------------------|-------------------
| `disable` | 토큰이 조직 리소스에 액세스하기 전에 조직에서 {% data variables.product.pat_v2 %}s을(를) 승인해야 하는 경우 트리거됩니다. 자세한 내용은 "[조직에 대한 {% 데이터 variables.product.pat_generic %} 정책 설정"을 참조하세요](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).
| `enable` | {% data variables.product.pat_v2 %}s이(가) 사전 승인 없이 조직 리소스에 액세스할 수 있을 때 트리거됩니다. 자세한 내용은 "[조직에 대한 {% 데이터 variables.product.pat_generic %} 정책 설정"을 참조하세요](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

{% endif %}

{% ifversion fpt or ghec %}
### `billing` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `change_billing_type` | 조직에서 [{% data variables.product.prodname_dotcom %}에 대한 지불 방법을 변경](/articles/adding-or-editing-a-payment-method)할 때 트리거됩니다.
| `change_email` | 조직의 [청구 메일 주소](/articles/setting-your-billing-email)가 변경될 때 트리거됩니다.
{% endif %}

### `business` 범주 작업

| 작업 | 설명 |------------------|-------------------{% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | 엔터프라이즈에 대해 퍼블릭 포크의 워크플로에 대한 승인을 요구하는 설정이 변경될 때 트리거됩니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)”을 참조하세요.{% endif %} | `set_actions_retention_limit` | 엔터프라이즈의 {% data variables.product.prodname_actions %} 아티팩트 및 로그에 대한 보존 기간이 변경될 때 트리거됩니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)”을 참조하세요.{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | 프라이빗 리포지토리 포크의 워크플로 정책이 변경될 때 트리거됩니다. 자세한 내용은 “{% ifversion fpt or ghec%}[엔터프라이즈의 {% data variables.product.prodname_actions %}에 대한 정책 적용]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[프라이빗 리포지토리 포크에 워크플로 사용](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}”을 참조하세요.{% endif %}

{% ifversion fpt or ghec %}
### `codespaces` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | 사용자가 [codespace를 만들](/github/developing-online-with-codespaces/creating-a-codespace) 때 트리거됩니다.
| `resume` | 사용자가 일시 중단된 codespace를 다시 시작할 때 트리거됩니다.
| `delete` | 사용자가 [codespace를 삭제](/github/developing-online-with-codespaces/deleting-a-codespace)할 때 트리거됩니다.
| `create_an_org_secret` | 사용자가 [{% data variables.product.prodname_github_codespaces %}에 대한](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) 조직 수준 비밀을 만들 때 트리거됩니다.
| `update_an_org_secret` | 사용자가 [{% data variables.product.prodname_github_codespaces %}에 대한](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) 조직 수준 비밀을 업데이트할 때 트리거됩니다.
| `remove_an_org_secret` | 사용자가 [{% data variables.product.prodname_github_codespaces %}에 대한](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) 조직 수준 비밀을 제거할 때 트리거됩니다.
| `manage_access_and_security` | 사용자가 [에서 액세스할 수 있는 리포지토리를 업데이트](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)할 때 트리거됩니다.
{% endif %}

### `dependabot_alerts` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `disable` | 조직 소유자가 모든 기존 {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}을(를) 사용하지 않도록 설정하면 트리거됩니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `enable` | 조직 소유자가 모든 기존 {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}을(를) 사용하도록 설정하면 트리거됩니다.

### `dependabot_alerts_new_repos` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `disable` | 조직 소유자가 모든 새 {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}을(를) 사용하지 않도록 설정하면 트리거됩니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `enable` | 조직 소유자가 모든 새 {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}을(를) 사용하도록 설정하면 트리거됩니다.

{% ifversion fpt or ghec or ghes %}
### `dependabot_security_updates` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `disable` | 조직 소유자가 모든 기존 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}을(를) 사용하지 않도록 설정하면 트리거됩니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `enable` | 조직 소유자가 모든 기존 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}을(를) 사용하도록 설정하면 트리거됩니다.

### `dependabot_security_updates_new_repos` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `disable` | 조직 소유자가 모든 새 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}을(를) 사용하지 않도록 설정하면 트리거됩니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `enable` | 조직 소유자가 모든 새 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}을(를) 사용하도록 설정하면 트리거됩니다.
{% endif %}

{% ifversion fpt or ghec %}
### `dependency_graph` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `disable` | 조직 소유자가 모든 기존 리포지토리에 대한 종속성 그래프를 사용하지 않도록 설정하면 트리거됩니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `enable` | 조직 소유자가 모든 기존 리포지토리에 대한 종속성 그래프를 사용하도록 설정하면 트리거됩니다.

### `dependency_graph_new_repos` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `disable` | 조직 소유자가 모든 새 리포지토리에 대한 종속성 그래프를 사용하지 않도록 설정하면 트리거됩니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `enable` | 조직 소유자가 모든 새 리포지토리에 대한 종속성 그래프를 사용하도록 설정하면 트리거됩니다.
{% endif %}

### `discussion_post` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `update` | [팀 토론 게시물을 편집](/articles/managing-disruptive-comments/#editing-a-comment)할 때 트리거됩니다.
| `destroy` | [팀 토론 게시물을 삭제](/articles/managing-disruptive-comments/#deleting-a-comment)할 때 트리거됩니다.

### `discussion_post_reply` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `update` | [팀 토론 게시물에 대한 회신이 편집](/articles/managing-disruptive-comments/#editing-a-comment)되면 트리거됩니다.
| `destroy` | [팀 토론 게시물에 대한 회신이 삭제](/articles/managing-disruptive-comments/#deleting-a-comment)되면 트리거됩니다.

{% ifversion fpt or ghes or ghec %}
### `enterprise` 범주 작업

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}
### `environment` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create_actions_secret` | 환경에서 비밀을 만들 때 트리거됩니다. 자세한 내용은 [“환경 비밀](/actions/reference/environments#environment-secrets)”을 참조하세요.
| `delete` | 환경이 삭제될 때 트리거됩니다. 자세한 내용은 [“환경 삭제](/actions/reference/environments#deleting-an-environment)”를 참조하세요.
| `remove_actions_secret` |  환경에서 비밀이 제거될 때 트리거됩니다. 자세한 내용은 [“환경 비밀](/actions/reference/environments#environment-secrets)”을 참조하세요.
| `update_actions_secret` | 환경의 비밀이 업데이트될 때 트리거됩니다. 자세한 내용은 [“환경 비밀](/actions/reference/environments#environment-secrets)”을 참조하세요.
{% endif %}

{% ifversion ghae %}
### `external_group` 범주 작업

{% data reusables.saml.external-group-audit-events %}

{% endif %}

{% ifversion ghae %}
### `external_identity` 범주 작업

{% data reusables.saml.external-identity-audit-events %}

{% endif %}

{% ifversion fpt or ghec %}
### `git` 범주 작업

{% note %}

**참고:** 감사 로그에서 Git 이벤트에 액세스하려면 감사 로그 REST API를 사용해야 합니다. 감사 로그 REST API는 {% data variables.product.prodname_ghe_cloud %}의 사용자만 사용할 수 있습니다. 자세한 내용은 “[조직](/rest/reference/orgs#get-the-audit-log-for-an-organization)”을 참조하세요.

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| 작업  | 설명
|---------|----------------------------
| `clone` | 리포지토리가 복제될 때 트리거됩니다.
| `fetch` | 리포지토리에서 변경 내용을 가져올 때 트리거됩니다.
| `push`  | 변경 내용이 리포지토리에 푸시될 때 트리거됩니다.

{% endif %}

### `hook` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | 조직 소유의 리포지토리에 [새 후크가 추가](/articles/creating-webhooks)될 때 트리거됩니다.
| `config_changed` | 기존 후크의 구성이 변경되면 트리거됩니다.
| `destroy` | 기존 후크가 리포지토리에서 제거되었을 때 트리거됩니다.
| `events_changed` | 후크의 이벤트가 변경될 때 트리거됩니다.

### `integration_installation` 범주 작업

| 작업 | 설명
|--------|-------------
| `contact_email_changed` | 통합에 대한 연락처 메일이 변경되었습니다.
| `create` | 통합이 설치되었습니다.
| `destroy` | 통합이 제거되었습니다.
| `repositories_added` | 리포지토리가 통합에 추가되었습니다.
| `repositories_removed` | 리포지토리가 통합에서 제거되었습니다.
{%- ifversion fpt or ghec %} | `suspend` | 통합이 일시 중단되었습니다.
| `unsuspend` | 통합 일시 중단이 해제되었습니다.
{%- endif %} | `version_updated` | 통합에 대한 권한이 업데이트되었습니다.

### `integration_installation_request` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | 조직 구성원이 조직 소유자에게 조직에서 사용할 통합을 설치할 것을 요청할 때 트리거됩니다.
| `close` | 조직에서 사용할 통합 설치 요청이 조직 소유자에 의해 승인 또는 거부되거나 요청을 연 조직 구성원에 의해 취소될 때 트리거됩니다.

{% ifversion ghec or ghae %}
### `ip_allow_list` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `enable` | 조직에 대해 IP 허용 목록을 사용하도록 설정했을 때 트리거됩니다.
| `disable` | 조직에 대해 IP 허용 목록을 사용하지 않도록 설정했을 때 트리거됩니다.
| `enable_for_installed_apps` | 설치된 {% data variables.product.prodname_github_apps %}에 대해 IP 허용 목록을 사용하도록 설정한 경우 트리거됩니다.
| `disable_for_installed_apps` | 설치된 {% data variables.product.prodname_github_apps %}에 대해 IP 허용 목록을 사용하지 않도록 설정한 경우 트리거됩니다.

### `ip_allow_list_entry` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | IP 주소가 IP 허용 목록에 추가될 때 트리거됩니다.
| `update` | IP 주소 또는 해당 설명이 변경될 때 트리거됩니다.
| `destroy` | IP 허용 목록에서 IP 주소를 삭제할 때 트리거됩니다.
{% endif %}

### `issue` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `destroy`        | 조직 소유자 또는 리포지토리의 관리자 권한이 있는 사람이 조직 소유 리포지토리에서 문제를 삭제할 때 트리거됩니다.

{% ifversion fpt or ghec %}

### `marketplace_agreement_signature` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | {% data variables.product.prodname_marketplace %} 개발자 계약에 서명할 때 트리거됩니다.

### `marketplace_listing` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `approve` | 목록이 {% data variables.product.prodname_marketplace %}에 포함되도록 승인되면 트리거됩니다.
| `create` | {% data variables.product.prodname_marketplace %}에서 앱 목록을 만들 때 트리거됩니다.
| `delist` | {% data variables.product.prodname_marketplace %}에서 목록이 제거되면 트리거됩니다.
| `redraft` | 목록이 초안 상태로 다시 전송될 때 트리거됩니다.
| `reject` | {% data variables.product.prodname_marketplace %}에 목록을 포함할 수 없을 때 트리거됩니다.

{% endif %}

{% ifversion fpt or ghes or ghec %}

### `members_can_create_pages` 범주 작업

자세한 내용은 “[조직의 {% data variables.product.prodname_pages %} 사이트의 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”를 참조하세요.

| 작업 | 설명 |
| :- | :- |
| `enable` | 조직 소유자가 조직의 리포지토리에 대해 {% data variables.product.prodname_pages %} 사이트를 게시할 수 있도록 설정하면 트리거됩니다. |
| `disable` | 조직 소유자가 조직의 리포지토리에 대한 {% data variables.product.prodname_pages %} 사이트의 게시를 사용하지 않도록 설정하면 트리거됩니다. |

{% endif %}

### `oauth_application` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | 새 {% data variables.product.prodname_oauth_app %}을(를) 만들 때 트리거됩니다.
| `destroy` | 기존 {% data variables.product.prodname_oauth_app %}이(가) 삭제될 때 트리거됩니다.
| `reset_secret` | {% data variables.product.prodname_oauth_app %}의 클라이언트 암호가 재설정될 때 트리거됩니다.
| `revoke_tokens` | {% data variables.product.prodname_oauth_app %}의 사용자 토큰이 해지될 때 트리거됩니다.
| `transfer` |  기존 {% data variables.product.prodname_oauth_app %}이(가) 새 조직으로 전송될 때 트리거됩니다.

### `org` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `add_member` | 사용자가 조직에 가입할 때 트리거됩니다.
| `advanced_security_policy_selected_member_disabled` | 엔터프라이즈 소유자가 조직 소유의 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 기능을 사용할 수 없으면 트리거됩니다. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled` | 엔터프라이즈 소유자가 조직 소유의 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 기능을 사용하도록 설정할 때 트리거됩니다. {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% ifversion fpt or ghec %}
| `audit_log_export` | 조직 관리자가 [조직 감사 로그의 내보내기를 만들](#exporting-the-audit-log) 때 트리거됩니다. 내보내기가 쿼리를 포함하는 경우 로그는 사용된 쿼리 및 해당 쿼리와 일치하는 감사 로그 항목 수를 나열합니다.
| `block_user` | 조직 소유자가 [사용자가 조직의 리포지토리에 액세스하지 못하도록 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)한 경우 트리거됩니다.
| `cancel_invitation` | 조직 초대가 취소될 때 트리거됩니다. {% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` | 조직에 대해 {% data variables.product.prodname_actions %} 비밀이 만들어지면 트리거됩니다. 자세한 정보는 “[조직의 암호화된 비밀 만들기](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)”를 참조하세요.{% endif %} {% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions` | 소유자가 조직에 대한 [{% data variables.product.prodname_oauth_app %} 액세스 제한을 사용하지 않도록 설정](/articles/disabling-oauth-app-access-restrictions-for-your-organization)할 때 트리거됩니다.{% ifversion ghec %}
| `disable_saml` | 조직 관리자가 조직에 대해 SAML Single Sign-On을 사용하지 않도록 설정할 때 트리거됩니다.{% endif %}{% endif %}
| `disable_member_team_creation_permission` | 조직 소유자가 팀 만들기를 소유자로 제한할 때 트리거됩니다. 자세한 내용은 “[조직에서 팀 만들기 권한 설정](/articles/setting-team-creation-permissions-in-your-organization)”을 참조하세요. |{% ifversion not ghae %}
| `disable_two_factor_requirement` | 조직 소유자가 모든 구성원{% ifversion fpt or ghec %}, 청구 관리자,{% endif %} 조직의 외부 협력자에 대해 2단계 인증 요구 사항을 사용하지 않도록 설정할 때 트리거됩니다.{% endif %}{% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions` | 소유자가 조직에 대한 [{% data variables.product.prodname_oauth_app %} 액세스 제한을 사용하도록 설정](/articles/enabling-oauth-app-access-restrictions-for-your-organization)할 때 트리거됩니다.{% ifversion ghec %}
| `enable_saml` | 조직 관리자가 [조직에 대해 SAML Single Sign-On을 사용하도록 설정](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)할 때 트리거됩니다.{% endif %}{% endif %}
| `enable_member_team_creation_permission` | 조직 소유자가 구성원이 팀을 만들 수 있도록 허용할 때 트리거됩니다. 자세한 내용은 “[조직에서 팀 만들기 권한 설정](/articles/setting-team-creation-permissions-in-your-organization)”을 참조하세요. |{% ifversion not ghae %}
| `enable_two_factor_requirement` | 조직 소유자가 모든 구성원{% ifversion fpt or ghec %}, 청구 관리자,{% endif %} 조직의 외부 협력자에 대해 2단계 인증을 사용하도록 할 때 트리거됩니다.{% endif %}{% ifversion fpt or ghec %}
| `invite_member` | [새 사용자가 조직에 가입하도록 초대](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)되었을 때 트리거됩니다.
| `oauth_app_access_approved` | 소유자가 [조직에 {% data variables.product.prodname_oauth_app %}에 대한 액세스 권한을 부여](/articles/approving-oauth-apps-for-your-organization/)할 때 트리거됩니다.
| `oauth_app_access_denied` | 소유자가 조직에 대해 [이전에 승인된 {% data variables.product.prodname_oauth_app %}의 액세스를 사용하지 않도록 설정](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)
| `oauth_app_access_requested` | 조직 구성원이 소유자가 조직에 대한 {% data variables.product.prodname_oauth_app %} 액세스 권한을 부여하도록 요청할 때 트리거됩니다.{% endif %}
{%- ifversion ghec %} | `org.transfer` | 조직이 엔터프라이즈 계정 간에 전송될 때 트리거됩니다. 자세한 내용은 "[엔터프라이즈 계정 간에 조직 전송"을 참조하세요.](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts)
{%- endif %} | `register_self_hosted_runner` | 새 자체 호스팅 실행기가 등록될 때 트리거됩니다. 자세한 내용은 “[조직에 자체 호스트 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)”를 참조하세요.
| `remove_actions_secret` | {% data variables.product.prodname_actions %} 비밀이 제거될 때 트리거됩니다. {% ifversion fpt or ghec %} | `remove_billing_manager` | [소유자가 조직에서 청구 관리자를 제거하거나 조직에서](/articles/removing-a-billing-manager-from-your-organization/) [2단계 인증이 필요](/articles/requiring-two-factor-authentication-in-your-organization) 하고 청구 관리자가 2FA를 사용하지 않거나 2FA를 사용하지 않도록 설정할 때 트리거됩니다. | {% endif %} | `remove_member` | [소유자가 조직에서 구성원을 제거](/articles/removing-a-member-from-your-organization/)하거나{% ifversion not ghae %} 또는 [조직에서 2단계 인증이 필요하고 조직 구성원이](/articles/requiring-two-factor-authentication-in-your-organization) 2FA를 사용하지 않거나 2FA{% endif %}를 사용하지 않도록 설정할 때 트리거됩니다. [또한 조직 구성원이 조직에서 자신을 제거할](/articles/removing-yourself-from-an-organization/) 때 트리거됩니다.| | `remove_outside_collaborator` | 소유자가 조직에서 외부 협력자를 제거하는 경우{% ifversion not ghae %} 또는 [조직에서 2단계 인증이 필요](/articles/requiring-two-factor-authentication-in-your-organization)하고 외부 협력자가 2FA를 사용하지 않거나 2FA{% endif %}를 사용하지 않도록 설정할 때 트리거됩니다. | | `remove_self_hosted_runner` | 자체 호스팅 실행기가 제거될 때 트리거됩니다. 자세한 내용은 “[조직에서 실행기 제거](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)”를 참조하세요. {% ifversion ghec %} | `revoke_external_identity` | 조직 소유자가 구성원의 연결된 ID를 해지할 때 트리거됩니다. 자세한 내용은 “[조직에 대한 멤버의 SAML 액세스 보기 및 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”를 참조하세요.
| `revoke_sso_session` | 조직 소유자가 구성원의 SAML 세션을 취소할 때 트리거됩니다. 자세한 내용은 “[조직에 대한 멤버의 SAML 액세스 보기 및 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”를 참조하세요. {% endif %} | `runner_group_created` | 자체 호스팅 실행기 그룹을 만들 때 트리거됩니다. 자세한 내용은 “[조직의 자체 호스트 실행기 그룹 만들기](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)”를 참조하세요.
| `runner_group_removed` | 자체 호스팅 실행기 그룹이 제거될 때 트리거됩니다. 자세한 내용은 “[자체 호스트 실행기 그룹 제거](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”를 참조하세요.
| `runner_group_updated` | 자체 호스팅 실행기 그룹의 구성이 변경될 때 트리거됩니다. 자세한 내용은 “[자체 호스트 실행기 그룹의 액세스 정책 변경](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”을 참조하세요.
| `runner_group_runners_added` | 자체 호스팅 실행기가 그룹에 추가될 때 트리거됩니다. 자세한 내용은 [자체 호스트 실행기를 그룹으로 이동](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)을 참조하세요.
| `runner_group_runner_removed` |  REST API를 사용하여 그룹에서 자체 호스팅 실행기를 제거할 때 트리거됩니다. 자세한 내용은 “[조직의 그룹에서 자체 호스트 실행기 제거](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)”를 참조하세요.
| `runner_group_runners_updated`|  실행기 그룹의 멤버 목록이 업데이트될 때 트리거됩니다. 자세한 내용은 “[조직의 그룹에서 자체 호스트 실행기 설정](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”을 참조하세요.
{%- ifversion code-security-audit-log-events %} | `secret_scanning_push_protection_custom_message_disabled` | 조직 소유자 또는 관리자가 푸시로 보호된 리포지토리에 푸시를 시도하여 트리거되는 사용자 지정 메시지를 사용하지 않도록 설정할 때 트리거됩니다. 자세한 내용은 "[{% data variables.product.prodname_secret_scanning %}을 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)"를 참조하세요.
| `secret_scanning_push_protection_custom_message_enabled` | 조직 소유자 또는 관리자가 푸시로 보호된 리포지토리에 푸시를 시도하여 트리거되는 사용자 지정 메시지를 사용하도록 설정할 때 트리거됩니다. 자세한 내용은 "[{% data variables.product.prodname_secret_scanning %}을 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)"를 참조하세요.
| `secret_scanning_push_protection_custom_message_updated` | 조직 소유자 또는 관리자가 푸시로 보호된 리포지토리에 푸시를 시도하여 트리거되는 사용자 지정 메시지를 업데이트할 때 트리거됩니다. 자세한 내용은 "[{% data variables.product.prodname_secret_scanning %}을 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)"를 참조하세요.
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `secret_scanning_push_protection_disable ` | 조직 소유자 또는 조직에 대한 관리자 액세스 권한이 있는 사용자가 비밀 검사에 대한 푸시 보호를 사용하지 않도록 설정할 때 트리거됩니다. 자세한 내용은 “[비밀 검사를 사용하여 푸시 보호](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”를 참조하세요.
| `secret_scanning_push_protection_enable ` | 조직에 대한 관리자 액세스 권한이 있는 조직 소유자 또는 사용자가 {% data variables.product.prodname_secret_scanning %}에 대한 푸시 보호를 사용하도록 설정하면 트리거됩니다. {%- endif %} | `self_hosted_runner_online` | 실행기 애플리케이션이 시작될 때 트리거됩니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `self_hosted_runner_offline` | 실행기 애플리케이션이 중지될 때 트리거됩니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 "[자체 호스팅 실행기의 상태 확인"을](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) 참조하세요. {% ifversion fpt or ghes or ghec %} | `self_hosted_runner_updated` | 실행기 애플리케이션이 업데이트될 때 트리거됩니다. REST API 및 UI를 사용하여 볼 수 있으며 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 "[자체 호스팅 실행기 정보"를 참조하세요.](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) {% endif %} {% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | 조직에 대해 퍼블릭 포크의 워크플로에 대한 승인을 요구하는 설정이 변경될 때 트리거됩니다. 자세한 내용은 "[퍼블릭 포크의 워크플로에 대한 승인 필요"를 참조하세요.](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks) {% endif %} | `set_actions_retention_limit` | {% data variables.product.prodname_actions %} 아티팩트 및 로그에 대한 보존 기간이 변경될 때 트리거됩니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)”을 참조하세요.{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | 프라이빗 리포지토리 포크의 워크플로 정책이 변경될 때 트리거됩니다. 자세한 내용은 "[프라이빗 리포지토리 포크에 워크플로 사용"을 참조하세요.](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks) {% endif %} {% ifversion fpt or ghec %} | `unblock_user` | 조직 소유자가 조직의 [사용자 차단을 해제할](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization) 때 트리거됩니다. {% endif %} {% ifversion fpt or ghes or ghec %} | `update_actions_secret` | {% data variables.product.prodname_actions %} 비밀이 업데이트될 때 트리거됩니다. {% endif %} | `update_new_repository_default_branch_setting` | 소유자가 조직의 새 리포지토리에 대한 기본 분기의 이름을 변경할 때 트리거됩니다. 자세한 내용은 “[조직의 리포지토리에 대한 기본 분기 이름 관리](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)”를 참조하세요.
| `update_default_repository_permission` | 소유자가 조직 구성원에 대한 기본 리포지토리 권한 수준을 변경할 때 트리거됩니다.
| `update_member` | 소유자가 소유자에서 구성원 또는 구성원으로 사용자의 역할을 변경할 때 트리거됩니다.
| `update_member_repository_creation_permission` | 소유자가 조직 구성원에 대한 리포지토리 만들기 권한을 변경할 때 트리거됩니다. {% ifversion fpt or ghec %} | `update_saml_provider_settings` | 조직의 SAML 공급자 설정이 업데이트될 때 트리거됩니다.
| `update_terms_of_service` | 조직이 표준 서비스 약관과 회사 서비스 약관 간에 변경될 때 트리거됩니다. 자세한 내용은 “[기업 서비스 약관으로 업그레이드](/articles/upgrading-to-the-corporate-terms-of-service)”를 참조하세요.{% endif %}

{% ifversion ghec %}
### `org_credential_authorization` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `grant` | 구성원이 [SAML Single Sign-On과 함께 사용하기 위해 자격 증명 권한을 부여](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)한 경우 트리거됩니다.
| `deauthorized` | 구성원이 [SAML Single Sign-On과 함께 사용하기 위해 자격 증명 권한 부여를 취소](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)한 경우 트리거됩니다.
| `revoke` | 소유자가 [권한 있는 자격 증명을 취소](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)할 때 트리거됩니다.

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `org_secret_scanning_custom_pattern` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | 조직에서 비밀 검사를 위해 사용자 지정 패턴이 게시될 때 트리거됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)”를 참조하세요.
| `update` | 조직에서 비밀 검사를 위해 사용자 지정 패턴의 변경 내용을 저장할 때 트리거됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)”를 참조하세요.
| `delete` | 조직의 비밀 검사에서 사용자 지정 패턴이 제거될 때 트리거됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)”를 참조하세요.

{% endif %}
### `organization_default_label` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | 기본 레이블을 만들 때 트리거됩니다.
| `update` | 기본 레이블을 편집할 때 트리거됩니다.
| `destroy` | 기본 레이블을 삭제할 때 트리거됩니다.

### `packages` 범주 작업

| 작업 | 설명 |
|--------|-------------|
| `package_version_published` | 패키지 버전이 게시될 때 트리거됩니다. |
| `package_version_deleted` | 특정 패키지 버전이 삭제될 때 트리거됩니다. 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”을 참조하세요.
| `package_deleted` | 전체 패키지가 삭제될 때 트리거됩니다. 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”을 참조하세요.
| `package_version_restored` | 특정 패키지 버전이 삭제될 때 트리거됩니다. 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”을 참조하세요.
| `package_restored` | 전체 패키지가 복원될 때 트리거됩니다. 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”을 참조하세요.

{% ifversion fpt or ghec %}

### `payment_method` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` |  새 결제 방법(예: 새 신용 카드 또는 PayPal 계정)이 추가될 때 트리거됩니다.
| `update` | 기존 결제 방법이 업데이트될 때 트리거됩니다.

{% endif %}

{% ifversion pat-v2 %}

### `personal_access_token` 범주 작업

| 작업 | Description
|------------------|-------------------
| `access_granted` | {% data variables.product.pat_v2 %}에 조직 리소스에 대한 액세스 권한이 부여되면 트리거됩니다. 자세한 내용은 "[조직에서 {% data variables.product.pat_generic %}에 대한 요청 관리](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)"를 참조하세요.
| `access_revoked` | {% data variables.product.pat_v2 %}에 의해 조직 리소스에 대한 액세스가 취소될 때 트리거됩니다. 토큰은 여전히 퍼블릭 조직 리소스를 읽을 수 있습니다. 자세한 내용은 "[조직에서 {% data variables.product.pat_generic %} 검토 및 해지](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)"를 참조하세요.
| `request_cancelled` | 조직 구성원이 조직 리소스에 액세스하기 위해 {% data variables.product.pat_v2 %}에 대한 요청을 취소할 때 트리거됩니다.
| `request_created` | 조직 구성원이 조직 리소스에 액세스하기 위해 {% data variables.product.pat_v2 %}을(를) 만들고 조직에서 {% data variables.product.pat_v2 %}이(가) 조직 리소스에 액세스하기 전에 승인이 필요할 때 트리거됩니다. 자세한 내용은 "[조직에서 {% data variables.product.pat_generic %}에 대한 요청 관리](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)"를 참조하세요.
| `request_denied` | 조직 리소스에 액세스하기 위한 {% data variables.product.pat_v2 %}에 대한 요청이 거부되면 트리거됩니다. 자세한 내용은 "[조직에서 {% data variables.product.pat_generic %}에 대한 요청 관리](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)"를 참조하세요.

{% endif %}

### `profile_picture` 범주 작업
| 작업 | 설명
|------------------|-------------------
| update | 조직의 프로필 사진을 설정하거나 업데이트할 때 트리거됩니다.

### `project` 범주 작업

| 작업 | 설명
|--------------------|---------------------
| `create` | 프로젝트 보드를 만들 때 트리거됩니다.
| `link` | 리포지토리가 프로젝트 보드에 연결될 때 트리거됩니다.
| `rename` | 프로젝트 보드의 이름을 변경할 때 트리거됩니다.
| `update` | 프로젝트 보드가 업데이트될 때 트리거됩니다.
| `delete` | 프로젝트 보드를 삭제할 때 트리거됩니다.
| `unlink` | 리포지토리가 프로젝트 보드에서 연결 해제될 때 트리거됩니다.
| `update_org_permission` | 모든 조직 구성원에 대한 기본 수준 권한이 변경되거나 제거될 때 트리거됩니다. |
| `update_team_permission` | 팀의 프로젝트 보드 사용 권한 수준이 변경되거나 팀이 프로젝트 보드에서 추가되거나 제거될 때 트리거됩니다. |
| `update_user_permission` | 조직 구성원 또는 외부 협력자가 프로젝트 보드에 추가되거나 제거되거나 사용 권한 수준이 변경될 때 트리거됩니다.|

### `protected_branch` 범주 작업

| 작업 | 설명
|--------------------|---------------------
| `create ` | 분기 보호가 분기에서 사용하도록 설정될 때 트리거됩니다.
| `destroy` | 분기 보호가 분기에서 사용하지 않도록 설정될 때 트리거됩니다.
| `update_admin_enforced ` | 리포지토리 관리자에 대해 분기 보호를 적용할 때 트리거됩니다.
| `update_require_code_owner_review ` | 분기에서 필요한 코드 소유자 검토 적용이 업데이트될 때 트리거됩니다.
| `dismiss_stale_reviews ` | 부실 끌어오기 요청을 해제하는 적용이 분기에서 업데이트될 때 트리거됩니다.
| `update_signature_requirement_enforcement_level ` | 분기에서 필요한 커밋 서명 적용이 업데이트될 때 트리거됩니다.
| `update_pull_request_reviews_enforcement_level ` | 분기에서 필요한 끌어오기 요청 검토 적용이 업데이트될 때 트리거됩니다. `0`(비활성화됨), `1`(관리자 아님), `2`(모든 사람) 중 하나일 수 있습니다.
| `update_required_status_checks_enforcement_level ` | 분기에서 필요한 상태 검사 적용이 업데이트될 때 트리거됩니다.
| `update_strict_required_status_checks_policy` | 병합이 변경되기 전에 분기의 요구 사항을 최신 상태로 유지하도록 할 때 트리거됩니다.
| `rejected_ref_update ` | 분기 업데이트 시도가 거부될 때 트리거됩니다.
| `policy_override ` | 리포지토리 관리자가 분기 보호 요구 사항을 재정의할 때 트리거됩니다.
| `update_allow_force_pushes_enforcement_level ` | 보호된 분기에 대해 강제 푸시를 사용하거나 사용하지 않도록 설정할 때 트리거됩니다.
| `update_allow_deletions_enforcement_level ` | 보호된 분기에 대해 분기 삭제를 사용하거나 사용하지 않도록 설정할 때 트리거됩니다.
| `update_linear_history_requirement_enforcement_level ` | 보호된 분기에 필요한 선형 커밋 기록을 사용하거나 사용하지 않도록 설정하면 트리거됩니다.

### `pull_request` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | 끌어오기 요청을 만들 때 트리거됩니다.
| `close` | 병합되지 않고 끌어오기 요청을 닫을 때 트리거됩니다.
| `reopen` | 이전에 닫힌 후 끌어오기 요청을 다시 열 때 트리거됩니다.
| `merge` | 끌어오기 요청이 병합될 때 트리거됩니다.
| `indirect_merge` | 끌어오기 요청이 대상 분기에 병합되었기 때문에 끌어오기 요청이 병합된 것으로 간주될 때 트리거됩니다.
| `ready_for_review` | 끌어오기 요청이 검토할 준비가 된 것으로 표시되면 트리거됩니다.
| `converted_to_draft` | 끌어오기 요청이 초안으로 변환될 때 트리거됩니다.
| `create_review_request` | 검토가 요청될 때 트리거됩니다.
| `remove_review_request` | 검토 요청이 제거될 때 트리거됩니다.

### `pull_request_review` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `submit` | 검토가 제출될 때 트리거됩니다.
| `dismiss` | 검토가 해제될 때 트리거됩니다.
| `delete` | 검토가 삭제될 때 트리거됩니다.

### `pull_request_review_comment` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | 검토 주석이 추가될 때 트리거됩니다.
| `update` | 검토 주석이 변경될 때 트리거됩니다.
| `delete` | 검토 주석이 삭제될 때 트리거됩니다.

### `repo` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `access` | 사용자가 조직의 리포지토리 [표시 유형을 변경](/github/administering-a-repository/setting-repository-visibility)할 때 트리거됩니다.
| `actions_enabled` | 리포지토리에 대해 {% data variables.product.prodname_actions %}을 사용할 때 트리거됩니다. UI를 사용하여 볼 수 있습니다. REST API를 사용하여 감사 로그에 액세스할 때는 이 이벤트가 포함되지 않습니다. 자세한 내용은 “[ 사용](#using-the-rest-api)”을 참조하세요.
| `add_member` | 사용자가 [리포지토리에 대한 공동 작업 액세스 권한을 갖도록 초대를 수락](/articles/inviting-collaborators-to-a-personal-repository)할 때 트리거됩니다.
| `add_topic` | 리포지토리 관리자가 리포지토리에 [토픽을 추가](/articles/classifying-your-repository-with-topics)할 때 트리거됩니다.
| `advanced_security_disabled` | 리포지토리 관리자가 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 기능을 사용하지 않도록 설정할 때 트리거됩니다. 자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”를 참조하세요.
| `advanced_security_enabled` | 리포지토리 관리자가 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 기능을 사용하도록 설정할 때 트리거됩니다. 자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”를 참조하세요.
| `archived` | 리포지토리 관리자가 [리포지토리를 보관](/articles/about-archiving-repositories)할 때 트리거됩니다.{% ifversion ghes %}
| `config.disable_anonymous_git_access` | 퍼블릭 리포지토리에서 [익명 Git 읽기 권한을 사용하지 않도록 설정](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)하면 트리거됩니다.
| `config.enable_anonymous_git_access` | 퍼블릭 리포지토리에서 [익명 Git 읽기 권한을 사용하도록 설정](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)하면 트리거됩니다.
| `config.lock_anonymous_git_access` | 리포지토리의 [익명 Git 읽기 권한 설정이 잠겨 있을](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) 때 트리거됩니다.
| `config.unlock_anonymous_git_access` | 리포지토리의 [익명 Git 읽기 권한 설정이 잠긴](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) 경우 트리거됩니다.{% endif %}
| `create` | [새 리포지토리를 만들](/articles/creating-a-new-repository) 때 트리거됩니다.{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` |리포지토리에 대한 {% data variables.product.prodname_actions %} 비밀이 만들어지면 트리거됩니다. 자세한 정보는 “[리포지토리의 암호화된 비밀 만들기](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)”를 참조하세요.{% endif %}
| `destroy` | [리포지토리가 삭제될](/articles/deleting-a-repository) 때 트리거됩니다.{% ifversion fpt or ghec %}
| `disable` | 리포지토리를 사용하지 않도록 설정하면 트리거됩니다(예: [자금 부족](/articles/unlocking-a-locked-account)).{% endif %}
| `enable` | 리포지토리를 다시 사용하도록 설정할 때 트리거됩니다.{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret` | {% data variables.product.prodname_actions %} 비밀이 제거될 때 트리거됩니다.{% endif %}
| `remove_member` | 사용자가 [공동 작업자로 리포지토리에서 제거될](/articles/removing-a-collaborator-from-a-personal-repository) 때 트리거됩니다.
| `register_self_hosted_runner` | 새 자체 호스팅 실행기를 등록할 때 트리거됩니다. 자세한 내용은 “[리포지토리에 자체 호스트 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)”를 참조하세요.
| `remove_self_hosted_runner` | 자체 호스팅 실행기를 제거할 때 트리거됩니다. 자세한 내용은 “[리포지토리에서 실행기 제거](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)”를 참조하세요.
| `remove_topic` | 리포지토리 관리자가 리포지토리에서 토픽을 제거할 때 트리거됩니다.
| `rename` | [리포지토리의 이름을 변경](/articles/renaming-a-repository)하면 트리거됩니다.
| `self_hosted_runner_online` | 실행기 애플리케이션이 시작될 때 트리거됩니다. REST API를 사용해서만 볼 수 있습니다. UI 또는 JSON/CSV 내보내기에서 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `self_hosted_runner_offline` | 실행기 애플리케이션이 중지될 때 트리거됩니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | 실행기 애플리케이션이 업데이트될 때 트리거됩니다. REST API 및 UI를 사용하여 볼 수 있으며 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”를 참조하세요.{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | 퍼블릭 포크의 워크플로에 대한 승인을 요구하는 설정이 변경될 때 트리거됩니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)”를 참조하세요.{% endif %}
| `set_actions_retention_limit` | {% data variables.product.prodname_actions %} 아티팩트 및 로그의 보존 기간이 변경될 때 트리거됩니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”를 참조하세요.{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | 프라이빗 리포지토리 포크의 워크플로에 대한 정책이 변경될 때 트리거됩니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)”를 참조하세요.{% endif %}
| `staff_unlock` | 엔터프라이즈 소유자 또는 {% 데이터 variables.contact.github_support %}(리포지토리 관리자의 사용 권한 포함)이 리포지토리의 잠금을 일시적으로 해제할 때 트리거됩니다. 리포지토리의 표시 유형은 변경되지 않습니다.
| `transfer` | [리포지토리의 이름을 변경](/articles/how-to-transfer-a-repository)할 때 트리거됩니다.
| `transfer_start` | 리포지토리 전송이 수행될 때 트리거됩니다.
| `unarchived` | 리포지토리 관리자가 리포지토리를 보관 취소할 때 트리거됩니다.{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` | {% data variables.product.prodname_actions %} 비밀이 업데이트될 때 트리거됩니다.{% endif %}

{% ifversion fpt or ghec %}

### `repository_advisory` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `close` | 누군가가 보안 권고를 닫을 때 트리거됩니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 보안 공지 정보](/github/managing-security-vulnerabilities/about-github-security-advisories)”를 참조하세요.
| `cve_request` | 누군가가 보안 공지 초안을 위해 {% data variables.product.prodname_dotcom %}에서 CVE(일반적인 취약성 및 노출) 번호를 요청할 때 트리거됩니다.
| `github_broadcast` | {% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_advisory_database %}에서 보안 공지를 공개할 때 트리거됩니다.
| `github_withdraw` | {% data variables.product.prodname_dotcom %}이(가) 오류로 게시된 보안 권고를 철회할 때 트리거됩니다.
| `open` | 누군가가 보안 권고 초안을 열 때 트리거됩니다.
| `publish` | 누군가가 보안 권고를 게시할 때 트리거됩니다.
| `reopen` | 누군가가 보안 권고 초안으로 다시 열 때 트리거됩니다.
| `update` | 누군가가 초안 또는 게시된 보안 권고를 편집할 때 트리거됩니다.

### `repository_content_analysis` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `enable` | 리포지토리에 대해 관리자 액세스 권한이 있는 조직 소유자 또는 사용자가 [개인 리포지토리에 대한 데이터 사용 설정을 사용하도록 설정](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)하면 트리거됩니다.
| `disable` | 리포지토리에 대해 관리자 액세스 권한이 있는 조직 소유자 또는 사용자가 [개인 리포지토리에 대한 데이터 사용 설정을 사용하지 않도록 설정](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)하면 트리거됩니다.

{% endif %}{% ifversion fpt or ghec %}

### `repository_dependency_graph` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `disable` | 리포지토리 소유자 또는 리포지토리에 대해 관리자 액세스 권한이 있는 사용자가 {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 대한 종속성 그래프를 사용하지 않도록 설정하면 트리거됩니다. 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”를 참조하세요.
| `enable` | 리포지토리 소유자 또는 리포지토리에 대해 관리자 액세스 권한이 있는 사용자가 {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 대한 종속성 그래프를 사용하도록 설정하면 트리거됩니다.

{% endif %}{% ifversion ghec or ghes or ghae %}
### `repository_secret_scanning` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `disable` | 리포지토리 소유자 또는 리포지토리에 대해 관리자 액세스 권한이 있는 사용자가 리포지토리에 대한 비밀 검사를 사용하지 않도록 설정할 때 트리거됩니다. 자세한 내용은 “[비밀 검사 정보](/github/administering-a-repository/about-secret-scanning)”를 참조하세요.
| `enable` | 리포지토리 소유자 또는 리포지토리에 대해 관리자 액세스 권한이 있는 사용자가 리포지토리에 대한 비밀 검사를 사용하도록 설정할 때 트리거됩니다.

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `repository_secret_scanning_custom_pattern` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | 리포지토리에서 비밀 검사를 위해 사용자 지정 패턴이 게시될 때 트리거됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)”를 참조하세요.
| `update` | 리포지토리에서 비밀 검색을 위해 사용자 지정 패턴의 변경 내용을 저장할 때 트리거됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)”를 참조하세요.
| `delete` | 리포지토리의 비밀 검사에서 사용자 지정 패턴이 제거될 때 트리거됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)”를 참조하세요.

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `repository_secret_scanning_push_protection` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `disable` | 리포지토리 소유자 또는 리포지토리에 대해 관리자 액세스 권한이 있는 사용자가 리포지토리에 대한 비밀 검사를 사용하지 않도록 설정할 때 트리거됩니다. 자세한 내용은 “[비밀 검사를 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”를 참조하세요.
| `enable` | 리포지토리 소유자 또는 리포지토리에 대해 관리자 액세스 권한이 있는 사용자가 리포지토리에 대한 비밀 검사를 사용하도록 설정할 때 트리거됩니다.

{% endif %}
### `repository_vulnerability_alert` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | {% data variables.product.product_name %}에서 취약한 종속성을 사용하는 리포지토리에 대한 {% data variables.product.prodname_dependabot %} 경고를 만들 때 트리거됩니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”를 참조하세요.
| `dismiss` | 리포지토리에 대한 관리자 액세스 권한이 있는 조직 소유자 또는 사용자가 취약한 종속성에 대한 {% data variables.product.prodname_dependabot %} 경고를 해제할 때 트리거됩니다.
| `resolve` | 리포지토리에 대한 쓰기 액세스 권한이 있는 사용자가 변경 내용을 푸시하여 프로젝트 종속성의 취약성을 업데이트하고 해결할 때 트리거됩니다.
{% ifversion fpt or ghec %}
### `repository_vulnerability_alerts` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `authorized_users_teams` | 리포지토리에 대한 관리자 권한이 있는 조직 소유자 또는 사람이 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 받을 권한이 있는 사용자 또는 팀 목록을 업데이트할 때 트리거됩니다. 자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”를 참조하세요.
| `disable` | 리포지토리 소유자 또는 리포지토리에 대한 관리자 액세스 권한이 있는 사용자가 {% data variables.product.prodname_dependabot_alerts %}을(를) 사용하지 않도록 설정하면 트리거됩니다.
| `enable` | 리포지토리 소유자 또는 리포지토리에 대한 관리자 액세스 권한이 있는 사용자가 {% data variables.product.prodname_dependabot_alerts %}을(를) 사용하도록 설정하면 트리거됩니다.

{% endif %}{% ifversion custom-repository-roles %}
### `role` 범주 작업
| 작업 | 설명
|------------------|-------------------
|`create` | 조직 소유자가 새 사용자 지정 리포지토리 역할을 만들 때 트리거됩니다. 자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.
|`destroy` | 조직 소유자가 사용자 지정 리포지토리 역할을 삭제할 때 트리거됩니다. 자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.
|`update` | 조직 소유자가 기존 사용자 지정 리포지토리 역할을 편집할 때 트리거됩니다. 자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.

{% endif %} {% ifversion ghec or ghes or ghae %}
### `secret_scanning` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `disable` | 조직 소유자가 모든 기존{% ifversion ghec %} 프라이빗 또는 내부{% endif %} 리포지토리에 대한 비밀 검사를 사용하지 않도록 설정할 때 트리거됩니다. 자세한 내용은 “[비밀 검사 정보](/github/administering-a-repository/about-secret-scanning)”를 참조하세요.
| `enable` | 조직 소유자가 모든 기존{% ifversion ghec %} 프라이빗 또는 내부{% endif %} 리포지토리에 대한 비밀 검사를 사용하도록 설정할 때 트리거됩니다.
{% endif %}

{% ifversion secret-scanning-alert-audit-log %}
### `secret_scanning_alert` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | {% data variables.product.prodname_dotcom %}가 노출된 비밀을 감지하고 {% data variables.product.prodname_secret_scanning %} 경고를 생성할 때 트리거됩니다. 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %}의 알림 관리](/code-security/secret-scanning/managing-alerts-from-secret-scanning)”를 참조하세요.
| `reopen` | 사용자가 {% data variables.product.prodname_secret_scanning %} 경고를 다시 열 때 트리거됩니다.
| `resolve` | 사용자가 {% data variables.product.prodname_secret_scanning %} 경고를 해결할 때 트리거됩니다.
{% endif %}

{% ifversion ghec or ghes or ghae %}
### `secret_scanning_new_repos` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `disable` | 조직 소유자가 모든 새 {% ifversion ghec %}프라이빗 또는 내부{% endif %} 리포지토리에 대한 비밀 검사를 사용하지 않도록 설정할 때 트리거됩니다. 자세한 내용은 “[비밀 검사 정보](/github/administering-a-repository/about-secret-scanning)”를 참조하세요.
| `enable` | 조직 소유자가 모든 새 {% ifversion ghec %}프라이빗 또는 내부{% endif %} 리포지토리에 대한 비밀 검사를 사용하도록 설정할 때 트리거됩니다.
{% endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
### `secret_scanning_push_protection` 범주 작업

| 작업 | Description
|------------------|-------------------
| `bypass` | 사용자가 비밀 검사를 통해 탐지한 비밀에 대한 푸시 보호를 무시할 때 트리거됩니다. 자세한 내용은 “[비밀에 대한 푸시 보호 무시](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)”를 참조하세요.
{% endif %}

{% ifversion fpt or ghec %}
### `sponsors` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `custom_amount_settings_change` | 사용자 지정 금액을 사용하거나 사용하지 않도록 설정하거나 제안된 사용자 지정 금액을 변경할 때 트리거됩니다(“[스폰서쉽 계층 관리](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)” 참조).
| `repo_funding_links_file_action` | 리포지토리에서 FUNDING 파일을 변경할 때 트리거됩니다(“[리포지토리에 스폰서 단추 표시](/articles/displaying-a-sponsor-button-in-your-repository)” 참조).
| `sponsor_sponsorship_cancel` | 스폰서쉽을 취소할 때 트리거됩니다(“[스폰서쉽 다운그레이드](/articles/downgrading-a-sponsorship)” 참조).
| `sponsor_sponsorship_create` | 계정을 후원할 때 트리거됩니다(“[오픈 소스 기여자 후원](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)” 참조).
| `sponsor_sponsorship_payment_complete` | 계정을 후원하고 결제가 처리된 후 트리거됩니다(“[오픈 소스 기여자 후원](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)” 참조).
| `sponsor_sponsorship_preference_change` | 스폰서 계정으로부터 메일 업데이트를 받을지 여부를 변경할 때 트리거됩니다(“[스폰서쉽 관리](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)” 참조).
| `sponsor_sponsorship_tier_change` | 스폰서쉽을 업그레이드하거나 다운그레이드할 때 트리거됩니다(“[스폰서쉽 업그레이드](/articles/upgrading-a-sponsorship)” 및 “[스폰서쉽 다운그레이드](/articles/downgrading-a-sponsorship)” 참조).
| `sponsored_developer_approve` | {% data variables.product.prodname_sponsors %} 계정이 승인되면 트리거됩니다(“[조직에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)” 참조).
| `sponsored_developer_create` | {% data variables.product.prodname_sponsors %} 계정을 만들면 트리거됩니다(“[조직에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)” 참조).
| `sponsored_developer_disable` | {% data variables.product.prodname_sponsors %} 계정을 사용하지 않도록 설정하면 트리거됩니다.
| `sponsored_developer_redraft` | {% data variables.product.prodname_sponsors %} 계정이 승인된 상태에서 초안 상태로 반환될 때 트리거됩니다.
| `sponsored_developer_profile_update` | 스폰서 조직 프로필을 편집할 때 트리거됩니다(“[{% data variables.product.prodname_sponsors %}의 프로필 세부 정보 편집](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)” 참조).
| `sponsored_developer_request_approval` | 승인을 위해 {% data variables.product.prodname_sponsors %}의 애플리케이션을 제출할 때 트리거됩니다(“[조직의 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)” 참조).
| `sponsored_developer_tier_description_update` | 스폰서쉽 계층에 대한 설명을 변경할 때 트리거됩니다(“[스폰서쉽 계층 관리](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)” 참조).
| `sponsored_developer_update_newsletter_send` | 스폰서에게 메일 업데이트를 보낼 때 트리거됩니다(“[스폰서에게 연락](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)”참조).
| `waitlist_invite_sponsored_developer` | 대기 목록에서 {% data variables.product.prodname_sponsors %}에 가입하도록 초대될 때 트리거됩니다(“[조직의 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)” 참조).
| `waitlist_join` | 스폰서 조직이 되기 위해 대기 목록에 조인할 때 트리거됩니다(“[조직의 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)” 참조)
{% endif %}

### `team` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `add_member` | 조직의 구성원이 [팀에 추가](/articles/adding-organization-members-to-a-team)될 때 트리거됩니다.
| `add_repository` | 팀이 리포지토리를 제어할 수 있는 경우 트리거됩니다.
| `change_parent_team` | 자식 팀이 만들어지거나 [자식 팀의 부모가 변경](/articles/moving-a-team-in-your-organization-s-hierarchy)될 때 트리거됩니다.
| `change_privacy` | 팀의 개인 정보 수준이 변경될 때 트리거됩니다.
| `create` | 새 팀을 만들 때 트리거됩니다.
| `demote_maintainer` | 사용자가 팀 유지 관리자에서 팀 구성원으로 강등될 때 트리거됩니다. 자세한 내용은 “[팀 멤버에 팀 유지 관리자 역할 할당](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)”을 참조하세요.
| `destroy` | 팀이 조직에서 삭제될 때 트리거됩니다.
| `team.promote_maintainer` | 사용자가 팀 구성원에서 팀 유지 관리자로 승격될 때 트리거됩니다. 자세한 내용은 “[팀 멤버에 팀 유지 관리자 역할 할당](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)”을 참조하세요.
| `remove_member` | 조직의 구성원이 소속된 [팀에서 제거](/articles/removing-organization-members-from-a-team)될 때 트리거됩니다.
| `remove_repository` | 더 이상 팀에서 리포지토리를 통제하지 않을 때 트리거됩니다.

### `team_discussions` 범주 작업

| 작업 | 설명
|---|---|
| `disable` | 조직 소유자가 조직에 대한 팀 토론을 사용하지 않도록 설정할 때 트리거됩니다. 자세한 내용은 “[조직에 대한 팀 토론 사용 안 함](/articles/disabling-team-discussions-for-your-organization)”을 참조하세요.
| `enable` | 조직 소유자가 조직에 대한 팀 토론을 사용하도록 설정할 때 트리거됩니다.

### `workflows` 범주 작업

{% data reusables.actions.actions-audit-events-workflow %}
## 추가 참고 자료

- "[조직 보안 유지](/articles/keeping-your-organization-secure)"{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {%- ifversion fpt or ghec %}
- “[조직의 멤버 정보 내보내기](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization)”{% endif %} {%- endif %}
