---
title: 엔터프라이즈에 대한 감사 로그 이벤트
intro: 엔터프라이즈에 대해 기록된 감사 로그 이벤트에 대해 알아봅니다.
shortTitle: Audit log events
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can interact with the audit log.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/articles/audited-actions
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
  - /admin/user-management/monitoring-activity-in-your-enterprise/audited-actions
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 5a936791aff8706cd04773bb0f7428cd11f29329
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183950'
---
{% ifversion ghec%}
## 엔터프라이즈에 대한 감사 로그 정보

엔터프라이즈의 감사 로그에 표시되는 이벤트의 범위는 엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하는지 여부에 따라 달라집니다. {% data variables.product.prodname_emus %}에 대한 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)”를 참조하세요.

- 엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하지 않는 경우 감사 로그에는 이 문서에 나열된 엔터프라이즈 계정 및 엔터프라이즈 계정 내의 조직과 관련된 이벤트만 포함됩니다.
- 엔터프라이즈에서 {% data variables.product.prodname_emus %}을(를) 사용하는 경우 감사 로그에는 사용자가 {% data variables.product.product_name %}에 로그인할 때마다와 사용자 계정 내에서 수행하는 작업과 같이 {% data variables.enterprise.prodname_managed_users %}에 대한 사용자 이벤트도 포함됩니다. 이러한 사용자 계정 이벤트 목록은 "[보안 로그 검토](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log#security-log-actions)"를 참조하세요.
{% endif %}

{%- ifversion fpt or ghec %}
## `account` 범주 작업

| 작업 | 설명
|--------|-------------
| `account.billing_plan_change` | 조직의 청구 기간이 변경되었습니다. 자세한 내용은 “[청구 기간 변경](/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle)”을 참조하세요.
| `account.plan_change` | 조직의 구독이 변경되었습니다. 자세한 내용은 “[GitHub 계정에 대한 청구 정보](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts)”를 참조하세요.
| `account.pending_plan_change` | 조직 소유자 또는 청구 관리자가 유료 구독을 취소하거나 다운그레이드했습니다. 자세한 내용은 “[업그레이드 또는 다운그레이드 시 청구 프로세스에 어떤 영향을 주나요?](/billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process)”를 참조하세요.
| `account.pending_subscription_change` | {% data variables.product.prodname_marketplace %} 평가판이 시작되었거나 만료되었습니다. 자세한 내용은 “[GitHub Marketplace에 대한 청구 정보](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)”를 참조하세요.
{%- endif %}

{%- ifversion fpt or ghec %}
## `advisory_credit` 범주 작업

| 작업 | 설명
|--------|-------------
| `advisory_credit.accept` | 누군가가 보안 공지에 대한 기여 인정을 수락했습니다. 자세한 내용은 “[보안 공지 편집](/github/managing-security-vulnerabilities/editing-a-security-advisory)”을 참조하세요.
| `advisory_credit.create` | 보안 공지의 관리자가 누군가를 기여 인정 섹션에 추가했습니다.
| `advisory_credit.decline` | 누군가가 보안 공지에 대한 기여 인정을 거부했습니다.
| `advisory_credit.destroy` | 보안 공지의 관리자가 누군가를 기여 인정 섹션에서 제거했습니다.
{%- endif %}

## `artifact` 범주 작업

| 작업 | 설명
|--------|-------------
| `artifact.destroy`    | 워크플로 실행 아티팩트가 수동으로 삭제되었습니다.

{%- ifversion audit-log-streaming %}
## `audit_log_streaming` 범주 작업

| 작업 | 설명
|--------|-------------
| `audit_log_streaming.check` | 감사 로그 스트리밍을 위해 구성된 엔드포인트에 대한 수동 검사가 수행되었습니다.
| `audit_log_streaming.create` | 감사 로그 스트리밍을 위해 엔드포인트가 추가되었습니다.
| `audit_log_streaming.update` | 감사 로그 스트리밍에 대한 엔드포인트 구성(예: 스트림 일시 중지, 사용 또는 사용 안 함)이 업데이트되었습니다.
| `audit_log_streaming.destroy` | 감사 로그 스트리밍 엔드포인트가 삭제되었습니다.
{%- endif %}

{%- ifversion fpt or ghec %}
## `billing` 범주 작업

| 작업 | 설명
|--------|-------------
| `billing.change_billing_type` | 조직에서 {% data variables.product.prodname_dotcom %}에 대한 결제 방법을 변경했습니다. 자세한 내용은 “[결제 방법 추가 또는 편집](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)”을 참조하세요.
| `billing.change_email` | 조직의 청구 메일 주소가 변경되었습니다. 자세한 내용은 “[청구 메일 설정](/billing/managing-your-github-billing-settings/setting-your-billing-email)”을 참조하세요.
{%- endif %}

## `business` 범주 작업

| 작업 | 설명
|--------|-------------
| `business.add_admin` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 엔터프라이즈에 추가되었습니다.
{%- ifversion ghec %} | `business.add_billing_manager` | 청구 관리자가 엔터프라이즈에 추가되었습니다.
{%- endif %} | `business.add_organization` | 조직이 엔터프라이즈에 추가되었습니다.
{%- ifversion ghec %} | `business.add_support_entitlee` | 엔터프라이즈 멤버에게 지원 자격이 추가되었습니다. 자세한 내용은 “[엔터프라이즈에 대한 지원 자격 관리](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)”를 참조하세요.
{%- endif %} {%- ifversion ghes or ghae %} | `business.advanced_security_policy_update` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 {% data variables.product.prodname_GH_advanced_security %}에 대한 정책을 만들거나 업데이트하거나 제거했습니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_advanced_security %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)”을 참조하세요.
{%- endif %} {%- ifversion ghec %} | `business.cancel_admin_invitation` | 엔터프라이즈의 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}로의 초대가 취소되었습니다.
| `business.cancel_billing_manager_invitation` | 엔터프라이즈 청구 관리자로의 초대가 취소되었습니다.
{%- endif %} {%- ifversion ghes %} | `business.clear_actions_settings` | 엔터프라이즈 소유자 또는 사이트 관리자가 엔터프라이즈에 대한 {% data variables.product.prodname_actions %} 정책 설정을 지웠습니다. 자세한 내용은 “[엔터프라이즈에서 GitHub Actions에 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)”을 참조하세요.
{%- endif %} | `business.clear_default_repository_permission` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 엔터프라이즈에 대한 베이스 리포지토리 사용 권한 정책 설정을 지웠습니다. 자세한 내용은 “[베이스 리포지토리 사용 권한에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)”을 참조하세요.
| `business.clear_members_can_create_repos`      | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 엔터프라이즈 조직에서 리포지토리 만들기에 대한 제한을 지웠습니다. 자세한 내용은 “[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)”을 참조하세요.
| `business.create`                              | 엔터프라이즈가 만들어졌습니다.
{%- ifversion ghec %} | `business.disable_oidc` | 엔터프라이즈에 대해 OIDC Single Sign-On을 사용하지 않도록 설정했습니다. 자세한 내용은 "[{% data variables.product.prodname_emus %}에 대한 OIDC 구성](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)"을 참조하세요.
| `business.disable_saml` | 엔터프라이즈에서 SAML Single Sign-On을 사용하지 않도록 설정했습니다.
{%- endif %} | `business.disable_two_factor_requirement` | 멤버가 엔터프라이즈에 액세스하기 위한 2단계 인증 요구 사항을 사용하지 않도록 설정했습니다.
{%- ifversion ghec %} | `business.enable_oidc` | 엔터프라이즈에서 OIDC Single Sign-On을 사용하도록 설정했습니다. 자세한 내용은 "[{% data variables.product.prodname_emus %}에 대한 OIDC 구성](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)"을 참조하세요.
| `business.enable_saml` | 엔터프라이즈에서 SAML Single Sign-On을 사용하도록 설정했습니다.
{%- endif %} | `business.enable_two_factor_requirement` | 멤버가 엔터프라이즈에 액세스하기 위한 2단계 인증 요구 사항을 사용하도록 설정했습니다.
{%- ifversion ghec %} | `business.enterprise_server_license_download` | {% data variables.product.prodname_ghe_server %} 라이선스를 다운로드했습니다.
| `business.import_license_usage` | 라이선스 사용 현황 정보를 {% data variables.product.prodname_ghe_server %} 인스턴스에서 {% data variables.product.prodname_dotcom_the_website %}의 엔터프라이즈 계정으로 가져왔습니다.
| `business.invite_admin` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}로의 초대를 보냈습니다.
| `business.invite_billing_manager` | 엔터프라이즈의 청구 관리자로의 초대를 보냈습니다.
{%- endif %} | `business.members_can_update_protected_branches.clear` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}는 엔터프라이즈 멤버가 개별 조직의 리포지토리에서 보호된 분기를 업데이트할 수 있는지 여부에 대한 정책을 설정 해제합니다. 조직 관리자는 보호된 분기 설정 업데이트 허용 여부를 선택할 수 있습니다.
| `business.members_can_update_protected_branches.disable` | 엔터프라이즈 멤버가 분기 보호 규칙을 업데이트하는 기능을 사용하지 않도록 설정했습니다. 엔터프라이즈 소유자만 보호된 분기를 업데이트할 수 있습니다.
| `business.members_can_update_protected_branches.enable` | 엔터프라이즈 멤버가 분기 보호 규칙을 업데이트하는 기능을 사용하도록 설정했습니다. 엔터프라이즈 소유자 및 멤버가 보호된 분기를 업데이트할 수 있습니다.
| `business.remove_admin` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 엔터프라이즈에서 제거되었습니다.
{%- ifversion ghes %} | `business.referrer_override_enable` | 엔터프라이즈 소유자 또는 사이트 관리자가 참조 페이지 정책 재정의를 사용하도록 설정했습니다. 자세한 내용은 “[엔터프라이즈에 대한 참조 페이지 정책 구성](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)”을 참조하세요.
| `business.referrer_override_disable` | 엔터프라이즈 소유자 또는 사이트 관리자가 참조 페이지 정책 재정의를 사용하지 않도록 설정했습니다. 자세한 내용은 “[엔터프라이즈에 대한 참조 페이지 정책 구성](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)”을 참조하세요.
{%- endif %} {%- ifversion ghec %} | `business.remove_billing_manager` | 청구 관리자가 엔터프라이즈에서 제거되었습니다.
| `business.remove_member` | 멤버가 엔터프라이즈에서 제거되었습니다.
{%- endif %} | `business.remove_organization` | 조직이 엔터프라이즈에서 제거되었습니다.
{%- ifversion ghec %} | `business.remove_support_entitlee` | 엔터프라이즈 멤버의 지원 자격이 제거되었습니다. 자세한 내용은 “[엔터프라이즈에 대한 지원 자격 관리](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)”를 참조하세요.
{%- endif %} | `business.rename_slug` | 엔터프라이즈 URL의 슬러그 이름이 변경되었습니다.
{%- ifversion ghec %} | `business.revoke_external_identity` | 엔터프라이즈 멤버에 대한 외부 ID가 취소되었습니다.
| `business.revoke_sso_session` | 엔터프라이즈 멤버에 대한 SAML Single Sign-On 세션이 취소되었습니다.
{%- endif %} {%- ifversion ghec %} | `business.set_actions_fork_pr_approvals_policy` | 엔터프라이즈에서 퍼블릭 포크의 워크플로에 대한 승인을 요구하는 설정이 변경되었습니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)”을 참조하세요.
{%- endif %} | `business.set_actions_retention_limit` | 엔터프라이즈에서 {% data variables.product.prodname_actions %} 아티팩트 및 로그에 대한 보존 기간이 변경되었습니다. 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)”을 참조하세요.
{%- ifversion ghec or ghes %} | `business.set_fork_pr_workflows_policy` | 프라이빗 리포지토리 포크의 워크플로에 대한 정책이 변경되었습니다. 자세한 내용은 “{% ifversion ghec %}[엔터프라이즈의 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[프라이빗 리포지토리 포크에 워크플로 사용](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}”을 참조하세요.
{%- endif %} {%- ifversion audit-log-sso-response-events %} |`business.sso_response` | 멤버가 엔터프라이즈로 인증을 시도할 때 SAML Single Sign-On 응답이 생성되었습니다. 이 이벤트는 감사 로그 스트리밍 및 REST API를 통해서만 사용할 수 있습니다.
{%- endif %} {%- ifversion ghes %} | `business.update_actions_settings` | 엔터프라이즈 소유자 또는 사이트 관리자가 엔터프라이즈에 대한 {% data variables.product.prodname_actions %} 정책 설정을 업데이트했습니다. 자세한 내용은 “[엔터프라이즈에서 GitHub Actions에 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)”을 참조하세요.
{%- endif %} | `business.update_default_repository_permission` | 엔터프라이즈의 모든 조직에 대해 베이스 리포지토리 권한 설정이 업데이트되었습니다. 자세한 내용은 “[베이스 리포지토리 사용 권한에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)”을 참조하세요.
| `business.update_member_repository_creation_permission` | 엔터프라이즈에 대한 리포지토리 만들기 설정이 업데이트되었습니다. 자세한 내용은 “[리포지토리 만들기에 대한 정책 설정](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)”을 참조하세요.
| `business.update_member_repository_invitation_permission` | 외부 협력자를 리포지토리에 초대하는 엔터프라이즈 멤버에 대한 정책 설정이 업데이트되었습니다. 자세한 내용은 “[리포지토리에 외부 협력자를 초대하는 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)”을 참조하세요.
{%- ifversion ghec %} | `business.update_saml_provider_settings` | 엔터프라이즈에 대한 SAML Single Sign-On 공급자 설정이 업데이트되었습니다.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## `business_advanced_security` 범주 작업

| 작업 | 설명
|--------|-------------
| `business_advanced_security.disabled` | 엔터프라이즈에서 {% data variables.product.prodname_GH_advanced_security %}을(를) 사용하지 않도록 설정했습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_advanced_security.enabled` | 엔터프라이즈에서 {% data variables.product.prodname_GH_advanced_security %}을(를) 사용하도록 설정했습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_advanced_security.disabled_for_new_repos` | 엔터프라이즈의 새 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}을(를) 사용하지 않도록 설정했습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_advanced_security.enabled_for_new_repos` | 엔터프라이즈의 새 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}이(가) 사용하도록 설정되었습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.

{% endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning` 범주 작업

| 작업 | 설명
|--------|-------------
| `business_secret_scanning.disable` | 엔터프라이즈에서 {% data variables.product.prodname_secret_scanning_caps %}을(를) 사용하지 않도록 설정했습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_secret_scanning.enable` | 엔터프라이즈에 대해 {% data variables.product.prodname_secret_scanning_caps %}을(를) 사용하도록 설정했습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_secret_scanning.disabled_for_new_repos` | 엔터프라이즈의 새 리포지토리에 대해 {% data variables.product.prodname_secret_scanning_caps %}이(가) 사용하지 않도록 설정되었습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_secret_scanning.enabled_for_new_repos` | 엔터프라이즈의 새 리포지토리에 대해 {% data variables.product.prodname_secret_scanning_caps %}이(가) 사용하도록 설정되었습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.

{% endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## `business_secret_scanning_custom_pattern` 범주 작업

작업                        | 설명
----------------------------- | -----------------------------------------------
| `business_secret_scanning_custom_pattern.create` | 비밀 검사를 위해 엔터프라이즈 수준 사용자 지정 패턴이 게시됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-enterprise-account)”를 참조하세요.
| `business_secret_scanning_custom_pattern.delete` | 비밀 검사에서는 엔터프라이즈 수준의 사용자 지정 패턴이 제거됩니다.
| `business_secret_scanning_custom_pattern.update` | 비밀 검사를 위해 엔터프라이즈 수준 사용자 지정 패턴에 대한 변경 내용이 저장됩니다.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning_push_protection` 범주 작업

| 작업 | 설명
|--------|-------------
| `business_secret_scanning_push_protection.disable` | 엔터프라이즈에서 {% data variables.product.prodname_secret_scanning %}에 대한 푸시 보호를 사용하지 않도록 설정했습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_secret_scanning_push_protection.enable` | 엔터프라이즈에서 {% data variables.product.prodname_secret_scanning %}에 대한 푸시 보호가 사용하도록 설정되었습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_secret_scanning_push_protection.disabled_for_new_repos` | 엔터프라이즈의 새 리포지토리에 대해 {% data variables.product.prodname_secret_scanning %}에 대한 푸시 보호가 사용하지 않도록 설정되었습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_secret_scanning_push_protection.enabled_for_new_repos` | 엔터프라이즈의 새 리포지토리에 대해 {% data variables.product.prodname_secret_scanning %}에 대한 푸시 보호가 사용하도록 설정되었습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.

{% endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning_push_protection_custom_message` 범주 작업

