---
title: 기본 제공 인증 구성
intro: '기본 인증 방법을 사용하면 모든 인증 세부 정보가 {% 데이터 variables.location.product_location %}에 저장됩니다.'
permissions: 'Site administrators can configure authentication for a {% data variables.product.product_name %} instance.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
  - /admin/authentication/using-built-in-authentication
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Configure built-in authentication
ms.openlocfilehash: 740f858e0804b5648ce85c016391333acdf7bccf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098398'
---
## 기본 제공 인증 정보

기본적으로 {% data variables.product.product_name %}는 기본 제공 인증을 사용합니다. 각 사용자는 초대 또는 등록을 통해 {% 데이터 variables.location.product_location %}에 사용자 계정을 만든 다음 인스턴스에 액세스하기 위한 계정의 자격 증명으로 인증합니다. {% data variables.product.product_name %} 인스턴스는 계정의 인증 정보를 저장합니다.

인증되지 않은 사용자가 인스턴스에 새 사용자 계정을 만드는 것을 방지할 수 있습니다. 자세한 내용은 “[인증되지 않은 등록 사용 안 함](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)”을 참조하세요.

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## 기본 제공 인증 구성

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. **기본 제공 인증** 을 선택합니다.
![기본 제공 인증 옵션 선택](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## 계정 만들기

인스턴스가 만들어지면 사용자 고유의 관리자 계정을 만들어야 합니다.

1. `http(s)://[hostname]/join`의 “관리자 계정 만들기” 페이지에서 사용자 이름, 암호 및 메일 주소를 선택한 다음 **계정 만들기** 를 클릭합니다.
![관리자 계정 만들기](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png) {% data reusables.enterprise_site_admin_settings.sign-in %}

## 다음 단계

<a name="inviting-users"></a>

기본 제공 인증을 구성하고 관리 계정을 만든 후에는 계정을 만들고 인스턴스를 사용하도록 사용자를 초대할 수 있습니다. 자세한 내용은 “[인스턴스를 사용하도록 사용자 초대](/admin/identity-and-access-management/using-built-in-authentication/inviting-people-to-use-your-instance)”를 참조하세요.

## 추가 참고 자료

- “[알림 메일 구성](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)”
