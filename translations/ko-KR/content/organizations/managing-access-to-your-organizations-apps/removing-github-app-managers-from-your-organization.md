---
title: 조직에서 GitHub App 관리자 제거
intro: 조직 소유자는 조직의 구성원에게 부여된 {% data variables.product.prodname_github_app %} 관리자 권한을 취소할 수 있습니다.
redirect_from:
- /articles/removing-github-app-managers-from-your-organization
- /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove GitHub App managers
ms.openlocfilehash: c7dc813294a1fdd7e928a4212af30efa1182fd3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145135069"
---
{% data variables.product.prodname_github_app %} 관리자 권한에 대한 자세한 내용은 “[조직 내 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)”을 참조하세요.

## 전체 조직에 대한 {% data variables.product.prodname_github_app %} 관리자의 권한 제거

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. “관리”에서 {% data variables.product.prodname_github_app %} 관리자 권한을 제거할 사용자의 사용자 이름을 찾고 **철회** 를 클릭합니다.
![{% data variables.product.prodname_github_app %} 관리자 권한 철회](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

## 개별 {% data variables.product.prodname_github_app %}에 대한 {% data variables.product.prodname_github_app %} 관리자 권한 제거

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. “{% data variables.product.prodname_github_apps %}”에서 {% data variables.product.prodname_github_app %} 관리자를 제거할 앱의 아바타를 클릭합니다.
![{% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %} 선택
1. “앱 관리자”에서 {% data variables.product.prodname_github_app %} 관리자 권한을 제거할 사용자의 사용자 이름을 찾고 **철회** 를 클릭합니다.
![{% data variables.product.prodname_github_app %} 관리자 권한 철회](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% ifversion fpt or ghec %}
## 추가 참고 자료

- “[{% data variables.product.prodname_dotcom %} Marketplace 정보](/articles/about-github-marketplace/)” {% endif %}
