---
title: GitHub Enterprise Cloud 시작
intro: '{% data variables.product.prodname_ghe_cloud %} 조직 또는 엔터프라이즈 계정 설정 및 관리를 시작합니다.'
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 6af835175eb5412ca9fbf0e925175450f2a2a254
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163802'
---
이 가이드에서는 조직 또는 엔터프라이즈 소유자가 {% data variables.product.prodname_ghe_cloud %} 계정을 설정, 구성, 관리하는 방법을 안내합니다.

{% data reusables.enterprise.ghec-cta-button %}

## 1부: 계정 유형 선택

{% data variables.product.prodname_dotcom %}는 다음 두 가지 유형의 엔터프라이즈 제품을 제공합니다.

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

제품 간의 주요 차이점은 {% data variables.product.prodname_ghe_cloud %}는 {% data variables.product.prodname_dotcom %}에서 호스트되는 반면, {% data variables.product.prodname_ghe_server %}는 자체 호스팅된다는 것입니다.

{% data reusables.enterprise.about-github-for-enterprises %}

{% data variables.product.prodname_ghe_cloud %}에서는 {% data variables.product.prodname_emus %}를 사용할 수 있습니다. {% data reusables.enterprise-accounts.emu-short-summary %}

멤버가 대신 고유한 개인 계정을 만들고 관리할 수 있도록 선택할 경우 {% data variables.product.prodname_ghe_cloud %}에서 다음 두 가지 유형의 계정을 사용할 수 있습니다.

- 단일 조직 계정
- 여러 조직을 포함하는 엔터프라이즈 계정

### 1. 조직 계정과 엔터프라이즈 계정 간 차이점 이해

