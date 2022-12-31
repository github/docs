---
title: 리포지토리에 액세스할 수 있는 사용자 보기
intro: 조직 내의 리포지토리에 액세스할 수 있는 사용자 목록에 대해 보기{% ifversion ghec or ghes or ghae %} 및 내보내기{% endif %}를 수행할 수 있습니다.
redirect_from:
- /articles/viewing-people-with-access-to-your-repository
- /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: View people with access
permissions: Organization owners can view people with access to a repository.
ms.openlocfilehash: 01ee5b1844e32b4ba631fda67babaa9e9f8a982e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147066636"
---
## 리포지토리에 액세스할 수 있는 사용자 목록 정보

이 정보를 사용하여 사용자를 등록 해제하고, 규정 준수 및 기타 일반 보안 검사를 위해 데이터를 수집할 수 있습니다. 

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은 리포지토리에 액세스할 수 있는 사용자의 CSV 목록을 내보낼 수도 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository)를 참조하세요.
{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} ![ 액세스 관리 개요](/assets/images/help/repository/manage-access-overview.png) {% else %} ![리포지토리 사용자 권한 목록](/assets/images/help/repository/repository-permissions-list.png) {% endif %}
## 리포지토리에 액세스할 수 있는 사용자 보기

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} 리포지토리 설정에서 리포지토리에 액세스할 수 있는 팀 및 사용자의 개요를 결합하여 볼 수 있습니다. 자세한 내용은 “[리포지토리에 액세스할 수 있는 팀 및 사용자 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)”를 참조하세요. {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %} {% endif %}

{% ifversion ghec or ghes or ghae %}
## 리포지토리에 액세스할 수 있는 사용자 목록 내보내기

{% ifversion ghec %} {% note %}

**참고:** {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직만 리포지토리에 액세스할 수 있는 사용자 목록을 내보낼 수 있습니다. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %}
4. **CSV 내보내기** 를 클릭합니다.
  ![리포지토리 사이드바의 사용자 탭](/assets/images/help/repository/export-repository-permissions.png) {% endif %}
