---
title: Enterprise Managed Users 정보
shortTitle: About managed users
intro: You can centrally manage identity and access for your enterprise members on {% data variables.product.prodname_dotcom %} from your identity provider.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
- Accounts
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: 9ca2be64f3806cf8b7b449ea64532c5ae2b17782
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116607"
---
## <a name="about--data-variablesproductprodname_emus-"></a>{% data variables.product.prodname_emus %} 정보

{% data variables.product.prodname_emus %}를 사용하면 IdP(ID 공급자)를 통해 엔터프라이즈 멤버의 사용자 계정을 제어할 수 있습니다. SAML SSO(Single Sign-On)를 사용하여 인증을 간소화하고 엔터프라이즈 멤버에 대한 사용자 계정을 프로비전, 업데이트 및 프로비전 해제할 수 있습니다. IdP의 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에 할당된 사용자는 {% data variables.product.prodname_dotcom %}에서 새 사용자 계정으로 프로비전되고 엔터프라이즈에 추가됩니다. IdP에서 사용자 이름, 프로필 데이터, 팀 멤버 자격 및 리포지토리 액세스를 제어합니다.

IdP에서 사용자, 엔터프라이즈 소유자 또는 청구 관리자의 역할을 각 {% data variables.product.prodname_managed_user %}에 부여할 수 있습니다. {% data variables.product.prodname_managed_users_caps %}는 엔터프라이즈 내 조직을 소유할 수 있으며, 다른 {% data variables.product.prodname_managed_users %}를 조직 및 팀에 추가할 수 있습니다. 자세한 내용은 "[엔터프라이즈의 역할](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" 및 "[조직 정보](/organizations/collaborating-with-groups-in-organizations/about-organizations)"를 참조하세요.

{% data variables.product.prodname_managed_users %}가 조직 내 팀에 연결된 IdP 그룹에 추가되면 조직 멤버 자격을 수동으로 관리하거나 자동으로 업데이트할 수 있습니다. {% data variables.product.prodname_managed_user %}가 조직에 수동으로 추가되는 경우 IdP의 {% data variables.product.prodname_emu_idp_application %} 애플리케이션에서 할당을 취소하면 사용자가 일시 중단되지만 조직에서 제거되지는 않습니다. 조직 및 팀 멤버 자격을 자동으로 관리하는 방법에 대한 자세한 내용은 "[ID 공급자 그룹을 사용하여 팀 멤버 자격 관리](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)"를 참조하세요.

{% data variables.product.prodname_managed_users %} 액세스 권한과 엔터프라이즈 내 리포지토리에 기여할 수 있는 기능을 부여할 수 있지만, {% data variables.product.prodname_managed_users %}는 {% data variables.product.prodname_dotcom %}의 나머지 부분에서 공용 콘텐츠를 만들거나 다른 사용자, 조직 및 엔터프라이즈와 협업할 수 없습니다. 엔터프라이즈에 대해 프로비전된 {% data variables.product.prodname_managed_users %}는 엔터프라이즈 외부의 조직 또는 리포지토리에 초대할 수 없으며, {% data variables.product.prodname_managed_users %}를 다른 엔터프라이즈에 초대할 수도 없습니다. 외부 협력자는 {% data variables.product.prodname_emus %}에서 지원되지 않습니다.

엔터프라이즈의 {% data variables.product.prodname_managed_users %}에 대한 사용자 이름과 해당 프로필 정보(예: 표시 이름 및 이메일 주소)는 IdP를 통해 설정되며 사용자가 직접 변경할 수 없습니다. 자세한 내용은 "[사용자 이름 및 프로필 정보](#usernames-and-profile-information)"를 참조하세요.

{% data reusables.enterprise-accounts.emu-forks %}

엔터프라이즈 소유자는 {% data variables.product.prodname_dotcom %}에 대한 모든 {% data variables.product.prodname_managed_users %} 작업을 감사할 수 있습니다.

{% data variables.product.prodname_emus %}를 사용하려면 {% data variables.product.prodname_emus %}가 사용하도록 설정된 별도의 엔터프라이즈 계정 유형이 필요합니다. 이 계정을 만드는 방법에 대한 자세한 내용은 "[관리되는 사용자가 있는 엔터프라이즈 정보](#about-enterprises-with-managed-users)"를 참조하세요.


