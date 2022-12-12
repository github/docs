---
title: 조직에 OAuth 앱 액세스 제한 사용 안 함
intro: 조직 소유자는 조직의 리소스에 액세스할 수 있는 {% data variables.product.prodname_oauth_apps %}에 대한 제한을 사용하지 않도록 설정할 수 있습니다.
redirect_from:
- /articles/disabling-third-party-application-restrictions-for-your-organization
- /articles/disabling-oauth-app-access-restrictions-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Disable OAuth App
ms.openlocfilehash: 41fae63d8d491eec7a6cd6a275958d5c96fb5f5c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145140599"
---
{% danger %}

**경고**: 조직에 대한 {% data variables.product.prodname_oauth_app %} 액세스 제한을 사용하지 않도록 설정하면 조직 구성원이 개인 계정 설정에서 사용할 애플리케이션을 승인할 때 조직의 비공개 리소스에 대한 {% data variables.product.prodname_oauth_app %} 액세스 권한을 자동으로 부여합니다.

{% enddanger %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. **제한 제거** 를 클릭합니다.
  ![제한 제거 단추](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. 타사 애플리케이션 제한을 사용하지 않도록 설정하는 방법에 대한 정보를 검토한 후 **예. 애플리케이션 제한을 제거합니다** 를 클릭합니다.
  ![제거 확인 단추](/assets/images/help/settings/settings-third-party-confirm-disable.png)
