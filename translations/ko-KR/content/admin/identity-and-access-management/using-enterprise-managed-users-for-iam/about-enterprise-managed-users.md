---
title: '{% data variables.product.prodname_emus %} 정보'
shortTitle: About managed users
intro: 'ID 공급자의 {% data variables.product.prodname_dotcom %}에서 엔터프라이즈 구성원에 대한 ID 및 액세스를 중앙에서 관리할 수 있습니다.'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e24ae7adb9f5c2efbb08be63788dae1eff501d99
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192699'
---
## {% data variables.product.prodname_emus %} 정보

{% data variables.product.prodname_emus %}를 사용하면 IdP(ID 공급자)를 통해 엔터프라이즈 멤버의 사용자 계정을 제어할 수 있습니다. IdP의 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 할당된 사용자는 {% data variables.product.prodname_dotcom %}에서 새 사용자 계정으로 프로비전되고 엔터프라이즈에 추가됩니다. IdP에서 사용자 계정의 사용자 이름, 프로필 데이터, 팀 구성원 자격 및 리포지토리 액세스를 제어합니다.

IdP에서 각 {% data variables.enterprise.prodname_managed_user %}에게 사용자, 엔터프라이즈 소유자 또는 청구 관리자의 역할을 제공할 수 있습니다. {% data variables.enterprise.prodname_managed_users_caps %}은(는) 엔터프라이즈 내에서 조직을 소유할 수 있으며, 다른 {% data variables.enterprise.prodname_managed_users %}을(를) 내의 조직 및 팀에 추가할 수 있습니다. 자세한 내용은 "[엔터프라이즈의 역할](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" 및 "[조직 정보](/organizations/collaborating-with-groups-in-organizations/about-organizations)"를 참조하세요.

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} 자세한 내용은 "[IdP의 조건부 액세스 정책에 대한 지원 정보](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)"를 참조하세요.

{% endif %}

{% data variables.enterprise.prodname_managed_users %}에 대한 액세스 권한과 엔터프라이즈 내 리포지토리에 기여할 수 있는 기능을 부여할 수 있지만 {% data variables.enterprise.prodname_managed_users %}은(는) 나머지 {% data variables.product.prodname_dotcom %}에서 공용 콘텐츠를 만들거나 다른 사용자, 조직 및 기업과 공동 작업할 수 없습니다. 자세한 내용은 "[{% data variables.enterprise.prodname_managed_users %}의 기능 및 제한](#abilities-and-restrictions-of-enterprise-managed-users) 사항"을 참조하세요.

엔터프라이즈의 {% data variables.enterprise.prodname_managed_users %}의 사용자 이름과 표시 이름 및 전자 메일 주소와 같은 프로필 정보는 IdP를 통해 설정되며 사용자가 직접 변경할 수 없습니다. 자세한 내용은 "[사용자 이름 및 프로필 정보](#usernames-and-profile-information)"를 참조하세요.

엔터프라이즈 소유자는 {% data variables.product.prodname_dotcom %}에 대한 모든 {% data variables.enterprise.prodname_managed_users %}' 작업을 감사할 수 있습니다. 자세한 내용은 "[엔터프라이즈에 대한 감사 로그 이벤트](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise)"를 참조하세요.

{% data variables.product.prodname_emus %}를 사용하려면 {% data variables.product.prodname_emus %}가 사용하도록 설정된 별도의 엔터프라이즈 계정 유형이 필요합니다. 이 계정을 만드는 방법에 대한 자세한 내용은 "[관리되는 사용자가 있는 엔터프라이즈 정보](#about-enterprises-with-managed-users)"를 참조하세요.

{% note %}

**참고:** {% data variables.product.prodname_ghe_cloud %}를 사용한 ID 및 액세스 관리에는 여러 옵션이 있으며, {% data variables.product.prodname_emus %}가 모든 고객에게 가장 적합한 솔루션은 아닙니다. {% data variables.product.prodname_emus %}가 엔터프라이즈에 적합한지 여부에 대한 자세한 내용은 "[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)"를 참조하세요.

{% endnote %}

## 조직 멤버 자격 관리 정보

조직 멤버 자격을 수동으로 관리하거나 IdP 그룹을 사용하여 멤버 자격을 자동으로 업데이트할 수 있습니다. IdP를 통해 조직 멤버 자격을 관리하려면 구성원을 IdP 그룹에 추가해야 하며, IdP 그룹은 조직 내의 팀에 연결되어야 합니다. 조직 및 팀 멤버 자격을 자동으로 관리하는 방법에 대한 자세한 내용은 "[ID 공급자 그룹을 사용하여 팀 멤버 자격 관리](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)"를 참조하세요.

