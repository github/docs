---
title: Enterprise Managed Users에 대한 SCIM 프로비저닝 구성
shortTitle: Provisioning managed users
intro: You can configure your identity provider to provision new users and manage their membership in your enterprise and teams.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
- Accounts
- Enterprise
ms.openlocfilehash: 7bd9d539218492c474f7a530636ac7719ff14f44
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116604"
---
## <a name="about-provisioning-for--data-variablesproductprodname_emus-"></a>{% data variables.product.prodname_emus %}에 대한 프로비저닝 정보

엔터프라이즈 구성원에 대한 사용자 계정을 만들고, 관리하고, 비활성화하려면 {% data variables.product.prodname_emus %}에 대한 프로비저닝을 구성해야 합니다. {% data variables.product.prodname_emus %}에 대한 프로비저닝을 구성할 때 ID 공급자의 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 할당된 사용자는 SCIM을 통해 {% data variables.product.prodname_dotcom %}에서 새 사용자 계정으로 프로비전되고 사용자는 엔터프라이즈에 추가됩니다. 

IdP에서 사용자 ID와 관련된 정보를 업데이트하면 IdP가 GitHub.com의 사용자 계정을 업데이트합니다. {% data variables.product.prodname_emu_idp_application %} 애플리케이션에서 사용자를 할당 취소하거나 IdP에서 사용자 계정을 비활성화하는 경우 IdP는 {% data variables.product.prodname_dotcom %}과 통신하여 SAML 세션을 무효화하고 멤버의 계정을 사용하지 않도록 설정합니다. 비활성화된 계정의 정보가 유지 관리되고 해당 사용자 이름이 짧은 코드가 추가된 원래 사용자 이름의 해시로 변경됩니다. {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 사용자를 다시 할당하거나 IdP에서 해당 계정을 다시 활성화하면 {% data variables.product.prodname_managed_user %}의 {% data variables.product.prodname_dotcom %} 계정이 다시 활성화되고 사용자 이름이 복원됩니다.

IdP의 그룹을 사용하여 엔터프라이즈 조직 내에서 팀 멤버 자격을 관리할 수 있으므로 IdP를 통해 리포지토리 액세스 및 권한을 구성할 수 있습니다. 자세한 내용은 “[ID 공급자 그룹을 사용하여 팀 멤버 자격 관리](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)”를 참조하세요.

## <a name="prerequisites"></a>필수 조건

{% data variables.product.prodname_emus %}에 대한 프로비저닝을 구성하려면 먼저 SAML Single Sign-On을 구성해야 합니다. 자세한 내용은 “[Enterprise Managed Users에 대한 SAML Single Sign-On 구성](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)”을 참조하세요.

## <a name="creating-a-personal-access-token"></a>개인용 액세스 토큰 만들기

{% data variables.product.prodname_emu_enterprise %}에 대한 프로비저닝을 구성하려면 설치 사용자에 속하는 **admin:enterprise** 범위를 사용하는 개인용 액세스 토큰이 필요합니다.

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

## <a name="configuring-provisioning-for--data-variablesproductprodname_emus-"></a>{% data variables.product.prodname_emus %}에 대한 프로비저닝 구성

개인 액세스 토큰을 만들고 안전하게 저장한 후 ID 공급자에서 프로비저닝을 구성할 수 있습니다.

{% data reusables.scim.emu-scim-rate-limit %}

{% data variables.product.prodname_emu_enterprise %}에 대한 사용자를 프로비전하도록 Azure Active Directory를 구성하려면 Azure AD 설명서의 [자습서: 자동 사용자 프로비저닝을 위한 GitHub Enterprise Managed User 구성](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial)을 참조하세요.

{% data variables.product.prodname_emu_enterprise %}에 대한 사용자를 프로비전하도록 OKTA를 구성하려면 "[OKTA를 사용하여 Enterprise Managed Users를 위한 SCIM 프로비저닝 구성](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)"을 참조하세요.

