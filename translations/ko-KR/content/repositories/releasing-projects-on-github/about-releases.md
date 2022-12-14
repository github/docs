---
title: 릴리스 정보
intro: '릴리스를 만들어서 다른 사용자가 사용할 수 있도록 소프트웨어와 함께 릴리스 정보, 이진 파일에 대한 링크를 패키지할 수 있습니다.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f0435993e244d470fc5f58afe8b8b2f264d9f95c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881507'
---
## 릴리스 정보

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} ![ 릴리스 개요](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% elsif ghae-issue-4972 %} ![릴리스 개요](/assets/images/help/releases/releases-overview-with-contributors.png) {% else %} ![릴리스 개요](/assets/images/help/releases/releases-overview.png) {% endif %}

릴리스는 배포 가능한 소프트웨어 반복으로, 패키지 하여 더 많은 사용자가 다운로드하고 사용할 수 있습니다.

릴리스는 리포지토리 기록의 특정 지점을 표시하는 [Git 태그](https://git-scm.com/book/en/Git-Basics-Tagging)를 기반으로 합니다. 태그 날짜는 서로 다른 시간에 만들 수 있으므로 릴리스 날짜와 다를 수 있습니다. 기존 태그를 보는 방법에 대한 자세한 내용은 "[리포지토리의 릴리스 및 태그 보기](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)"를 참조하세요.

리포지토리에 대한 다른 업데이트에 관한 알림을 받지 않고 리포지토리에 새 릴리스가 게시될 때 알림을 받을 수 있습니다. 자세한 내용은 “[구독 보기](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)”를 참조하세요.

리포지토리에 대한 읽기 권한이 있는 사용자는 릴리스를 보고 비교할 수 있지만 리포지토리에 대한 쓰기 권한이 있는 사용자만 릴리스를 관리할 수 있습니다. 자세한 내용은 “[리포지토리에서 릴리스 관리](/github/administering-a-repository/managing-releases-in-a-repository)”를 참조하세요.

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4974 %} 릴리스를 관리하는 동안 릴리스 정보를 수동으로 만들 수 있습니다. 또는 기본 템플릿에서 릴리스 정보를 자동으로 생성하거나 고유한 릴리스 정보 템플릿을 사용자 지정할 수 있습니다. 자세한 내용은 "[자동으로 생성된 릴리스 정보](/repositories/releasing-projects-on-github/automatically-generated-release-notes)"를 참조하세요.
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7054 %} 릴리스에 대한 세부 정보를 볼 때 각 릴리스 자산의 생성 날짜가 릴리스 자산 옆에 표시됩니다.
{% endif %}

{% ifversion fpt or ghec %} 리포지토리에 대한 관리자 권한이 있는 사용자는 {% data variables.large_files.product_name_long %}({% data variables.large_files.product_name_short %}) 개체가 각 릴리스에 대해 {% data variables.product.product_name %}에서 생성되는 ZIP 파일 및 tarball에 포함되는지 여부를 선택할 수 있습니다. 자세한 내용은 “[리포지토리의 보관 파일로 {% data variables.large_files.product_name_short %} 개체 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)”를 참조하세요.

릴리스에서 보안 취약성을 수정하는 경우 리포지토리에 보안 권고를 게시해야 합니다. {% data variables.product.prodname_dotcom %}는 게시된 각 보안 공지를 검토하고 이를 사용하여 영향을 받는 리포지토리에 {% data variables.product.prodname_dependabot_alerts %}를 보낼 수 있습니다. 자세한 내용은 “[GitHub 보안 공지 정보](/github/managing-security-vulnerabilities/about-github-security-advisories)”를 참조하세요.

종속성 그래프의 **종속성** 탭을 보고 리포지토리의 코드에 종속된 리포지토리 및 패키지를 확인할 수 있으므로 새 릴리스의 영향을 받을 수 있습니다. 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”를 참조하세요.
{% endif %}

릴리스 API를 사용하여 사용자가 릴리스 자산을 다운로드한 횟수와 같은 정보를 수집할 수도 있습니다. 자세한 내용은 "[릴리스](/rest/reference/releases)"를 참조하세요.

{% ifversion fpt or ghec %}
## 스토리지 및 대역폭 할당량

 릴리스에 포함된 각 파일은 {% data variables.large_files.max_file_size %}에 있어야 합니다. 릴리스의 총 크기나 대역폭 사용량에는 제한이 없습니다.

{% endif %}