| 작업 | 설명
|--------|-------------
| `business_secret_scanning_push_protection_custom_message.disable` | 푸시로 보호된 리포지토리에 대한 푸시 시도에 의해 트리거된 사용자 지정 메시지가 엔터프라이즈에 대해 사용하지 않도록 설정되었습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_secret_scanning_push_protection_custom_message.enable` | 푸시로 보호된 리포지토리에 대한 푸시 시도에 의해 트리거된 사용자 지정 메시지가 엔터프라이즈에 대해 사용하도록 설정되었습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.
| `business_secret_scanning_push_protection_custom_message.update` | 푸시로 보호된 리포지토리에 대한 푸시 시도에 의해 트리거된 사용자 지정 메시지가 엔터프라이즈에 대해 업데이트되었습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% data variables.product.prodname_GH_advanced_security %} 기능 관리](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)"를 참조하세요.

{% endif %}

## `checks` 범주 작업

| 작업 | 설명
|--------|-------------
| `checks.auto_trigger_disabled` | 조직 또는 엔터프라이즈의 리포지토리에서 검사 도구 모음의 자동 만들기를 사용하지 않도록 설정했습니다. 자세한 내용은 “[검사 도구 모음에 대한 리포지토리 기본 설정 업데이트](/rest/reference/checks#update-repository-preferences-for-check-suites)”를 참조하세요.
| `checks.auto_trigger_enabled` | 조직 또는 엔터프라이즈의 리포지토리에서 검사 도구 모음의 자동 만들기를 사용하도록 설정했습니다. 자세한 내용은 “[검사 도구 모음에 대한 리포지토리 기본 설정 업데이트](/rest/reference/checks#update-repository-preferences-for-check-suites)”를 참조하세요.
{%- ifversion fpt or ghec %} | `checks.delete_logs` | 검사 도구 모음의 로그가 삭제되었습니다.
{%- endif %}

{%- ifversion fpt or ghec %}
## `codespaces` 범주 작업

| 작업 | 설명
|--------|-------------
| `codespaces.connect` | codespace가 시작되었습니다.
| `codespaces.create` | 사용자가 [codespace를 만들었습니다](/github/developing-online-with-codespaces/creating-a-codespace).
| `codespaces.destroy` | 사용자가 [codespace를 삭제했습니다](/github/developing-online-with-codespaces/deleting-a-codespace).
| `codespaces.allow_permissions` | `devcontainer.json` 파일의 사용자 지정 권한을 사용하는 codespace가 시작되었습니다.
| `codespaces.attempted_to_create_from_prebuild` | 사전 빌드에서 codespace를 만들려고 했습니다.
| `codespaces.create_an_org_secret` | 사용자가 조직 수준의 [{% data variables.product.prodname_github_codespaces %}에 대한 비밀](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)을 만들었습니다.
| `codespaces.update_an_org_secret` | 사용자가 조직 수준의 [{% data variables.product.prodname_github_codespaces %}에 대한 비밀](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)을 업데이트했습니다.
| `codespaces.remove_an_org_secret` | 사용자가 조직 수준의 [{% data variables.product.prodname_github_codespaces %}에 대한 비밀](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)을 제거했습니다.
| `codespaces.manage_access_and_security` | [사용자가 codespace에서 액세스할 수 있는 리포지토리](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)를 업데이트했습니다.
{%- endif %}

{%- ifversion fpt or ghec %}
## `commit_comment` 범주 작업

| 작업 | 설명
|--------|-------------
| `commit_comment.destroy` | 커밋 주석이 삭제되었습니다.
| `commit_comment.update` | 커밋 주석이 업데이트되었습니다.
{%- endif %}

{%- ifversion ghes %}
## `config_entry` 범주 작업

| 작업 | 설명
|--------|-------------
| `config_entry.create` | 구성 설정이 만들어졌습니다. 이러한 이벤트는 사이트 관리자 감사 로그에만 표시됩니다. 기록된 이벤트의 형식은 다음과 관련이 있습니다.</br>- 엔터프라이즈 설정 및 정책</br>- 조직 및 리포지토리 권한 및 설정</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, 프로젝트, 코드 보안 설정.
| `config_entry.destroy` | 구성 설정이 삭제되었습니다. 이러한 이벤트는 사이트 관리자 감사 로그에만 표시됩니다. 기록된 이벤트의 형식은 다음과 관련이 있습니다.</br>- 엔터프라이즈 설정 및 정책</br>- 조직 및 리포지토리 권한 및 설정</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, 프로젝트, 코드 보안 설정.
| `config_entry.update` | 구성 설정이 편집되었습니다. 이러한 이벤트는 사이트 관리자 감사 로그에만 표시됩니다. 기록된 이벤트의 형식은 다음과 관련이 있습니다.</br>- 엔터프라이즈 설정 및 정책</br>- 조직 및 리포지토리 권한 및 설정</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, 프로젝트, 코드 보안 설정.
{%- endif %}

## `dependabot_alerts` 범주 작업

| 작업 | 설명
|--------|-------------
| `dependabot_alerts.disable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 기존 {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하지 않도록 설정했습니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `dependabot_alerts.enable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 기존 {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정했습니다.

## `dependabot_alerts_new_repos` 범주 작업

| 작업 | 설명
|--------|-------------
| `dependabot_alerts_new_repos.disable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 새 {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하지 않도록 설정했습니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `dependabot_alerts_new_repos.enable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 새 {% ifversion fpt or ghec %}프라이빗 {% endif %}리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정했습니다.

## `dependabot_repository_access` 범주 작업

| 작업 | 설명
|--------|-------------
| `dependabot_repository_access.repositories_updated` | {% data variables.product.prodname_dependabot %}에서 액세스할 수 있는 리포지토리가 업데이트되었습니다.

{%- ifversion fpt or ghec or ghes %}
## `dependabot_security_updates` 범주 작업

| 작업 | 설명
|--------|-------------
| `dependabot_security_updates.disable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 기존 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}를 사용하지 않도록 설정했습니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `dependabot_security_updates.enable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 기존 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}를 사용하도록 설정했습니다.

## `dependabot_security_updates_new_repos` 범주 작업

| 작업 | 설명
|--------|-------------
| `dependabot_security_updates_new_repos.disable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 새 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}를 사용하지 않도록 설정했습니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `dependabot_security_updates_new_repos.enable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 새 리포지토리에 대해 {% data variables.product.prodname_dependabot_security_updates %}를 사용하도록 설정했습니다.
{%- endif %}

## `dependency_graph` 범주 작업

| 작업 | 설명
|--------|-------------
| `dependency_graph.disable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 기존 리포지토리에 대한 종속성 그래프를 사용하지 않도록 설정했습니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `dependency_graph.enable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 기존 리포지토리에 대한 종속성 그래프를 사용하도록 설정했습니다.

## `dependency_graph_new_repos` 범주 작업

| 작업 | 설명
|--------|-------------
| `dependency_graph_new_repos.disable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 새 리포지토리에 대한 종속성 그래프를 사용하지 않도록 설정했습니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.
| `dependency_graph_new_repos.enable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 모든 새 리포지토리에 대한 종속성 그래프를 사용하도록 설정했습니다.

{%- ifversion fpt or ghec %}
## `discussion` 범주 작업

| 작업 | 설명
|--------|-------------
| `discussion.destroy` | 팀 토론이 삭제되었습니다.

## `discussion_comment` 범주 작업

| 작업 | 설명
|--------|-------------
| `discussion_comment.destroy` | [팀 토론 게시물에 대한 주석이 삭제되었습니다](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_comment.update` | [팀 토론 게시물에 대한 주석이 편집되었습니다](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).

## `discussion_post` 범주 작업

| 작업 | 설명
|--------|-------------
| `discussion_post.destroy` | [팀 토론 게시물이 삭제되었습니다](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).
| `discussion_post.update` | [팀 토론 게시물이 편집되었습니다](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).

## `discussion_post_reply` 범주 작업

