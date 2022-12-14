---
title: 조직에 OAuth 앱 액세스 제한 사용
intro: 조직 소유자는 {% data variables.product.prodname_oauth_app %} 액세스 제한을 사용하도록 설정하여 신뢰할 수 없는 앱이 조직의 리소스에 액세스하지 못하도록 하는 동시에, 조직 구성원이 개인 계정에 {% data variables.product.prodname_oauth_apps %}를 사용하도록 허용할 수 있습니다.
redirect_from:
- /articles/enabling-third-party-application-restrictions-for-your-organization
- /articles/enabling-oauth-app-access-restrictions-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/enabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Enable OAuth App
ms.openlocfilehash: 7ae5885530f449c8ce9981067b0d0fe8b23af0d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145140591"
---
{% data reusables.organizations.oauth_app_restrictions_default %}

{% warning %}

**경고**:
- {% data variables.product.prodname_oauth_app %} 액세스 제한을 사용하도록 설정하면 이전에 권한이 부여된 모든 {% data variables.product.prodname_oauth_apps %} 및 SSH 키에 대한 조직 액세스가 철회됩니다. 자세한 내용은 “[{% data variables.product.prodname_oauth_app %} 액세스 제한 정보](/articles/about-oauth-app-access-restrictions)”를 참조하세요.
- {% data variables.product.prodname_oauth_app %} 액세스 제한을 설정한 후에는 조직의 프라이빗 데이터에 지속적으로 액세스해야 하는 {% data variables.product.prodname_oauth_app %}에 대한 권한을 다시 부여해야 합니다. 모든 조직 구성원은 새 SSH 키를 만들어야 하며, 조직은 필요에 따라 새 배포 키를 만들어야 합니다.
- {% data variables.product.prodname_oauth_app %} 액세스 제한을 사용하도록 설정하면 애플리케이션에서 OAuth 토큰을 사용하여 {% data variables.product.prodname_marketplace %} 트랜잭션에 대한 정보에 액세스할 수 있습니다.

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. “타사 애플리케이션 액세스 정책”에서 **애플리케이션 액세스 제한 설정** 을 클릭합니다.
  ![제한 설정 단추](/assets/images/help/settings/settings-third-party-set-up-restrictions.png)
6. 타사 액세스 제한에 대한 정보를 검토한 후 **타사 애플리케이션 액세스 제한** 을 클릭합니다.
  ![제한 확인 단추](/assets/images/help/settings/settings-third-party-restrict-confirm.png)