IdP 그룹을 통해 또는 수동으로 엔터프라이즈가 소유한 조직에 구성원을 추가하는 방법은 조직에서 구성원을 제거하는 방법을 결정합니다. 

- 구성원이 조직에 수동으로 추가된 경우 수동으로 제거해야 합니다. IdP의 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에서 할당을 취소하면 사용자가 일시 중단되지만 조직에서 제거되지는 않습니다.
- 사용자가 조직의 하나 이상의 팀에 매핑된 IdP 그룹에 추가되어 조직의 구성원이 된 경우 조직과 연결된 _모든_ 매핑된 IdP 그룹에서 사용자를 제거하면 조직에서 제거됩니다.

구성원이 조직에 추가된 방법을 검색하려면 형식별로 멤버 목록을 필터링할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 사용자 보기](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users)”를 참조하세요.

## ID 공급자 지원

{% data variables.product.prodname_emus %}는 다음 IdP{% ifversion oidc-for-emu %} 및 인증 방법을 지원합니다.

|                                  | SAML                                          | OIDC                                          |
|----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Azure Active Directory           | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %} |
| Okta                             | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## {% data variables.enterprise.prodname_managed_users %}의 기능 및 제한 사항

{% data variables.enterprise.prodname_managed_users_caps %}은(는) 엔터프라이즈 및 사용자 계정이 소유한 프라이빗 리포지토리 내의 프라이빗 및 내부 리포지토리에만 기여할 수 있습니다. {% data variables.enterprise.prodname_managed_users_caps %}은(는) 더 넓은 {% data variables.product.prodname_dotcom %} 커뮤니티에 읽기 전용으로 액세스할 수 있습니다. 사용자 및 콘텐츠에 대한 이러한 표시 유형 및 액세스 제한은 API 요청을 포함한 모든 요청에 ​​적용됩니다.

* {% data variables.enterprise.prodname_managed_users_caps %}은(는) 엔터프라이즈 외부의 조직 또는 리포지토리에 초대할 수 없으며 {% data variables.enterprise.prodname_managed_users %}을(를) 다른 기업에 초대할 수도 없습니다. 
* 외부 협력자는 {% data variables.product.prodname_emus %}에서 지원되지 않습니다.
* {% data variables.enterprise.prodname_managed_users_caps %}은(는) 엔터프라이즈 외부에서 이슈를 만들거나 요청을 끌어오거나, 주석을 달거나, 반응을 추가하거나, 스타, 시계 또는 포크 리포지토리를 만들 수 없습니다.
* {% data variables.enterprise.prodname_managed_users_caps %}은(는) {% data variables.product.prodname_dotcom_the_website %}의 모든 퍼블릭 리포지토리를 볼 수 있지만 엔터프라이즈 외부의 리포지토리에 코드를 푸시할 수는 없습니다.
* {% data variables.enterprise.prodname_managed_users_caps %} 및 만든 콘텐츠는 엔터프라이즈의 다른 멤버에게만 표시됩니다. 
* {% data variables.enterprise.prodname_managed_users_caps %}은(는) 엔터프라이즈 외부의 사용자를 팔로우할 수 없습니다.
* {% data variables.enterprise.prodname_managed_users_caps %}은(는) gists 또는 댓글을 작성할 수 없습니다.
* {% data variables.enterprise.prodname_managed_users_caps %}은(는) {% data variables.product.prodname_actions %}에 대한 시작 워크플로를 만들 수 없습니다.
* {% data variables.enterprise.prodname_managed_users_caps %}은(는) 사용자 계정에 {% data variables.product.prodname_github_apps %}을(를) 설치할 수 없습니다.
* 다른 {% 데이터 variables.product.prodname_dotcom %} 사용자는 공동 작업할 {% data variables.enterprise.prodname_managed_user %}을(를) 보거나, 언급하거나, 초대할 수 없습니다.
* {% data variables.enterprise.prodname_managed_users %}에서 사용자 계정이 소유한 리포지토리를 만들 수 있는지 여부를 선택할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)”을 참조하세요.
* {% data variables.enterprise.prodname_managed_users %}이(가) 사용자 계정이 소유한 리포지토리를 만들도록 허용하는 경우 프라이빗 리포지토리만 소유할 수 있으며 다른 엔터프라이즈 멤버만 사용자 소유 리포지토리에서 공동 작업하도록 초대할 수 있습니다.
* {% data reusables.enterprise-accounts.emu-forks %}
* 조직 및 엔터프라이즈 리포지토리 표시 유형 설정에 따라 {% data variables.enterprise.prodname_emu_enterprise %}이(가) 소유한 조직에서는 프라이빗 및 내부 리포지토리만 만들 수 있습니다. 
* {% data variables.enterprise.prodname_managed_users_caps %}은(는) {% data variables.product.prodname_pages %}의 사용이 제한됩니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 정보](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)”를 참조하세요.