| 작업 | 설명
|--------|-------------
| `discussion_post_reply.destroy` | [팀 토론 게시물에 대한 회신이 삭제되었습니다](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_post_reply.update` | [팀 토론 게시물에 대한 회신이 편집되었습니다](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).
{%- endif %}

{%- ifversion ghec or ghes %}
## `dotcom_connection` 범주 작업

| 작업 | 설명
|--------|-------------
| `dotcom_connection.create` | {% data variables.product.prodname_github_connect %}에 대한 {% data variables.product.prodname_dotcom_the_website %} 연결이 만들어졌습니다.
| `dotcom_connection.destroy` | {% data variables.product.prodname_github_connect %}에 대한 {% data variables.product.prodname_dotcom_the_website %} 연결이 삭제되었습니다.
| `dotcom_connection.token_updated` | {% data variables.product.prodname_dotcom_the_website %}에 대한 {% data variables.product.prodname_github_connect %} 연결 토큰이 업데이트되었습니다.
| `dotcom_connection.upload_license_usage` | {% data variables.product.prodname_ghe_server %} 라이선스 사용 현황이 {% data variables.product.prodname_ghe_cloud %}에 수동으로 업로드되었습니다.
| `dotcom_connection.upload_usage_metrics` | {% data variables.product.prodname_ghe_server %} 사용 현황 메트릭이 {% data variables.product.prodname_dotcom_the_website %}에 업로드되었습니다.
{%- endif %}

## `enterprise` 범주 작업

| 작업 | 설명
|--------|-------------
| `enterprise.config.disable_anonymous_git_access`   | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 엔터프라이즈의 리포지토리에 대한 익명 Git 읽기 권한을 사용하지 않도록 설정했습니다. 자세한 내용은 “[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”을 참조하세요.
| `enterprise.config.enable_anonymous_git_access`   | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 엔터프라이즈의 리포지토리에 대한 익명 Git 읽기 권한을 사용하도록 설정했습니다. 자세한 내용은 “[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”을 참조하세요.
| `enterprise.config.lock_anonymous_git_access`   | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}는 리포지토리 관리자가 엔터프라이즈의 리포지토리에 대한 기존 익명 Git 읽기 권한 설정을 변경하지 못하도록 익명 Git 읽기 권한을 잠갔습니다. 자세한 내용은 “[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”을 참조하세요.
| `enterprise.config.unlock_anonymous_git_access` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}는 리포지토리 관리자가 엔터프라이즈의 리포지토리에 대한 기존 익명 Git 읽기 권한 설정을 변경할 수 있도록 익명 Git 읽기 권한의 잠금을 해제했습니다. 자세한 내용은 “[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”을 참조하세요.
| `enterprise.register_self_hosted_runner` | 새 {% data variables.product.prodname_actions %} 자체 호스트 실행기를 등록했습니다. 자세한 내용은 “[리포지토리에 자체 호스트 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)”를 참조하세요.
| `enterprise.remove_self_hosted_runner` | {% data variables.product.prodname_actions %} 자체 호스트 실행기를 제거했습니다. 자세한 내용은 “[리포지토리에서 실행기 제거](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)”를 참조하세요.
| `enterprise.runner_group_created` | {% data variables.product.prodname_actions %} 자체 호스트 실행기 그룹이 만들어졌습니다. 자세한 내용은 “[조직의 자체 호스트 실행기 그룹 만들기](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)”를 참조하세요.
| `enterprise.runner_group_removed` | {% data variables.product.prodname_actions %} 자체 호스트 실행기 그룹이 제거되었습니다. 자세한 내용은 “[자체 호스트 실행기 그룹 제거](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”를 참조하세요.
| `enterprise.runner_group_renamed` | {% data variables.product.prodname_actions %} 자체 호스트 실행기 그룹의 이름이 변경되었습니다. 자세한 내용은 “[자체 호스트 실행기 그룹의 액세스 정책 변경](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”을 참조하세요.
| `enterprise.runner_group_updated` | {% data variables.product.prodname_actions %} 자체 호스트 실행기 그룹의 구성이 변경되었습니다. 자세한 내용은 “[자체 호스트 실행기 그룹의 액세스 정책 변경](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”을 참조하세요.
| `enterprise.runner_group_runner_removed` |  REST API는 그룹에서 {% data variables.product.prodname_actions %} 자체 호스트 실행기를 제거하는 데 사용되었습니다. 자세한 내용은 “[조직의 그룹에서 자체 호스트 실행기 제거](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)”를 참조하세요.
| `enterprise.runner_group_runners_added` | {% data variables.product.prodname_actions %} 자체 호스트 실행기가 그룹에 추가되었습니다. 자세한 내용은 [자체 호스트 실행기를 그룹으로 이동](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)을 참조하세요.
| `enterprise.runner_group_runners_updated`|  {% data variables.product.prodname_actions %} 실행기 그룹의 멤버 목록이 업데이트되었습니다. 자세한 내용은 “[조직의 그룹에서 자체 호스트 실행기 설정](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”을 참조하세요.
{%- ifversion ghec %} | `enterprise.runner_group_visiblity_updated` | {% data variables.product.prodname_actions %} 자체 호스트 실행기 그룹의 표시 여부가 REST API를 통해 업데이트되었습니다. 자세한 내용은 “[조직의 자체 호스트 실행기 그룹 업데이트](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)”를 참조하세요.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `enterprise.self_hosted_runner_online` | {% data variables.product.prodname_actions %} 실행기 애플리케이션이 시작되었습니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스트 실행기 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `enterprise.self_hosted_runner_offline` | {% data variables.product.prodname_actions %} 실행기 애플리케이션이 중지되었습니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스트 실행기 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
{%- endif %} {%- ifversion ghec or ghes %} | `enterprise.self_hosted_runner_updated` | {% data variables.product.prodname_actions %} 실행기 애플리케이션이 업데이트되었습니다. REST API 및 UI를 사용하여 볼 수 있으며 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”를 참조하세요.
{%- endif %}

{%- ifversion ghec %}
## `enterprise_domain` 범주 작업

| 작업 | 설명
|--------|-------------
| `enterprise_domain.approve` | 엔터프라이즈에 대해 엔터프라이즈 도메인이 승인되었습니다. 자세한 내용은 “[엔터프라이즈 계정에 대한 도메인 승인](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#approving-a-domain-for-your-enterprise-account)”을 참조하세요.
| `enterprise_domain.create` | 엔터프라이즈 도메인이 엔터프라이즈에 추가되었습니다. 자세한 내용은 “[엔터프라이즈 계정에 대한 도메인 확인](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)”을 참조하세요.
| `enterprise_domain.destroy` | 엔터프라이즈 도메인이 엔터프라이즈에서 제거되었습니다. 자세한 내용은 “[승인되거나 확인된 도메인 제거](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#removing-an-approved-or-verified-domain)”를 참조하세요.
| `enterprise_domain.verify` | 엔터프라이즈에 대해 엔터프라이즈 도메인이 확인되었습니다. 자세한 내용은 “[엔터프라이즈 계정에 대한 도메인 확인](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)”을 참조하세요.

## `enterprise_installation` 범주 작업

| 작업 | 설명
|--------|-------------
| `enterprise_installation.create` | {% data variables.product.prodname_github_connect %} 엔터프라이즈 연결과 연결된 {% data variables.product.prodname_github_app %}이 만들어졌습니다.
| `enterprise_installation.destroy` | {% data variables.product.prodname_github_connect %} 엔터프라이즈 연결과 연결된 {% data variables.product.prodname_github_app %}이 삭제되었습니다.
| `enterprise_installation.token_updated` | {% data variables.product.prodname_github_connect %} 엔터프라이즈 연결과 연결된 {% data variables.product.prodname_github_app %}에 속한 토큰이 업데이트되었습니다.
{%- endif %}

{%- ifversion fpt or ghec %}
## `environment` 범주 작업

| 작업 | 설명
|--------|-------------
| `environment.add_protection_rule` | API를 통해 {% data variables.product.prodname_actions %} 환경 보호 규칙이 만들어졌습니다. 자세한 내용은 “[환경 보호 규칙](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)”을 참조하세요.
| `environment.create_actions_secret` | API를 통해 {% data variables.product.prodname_actions %} 환경에 대한 비밀이 만들어졌습니다. 자세한 내용은 “[환경 비밀](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)”을 참조하세요.
| `environment.delete` | API를 통해 환경이 삭제되었습니다. 자세한 내용은 “[환경 삭제](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deleting-an-environment)”를 참조하세요.
| `environment.remove_actions_secret` | API를 통해 {% data variables.product.prodname_actions %} 환경에 대한 비밀이 삭제되었습니다. 자세한 내용은 “[환경 비밀](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)”을 참조하세요.
| `environment.remove_protection_rule` | API를 통해 {% data variables.product.prodname_actions %} 환경 보호 규칙이 삭제되었습니다. 자세한 내용은 “[환경 보호 규칙](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)”을 참조하세요.
| `environment.update_actions_secret` | API를 통해 {% data variables.product.prodname_actions %} 환경에 대한 비밀이 업데이트되었습니다. 자세한 내용은 “[환경 비밀](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)”을 참조하세요.
| `environment.update_protection_rule` | API를 통해 {% data variables.product.prodname_actions %} 환경 보호 규칙이 업데이트되었습니다. 자세한 내용은 “[환경 보호 규칙](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)”을 참조하세요.
{%- endif %}

{%- ifversion ghae %}
## `external_group` 범주 작업

| 작업 | 설명
|--------|-------------
| `external_group.delete` | OKTA 그룹이 삭제되었습니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.
| `external_group.link` | OKTA 그룹이 {% data variables.product.prodname_ghe_managed %} 팀에 매핑되었습니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.
| `external_group.provision` | OKTA 그룹이 {% data variables.product.prodname_ghe_managed %}의 팀에 매핑되었습니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.
| `external_group.unlink` | OKTA 그룹이 {% data variables.product.prodname_ghe_managed %} 팀에 매핑 해제되었습니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.
| `external_group.update` | OKTA 그룹의 설정이 업데이트되었습니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.

## `external_identity` 범주 작업
| 작업 | 설명
|--------|-------------
| `external_identity.deprovision` | 사용자가 OKTA 그룹에서 제거된 후 {% data variables.product.prodname_ghe_managed %}에서 프로비전 해제되었습니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.
| `external_identity.provision` | OKTA 사용자가 OKTA 그룹에 추가되었고 이후 {% data variables.product.prodname_ghe_managed %}에서 매핑된 팀에 프로비저닝되었습니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.
| `external_identity.update` | OKTA 사용자의 설정이 업데이트되었습니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.
{%- endif %}

## `gist` 범주 작업

| 작업 | 설명
|--------|-------------
| `gist.create` | gist가 만들어집니다.
| `gist.destroy` | gist가 삭제됩니다.
| `gist.visibility_change` | gist의 표시 여부가 변경되었습니다.

{% ifversion git-events-audit-log %}
## `git` 범주 작업

{% ifversion enable-git-events %} `git` 범주 작업이 표시되기 전에 감사 로그에서 Git 이벤트를 사용하도록 설정해야 합니다. 자세한 내용은 “[엔터프라이즈의 감사 로그 구성](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise#managing-git-events-in-the-audit-log)”을 참조하세요.
{% endif %}

{% data reusables.audit_log.git-events-not-in-search-results %}

| 작업 | 설명
|--------|-------------
| `git.clone` | 리포지토리가 복제되었습니다.
| `git.fetch` | 리포지토리에서 변경 내용을 가져왔습니다.
| `git.push`  | 변경 내용을 리포지토리에 푸시했습니다.
{% endif %}

## `hook` 범주 작업

| 작업 | 설명
|--------|-------------
{%- ifversion ghes or ghae %} | `hook.active_changed`             | 후크의 활성 상태가 업데이트되었습니다.
{%- endif %} | `hook.config_changed`             | 후크의 구성이 변경되었습니다.
| `hook.create`                     | 새 후크가 추가되었습니다.
| `hook.destroy`                    | 후크가 삭제되었습니다.
| `hook.events_changed`             | 후크의 구성된 이벤트가 변경되었습니다.

## `integration` 범주 작업

| 작업 | 설명
|--------|-------------
| `integration.create` | 통합이 만들어졌습니다.
| `integration.destroy` | 통합이 삭제되었습니다.
| `integration.manager_added` | 엔터프라이즈 또는 조직의 멤버가 통합 관리자로 추가되었습니다.
| `integration.manager_removed` | 엔터프라이즈 또는 조직의 멤버가 통합 관리자에서 제거되었습니다.
| `integration.transfer` | 통합 소유권이 다른 사용자 또는 조직으로 이전되었습니다.
| `integration.remove_client_secret` | 통합에 대한 클라이언트 암호가 제거되었습니다.
| `integration.revoke_all_tokens` | 통합에 대한 모든 사용자 토큰을 취소하도록 요청되었습니다.
| `integration.revoke_tokens` | 통합에 대한 토큰이 취소되었습니다.

## `integration_installation` 범주 작업

| 작업 | 설명
|--------|-------------
| `integration_installation.contact_email_changed` | 통합에 대한 연락처 메일이 변경되었습니다.
| `integration_installation.create` | 통합이 설치되었습니다.
| `integration_installation.destroy` | 통합이 제거되었습니다.
| `integration_installation.repositories_added` | 리포지토리가 통합에 추가되었습니다.
| `integration_installation.repositories_removed` | 리포지토리가 통합에서 제거되었습니다.
{%- ifversion fpt or ghec %} | `integration_installation.suspend` | 통합이 일시 중단되었습니다.
| `integration_installation.unsuspend` | 통합 일시 중단이 해제되었습니다.
{%- endif %} | `integration_installation.version_updated` | 통합에 대한 권한이 업데이트되었습니다.

## `integration_installation_request` 범주 작업

| 작업 | 설명
|--------|-------------
| `integration_installation_request.create` | 멤버가 소유자에게 엔터프라이즈 또는 조직에서 사용할 통합 설치를 요청했습니다.
| `integration_installation_request.close` | 엔터프라이즈 또는 조직에서 사용하기 위해 통합을 설치하라는 요청이 소유자에 의해 승인 또는 거부되었거나 요청을 연 멤버에 의해 취소되었습니다.

{%- ifversion ghec or ghae %}
## `ip_allow_list` 범주 작업

| 작업 | 설명
|--------|-------------
| `ip_allow_list.enable`               | IP 허용 목록을 사용하도록 설정했습니다.
| `ip_allow_list.enable_for_installed_apps` | 설치된 {% data variables.product.prodname_github_apps %}에 대해 IP 허용 목록을 사용하도록 설정했습니다.
| `ip_allow_list.disable`              | IP 허용 목록을 사용하지 않도록 설정했습니다.
| `ip_allow_list.disable_for_installed_apps` | 설치된 {% data variables.product.prodname_github_apps %}에 대해 IP 허용 목록을 사용하지 않도록 설정했습니다.

## `ip_allow_list_entry` 범주 작업

| 작업 | 설명
|--------|-------------
| `ip_allow_list_entry.create` | IP 주소가 IP 허용 목록에 추가되었습니다.
| `ip_allow_list_entry.update` | IP 주소 또는 해당 설명이 변경되었습니다.
| `ip_allow_list_entry.destroy` | IP 주소가 IP 허용 목록에서 삭제되었습니다.
{%- endif %}

## `issue` 범주 작업

| 작업 | 설명
|--------|-------------
| `issue.destroy`                      | 문제가 리포지토리에서 삭제되었습니다. 자세한 내용은 [문제 삭제](/issues/tracking-your-work-with-issues/deleting-an-issue)를 참조하세요.
| `issue.pinned`                       | 문제가 리포지토리에 고정되었습니다. 자세한 내용은 “[리포지토리에 문제 고정](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)”을 참조하세요.
| `issue.transfer`                     | 문제가 다른 리포지토리로 전송되었습니다. 자세한 내용은 “[문제를 다른 리포지토리로 전송](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)”을 참조하세요.
| `issue.unpinned`                     | 리포지토리에서 문제가 고정 해제되었습니다. 자세한 내용은 “[리포지토리에 문제 고정](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)”을 참조하세요.

## `issue_comment` 범주 작업

| 작업 | 설명
|--------|-------------
| `issue_comment.destroy`  | 문제에 대한 주석이 리포지토리에서 삭제되었습니다.
| `issue_comment.pinned`   | 문제에 대한 주석이 리포지토리에 고정되었습니다.
| `issue_comment.unpinned` | 문제에 대한 주석이 리포지토리에서 고정 해제되었습니다.
| `issue_comment.update`   | 문제에 대한 주석(초기 문제 제외)이 변경되었습니다.

## `issues` 범주 작업

| 작업 | 설명
|--------|-------------
| `issues.deletes_disabled` | 엔터프라이즈 멤버가 문제를 삭제하는 기능을 사용할 수 없습니다. 멤버는 엔터프라이즈의 모든 조직에서 문제를 삭제할 수 없습니다. 자세한 내용은 “[문제를 삭제하기 위한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)”을 참조하세요.
| `issues.deletes_enabled` | 엔터프라이즈 멤버가 문제를 삭제할 수 있는 기능을 사용하도록 설정했습니다. 멤버는 엔터프라이즈의 모든 조직에서 문제를 삭제할 수 있습니다. 자세한 내용은 “[문제를 삭제하기 위한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)”을 참조하세요.
| `issues.deletes_policy_cleared` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 멤버가 엔터프라이즈에서 문제를 삭제할 수 있도록 허용하는 정책 설정을 지웠습니다. 자세한 내용은 “[문제를 삭제하기 위한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)”을 참조하세요.

{%- ifversion fpt or ghec %}
## `marketplace_agreement_signature` 범주 작업

| 작업 | 설명
|--------|-------------
| `marketplace_agreement_signature.create` | 사용자가 조직을 대신하여 {% data variables.product.prodname_marketplace %} 개발자 계약에 서명했습니다.

## `marketplace_listing` 범주 작업

| 작업 | 설명
|--------|-------------
| `marketplace_listing.approve` | 목록이 {% data variables.product.prodname_marketplace %}에 포함되도록 승인되었습니다.
| `marketplace_listing.change_category` | {% data variables.product.prodname_marketplace %}의 앱 목록 범주가 변경되었습니다.
| `marketplace_listing.create` | {% data variables.product.prodname_marketplace %}에 앱 목록이 만들어졌습니다.
| `marketplace_listing.delist` | 목록이 {% data variables.product.prodname_marketplace %}에서 제거되었습니다.
| `marketplace_listing.redraft` | 목록이 초안 상태로 다시 전송되었습니다.
| `marketplace_listing.reject` | 목록이 {% data variables.product.prodname_marketplace %}에 포함되도록 승인되지 않았습니다.
{%- endif %}

## `members_can_create_pages` 범주 작업

| 작업 | 설명
|--------|-------------
| `members_can_create_pages.disable` | 멤버가 {% data variables.product.prodname_pages %}를 게시하는 기능을 사용하지 않도록 설정되었습니다. 멤버는 조직에서 {% data variables.product.prodname_pages %}를 게시할 수 없습니다. 자세한 내용은 “[조직의 GitHub Pages 사이트 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”를 참조하세요.
| `members_can_create_pages.enable` | 멤버가 {% data variables.product.prodname_pages %}를 게시하는 기능을 사용하도록 설정되었습니다. 멤버는 조직에서 {% data variables.product.prodname_pages %}를 게시할 수 있습니다. 자세한 내용은 “[조직의 GitHub Pages 사이트 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”를 참조하세요.

## `members_can_create_private_pages` 범주 작업

| 작업 | 설명
|--------|-------------
| `members_can_create_private_pages.disable` | 멤버가 프라이빗 {% data variables.product.prodname_pages %}를 게시하는 기능을 사용하지 않도록 설정되었습니다. 멤버는 조직에서 프라이빗 {% data variables.product.prodname_pages %}를 게시할 수 없습니다. 자세한 내용은 “[조직의 GitHub Pages 사이트 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”를 참조하세요.
| `members_can_create_private_pages.enable` |  멤버가 프라이빗 {% data variables.product.prodname_pages %}를 게시하는 기능을 사용하도록 설정되었습니다. 멤버는 조직에서 프라이빗 {% data variables.product.prodname_pages %}를 게시할 수 있습니다. 자세한 내용은 “[조직의 GitHub Pages 사이트 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”를 참조하세요.

## `members_can_create_public_pages` 범주 작업

| 작업 | 설명
|--------|-------------
| `members_can_create_public_pages.disable` |  멤버가 퍼블릭 {% data variables.product.prodname_pages %}를 게시하는 기능을 사용하지 않도록 설정되었습니다. 멤버는 조직에서 퍼블릭 {% data variables.product.prodname_pages %}를 게시할 수 없습니다. 자세한 내용은 “[조직의 GitHub Pages 사이트 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”를 참조하세요.
| `members_can_create_public_pages.enable` |  멤버가 퍼블릭 {% data variables.product.prodname_pages %}를 게시하는 기능을 사용하도록 설정되었습니다. 멤버는 조직에서 퍼블릭 {% data variables.product.prodname_pages %}를 게시할 수 있습니다. 자세한 내용은 “[조직의 GitHub Pages 사이트 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”를 참조하세요.

{%- ifversion ghec or ghes or ghae %}
## `members_can_delete_repos` 범주 작업

| 작업 | 설명
|--------|-------------
| `members_can_delete_repos.clear` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 엔터프라이즈의 모든 조직에서 리포지토리를 삭제하거나 전송하기 위한 정책 설정을 지웠습니다. 자세한 내용은 “[리포지토리 삭제 및 전송에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)”을 참조하세요.
| `members_can_delete_repos.disable` | 엔터프라이즈 멤버가 문제를 삭제하는 기능을 사용하지 않도록 설정했습니다. 멤버는 엔터프라이즈의 모든 조직에서 리포지토리를 삭제하거나 전송할 수 없습니다. 자세한 내용은 “[리포지토리 삭제 및 전송에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)”을 참조하세요.
| `members_can_delete_repos.enable` |  엔터프라이즈 멤버가 문제를 삭제하는 기능을 사용하도록 설정했습니다. 멤버는 엔터프라이즈의 모든 조직에서 리포지토리를 삭제하거나 전송할 수 있습니다. 자세한 내용은 “[리포지토리 삭제 및 전송에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)”을 참조하세요.

## `members_can_view_dependency_insights` 범주 작업

| 작업 | 설명
|--------|-------------
| `members_can_view_dependency_insights.clear` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 엔터프라이즈의 모든 조직에서 종속성 인사이트를 보기 위한 정책 설정을 지웠습니다.{% ifversion ghec %} 자세한 내용은 “[종속성 인사이트 표시 여부에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)”을 참조하세요.{% endif %}
| `members_can_view_dependency_insights.disable` | 엔터프라이즈 멤버가 종속성 인사이트를 볼 수 있는 기능을 사용하지 않도록 설정되었습니다. 멤버는 엔터프라이즈의 모든 조직에서 종속성 인사이트를 볼 수 없습니다.{% ifversion ghec %} 자세한 내용은 “[종속성 인사이트 표시 여부에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)”을 참조하세요.{% endif %}
| `members_can_view_dependency_insights.enable` |  엔터프라이즈 멤버가 종속성 인사이트를 볼 수 있는 기능을 사용하도록 설정되었습니다. 멤버는 엔터프라이즈의 모든 조직에서 종속성 인사이트를 볼 수 있습니다.{% ifversion ghec %} 자세한 내용은 “[종속성 인사이트 표시 여부에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)”을 참조하세요.{% endif %}

## `migration` 범주 작업

| 작업 | 설명
|--------|-------------
| `migration.create` | *원본* 위치(예: {% data variables.product.prodname_dotcom_the_website %} 조직 또는 {% data variables.product.prodname_ghe_server %} 인스턴스)에서 *대상* {% data variables.product.prodname_ghe_server %} 인스턴스로 데이터를 전송하기 위한 마이그레이션 파일이 만들어졌습니다.
| `migration.destroy_file` | *원본* 위치(예: {% data variables.product.prodname_dotcom_the_website %} 조직 또는 {% data variables.product.prodname_ghe_server %} 인스턴스)에서 *대상* {% data variables.product.prodname_ghe_server %} 인스턴스로 데이터를 전송하기 위한 마이그레이션 파일이 삭제되었습니다.
|  `migration.download` | *원본* 위치(예: {% data variables.product.prodname_dotcom_the_website %} 조직 또는 {% data variables.product.prodname_ghe_server %} 인스턴스)에서 *대상* {% data variables.product.prodname_ghe_server %} 인스턴스로 데이터를 전송하기 위한 마이그레이션 파일이 다운로드되었습니다.
{%- endif %}

## `oauth_access` 범주 작업

| 작업 | 설명
|--------|-------------
`oauth_access.create`   | 사용자 계정에 대해 [OAuth 액세스 토큰][]이 생성되었습니다. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
`oauth_access.destroy`  | 사용자 계정에서 [OAuth 액세스 토큰][]이 삭제되었습니다.

  [OAuth 액세스 토큰]: /developers/apps/building-oauth-apps/authorizing-oauth-apps

## `oauth_application` 범주 작업

| 작업 | 설명
|--------|-------------
| `oauth_application.create`           | 사용자 또는 조직 계정에 대해 [OAuth 애플리케이션][]을 만들었습니다.
| `oauth_application.destroy`          | 사용자 또는 조직 계정에서 [OAuth 애플리케이션][]이 삭제되었습니다.
{%- ifversion fpt or ghec %} | `oauth_application.generate_client_secret`   | [OAuth 애플리케이션][]의 비밀 키가 생성되었습니다.
| `oauth_application.remove_client_secret` | [OAuth 애플리케이션][]의 비밀 키가 삭제되었습니다.
{%- endif %} | `oauth_application.reset_secret` | [OAuth 애플리케이션][]의 비밀 키가 초기화되었습니다.
{%- ifversion fpt or ghec %} | `oauth_application.revoke_all_tokens` | [OAuth 애플리케이션][]에 대한 모든 사용자 토큰을 취소하도록 요청되었습니다.
{%- endif %} | `oauth_application.revoke_tokens` | [OAuth 애플리케이션][]에 대한 토큰이 취소되었습니다.
| `oauth_application.transfer` | [OAuth 애플리케이션][]이 한 사용자 또는 조직 계정에서 다른 계정으로 이전되었습니다.
{%- ifversion ghes or ghae %} | `oauth_application.unsuspend` | [OAuth 애플리케이션][]은 사용자 또는 조직 계정에 대해 일시 중단이 해제되었습니다.
{%- endif %}

  [OAuth 애플리케이션]: /guides/basics-of-authentication/#registering-your-app

{%- ifversion fpt or ghec %}
## `oauth_authorization` 범주 작업

| 작업 | 설명
|--------|-------------
| `oauth_authorization.create`          | OAuth 애플리케이션에 대한 권한 부여가 생성되었습니다. 자세한 내용은 “[OAuth 앱 권한 부여](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)”를 참조하세요.
| `oauth_authorization.destroy`          | OAuth 애플리케이션에 대한 권한 부여가 삭제되었습니다. 자세한 내용은 “[OAuth 앱 권한 부여](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)”를 참조하세요.
| `oauth_authorization.update`          | OAuth 애플리케이션에 대한 권한 부여가 업데이트되었습니다. 자세한 내용은 “[OAuth 앱 권한 부여](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)”를 참조하세요.
{%- endif %}

## `org` 범주 작업

| 작업 | 설명
|--------|-------------
| `org.accept_business_invitation` | 엔터프라이즈에 가입하기 위해 조직에 보낸 초대가 수락되었습니다. {% ifversion ghec %} 자세한 내용은 “[엔터프라이즈 계정에 가입하도록 조직 초대](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)”를 참조하세요.{% endif %}
| `org.add_billing_manager` | 청구 관리자가 조직에 추가되었습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[조직에 청구 관리자 추가](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)”를 참조하세요.{% endif %}
| `org.add_member` | 사용자가 조직에 가입했습니다.
| `org.advanced_security_disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %}은 조직의 새 리포지토리에 대해 사용하지 않도록 설정되었습니다.
| `org.advanced_security_disabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %}은 조직의 모든 리포지토리에 대해 사용하지 않도록 설정되었습니다.
| `org.advanced_security_enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %}은 조직의 새 리포지토리에 대해 사용하도록 설정되었습니다.
| `org.advanced_security_enabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %}은 조직의 모든 리포지토리에 대해 사용하도록 설정되었습니다.
| `org.advanced_security_policy_selected_member_disabled` | 엔터프라이즈 소유자는 조직이 소유한 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 기능을 사용하지 못하도록 했습니다. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_selected_member_enabled` | 엔터프라이즈 소유자는 조직이 소유한 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 기능을 사용하도록 했습니다. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_update` | 조직 소유자가 기업 내 {% data variables.product.prodname_GH_advanced_security %} 관련 정책을 업데이트했습니다. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.async_delete` | 사용자가 조직을 지우기 위해 백그라운드 작업을 시작했습니다.
{%- ifversion ghec %} | `org.audit_log_export` | 조직 소유자가 조직 감사 로그의 내보내기를 만들었습니다. 내보내기가 쿼리를 포함하는 경우 로그는 사용된 쿼리 및 해당 쿼리와 일치하는 감사 로그 항목 수를 나열합니다. 자세한 내용은 “[엔터프라이즈에 대한 감사 로그 작업 내보내기](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)”를 참조하세요.
{%- endif %} | `org.block_user` | 조직 소유자가 사용자가 조직의 리포지토리에 액세스하지 못하도록 차단했습니다. {% ifversion fpt or ghec %}자세한 내용은 “[조직에서 사용자 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”을 참조하세요.{% endif %} | `org.cancel_business_invitation` | 조직에서 엔터프라이즈에 가입하라는 초대가 취소되었습니다. {% ifversion ghec %}자세한 내용은 “[엔터프라이즈 계정에 가입하도록 조직 초대](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)”를 참조하세요.{% endif %} | `org.cancel_invitation` | 조직에 가입하기 위해 사용자에게 보낸 초대가 취소되었습니다.
| `org.clear_actions_settings` | 조직 소유자가 조직에 대한 {% data variables.product.prodname_actions %} 정책 설정을 지웠습니다. 자세한 내용은 “[조직에 대한 GitHub Actions 권한 관리](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)”를 참조하세요.
| `org.clear_default_repository_permission` | 조직 소유자가 조직에 대한 베이스 리포지토리 권한 정책 설정을 지웠습니다. 자세한 내용은 “[베이스 권한 설정](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)”을 참조하세요.
| `org.clear_member_team_creation_permission` | 조직 소유자가 조직에 대한 새 팀 만들기 설정을 지웠습니다. 자세한 내용은 “[조직에서 팀 만들기 권한 설정](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)”을 참조하세요.
| `org.clear_reader_discussion_creation_permission` | 조직 소유자가 조직의 새 토론 만들기 설정을 지웠습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[읽기 권한이 있는 사용자가 토론을 만들 수 있도록 허용 또는 허용 안 함](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)”을 참조하세요.{% endif %} | `org.clear_members_can_create_repos`                 | 조직 소유자가 조직에서 리포지토리 만들기에 대한 제한을 지웠습니다. 자세한 내용은 “[조직의 리포지토리 만들기 제한](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)”을 참조하세요.
| `org.clear_members_can_invite_outside_collaborators` | 조직 소유자가 조직에 대한 외부 협력자 초대 정책을 지웠습니다. 자세한 내용은 “[외부 협력자를 추가하기 위한 권한 설정](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)”을 참조하세요.
| `org.clear_new_repository_default_branch_setting` | 조직 소유자가 조직의 새 리포지토리 설정에 대한 기본 분기 이름을 지웠습니다. 자세한 내용은 “[기본 분기 이름 설정](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization#setting-the-default-branch-name)”을 참조하세요.
{%- ifversion fpt or ghec %} | `org.codespaces_trusted_repo_access_granted` | {% data variables.product.prodname_github_codespaces %}에 조직의 모든 다른 리포지토리에 대한 신뢰할 수 있는 리포지토리 액세스 권한이 부여되었습니다. 자세한 내용은 “[조직의 codespace에 대한 리포지토리 액세스 관리](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)”를 참조하세요.
| `org.codespaces_trusted_repo_access_revoked` | {% data variables.product.prodname_github_codespaces %}에 조직의 모든 다른 리포지토리에 대한 신뢰할 수 있는 리포지토리 액세스 권한이 취소되었습니다. 자세한 내용은 “[조직의 codespace에 대한 리포지토리 액세스 관리](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)”를 참조하세요.
{%- endif %} | | `org.config.disable_collaborators_only` | 조직에 대해서만 협력자의 상호 작용 제한을 사용하지 않도록 설정했습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[조직에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”을 참조하세요. {% endif %} | `org.config.disable_contributors_only` | 조직에 대해서만 이전 기여자의 상호 작용 제한을 사용하지 않도록 설정했습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[조직에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”을 참조하세요.{% endif %} | `org.config.disable_sockpuppet_disallowed` | 조직에 대해서만 기존 사용자의 상호 작용 제한을 사용하지 않도록 설정했습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[조직에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”을 참조하세요.{% endif %} | `org.config.enable_collaborators_only` | 조직에 대해서만 협력자의 상호 작용 제한을 사용하도록 설정했습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[조직에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”을 참조하세요.{% endif %} | `org.config.enable_contributors_only` | 조직에 대해서만 이전 기여자의 상호 작용 제한을 사용하도록 설정했습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[조직에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”을 참조하세요.{% endif %} | `org.config.enable_sockpuppet_disallowed` | 조직에 대해서만 기존 사용자의 상호 작용 제한을 사용하도록 설정했습니다. {% ifversion fpt or ghec %}자세한 내용은 “[조직에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”을 참조하세요.{% endif %} | `org.confirm_business_invitation` | 조직에서 엔터프라이즈에 가입하라는 초대가 취소되었습니다. {% ifversion ghec %} 자세한 내용은 “[엔터프라이즈 계정에 가입하도록 조직 초대](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)”를 참조하세요.{% endif %} | `org.create` | 조직이 만들어졌습니다. 자세한 내용은 “[처음부터 새 조직 만들기](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”를 참조하세요.
{%- ifversion fpt or ghec or ghes %} | `org.create_actions_secret` | 조직에 대해 {% data variables.product.prodname_actions %} 비밀이 만들어졌습니다. 자세한 정보는 “[조직의 암호화된 비밀 만들기](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)”를 참조하세요.
{%- endif %} | `org.create_integration_secret` | {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} 또는 {% data variables.product.prodname_github_codespaces %}{% endif %} 통합 비밀이 조직에 대해 만들어졌습니다.
| `org.delete` | 사용자가 시작한 백그라운드 작업에 의해 조직이 삭제되었습니다.
| `org.disable_member_team_creation_permission` | 조직 소유자는 소유자만 팀을 만들 수 있도록 제한했습니다. 자세한 내용은 “[조직에서 팀 만들기 권한 설정](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)”을 참조하세요.
| `org.disable_reader_discussion_creation_permission` | 조직 소유자는 토론 만들기를 조직에서 최소 심사 권한이 있는 사용자로 제한했습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[읽기 권한이 있는 사용자가 토론을 만들 수 있도록 허용 또는 허용 안 함](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)”을 참조하세요. {% endif %} {%- ifversion fpt or ghec %} | `org.disable_oauth_app_restrictions` | 조직에 대한 타사 애플리케이션 액세스 제한을 사용하지 않도록 설정했습니다. 자세한 내용은 “[조직에 대한 OAuth 앱 액세스 제한 사용 안 함](/organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization)”을 참조하세요.
{%- endif %} {%- ifversion ghec %} | `org.disable_saml` | 조직 소유자가 조직에 대해 SAML Single Sign-On을 사용하지 않도록 설정했습니다.
{%- endif %} {%- ifversion not ghae %} | `org.disable_two_factor_requirement` | 조직 소유자는 모든 멤버{% ifversion fpt or ghec %}, 청구 관리자,{% endif %} 조직의 외부 협력자에 대해 2단계 인증 요구 사항을 사용하지 않도록 설정했습니다.
{%- endif %} | `org.display_commenter_full_name_disabled` | 조직 소유자가 조직에서 주석 작성자의 전체 이름을 표시하지 않도록 설정했습니다. 멤버는 주석 작성자의 전체 이름을 볼 수 없습니다.
| `org.display_commenter_full_name_enabled` | 조직 소유자가 조직에서 주석 작성자의 전체 이름을 표시하도록 설정했습니다. 멤버는 주석 작성자의 전체 이름을 볼 수 있습니다.
| `org.enable_member_team_creation_permission` | 조직 소유자는 멤버가 팀을 만들도록 허용했습니다. 자세한 내용은 “[조직에서 팀 만들기 권한 설정](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)”을 참조하세요.
| `org.enable_reader_discussion_creation_permission` | 조직 소유자는 읽기 권한이 있는 사용자가 조직에서 토론을 만들 수 있도록 허용했습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[읽기 권한이 있는 사용자가 토론을 만들 수 있도록 허용 또는 허용 안 함](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)”을 참조하세요. {% endif %} {%- ifversion fpt or ghec %} | `org.enable_oauth_app_restrictions` | 조직에 대한 타사 애플리케이션 액세스 제한을 사용하도록 설정했습니다. 자세한 내용은 “[조직에 대한 OAuth 앱 액세스 제한 사용](/organizations/restricting-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization)”을 참조하세요.
{%- endif %} {%- ifversion ghec %} | `org.enable_saml` | 조직 소유자가 조직에 대해 [SAML Single Sign-On을 사용하도록 설정](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)했습니다.
{%- endif %} {%- ifversion not ghae %} | `org.enable_two_factor_requirement` | 조직 소유자는 모든 멤버{% ifversion fpt or ghec %}, 청구 관리자,{% endif %} 조직의 외부 협력자에 대해 2단계 인증을 요구합니다.
{%- endif %} | `org.integration_manager_added` | 조직 소유자가 멤버에게 조직 소유의 모든 GitHub 앱을 관리할 수 있는 액세스 권한을 부여했습니다.
| `org.integration_manager_removed` | 조직 소유자가 조직 멤버로부터 조직이 소유한 모든 GitHub 앱을 관리하기 위한 액세스를 제거했습니다.
| `org.invite_member` | 새 사용자가 조직에 가입하도록 초대되었습니다. {% ifversion fpt or ghec %}자세한 내용은 “[조직에 가입하도록 사용자 초대](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)”를 참조하세요.{% endif %} | `org.invite_to_business` | 조직이 엔터프라이즈에 가입하도록 초대되었습니다.
| `org.members_can_update_protected_branches.clear` | 조직 소유자는 조직 멤버가 조직 리포지토리에서 보호된 분기를 업데이트할 수 있는지 여부에 대한 정책을 설정 취소합니다. 조직 관리자는 보호된 분기 설정 업데이트 허용 여부를 선택할 수 있습니다.
| `org.members_can_update_protected_branches.disable` | 엔터프라이즈 멤버가 보호된 분기를 업데이트하는 기능을 사용하지 않도록 설정했습니다. 엔터프라이즈 소유자만 보호된 분기를 업데이트할 수 있습니다.
| `org.members_can_update_protected_branches.enable` | 엔터프라이즈 멤버가 보호된 분기를 업데이트하는 기능을 사용하도록 설정했습니다. 조직 멤버는 보호된 분기를 업데이트할 수 있습니다.
{%- ifversion fpt or ghec %} | `org.oauth_app_access_approved` | 소유자가 [조직에 {% data variables.product.prodname_oauth_app %}에 대한 액세스 권한을 부여했습니다](/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization).
| `org.oauth_app_access_denied` | 소유자가 조직에 대한 [이전에 승인된 {% data variables.product.prodname_oauth_app %}의 액세스를 사용하지 않도록 설정](/organizations/restricting-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization)했습니다.
| `org.oauth_app_access_requested` | 조직 멤버가 소유자에게 조직에 대한 {% data variables.product.prodname_oauth_app %} 액세스 권한을 부여하도록 요청했습니다.
{%- endif %} | `org.recreate` | 조직이 복원되었습니다.
| `org.register_self_hosted_runner` | 새 자체 호스트 실행기가 등록되었습니다. 자세한 내용은 “[조직에 자체 호스트 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)”를 참조하세요.
| `org.remove_actions_secret` | {% data variables.product.prodname_actions %} 비밀이 제거될 때 트리거됩니다.
| `org.remove_integration_secret` | {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} 또는 {% data variables.product.prodname_github_codespaces %}{% endif %} 통합 비밀이 조직에서 제거되었습니다.
| `org.remove_billing_manager`소유자가 조직에서 청구 관리자를 제거했습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[조직에서 청구 관리자 제거](/organizations/managing-peoples-access-to-your-organization-with-roles/removing-a-billing-manager-from-your-organization)”{% endif %}{% ifversion not ghae %} 또는 [조직에서 2단계 인증이 필요하고](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) 청구 관리자가 2FA를 사용하지 않거나 2FA를 사용하지 않도록 설정한 경우를 참조하세요.{% endif %} | `org.remove_member` | [소유자가 조직에서 멤버를 제거했거나](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization){% ifversion not ghae %} [조직에서 2단계 인증이 필요하고](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) 조직 멤버가 2FA를 사용하지 않거나 2FA{% endif %}를 사용하지 않도록 설정한 경우입니다. 또한 [조직 멤버가 조직에서 자신을 제거했습니다](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization).
| `org.remove_outside_collaborator` | 소유자가 조직에서 외부 협력자를 제거했거나{% ifversion not ghae %} 또는 [조직에서 2단계 인증이 필요하고](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) 외부 협력자가 2FA를 사용하지 않거나 2FA를 사용하지 않도록 설정한 경우입니다{% endif %}.
| `org.remove_self_hosted_runner` | 자체 호스트 실행기가 제거되었습니다. 자세한 내용은 “[조직에서 실행기 제거](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)”를 참조하세요.
| `org.rename` | 조직의 이름이 변경되었습니다.
| `org.restore_member` | 조직 멤버가 복원되었습니다. 자세한 내용은 “[조직의 이전 멤버 복원](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)”을 참조하세요.
{%- ifversion ghec %} | `org.revoke_external_identity` | 조직 소유자가 멤버의 연결된 ID를 취소했습니다. 자세한 내용은 “[조직에 대한 멤버의 SAML 액세스 보기 및 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”를 참조하세요.
| `org.revoke_sso_session` | 조직 소유자가 멤버의 SAML 세션을 취소했습니다. 자세한 내용은 “[조직에 대한 멤버의 SAML 액세스 보기 및 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”를 참조하세요.
{%- endif %} | `org.runner_group_created` | 자체 호스트 실행기 그룹이 만들어졌습니다. 자세한 내용은 “[조직의 자체 호스트 실행기 그룹 만들기](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)”를 참조하세요.
| `org.runner_group_removed` | 자체 호스트 실행기 그룹이 제거되었습니다. 자세한 내용은 “[자체 호스트 실행기 그룹 제거](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”를 참조하세요.
{%- ifversion fpt or ghec %} | `org.runner_group_renamed` | 자체 호스트 실행기 그룹의 이름이 변경되었습니다. 자세한 내용은 “[자체 호스트 실행기 그룹의 액세스 정책 변경](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”을 참조하세요.
{%- endif %} | `org.runner_group_updated` | 자체 호스트 실행기 그룹의 구성이 변경되었습니다. 자세한 내용은 “[자체 호스트 실행기 그룹의 액세스 정책 변경](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”을 참조하세요.
| `org.runner_group_runner_removed` | REST API는 그룹에서 자체 호스트 실행기를 제거하는 데 사용되었습니다. 자세한 내용은 “[조직의 그룹에서 자체 호스트 실행기 제거](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)”를 참조하세요.
| `org.runner_group_runners_added` | 자체 호스트 실행기가 그룹에 추가되었습니다. 자세한 내용은 [자체 호스트 실행기를 그룹으로 이동](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)을 참조하세요.
| `org.runner_group_runners_updated`| 실행기 그룹의 멤버 목록이 업데이트되었습니다. 자세한 내용은 “[조직의 그룹에서 자체 호스트 실행기 설정](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”을 참조하세요.
{%- ifversion fpt or ghec %} | `org.runner_group_visiblity_updated` | REST API를 통해 자체 호스트 실행기 그룹의 표시 여부가 업데이트되었습니다. 자세한 내용은 “[조직의 자체 호스트 실행기 그룹 업데이트](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)”를 참조하세요.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `org.secret_scanning_push_protection_custom_message_disabled` | 푸시로 보호된 리포지토리에 푸시를 시도하여 트리거된 사용자 지정 메시지가 조직에 대해 사용하지 않도록 설정되었습니다. 자세한 내용은 "[{% data variables.product.prodname_secret_scanning %}을 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)"를 참조하세요.
| `org.secret_scanning_push_protection_custom_message_enabled` | 푸시로 보호된 리포지토리에 대한 푸시 시도에 의해 트리거된 사용자 지정 메시지가 조직에 대해 사용하도록 설정되었습니다. 자세한 내용은 "[{% data variables.product.prodname_secret_scanning %}을 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)"를 참조하세요.
| `org.secret_scanning_push_protection_custom_message_updated` | 푸시로 보호된 리포지토리에 푸시를 시도하여 트리거된 사용자 지정 메시지가 조직에 대해 업데이트되었습니다. 자세한 내용은 "[{% data variables.product.prodname_secret_scanning %}을 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)"를 참조하세요.
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org.secret_scanning_push_protection_disable` | 조직 소유자 또는 관리자가 비밀 검사에 대한 푸시 보호를 사용하지 않도록 설정했습니다. 자세한 내용은 “[비밀 검사를 사용하여 푸시 보호](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”를 참조하세요.
| `org.secret_scanning_push_protection_enable` | 조직 소유자 또는 관리자가 비밀 검사에 대한 푸시 보호를 사용하도록 설정했습니다.
{%- endif %} | `org.self_hosted_runner_online` | 실행기 애플리케이션이 시작되었습니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스트 실행기 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `org.self_hosted_runner_offline` | 실행기 애플리케이션이 중지되었습니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스팅 실행기의 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
{%- ifversion fpt or ghec or ghes %} | `org.self_hosted_runner_updated` | 실행기 애플리케이션이 업데이트되었습니다. REST API 및 UI를 사용하여 볼 수 있으며 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”를 참조하세요.
{%- endif %} {%- ifversion fpt or ghec %} | `org.set_actions_fork_pr_approvals_policy` | 조직에서 퍼블릭 포크의 워크플로에 대한 승인을 요구하는 설정이 변경되었습니다. 자세한 내용은 “[퍼블릭 포크의 워크플로에 대한 승인 요청](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)”을 참조하세요.
{%- endif %} | `org.set_actions_retention_limit` | 조직의 {% data variables.product.prodname_actions %} 아티팩트 및 로그에 대한 보존 기간이 변경되었습니다. 자세한 내용은 “[조직의 {% data variables.product.prodname_actions %} 아티팩트 및 로그에 대한 보존 기간 구성](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)”을 참조하세요.
{%- ifversion fpt or ghec or ghes %} | `org.set_fork_pr_workflows_policy` | 프라이빗 리포지토리 포크의 워크플로에 대한 정책이 변경되었습니다. 자세한 내용은 “[프라이빗 리포지토리 포크에 워크플로 사용](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)”을 참조하세요.
{%- endif %} {%- ifversion ghes or audit-log-sso-response-events %} | `org.sso_response` | 멤버가 조직으로 인증을 시도할 때 SAML Single Sign-On 응답이 생성되었습니다. 이 이벤트는 감사 로그 스트리밍 및 REST API를 통해서만 사용할 수 있습니다.
{%- endif %} {%- ifversion ghec %} | `org.transfer` | 엔터프라이즈 계정 간에 조직이 이전되었습니다. 자세한 내용은 “[엔터프라이즈에 조직 추가](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts)”를 참조하세요.
{%- endif %} {%- ifversion not ghae %} | `org.transform` | 사용자 계정이 조직으로 변환되었습니다. 자세한 내용은 “[사용자를 조직으로 변환](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)”을 참조하세요.
{%- endif %} | `org.unblock_user` | 조직 소유자가 조직에서 사용자 차단을 해제했습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[조직에서 사용자 차단 해제](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)”를 참조하세요. {% endif %} {%- ifversion fpt or ghec or ghes %} | `org.update_actions_secret` | {% data variables.product.prodname_actions %} 비밀이 업데이트되었습니다.
{%- endif %} | `org.update_integration_secret` | {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} 또는 {% data variables.product.prodname_github_codespaces %}{% endif %} 통합 비밀이 조직에 대해 업데이트되었습니다.
| `org.update_default_repository_permission` | 조직 소유자가 조직 멤버의 기본 리포지토리 권한 수준을 변경했습니다.
| `org.update_member` | 조직 소유자가 소유자에서 멤버 또는 멤버에서 소유자로 사용자의 역할을 변경했습니다.
| `org.update_member_repository_creation_permission` | 조직 소유자가 조직 멤버의 만들기 리포지토리 권한을 변경했습니다.
| `org.update_member_repository_invitation_permission` | 조직 소유자가 외부 협력자를 리포지토리에 초대하는 조직 멤버에 대한 정책 설정을 변경했습니다. 자세한 내용은 “[외부 협력자를 추가하기 위한 권한 설정](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)”을 참조하세요.
| `org.update_new_repository_default_branch_setting` | 조직 소유자가 조직의 새 리포지토리에 대한 기본 분기의 이름을 변경했습니다. 자세한 내용은 “[조직의 리포지토리에 대한 기본 분기 이름 관리](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)”를 참조하세요.
{%- ifversion ghec or ghae %} | `org.update_saml_provider_settings` | 조직의 SAML 공급자 설정이 업데이트되었습니다.
| `org.update_terms_of_service` | 표준 서비스 약관과 회사 서비스 약관 간에 조직이 변경되었습니다. {% ifversion ghec %}자세한 내용은 “[회사 서비스 약관으로 업그레이드](/organizations/managing-organization-settings/upgrading-to-the-corporate-terms-of-service)”를 참조하세요.{% endif %} {%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `org_credential_authorization` 범주 작업

| 작업 | 설명
|--------|-------------
| `org_credential_authorization.deauthorized` | SAML Single Sign-On과 함께 사용하기 위해 멤버가 자격 증명을 해제했습니다. {% ifversion ghec or ghae %}자세한 내용은 “[SAML Single Sign-On 인증](/authentication/authenticating-with-saml-single-sign-on)”을 참조하세요.{% endif %}
| `org_credential_authorization.grant` | SAML Single Sign-On과 함께 사용하기 위해 멤버가 자격 증명을 부여했습니다. {% ifversion ghec or ghae %}자세한 내용은 “[SAML Single Sign-On 인증](/authentication/authenticating-with-saml-single-sign-on)”을 참조하세요.{% endif %}
| `org_credential_authorization.revoke` | 소유자가 권한 있는 자격 증명을 취소했습니다. {% ifversion ghec %}자세한 내용은 “[활성 SAML 세션 보기 및 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)”를 참조하세요.{% endif %}
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## `org_secret_scanning_custom_pattern` 범주 작업

| 작업 | 설명
|--------|---------------
| `org_secret_scanning_custom_pattern.create` | 조직에서 비밀 검사를 위해 사용자 지정 패턴이 게시됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)”를 참조하세요.
| `org_secret_scanning_custom_pattern.delete` | 조직에서 비밀 검사를 위해 사용자 지정 패턴이 제거됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)”를 참조하세요.
| `org_secret_scanning_custom_pattern.update` |사용자 지정 패턴에 대한 변경 내용은 조직의 비밀 검사를 위해 저장됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)”를 참조하세요.
{%- endif %}

## `organization_default_label` 범주 작업

| 작업 | 설명
|--------|-------------
| `organization_default_label.create` | 조직의 리포지토리에 대한 기본 레이블이 만들어졌습니다. 자세한 내용은 “[기본 레이블 만들기](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#creating-a-default-label)”를 참조하세요.
| `organization_default_label.update` | 조직의 리포지토리에 대한 기본 레이블이 편집되었습니다. 자세한 내용은 “[기본 레이블 편집](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#editing-a-default-label)”을 참조하세요.
| `organization_default_label.destroy` | 조직의 리포지토리에 대한 기본 레이블이 삭제되었습니다. 자세한 내용은 “[기본 레이블 삭제](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#deleting-a-default-label)”를 참조하세요.

{%- ifversion fpt or ghec or ghes %}
## `organization_domain` 범주 작업

| 작업 | 설명
|--------|-------------
| `organization_domain.approve` | 조직에 대해 엔터프라이즈 도메인이 승인되었습니다. 자세한 내용은 “[조직에 대한 도메인 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#approving-a-domain-for-your-organization)”을 참조하세요.
| `organization_domain.create` | 조직에 엔터프라이즈 도메인이 추가되었습니다. 자세한 내용은 “[조직에 대한 도메인 확인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)”을 참조하세요.
| `organization_domain.destroy` | 조직에서 엔터프라이즈 도메인이 제거되었습니다. 자세한 내용은 “[승인되거나 확인된 도메인 제거](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#removing-an-approved-or-verified-domain)”를 참조하세요.
| `organization_domain.verify` | 조직에 대해 엔터프라이즈 도메인이 확인되었습니다. 자세한 내용은 “[조직에 대한 도메인 확인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)”을 참조하세요.

## `organization_projects_change` 범주 작업

| 작업 | 설명
|--------|-------------
| `organization_projects_change.clear` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 엔터프라이즈의 조직 전체 프로젝트 보드에 대한 정책 설정을 지웠습니다. 자세한 내용은 “[엔터프라이즈에서 프로젝트에 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)”을 참조하세요.
| `organization_projects_change.disable` | 엔터프라이즈의 모든 조직에서 조직 프로젝트를 사용하지 않도록 설정했습니다. 자세한 내용은 “[엔터프라이즈에서 프로젝트에 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)”을 참조하세요.
| `organization_projects_change.enable` | 엔터프라이즈의 모든 조직에서 조직 프로젝트를 사용하도록 설정했습니다. 자세한 내용은 “[엔터프라이즈에서 프로젝트에 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)”을 참조하세요.
{%- endif %}

## `packages` 범주 작업

| 작업 | 설명
|--------|-------------
| `packages.insecure_hash` | Maven에서 특정 패키지 버전에 대한 안전하지 않은 해시를 게시했습니다.
| `packages.package_deleted` | 조직에서 패키지가 삭제되었습니다. {% ifversion fpt or ghec or ghes %} 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”을 참조하세요.{% endif %}
| `packages.package_published` | 패키지가 조직에 게시되었거나 다시 게시되었습니다.
| `packages.package_restored` | 전체 패키지가 복원되었습니다.{% ifversion fpt or ghec or ghes %} 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”을 참조하세요.{% endif %}
| `packages.package_version_deleted` | 특정 패키지 버전이 삭제되었습니다.{% ifversion fpt or ghec or ghes %} 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”을 참조하세요.{% endif %}
| `packages.package_version_published` | 특정 패키지 버전이 패키지에 게시되었거나 다시 게시되었습니다.
| `packages.package_version_restored` | 특정 패키지 버전이 삭제되었습니다.{% ifversion fpt or ghec or ghes %} 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”을 참조하세요.{% endif %}
| `packages.part_upload` | 특정 패키지 버전이 조직에 부분적으로 업로드되었습니다.
| `packages.upstream_package_fetched` | npm 업스트림 프록시에서 특정 패키지 버전을 가져왔습니다.
| `packages.version_download` | 특정 패키지 버전이 다운로드되었습니다.
| `packages.version_upload` | 특정 패키지 버전이 업로드되었습니다.

{%- ifversion fpt or ghec %}
## `pages_protected_domain` 범주 작업

| 작업 | 설명
|--------|-------------
| `pages_protected_domain.create` | 조직 또는 엔터프라이즈에 대해 {% data variables.product.prodname_pages %} 확인 도메인이 만들어졌습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %}에 대한 사용자 지정 도메인 확인](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)”을 참조하세요.
| `pages_protected_domain.delete` | 조직 또는 엔터프라이즈에 대해 {% data variables.product.prodname_pages %} 확인 도메인이 삭제되었습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %}에 대한 사용자 지정 도메인 확인](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)”을 참조하세요.
| `pages_protected_domain.verify`  | 조직 또는 엔터프라이즈에 대해 {% data variables.product.prodname_pages %} 도메인이 확인되었습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %}에 대한 사용자 지정 도메인 확인](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)”을 참조하세요.

## `payment_method` 범주 작업

| 작업 | 설명
|--------|-------------
| `payment_method.create` | 새 신용 카드 또는 PayPal 계정과 같은 새로운 결제 방법이 추가되었습니다.
| `payment_method.remove` | 결제 방법이 제거되었습니다.
| `payment_method.update` | 기존 결제 방법이 업데이트되었습니다.

## `prebuild_configuration` 범주 작업

| 작업 | 설명
|--------|-------------
| `prebuild_configuration.create` | 리포지토리에 대한 {% 데이터 variables.product.prodname_github_codespaces %} 사전 빌드 구성이 만들어졌습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 사전 빌드 정보](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)”를 참조하세요.
| `prebuild_configuration.destroy` | 리포지토리에 대한 {% 데이터 variables.product.prodname_github_codespaces %} 사전 빌드 구성이 삭제되었습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 사전 빌드 정보](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)”를 참조하세요.
| `prebuild_configuration.run_triggered` | 사용자가 리포지토리 분기에 대한 {% data variables.product.prodname_github_codespaces %} 사전 빌드 구성 실행을 시작했습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 사전 빌드 정보](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)”를 참조하세요.
| `prebuild_configuration.update` | 리포지토리에 대한 {% 데이터 variables.product.prodname_github_codespaces %} 사전 빌드 구성이 편집되었습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 사전 빌드 정보](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)”를 참조하세요.
{%- endif %}

{%- ifversion ghes %}
## `pre_receive_environment` 범주 작업

| 작업 | 설명
| ------ | -----------
| `pre_receive_environment.create` | 사전 수신 후크 환경이 만들어졌습니다. 자세한 내용은 “[사전 수신 후크 환경 만들기](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)”를 참조하세요.
| `pre_receive_environment.destroy` | 사전 수신 후크 환경이 삭제되었습니다. 자세한 내용은 “[사전 수신 후크 환경 만들기](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)”를 참조하세요.
| `pre_receive_environment.download` | 사전 수신 후크 환경이 다운로드되었습니다. 자세한 내용은 “[사전 수신 후크 환경 만들기](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)”를 참조하세요.
| `pre_receive_environment.update` | 사전 수신 후크 환경이 업데이트되었습니다. 자세한 내용은 “[사전 수신 후크 환경 만들기](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)”를 참조하세요.

## `pre_receive_hook` 범주 작업

| 작업 | 설명
|--------|-------------
| `pre_receive_hook.create` | 사전 수신 후크가 만들어졌습니다. 자세한 내용은 “[사전 수신 후크 만들기](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#creating-pre-receive-hooks)”를 참조하세요.
| `pre_receive_hook.destroy` | 사전 수신 후크가 삭제되었습니다. 자세한 내용은 “[사전 수신 후크 삭제](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#deleting-pre-receive-hooks)”를 참조하세요.
| `pre_receive_hook.enforcement` | 리포지토리 및 조직 관리자가 후크 구성을 재정의할 수 있도록 하는 사전 수신 후크 적용 설정을 사용하거나 사용하지 않도록 설정되었습니다. 자세한 내용은 “[GitHub Enterprise Server 어플라이언스에서 사전 수신 후크 관리](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance)”를 참조하세요.
| `pre_receive_hook.rejected_push` | 사전 수신 후크가 푸시를 거부했습니다.
| `pre_receive_hook.update` | 사전 수신 후크가 만들어졌습니다. 자세한 내용은 “[사전 수신 후크 편집](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#editing-pre-receive-hooks)”을 참조하세요.
| `pre_receive_hook.warned_push` | 사전 수신 후크가 푸시에 대해 경고했습니다.
{%- endif %}

## `private_repository_forking` 범주 작업

| 작업 | 설명
|--------|-------------
| `private_repository_forking.clear` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 리포지토리, 조직 또는 엔터프라이즈에 대한 프라이빗 및 내부 리포지토리 포크를 허용하는 정책 설정을 지웠습니다. 자세한 내용은 “[리포지토리에 대한 분기 정책 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)”, “[조직 및 엔터프라이즈에 대한 분기 정책 관리](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”, “[개인 또는 내부 리포지토리 분기 정책 시행](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)”을 참조하세요.
| `private_repository_forking.disable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 리포지토리, 조직 또는 엔터프라이즈에 대한 프라이빗 및 내부 리포지토리 포크를 허용하는 정책 설정을 사용하지 않도록 설정했습니다. 프라이빗 및 내부 리포지토리에는 포크가 허용되지 않습니다. 자세한 내용은 “[리포지토리에 대한 분기 정책 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)”, “[조직 및 엔터프라이즈에 대한 분기 정책 관리](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”, “[개인 또는 내부 리포지토리 분기 정책 시행](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)”을 참조하세요.
| `private_repository_forking.enable` | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 리포지토리, 조직 또는 엔터프라이즈에 대한 프라이빗 및 내부 리포지토리 포크를 허용하는 정책 설정을 사용하도록 설정했습니다. 프라이빗 및 내부 리포지토리에는 항상 포크가 허용됩니다. 자세한 내용은 “[리포지토리에 대한 분기 정책 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)”, “[조직 및 엔터프라이즈에 대한 분기 정책 관리](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”, “[개인 또는 내부 리포지토리 분기 정책 시행](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)”을 참조하세요.

{%- ifversion fpt or ghec %}
## `profile_picture` 범주 작업

| 작업 | 설명
|--------|-------------
| `profile_picture.update` | 프로필 사진이 업데이트되었습니다.
{%- endif %}

## `project` 범주 작업

| 작업 | 설명
|--------|-------------
| `project.access` | 프로젝트 보드 표시 여부가 변경되었습니다. 자세한 내용은 “[프로젝트 보드 표시 여부 변경](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)”을 참조하세요.
| `project.close` | 프로젝트 보드가 닫혔습니다. 자세한 내용은 “[프로젝트 보드 닫기](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)”를 참조하세요.
| `project.create` | 프로젝트 보드가 만들어졌습니다. 자세한 내용은 “[프로젝트 보드 만들기](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)”를 참조하세요.
| `project.delete` | 프로젝트 보드가 삭제되었습니다. 자세한 내용은 “[프로젝트 보드 삭제](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board)”를 참조하세요.
| `project.link` | 리포지토리가 프로젝트 보드에 연결되었습니다. 자세한 내용은 “[프로젝트 보드에 리포지토리 연결](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)”을 참조하세요.
| `project.open` | 프로젝트 보드가 다시 열렸습니다. 자세한 내용은 “[닫힌 프로젝트 보드 다시 열기](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board)”를 참조하세요.
| `project.rename` | 프로젝트 보드의 이름이 변경되었습니다. 자세한 내용은 “[프로젝트 보드 편집](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)”을 참조하세요.
| `project.unlink` | 리포지토리가 프로젝트 보드에서 연결 해제되었습니다. 자세한 내용은 “[프로젝트 보드에 리포지토리 연결](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)”을 참조하세요.
| `project.update_org_permission` | 모든 조직 멤버에 대한 프로젝트의 베이스 수준 권한이 변경되거나 제거되었습니다. 자세한 내용은 “[조직 멤버를 위한 프로젝트 보드에 대한 액세스 관리](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members)”를 참조하세요.
| `project.update_team_permission` | 팀의 프로젝트 보드 사용 권한 수준이 변경되었거나 팀이 프로젝트 보드에 추가되거나 제거된 경우입니다. 자세한 내용은 “[조직 프로젝트 보드에 대한 팀 액세스 권한 관리](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)”를 참조하세요.
| `project.update_user_permission` | 조직 멤버 또는 외부 협력자가 프로젝트 보드에 추가되거나 프로젝트 보드에서 제거되었거나 사용 권한 수준이 변경되었습니다. 자세한 내용은 “[조직 프로젝트 보드에 대한 개인 액세스 권한 관리](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board)”를 참조하세요.

{%- ifversion projects-v2 %}
## `project_field` 범주 작업

| 작업 | 설명
|--------|-------------
| `project_field.create` | 프로젝트 보드에 필드를 만들었습니다. 자세한 내용은 [필드 유형 이해](/issues/planning-and-tracking-with-projects/understanding-field-types)를 참조하세요.
| `project_field.delete` | 프로젝트 보드에서 필드가 삭제되었습니다. 자세한 내용은 [필드 삭제](/issues/planning-and-tracking-with-projects/understanding-field-types/deleting-fields)를 참조하세요.

## `project_view` 범주 작업

| 작업 | 설명
|--------|-------------
| `project_view.create` | 프로젝트 보드에 보기가 만들어졌습니다. 자세한 내용은 “[보기 관리](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views)”를 참조하세요.
| `project_view.delete` | 프로젝트 보드에서 보기가 삭제되었습니다. 자세한 내용은 “[보기 관리](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views)”를 참조하세요.
{%- endif %}

## `protected_branch` 범주 작업

| 작업 | 설명
|--------|-------------
| `protected_branch.create ` | 분기 보호를 분기에서 사용하도록 설정되었습니다.
| `protected_branch.destroy` | 분기에서 분기 보호를 사용하지 않도록 설정되었습니다.
| `protected_branch.dismiss_stale_reviews ` | 분기에서 부실 끌어오기 요청 해제 적용이 업데이트되었습니다.
{%- ifversion ghes %} | `protected_branch.dismissal_restricted_users_teams` | 검토를 해제할 수 있는 사용자 및/또는 팀을 제한하는 적용이 분기에서 업데이트되었습니다.
{%- endif %} | `protected_branch.policy_override ` | 리포지토리 관리자가 분기 보호 요구 사항을 재정의했습니다.
| `protected_branch.rejected_ref_update ` | 분기 업데이트 시도가 거부되었습니다.
| `protected_branch.required_status_override` | 필수 상태 검사 분기 보호 요구 사항이 리포지토리 관리자에 의해 재정의되었습니다.
| `protected_branch.review_policy_and_required_status_override` | 필수 검토 및 필수 상태 확인 분기 보호 요구 사항이 리포지토리 관리자에 의해 재정의되었습니다.
| `protected_branch.review_policy_override` | 필수 검토 분기 보호 요구 사항이 리포지토리 관리자에 의해 재정의되었습니다.
| `protected_branch.update_admin_enforced ` | 분기 보호가 리포지토리 관리자에 대해 적용되었습니다.
{%- ifversion ghes %} | `protected_branch.update_allow_deletions_enforcement_level` | 푸시 액세스 권한이 있는 사용자가 일치하는 분기를 삭제할 수 있도록 허용하는 적용이 분기에서 업데이트되었습니다.
| `protected_branch.update_allow_force_pushes_enforcement_level` | 푸시 액세스 권한이 있는 모든 사용자에 대해 강제 푸시를 허용하는 적용이 분기에서 업데이트되었습니다.
| `protected_branch.update_linear_history_requirement_enforcement_level` | 선형 커밋 기록을 요구하는 적용이 분기에서 업데이트되었습니다.
{%- endif %} | `protected_branch.update_pull_request_reviews_enforcement_level ` | 필수 끌어오기 요청 검토 적용이 분기에서 업데이트되었습니다. `0`(비활성화됨), `1`(관리자 아님), `2`(모든 사람) 중 하나일 수 있습니다.
| `protected_branch.update_require_code_owner_review ` | 필수 코드 소유자 검토 적용이 분기에서 업데이트되었습니다.
| `protected_branch.update_required_approving_review_count` | 분기에서 병합을 업데이트하기 전에 필수 승인 횟수를 적용합니다.
| `protected_branch.update_required_status_checks_enforcement_level ` | 분기에서 필수 상태 검사 적용이 업데이트되었습니다.
| `protected_branch.update_signature_requirement_enforcement_level ` | 필수 커밋 서명 적용이 분기에서 업데이트되었습니다.
| `protected_branch.update_strict_required_status_checks_policy` | 분기에서 필수 상태 검사 적용이 업데이트되었습니다.
| `protected_branch.update_name` | 분기에 대해 분기 이름 패턴이 업데이트되었습니다.

## `public_key` 범주 작업

| 작업 | 설명
|--------|-------------
| `public_key.create` | SSH 키가 사용자 계정에 [추가][add key]되었거나 리포지토리에 [배포 키][]가 추가되었습니다.
| `public_key.delete` | SSH 키가 사용자 계정에서 제거되었거나 [배포 키][]가 리포지토리에서 제거되었습니다.
| `public_key.update` | 사용자 계정의 SSH 키 또는 리포지토리의 [배포 키][]가 업데이트되었습니다.
| `public_key.unverification_failure` | 사용자 계정의 SSH 키 또는 리포지토리의 [배포 키][] 확인을 취소할 수 없습니다.
| `public_key.unverify` | 사용자 계정의 SSH 키 또는 리포지토리의 [배포 키][] 확인이 취소되었습니다.
| `public_key.verification_failure` | 사용자 계정의 SSH 키 또는 리포지토리의 [배포 키][]를 확인할 수 없습니다.
| `public_key.verify` | 사용자 계정의 SSH 키 또는 리포지토리의 [배포 키][]가 확인되었습니다.

  [add key]: /authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
  [배포 키]: /developers/overview/managing-deploy-keys#deploy-keys

## `pull_request` 범주 작업

| 작업 | 설명
|--------|-------------
| `pull_request.close` | 끌어오기 요청이 병합되지 않고 닫혔습니다. 자세한 내용은 “[끌어오기 요청 닫기](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)”를 참조하세요.
| `pull_request.converted_to_draft` | 끌어오기 요청이 초안으로 변환되었습니다. 자세한 내용은 “[끌어오기 요청의 스테이지 변경](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft)”을 참조하세요.
| `pull_request.create` | 끌어오기 요청이 만들어졌습니다. 자세한 내용은 “[끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)”를 참조하세요.
| `pull_request.create_review_request` | 끌어오기 요청에 대한 검토가 요청되었습니다. 자세한 내용은 “[끌어오기 요청 검토 정보](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”를 참조하세요.
| `pull_request.in_progress` | 끌어오기 요청이 진행 중으로 표시되었습니다.
| `pull_request.indirect_merge` | 끌어오기 요청의 커밋이 대상 분기에 병합되었으므로 끌어오기 요청이 병합된 것으로 간주했습니다.
| `pull_request.merge` | 끌어오기 요청이 병합되었습니다. 자세한 내용은 “[끌어오기 요청 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”을 참조하세요.
| `pull_request.ready_for_review` | 끌어오기 요청이 검토할 준비가 된 것으로 표시되었습니다. 자세한 내용은 “[끌어오기 요청의 스테이지 변경](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review)”을 참조하세요.
| `pull_request.remove_review_request` | 검토 요청이 끌어오기 요청에서 제거되었습니다. 자세한 내용은 “[끌어오기 요청 검토 정보](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”를 참조하세요.
| `pull_request.reopen` | 이전에 닫았던 끌어오기 요청이 다시 열렸습니다.
| `pull_request_review.delete` | 끌어오기 요청에 대한 검토가 삭제되었습니다.
| `pull_request_review.dismiss` | 끌어오기 요청에 대한 검토가 해제되었습니다. 자세한 내용은 “[끌어오기 요청 검토 해제](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”를 참조하세요.
| `pull_request_review.submit` | 끌어오기 요청에 대한 검토가 제출되었습니다. 자세한 내용은 “[끌어오기 요청 검토 정보](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”를 참조하세요.

## `pull_request_review` 범주 작업

| 작업 | 설명
|--------|-------------
| `pull_request_review.delete` | 끌어오기 요청에 대한 검토가 삭제되었습니다.
| `pull_request_review.dismiss` | 끌어오기 요청에 대한 검토가 해제되었습니다. 자세한 내용은 “[끌어오기 요청 검토 해제](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”를 참조하세요.
| `pull_request_review.submit` | 끌어오기 요청에 대한 검토가 제출되었습니다. 자세한 내용은 “[검토 제출](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#submitting-your-review)”을 참조하세요.

## `pull_request_review_comment` 범주 작업

| 작업 | 설명
|--------|-------------
| `pull_request_review_comment.create` | 검토 주석이 끌어오기 요청에 추가되었습니다. 자세한 내용은 “[끌어오기 요청 검토 정보](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”를 참조하세요.
| `pull_request_review_comment.delete` | 끌어오기 요청에 대한 검토 주석이 삭제되었습니다.
| `pull_request_review_comment.update` | 끌어오기 요청에 대한 검토 주석이 변경되었습니다.

## `repo` 범주 작업

| 작업 | 설명
|--------|-------------
| `repo.access`         | 리포지토리의 표시 여부가 프라이빗{%- ifversion ghes %}, 퍼블릭{% endif %} 또는 내부로 변경되었습니다.
| `repo.actions_enabled` | 리포지토리에 대해 {% data variables.product.prodname_actions %}를 사용하도록 설정했습니다.
| `repo.add_member`     | 협력자가 리포지토리에 추가되었습니다.
| `repo.add_topic`     | 토픽이 리포지토리에 추가되었습니다.
| `repo.advanced_security_disabled` | 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}를 사용하지 않도록 설정했습니다.
| `repo.advanced_security_enabled` | 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정했습니다.
| `repo.advanced_security_policy_selected_member_disabled` | 리포지토리 관리자가 {% data variables.product.prodname_GH_advanced_security %} 기능이 리포지토리에 대해 사용되지 않도록 방지했습니다.
| `repo.advanced_security_policy_selected_member_enabled` | 리포지토리 관리자가 {% data variables.product.prodname_GH_advanced_security %} 기능이 리포지토리에 대해 사용되도록 허용했습니다.
| `repo.archived`       | 리포지토리가 보관되었습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 리포지토리 보관](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)”을 참조하세요.
| `repo.code_scanning_analysis_deleted` | 리포지토리에 대한 코드 검사 분석이 삭제되었습니다. 자세한 내용은 “[리포지토리에서 코드 검사 분석 삭제](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository)”를 참조하세요.
| `repo.change_merge_setting` | 리포지토리에 대한 끌어오기 요청 병합 옵션이 변경되었습니다.
| `repo.clear_actions_settings` | 리포지토리 관리자가 리포지토리에 대한 {% data variables.product.prodname_actions %} 정책 설정을 지웠습니다.
| `repo.config`         | 리포지토리 관리자가 강제 푸시를 차단했습니다. 자세한 내용은 [리포지토리에 대한 강제 푸시 차단](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)을 참조하세요.
{%- ifversion fpt or ghec %} | `repo.config.disable_collaborators_only` | 협력자에 대한 상호 작용 제한을 사용하지 않도록 설정했습니다. 자세한 내용은 “[리포지토리에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”을 참조하세요.
| `repo.config.disable_contributors_only` | 이전 기여자에 대한 상호 작용 제한은 리포지토리에서 사용하지 않도록 설정되었습니다. 자세한 내용은 “[리포지토리에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”을 참조하세요.
| `repo.config.disable_sockpuppet_disallowed` | 기존 사용자에 대한 상호 작용 제한은 리포지토리에서 사용하지 않도록 설정되었습니다. 자세한 내용은 “[리포지토리에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”을 참조하세요.
| `repo.config.enable_collaborators_only` | 리포지토리에서 협력자에 대한 상호 작용 제한을 사용하도록 설정되었습니다. 협력자 또는 조직 멤버가 아닌 사용자는 설정된 기간 동안 리포지토리와 상호 작용할 수 없습니다. 자세한 내용은 “[리포지토리에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”을 참조하세요.
| `repo.config.enable_contributors_only` | 리포지토리에서 이전 기여자에 대한 상호 작용 제한을 사용하도록 설정되었습니다. 이전 기여자, 협력자 또는 조직 멤버가 아닌 사용자는 설정된 기간 동안 리포지토리와 상호 작용할 수 없습니다. 자세한 내용은 “[리포지토리에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”을 참조하세요.
| `repo.config.enable_sockpuppet_disallowed` | 리포지토리에서 기존 사용자에 대한 상호 작용 제한을 사용하도록 설정되었습니다. 새 사용자는 설정된 기간 동안 리포지토리와 상호 작용할 수 없습니다. 리포지토리의 기존 사용자, 기여자, 협력자 또는 조직 멤버는 리포지토리와 상호 작용할 수 있습니다. 자세한 내용은 “[리포지토리에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”을 참조하세요.
{%- endif %} {%- ifversion ghes %} | `repo.config.disable_anonymous_git_access`| 리포지토리에서 익명 Git 읽기 권한을 사용하지 않도록 설정했습니다. 자세한 내용은 “[리포지토리에 익명 Git 읽기 권한 사용](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)”을 참조하세요.
| `repo.config.enable_anonymous_git_access` | 리포지토리에서 익명 Git 읽기 권한을 사용하도록 설정되었습니다. 자세한 내용은 “[리포지토리에 익명 Git 읽기 권한 사용](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)”을 참조하세요.
| `repo.config.lock_anonymous_git_access` | 리포지토리의 익명 Git 읽기 권한 설정이 잠겨 리포지토리 관리자가 이 설정을 변경(사용 또는 사용 안 함)하지 못하도록 방지합니다. 자세한 내용은 “[사용자가 익명 Git 읽기 권한을 변경하지 못하도록 방지](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)”를 참조하세요.
| `repo.config.unlock_anonymous_git_access` | 리포지토리의 익명 Git 읽기 권한 설정이 잠금 해제되어 리포지토리 관리자가 이 설정을 변경(사용 또는 사용 안 함)할 수 있습니다. 자세한 내용은 “[사용자가 익명 Git 읽기 권한을 변경하지 못하도록 방지](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)”를 참조하세요.
{%- endif %} | `repo.create` | 리포지토리가 만들어졌습니다.
| `repo.create_actions_secret` | 리포지토리에 대해 {% data variables.product.prodname_actions %} 비밀이 만들어졌습니다. 자세한 정보는 “[리포지토리의 암호화된 비밀 만들기](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)”를 참조하세요.
| `repo.create_integration_secret` | 리포지토리에 대해 {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} 또는 {% data variables.product.prodname_github_codespaces %}{% endif %} 통합 비밀이 만들어졌습니다.
| `repo.destroy` | 리포지토리가 삭제되었습니다.
{%- ifversion ghes %} | `repo.disk_archive` | 리포지토리가 디스크에 보관되었습니다. 자세한 내용은 “[리포지토리 보관](/repositories/archiving-a-github-repository/archiving-repositories)”을 참조하세요.
{%- endif %} | `repo.download_zip` | 리포지토리의 소스 코드 보관 파일이 Zip 파일로 다운로드되었습니다.
| `repo.pages_cname` | {% data variables.product.prodname_pages %} 사용자 지정 도메인이 리포지토리에서 수정되었습니다.
| `repo.pages_create` | {% data variables.product.prodname_pages %} 사이트가 만들어졌습니다.
| `repo.pages_destroy` | {% data variables.product.prodname_pages %} 사이트가 삭제되었습니다.
| `repo.pages_https_redirect_disabled` | {% data variables.product.prodname_pages %} 사이트에 대해 HTTPS 리디렉션을 사용하지 않도록 설정했습니다.
| `repo.pages_https_redirect_enabled` | {% data variables.product.prodname_pages %} 사이트에 대해 HTTPS 리디렉션을 사용하도록 설정했습니다.
| `repo.pages_source` | {% data variables.product.prodname_pages %} 원본이 수정되었습니다.
| `repo.pages_private` | {% data variables.product.prodname_pages %} 사이트 표시 여부가 프라이빗으로 변경되었습니다.
| `repo.pages_public` | {% data variables.product.prodname_pages %} 사이트 표시 여부가 퍼블릭으로 변경되었습니다.
| `repo.register_self_hosted_runner` | 새 자체 호스트 실행기가 등록되었습니다. 자세한 내용은 “[리포지토리에 자체 호스트 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)”를 참조하세요.
| `repo.remove_self_hosted_runner` | 자체 호스트 실행기가 제거되었습니다. 자세한 내용은 “[리포지토리에서 실행기 제거](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)”를 참조하세요.
| `repo.remove_actions_secret` | 리포지토리에 대해 {% data variables.product.prodname_actions %} 비밀이 삭제되었습니다.
| `repo.remove_integration_secret` | 리포지토리에 대해 {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} 또는 {% data variables.product.prodname_github_codespaces %}{% endif %} 통합 비밀이 삭제되었습니다.
| `repo.remove_member` | 협력자가 리포지토리에서 제거되었습니다.
| `repo.remove_topic` | 토픽이 리포지토리에서 제거되었습니다.
| `repo.rename` | 리포지토리의 이름이 변경되었습니다.
{%- ifversion fpt or ghec %} | `repo.set_actions_fork_pr_approvals_policy` | 리포지토리에 대해 퍼블릭 포크에서 워크플로에 대한 승인을 요구하는 설정이 변경되었습니다. 자세한 내용은 “[퍼블릭 포크의 워크플로에 대한 필수 승인 구성](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)”을 참조하세요.
{%- endif %} | `repo.set_actions_retention_limit` | 리포지토리의 {% data variables.product.prodname_actions %} 아티팩트 및 로그에 대한 보존 기간이 변경되었습니다. 자세한 내용은 “[리포지토리의 {% data variables.product.prodname_actions %} 아티팩트 및 로그에 대한 보존 기간 구성](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”을 참조하세요.
| `repo.self_hosted_runner_online` | 실행기 애플리케이션이 시작되었습니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스트 실행기 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `repo.self_hosted_runner_offline` | 실행기 애플리케이션이 중지되었습니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스트 실행기 상태 검사](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”를 참조하세요.
| `repo.self_hosted_runner_updated` | 실행기 애플리케이션이 업데이트되었습니다. REST API 및 UI를 사용하여 볼 수 있으며 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”를 참조하세요.
| `repo.staff_unlock` | 리포지토리 관리자의 권한이 있는 엔터프라이즈 관리자 또는 GitHub 직원이 리포지토리의 잠금을 일시적으로 해제했습니다.
| `repo.transfer` | 사용자가 전송된 리포지토리 수신 요청을 수락했습니다.
| `repo.transfer_outgoing` | 리포지토리가 다른 리포지토리 네트워크로 전송되었습니다.
| `repo.transfer_start` | 사용자가 리포지토리를 다른 사용자 또는 조직으로 전송하라는 요청을 보냈습니다.
| `repo.unarchived` | 리포지토리가 보관되지 않았습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 리포지토리 보관](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)”을 참조하세요.
| `repo.update_actions_settings` | 리포지토리 관리자가 리포지토리에 대한 {% data variables.product.prodname_actions %} 정책 설정을 변경했습니다.
| `repo.update_actions_secret` | {% data variables.product.prodname_actions %} 비밀이 업데이트되었습니다.
| `repo.update_actions_access_settings` | 다른 리포지토리의 {% data variables.product.prodname_actions %} 워크플로에서 리포지토리를 사용하는 방법을 제어하는 설정이 변경되었습니다.
| `repo.update_default_branch` | 리포지토리의 기본 분기가 변경되었습니다.
| `repo.update_integration_secret` | 리포지토리에 대해 {% data variables.product.prodname_dependabot %} 또는 {% data variables.product.prodname_github_codespaces %} 통합 비밀이 업데이트되었습니다.
| `repo.update_member` | 리포지토리에 대한 사용자의 권한이 변경되었습니다.

{%- ifversion fpt or ghec %}
## `repository_advisory` 범주 작업

| 작업 | 설명
|--------|-------------
| `repository_advisory.close` | 누군가가 보안 공지를 닫았습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 보안 공지 정보](/github/managing-security-vulnerabilities/about-github-security-advisories)”를 참조하세요.
| `repository_advisory.cve_request` | 누군가가 보안 공지 초안을 위해 {% data variables.product.prodname_dotcom %}에서 CVE(일반적인 취약성 및 노출) 번호를 요청했습니다.
| `repository_advisory.github_broadcast` | {% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_advisory_database %}에서 보안 공지를 공개했습니다.
| `repository_advisory.github_withdraw` | {% data variables.product.prodname_dotcom %}는 오류로 게시된 보안 공지를 철회했습니다.
| `repository_advisory.open` | 누군가가 보안 공지 초안을 열었습니다.
| `repository_advisory.publish` | 누군가가 보안 공지 초안을 게시합니다.
| `repository_advisory.reopen` | 누군가가 보안 공지 초안을 다시 열었습니다.
| `repository_advisory.update` | 누군가가 초안 또는 게시된 보안 공지를 편집했습니다.

## `repository_content_analysis` 범주 작업

| 작업 | 설명
|--------|-------------
| `repository_content_analysis.enable` | 조직 소유자 또는 리포지토리 관리자가 [프라이빗 레포지토리에 대한 데이터 사용 설정을 사용하도록 설정](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)했습니다.
| `repository_content_analysis.disable` | 조직 소유자 또는 리포지토리 관리자가 [프라이빗 레포지토리에 대한 데이터 사용 설정을 사용하지 않도록 설정](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)했습니다.

## `repository_dependency_graph` 범주 작업

| 작업 | 설명
|--------|-------------
| `repository_dependency_graph.disable` | 리포지토리 소유자 또는 관리자가 프라이빗 리포지토리에 대한 종속성 그래프를 사용하지 않도록 설정했습니다. 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”를 참조하세요.
| `repository_dependency_graph.enable` | 리포지토리 소유자 또는 관리자가 프라이빗 리포지토리에 대한 종속성 그래프를 사용하도록 설정했습니다.
{%- endif %}

## `repository_image` 범주 작업

| 작업 | 설명
|--------|-------------
| `repository_image.create` | 리포지토리를 나타내는 이미지가 업로드되었습니다.
| `repository_image.destroy` | 리포지토리를 나타내는 이미지가 삭제되었습니다.

## `repository_invitation` 범주 작업

| 작업 | 설명
|--------|-------------
| `repository_invitation.accept` | 리포지토리에 참가하라는 초대가 수락되었습니다.
| `repository_invitation.create` | 리포지토리에 참가하라는 초대가 전송되었습니다.
| `repository_invitation.reject` | 리포지토리에 참가하라는 초대가 취소되었습니다.

## `repository_projects_change` 범주 작업

| 작업 | 설명
|--------|-------------
| `repository_projects_change.clear` | 리포지토리 프로젝트 정책은 조직 또는 엔터프라이즈의 모든 조직에 대해 제거되었습니다. 이제 조직 관리자는 리포지토리 프로젝트 설정을 제어할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 프로젝트에 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise)”을 참조하세요.
| `repository_projects_change.disable` | 리포지토리, 조직의 모든 리포지토리 또는 엔터프라이즈의 모든 조직에 대해 리포지토리 프로젝트를 사용하지 않도록 설정되었습니다.
| `repository_projects_change.enable` | 리포지토리, 조직의 모든 리포지토리 또는 엔터프라이즈의 모든 조직에 대해 리포지토리 프로젝트를 사용하도록 설정되었습니다.

{%- ifversion ghec or ghes or ghae %}
## `repository_secret_scanning` 범주 작업

| 작업 | 설명
|--------|-------------
| `repository_secret_scanning.disable` | 리포지토리 소유자 또는 관리자가 {% ifversion ghec %}프라이빗 또는 내부 {% endif %}리포지토리에 대한 비밀 검사를 사용하지 않도록 설정했습니다. 자세한 내용은 “[비밀 검사 정보](/github/administering-a-repository/about-secret-scanning)”를 참조하세요.
| `repository_secret_scanning.enable` | 리포지토리 소유자 또는 관리자가 {% ifversion ghec %}프라이빗 또는 내부 {% endif %}리포지토리에 대한 비밀 검사를 사용하도록 설정했습니다.
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}

## `repository_secret_scanning_custom_pattern` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `repository_secret_scanning_custom_pattern.create` | 리포지토리에서 비밀 검사를 위해 사용자 지정 패턴이 게시됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)”를 참조하세요.
| `repository_secret_scanning_custom_pattern.delete` | 리포지토리에서 비밀 검사를 위해 사용자 지정 패턴이 제거됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)”를 참조하세요.
| `repository_secret_scanning_custom_pattern.update` | 사용자 지정 패턴에 대한 변경 내용은 리포지토리의 비밀 검사를 위해 저장됩니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)”를 참조하세요.

## `repository_secret_scanning_push_protection` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `repository_secret_scanning_push_protection.disable` | 리포지토리 소유자 또는 관리자가 리포지토리에 대한 비밀 검사를 사용하지 않도록 설정했습니다. 자세한 내용은 “[비밀 검사를 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”를 참조하세요.
| `repository_secret_scanning_push_protection.enable` | 리포지토리 소유자 또는 관리자가 리포지토리에 대한 비밀 검사를 사용하도록 설정했습니다. 자세한 내용은 “[비밀 검사를 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”를 참조하세요.
{%- endif %}
## `repository_visibility_change` 범주 작업

| 작업 | 설명
|--------|-------------
| `repository_visibility_change.clear` | 조직 또는 엔터프라이즈에 대한 리포지토리 표시 여부 변경 설정을 지웠습니다. 자세한 내용은 “[조직의 리포지토리 표시 여부 변경 제한](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)” 및 “[엔터프라이즈의 리포지토리 표시 여부 변경에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-changes-to-repository-visibility)”을 참조하세요.
| `repository_visibility_change.disable` | 엔터프라이즈 멤버가 리포지토리의 표시 여부를 업데이트하는 기능을 사용하지 않도록 설정했습니다. 멤버는 조직 또는 엔터프라이즈의 모든 조직에서 리포지토리 표시 여부를 변경할 수 없습니다.
| `repository_visibility_change.enable` | 엔터프라이즈 멤버가 리포지토리의 표시 여부를 업데이트하는 기능을 사용하도록 설정했습니다. 멤버는 조직 또는 엔터프라이즈의 모든 조직에서 리포지토리 표시 여부를 변경할 수 있습니다.

## `repository_vulnerability_alert` 범주 작업

| 작업 | Description
|--------|-------------
| `repository_vulnerability_alert.create` | {% data variables.product.product_name %}에서 취약한 종속성을 사용하는 리포지토리에 대한 {% data variables.product.prodname_dependabot %} 경고를 만들었습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)”를 참조하세요.
| `repository_vulnerability_alert.dismiss` | 조직 소유자 또는 리포지토리 관리자가 취약한 종속성 {% ifversion GH-advisory-db-supports-malware %} 또는 맬웨어 {% endif %}에 대한 {% data variables.product.prodname_dependabot %} 경고를 해제했습니다.
| `repository_vulnerability_alert.resolve` | 리포지토리에 대해 쓰기 액세스 권한을 가진 누군가가 프로젝트 종속성에서 {% data variables.product.prodname_dependabot %} 경고를 업데이트하고 해결하도록 변경 사항을 푸시했습니다.

{%- ifversion fpt or ghec %}
## `repository_vulnerability_alerts` 범주 작업

| 작업 | Description
|--------|-------------
| `repository_vulnerability_alerts.authorized_users_teams` | 조직 소유자 또는 리포지토리 관리자는 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 수신할 권한이 있는 사람 또는 팀의 목록을 업데이트했습니다. 자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”를 참조하세요.
| `repository_vulnerability_alerts.disable` | 리포지토리 소유자 또는 리포지토리 관리자가 {% data variables.product.prodname_dependabot_alerts %}를 사용하지 않도록 설정했습니다.
| `repository_vulnerability_alerts.enable` | 리포지토리 소유자 또는 리포지토리 관리자가 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정했습니다.
{%- endif %}

## `required_status_check` 범주 작업

| 작업 | 설명
|--------|-------------
| `required_status_check.create` | 상태 검사는 보호된 분기에 필요한 것으로 표시되었습니다. 자세한 내용은 “[병합하기 전에 상태 검사 필요](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)”를 참조하세요.
| `required_status_check.destroy` | 보호된 분기에 대해 상태 검사가 더 이상 필수로 표시되지 않습니다. 자세한 내용은 “[병합하기 전에 상태 검사 필요](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)”를 참조하세요.

{%- ifversion ghec or ghes %}
## `restrict_notification_delivery` 범주 작업

| 작업 | 설명
|--------|-------------
| `restrict_notification_delivery.enable` | 조직 또는 엔터프라이즈에 대한 메일 알림 제한을 사용하도록 설정했습니다. 자세한 내용은 “[조직에 대한 메일 알림 제한](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)” 및 “[엔터프라이즈에 대한 메일 알림 제한](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)”을 참조하세요.
| `restrict_notification_delivery.disable` | 조직 또는 엔터프라이즈에 대한 메일 알림 제한을 사용하지 않도록 설정했습니다. 자세한 내용은 “[조직에 대한 메일 알림 제한](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)” 및 “[엔터프라이즈에 대한 메일 알림 제한](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)”을 참조하세요.
{%- endif %}

{%- ifversion custom-repository-roles %}
## `role` 범주 작업

| 작업 | 설명
|--------|-------------
|`create` | 조직 소유자가 새 사용자 지정 리포지토리 역할을 만들었습니다. 자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.
|`destroy` | 조직 소유자가 사용자 지정 리포지토리 역할을 삭제했습니다. 자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.
|`update` | 조직 소유자가 기존 사용자 지정 리포지토리 역할을 편집했습니다. 자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `secret_scanning` 범주 작업

| 작업 | 설명
|--------|-------------
| `secret_scanning.disable` | 조직 소유자가 모든 기존{% ifversion ghec %} 프라이빗 또는 내부{% endif %} 리포지토리에 대한 비밀 검사를 사용하지 않도록 설정했습니다. 자세한 내용은 “[비밀 검사 정보](/github/administering-a-repository/about-secret-scanning)”를 참조하세요.
| `secret_scanning.enable` | 조직 소유자가 모든 기존{% ifversion ghec %} 프라이빗 또는 내부{% endif %} 리포지토리에 대한 비밀 검사를 사용하도록 설정했습니다.

{% ifversion secret-scanning-alert-audit-log %}
## `secret_scanning_alert` 범주 작업

| 작업 | Description
|------------------|-------------------
| `secret_scanning_alert.create` | {% data variables.product.prodname_dotcom %}가 비밀을 감지하고 {% data variables.product.prodname_secret_scanning %} 경고를 생성했습니다. 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %}의 알림 관리](/code-security/secret-scanning/managing-alerts-from-secret-scanning)”를 참조하세요.
| `secret_scanning_alert.reopen` | 사용자가 {% data variables.product.prodname_secret_scanning %} 경고를 다시 열었습니다.
| `secret_scanning_alert.resolve` | 사용자가 {% data variables.product.prodname_secret_scanning %} 경고를 해결했습니다.
{% endif %}

## `secret_scanning_new_repos` 범주 작업

| 작업 | 설명
|--------|-------------
| `secret_scanning_new_repos.disable` | 조직 소유자가 모든 새{% ifversion ghec %} 프라이빗 또는 내부{% endif %} 리포지토리에 대한 비밀 검사를 사용하지 않도록 설정했습니다. 자세한 내용은 “[비밀 검사 정보](/github/administering-a-repository/about-secret-scanning)”를 참조하세요.
| `secret_scanning_new_repos.enable` | 조직 소유자가 모든 새{% ifversion ghec %} 프라이빗 또는 내부{% endif %} 리포지토리에 대한 비밀 검사를 사용하도록 설정했습니다.
{%- endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
## `secret_scanning_push_protection` 범주 작업

| 작업 | 설명
|--------|-------------
| `bypass` | 사용자가 비밀 검사를 통해 탐지한 비밀에 대한 푸시 보호를 무시할 때 트리거됩니다. 자세한 내용은 “[비밀에 대한 푸시 보호 무시](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)”를 참조하세요.{% endif %}

{%- ifversion ghec or ghes or ghae %}
## `security_key` 범주 작업

| 작업 | 설명
|--------|-------------
| `security_key.register` | 계정에 대한 보안 키가 등록되었습니다.
| `security_key.remove` | 계정에서 보안 키가 제거되었습니다.
{%- endif %}

{%- ifversion fpt or ghec %}
## `sponsors` 범주 작업

| 작업 | 설명
|--------|-------------
| `sponsors.agreement_sign` | {% data variables.product.prodname_sponsors %} 계약에 조직을 대신하여 서명되었습니다.
| `sponsors.custom_amount_settings_change` | {% data variables.product.prodname_sponsors %}에 대한 사용자 지정 금액을 사용하거나 사용하지 않도록 설정했거나 제안된 사용자 지정 금액이 변경되었습니다. 자세한 내용은 “[스폰서쉽 계층 관리](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)”를 참조하세요.
| `sponsors.fiscal_host_change` | {% data variables.product.prodname_sponsors %} 목록의 회계 호스트가 업데이트되었습니다.
| `sponsors.withdraw_agreement_signature` | 조직에 적용되는 {% data variables.product.prodname_sponsors %} 계약에서 서명이 철회되었습니다.
| `sponsors.repo_funding_links_file_action` | 리포지토리의 FUNDING 파일이 변경되었습니다. 자세한 내용은 “[리포지토리에 스폰서 단추 표시](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)”를 참조하세요.
| `sponsors.sponsor_sponsorship_cancel` | 스폰서쉽이 취소되었습니다. 자세한 내용은 “[스폰서쉽 다운그레이드](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)”를 참조하세요.
| `sponsors.sponsor_sponsorship_create` | 계정을 후원하여 스폰서쉽을 만들었습니다. 자세한 내용은 “[오픈 소스 기여자 후원](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”을 참조하세요.
| `sponsors.sponsor_sponsorship_payment_complete` | 계정을 후원하고 결제가 처리된 후 스폰서쉽 결제가 완료된 것으로 표시되었습니다. 자세한 내용은 “[오픈 소스 기여자 후원](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”을 참조하세요.
| `sponsors.sponsor_sponsorship_preference_change` | 후원 계정에서 메일 업데이트 수신 옵션이 변경되었습니다. 자세한 내용은 “[스폰서쉽 관리](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)”를 참조하세요.
| `sponsors.sponsor_sponsorship_tier_change` | 스폰서쉽이 업그레이드되거나 다운그레이드되었습니다. 자세한 내용은 “[스폰서쉽 업그레이드](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship)” 및 “[스폰서쉽 다운그레이드](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)”를 참조하세요.
| `sponsors.sponsored_developer_approve` | {% data variables.product.prodname_sponsors %} 계정이 승인되었습니다. 자세한 내용은 “[조직에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”을 참조하세요.
| `sponsors.sponsored_developer_create` | {% data variables.product.prodname_sponsors %} 계정이 만들어졌습니다. 자세한 내용은 “[조직에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”을 참조하세요.
| `sponsors.sponsored_developer_disable` | {% data variables.product.prodname_sponsors %} 계정이 사용하지 않도록 설정되었습니다.
| `sponsors.sponsored_developer_profile_update` | 후원 조직 프로필을 편집합니다. 자세한 내용은 “[{% data variables.product.prodname_sponsors %}에 대한 프로필 세부 정보 편집](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)”을 참조하세요.
| `sponsors.sponsored_developer_redraft` | {% data variables.product.prodname_sponsors %} 계정이 승인된 상태에서 초안 상태로 반환되었습니다.
| `sponsors.sponsored_developer_request_approval` | 승인을 위해 {% data variables.product.prodname_sponsors %}에 대한 애플리케이션이 제출되었습니다. 자세한 내용은 “[조직에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”을 참조하세요.
| `sponsors.sponsored_developer_tier_description_update` | 스폰서쉽 계층에 대한 설명이 변경되었습니다. 자세한 내용은 “[스폰서쉽 계층 관리](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)”를 참조하세요.
| `sponsors.update_tier_welcome_message` | 조직의 {% data variables.product.prodname_sponsors %} 계층에 대한 환영 메시지가 업데이트되었습니다.
| `sponsors.update_tier_repository` | {% data variables.product.prodname_sponsors %} 계층이 리포지토리에 대한 액세스를 변경했습니다.
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `ssh_certificate_authority` 범주 작업

| 작업 | 설명
|--------|-------------
| `ssh_certificate_authority.create` | 조직 또는 엔터프라이즈에 대한 SSH 인증 기관이 만들어졌습니다. 자세한 내용은 “[조직의 SSH 인증 기관 관리](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)” 및 “[엔터프라이즈에 대한 SSH 인증 기관 관리](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)”를 참조하세요.
| `ssh_certificate_authority.destroy` | 조직 또는 엔터프라이즈에 대한 SSH 인증 기관이 삭제되었습니다. 자세한 내용은 “[조직의 SSH 인증 기관 관리](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)” 및 “[엔터프라이즈에 대한 SSH 인증 기관 관리](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)”를 참조하세요.

## `ssh_certificate_requirement` 범주 작업

| 작업 | 설명
|--------|-------------
| `ssh_certificate_requirement.enable` | 멤버가 조직 리소스에 액세스하기 위해 SSH 인증서를 사용해야 하는 요구 사항을 사용하도록 설정했습니다. 자세한 내용은 “[조직의 SSH 인증 기관 관리](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)” 및 “[엔터프라이즈에 대한 SSH 인증 기관 관리](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)”를 참조하세요.
| `ssh_certificate_requirement.disable` | 멤버가 조직 리소스에 액세스하기 위해 SSH 인증서를 사용해야 하는 요구 사항을 사용하지 않도록 설정했습니다. 자세한 내용은 “[조직의 SSH 인증 기관 관리](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)” 및 “[엔터프라이즈에 대한 SSH 인증 기관 관리](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)”를 참조하세요.
{%- endif %}

{% ifversion sso-redirect %}
## `sso_redirect` 범주 작업

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

| 작업 | 설명 |
|--------|------------ |
`sso_redirect.enable` | 사용자가 SSO(Single Sign-On)로 자동 리디렉션을 사용하도록 설정했습니다. |
`sso_redirect.disable` | 사용자가 SSO(Single Sign-On)로 자동 리디렉션을 사용하지 않도록 설정했습니다. |

자세한 내용은 “[엔터프라이즈에서 보안 설정에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)”을 참조하세요.
{% endif %}

## `staff` 범주 작업

| 작업 | 설명
|--------|-------------
| `staff.disable_repo`          | 조직{% ifversion ghes %}, 리포지토리 또는 사이트{% else %} 또는 리포지토리{% endif %} 관리자는 리포지토리 및 모든 포크에 대한 액세스를 사용하지 않도록 설정했습니다.
| `staff.enable_repo`           | 조직{% ifversion ghes %}, 리포지토리 또는 사이트{% else %} 또는 리포지토리{% endif %} 관리자는 리포지토리 및 모든 포크에 대한 액세스를 다시 사용하도록 설정했습니다.
{%- ifversion ghes or ghae %} | `staff.exit_fake_login`       | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}는 {% data variables.product.product_name %}에서 가장 세션을 종료했습니다.
| `staff.fake_login`            | 엔터프라이즈 소유자{% ifversion ghes %} 또는 사이트 관리자{% endif %}가 다른 사용자로 {% data variables.product.product_name %}에 로그인했습니다.
{%- endif %} | `staff.repo_lock`             | 조직{% ifversion ghes %}, 리포지토리 또는 사이트{% else %} 또는 리포지토리{% endif %} 관리자가 사용자의 프라이빗 리포지토리를 잠갔습니다(일시적으로 모든 권한을 얻었습니다).
| `staff.repo_unlock`           | 조직{% ifversion ghes %}, 리포지토리 또는 사이트{% else %} 또는 리포지토리{% endif %} 관리자가 사용자의 프라이빗 리포지토리를 잠금 해제했습니다(일시적 액세스를 종료했습니다).
{%- ifversion ghes %} | `staff.search_audit_log` | 사이트 관리자가 사이트 관리자 감사 로그를 검색했습니다.
{%- endif %} | `staff.set_domain_token_expiration` | {% ifversion ghes %}사이트 관리자 또는 {% endif %}GitHub 직원이 조직 또는 엔터프라이즈 도메인에 대한 확인 코드 만료 시간을 설정합니다. {% ifversion ghec or ghes %}자세한 내용은 “[조직에 대한 도메인 확인 또는 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)” 및 “[엔터프라이즈에 대한 도메인 확인 또는 승인](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”을 참조하세요.{% endif %} {%- ifversion ghes %} | `staff.unlock`                | 사이트 관리자가 사용자의 모든 프라이빗 리포지토리를 잠금 해제(일시적으로 전체 액세스 권한을 얻음)했습니다.
{%- endif %} | `staff.unverify_domain` | {% ifversion ghes %}사이트 관리자 또는 {% endif %}GitHub 직원이 조직 또는 엔터프라이즈 도메인을 확인하지 않았습니다. {% ifversion ghec or ghes %}자세한 내용은 “[조직에 대한 도메인 확인 또는 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)” 및 “[엔터프라이즈에 대한 도메인 확인 또는 승인](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”을 참조하세요 {% endif %} | `staff.verify_domain` | {% ifversion ghes %} 사이트 관리자 또는 {% endif %}GitHub 직원이 조직 또는 엔터프라이즈 도메인을 확인했습니다. {% ifversion ghec or ghes %}자세한 내용은 “[조직에 대한 도메인 확인 또는 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)” 및 “[엔터프라이즈에 대한 도메인 확인 또는 승인](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”을 참조하세요.{% endif %} {%- ifversion ghes %} | `staff.view_audit_log` | 사이트 관리자가 사이트 관리자 감사 로그를 확인했습니다.
{%- endif %}

## `team` 범주 작업

| 작업 | 설명
|--------|-------------
| `team.add_member` | 조직의 멤버가 팀에 추가되었습니다. 자세한 내용은 “[팀에 조직 멤버 추가](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)”를 참조하세요.
| `team.add_repository` | 팀에 리포지토리에 대한 액세스 및 사용 권한이 부여되었습니다.
| `team.change_parent_team` | 자식 팀이 만들어졌거나 자식 팀의 부모가 변경되었습니다. 자세한 내용은 “[조직의 계층 구조에서 팀 이동](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)”을 참조하세요.
| `team.change_privacy` | 팀의 개인 정보 수준이 변경되었습니다. 자세한 내용은 “[팀 표시 여부 변경](/organizations/organizing-members-into-teams/changing-team-visibility)”을 참조하세요.
| `team.create` | 사용자 계정 또는 리포지토리가 팀에 추가되었습니다.
| `team.delete` | 사용자 계정 또는 리포지토리가 팀에서 제거되었습니다.
| `team.destroy` | 팀이 삭제되었습니다.
{%- ifversion ghec or ghes or ghae %} | `team.demote_maintainer` | 사용자가 팀 유지 관리자에서 팀 멤버로 강등되었습니다.
| `team.promote_maintainer` | 사용자가 팀 멤버에서 팀 유지 관리자로 승격되었습니다. 자세한 내용은 “[조직 멤버를 팀 유지 관리자로 승격](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member#promoting-an-organization-member-to-team-maintainer)”을 참조하세요.
{%- endif %} | `team.remove_member` | 조직의 멤버가 팀에서 제거되었습니다. 자세한 내용은 “[팀에서 조직 멤버 제거](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team)”를 참조하세요.
| `team.remove_repository` | 리포지토리는 더 이상 팀에서 통제하지 않습니다.
| `team.rename` | 팀의 이름이 변경되었습니다.
| `team.update_permission` | 팀의 액세스 권한이 변경되었습니다.
| `team.update_repository_permission` | 리포지토리에 대한 팀의 권한이 변경되었습니다.

## `team_discussions` 범주 작업

| 작업 | 설명
|--------|-------------
| `team_discussions.clear` | 조직 소유자가 조직 또는 엔터프라이즈에 대한 팀 토론을 허용하도록 설정을 지웠습니다.
| `team_discussions.disable` | 조직 소유자가 조직에 대한 팀 토론을 사용하지 않도록 설정했습니다. 자세한 내용은 “[조직에 대한 팀 토론 사용 안 함](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)”을 참조하세요.
| `team_discussions.enable` | 조직 소유자가 조직에 대한 팀 토론을 사용하도록 설정했습니다.

{%- ifversion ghec %}
## `team_sync_tenant` 범주 작업

| 작업 | 설명
|--------|-------------
| `team_sync_tenant.disabled` | 테넌트와의 팀 동기화를 사용하지 않도록 설정했습니다. 자세한 내용은 “[조직에 대한 팀 동기화 관리](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)” 및 “[엔터프라이즈의 조직에 대한 팀 동기화 관리](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”를 참조하세요.
| `team_sync_tenant.enabled` | 테넌트와의 팀 동기화를 사용하도록 설정했습니다. 자세한 내용은 “[조직에 대한 팀 동기화 관리](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)” 및 “[엔터프라이즈의 조직에 대한 팀 동기화 관리](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”를 참조하세요.
| `team_sync_tenant.update_okta_credentials` | 테넌트와의 팀 동기화에 대한 OKTA 자격 증명이 변경되었습니다.
{%- endif %}

{%- ifversion fpt or ghes %}
## `two_factor_authentication` 범주 작업

| 작업 | 설명
|--------|-------------
| `two_factor_authentication.disabled` | 사용자 계정에 대해 [2단계 인증][2fa]을 사용하지 않도록 설정되었습니다.
| `two_factor_authentication.enabled`  | 사용자 계정에 대해 [2단계 인증][2fa]을 사용하도록 설정되었습니다.
| `two_factor_authentication.password_reset_fallback_sms` | 일회성 암호 코드가 사용자 계정 대체 전화 번호로 전송되었습니다.
| `two_factor_authentication.recovery_codes_regenerated` | 사용자 계정에 대해 2단계 복구 코드가 다시 생성되었습니다.
| `two_factor_authentication.sign_in_fallback_sms` | 일회성 암호 코드가 사용자 계정 대체 전화 번호로 전송되었습니다.
| `two_factor_authentication.update_fallback` | 사용자 계정에 대한 2단계 인증 대체가 변경되었습니다.
{%- endif %}

  [2fa]: /authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication

{%- ifversion fpt or ghes or ghae %}
## `user` 범주 작업

| 작업 | 설명
|--------|-------------
| `user.add_email`                  | 메일 주소가 사용자 계정에 추가되었습니다.
| `user.async_delete`               | 비동기 작업이 사용자 계정을 삭제하기 시작했고 결국 `user.delete` 이벤트를 트리거했습니다.
| `user.audit_log_export` | 감사 로그 항목을 내보냈습니다.
| `user.block_user` | 사용자가 다른 사용자{% ifversion ghes %} 또는 사이트 관리자{% endif %}에 의해 차단되었습니다.
| `user.change_password`            | 사용자가 자신의 암호를 변경했습니다.
| `user.create`                     | 새 사용자 계정이 만들어졌습니다.
| `user.creation_rate_limit_exceeded` | 사용자 계정, 애플리케이션, 문제, 끌어오기 요청 또는 기타 리소스를 만드는 속도가 구성된 속도 제한을 초과했거나 너무 많은 사용자가 너무 빨리 팔로우했습니다.
| `user.delete`                     | 사용자 계정이 비동기 작업에 의해 제거되었습니다.
{%- ifversion ghes %} | `user.demote`                     | 사이트 관리자가 일반 사용자 계정으로 강등되었습니다.
{%- endif %} | `user.destroy`                    | 사용자가 자신의 계정을 삭제하여 `user.async_delete`를 트리거했습니다.
| `user.failed_login`               | 사용자가 잘못된 사용자 이름, 암호 또는 2단계 인증 코드로 로그인을 시도합니다.
| `user.flag_as_large_scale_contributor` | 사용자 계정에 대규모 기여자로 플래그가 지정되었습니다. 시간 제한을 방지하기 위해 사용자가 소유한 퍼블릭 리포지토리의 기여만 기여 그래프에 표시됩니다.
| `user.forgot_password`            | 사용자가 로그인 페이지를 통해 암호 재설정을 요청했습니다.
| `user.hide_private_contributions_count` | 사용자가 프라이빗 기여의 표시 여부를 변경했습니다. 이제 사용자 프로필의 프라이빗 리포지토리에 대한 기여 횟수가 숨겨집니다. 자세한 내용은 “[프로필에서 개인 기여 공개 또는 숨기기](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)”를 참조하세요.
| `user.lockout` | 사용자의 계정이 잠겼습니다.
| `user.login`                      | 사용자가 로그인했습니다.
{%- ifversion ghes or ghae %} | `user.mandatory_message_viewed`   | 사용자가 필수 메시지를 확인했습니다. 자세한 내용은 “[엔터프라이즈에 대한 사용자 메시지 사용자 지정](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise)”을 참조하세요.
{%- endif %} | `user.minimize_comment` | 사용자가 작성한 주석이 최소화되었습니다.
{%- ifversion ghes %} | `user.promote`                    | 일반 사용자 계정이 사이트 관리자로 승격되었습니다.
{%- endif %} | `user.recreate` | 사용자의 계정이 복원되었습니다.
| `user.remove_email`               | 사용자 계정에서 메일 주소가 제거되었습니다.
| `user.remove_large_scale_contributor_flag` | 더 이상 사용자 계정에 대규모 기여자로 플래그가 지정되지 않습니다.
| `user.rename`                     | 사용자 이름이 변경되었습니다.
| `user.reset_password` | 사용자가 계정 암호를 초기화합니다.
| `user.show_private_contributions_count` | 사용자가 프라이빗 기여의 표시 여부를 변경했습니다. 이제 사용자 프로필의 프라이빗 리포지토리에 대한 기여 횟수가 표시됩니다. 자세한 내용은 “[프로필에서 개인 기여 공개 또는 숨기기](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)”를 참조하세요.
| `user.sign_in_from_unrecognized_device` | 사용자가 인식할 수 없는 디바이스에서 로그인했습니다.
| `user.sign_in_from_unrecognized_device_and_location` | 사용자가 인식할 수 없는 디바이스 및 위치에서 로그인했습니다.
| `user.sign_in_from_unrecognized_location` | 사용자가 인식할 수 없는 위치에서 로그인했습니다.
| `user.suspend`                    | 엔터프라이즈 소유자 {% ifversion ghes %} 또는 사이트 관리자{% endif %}에 의해 사용자 계정이 일시 중단되었습니다.
| `user.two_factor_challenge_failure` | 사용자 계정에 대해 발급된 2FA 과제가 실패했습니다.
| `user.two_factor_challenge_success` | 사용자 계정에 대해 발급된 2FA 과제에 성공했습니다.
| `user.two_factor_recover` | 사용자가 2FA 복구 코드를 사용했습니다.
| `user.two_factor_recovery_codes_downloaded` | 사용자가 자신의 계정에 대해 2FA 복구 코드를 다운로드했습니다.
| `user.two_factor_recovery_codes_printed` | 사용자가 자신의 계정에 대해 2FA 복구 코드를 인쇄했습니다.
| `user.two_factor_recovery_codes_viewed` | 사용자가 자신의 계정에 대해 2FA 복구 코드를 확인했습니다.
| `user.two_factor_requested`       | 사용자에게 2단계 인증 코드를 묻는 메시지가 표시되었습니다.
| `user.unblock_user` | 사용자가 다른 사용자{% ifversion ghes %} 또는 사이트 관리자{% endif %}의 차단을 해제했습니다.
| `user.unminimize_comment` | 사용자가 작성한 주석 최소화가 취소되었습니다.
| `user.unsuspend` | 엔터프라이즈 소유자 {% ifversion ghes %} 또는 사이트 관리자{% endif %}에 의해 사용자 계정이 일시 중단 해제되었습니다.
{%- endif %}

{%- ifversion ghec or ghes %}
## `user_license` 범주 작업

| 작업 | 설명
|--------|-------------
| `user_license.create` | 엔터프라이즈의 사용자에 대한 사용자 라이선스가 만들어졌습니다.
| `user_license.destroy` | 엔터프라이즈의 사용자에 대한 사용자 라이선스가 삭제되었습니다.
| `user_license.update` | 엔터프라이즈의 사용자에 대한 사용자 라이선스 형식이 변경되었습니다.
{%- endif %}

## `workflows` 범주 작업

{% data reusables.audit_log.audit-log-events-workflows %}
