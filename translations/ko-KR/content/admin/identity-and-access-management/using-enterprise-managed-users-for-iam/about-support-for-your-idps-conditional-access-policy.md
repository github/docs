---
title: IdP의 조건부 액세스 정책에 대한 지원 정보
shortTitle: Conditional access policy
intro: '엔터프라이즈에서 OIDC SSO를 사용하는 경우 {% data variables.product.prodname_dotcom %}는 IdP의 CAP(조건부 액세스 정책)를 사용하여 엔터프라이즈 및 해당 리소스에 대한 액세스의 유효성을 검사할 수 있습니다.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: aed7008bd008ccfd6303ccbb36f4d6f3bd7002ca
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179999'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## 조건부 액세스 정책에 대한 지원 정보

{% data reusables.enterprise-accounts.emu-cap-validates %}

{% data variables.product.product_name %}은(는) OIDC SSO를 사용하는 모든 {% data variables.enterprise.prodname_emu_enterprise %}에 대해 CAP를 지원합니다. {% data variables.product.product_name %}은(는) IdP의 IP 조건을 적용하지만 디바이스 준수 조건을 적용할 수는 없습니다. 엔터프라이즈 소유자는 {% data variables.product.product_name %}의 IP 허용 목록 대신 이 IP 허용 목록 구성을 사용하도록 선택할 수 있으며, OIDC SSO가 구성되면 이 작업을 수행할 수 있습니다. IP 허용 목록에 대한 자세한 내용은 "[IP 허용 목록으로 네트워크 트래픽 제한](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" 및 "[조직에 허용되는 IP 주소 관리"를 참조하세요](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization).


{% data variables.product.prodname_emus %}에서 OIDC를 사용하는 방법에 대한 자세한 내용은 “[용 OIDC 구성](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)” 및 “[SAML에서 OIDC로 마이그레이션](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)”을 참조하세요.

## 통합 및 자동화에 대한 고려 사항

{% data variables.product.prodname_dotcom %}는 CAP에 대한 유효성 검사를 위해 원래 IP 주소를 IdP로 보냅니다. IdP의 CAP에 의해 작업 및 앱이 차단되지 않도록 하려면 구성을 변경해야 합니다.

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

{% data variables.product.pat_generic %}을(를) 사용하는 작업은 IdP의 CAP에 의해 차단될 수 있습니다. {% data variables.product.pat_generic %}s는 서비스 계정에서 만든 다음, IdP의 CAP에 있는 IP 컨트롤에서 제외되는 것이 좋습니다. 

서비스 계정을 사용할 수 없는 경우 {% data variables.product.pat_generic %}s를 사용하는 작업의 차단을 해제하는 또 다른 옵션은 {% data variables.product.prodname_actions %}에서 사용하는 IP 범위를 허용하는 것입니다. 자세한 내용은 “[GitHub의 IP 주소 정보](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)”를 참조하세요.

### {% data variables.product.prodname_github_apps %} 및 {% data variables.product.prodname_oauth_apps %} 

{% data variables.product.prodname_github_apps %} 및 {% data variables.product.prodname_oauth_apps %}가 멤버를 대신해서 요청하면 {% data variables.product.prodname_dotcom %}는 유효성 검사를 위해 앱 서버의 IP 주소를 IdP로 보냅니다. 앱 서버의 IP 주소가 IdP의 CAP에서 유효한 것으로 확인되지 않으면 요청이 실패합니다.

사용하려는 앱의 소유자에게 문의하여 해당 IP 범위를 요청하고, 해당 IP 범위에서 액세스할 수 있도록 IdP의 CAP을 구성할 수 있습니다. 소유자에게 문의할 수 없는 경우 IdP 로그인 로그를 검토하여 요청에 표시된 IP 주소를 검토한 다음, 해당 주소를 허용 목록에 추가할 수 있습니다. 

엔터프라이즈의 모든 앱에 대해 모든 IP 범위를 허용하지 않으려면 IdP 허용 목록에서 설치된 {% data variables.product.prodname_github_apps %} 및 권한 있는 {% data variables.product.prodname_oauth_apps %}을(를) 제외할 수도 있습니다. 이렇게 하면 이러한 앱은 원래 IP 주소에 관계없이 계속 작동합니다. 자세한 내용은 “[엔터프라이즈에서 보안 설정에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps)”을 참조하세요.
