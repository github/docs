---
title: OAuth 앱에 대한 조직 승인 요청
intro: '조직 구성원 및 외부 협력자는 소유자가 {% data variables.product.prodname_oauth_apps %}에 대한 조직 리소스에 대한 액세스를 승인하도록 요청할 수 있습니다.'
redirect_from:
  - /articles/requesting-organization-approval-for-third-party-applications
  - /articles/requesting-organization-approval-for-your-authorized-applications
  - /articles/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Request OAuth App approval
ms.openlocfilehash: affc908d710811563e49bfee6a4e2e906750bf4b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008722'
---
## {% data variables.product.prodname_oauth_app %}에 대한 조직 승인 요청 정보

조직 구성원은 항상 사용하려는 {% data variables.product.prodname_oauth_apps %}에 대한 소유자 승인을 요청할 수 있으며 조직 소유자는 보류 중인 요청에 대한 알림을 받습니다. {% ifversion limit-app-access-requests %} 외부 협력자는 통합 액세스 요청을 사용하는 경우 사용하려는 {% data variables.product.prodname_oauth_apps %}에 대한 소유자 승인을 요청할 수 있습니다. 자세한 내용은 "[OAuth 앱 및 GitHub 앱 액세스 요청 제한"을 참조하세요.](/organizations/managing-organization-settings/limiting-oauth-app-and-github-app-access-requests) {% endif %}

## 개인 계정에 대해 이미 권한이 부여된 {% data variables.product.prodname_oauth_app %}에 대한 조직 승인 요청

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %}
3. 애플리케이션 목록에서 액세스를 요청하려는 {% data variables.product.prodname_oauth_app %}의 이름을 클릭합니다.
![애플리케이션 단추 보기](/assets/images/help/settings/settings-third-party-view-app.png)
4. {% data variables.product.prodname_oauth_app %}에 액세스하려는 조직 옆에 있는 **액세스 요청** 을 클릭합니다.
![액세스 요청 단추](/assets/images/help/settings/settings-third-party-request-access.png)
5. {% data variables.product.prodname_oauth_app %} 액세스 요청에 대한 정보를 검토한 후 **소유자에게 승인 요청** 을 클릭합니다.
![승인 요청 단추](/assets/images/help/settings/oauth-access-request-approval.png)

## 추가 참고 자료

- “[{% data variables.product.prodname_oauth_app %} 액세스 제한 정보](/articles/about-oauth-app-access-restrictions)”
