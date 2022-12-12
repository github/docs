---
title: 보안 로그 검토
intro: 개인 계정에 대한 보안 로그를 검토하여 자신이 수행한 작업과 다른 사용자가 수행한 작업을 더 잘 이해할 수 있습니다.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-your-security-log
  - /github/authenticating-to-github/reviewing-your-security-log
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Security log
ms.openlocfilehash: af0c238e3bda40874ed09d6afb402cc6934e7c4b
ms.sourcegitcommit: 5b0becac9098ab45c2204882d719f5cf17bfff18
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120849'
---
## 보안 로그에 액세스

보안 로그에는 지난 90일 이내에 수행된 모든 작업이 나열됩니다.

{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. 사이드바의 “보관” 섹션에서 **{% octicon "log" aria-label="The log icon" %} 보안 로그** 를 클릭합니다.
{% else %}
1. 사용자 설정 사이드바에서 **보안 로그** 를 클릭합니다.
  ![보안 로그 탭](/assets/images/help/settings/audit-log-tab.png) {% endif %}

## 보안 로그 검색

{% data reusables.audit_log.audit-log-search %}

### 수행된 작업을 기반으로 검색

보안 로그에 나열된 이벤트는 작업에 의해 트리거됩니다. 작업은 다음 범주로 그룹화됩니다.

| 범주 이름 | 설명 |------------------|-------------------{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | 청구 정보와 관련된 모든 작업을 포함합니다.
| [`codespaces`](#codespaces-category-actions) | {% data variables.product.prodname_github_codespaces %}와 관련된 모든 작업을 포함합니다. 자세한 내용은 “[{% data variables.product.prodname_codespaces %} 정보](/github/developing-online-with-codespaces/about-codespaces)”를 참조하세요.
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | {% data variables.product.prodname_marketplace %} 개발자 계약 서명과 관련된 모든 작업을 포함합니다.
| [`marketplace_listing`](#marketplace_listing-category-actions) | {% data variables.product.prodname_marketplace %}에 앱을 나열하는 데 관련된 모든 활동을 포함합니다. {% endif %} | [`oauth_access`](#oauth_access-category-actions) | 연결한 [{% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) 과 관련된 모든 활동을 포함합니다. {% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | {% data variables.product.prodname_dotcom %} 구독에 대한 지불과 관련된 모든 활동을 포함합니다. {% endif %} {% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | {% data variables.product.pat_v2 %}s와 관련된 활동을 포함합니다. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기"를 참조하세요](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). {% endif %} | [`profile_picture`](#profile_picture-category-actions) | 프로필 사진과 관련된 모든 활동을 포함합니다.
| [`project`](#project-category-actions) | 프로젝트 보드와 관련된 모든 작업을 포함합니다.
| [`public_key`](#public_key-category-actions) | [퍼블릭 SSH 키](/articles/adding-a-new-ssh-key-to-your-github-account)와 관련된 모든 작업을 포함합니다.
| [`repo`](#repo-category-actions) | 소유한 리포지토리와 관련된 모든 작업을 포함합니다.{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | {% data variables.product.prodname_sponsors %} 및 스폰서 단추와 관련된 모든 이벤트를 포함합니다(“[{% data variables.product.prodname_sponsors %} 정보](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)” 및 “[리포지토리에 스폰서 단추 표시](/articles/displaying-a-sponsor-button-in-your-repository)” 참조){% endif %}{% ifversion ghes or ghae %} | [`team`](#team-category-actions) | 소속된 팀과 관련된 모든 작업을 포함합니다.{% endif %}{% ifversion not ghae %} | [`two_factor_authentication`](#two_factor_authentication-category-actions) | [2단계 인증](/articles/securing-your-account-with-two-factor-authentication-2fa)과 관련된 모든 작업을 포함합니다.{% endif %} | [`user`](#user-category-actions) | 계정과 관련된 모든 작업을 포함합니다.

{% ifversion fpt or ghec %}

## 보안 로그 내보내기

{% data reusables.audit_log.export-log %} {% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

## 보안 로그 작업

보안 로그에 이벤트로 기록되는 가장 일반적인 작업 중 일부에 대한 개요입니다.

{% ifversion fpt or ghec %}

### `billing` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `change_billing_type` | {% data variables.product.prodname_dotcom %}에 대한 [지불 방법을 변경](/articles/adding-or-editing-a-payment-method)할 때 트리거됩니다.
| `change_email` | [메일 주소를 변경](/articles/changing-your-primary-email-address)할 때 트리거됩니다.

### `codespaces` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | [codespace를 만들](/github/developing-online-with-codespaces/creating-a-codespace) 때 트리거됩니다.
| `resume` | 일시 중단된 codespace를 다시 시작할 때 트리거됩니다.
| `delete` | [codespace를 삭제](/github/developing-online-with-codespaces/deleting-a-codespace)할 때 트리거됩니다.
| `manage_access_and_security` | [codespace가 액세스할 수 있는 리포지토리를 업데이트](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)할 때 트리거됩니다.
| `trusted_repositories_access_update` | 개인 계정의 [{% data variables.product.prodname_codespaces %}에 대한 액세스 및 보안 설정](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)을 변경할 때 트리거됩니다.

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

### `oauth_authorization` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | [{% data variables.product.prodname_oauth_app %}에 대한 액세스 권한을 부여](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)할 때 트리거됩니다.
| `destroy` | [계정에 대한 {% 데이터 variables.product.prodname_oauth_app %}의 액세스를 해](/articles/reviewing-your-authorized-integrations)지하고 [권한 부여가 해지되거나 만료될](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation) 때 트리거됩니다.

{% ifversion fpt or ghec %}

### `payment_method` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `create` | 새 결제 방법(예: 새 신용 카드 또는 PayPal 계정)이 추가될 때 트리거됩니다.
| `update` | 기존 결제 방법이 업데이트될 때 트리거됩니다.

{% endif %}

{% ifversion pat-v2 %}

### `personal_access_token` 범주 작업

| 작업 | Description
|------------------|-------------------
| `access_granted` | 만든 {% 데이터 variables.product.pat_v2 %}에 리소스에 대한 액세스 권한이 부여되면 트리거됩니다.
| `access_revoked` | 만든 {% data variables.product.pat_v2 %}이(가) 해지될 때 트리거됩니다. 토큰은 여전히 공용 조직 리소스를 읽을 수 있습니다.
| `create` | {% data variables.product.pat_v2 %}을(를) 만들 때 트리거됩니다.
| `credential_regenerated` | {% data variables.product.pat_v2 %}을(를) 다시 생성할 때 트리거됩니다.
| `destroy` | {% data variables.product.pat_v2 %}을(를) 삭제할 때 트리거됩니다.
| `request_cancelled` | 조직 리소스에 액세스하기 위해 {% data variables.product.pat_v2 %}에 대한 보류 중인 요청을 취소할 때 트리거됩니다.
| `request_created` | 조직 리소스에 액세스하기 위해 {% data variables.product.pat_v2 %}을(를) 만들 때 트리거되고 조직에서 승인이 필요한 경우 {% data variables.product.pat_v2 %}이(가) 조직 리소스에 액세스할 수 있습니다.
| `request_denied` | 조직 리소스에 액세스하기 위한 {% 데이터 variables.product.pat_v2 %}에 대한 요청이 거부될 때 트리거됩니다. 자세한 내용은 "[조직에서 {% data variables.product.pat_generic %}에 대한 요청 관리](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)"를 참조하세요.

{% endif %}

### `profile_picture` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `update` | [프로필 사진을 설정하거나 업데이트](/articles/setting-your-profile-picture/)할 때 트리거됩니다.

### `project` 범주 작업

| 작업 | 설명
|--------------------|---------------------
| `access` | 프로젝트 보드의 표시 여부가 변경될 때 트리거됩니다.
| `create` | 프로젝트 보드를 만들 때 트리거됩니다.
| `rename` | 프로젝트 보드의 이름을 변경할 때 트리거됩니다.
| `update` | 프로젝트 보드가 업데이트될 때 트리거됩니다.
| `delete` | 프로젝트 보드를 삭제할 때 트리거됩니다.
| `link`   | 리포지토리가 프로젝트 보드에 연결될 때 트리거됩니다.
| `unlink` | 리포지토리가 프로젝트 보드에서 연결 해제될 때 트리거됩니다.
| `update_user_permission` | 외부 협력자가 프로젝트 보드에 추가되거나 제거되거나 권한 수준이 변경될 때 트리거됩니다.

### `public_key` 범주 작업

| 작업 | Description
|------------------|-------------------
| `create` | [{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}의 계정에 새 공용 SSH 키를 추가할](/articles/adding-a-new-ssh-key-to-your-github-account) 때 트리거됩니다.
| `delete` | [{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}에서 계정에 대한 공용 SSH 키를 제거할](/articles/reviewing-your-ssh-keys) 때 트리거됩니다.

### `repo` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `access` | 소유한 리포지토리가 [‘프라이빗’에서 ‘퍼블릭’으로](/articles/making-a-private-repository-public)(또는 그 반대로) 전환될 때 트리거됩니다.
| `add_member` | {% data variables.product.product_name %} 사용자가 {% ifversion fpt or ghec %}[협업 액세스 권한을 갖도록 초대되면](/articles/inviting-collaborators-to-a-personal-repository){% else %}리포지토리에 대한 [협업 액세스 권한을 부여받으면](/articles/inviting-collaborators-to-a-personal-repository){% endif %} 트리거됩니다.
| `add_topic` | 리포지토리 소유자가 리포지토리에 [토픽을 추가](/articles/classifying-your-repository-with-topics)할 때 트리거됩니다.
| `archived` | 리포지토리 소유자가 [리포지토리를 보관](/articles/about-archiving-repositories)할 때 트리거됩니다.{% ifversion ghes %}
| `config.disable_anonymous_git_access` | 퍼블릭 리포지토리에서 [익명 Git 읽기 권한을 사용하지 않도록 설정](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)하면 트리거됩니다.
| `config.enable_anonymous_git_access` | 퍼블릭 리포지토리에서 [익명 Git 읽기 권한을 사용하도록 설정](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)하면 트리거됩니다.
| `config.lock_anonymous_git_access` | 리포지토리의 [익명 Git 읽기 권한 설정이 잠겨 있을](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) 때 트리거됩니다.
| `config.unlock_anonymous_git_access` | 리포지토리의 [익명 Git 읽기 권한 설정이 잠긴](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) 경우 트리거됩니다.{% endif %}
| `create` | [새 리포지토리를 만들](/articles/creating-a-new-repository) 때 트리거됩니다.
| `destroy` |  [리포지토리가 삭제될](/articles/deleting-a-repository) 때 트리거됩니다.{% ifversion fpt or ghec %}
| `disable` | 리포지토리를 사용하지 않도록 설정하면 트리거됩니다(예: [자금 부족](/articles/unlocking-a-locked-account)).{% endif %}{% ifversion fpt or ghec %}
| `download_zip` | 리포지토리의 ZIP 또는 TAR 보관 파일을 다운로드할 때 트리거됩니다.
| `enable` | 리포지토리를 다시 사용하도록 설정할 때 트리거됩니다.{% endif %}
| `remove_member` | {% data variables.product.product_name %} 사용자가 [리포지토리의 협력자에서 제거](/articles/removing-a-collaborator-from-a-personal-repository)될 때 트리거됩니다.
| `remove_topic` | 리포지토리 소유자가 리포지토리에서 토픽을 제거할 때 트리거됩니다.
| `rename` | [리포지토리의 이름을 변경](/articles/renaming-a-repository)하면 트리거됩니다.
| `staff_unlock` | 엔터프라이즈 소유자 또는 {% 데이터 variables.contact.github_support %}(리포지토리 관리자의 사용 권한 포함)이 리포지토리의 잠금을 일시적으로 해제할 때 트리거됩니다. 리포지토리의 표시 유형은 변경되지 않습니다.
| `transfer` | [리포지토리의 이름을 변경](/articles/how-to-transfer-a-repository)할 때 트리거됩니다.
| `transfer_start` | 리포지토리 전송이 수행될 때 트리거됩니다.
| `unarchived` | 리포지토리 소유자가 리포지토리를 보관 취소할 때 트리거됩니다.

{% ifversion fpt or ghec %}
### `sponsors` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `custom_amount_settings_change` | 사용자 지정 금액을 사용하거나 사용하지 않도록 설정하거나 제안된 사용자 지정 금액을 변경할 때 트리거됩니다(“[스폰서쉽 계층 관리](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)” 참조).
| `repo_funding_links_file_action` | 리포지토리에서 FUNDING 파일을 변경할 때 트리거됩니다(“[리포지토리에 스폰서 단추 표시](/articles/displaying-a-sponsor-button-in-your-repository)” 참조).
| `sponsor_sponsorship_cancel` | 스폰서쉽을 취소할 때 트리거됩니다(“[스폰서쉽 다운그레이드](/articles/downgrading-a-sponsorship)” 참조).
| `sponsor_sponsorship_create` | 계정을 후원할 때 트리거됩니다(“[오픈 소스 기여자 후원](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)” 참조).
| `sponsor_sponsorship_payment_complete` | 계정을 후원하고 결제가 처리된 후 트리거됩니다(“[오픈 소스 기여자 후원](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)” 참조).
| `sponsor_sponsorship_preference_change` | 스폰서 개발자로부터 메일 업데이트를 받을지 여부를 변경할 때 트리거됩니다(“[스폰서쉽 관리](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)” 참조).
| `sponsor_sponsorship_tier_change` | 스폰서쉽을 업그레이드하거나 다운그레이드할 때 트리거됩니다(“[스폰서쉽 업그레이드](/articles/upgrading-a-sponsorship)” 및 “[스폰서쉽 다운그레이드](/articles/downgrading-a-sponsorship)” 참조).
| `sponsored_developer_approve` | {% data variables.product.prodname_sponsors %} 계정이 승인되면 트리거됩니다(“[개인 계정에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)” 참조).
| `sponsored_developer_create` | {% data variables.product.prodname_sponsors %} 계정이 만들어지면 트리거됩니다(“[개인 계정에 대한 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)” 참조).
| `sponsored_developer_disable` | {% data variables.product.prodname_sponsors %} 계정을 사용하지 않도록 설정하면 트리거됩니다.
| `sponsored_developer_redraft` | {% data variables.product.prodname_sponsors %} 계정이 승인된 상태에서 초안 상태로 반환될 때 트리거됩니다.
| `sponsored_developer_profile_update` | 스폰서 개발자 프로필을 편집할 때 트리거됩니다(“[{% data variables.product.prodname_sponsors %}의 프로필 세부 정보 편집](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)” 참조).
| `sponsored_developer_request_approval` | 승인을 위해 {% data variables.product.prodname_sponsors %}의 애플리케이션을 제출할 때 트리거됩니다(“[개인 계정의 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)” 참조).
| `sponsored_developer_tier_description_update` | 스폰서쉽 계층에 대한 설명을 변경할 때 트리거됩니다(“[스폰서쉽 계층 관리](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)” 참조).
| `sponsored_developer_update_newsletter_send` | 스폰서에게 메일 업데이트를 보낼 때 트리거됩니다(“[스폰서에게 연락](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)”참조).
| `waitlist_invite_sponsored_developer` | 대기 목록에서 {% data variables.product.prodname_sponsors %}에 가입하도록 초대될 때 트리거됩니다(“[개인 계정의 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)” 참조).
| `waitlist_join` | 스폰서 개발자가 되기 위해 대기 목록에 조인할 때 트리거됩니다(“[개인 계정의 {% data variables.product.prodname_sponsors %} 설정](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)” 참조)
{% endif %}

{% ifversion fpt or ghec %}
### `successor_invitation` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `accept` | 승계 초대를 수락할 때 트리거됩니다(“[개인 계정 리포지토리의 소유권 연속성 유지 관리](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)” 참조)
| `cancel` | 승계 초대를 취소할 때 트리거됩니다(“[개인 계정 리포지토리의 소유권 연속성 유지 관리](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)” 참조)
| `create` | 승계 초대를 만들 때 트리거됩니다(“[개인 계정 리포지토리의 소유권 연속성 유지 관리](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)” 참조)
| `decline` | 승계 초대를 거절할 때 트리거됩니다(“[개인 계정 리포지토리의 소유권 연속성 유지 관리](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)” 참조)
| `revoke` | 승계 초대를 철회할 때 트리거됩니다(“[개인 계정 리포지토리의 소유권 연속성 유지 관리](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)” 참조)
{% endif %}

{% ifversion ghes or ghae %}

### `team` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `add_member` | 소속된 조직의 구성원이 [팀에 사용자를 추가할](/articles/adding-organization-members-to-a-team) 때 트리거됩니다.
| `add_repository` | 속한 팀에 리포지토리에 대한 제어 권한이 주어지면 트리거됩니다.
| `create` | 소속된 조직에 새 팀이 만들어지면 트리거됩니다.
| `destroy` | 소속된 팀이 조직에서 삭제될 때 트리거됩니다.
| `remove_member` | 조직의 구성원이 소속된 [팀에서 제거될](/articles/removing-organization-members-from-a-team) 때 트리거됩니다.
| `remove_repository` | 더 이상 팀에서 리포지토리를 통제하지 않을 때 트리거됩니다.

{% endif %}

{% ifversion not ghae %}
### `two_factor_authentication` 범주 작업

| 작업 | 설명
|------------------|-------------------
| `enabled` | [2단계 인증을](/articles/securing-your-account-with-two-factor-authentication-2fa) 사용하도록 설정하면 트리거됩니다.
| `disabled` | 2단계 인증을 사용하지 않도록 설정하면 트리거됩니다.
{% endif %}

### `user` 범주 작업

| 작업 | 설명
|--------------------|---------------------
| `add_email` | {% ifversion not ghae %}[새 메일 주소를 추가](/articles/changing-your-primary-email-address){% else %}새 메일 주소를 추가{% endif %}할 때 트리거됩니다.{% ifversion fpt or ghec %}
| `codespaces_trusted_repo_access_granted` | [리포지토리에 만든 codespace가 개인 계정이 소유한 다른 리포지토리에 액세스하도록 허용](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)할 때 트리거됩니다.
| `codespaces_trusted_repo_access_revoked` | [리포지토리에 만든 codespace가 개인 계정이 소유한 다른 리포지토리에 액세스하도록 허용하지 않을 ](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)때 트리거됩니다. {% endif %}
| `create` | 새 개인 계정을 만들 때 트리거됩니다.{% ifversion not ghae %}
| `change_password` | 암호를 변경할 때 트리거됩니다.
| `forgot_password` | [암호 재설정](/articles/how-can-i-reset-my-password)을 요청할 때 트리거됩니다.{% endif %}
| `hide_private_contributions_count` | [프로필에서 비공개 기여를 숨길](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile) 때 트리거됩니다.
| `login` | {% data variables.location.product_location %}에 로그인할 때 트리거됩니다. {% ifversion ghes or ghae %}
`mandatory_message_viewed`   | 필수 메시지를 볼 때 트리거됩니다(자세한 내용은 “[사용자 메시지 사용자 지정](/admin/user-management/customizing-user-messages-for-your-enterprise)” 참조). | {% endif %}
| `failed_login` | 성공적으로 로그인하지 못한 경우 트리거됩니다.
| `remove_email` | 메일 주소를 제거할 때 트리거됩니다.
| `rename` | 계정 이름을 바꿀 때 트리거됩니다.{% ifversion fpt or ghec %}
| `report_content` | [문제 또는 끌어오기 요청 또는 문제, 끌어오기 요청 또는 커밋에 대한 주석을 보고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)할 때 트리거됩니다.{% endif %}
| `show_private_contributions_count` | [프로필에서 프라이빗 기여를 공개](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)할 때 트리거됩니다.{% ifversion not ghae %}
| `two_factor_requested` | {% data variables.product.product_name %}가 [2단계 인증 코드를 요청](/articles/accessing-github-using-two-factor-authentication)하면 트리거됩니다.{% endif %}

### `user_status` 범주 작업

| 작업 | 설명
|--------------------|---------------------
| `update` | 프로필의 상태를 설정하거나 변경할 때 트리거됩니다. 자세한 내용은 “[상태 설정](/articles/personalizing-your-profile/#setting-a-status)”을 참조하세요.
| `destroy` | 프로필의 상태를 지울 때 트리거됩니다.
