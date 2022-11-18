---
title: 리포지토리 정보
intro: 리포지토리에는 모든 프로젝트 파일과 각 파일의 수정 기록이 포함됩니다. 리포지토리 내에서 프로젝트의 작업을 논의하고 관리할 수 있습니다.
redirect_from:
  - /articles/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repositories
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 95e4033aa41f7920b5447554773dc61a181f5861
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163507'
---
## 리포지토리 정보

리포지토리는 개별적으로 소유하거나 조직의 다른 사용자와 리포지토리 소유권을 공유할 수 있습니다.

리포지토리의 표시 여부를 선택하여 리포지토리에 액세스할 수 있는 사용자를 제한할 수 있습니다. 자세한 내용은 "[리포지토리 표시 여부 정보](#about-repository-visibility)"를 참조하세요.

사용자 소유 리포지토리의 경우 프로젝트에서 공동 작업할 수 있도록 다른 사용자에게 협력자 액세스 권한을 부여할 수 있습니다. 조직에서 리포지토리를 소유한 경우 조직 구성원에게 리포지토리에서 공동 작업할 수 있도록 액세스 권한을 부여할 수 있습니다. 자세한 내용은 "[개인 계정 리포지토리에 대한 권한 수준](/articles/permission-levels-for-a-user-account-repository/)" 및 "[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"을 참조하세요.

{% ifversion fpt or ghec %} 개인 계정 및 조직용 {% data variables.product.prodname_free_team %}을 사용하면 전체 기능 집합이 있는 무제한 퍼블릭 리포지토리 또는 제한된 기능 집합이 있는 무제한 프라이빗 리포지토리에서 무제한 협력자와 함께 작업할 수 있습니다. 프라이빗 리포지토리에 대한 고급 도구를 얻으려면 {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} 또는 {% data variables.product.prodname_ghe_cloud %}로 업그레이드하면 됩니다. {% data reusables.gated-features.more-info %} {% else %} 각 사용자와 조직은 리포지토리를 무제한으로 소유하고 모든 리포지토리에 협력자를 무제한으로 초대할 수 있습니다.
{% endif %}

