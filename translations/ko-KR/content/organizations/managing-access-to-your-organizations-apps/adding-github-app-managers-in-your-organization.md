---
title: 조직에서 GitHub App 관리자 추가
intro: 조직 소유자는 조직이 소유한 {% data variables.product.prodname_github_apps %}의 일부 또는 전부를 관리할 수 있는 권한을 사용자에게 부여할 수 있습니다.
redirect_from:
- /articles/adding-github-app-managers-in-your-organization
- /github/setting-up-and-managing-organizations-and-teams/adding-github-app-managers-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Add GitHub App managers
ms.openlocfilehash: d8389c85c847b750bdb83eb8b922ad16bfa33bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145135075"
---
{% data variables.product.prodname_github_app %} 관리자 권한에 대한 자세한 내용은 “[조직 내 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)”을 참조하세요.

## 조직 소유의 모든 {% data variables.product.prodname_github_apps %}을(를) 관리할 수 있는 기능 제공

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. “관리”에서 조직에서 {% data variables.product.prodname_github_app %} 관리자로 지정하려는 사용자의 사용자 이름을 입력하고 **권한 부여** 를 클릭합니다.
![{% data variables.product.prodname_github_app %} 관리자 추가](/assets/images/help/organizations/add-github-app-manager.png)

## 다른 사람에게 개별 {% data variables.product.prodname_github_app %}을(를) 관리할 수 있는 기능 제공

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. “{% data variables.product.prodname_github_apps %}”에서 {% data variables.product.prodname_github_app %} 관리자를 위해 추가할 앱의 아바타를 클릭합니다.
![{% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %} 선택
1. “앱 관리자”에서 앱의 GitHub 앱 관리자로 지정하려는 사용자의 사용자 이름을 입력하고 **권한 부여** 를 클릭합니다.
![특정 앱에 대한 {% data variables.product.prodname_github_app %} 관리자 추가](/assets/images/help/organizations/add-github-app-manager-for-app.png)

{% ifversion fpt or ghec %}
## 추가 참고 자료

- “[{% data variables.product.prodname_dotcom %} Marketplace 정보](/articles/about-github-marketplace/)” {% endif %}
