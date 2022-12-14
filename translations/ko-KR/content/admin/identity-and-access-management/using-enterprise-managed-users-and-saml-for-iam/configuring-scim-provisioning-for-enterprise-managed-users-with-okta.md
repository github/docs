---
title: OKTA를 통한 Enterprise Managed Users에 대한 SCIM 프로비저닝 구성
shortTitle: Set up provisioning with Okta
intro: You can provision new users and manage their membership of your enterprise and teams using Okta as your identity provider.
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
- /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
- Accounts
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: 6c143b8ef729ab7343cf14613acf5f528384135c
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145112668"
---
## <a name="about-provisioning-with-okta"></a>OKTA를 통한 프로비저닝 정보

OKTA와 함께 {% data variables.product.prodname_emus %}를 ID 공급자로 사용하여 새 계정을 프로비전하고, 엔터프라이즈 구성원 자격을 관리하고, 엔터프라이즈의 조직을 위한 팀 구성원 자격을 관리할 수 있습니다. {% data variables.product.prodname_emus %}에 대한 프로비저닝의 자세한 내용은 “[Enterprise Managed Users에 대한 SCIM 프로비저닝 구성](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users)”을 참조하세요.

OKTA를 사용하여 프로비저닝을 구성하려면 SAML Single Sign-On을 구성해야 합니다. 자세한 내용은 “[Enterprise Managed Users에 대한 SAML Single Sign-On 구성](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)”을 참조하세요.

OKTA를 사용하여 프로비저닝을 구성하려면 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에서 엔터프라이즈 이름을 설정하고 설치 사용자의 개인용 액세스 토큰을 입력해야 합니다. 그런 다음, OKTA에서 사용자 프로비저닝을 시작할 수 있습니다.

## <a name="supported-features"></a>지원되는 기능

{% data variables.product.prodname_emus %}는 OKTA의 많은 프로비저닝 기능을 지원합니다.

| 기능 | 설명 |
| --- | --- |
| 새 사용자 푸시 | OKTA의 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 할당된 사용자는 {% data variables.product.product_name %}의 엔터프라이즈에서 자동으로 만들어집니다. |
| 프로필 업데이트 푸시 | OKTA의 사용자 프로필에 대한 업데이트는 {% data variables.product.product_name %}으로 푸시됩니다. |
| 그룹 푸시 | {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 그룹 푸시로 할당된 OKTA 그룹은 {% data variables.product.product_name %}의 엔터프라이즈에서 자동으로 만들어집니다. |
| 사용자 비활성화 푸시 | OKTA에서 {% data variables.product.prodname_emu_idp_application %} 애플리케이션의 사용자를 할당 취소하면 {% data variables.product.product_name %}에서 사용자가 비활성화됩니다. 사용자는 로그인할 수 없지만 사용자의 정보는 유지됩니다. |
| 사용자 다시 활성화 | OKTA 계정이 다시 활성화되고 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 다시 할당된 OKTA의 사용자는 활성화됩니다. |

{% note %}

**참고:** {% data variables.product.prodname_emus %}는 사용자 이름 수정을 지원하지 않습니다.

{% endnote %}

## <a name="setting-your-enterprise-name"></a>엔터프라이즈 이름 설정

{% data variables.product.prodname_emu_enterprise %}를 만든 후에는 OKTA에서 엔터프라이즈 이름을 설정하여 프로비저닝을 구성할 수 있습니다.

1. OKTA에서 {% data variables.product.prodname_emu_idp_application %} 애플리케이션으로 이동합니다.
1. **로그온** 탭을 클릭합니다.
1. 변경하려면 **편집** 을 클릭합니다.
1. “고급 로그온 설정”의 “Enterprise 이름” 텍스트 상자에 엔터프라이즈 이름을 입력합니다. 예를 들어 `https://github.com/enterprises/octoinc`에서 엔터프라이즈에 액세스하는 경우 엔터프라이즈 이름은 “octoinc”입니다.
![OKTA의 엔터프라이즈 이름 필드의 스크린샷](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. 엔터프라이즈 이름을 저장하려면 **저장** 을 클릭합니다.

## <a name="configuring-provisioning"></a>프로비저닝 구성

엔터프라이즈 이름을 설정한 후 프로비저닝 설정을 계속 구성할 수 있습니다.

프로비저닝을 구성하려면 사용자 이름이 **@<em>SHORT-CODE</em>_admin** 인 설치 사용자가 **admin:enterprise** 범위의 개인용 액세스 토큰을 제공해야 합니다. 새 토큰을 만드는 방법에 대한 자세한 내용은 “[개인용 액세스 토큰 만들기](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)”를 참조하세요.

1. OKTA에서 {% data variables.product.prodname_emu_idp_application %} 애플리케이션으로 이동합니다.
1. 클릭 된 **프로 비전** 탭 합니다.
1. 설정 메뉴에서 **통합** 을 클릭합니다.
1. 변경하려면 **편집** 을 클릭합니다.
1. **API 통합 사용** 을 선택합니다.
1. “API 토큰” 필드에 설치 사용자에 속한 **admin:enterprise** 범위를 사용하여 개인용 액세스 토큰을 입력합니다.
![OKTA의 API 토큰 필드를 보여 주는 스크린샷](/assets/images/help/enterprises/okta-emu-token.png)
1. **테스트 API 자격 증명** 을 클릭합니다. 테스트에 성공하면 확인 메시지가 화면 맨 위에 표시됩니다.
1. 토큰을 저장하려면 **저장** 을 클릭합니다.
1. 설정 메뉴에서 **앱으로** 를 클릭합니다.
![OKTA의 앱으로 이동 메뉴 항목을 보여 주는 스크린샷](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. “앱으로 프로비저닝”의 오른쪽에서 변경 내용을 허용하려면 **편집** 을 클릭합니다.
1. **사용자 만들기**, **사용자 특성 업데이트** 및 **사용자 비활성화** 에 대해 **사용** 을 선택합니다.
![OKTA의 프로비저닝 옵션을 보여 주는 스크린샷](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. 프로비저닝 구성을 완료하려면 **저장** 을 클릭합니다.

## <a name="assigning-users-and-groups"></a>사용자 및 그룹 할당

SAML SSO 및 프로비저닝을 구성한 후에는 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 사용자를 할당하여 {% data variables.product.prodname_dotcom_the_website %}에서 새 사용자를 프로비전할 수 있습니다. 

{% data reusables.scim.emu-scim-rate-limit %}

애플리케이션에 그룹을 할당하고 OKTA의 “그룹 푸시” 탭에 추가하여 조직 구성원 자격을 자동으로 관리할 수도 있습니다. 그룹이 성공적으로 프로비저닝되면 엔터프라이즈 조직의 팀에 연결할 수 있습니다. 팀 관리에 대한 자세한 내용은 “[ID 공급자 그룹을 사용하여 팀 구성원 자격 관리](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)”를 참조하세요.

사용자를 할당할 때 {% data variables.product.prodname_emu_idp_application %} 애플리케이션의 “역할” 특성을 사용하여 {% data variables.product.product_name %}에서 엔터프라이즈의 사용자 역할을 설정할 수 있습니다. 역할에 대한 자세한 내용은 “[엔터프라이즈의 역할](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)”을 참조하세요.

![OKTA에서 프로비전된 사용자에 대한 역할 옵션을 보여 주는 스크린샷](/assets/images/help/enterprises/okta-emu-user-role.png)
