---
title: 조직의 설치된 통합 검토
intro: 조직의 설치된 통합에 대한 사용 권한 수준을 검토하고 조직 리포지토리에 대한 각 통합의 액세스를 구성할 수 있습니다.
redirect_from:
- /articles/reviewing-your-organization-s-installed-integrations
- /articles/reviewing-your-organizations-installed-integrations
- /github/setting-up-and-managing-organizations-and-teams/reviewing-your-organizations-installed-integrations
- /organizations/keeping-your-organization-secure/reviewing-your-organizations-installed-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Review installed integrations
ms.openlocfilehash: 66645e6ebb4305a34cd7735269d77881ea2ed5ee
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145135117"
---
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 사이드바의 "통합" 섹션에서 **{% octicon "apps" aria-label="The apps icon" %} {% data variables.product.prodname_github_apps %}** 를 클릭합니다.
{% else %}
1. 왼쪽 사이드바에서 **설치된 {% data variables.product.prodname_github_apps %}** 을 클릭합니다.
  ![조직 설정 사이드바의 설치된 {% data variables.product.prodname_github_apps %} 탭](/assets/images/help/organizations/org-settings-installed-github-apps.png) {% endif %}
2. 검토할 {% data variables.product.prodname_github_app %} 옆에 있는 **구성** 을 클릭합니다.
  ![구성 단추](/assets/images/help/organizations/configure-installed-integration-button.png)
6. {% data variables.product.prodname_github_app %}의 권한 및 리포지토리 액세스를 검토합니다.
  ![{% data variables.product.prodname_github_app %} 액세스 권한을 모든 리포지토리 또는 특정 리포지토리에 부여하는 옵션](/assets/images/help/organizations/toggle-integration-repo-access.png)
    - {% data variables.product.prodname_github_app %} 액세스 권한을 조직의 모든 리포지토리에 부여하려면 **모든 리포지토리** 를 선택합니다.
    - 애플리케이션 액세스 권한을 부여할 특정 리포지토리를 선택하려면 **선택된 리포지토리만** 을 선택한 다음 리포지토리 이름을 입력합니다.
7. **저장** 을 클릭합니다.