## <a name="identity-provider-support"></a>ID 공급자 지원

{% data variables.product.prodname_emus %}에서 지원하는 IdP는 다음과 같습니다.

{% data reusables.enterprise-accounts.emu-supported-idps %}

## <a name="abilities-and-restrictions-of--data-variablesproductprodname_managed_users-"></a>{% data variables.product.prodname_managed_users %}의 기능 및 제한 사항

{% data variables.product.prodname_managed_users_caps %}는 엔터프라이즈 내의 프라이빗 및 내부 리포지토리와 사용자 계정에서 소유한 프라이빗 리포지토리에만 기여할 수 있습니다. {% data variables.product.prodname_managed_users_caps %}는 더 광범위한 {% data variables.product.prodname_dotcom %} 커뮤니티에 읽기 전용으로 액세스할 수 있습니다. 사용자 및 콘텐츠에 대한 이러한 표시 유형 및 액세스 제한은 API 요청을 포함한 모든 요청에 ​​적용됩니다.

* {% data variables.product.prodname_managed_users_caps %}는 문제를 만들거나 요청을 끌어오거나 댓글을 달거나 반응을 추가할 수 없으며, 엔터프라이즈 외부의 리포지토리에 별표를 표시하거나 이러한 리포지토리를 감시하거나 포크할 수도 없습니다.
* {% data variables.product.prodname_managed_users_caps %}는 {% data variables.product.prodname_dotcom_the_website %}의 모든 퍼블릭 리포지토리를 볼 수 있지만, 코드를 엔터프라이즈 외부의 리포지토리에 푸시할 수는 없습니다.
* {% data variables.product.prodname_managed_users_caps %} 및 이러한 사용자가 만드는 콘텐츠는 엔터프라이즈의 다른 멤버에게만 표시됩니다. 
* {% data variables.product.prodname_managed_users_caps %}는 엔터프라이즈 외부의 사용자를 팔로우할 수 없습니다.
* {% data variables.product.prodname_managed_users_caps %}는 gist를 만들거나 gist에 대한 댓글을 작성할 수 없습니다.
* {% data variables.product.prodname_managed_users_caps %}는 {% data variables.product.prodname_github_apps %}를 사용자 계정에 설치할 수 없습니다.
* 다른 {% data variables.product.prodname_dotcom %} 사용자는 {% data variables.product.prodname_managed_user %}를 보거나 언급하거나 초대하여 협업을 수행할 수 없습니다.
* {% data variables.product.prodname_managed_users_caps %}는 프라이빗 리포지토리만 소유할 수 있으며, {% data variables.product.prodname_managed_users %}는 다른 엔터프라이즈 멤버만 자신이 소유한 리포지토리에서 협업하도록 초대할 수 있습니다.
* 조직 및 엔터프라이즈 리포지토리 표시 유형 설정에 따라 {% data variables.product.prodname_emu_enterprise %}가 소유한 조직에서 프라이빗 및 내부 리포지토리만 만들 수 있습니다. 
* {% data variables.product.prodname_managed_users_caps %}는 {% data variables.product.prodname_pages %}의 사용이 제한됩니다. 자세한 내용은 “[{% data variables.product.prodname_pages %} 정보](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)”를 참조하세요.

## <a name="about-enterprises-with-managed-users"></a>관리되는 사용자가 있는 엔터프라이즈 정보

