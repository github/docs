---
title: OAuth 앱 액세스 제한 정보
intro: 조직은 {% data variables.product.prodname_oauth_app %} 액세스 제한을 사용하도록 설정하여 해당 리포지토리 및 기타 리소스에 액세스할 수 있는 {% data variables.product.prodname_oauth_apps %}을 선택할 수 있습니다.
redirect_from:
- /articles/about-third-party-application-restrictions
- /articles/about-oauth-app-access-restrictions
- /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: OAuth App access
ms.openlocfilehash: 0259f27cf89d8dec1aca7bd47e6293d62d8d190c
ms.sourcegitcommit: 5bbf95add5dfb842c60870ae3919436c15a4d7a7
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/30/2022
ms.locfileid: "148008707"
---
## OAuth 앱 액세스 제한 정보

{% data reusables.apps.oauth-app-access-restrictions %}

{% ifversion limit-app-access-requests %} {% data reusables.organizations.restricted-app-access-requests %} {% endif %}

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**팁**: 조직에서 {% data variables.product.prodname_oauth_app %} 액세스 제한을 설정하지 않은 경우 조직 구성원이 승인한 모든 {% data variables.product.prodname_oauth_app %}은 조직의 프라이빗 리소스에 액세스할 수도 있습니다.

{% endtip %}

{% ifversion fpt %} 조직의 리소스를 더욱 보호하려면 SAML Single Sign-On과 같은 보안 기능을 포함하는 {% data variables.product.prodname_ghe_cloud %}로 업그레이드할 수 있습니다. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

## {% data variables.product.prodname_oauth_app %} 액세스 제한 설정

조직 소유자가 처음으로 {% data variables.product.prodname_oauth_app %} 액세스 제한을 설정하는 경우:

- **조직이 소유한 애플리케이션** 에는 조직의 리소스에 대한 액세스 권한이 자동으로 부여됩니다.
- **{% data variables.product.prodname_oauth_apps %}** 는 조직의 리소스에 대한 액세스 권한을 즉시 잃게 됩니다.
- **2014년 2월 이전에 만든 SSH 키** 는 조직의 리소스에 대한 액세스 권한(사용자 및 배포 키 포함)을 즉시 잃게 됩니다.
- **2014년 2월 중 또는 그 이후에 {% data variables.product.prodname_oauth_apps %}에서 만든 SSH 키** 는 조직의 리소스에 대한 액세스 권한을 즉시 잃게 됩니다.
- **프라이빗 조직 리포지토리에서 후크 전송** 은 더 이상 승인되지 않은 {% data variables.product.prodname_oauth_apps %}로 전송되지 않습니다.
- 프라이빗 조직 리소스에 대한 **API 액세스** 는 더 이상 승인되지 않은 {% data variables.product.prodname_oauth_apps %}에서 사용할 수 없습니다. 또한 퍼블릭 조직 리소스에 대해 권한 있는 생성, 업데이트, 삭제 작업이 없습니다.
- **사용자가 만든 후크 및 2014년 5월 이전에 만든 후크** 는 영향을 받지 않습니다.
- **조직 소유 리포지토리의 프라이빗 포크** 에는 조직의 액세스 제한이 적용됩니다.

## SSH 액세스 오류 해결

2014년 2월 이전에 만든 SSH 키가 {% data variables.product.prodname_oauth_app %} 액세스 제한을 사용하도록 설정된 조직에 대해 액세스 권한을 잃게 되면, 이후 SSH 액세스 시도가 실패합니다. 사용자에게는 키를 승인하거나 신뢰할 수 있는 키를 업로드할 수 있는 URL을 알려주는 오류 메시지가 나타납니다.

## Webhook

제한을 사용하도록 설정한 후 {% data variables.product.prodname_oauth_app %}에 조직에 대한 액세스 권한이 부여되면 이 {% data variables.product.prodname_oauth_app %}에서 만든 모든 기존의 웹후크가 디스패치를 다시 시작합니다.

조직이 이전에 승인한 {% data variables.product.prodname_oauth_app %}에서 액세스를 제거하면 이 애플리케이션에서 만든 모든 기존 웹후크는 더 이상 디스패치되지 않습니다(이 후크는 사용할 수 없도록 설정되지만 삭제되지는 않음).

## 액세스 제한 다시 사용

조직에서 {% data variables.product.prodname_oauth_app %} 액세스 애플리케이션 제한을 사용하지 않도록 설정했다가 나중에 다시 사용하도록 설정하는 경우, 이전에 승인된 {% data variables.product.prodname_oauth_app %}에는 자동으로 조직의 리소스에 대한 액세스 권한이 부여됩니다.

## 추가 참고 자료

- “[조직에 대한 {% data variables.product.prodname_oauth_app %} 액세스 제한 사용](/articles/enabling-oauth-app-access-restrictions-for-your-organization)”
- “[조직에 대한 {% data variables.product.prodname_oauth_apps %} 승인](/articles/approving-oauth-apps-for-your-organization)”
- “[조직의 설치된 통합 검토](/articles/reviewing-your-organization-s-installed-integrations)”
- “[조직에 대해 이전에 승인된 {% data variables.product.prodname_oauth_app %}에 대한 액세스 거부](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)”
- “[조직에 대해 {% data variables.product.prodname_oauth_app %} 액세스 제한 사용 안 함](/articles/disabling-oauth-app-access-restrictions-for-your-organization)”
- “[{% data variables.product.prodname_oauth_apps %}에 대한 조직 승인 요청](/articles/requesting-organization-approval-for-oauth-apps)”
- “[{% data variables.product.prodname_oauth_apps %} 권한 부여](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)”