{% data variables.product.prodname_ghe_cloud %}에서는 조직 계정과 엔터프라이즈 계정을 둘 다 사용할 수 있습니다. 조직은 사용자 그룹이 한 번에 여러 프로젝트에서 협업할 수 있고 소유자와 관리자가 데이터 및 프로젝트에 대한 액세스를 관리할 수 있는 공유 계정입니다. 엔터프라이즈 계정을 사용하면 여러 조직 간 협업이 가능하며, 소유자가 해당 조직에 대한 정책, 청구, 보안을 중앙에서 관리할 수 있습니다. 차이점에 대한 자세한 내용은 “[조직 및 엔터프라이즈 계정](/organizations/collaborating-with-groups-in-organizations/about-organizations#organizations-and-enterprise-accounts)”을 참조하세요.

엔터프라이즈 계정을 선택하는 경우 일부 정책은 조직 수준에서만 설정할 수 있는 반면, 다른 정책은 엔터프라이즈의 모든 조직에 적용할 수 있습니다.

원하는 계정 유형을 선택한 후에는 계정 설정을 계속할 수 있습니다. 이 가이드의 각 섹션에서 계정 유형에 따라 단일 조직 또는 엔터프라이즈 계정 섹션을 진행합니다.

## 2부: 계정 설정
{% data variables.product.prodname_ghe_cloud %}를 시작하려면 조직 또는 엔터프라이즈 계정을 만들고 청구 설정, 구독, 사용량을 설정하고 확인하는 것이 좋습니다.
### {% data variables.product.prodname_ghe_cloud %}를 사용하여 단일 조직 계정 설정

#### 1. 조직 정보
조직은 사용자 그룹이 한 번에 여러 프로젝트에서 협업할 수 있는 공유 계정입니다. {% data variables.product.prodname_ghe_cloud %}에서는 소유자와 관리자가 정교한 사용자 인증 및 관리뿐만 아니라 에스컬레이션된 지원 및 보안 옵션을 사용하여 조직을 관리할 수 있습니다. 자세한 내용은 “[조직 정보](/organizations/collaborating-with-groups-in-organizations/about-organizations)”를 참조하세요.
#### 2. 조직 계정 만들기 또는 업그레이드

{% data variables.product.prodname_ghe_cloud %}에서 조직 계정을 사용하려면 먼저 조직을 만들어야 합니다. 플랜을 선택하라는 메시지가 표시되면 “Enterprise”를 선택합니다. 자세한 내용은 “[처음부터 새 조직 만들기](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”를 참조하세요.

또는 업그레이드하려는 기존 조직 계정이 있는 경우 “[{% data variables.product.prodname_dotcom %} 구독 업그레이드](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#upgrading-your-organizations-subscription)”의 단계를 따릅니다.
#### 3. 청구 설정 및 관리

{% data variables.product.prodname_ghe_cloud %}에서 조직 계정을 사용하도록 선택한 경우 먼저 [30일 평가판](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)에 액세스할 수 있습니다. 평가판이 끝나기 전에 {% data variables.product.prodname_enterprise %} 또는 {% data variables.product.prodname_team %}을 구매하지 않으면 조직이 {% data variables.product.prodname_free_user %}로 다운그레이드되고, 유료 제품에만 포함된 고급 도구 및 기능에 액세스할 수 없게 됩니다. 자세한 내용은 “[평가판 완료](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)”를 참조하세요.

조직의 청구 설정 페이지에서 결제 방법 및 청구 주기와 같은 설정을 관리하고, 구독에 대한 정보를 보고, 스토리지 및 {% data variables.product.prodname_actions %} 시간(분)을 업그레이드할 수 있습니다. 청구 설정을 관리하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 청구 설정 관리](/billing/managing-your-github-billing-settings)”를 참조하세요.

소유자 또는 청구 관리자 역할이 있는 조직 멤버만 조직에 대한 청구 설정에 액세스하거나 변경할 수 있습니다.  청구 관리자는 조직에 대한 청구 설정을 관리하고 조직 구독의 유료 라이선스를 사용하지 않는 사용자입니다. 조직에 청구 관리자를 추가하는 방법에 대한 자세한 내용은 “[조직에 청구 관리자 추가](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)”를 참조하세요.

### {% data variables.product.prodname_ghe_cloud %}를 사용하여 엔터프라이즈 계정 설정

#### 1. 엔터프라이즈 계정 정보

엔터프라이즈 계정을 사용하면 멤버 액세스, 청구 및 사용량, 보안을 포함하여 여러 {% data variables.product.prodname_dotcom %} 조직에 대한 정책 및 설정을 중앙에서 관리할 수 있습니다. 자세한 내용은 “[엔터프라이즈 계정 정보](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)”를 참조하세요.

#### 2. 엔터프라이즈 계정 만들기

 청구서로 결제하는 {% data variables.product.prodname_ghe_cloud %} 고객은 {% data variables.product.prodname_dotcom %}을 통해 직접 엔터프라이즈 계정을 만들 수 있습니다. 자세한 내용은 “[엔터프라이즈 계정 만들기](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account)”를 참조하세요. 
 
 현재 송장으로 결제하지 않는 {% data variables.product.prodname_ghe_cloud %} 고객은 [{% data variables.product.prodname_dotcom %}의 영업 팀](https://enterprise.github.com/contact)에 문의하여 엔터프라이즈 계정을 만들 수 있습니다.

#### 3. 엔터프라이즈 계정에 조직 추가

엔터프라이즈 계정 내에서 관리할 새 조직을 만들 수 있습니다. 자세한 내용은 “[엔터프라이즈에 조직 추가](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)”를 참조하세요.

기존 조직을 엔터프라이즈 계정으로 이전하려는 경우 {% data variables.product.prodname_dotcom %} 영업 계정 담당자에게 문의하세요.
#### 4. 엔터프라이즈 계정의 구독 및 사용량 보기
언제든지 엔터프라이즈 계정의 현재 구독, 라이선스 사용량, 청구서, 결제 기록, 기타 청구 정보를 볼 수 있습니다. 엔터프라이즈 소유자와 청구 관리자 모두 엔터프라이즈 계정에 대한 청구 설정에 액세스하고 관리할 수 있습니다. 자세한 내용은 “[엔터프라이즈 계정의 구독 및 사용량 보기](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)”를 참조하세요.

## 3부: {% data variables.product.prodname_ghe_cloud %}를 사용하여 조직 또는 엔터프라이즈 멤버 및 팀 관리

### 조직의 멤버 및 팀 관리
권한 및 멤버 역할을 설정하고, 팀을 만들어 관리하고, 조직의 리포지토리에 대한 액세스 권한을 사용자에게 제공할 수 있습니다. 
#### 1. 조직의 멤버 관리
{% data reusables.getting-started.managing-org-members %}
#### 2. 조직 권한 및 역할
{% data reusables.getting-started.org-permissions-and-roles %}
#### 3. 팀 정보 및 만들기
{% data reusables.getting-started.about-and-creating-teams %}
#### 4. 팀 설정 관리
{% data reusables.getting-started.managing-team-settings %}
#### 5. 사용자 및 팀에 리포지토리, 프로젝트 보드, 앱에 대한 액세스 권한 부여
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}

### 엔터프라이즈 계정의 멤버 관리
엔터프라이즈 멤버 관리는 조직의 멤버 또는 팀 관리와 별개입니다. 엔터프라이즈 소유자 또는 관리자는 조직 소유자가 되지 않는 한, 조직 수준 설정에 액세스하거나 엔터프라이즈의 조직 멤버를 관리할 수 없다는 것에 유의해야 합니다. 자세한 내용은 위에서 “[조직의 멤버 및 팀 관리](#managing-members-and-teams-in-your-organization)” 섹션을 참조하세요.

엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하는 경우 멤버는 ID 공급자를 통해 완전히 관리됩니다. 멤버 추가, 멤버 자격 변경, 역할 할당은 모두 IdP를 사용하여 관리됩니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”를 참조하세요.

엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하지 않는 경우 아래 단계를 수행합니다.

#### 1. 엔터프라이즈의 역할 할당
기본적으로 엔터프라이즈의 모든 사용자는 엔터프라이즈 멤버입니다. 엔터프라이즈 소유자 및 청구 관리자를 포함하여 엔터프라이즈 설정 및 데이터에 대한 액세스 수준이 각기 다른 관리 역할도 있습니다. 자세한 내용은 “[엔터프라이즈의 역할](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”을 참조하세요.
#### 2. 엔터프라이즈를 관리할 사용자 초대
엔터프라이즈 소유자 또는 청구 관리자로 엔터프라이즈를 관리할 사용자를 초대하고 더 이상 액세스할 필요가 없는 사용자를 제거할 수 있습니다. 자세한 내용은 “[엔터프라이즈를 관리할 사용자 초대](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)”를 참조하세요.

엔터프라이즈 멤버에게 지원 포털에서 지원 티켓을 관리할 수 있는 기능을 부여할 수도 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 지원 자격 관리](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)”를 참조하세요.
#### 3. 엔터프라이즈의 사용자 보기
엔터프라이즈 소유 리소스에 대한 액세스 또는 사용자 라이선스 사용량을 감사하기 위해 엔터프라이즈의 모든 엔터프라이즈 관리자, 엔터프라이즈 멤버, 외부 협력자를 볼 수 있습니다. 멤버가 속한 조직 및 외부 협력자가 액세스할 수 있는 특정 리포지토리를 확인할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 사용자 보기](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)”를 참조하세요.

## 4부: {% data variables.product.prodname_ghe_cloud %}를 사용하여 보안 관리

* [단일 조직의 보안 관리](#managing-security-for-a-single-organization)
* [{% data variables.enterprise.prodname_emu_enterprise %}에 대한 보안 관리](#managing-security-for-an-enterprise-with-managed-users)
* [{% data variables.enterprise.prodname_managed_users %} 없이 엔터프라이즈 계정에 대한 보안 관리](#managing-security-for-an-enterprise-account-without-managed-users)

### 단일 조직의 보안 관리
2단계 인증을 요구하고, 보안 기능을 구성하고, 조직의 감사 로그 및 통합을 검토하고, SAML Single Sign-On 및 팀 동기화를 사용하도록 설정하여 조직의 보안을 유지할 수 있습니다.
#### 1. 2단계 인증 요구
{% data reusables.getting-started.requiring-2fa %}
#### 2. 조직의 보안 기능 구성
{% data reusables.getting-started.configuring-security-features %}

#### 3. 조직의 감사 로그 및 통합 검토
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

#### 4. 조직에서 SAML Single Sign-On 사용 및 적용
IdP(ID 공급자)를 사용하여 애플리케이션 및 조직 멤버의 ID를 관리하는 경우 SAML SSO(Single Sign-On)를 구성하여 리포지토리, 이슈, 끌어오기 요청과 같은 조직 리소스에 대한 액세스를 제어하고 보호할 수 있습니다. 조직의 멤버가 SAML SSO를 사용하는 조직 리소스에 액세스하는 경우 {% data variables.product.prodname_dotcom %}는 인증을 위해 IdP로 리디렉션합니다. 자세한 내용은 “[SAML Single Sign-On을 사용한 ID 및 액세스 관리 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”를 참조하세요.

조직 소유자는 SAML SSO를 사용하지 않도록 설정하거나, 사용하도록 설정하지만 적용하지 않거나, 사용하도록 설정하고 적용할 수 있습니다. 자세한 내용은 “[조직에서 SAML Single Sign-On 사용 및 테스트](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)” 및 “[조직에서 SAML Single Sign-On 적용](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)”을 참조하세요.
#### 5. 조직의 팀 동기화 관리
조직 소유자는 IdP(ID 공급자)와 {% data variables.product.prodname_dotcom %} 간에 팀 동기화를 사용하도록 설정하여 조직 소유자와 팀 유지 관리자가 조직의 팀을 IdP 그룹에 연결하도록 할 수 있습니다. 자세한 내용은 “[조직의 팀 동기화 관리](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”를 참조하세요.

### {% data variables.enterprise.prodname_emu_enterprise %}에 대한 보안 관리

{% data variables.product.prodname_emus %}를 사용하면 액세스 및 ID가 ID 공급자를 통해 중앙에서 관리됩니다. IdP에서 2단계 인증 및 기타 로그인 요구 사항을 사용하도록 설정하고 적용해야 합니다. 

#### 1. {% data variables.enterprise.prodname_emu_enterprise %}에서 SAML Single Sign-On 및 프로비저닝 사용

{% data variables.enterprise.prodname_emu_enterprise %}에서 모든 멤버는 ID 공급자에 의해 프로비전되고 관리됩니다. 엔터프라이즈 사용을 시작하려면 먼저 SAML SSO 및 SCIM 프로비저닝을 사용하도록 설정해야 합니다. {% data variables.enterprise.prodname_emu_enterprise %}에 대한 SAML SSO 구성 및 프로비저닝에 대한 자세한 내용은 "[Enterprise Managed Users에 대한 SAML Single Sign-On 구성](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)"을 참조하세요.

#### 2. ID 공급자를 사용하여 {% data variables.enterprise.prodname_emu_enterprise %}의 팀 관리

조직의 팀을 ID 공급자의 보안 그룹에 연결하여 IdP를 통해 팀의 멤버 자격과 리포지토리에 대한 액세스를 관리할 수 있습니다. 자세한 내용은 “[ID 공급자 그룹을 사용하여 팀 멤버 자격 관리](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)”를 참조하세요.

#### 3. {% data variables.enterprise.prodname_emu_enterprise %}에서 조직에 허용되는 IP 주소 관리

특정 IP 주소에 대한 허용 목록을 구성하여 {% data variables.enterprise.prodname_emu_enterprise %}에서 조직이 소유한 자산에 대한 액세스를 제한할 수 있습니다. 자세한 내용은 “[엔터프라이즈에서 보안 설정에 대한 정책 적용](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)”을 참조하세요.

#### 4. {% data variables.enterprise.prodname_emu_enterprise %}에서 고급 보안 기능에 대한 정책 적용
{% data reusables.getting-started.enterprise-advanced-security %}

### {% data variables.enterprise.prodname_managed_users %} 없이 엔터프라이즈 계정에 대한 보안 관리
엔터프라이즈의 보안을 관리하기 위해 2단계 인증을 요구하고, 허용된 IP 주소를 관리하고, 엔터프라이즈 수준에서 SAML Single Sign-On 및 팀 동기화를 사용하도록 설정하고, GitHub Advanced Security 기능에 등록하고 적용할 수 있습니다. 

#### 1. 엔터프라이즈 계정의 조직에 2단계 인증 요구 및 허용된 IP 주소 관리
엔터프라이즈 소유자는 엔터프라이즈 계정이 소유한 모든 조직의 조직 멤버, 청구 관리자, 외부 협력자가 2단계 인증을 사용하여 개인 계정을 보호하도록 요구할 수 있습니다. 엔터프라이즈의 조직에 액세스할 수 있는 모든 사용자에게 미리 알리는 것이 좋습니다. 특정 IP 주소의 허용 목록을 구성하여 엔터프라이즈 계정의 조직이 소유한 자산에 대한 액세스를 제한할 수도 있습니다. 

2단계 인증 및 허용된 IP 주소 목록을 적용하는 방법에 대한 자세한 내용은 “[엔터프라이즈에서 보안 설정에 대한 정책 적용](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)”을 참조하세요.
#### 2. 엔터프라이즈 계정의 조직에서 SAML Single Sign-On 사용 및 적용
IdP 및 SAM SSO(Single Sign-On)를 사용하여 엔터프라이즈의 리소스, 조직 멤버 자격, 팀 멤버 자격에 대한 액세스를 중앙에서 관리할 수 있습니다. 엔터프라이즈 소유자는 엔터프라이즈 계정이 소유한 모든 조직에서 SAML SSO를 사용하도록 설정할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 ID 및 액세스 관리 정보](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)”를 참조하세요.

#### 3. 팀 동기화 관리
IdP(ID 공급자)와 {% data variables.product.prodname_dotcom %} 간에 팀 동기화를 사용하도록 설정하고 관리하여 엔터프라이즈 계정이 소유한 조직이 IdP 그룹으로 팀 멤버 자격을 관리하도록 할 수 있습니다. 자세한 내용은 “[엔터프라이즈 계정의 조직에 대한 팀 동기화 관리](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”를 참조하세요.

#### 4. 엔터프라이즈 계정에서 Advanced Security 기능에 대한 정책 적용
{% data reusables.getting-started.enterprise-advanced-security %}

## 5부: 조직 및 엔터프라이즈 수준 정책 및 설정 관리

### 단일 조직의 설정 관리
조직을 관리하고 조정하기 위해 조직 정책을 설정하고, 리포지토리 변경 권한을 관리하고, 조직 수준 커뮤니티 상태 파일을 사용할 수 있습니다.
#### 1. 조직 정책 관리
{% data reusables.getting-started.managing-org-policies %}
#### 2. 리포지토리 변경 내용 관리
{% data reusables.getting-started.managing-repo-changes %}
#### 3. 조직 수준 커뮤니티 상태 파일 및 조정 도구 사용
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}

### 엔터프라이즈 계정의 설정 관리
엔터프라이즈를 관리하고 조정하기 위해 엔터프라이즈 내 조직에 대한 정책을 설정하고, 감사 로그를 보고, 웹후크를 구성하고, 메일 알림을 제한할 수 있습니다.
#### 1. 엔터프라이즈 계정의 조직에 대한 정책 관리

엔터프라이즈가 소유한 모든 조직에서 여러 정책을 적용하도록 선택하거나 각 조직에서 해당 정책을 설정하도록 선택할 수 있습니다. 적용할 수 있는 정책 유형에는 리포지토리 관리, 프로젝트 보드, 팀 정책이 포함됩니다. 자세한 내용은 “[엔터프라이즈에 대한 정책 설정](/enterprise-cloud@latest/admin/policies)”을 참조하세요.
#### 2. 감사 로그 보기, 웹후크 구성, 엔터프라이즈에 대한 메일 알림 제한
엔터프라이즈 감사 로그에서 엔터프라이즈 계정이 소유한 모든 조직의 작업을 볼 수 있습니다. 엔터프라이즈 계정이 소유한 조직의 이벤트를 받도록 웹후크를 구성할 수도 있습니다. 자세한 내용은 “[엔터프라이즈의 감사 로그 검토](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise)” 및 “[엔터프라이즈 모니터링](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise)”을 참조하세요.

엔터프라이즈 멤버가 확인되거나 승인된 도메인의 메일 주소만 사용하여 알림을 받을 수 있도록 엔터프라이즈 계정의 메일 알림을 제한할 수도 있습니다. 자세한 내용은 “[엔터프라이즈의 메일 알림 제한](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)”을 참조하세요.

## 6부: {% data variables.product.prodname_dotcom %}에서 조직 또는 엔터프라이즈의 작업 사용자 지정 및 자동화
조직 또는 엔터프라이즈의 멤버는 {% data variables.product.prodname_marketplace %}의 도구, {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, 기존 {% data variables.product.product_name %} 기능을 사용하여 작업을 사용자 지정하고 자동화할 수 있습니다.

### 1. {% data variables.product.prodname_marketplace %} 사용
{% data reusables.getting-started.marketplace %}
### 2. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 사용
{% data reusables.getting-started.api %}
### 3. {% data variables.product.prodname_actions %} 빌드
{% data reusables.getting-started.actions %}
### 4. {% data variables.product.prodname_registry %} 게시 및 관리 
{% data reusables.getting-started.packages %}
### 5. {% data variables.product.prodname_pages %} 사용
{% data variables.product.prodname_pages %}는 리포지토리에서 HTML, CSS, JavaScript 파일을 직접 가져와서 웹 사이트를 게시하는 정적 사이트 호스팅 서비스입니다. 조직 수준에서 {% data variables.product.prodname_pages %} 사이트의 게시를 관리할 수 있습니다. 자세한 내용은 “[조직의 {% data variables.product.prodname_pages %} 사이트 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)” 및 “[{% data variables.product.prodname_pages %} 정보](/pages/getting-started-with-github-pages/about-github-pages)”를 참조하세요.
## 7부: {% data variables.product.prodname_dotcom %} 커뮤니티 참여

조직 또는 엔터프라이즈의 멤버는 GitHub 학습 및 지원 리소스를 사용하여 필요한 도움을 받을 수 있습니다. 오픈 소스 커뮤니티를 지원할 수도 있습니다. 

### 1. {% data variables.product.prodname_docs %}에서 {% data variables.product.prodname_ghe_cloud %}에 대해 읽기
{% data variables.product.prodname_ghe_cloud %}에서 사용할 수 있는 기능을 반영하는 설명서를 읽을 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_docs %} 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs)”를 참조하세요.

{% data reusables.enterprise.best-practices %}

### 2. {% data variables.product.prodname_learning %}을 사용하여 학습
조직 또는 엔터프라이즈의 멤버는 [{% data variables.product.prodname_learning %}](https://skills.github.com/)을 통해 고유한 GitHub 리포지토리에서 재미있고 현실적인 프로젝트를 완료하여 새로운 기술을 배울 수 있습니다. 각 과정은 GitHub 커뮤니티에서 만들고 친절한 봇이 가르치는 실습 수업입니다.

자세한 내용은 “[Git 및 {% data variables.product.prodname_dotcom %} 학습 리소스](/github/getting-started-with-github/quickstart/git-and-github-learning-resources)”를 참조하세요.
### 3. 오픈 소스 커뮤니티 지원
{% data reusables.getting-started.sponsors %}

### 4. {% data variables.contact.github_support %}에 문의
{% data reusables.getting-started.contact-support %}

{% data variables.product.prodname_ghe_cloud %}를 사용하면 목표 응답 시간이 8시간인 우선 순위 지원 요청을 제출할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_cloud %} 지원](/github/working-with-github-support/github-enterprise-cloud-support)”을 참조하세요.
