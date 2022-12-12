---
title: 조직의 리포지토리에 외부 협력자 추가
intro: 조직의 구성원이 아닌 사용자가 조직이 소유한 리포지토리에 액세스하도록 허용할 수 있습니다.
redirect_from:
- /articles/adding-outside-collaborators-to-repositories-in-your-organization
- /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Add outside collaborator
permissions: People with admin access to a repository can add an outside collaborator to the repository.
ms.openlocfilehash: caac79aba845f433effd3a3461e739d07cee135b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145135015"
---
## 외부 협력자 정보

외부 협력자는 조직의 구성원이 아니지만 하나 이상의 조직 리포지토리에 액세스할 수 있는 사람입니다. 각 외부 협력자에게 부여할 액세스 수준을 선택할 수 있습니다. {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은 협력자를 초대하는 기능을 제한할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서에서 "[외부 협력자를 추가하기 위한 권한 설정](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)"을 참조하세요.
{% else %} 조직 소유자는 협력자를 초대하는 기능을 제한할 수 있습니다. 자세한 내용은 “[외부 협력자를 추가하기 위한 권한 설정](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)”을 참조하세요.
{% endif %}

{% ifversion ghes %} 리포지토리에서 외부 협력자로 사용자를 추가하려면 먼저 {% data variables.product.product_location %}에 개인 계정이 있어야 합니다. 엔터프라이즈에서 SAML 또는 LDAP와 같은 외부 인증 시스템을 사용하는 경우 추가하려는 사람이 해당 시스템을 통해 로그인하여 계정을 만들어야 합니다. 사용자가 인증 시스템에 액세스할 수 없으며 엔터프라이즈에서 기본 제공 인증을 사용하도록 설정한 경우 사이트 관리자는 해당 사용자의 계정을 만들 수 있습니다. 자세한 내용은 “[기본 제공 인증 구성](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)”을 참조하세요.
{% endif %}

{% ifversion not ghae %} 조직에서 2단계 인증이 필요한 경우 모든 외부 협력자는 리포지토리에서 협업하도록 초대를 수락하기 전에 2단계 인증을 사용하도록 설정해야 합니다. 자세한 내용은 “[조직에서 2단계 인증 요구](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)”를 참조하세요.
{% endif %}

## 리포지토리에 외부 협력자 추가

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} 외부 협력자에게 리포지토리 설정의 리포지토리에 대한 액세스 권한을 부여할 수 있습니다. 자세한 내용은 “[리포지토리에 액세스할 수 있는 팀 및 사용자 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)”를 참조하세요. {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
5. 왼쪽 사이드바에서 **협력자 및 팀** 을 클릭합니다.
  ![협력자 및 팀이 강조 표시된 리포지토리 설정 사이드바](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. "협력자"에서 리포지토리에 대한 액세스 권한을 부여할 사람의 이름을 입력한 다음, **협력자 추가** 를 클릭합니다.
![검색 필드에 Octocat의 사용자 이름이 입력된 협력자 섹션](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. 새 협력자 이름 옆에 있는 드롭다운 메뉴를 사용하고 적절한 액세스 수준을 선택합니다.
![리포지토리 권한 선택기](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png) {% endif %}
