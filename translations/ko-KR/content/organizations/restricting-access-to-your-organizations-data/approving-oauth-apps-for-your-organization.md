---
title: 조직에 대한 OAuth 앱 승인
intro: 조직 구성원 또는 외부 협력자가 조직 리소스에 대한 {% 데이터 variables.product.prodname_oauth_app %} 액세스를 요청하는 경우 조직 소유자는 요청을 승인하거나 거부할 수 있습니다.
redirect_from:
- /articles/approving-third-party-applications-for-your-organization
- /articles/approving-oauth-apps-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Approve OAuth Apps
ms.openlocfilehash: 8f46ba7c8665054680c00918c25261a7897fd4da
ms.sourcegitcommit: 5bbf95add5dfb842c60870ae3919436c15a4d7a7
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/30/2022
ms.locfileid: "148008692"
---
{% 데이터 variables.product.prodname_oauth_app %} 액세스 제한을 사용하도록 설정하면 조직 구성원과 외부 협력자는 조직의 리소스에 액세스할 수 있는 {% 데이터 variables.product.prodname_oauth_app %}에 권한을 부여하기 전에 조직 소유자의 [승인을 요청](/articles/requesting-organization-approval-for-oauth-apps) 해야 합니다.

{% ifversion limit-app-access-requests %} {% data reusables.organizations.restricted-app-access-requests %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. 승인하려는 애플리케이션 옆에 있는 **검토** 를 클릭합니다.
![](/assets/images/help/settings/settings-third-party-approve-review.png)
6. 요청한 애플리케이션에 대한 정보를 검토한 후 **액세스 권한 부여** 를 클릭합니다.
![액세스 권한 부여 단추](/assets/images/help/settings/settings-third-party-approve-grant.png)

## 추가 참고 자료

- “[{% data variables.product.prodname_oauth_app %} 액세스 제한 정보](/articles/about-oauth-app-access-restrictions)”
