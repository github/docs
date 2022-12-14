---
title: 릴리스에 연결
intro: GitHub에서 만든 모든 릴리스를 고유한 URL로 공유할 수 있습니다.
redirect_from:
  - /articles/linking-to-releases
  - /github/administering-a-repository/linking-to-releases
  - /github/administering-a-repository/releasing-projects-on-github/linking-to-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 9b07e71c6e6d35839d485e5e37c795ac3c663d0b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136671'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. 고유한 URL을 클립보드에 복사하려면 연결할 릴리스를 찾고 제목을 마우스 오른쪽 단추로 클릭한 다음 URL을 복사합니다.
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![릴리스 제목](/assets/images/help/releases/release-title.png) {% else %} ![릴리스 제목](/assets/images/help/releases/release-title-old.png) {% endif %}
1. 또는 **최신 릴리스** 를 마우스 오른쪽 단추로 클릭하고 공유할 수 있도록 URL을 복사합니다. 이 URL의 접미사는 항상 `/releases/latest`입니다.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![릴리스 태그 비교 메뉴](/assets/images/help/releases/refreshed-release-latest.png) {% else %} ![최신 릴리스 태그](/assets/images/help/releases/release_latest_release_tag.png) {% endif %} 수동으로 업로드한 최신 릴리스 자산 다운로드를 바로 링크하려면 `/owner/name/releases/latest/download/asset-name.zip`에 링크하세요.