리포지토리를 사용하여 작업을 관리하고 다른 사람과 협업할 수 있습니다.
- 문제를 사용하여 사용자 피드백을 수집하고, 소프트웨어 버그를 보고하고, 수행할 작업을 구성할 수 있습니다. 자세한 내용은 "[문제 정보](/github/managing-your-work-on-github/about-issues)"를 참조하세요.{% ifversion fpt or ghec %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- 끌어오기 요청을 사용하여 리포지토리에 대한 변경을 제안할 수 있습니다. 자세한 내용은 “[끌어오기 요청 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”를 참조하세요.
- 프로젝트 보드를 사용하여 문제를 구성하고, 우선 순위를 지정하고, 요청을 끌어올 수 있습니다. 자세한 내용은 “[프로젝트 보드 정보](/github/managing-your-work-on-github/about-project-boards)”를 참조하세요.

{% data reusables.repositories.repo-size-limit %}

리포지토리를 가장 효과적으로 사용하는 방법을 알아보려면 "리[포지토리 모범 사례](/repositories/creating-and-managing-repositories/best-practices-for-repositories)"를 참조하세요.

## 리포지토리 표시 유형 정보

리포지토리의 표시 유형({% ifversion ghes or ghec %}퍼블릭, 내부 또는 프라이빗{% elsif ghae %}프라이빗 또는 내부{% else %} 퍼블릭 또는 프라이빗{% endif %})을 선택하여 리포지토리에 액세스할 수 있는 사용자를 제한할 수 있습니다.

{% ifversion fpt or ghec or ghes %}

리포지토리를 만들 때 리포지토리를 퍼블릭이나 프라이빗으로 만들 수 있습니다.{% ifversion ghec or ghes %} 엔터프라이즈 계정이 소유한 조직에서 리포지토리를 만드는 경우에는{% ifversion ghec %}{% endif %} 리포지토리를 내부로 만들 수도 있습니다.{% endif %}{% endif %}{% ifversion fpt %} 또한 {% data variables.product.prodname_ghe_cloud %}를 사용하며 엔터프라이즈 계정에서 소유하는 리포지토리를 내부 표시 유형으로 만들 수도 있습니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories)를 참조하세요.

{% elsif ghae %}

개인 계정이 소유한 리포지토리를 만드는 경우 리포지토리는 항상 프라이빗입니다. 조직에서 소유한 리포지토리를 만들 때 리포지토리를 프라이빗 또는 내부로 선택할 수 있습니다.

{% endif %}

{%- ifversion fpt or ghec %}
- 퍼블릭 리포지토리는 인터넷의 모든 사용자가 액세스할 수 있습니다.
- 프라이빗 리포지토리는 사용자, 사용자가 명시적으로 액세스 권한을 공유하는 사람과 (조직 리포지토리의 경우) 특정 조직 구성원만 액세스할 수 있습니다.
{%- elsif ghes %}
- {% data variables.location.product_location %}이(가) 프라이빗 모드 또는 방화벽 뒤에 있지 않으면 인터넷의 모든 사용자가 공용 리포지토리에 액세스할 수 있습니다. 그렇지 않으면 외부 협력자를 포함하여 {% data variables.location.product_location %}를 사용하는 모든 사용자가 공용 리포지토리를 사용할 수 있습니다.
- 프라이빗 리포지토리는 사용자, 사용자가 명시적으로 액세스 권한을 공유하는 사람과 (조직 리포지토리의 경우) 특정 조직 구성원만 액세스할 수 있습니다.
{%- elsif ghae %}
- 프라이빗 리포지토리는 사용자, 사용자가 명시적으로 액세스 권한을 공유하는 사람과 (조직 리포지토리의 경우) 특정 조직 구성원만 액세스할 수 있습니다.
{%- endif %} {%- ifversion ghec or ghes or ghae %}
- 내부 리포지토리는 모든 엔터프라이즈 구성원이 액세스할 수 있습니다. 자세한 내용은 "[내부 리포지토리 정보](#about-internal-repositories)"를 참조하세요.
{%- endif %}

조직 소유자는 항상 조직에서 만든 모든 리포지토리에 액세스할 수 있습니다. 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요.

리포지토리에 대한 관리자 권한이 있는 사용자는 기존 리포지토리의 표시 여부를 변경할 수 있습니다. 자세한 내용은 “[리포지토리 표시 여부 설정](/github/administering-a-repository/setting-repository-visibility)”을 참조하세요.

{% ifversion ghes or ghec or ghae %}
## 내부 리포지토리 정보

{% data reusables.repositories.about-internal-repos %} 내부 소스에 대한 자세한 내용은 {% data variables.product.prodname_dotcom %}의 백서인 "[내부 소스 소개](https://resources.github.com/whitepapers/introduction-to-innersource/)"를 참조하세요.

{% ifversion ghec %} {% note %}

**참고:** 엔터프라이즈 계정으로 {% data variables.product.prodname_ghe_cloud %}를 사용하는 경우에만 내부 리포지토리를 만들 수 있습니다. 엔터프라이즈 계정은 여러 조직에 대한 중앙 관리 지점을 허용하는 별도의 유형의 계정입니다. 자세한 내용은 "[{% data variables.product.prodname_dotcom %} 계정 유형"을 참조하세요](/get-started/learning-about-github/types-of-github-accounts).

{% endnote %} {% endif %}

모든 엔터프라이즈 구성원은 내부 리포지토리에 대한 읽기 권한을 가지지만, 내부 리포지토리는 조직 리포지토리의 외부 협력자를 포함해 {% ifversion fpt or ghec %}엔터프라이즈 외부의 사용자{% else %}조직의 구성원이 아닌 사용자{% endif %}에게는 표시되지 않습니다. 자세한 내용은 "[엔터프라이즈에서의 역할](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" 및 "[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"을 참조하세요.

{% ifversion ghes %} {% note %}

**참고:** 엔터프라이즈 구성원이 되고 내부 리포지토리에 액세스하려면 사용자는 조직의 구성원이어야 합니다. {% data variables.location.product_location %}의 사용자가 조직의 구성원이 아닌 경우 해당 사용자는 내부 리포지토리에 액세스할 수 없습니다.

