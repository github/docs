---
title: 엔터프라이즈 인증 정보
shortTitle: About authentication
intro: '{% ifversion ghae %}사용자가 {% else %}사용자가 {% ifversion ghec %}에 액세스하기 위해 인증하는 방법을 선택할 수 있도록 SAML SSO(Single Sign-On)를 구성해야 합니다.{% else %}은(는) 엔터프라이즈의 {% data variables.product.product_name %}{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}의 엔터프라이즈에 대한 리소스입니다.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 16b5bdd98e37db2eef6fe7e4e02da1a4ce8fd406
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164374'
---
## 엔터프라이즈 인증 정보

{% ifversion ghec %}

{% data variables.product.product_name %}의 엔터프라이즈 소유자는 인증 및 엔터프라이즈 리소스에 대한 액세스 요구 사항을 제어할 수 있습니다. 

{% data reusables.enterprise.ghec-authentication-options %}

이러한 옵션에 대해 자세히 알아보고 엔터프라이즈에 가장 적합한 방법을 확인하려면 “[엔터프라이즈에 가장 적합한 인증 방법 식별](#identifying-the-best-authentication-method-for-your-enterprise)”을 참조하세요.

## {% data variables.product.product_name %}에 대한 인증 방법

다음 옵션은 {% data variables.product.product_name %}에서 계정 관리 및 인증에 사용할 수 있습니다.

- [{% data variables.location.product_location %}을 통한 인증](#authentication-through-githubcom)
- [추가 SAML 액세스 제한으로 {% data variables.location.product_location %}을 통한 인증](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [{% data variables.product.prodname_emus %} 및 페더레이션을 사용한 인증](#authentication-with-enterprise-managed-users-and-federation)

### {% data variables.location.product_location %}을 통한 인증

기본적으로 각 멤버는 {% data variables.location.product_location %}에 개인 계정을 만들어야 합니다. 엔터프라이즈에 대한 액세스 권한을 부여하면 구성원이 {% data variables.location.product_location %}에서 계정에 로그인한 후 엔터프라이즈의 리소스에 액세스할 수 있습니다. 멤버는 계정을 관리하고 {% data variables.location.product_location %}의 다른 기업, 조직 및 리포지토리에 기여할 수 있습니다.

### 추가 SAML 액세스 제한으로 {% data variables.location.product_location %}을 통한 인증

추가 SAML 액세스 제한을 구성하는 경우 각 멤버는 {% data variables.location.product_location %}에서 개인 계정을 만들고 관리해야 합니다. 엔터프라이즈에 대한 액세스 권한을 부여하면 멤버가 {% data variables.location.product_location %}에서 계정에 로그인하고 SAML ID 공급자(IdP)로 성공적으로 인증한 후 엔터프라이즈의 리소스에 액세스할 수 있습니다. 구성원은 개인 계정을 사용하여 {% data variables.location.product_location %}의 다른 기업, 조직 및 리포지토리에 기여할 수 있습니다. 모든 엔터프라이즈의 리소스에 액세스하기 위해 SAML 인증을 요구하는 방법에 대한 자세한 내용은 "[엔터프라이즈 IAM용 SAML 정보](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)"를 참조하세요.

{% data variables.product.product_name %}에서 독립 실행형 조직을 사용하거나 엔터프라이즈의 모든 조직에 SAML 인증을 사용하지는 않으려는 경우 개별 조직에 대해 SAML을 구성할 수 있습니다. 자세한 내용은 “[SAML Single Sign-On을 사용한 ID 및 액세스 관리 정보](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”를 참조하세요.

### {% data variables.product.prodname_emus %} 및 페더레이션을 사용한 인증

{% data variables.location.product_location %}에서 엔터프라이즈 구성원의 계정을 더 자세히 제어해야 하는 경우 {% data variables.product.prodname_emus %}을(를) 사용할 수 있습니다. {% data variables.product.prodname_emus %}를 사용하면 IdP를 사용하여 {% data variables.location.product_location %}에서 엔터프라이즈 멤버에 대한 계정을 프로비전하고 관리합니다. 각 멤버는 사용자가 만든 계정에 로그인하고 엔터프라이즈에서 계정을 관리합니다. 나머지 {% data variables.product.prodname_dotcom_the_website %}에 대한 기여는 제한됩니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)”를 참조하세요.

## 엔터프라이즈에 가장 적합한 인증 방법 식별

SAML SSO 및 {% data variables.product.prodname_emus %} 모두 엔터프라이즈 리소스에 대한 보안을 강화합니다. {% data variables.product.prodname_emus %}는 엔터프라이즈 구성원에 대한 사용자 계정을 제어하고 계정이 수행할 수 있는 작업을 제한할 수 있습니다. 그러나 이러한 제한은 개발자의 워크플로를 방해하는 경우 엔터프라이즈에서 허용되지 않을 수 있습니다.

엔터프라이즈가 SAML SSO 또는 {% data variables.product.prodname_emus %}를 통해 더 많은 이점을 얻을 수 있는지 확인하려면 이러한 질문을 스스로에게 해보세요.

- [사용자의 사용자 계정을 제어하려고 하나요?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [엔터프라이즈에서 사용하는 ID 공급자는 무엇인가요?](#which-identity-provider-does-your-enterprise-use)
- [개발자가 퍼블릭 리포지토리, gists 또는 {% data variables.product.prodname_pages %} 사이트에서 작업하나요?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [개발자가 엔터프라이즈 외부의 공동 작업에 의존하나요?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [엔터프라이즈에서 외부 협력자에 의존하나요?](#does-your-enterprise-rely-on-outside-collaborators)
- [엔터프라이즈에서 마이그레이션 비용을 허용할 수 있나요?](#can-your-enterprise-tolerate-migration-costs)

### 사용자의 사용자 계정을 제어하려고 하나요?

{% data variables.product.prodname_emus %}는 엔터프라이즈 멤버가 {% data variables.product.prodname_dotcom_the_website %}에서 자신의 개인 계정을 사용하여 엔터프라이즈 리소스에 액세스하지 않도록 하려는 경우에 적합할 수 있습니다. 

SAML SSO를 사용하면 개발자는 고유한 개인 계정을 만들고 관리하며 각 계정은 IdP의 SAML ID에 연결됩니다. {% data variables.product.prodname_emus %}는 사용자에 대한 계정을 프로비저닝하므로 다른 친숙한 SSO 솔루션과 비슷합니다. 사용자 이름 및 계정과 연결된 메일 주소를 제어하여 사용자 계정이 회사 ID를 준수하는지 확인할 수도 있습니다. 

현재 사용자가 엔터프라이즈에서만 사용하도록 {% data variables.product.prodname_dotcom_the_website %}에 새 계정을 만들도록 요구하는 경우 {% data variables.product.prodname_emus %}가 적합할 수 있습니다. 그러나 IdP를 사용자 및 액세스 관리의 단일 데이터 소스(source of truth)로 사용하는 경우 SAML SSO가 더 나은 옵션이 될 수 있습니다. 예를 들어 엔터프라이즈에는 IdP에서 새 사용자를 온보딩하기 위한 정립된 프로세스가 없을 수 있습니다.

### 엔터프라이즈에서 사용하는 ID 공급자는 무엇인가요?

{% data variables.product.prodname_emus %}는 제한된 수의 IdP에 대해 지원되며, SAML SSO는 더 많은 수의 IdP에 대한 전체 지원과 SAML 2.0 표준을 구현하는 모든 IdP에 대한 제한된 지원을 제공합니다. 각 옵션에 대해 지원되는 IDP 목록은 “[{% data variables.product.prodname_emus %} 정보](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support)” 및 “[엔터프라이즈 IAM용 SAML 정보](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps)”를 참조하세요.

지원되지 않는 IdP를 지원되는 IdP에 페더레이션하여 통합 지점으로 사용하는 경우에만 {% data variables.product.prodname_emus %}를 지원되지 않는 IdP와 함께 사용할 수 있습니다. 이러한 복잡성을 방지하려는 경우 SAML SSO가 더 나은 솔루션이 될 수 있습니다.

### 개발자가 퍼블릭 리포지토리, gists 또는 {% data variables.product.prodname_pages %} 사이트에서 작업하나요?

{% data variables.product.prodname_dotcom_the_website %}에서 엔터프라이즈 멤버가 실수로 회사 소유 콘텐츠를 대중에게 유출하지 못하도록 하려면 {% data variables.product.prodname_emus %}에서 사용자가 수행할 수 있는 작업을 강력하게 제한합니다. 예를 들어 {% data variables.enterprise.prodname_managed_users %}은(는) 엔터프라이즈 외부에 표시되는 공용 리포지토리, 가시성의 gists 또는 {% data variables.product.prodname_pages %} 사이트를 만들 수 없습니다. 제한 사항의 전체 목록은 "[{% data variables.enterprise.prodname_managed_users %}의 기능 및 제한](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users) 사항"을 참조하세요.

이러한 제한 사항이 일부 엔터프라이즈에서는 허용되지 않습니다. {% data variables.product.prodname_emus %}가 적합한지 확인하려면 개발자와 함께 제한을 검토하고 제한 사항이 기존 워크플로에 방해가 되는지 확인합니다. 이러한 경우 SAML SSO가 엔터프라이즈에 더 적합한 선택이 될 수 있습니다.

### 개발자가 엔터프라이즈 외부의 공동 작업에 의존하나요?

{% data variables.enterprise.prodname_managed_users_caps %}은(는) 엔터프라이즈 내 리포지토리에만 기여할 수 있습니다. 개발자가 프라이빗 리포지토리를 포함하여 엔터프라이즈 내부 및 외부의 리포지토리 둘 다에 기여해야 하는 경우 {% data variables.product.prodname_emus %}는 엔터프라이즈에 적합하지 않을 수 있습니다. SAML SSO가 더 나은 솔루션이 될 수 있습니다.

일부 회사에서는 {% data variables.location.product_location %}에서 SAML SSO를 사용하여 기존 엔터프라이즈 내에서 리포지토리를 유지 관리하고 {% data variables.enterprise.prodname_emu_enterprise %}를 만듭니다. 단일 워크스테이션에서 두 엔터프라이즈가 소유한 리포지토리에 기여하는 개발자는 단일 브라우저 내에서 {% data variables.location.product_location %}의 계정 간에 전환하거나 각 계정에 대해 다른 브라우저를 사용해야 합니다. 또한 개발자는 두 계정을 수용하기 위해 워크스테이션의 Git 구성을 사용자 지정해야 할 수도 있습니다. 이 워크플로의 복잡성으로 인해 내부 코드를 실수로 유출할 위험이 증가할 수 있습니다.

{% data variables.enterprise.prodname_emu_enterprise %}을(를) 만들기로 결정했지만 개발자가 단일 워크스테이션에서 엔터프라이즈 외부의 리소스에 기여하도록 요구하는 경우 개발자의 로컬 Git 구성에서 계정 간 전환을 지원할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#supporting-developers-with-multiple-user-accounts-on-githubcom)”를 참조하세요.

### 엔터프라이즈에서 외부 협력자에 의존하나요?

SAML SSO를 사용하면 외부 공동 작업자 역할을 사용하여 IdP 디렉터리의 멤버가 아닌 사용자에게 특정 리포지토리에 대한 액세스 권한을 부여할 수 있습니다. 이러한 기능은 계약자와 같이 비즈니스 외부에 있는 협력자에게 특히 유용할 수 있습니다. 자세한 내용은 “[조직의 리포지토리에 외부 협력자 추가](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)”를 참조하세요.

{% data variables.product.prodname_emus %}에서는 외부 공동 작업자 역할이 없습니다. 엔터프라이즈의 리소스는 항상 IdP에서 프로비전되는 {% data variables.enterprise.prodname_managed_users %}에서만 액세스할 수 있습니다. 외부 협력자에게 엔터프라이즈에 대한 액세스 권한을 부여하려면 IdP에서 게스트 계정을 사용해야 합니다. {% data variables.product.prodname_emus %}에 관심이 있는 경우 개발자에게 이 작업이 기존 워크플로에 방해가 되는지 확인합니다. 그렇다면 SAML SSO가 더 나은 솔루션이 될 수 있습니다.

### 엔터프라이즈에서 마이그레이션 비용을 허용할 수 있나요?

엔터프라이즈가 {% data variables.product.prodname_dotcom_the_website %}을 처음 사용하는 경우 SAML SSO 및 {% data variables.product.prodname_emus %}는 똑같이 쉽게 채택할 수 있습니다.

개발자가 자체 사용자 계정을 관리하는 데 {% data variables.product.prodname_dotcom_the_website %}을 이미 사용하고 있는 경우 {% data variables.product.prodname_emus %}를 채택하려면 새 엔터프라이즈 계정으로 마이그레이션해야 합니다. 자세한 내용은 "[{% data variables.enterprise.prodname_managed_users %}가 있는 엔터프라이즈](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users) 정보"를 참조하세요.

{% data variables.product.prodname_emus %}는 무료이지만 마이그레이션 프로세스에는 팀의 시간 또는 비용이 필요할 수 있습니다. 이 마이그레이션 프로세스가 비즈니스 및 개발자에게 허용되는지 확인합니다. 그렇지 않은 경우 SAML SSO가 더 나은 선택일 수 있습니다.

{% elsif ghes %}

사이트 관리자는 사용자가 {% data variables.product.product_name %} 인스턴스에 액세스하기 위해 인증하는 방법을 결정할 수 있습니다. {% data variables.product.product_name %}의 기본 제공 인증을 사용하거나 팀에서 사용하는 웹 애플리케이션에 대한 ID 및 액세스 관리를 중앙 집중화하려는 경우 외부 인증 방법을 구성할 수 있습니다.

## {% data variables.product.product_name %}에 대한 인증 방법

{% data variables.product.product_name %}에 사용할 수 있는 인증 방법은 다음과 같습니다.

- [기본 제공 인증](#built-in-authentication)
- [외부 인증](#external-authentication)

### 기본 제공 인증

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} 인스턴스에 액세스하기 위해 사람들은 계정에 대한 자격 증명을 사용하여 인증을 받습니다. 자세한 내용은 “[기본 제공 인증 구성](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)”을 참조하세요.

### 외부 인증

외부 디렉터리 또는 IdP(ID 공급자)를 사용하여 여러 웹 애플리케이션에 대한 액세스를 중앙 집중화하는 경우 {% data variables.location.product_location %}에 대한 외부 인증을 구성할 수 있습니다. 자세한 내용은 다음 문서를 참조하세요.

- "[엔터프라이즈 IAM에 CAS 사용](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[엔터프라이즈 IAM에 LDAP 사용](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[엔터프라이즈 IAM에 SAML 사용](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"

외부 인증을 사용하도록 선택하는 경우 외부 인증 공급자에 계정이 없는 사용자를 위해 대체 인증을 구성할 수도 있습니다. 예를 들어 계약자 또는 머신 사용자에게 액세스 권한을 부여할 수 있습니다. 자세한 내용은 “[공급자 외부 사용자에게 기본 제공 인증 허용](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)”을 참조하세요.

{% ifversion scim-for-ghes %}

인증에 SAML SSO를 사용하는 경우 SCIM을 사용하여 사용자를 프로비전하고 IdP 그룹을 팀에 매핑할 수도 있습니다. 자세한 내용은 "[엔터프라이즈용 SCIM을 사용하여 사용자 프로비저닝 구성"을 참조하세요](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise).

{% endif %}

{% elsif ghae %}

{% data variables.product.product_name %}는 인증에 SAML SSO를 사용합니다. 엔터프라이즈 소유자는 초기화 중에 SAML ID 공급자(IdP)를 사용하여 SAML SSO를 구성해야 합니다. 자세한 내용은 "[엔터프라이즈 IAM용 SAML 정보](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)"를 참조하세요.

{% endif %}

## 추가 참고 자료

- "[{% data variables.product.company_short %} 계정 유형](/get-started/learning-about-github/types-of-github-accounts)"
- “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)” {%- ifversion ghec %}
- "[조직 내 사용자에 대한 계정을 만들 수 있나요?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)"
{% endif %}
