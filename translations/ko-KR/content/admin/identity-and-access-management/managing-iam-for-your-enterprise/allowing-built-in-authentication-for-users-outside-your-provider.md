---
title: 공급자 외부 사용자에게 기본 제공 인증 허용
intro: 'CAS, LDAP 또는 SAML 인증 공급자에 계정이 없는 사용자에 대한 기본 제공 인증을 허용하도록 대체 인증을 구성할 수 있습니다.'
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Fallback authentication
ms.openlocfilehash: d011a710898e19dfdfa3591cbba2cbf7ae629885
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064436'
---
## 공급자 외부 사용자에게 기본 제공 인증 정보

기본적으로 {% data variables.product.product_name %}에 외부 인증을 활성화하면 인스턴스에 대한 기본 제공 인증이 비활성화됩니다. 자세한 내용은 “[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)”를 참조하세요.

계약자 또는 머신 사용자에 대한 계정과 같이 외부 인증 공급자에 특정 계정을 추가할 수 없는 경우 대체 인증을 구성할 수 있습니다. 대체 인증을 사용하면 외부 사용자에 대한 기본 제공 인증을 허용하고 인증 공급자를 사용할 수 없는 경우 대체 계정에 액세스할 수 있습니다.

기본 제공 인증을 구성하고 사용자가 SAML 또는 CAS를 사용하여 성공적으로 인증하는 경우 더 이상 사용자 이름 및 암호로 인증할 수 있는 옵션이 없습니다. 사용자가 LDAP를 사용하여 성공적으로 인증하는 경우 자격 증명은 더 이상 내부 자격 증명으로 간주되지 않습니다.

{% warning %}

**경고:** 기본 제공 인증을 사용하지 않도록 설정하는 경우 인스턴스에 더 이상 액세스할 수 없는 사용자를 개별적으로 일시 중단해야 합니다. 자세한 내용은 “[사용자 일시 중단 및 일시 중단 해제](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)”를 참조하세요.

{% endwarning %}

## 공급자 외부 사용자에게 기본 제공 인증 구성

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. ID 공급자를 선택합니다.
  ![ID 공급자 옵션 선택](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. **기본 제공 인증을 사용하여 계정 만들기 허용** 을 선택합니다.
  ![기본 제공](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. 경고를 읽은 다음 **확인** 을 클릭합니다.

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## 인스턴스 인증을 위해 공급자 외부의 사용자 초대

사용자가 초대를 수락하면 IdP를 통해 로그인하는 대신 사용자 이름과 암호를 사용하여 로그인할 수 있습니다.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## 추가 참고 자료

- "[엔터프라이즈 IAM에 CAS 사용](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[엔터프라이즈 IAM에 LDAP 사용](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[엔터프라이즈 IAM에 SAML 사용](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"