{% data variables.product.prodname_emus %}를 사용하려면 {% data variables.product.prodname_emus %}가 사용하도록 설정된 별도의 엔터프라이즈 계정 유형이 필요합니다. {% data variables.product.prodname_emus %}를 사용해 보거나 기존 엔터프라이즈에서 마이그레이션하는 옵션에 대해 논의하려면 [{% data variables.product.prodname_dotcom %}의 영업 팀](https://enterprise.github.com/contact)에 문의하세요.

GitHub 영업 팀의 담당자가 사용자와 협력하여 새 {% data variables.product.prodname_emu_enterprise %}를 만듭니다. 엔터프라이즈를 설정할 사용자의 이메일 주소와 엔터프라이즈 멤버의 사용자 이름 접미사로 사용할 짧은 코드를 제공해야 합니다. {% data reusables.enterprise-accounts.emu-shortcode %} 자세한 내용은 "[사용자 이름 및 프로필 정보](#usernames-and-profile-information)"를 참조하세요.

엔터프라이즈가 만들어지면 {% data variables.product.prodname_dotcom %}에서 엔터프라이즈의 첫 번째 소유자가 될 엔터프라이즈 설정 사용자에 대한 암호를 선택하도록 초대하는 이메일을 받게 됩니다. 암호를 설정하는 경우 시크릿 또는 프라이빗 브라우징 창을 사용합니다. 설정 사용자는 엔터프라이즈에 대한 SAML Single Sign-On 및 SCIM 프로비전 통합을 구성하는 데만 사용됩니다. SAML이 성공적으로 사용하도록 설정되면 엔터프라이즈 계정을 더 이상 관리할 수 없습니다.

설정 사용자의 사용자 이름은 접미사가 `_admin`인 엔터프라이즈의 짧은 코드입니다. 설정 사용자에 로그인하면 엔터프라이즈에 대한 SAML SSO를 구성하여 시작할 수 있습니다. 자세한 내용은 “[Enterprise Managed Users에 대한 SAML Single Sign-On 구성](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)”을 참조하세요.

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

## <a name="authenticating-as-a--data-variablesproductprodname_managed_user-"></a>{% data variables.product.prodname_managed_user %}로 인증

{% data variables.product.prodname_managed_users_caps %}는 ID 공급자를 통해 인증해야 합니다. 인증하기 위해 {% data variables.product.prodname_managed_user %}가 IdP 애플리케이션 포털을 방문하거나 {% data variables.product.prodname_dotcom_the_website %}의 로그인 페이지를 사용할 수 있습니다.

{% data reusables.enterprise-accounts.about-recovery-codes %} 자세한 내용은 “[엔터프라이즈에 대한 복구 코드 관리](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)를 참조하세요.

### <a name="authenticating-as-a--data-variablesproductprodname_managed_user--via--data-variablesproductprodname_dotcom_the_website-"></a>{% data variables.product.prodname_dotcom_the_website %}를 통해 {% data variables.product.prodname_managed_user %}로 인증

1. [https://github.com/login](https://github.com/login)으로 이동합니다.
1. "사용자 이름 또는 이메일 주소" 텍스트 상자에서 밑줄과 짧은 코드를 포함한 사용자 이름을 입력합니다.
  ![로그인 양식을 보여 주는 스크린샷](/assets/images/help/enterprises/emu-login-username.png) 양식에서 사용자 이름을 인식하면 양식이 업데이트됩니다. 이 양식에서 암호를 입력할 필요가 없습니다.
1. ID 공급자로 계속 진행하려면 **ID 공급자로 로그인** 을 클릭합니다.
  !["ID 공급자로 로그인" 단추를 보여 주는 스크린샷](/assets/images/help/enterprises/emu-login-submit.png)

## <a name="usernames-and-profile-information"></a>사용자 이름 및 프로필 정보

{% data variables.product.product_name %}은 IdP에서 제공하는 식별자를 정규화하여 각 사용자에 대한 사용자 이름을 자동으로 만듭니다. 자세한 내용은 "[외부 인증에 대한 사용자 이름 고려 사항](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)"을 참조하세요.

정규화 중에 IdP에서 제공하는 식별자의 고유한 부분이 제거되면 사용자를 프로비전할 때 충돌이 발생할 수 있습니다. 사용자 이름 충돌로 인해 사용자를 프로비전할 수 없는 경우 IdP에서 제공하는 사용자 이름을 수정해야 합니다. 자세한 내용은 "[사용자 이름 충돌 해결](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-conflicts)"을 참조하세요.

{% data variables.product.prodname_managed_user %}의 프로필 이름과 이메일 주소도 IdP에서 제공합니다. {% data variables.product.prodname_managed_users_caps %}는 {% data variables.product.prodname_dotcom %}에서 프로필 이름 또는 이메일 주소를 변경할 수 없습니다.
