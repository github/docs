---
title: 조직에서 2단계 인증 요구
intro: 조직 구성원 및 외부 협력자가 조직의 개인 계정에 대해 2단계 인증을 사용하도록 요구하여 악의적인 작업자가 조직의 리포지토리 및 설정에 액세스하는 것을 더 어렵게 만들 수 있습니다.
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
  - /admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  ghes: '*'
type: how_to
topics:
  - 2FA
  - Enterprise
  - Organizations
  - Policies
  - Security
shortTitle: Require 2FA
ms.openlocfilehash: 7686d3c816c181a0d32631fca203a77fccae58c4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097943'
---
LDAP 또는 기본 제공 인증을 사용하는 경우 {% 데이터 variables.location.product_location %}에서 2단계 인증이 지원됩니다. 조직 관리자가 멤버에게 2단계 인증을 사용하도록 요구할 수 있습니다.

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

자세한 내용은 “[2단계 인증 정보](/github/authenticating-to-github/about-two-factor-authentication)”를 참조하세요.

## 2단계 인증을 적용하기 위한 요구 사항

조직 멤버 및 외부 협력자가 2FA를 사용하도록 요구하려면 먼저 개인 계정에서 [2단계 인증을 사용](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa/)하도록 설정해야 합니다.

{% warning %}

**경고:**

- 2단계 인증을 요구하면 2FA를 사용하지 않는 멤버 및 외부 협력자(봇 계정 포함)는 조직에서 제거되고 프라이빗 리포지토리의 포크를 포함하여 해당 리포지토리에 대한 액세스 권한을 잃게 됩니다. 조직에서 제거된 날부터 3개월 이내에 개인 계정에서 2FA를 사용하도록 설정하면 [액세스 권한 및 설정을 복구](/enterprise/user/articles/reinstating-a-former-member-of-your-organization)할 수 있습니다.
- 2FA가 요구되는 경우 2FA를 사용하지 않는 조직 멤버 또는 외부 협력자는 조직에서 자동으로 제거됩니다.
- 2단계 인증을 요구하는 조직의 유일한 소유자인 경우 조직에서 2단계 인증 필요를 사용하지 않도록 설정해야 개인 계정에서 2FA를 사용하지 않도록 설정할 수 있습니다.

{% endwarning %}

2단계 인증 사용을 요구하기 전에 조직 멤버 및 외부 협력자에게 알리고 해당 계정에서 2FA를 설정하도록 요청하는 것이 좋습니다. 조직의 사용자 탭에서 [멤버 및 외부 협력자가 이미 2FA를 사용하고 있는지 확인](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)할 수 있습니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %}

## 조직에서 제거된 사용자 보기

2단계 인증을 요구했을 때 비준수로 인해 조직에서 자동으로 제거된 사용자를 보려는 경우 검색 필드에 `reason:two_factor_requirement_non_compliance`를 사용하여 [감사 로그를 검색](/enterprise/admin/guides/installation/searching-the-audit-log/)할 수 있습니다.

{% data reusables.audit_log.octicon_icon %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. `reason:two_factor_requirement_non_compliance`를 사용하여 검색 쿼리를 입력합니다.
 ![2FA 비준수로 인해 제거된 사용자를 보여 주는 직원 도구 감사 로그 이벤트](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) 검색 범위를 좁히려면 다음을 수행합니다.
    - 제거된 조직 멤버를 검색하려면 `action:org.remove_member AND reason:two_factor_requirement_non_compliance`를 입력합니다.
    - 제거된 외부 협력자를 검색하려면 `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance`를 입력합니다.

  검색에 조직 이름을 사용하여 특정 조직에서 제거된 사용자를 볼 수도 있습니다.
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. **검색** 을 클릭합니다.  

## 제거된 멤버 및 외부 협력자가 조직에 재가입하도록 지원

2단계 인증 사용 필요를 사용하도록 설정할 때 조직에서 제거되는 멤버 또는 외부 협력자는 제거되었음을 알리는 메일을 받게 됩니다. 이 경우, 개인 계정에서 2FA를 사용하도록 설정하고 조직 소유자에게 조직에 대한 액세스 권한을 요청해야 합니다.

## 추가 참고 자료

- “[조직의 사용자가 2FA를 사용할 수 있는지 여부 보기](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)”
- “[2FA(2단계 인증)를 사용하여 계정 보호](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa)”
- “[조직의 이전 멤버 복구](/enterprise/user/articles/reinstating-a-former-member-of-your-organization)”
- “[조직에 대한 이전 외부 협력자의 액세스 권한 복구](/enterprise/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)”