## {% data variables.product.prodname_emus %} 시작

개발자가 {% data variables.product.prodname_ghe_cloud %}를 {% data variables.product.prodname_emus %}와 함께 사용하려면 먼저 일련의 구성 단계를 따라야 합니다.

1. {% data variables.product.prodname_emus %}를 사용하려면 {% data variables.product.prodname_emus %}가 사용하도록 설정된 별도의 엔터프라이즈 계정 유형이 필요합니다. {% data variables.product.prodname_emus %}를 사용해 보거나 기존 엔터프라이즈에서 마이그레이션하는 옵션에 대해 논의하려면 [{% data variables.product.prodname_dotcom %}의 영업 팀](https://enterprise.github.com/contact)에 문의하세요.
  
  GitHub 영업 팀의 연락처가 사용자와 협력하여 새 {% data variables.enterprise.prodname_emu_enterprise %}을(를) 만듭니다. 엔터프라이즈를 설정할 사용자의 이메일 주소와 엔터프라이즈 멤버의 사용자 이름 접미사로 사용할 짧은 코드를 제공해야 합니다. {% data reusables.enterprise-accounts.emu-shortcode %} 자세한 내용은 "[사용자 이름 및 프로필 정보](#usernames-and-profile-information)"를 참조하세요.
  
2. 엔터프라이즈가 만들어지면 {% data variables.product.prodname_dotcom %}에서 엔터프라이즈의 첫 번째 소유자가 될 엔터프라이즈 설정 사용자에 대한 암호를 선택하도록 초대하는 이메일을 받게 됩니다. 암호를 설정하는 경우 시크릿 또는 프라이빗 브라우징 창을 사용합니다. 설정 사용자는 엔터프라이즈에 대한 Single Sign-On 및 SCIM 프로비전 통합을 구성하는 데만 사용됩니다. SSO가 성공적으로 사용하도록 설정되면 엔터프라이즈 계정을 더 이상 관리할 수 없습니다. 설정 사용자의 사용자 이름은 접미사가 `_admin`인 엔터프라이즈의 짧은 코드입니다. 
  
  {% note %}
  
  {% data reusables.enterprise-accounts.emu-password-reset-session %}
  
  {% endnote %}
  
3. 설치 사용자로 로그인한 후에는 2단계 인증을 사용하도록 설정하는 것이 좋습니다. 자세한 내용은 “[2단계 인증 구성](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)”을 참조하세요.

1. 시작하려면 {% ifversion oidc-for-emu %}구성원이 인증되는 방법을 구성합니다. Azure Active Directory를 ID 공급자로 사용하는 경우 OIDC(OpenID Connect)와 SAML(Security Assertion Markup Language) 중에서 선택할 수 있습니다. CAP(조건부 액세스 정책)에 대한 지원을 포함하는 OIDC를 사용하는 것이 좋습니다. 한 테넌트에서 {% data variables.enterprise.prodname_managed_users %}을(를) 프로비전한 여러 엔터프라이즈가 필요한 경우 첫 번째 이후에 각 엔터프라이즈에 SAML을 사용해야 합니다. OKTA를 ID 공급자로 사용하는 경우 SAML을 사용하여 구성원을 인증할 수 있습니다.{% else %}엔터프라이즈용 SAML SSO를 사용할 수 있습니다. 자세한 내용은 "[Enterprise Managed Users에 대한 SAML Single Sign-On 구성](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)"을 참조하세요.{% endif %}
  
  {% ifversion oidc-for-emu %}
  
  시작하려면 선택한 인증 방법에 대한 가이드를 읽어보세요.
  
    - "[Enterprise Managed Users에 대한 OIDC 구성](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)"
    - "[Enterprise Managed Users에 대한 SAML Single Sign-On 구성](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)"
  
  {% endif %}
  
4. SSO를 구성한 후에는 SCIM 프로비전을 구성할 수 있습니다. SCIM은 ID 공급자가 {% data variables.product.prodname_dotcom_the_website %}에 {% data variables.enterprise.prodname_managed_users %}를 만드는 방법입니다. SCIM 프로비전 구성에 대한 자세한 내용은 "[Enterprise Managed Users에 대한 SCIM 프로비전 구성](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)"을 참조하세요.
  
5. 인증 및 프로비저닝이 구성되면 IdP 그룹을 팀과 동기화하여 {% data variables.enterprise.prodname_managed_users %}에 대한 조직 멤버 자격을 관리할 수 있습니다. 자세한 내용은 “[ID 공급자 그룹을 사용하여 팀 멤버 자격 관리](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)”를 참조하세요.

엔터프라이즈 구성원이 {% data variables.enterprise.prodname_managed_user %} 및 개인 계정 모두에서 {% data variables.location.product_location %}의 리포지토리에 기여하기 위해 하나의 워크스테이션을 사용해야 하는 경우 지원을 제공할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom_the_website %}에서 여러 사용자 계정을 가진 개발자 지원](#supporting-developers-with-multiple-user-accounts-on-githubcom)”을 참조하세요.

## {% data variables.enterprise.prodname_managed_user %}으로 인증

{% data variables.enterprise.prodname_managed_users_caps %}은(는) ID 공급자를 통해 인증해야 합니다. 인증하기 위해 {% data variables.enterprise.prodname_managed_user %}은(는) IdP 애플리케이션 포털을 방문하거나 {% data variables.product.prodname_dotcom_the_website %}의 로그인 페이지를 사용할 수 있습니다. 

기본적으로 인증되지 않은 사용자가 {% data variables.product.prodname_emus %}을(를) 사용하는 엔터프라이즈에 액세스하려고 하면 {% data variables.product.company_short %}에 404 오류가 표시됩니다. 엔터프라이즈 소유자는 필요에 따라 404 대신 SSO(Single Sign-On)로 자동 리디렉션을 사용하도록 설정할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 보안 설정에 대한 정책 적용](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)”을 참조하세요.

