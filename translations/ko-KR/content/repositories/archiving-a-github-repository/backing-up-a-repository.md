---
title: 리포지토리 백업
intro: '{% ifversion ghes or ghae %}Git 및{% endif %} API {% ifversion fpt or ghec %}또는 타사 도구{% endif %}를 사용하여 리포지토리를 백업할 수 있습니다.'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 544d1661ef52be263deb1e0f67378b0e004ea5a3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099053'
---
{% ifversion fpt or ghec %}

리포지토리의 아카이브를 다운로드하려면 사용자 또는 조직 마이그레이션용 API를 사용할 수 있습니다. 자세한 내용은 “[마이그레이션](/rest/reference/migrations)”을 참조하세요.
{% else %}

리포지토리를 수동으로 다운로드하고 백업할 수 있습니다.

- 리포지토리의 Git 데이터를 로컬 컴퓨터에 다운로드하려면 리포지토리를 복제해야 합니다. 자세한 내용은 “[리포지토리 복제](/articles/cloning-a-repository)”를 참조하세요.
- 리포지토리의 wiki를 다운로드할 수도 있습니다. 자세한 내용은 “[wiki 페이지 추가 또는 편집](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)”을 참조하세요.

리포지토리 또는 wiki를 복제하면 프로젝트 파일 및 커밋 기록과 같은 Git 데이터만 다운로드됩니다. API를 사용하여 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에서 리포지토리의 다른 요소를 로컬 머신으로 내보낼 수 있습니다.

- [문제](/rest/reference/issues#list-issues-for-a-repository)
- [끌어오기 요청](/rest/reference/pulls#list-pull-requests)
- [포크](/rest/reference/repos#list-forks)
- [설명](/rest/reference/issues#list-issue-comments-for-a-repository)
- [마일스톤](/rest/reference/issues#list-milestones)
- [레이블](/rest/reference/issues#list-labels-for-a-repository)
- [Watchers](/rest/reference/activity#list-watchers)
- [Stargazers](/rest/reference/activity#list-stargazers)
- [프로젝트](/rest/reference/projects#list-repository-projects) {% endif %}

백업하려는 모든 콘텐츠의 {% ifversion ghes or ghae %}로컬 버전을 가지고 있는 경우, zip 아카이브를 만들 수 있으며 {% else %}아카이브를 다운로드한 경우 {% endif %}외부 하드 드라이브에 복사하거나 클라우드 기반 백업 또는 스토리지 서비스(예: [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/), [Google Drive](https://www.google.com/drive/) 또는 [Dropbox](https://www.dropbox.com/))에 업로드할 수 있습니다.

{% ifversion fpt or ghec %}
## 타사 백업 도구

리포지토리의 백업을 자동화하는 여러 셀프 서비스 도구가 있습니다. 옵트아웃하지 않은 {% data variables.product.product_name %}의 _모든_ 퍼블릭 리포지토리를 보관하고 누구나 데이터에 액세스할 수 있도록 하는 보관 프로젝트와 달리, 백업 도구는 _특정_ 리포지토리에서 데이터를 다운로드하고 새 분기 또는 디렉터리 내에서 구성합니다. 보관 프로젝트에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서의 콘텐츠 및 데이터 보관 정보](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)”를 참조하세요. 셀프 서비스 백업 도구에 대한 자세한 내용은 [{% data variables.product.prodname_marketplace %}의 백업 유틸리티 범주](https://github.com/marketplace?category=backup-utilities)를 참조하세요.
{% endif %}
