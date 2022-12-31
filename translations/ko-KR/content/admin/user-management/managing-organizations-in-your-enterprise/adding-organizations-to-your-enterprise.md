---
title: 엔터프라이즈에 조직 추가
intro: '새 조직을 만들거나, 기존 조직을 초대하거나, 다른 엔터프라이즈 계정에서 조직을 이전하여 엔터프라이즈 내에서 관리할 조직을 추가할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Add organizations
permissions: Enterprise owners can add organizations to an enterprise.
ms.openlocfilehash: 7b5627eb89e7e5356716a9cd2a9dfe03fd455270
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127621'
---
## 엔터프라이즈 계정에 조직 추가 정보

엔터프라이즈 계정이 조직을 소유할 수 있습니다. 엔터프라이즈 멤버는 조직 내 관련 프로젝트에서 협업할 수 있습니다. 자세한 내용은 “[조직 정보](/organizations/collaborating-with-groups-in-organizations/about-organizations)”를 참조하세요.

엔터프라이즈 계정에 새 조직을 추가할 수 있습니다. {% data variables.product.prodname_emus %}을(를) 사용하지 않는 경우 {% data variables.location.product_location %}의 기존 조직을 엔터프라이즈에 추가할 수 있습니다. {% data variables.enterprise.prodname_emu_enterprise %}의 기존 조직을 다른 엔터프라이즈에 추가할 수 없습니다.

{% data reusables.enterprise.create-an-enterprise-account %} 자세한 내용은 “[엔터프라이즈 계정 만들기](/admin/overview/creating-an-enterprise-account)”를 참조하세요.

기존 조직을 엔터프라이즈에 추가한 후에도 동일한 URL의 구성원은 조직의 리소스에 계속 액세스할 수 있으며 다음과 같은 변경 내용이 적용됩니다.

