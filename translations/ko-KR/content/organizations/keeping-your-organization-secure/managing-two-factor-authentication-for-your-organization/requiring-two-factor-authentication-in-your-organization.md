---
title: 조직에서 2단계 인증 요구
intro: '조직 소유자는 {% ifversion fpt or ghec %}조직 구성원, 외부 협력자, 청구 관리자{% else %}조직 구성원 및 외부 협력자{% endif %}에게 개인 계정에 대해 2단계 인증을 사용하도록 요구하여 악의적인 작업자가 조직의 리포지토리와 설정에 액세스하기 더 어렵게 만들 수 있습니다.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Require 2FA
ms.openlocfilehash: 1a6ea397b010855917f9304db9a5c51cb5440a22
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147872305'
---
## 조직에 대한 2단계 인증 정보

{% data reusables.two_fa.about-2fa %} 조직의 모든 {% ifversion fpt or ghec %} 구성원, 외부 협력자, 청구 관리자{% else %}구성원, 외부 협력자{% endif %}에게 {% data variables.product.product_name %}에서 2단계 인증을 사용하도록 요구할 수 있습니다. 2단계 인증에 대한 자세한 내용은 “[2FA(2단계 인증)로 계정 보호](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)”를 참조하세요.

{% ifversion fpt or ghec %}

엔터프라이즈의 조직에 대해 2단계 인증을 요구할 수도 있습니다. 자세한 내용은 “[엔터프라이즈에서 보안 설정에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)”을 참조하세요.

{% endif %}

{% warning %}

**경고:**

- 조직에 2단계 인증을 사용해야 하는 경우 2FA를 사용하지 않는 {% ifversion fpt or ghec %}구성원, 외부 협력자, 청구 관리자{% else %}구성원, 외부 협력자{% endif %}(봇 계정 포함)는 조직에서 제거되고 해당 리포지토리에 대한 액세스 권한을 잃게 됩니다. 또한 조직의 프라이빗 리포지토리 포크에 액세스할 수 없게 됩니다. 조직에서 제거된 후 3개월 이내에 개인 계정에 대한 2단계 인증을 사용하도록 설정하는 경우 [액세스 권한 및 설정을 복구](/articles/reinstating-a-former-member-of-your-organization)할 수 있습니다.
- 조직 소유자, 구성원,{% ifversion fpt or ghec %} 청구 관리자{% endif %} 또는 외부 협력자가 필요한 2단계 인증을 사용하도록 설정한 후 개인 계정에 대해 2FA를 사용하지 않도록 설정하면 조직에서 자동으로 제거됩니다.
- 2단계 인증을 요구하는 조직의 유일한 소유자인 경우 조직에서 2단계 인증 필요를 사용하지 않도록 설정해야 개인 계정에서 2FA를 사용하지 않도록 설정할 수 있습니다.

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

## 필수 조건

{% ifversion fpt or ghec %}조직 구성원, 외부 협력자, 청구 관리자{% else %}조직 구성원, 외부 협력자{% endif %}가 2단계 인증을 사용하도록 요구하려면 먼저 {% data variables.product.product_name %}에서 계정에 대해 2단계 인증을 사용하도록 설정해야 합니다. 2FA에 대한 자세한 내용은 “[2FA(2단계 인증)로 계정 보호](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)”를 참조하세요.

2단계 인증을 사용하도록 요구하기 전에 {% ifversion fpt or ghec %}조직 구성원, 외부 협력자, 청구 관리자{% else %}조직 구성원, 외부 협력자{% endif %}에게 알리고 계정에 대해 2FA를 설정하도록 요청하는 것이 좋습니다. 구성원 및 외부 협력자가 이미 2FA를 사용하고 있는지 확인할 수 있습니다. 자세한 내용은 “[조직의 사용자가 2FA를 사용할 수 있는지 확인](/organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled)”을 참조하세요.

## 조직에서 2단계 인증 요구

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %} {% ifversion fpt or ghec %}
8. 조직에서 구성원 또는 외부 협력자가 제거된 경우 이전 권한을 복원하고 조직에 액세스할 수 있는 초대를 보내는 것이 좋습니다. 초대를 수락하려면 먼저 2단계 인증을 사용하도록 설정해야 합니다.
{% endif %}

## 조직에서 제거된 사용자 보기

2단계 인증을 요구했을 때 비준수로 인해 조직에서 자동으로 제거된 사용자를 보려는 경우 조직에서 제거된 사용자에 대해 [조직의 감사 로그를 검색](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log)할 수 있습니다. 감사 로그 이벤트는 2FA 비준수에 대해 사용자가 제거되었는지를 표시합니다.

![2FA 비준수에 대해 제거된 사용자를 보여 주는 감사 로그 이벤트](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. 검색 쿼리를 입력합니다. 검색 대상은 다음과 같습니다.
    - 제거된 조직 구성원, 검색 쿼리에 `action:org.remove_member` 사용
    - 제거된 외부 협력자, 검색 쿼리{% ifversion fpt or ghec %}에 `action:org.remove_outside_collaborator` 사용
    - 제거된 청구 관리자, 검색 쿼리에 `action:org.remove_billing_manager` 사용{% endif %}

 검색에서 [시간 프레임](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action)을 사용하여 조직에서 제거된 사용자를 볼 수도 있습니다.

## 제거된 멤버 및 외부 협력자가 조직에 재가입하도록 지원

2단계 인증 사용 필요를 사용하도록 설정할 때 조직에서 제거되는 멤버 또는 외부 협력자는 제거되었음을 알리는 메일을 받게 됩니다. 이 경우, 개인 계정에서 2FA를 사용하도록 설정하고 조직 소유자에게 조직에 대한 액세스 권한을 요청해야 합니다.

## 추가 참고 자료

- “[조직의 사용자가 2FA를 사용할 수 있는지 여부 보기](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)”
- “[2FA(2단계 인증)를 사용하여 계정 보호](/articles/securing-your-account-with-two-factor-authentication-2fa)”
- “[조직의 이전 멤버 복구](/articles/reinstating-a-former-member-of-your-organization)”
- “[조직에 대한 이전 외부 협력자의 액세스 권한 복구](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)”
