---
title: 리포지토리 보관
intro: 리포지토리를 보관하여 모든 사용자에 대해 읽기 전용으로 만들고 더 이상 활성으로 유지 관리되지 않음을 나타낼 수 있습니다. 보관된 리포지토리를 보관 해제할 수도 있습니다.
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a9d5b33b94e6067bb4decfa8f47da8aa25860da4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145137055'
---
## 리포지토리 보관 정보

{% ifversion fpt or ghec %} {% note %}

**참고:** 레거시 리포지토리당 청구 플랜이 있는 경우 보관된 리포지토리에 대한 요금이 계속 청구됩니다. 보관된 리포지토리에 대한 요금이 청구되지 않도록 하려면 새 제품으로 업그레이드해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 제품](/articles/github-s-products)”을 참조하세요.

{% endnote %} {% endif %}

{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %} {% note %}

**참고:** {% data variables.product.prodname_GH_advanced_security %}를 사용하는 고객은 보관된 리포지토리에서 {% data variables.product.prodname_secret_scanning %}을 사용하도록 설정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %} 정보](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-private-repositories)”를 참조하세요.

{% endnote %} {% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

리포지토리가 보관되면 공동 작업자 또는 팀을 추가하거나 제거할 수 없습니다. 리포지토리에 액세스할 수 있는 기여자는 프로젝트를 포크하거나 별표로 표시할 수 있습니다.

리포지토리가 보관되면 해당 이슈, 끌어오기 요청, 코드, 레이블, 마일스톤, 프로젝트, wiki, 릴리스, 커밋, 태그, 분기, 반응, 코드 검사 경고, 주석, 사용 권한은 읽기 전용이 됩니다. 보관된 리포지토리에서 변경을 수행하려면 먼저 리포지토리의 보관을 취소해야 합니다.

보관된 리포지토리를 검색할 수 있습니다. 자세한 내용은 “[리포지토리 검색](/search-github/searching-on-github/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)”을 참조하세요. 또한 보관된 리포지토리 내에서 이슈 및 끌어오기 요청을 검색할 수도 있습니다. 자세한 내용은 “[이슈 및 끌어오기 요청 검색](/search-github/searching-on-github/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived)”을 참조하세요.  

## 리포지토리 보관

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. “위험 영역”에서 **이 리포지토리 보관** 또는 **이 리포지토리 보관 취소** 를 클릭합니다.
   ![이 리포지토리 보관 단추](/assets/images/help/repository/archive-repository.png)
4. 경고를 읽습니다.
5. 보관하거나 보관을 취소하려는 리포지토리의 이름을 입력합니다.
  ![리포지토리 보관 경고](/assets/images/help/repository/archive-repository-warnings.png)
6. **결과를 이해하고 있으며 이 리포지토리를 보관합니다.** 를 클릭합니다.