{% endnote %} {% endif %}

{% data reusables.repositories.internal-repo-default %}

{% ifversion ghec %}사용자의 회사에서 {% data variables.product.prodname_emus %}를 사용하지 않는 한, 회사의 멤버{% else %}멤버{% endif %}는 회사의 조직이 소유한 모든 내부 리포지토리를 포크할 수 있습니다. 포크된 리포지토리는 구성원의 개인 계정에 속하며 포크의 표시 유형은 프라이빗입니다. 엔터프라이즈가 소유한 모든 조직에서 사용자가 제거되면 해당 사용자의 내부 리포지토리 포크가 자동으로 제거됩니다.

{% ifversion ghec %} {% note %}

**참고:** {% data variables.enterprise.prodname_managed_users_caps %}은(는) 내부 리포지토리를 포크할 수 없습니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts)”를 참조하세요.

{% endnote %} {% endif %} {% endif %}

## 리포지토리에서의 콘텐츠 및 차이 보기 제한

특정 유형의 리소스는 크기가 매우 크기 때문에 {% data variables.product.product_name %}에서의 과도한 처리가 요구됩니다. 따라서 요청이 적절한 시간 내에 완료될 수 있도록 제한이 설정됩니다.

아래 제한은 대부분은 {% data variables.product.product_name %} 및 API 모두에 영향을 줍니다.

### 텍스트 제한

**512KB** 를 초과하는 텍스트 파일은 항상 일반 텍스트로 표시됩니다. 코드는 강조 표시된 구문이 아니며, prose 파일은 HTML(Markdown, AsciiDoc 등)로 변환되지 않습니다.

**5MB** 를 초과하는 텍스트 파일은 `{% data variables.product.raw_github_com %}`(예: `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`)을 통해 제공되는 원시 URL을 통해서만 사용할 수 있습니다. **원시** 단추를 클릭하여 파일의 원시 URL을 가져옵니다.

### 차이 제한

차이가 매우 클 수 있으므로 커밋, 끌어오기 요청 및 비교 보기에 대한 차이에 이러한 제한을 적용합니다.

- 끌어오기 요청에서 총 차이는 로드할 수 있는 20,000줄 또는 원시 차이 데이터의 1MB를 초과할 수 없습니다.
- 단일 파일의 차이는 로드할 수 있는 20,000줄 또는 원시 차이 데이터의 500KB를 초과할 수 없습니다. 단일 파일에 대해 400줄과 20KB가 자동으로 로드됩니다.
- 단일 차이의 최대 파일 수는 300개로 제한됩니다.
- 단일 차이에서 렌더링 가능한 파일(이미지, PDF, GeoJSON 파일 등)의 최대 수는 25개로 제한됩니다.

제한된 차이의 일부 부분이 표시될 수 있지만, 제한을 초과하는 부분은 표시되지 않습니다.

### 커밋 나열 제한

비교 보기 및 끌어오기 요청 페이지에는 `base` 및 `head` 수정 간의 커밋 목록이 표시됩니다. 이러한 목록은 커밋 **250** 개로 제한됩니다. 이 제한이 초과된다면 추가 커밋이 있다는 뜻입니다(하지만 추가 커밋이 표시되지는 않습니다).

## 추가 참고 자료

- “[포크 정보](/github/collaborating-with-pull-requests/working-with-forks/about-forks)”
- "[문제 및 끌어오기 요청에 대한 공동 작업](/categories/collaborating-with-issues-and-pull-requests)"
- "[{% data variables.product.prodname_dotcom %}에서의 작업 관리](/categories/managing-your-work-on-github/)"
- "[리포지토리 관리](/categories/administering-a-repository)"
- "[그래프를 사용하여 리포지토리 데이터 시각화](/categories/visualizing-repository-data-with-graphs/)"
- “[Wiki 정보](/communities/documenting-your-project-with-wikis/about-wikis)”
- "[{% data variables.product.prodname_dotcom %} 용어](/articles/github-glossary)"