- 조직의 구성원은 엔터프라이즈의 구성원이 되고 {% data variables.product.company_short %}는 조직의 사용량에 대해 엔터프라이즈 계정에 요금을 청구합니다. 엔터프라이즈 계정에 새 구성원을 수용할 수 있는 충분한 라이선스가 있는지 확인해야 합니다. 자세한 내용은 “[엔터프라이즈에 대한 청구 정보](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”를 참조하세요.
- 엔터프라이즈 소유자는 조직 내에서 자신의 역할을 관리할 수 있습니다. 자세한 내용은 “[엔터프라이즈가 소유한 조직에서 역할 관리](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)”를 참조하세요.
- 엔터프라이즈에 적용되는 모든 정책이 조직에 적용됩니다. 자세한 내용은 “[엔터프라이즈 정책 정보](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)”를 참조하세요.
- 엔터프라이즈 계정에 대해 SAML SSO가 구성된 경우 엔터프라이즈의 SAML 구성이 조직에 적용됩니다. 조직에서 SAML SSO를 사용하는 경우 엔터프라이즈 계정의 구성이 조직의 구성을 대체합니다. 엔터프라이즈 계정에는 SCIM을 사용할 수 없으므로 조직에서 SCIM을 사용할 수 없습니다. 자세한 내용은 “[엔터프라이즈에 대한 SAML Single Sign-On 구성](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)” 및 “[조직에서 엔터프라이즈 계정으로 SAML 구성 전환](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”을 참조하세요.
- SAML SSO가 조직에 대해 구성된 경우 구성원의 기존 {% 데이터 variables.product.pat_generic %} 또는 조직의 리소스에 액세스할 수 있는 권한이 부여된 SSH 키는 동일한 리소스에 액세스할 수 있는 권한이 부여됩니다. 엔터프라이즈가 소유한 추가 조직에 액세스하려면 구성원이 {% data variables.product.pat_generic %} 또는 키에 권한을 부여해야 합니다. 자세한 내용은 "[SAML Single Sign-On에 사용할 {% data variables.product.pat_generic %} 권한 부여](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" 및 "[SAML Single Sign-On에 사용할 SSH 키 권한 부여](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"를 참조하세요.
- 조직이 {% data variables.product.prodname_github_connect %}을 사용해 {% data variables.product.prodname_ghe_server %} 또는 {% data variables.product.prodname_ghe_managed %}에 연결된 경우 조직을 엔터프라이즈에 추가해도 연결은 업데이트되지 않습니다. {% data variables.product.prodname_github_connect %} 기능은 더 이상 조직에 작동하지 않습니다. {% data variables.product.prodname_github_connect %}를 계속 사용하려면 기능을 사용하지 않도록 설정한 다음 다시 사용하도록 설정해야 합니다. 자세한 내용은 다음 문서를 참조하세요.

  - {% data variables.product.prodname_ghe_server %} 설명서의 “[{% data variables.product.prodname_github_connect %} 관리](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)”
  - {% data variables.product.prodname_ghe_managed %} 설명서의 “[{% data variables.product.prodname_github_connect %} 관리](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)”
- 조직에서 청구된 {% data variables.product.prodname_marketplace %} 앱을 사용한 경우 조직은 계속해서 앱을 사용할 수 있지만 공급업체에 직접 지불해야 합니다. 자세한 내용은 앱 공급업체에 문의하세요.
- 모든 쿠폰은 조직에서 제거됩니다. 쿠폰을 다시 적용하려면 [영업 팀에 문의하세요](https://github.com/enterprise/contact).

## 엔터프라이즈 계정에서 조직 만들기

엔터프라이즈 계정 설정 내에서 만든 새 조직은 엔터프라이즈 계정의 {% data variables.product.prodname_ghe_cloud %} 구독에 포함됩니다.

엔터프라이즈 계정이 소유한 조직을 만드는 엔터프라이즈 소유자는 자동으로 조직 소유자가 됩니다. 조직 소유자에 대한 자세한 내용은 “[조직 내 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.

{% data reusables.enterprise-accounts.access-enterprise %}
2. **조직** 탭에서 조직 목록 위에 있는 **새 조직** 을 클릭합니다.
  ![새 조직 단추](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. “조직 이름” 아래에 사용자 조직 이름을 입력합니다.
  ![새 조직 이름 입력 필드](/assets/images/help/business-accounts/new-organization-name-field.png)
4. **조직 만들기** 를 클릭합니다.
5. “소유자 초대”에서 조직 소유자가 되도록 초대할 사용자의 사용자 이름을 입력하고 **초대** 를 클릭합니다.
  ![조직 소유자 검색 필드 및 초대 단추](/assets/images/help/business-accounts/invite-org-owner.png)
6. **Finish** 를 클릭합니다.

## 엔터프라이즈 계정에 가입하도록 조직 초대

엔터프라이즈 소유자는 엔터프라이즈 계정에 가입하도록 기존 조직을 초대할 수 있습니다. 초대하려는 조직이 이미 다른 엔터프라이즈 계정이 소유하고 있는 경우 두 엔터프라이즈 계정의 소유자이거나 이전 엔터프라이즈가 먼저 조직의 소유권을 포기해야 합니다. 자세한 내용은 “[엔터프라이즈에서 조직 제거](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)”를 참조하세요. 

{% data reusables.enterprise-accounts.access-enterprise %}
1. **조직** 탭에서 조직 목록 위에 있는 **조직 초대** 를 클릭합니다.
![조직 초대](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. "조직 이름"에서 초대할 조직의 이름을 입력하기 시작하고 드롭다운 목록에 표시되면 선택합니다.
![조직 검색](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. **조직 초대** 를 클릭합니다.
5. 조직 소유자는 엔터프라이즈에 가입하도록 초대하는 메일을 받게 됩니다. 하나 이상의 소유자가 초대를 수락해야 프로세스를 계속 진행할 수 있습니다. 소유자가 승인하기 전에는 언제든지 초대를 취소하거나 다시 보낼 수 있습니다.
![취소 또는 다시 보내기](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. 조직 소유자가 초대를 승인한 후에는 보류 중인 초대 목록에서 해당 상태를 볼 수 있습니다.
![보류 중인 초대](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. 전송을 완료하려면 **승인을** 클릭합니다.
![초대 승인](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)

## 엔터프라이즈 계정 간에 조직 이전

엔터프라이즈 소유자는 엔터프라이즈 계정 간에 기존 조직을 이전할 수 있습니다. 두 엔터프라이즈 계정의 엔터프라이즈 소유자여야 합니다. 

{% note %}

**참고:** {% data variables.enterprise.prodname_emu_enterprise %}에서 기존 조직을 전송할 수 없습니다.  

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. 이전하려는 조직 옆에 있는 {% octicon "gear" width="16" aria-label="Gear" %} 드롭다운을 선택한 다음 **조직 전송** 을 클릭합니다. 
![전송 단추의 스크린샷](/assets/images/help/business-accounts/org-transfer-button.png)
1. **엔터프라이즈 선택** 드롭다운 메뉴를 선택하고 대상 엔터프라이즈의 이름을 입력하기 시작한 다음 드롭다운 목록에 표시되면 엔터프라이즈를 선택합니다.
![엔터프라이즈 드롭다운 스크린샷](/assets/images/help/business-accounts/org-transfer-select-enterprise.png)
2. **전송 검토를** 클릭합니다.
3. 전송을 확인하려면 **조직 이전** 을 클릭합니다.
![조직 이전 단추의 스크린샷](/assets/images/help/business-accounts/org-transfer-confirm-button.png)
