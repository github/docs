---
title: Enterprise Managed Users에 대한 SCIM 프로비저닝 구성
shortTitle: Provisioning managed users
intro: 새 사용자를 프로비저닝하고 엔터프라이즈 및 팀의 멤버 자격을 관리하도록 ID 공급자를 구성할 수 있습니다.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
ms.openlocfilehash: 3cf1f917f0bfd0e02a1b712958f8d72a041b7281
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160698'
---
## {% data variables.product.prodname_emus %}에 대한 프로비저닝 정보

엔터프라이즈 구성원에 대한 사용자 계정을 만들고, 관리하고, 비활성화하려면 {% data variables.product.prodname_emus %}에 대한 프로비저닝을 구성해야 합니다. 

{% data variables.product.prodname_emus %}에 대한 프로비저닝을 구성한 후 ID 공급자의 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 할당된 사용자는 SCIM을 통해 {% data variables.product.prodname_dotcom %}에서 새 {% data variables.enterprise.prodname_managed_users %}로 프로비전되고 {% data variables.enterprise.prodname_managed_users %}는 엔터프라이즈에 추가됩니다. 애플리케이션에 그룹을 할당하면 그룹 내의 모든 사용자가 새 {% 데이터 variables.enterprise.prodname_managed_users %}로 프로비전됩니다.

IdP에서 사용자 ID와 연결된 정보를 업데이트하면 IdP가 {% data variables.product.prodname_dotcom_the_website %}에서 사용자의 계정을 업데이트합니다. {% data variables.product.prodname_emu_idp_application %} 애플리케이션에서 사용자를 할당 취소하거나 IdP에서 사용자 계정을 비활성화하는 경우 IdP는 {% data variables.product.prodname_dotcom %}과 통신하여 세션을 무효화하고 멤버의 계정을 사용하지 않도록 설정합니다. 비활성화된 계정의 정보가 유지 관리되고 해당 사용자 이름이 짧은 코드가 추가된 원래 사용자 이름의 해시로 변경됩니다. 사용자를 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 다시 할당하거나 IdP에서 계정을 다시 활성화하면 {% data variables.product.prodname_dotcom %}의 {% data variables.enterprise.prodname_managed_user %}이 다시 활성화되고 사용자 이름이 복원됩니다.

IdP의 그룹을 사용하여 엔터프라이즈 조직 내에서 팀 멤버 자격을 관리할 수 있으므로 IdP를 통해 리포지토리 액세스 및 권한을 구성할 수 있습니다. 자세한 내용은 “[ID 공급자 그룹을 사용하여 팀 멤버 자격 관리](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)”를 참조하세요.

## 필수 조건

{% data variables.product.prodname_emus %}에 대한 프로비저닝을 구성하려면 먼저 SAML{% ifversion oidc-for-emu %} 또는 OIDC{% endif %} Single Sign-On을 구성해야 합니다. {% ifversion oidc-for-emu %}

- OIDC 구성에 대한 자세한 내용은 “[엔터프라이즈 관리형 사용자에 대한 OIDC 구성](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)”을 참조하세요.
- {% endif %}SAML 구성에 대한 자세한 내용은 “[엔터프라이즈 관리형 사용자에 대한 SAML Single Sign-On 구성](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)”을 참조하세요.

## {% data variables.product.pat_generic %} 만들기

{% data variables.enterprise.prodname_emu_enterprise %}에 대한 프로비저닝을 구성하려면 설치 사용자에 속하는 **admin:enterprise** 범위가 있는 {% data variables.product.pat_v1 %}이 필요합니다.

{% warning %}

**경고:** 토큰이 만료되거나 프로비전된 사용자가 토큰을 만드는 경우 SCIM 프로비저닝이 예기치 않게 작동을 중지할 수 있습니다. 설정 사용자로 로그인하는 동안 토큰을 만들고 토큰 만료가 "만료 없음"으로 설정되어 있는지 확인합니다.

{% endwarning %}

1. 사용자 이름 **@<em>SHORT-CODE</em>_admin** 을 사용하여 새 엔터프라이즈의 설치 사용자로 {% data variables.product.prodname_dotcom_the_website %}에 로그인합니다.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
1. **참고** 아래에서 토큰에 설명이 포함된 이름을 지정합니다.
   ![토큰의 이름을 보여 주는 스크린샷](/assets/images/help/enterprises/emu-pat-name.png)
1. **만료** 드롭다운 메뉴를 선택한 다음, **만료 없음** 을 클릭합니다.
   ![만료 없이 설정된 토큰 만료를 보여 주는 스크린샷](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. **admin:enterprise** 범위를 선택합니다.
   ![admin:enterprise 범위를 보여 주는 스크린샷](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. **토큰 생성** 을 클릭합니다.
   ![토큰 생성 단추](/assets/images/help/settings/generate_token.png)
1. 토큰을 클립보드에 복사하려면 {% octicon "paste" aria-label="The copy icon" %}을 클릭합니다.
   ![새로 만든 토큰](/assets/images/help/settings/personal_access_tokens.png)
2. 나중에 사용할 토큰을 저장하려면 암호 관리자에 새 토큰을 안전하게 저장합니다.

## {% data variables.product.prodname_emus %}에 대한 프로비저닝 구성

{% data variables.product.pat_generic %}을(를) 만들고 안전하게 저장한 후에는 ID 공급자에서 프로비저닝을 구성할 수 있습니다. 

{% data reusables.scim.emu-scim-rate-limit %}

프로비저닝을 구성하려면 아래 표의 적절한 링크를 따릅니다.

| ID 공급자 | SSO 메서드 | 자세한 정보 | | |---|---|---|{% ifversion oidc-for-emu %} | Azure AD | OIDC | Azure AD 설명서의 [자습서: 자동 사용자 프로비저닝을 위한 GitHub 엔터프라이즈 관리형 사용자(OIDC) 구성](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) |{% endif %} | Azure AD | SAML | Azure AD 설명서의 [자습서: 자동 사용자 프로비저닝을 위한 GitHub 엔터프라이즈 관리형 사용자 구성](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) | | Okta | SAML | [Okta를 사용하여 엔터프라이즈 관리형 사용자를 위한 SCIM 프로비저닝 구성](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta) |

{% note %}

**참고:** Azure AD 중첩된 그룹 프로비저닝을 지원하지 않습니다. 자세한 내용은 [Azure Active Directory에서 애플리케이션 프로비저닝이 작동하는 방식](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/how-provisioning-works#assignment-based-scoping)을 참조하세요.

{% endnote %}
