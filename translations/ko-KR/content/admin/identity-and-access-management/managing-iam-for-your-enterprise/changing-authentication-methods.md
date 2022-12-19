---
title: 인증 방법 변경
intro: '언제든지 {% data variables.product.prodname_ghe_server %}가 기존 계정으로 인증하는 방식을 변경할 수 있습니다.'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
  - /admin/authentication/changing-authentication-methods
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
versions:
  ghes: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Change authentication methods
ms.openlocfilehash: 8aa09520dc05689591a698b937604fb710201d4c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098117'
---
{% 데이터 variables.location.product_location %}의 사용자 계정은 인증 방법을 변경할 때 유지되며, 사용자는 사용자 이름이 변경되지 않는 한 동일한 계정에 계속 로그인합니다.

새 인증 방법이 사용자 이름을 변경하면 새 계정이 만들어집니다. 관리자는 사이트 관리자 설정을 통해 또는 [사용자 관리 API](/rest/reference/enterprise-admin#update-the-username-for-a-user)를 사용하여 사용자 이름을 변경할 수 있습니다.

고려해야 할 기타 문제는 다음과 같습니다.

* **암호:** 인스턴스에 기본 제공 인증을 사용하도록 전환하는 경우 변경이 완료된 후 사용자가 [암호를 설정](/enterprise/user/articles/how-can-i-reset-my-password/)해야 합니다.

* **사이트 관리자:** 관리 권한은 [SAML을 사용할 때 ID 공급자에 의해 제어](/enterprise/admin/guides/user-management/using-saml/#saml-attributes)되며 [LDAP를 사용할 때 그룹 멤버 자격으로 제어](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)할 수 있습니다.

* **팀 멤버 자격:** LDAP만 디렉터리 서버에서 [팀 멤버 자격을 제어](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)할 수 있습니다.

* **사용자 일시 중단:** LDAP를 사용하여 인증하는 경우 _제한된 그룹_ 을 통해 {% data variables.product.prodname_ghe_server %}에 대한 액세스를 제어할 수 있습니다. LDAP로 전환한 후 제한된 그룹이 구성된 경우 해당 그룹 중 하나에 없는 기존 사용자가 일시 중단됩니다. 일시 중단은 로그인할 때 또는 다음 LDAP 동기화 중에 발생합니다.

* **그룹 멤버 자격:** LDAP를 사용하여 인증하는 경우 사용자는 Active Directory의 제한된 그룹 멤버 자격 및 계정 상태에 따라 자동으로 [일시 중단되고 사용되지 않습니다](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users).

* **Git 인증:** SAML 및 CAS는 [{% 데이터 variables.product.pat_generic %}](/articles/creating-an-access-token-for-command-line-use)을(를) 사용하여 HTTP 또는 HTTPS를 통한 Git 인증만 지원합니다. HTTP 또는 HTTPS를 통한 암호 인증은 지원되지 않습니다. LDAP는 기본적으로 암호 기반 Git 인증을 지원하지만 해당 [메서드를 사용하지 않도록 설정하고](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations) {% 데이터 variables.product.pat_generic %} 또는 SSH 키를 통해 인증을 강제하는 것이 좋습니다.

* **API 인증:** SAML 및 CAS는 [{% 데이터 variables.product.pat_generic %}](/articles/creating-an-access-token-for-command-line-use)을(를) 사용하는 API 인증만 지원합니다. 기본 인증은 지원되지 않습니다.

* **2단계 인증:** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **외부 인증 공급자에 계정이 없는 사용자에 대한 대체 인증:** ID 공급자에 추가하지 않고 {% 데이터 variables.location.product_location %}에 인증하도록 사용자를 초대할 수 있습니다. 자세한 내용은 “[공급자 외부 사용자에게 기본 제공 인증 허용](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)”을 참조하세요.