{% data reusables.enterprise-accounts.about-recovery-codes %} 자세한 내용은 “[엔터프라이즈에 대한 복구 코드 관리](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)를 참조하세요.

### {% data variables.product.prodname_dotcom_the_website %}을(를) 통해 {% data variables.enterprise.prodname_managed_user %}로 인증

1. [https://github.com/login](https://github.com/login)으로 이동합니다.
1. "사용자 이름 또는 이메일 주소" 텍스트 상자에서 밑줄과 짧은 코드를 포함한 사용자 이름을 입력합니다.
  ![로그인 양식을 보여 주는 스크린샷](/assets/images/help/enterprises/emu-login-username.png) 양식에서 사용자 이름을 인식하면 양식이 업데이트됩니다. 이 양식에서 암호를 입력할 필요가 없습니다.
1. ID 공급자로 계속 진행하려면 **ID 공급자로 로그인** 을 클릭합니다.
  !["ID 공급자로 로그인" 단추를 보여 주는 스크린샷](/assets/images/help/enterprises/emu-login-submit.png)

## 사용자 이름 및 프로필 정보

{% data variables.product.product_name %}은 IdP에서 제공하는 식별자를 정규화하여 각 사용자에 대한 사용자 이름을 자동으로 만듭니다. 자세한 내용은 "[외부 인증에 대한 사용자 이름 고려 사항](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)"을 참조하세요.

정규화 중에 IdP에서 제공하는 식별자의 고유한 부분이 제거되면 사용자를 프로비전할 때 충돌이 발생할 수 있습니다. 사용자 이름 충돌로 인해 사용자를 프로비전할 수 없는 경우 IdP에서 제공하는 사용자 이름을 수정해야 합니다. 자세한 내용은 "[사용자 이름 문제 해결"을 참조하세요.](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-problems)

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %} 

{% data variables.enterprise.prodname_managed_user %}의 프로필 이름 및 이메일 주소도 IdP에서 제공합니다. {% data variables.enterprise.prodname_managed_users_caps %}은(는) {% data variables.product.prodname_dotcom %}에서 프로필 이름 또는 이메일 주소를 변경할 수 없으며 IdP는 단일 전자 메일 주소만 제공할 수 있습니다.

## {% data variables.location.product_location %}에서 여러 사용자 계정을 가진 개발자 지원

팀의 사람 {% data variables.location.product_location %} 외부에 있는 {% data variables.enterprise.prodname_emu_enterprise %}의 리소스에 기여해야 할 수 있습니다. 예를 들어 회사의 오픈 소스 프로젝트에 대해 별도의 엔터프라이즈를 유지 관리하고 싶을 수 있습니다. {% data variables.enterprise.prodname_managed_user %}은(는) 공용 리소스에 기여할 수 없으므로 사용자는 이 작업에 대해 별도의 개인 계정을 유지 관리해야 합니다.

하나의 워크스테이션을 사용하여 {% data variables.location.product_location %}의 두 사용자 계정에서 기여해야 하는 사람 프로세스를 간소화하도록 Git을 구성할 수 있습니다. 자세한 내용은 “[여러 계정 관리](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)”를 참조하세요.
