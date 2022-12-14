---
title: 릴리스 비교
intro: 릴리스 태그를 비교하여 서로 다른 릴리스 간에 리포지토리에 대한 변경 내용을 확인할 수 있습니다.
permissions: People with read access to a repository can view and compare releases.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/comparing-releases
  - /github/administering-a-repository/releasing-projects-on-github/comparing-releases
ms.openlocfilehash: 12ec28717e8de8575a58487b02d5665044f471eb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136677'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. 기본으로 사용하려는 릴리스 옆에 있는 **비교** 를 클릭합니다.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![ 릴리스 태그 비교 메뉴](/assets/images/help/releases/refreshed-compare-tags.png) {% else %} ![릴리스 태그 비교 메뉴](/assets/images/help/releases/compare-tags-menu.png) {% endif %}
4. “비교” 드롭다운 메뉴를 사용하고 비교할 태그를 선택합니다.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![릴리스 태그 비교 메뉴](/assets/images/help/releases/refreshed-compare-tags-menu-options.png) {% else %} ![릴리스 태그 비교 메뉴 옵션](/assets/images/help/releases/compare-tags-menu-options.png) {% endif %}
