---
title: 인증되지 않은 등록 사용 안 함
redirect_from:
  - /enterprise/admin/articles/disabling-sign-ups
  - /enterprise/admin/user-management/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/disabling-unauthenticated-sign-ups
  - /admin/authentication/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
intro: '{% 데이터 variables.location.product_location %}에 기본 제공 인증을 사용하는 경우 인증되지 않은 사용자가 인스턴스에 새 사용자 계정을 만들지 못하도록 차단할 수 있습니다.'
permissions: 'Site administrators can disable unauthenticated sign-ups on a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Block unauthenticated sign-up
ms.openlocfilehash: 1a127b2937a00948dbeed2fecaf5ee706deb7359
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098758'
---
## 인증되지 않은 가입 정보

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %} 인증되지 않은 가입을 비활성화하고 인스턴스에 새 사용자 계정을 만들도록 초대를 요구할 수 있습니다.

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## 인증되지 않은 등록 사용 안 함

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. **등록 사용** 을 선택 취소합니다.
![등록 사용 확인란](/assets/images/enterprise/management-console/enable-sign-up.png) {% data reusables.enterprise_management_console.save-settings %}
