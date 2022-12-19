---
title: CAS 사용
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication
  - /enterprise/admin/articles/about-cas-authentication
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
  - /admin/authentication/using-cas
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-cas
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-cas
intro: 'CAS(중앙 인증 서비스)를 사용하여 여러 웹 애플리케이션에 대한 액세스를 중앙 집중화하는 경우 인스턴스에 대한 CAS 인증을 구성하여 {% data variables.product.product_name %}를 통합할 수 있습니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 6064d3cc063068ee5be602d70c1c0031270539d2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099174'
---
## {% data variables.product.product_name %}에 대한 CAS 인증 정보

CAS는 여러 웹 애플리케이션에 대한 인증을 중앙 집중화하는 SSO(Single Sign-On) 프로토콜입니다. 자세한 내용은 Wikipedia의 "[중앙 인증 서비스](https://en.wikipedia.org/wiki/Central_Authentication_Service)"를 참조하세요.

CAS를 구성한 후 {% 데이터 variables.location.product_location %}을(를) 사용하는 사람은 {% 데이터 variables.product.pat_generic %}을(를) 사용하여 HTTP(S)를 통해 API 또는 Git 요청을 인증해야 합니다. CAS 자격 증명은 이러한 요청을 인증하는 데 사용할 수 없습니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)"를 참조하세요.

CAS를 구성하는 경우 IDP(ID 공급자)에 계정이 있는 사용자는 사용자가 {% 데이터 variables.location.product_location %}에 로그인할 때까지 사용자 라이선스를 사용하지 않습니다.

{% data reusables.enterprise_user_management.built-in-authentication %}

## CAS를 사용하는 사용자 이름 고려 사항

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} 자세한 내용은 “[외부 인증에 대한 사용자 이름 고려 사항](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)”을 참조하세요.

## CAS 특성

다음 특성을 사용할 수 있습니다.

| 특성 이름           | 형식     | 설명 |
|--------------------------|----------|-------------|
| `username`               | 필수 | {% data variables.product.prodname_ghe_server %} 사용자 이름입니다. |

## CAS 구성

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. **CAS** 를 선택합니다.

   ![인증을 위한 CAS 선택 스크린샷](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![CAS에 대한 대체 기본 제공 인증 옵션의 스크린샷](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. **서버 URL** 필드에 CAS 서버의 전체 URL을 입력합니다. CAS 서버에서 {% data variables.product.prodname_ghe_server %}로 유효성을 검사할 수 없는 인증서를 사용하는 경우 `ghe-ssl-ca-certificate-install` 명령을 사용하여 신뢰할 수 있는 인증서로 설치할 수 있습니다. 자세한 내용은 “[명령줄 유틸리티](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install)”를 참조하세요.
