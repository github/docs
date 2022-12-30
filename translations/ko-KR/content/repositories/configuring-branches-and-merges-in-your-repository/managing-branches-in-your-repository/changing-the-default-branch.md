---
title: 기본 분기 변경
intro: 리포지토리에 분기가 두 개 이상 있는 경우 어떤 분기든지 기본 분기로 구성할 수 있습니다.
permissions: People with admin permissions to a repository can change the default branch for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
  - /github/administering-a-repository/changing-the-default-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/changing-the-default-branch
topics:
  - Repositories
shortTitle: Change the default branch
ms.openlocfilehash: e8f88499ab258e5855804288a4f811b38237df97
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136971'
---
## 기본 분기 변경 정보

리포지토리의 기본 분기를 선택할 수 있습니다. 기본 분기는 끌어오기 요청 및 코드 커밋의 기본 분기입니다. 기본 분기에 대한 자세한 내용은 “[분기 정보](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”를 참조하세요.

{% ifversion not ghae %} {% note %}

**참고**: Git-Subversion 브리지를 사용하는 경우 기본 분기를 변경하면 `trunk` 분기 콘텐츠 및 `HEAD`에 영향을 주고 원격 리포지토리에 대한 참조를 나열할 때 표시됩니다. 자세한 내용은 Git 설명서에서 "[Subversion 클라이언트 지원](/github/importing-your-projects-to-github/support-for-subversion-clients)" 및 [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html)를 참조하세요.

{% endnote %} {% endif %}

기본 분기의 이름을 바꿀 수도 있습니다. 자세한 내용은 "[분기 이름 바꾸기](/github/administering-a-repository/renaming-a-branch)"를 참조하세요.

{% data reusables.branches.set-default-branch %}

## 필수 조건

기본 분기를 변경하려면 리포지토리에 둘 이상의 분기가 있어야 합니다. 자세한 내용은 “[리포지토리 내에서 분기 만들기 및 삭제](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)”를 참조하세요.

## 기본 분기 변경

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. "기본 분기"의 기본 분기 이름 오른쪽에서 {% octicon "arrow-switch" aria-label="The switch icon with two arrows" %}를 클릭합니다.
   ![현재 기본 분기 이름의 오른쪽에 두 개의 화살표가 있는 전환 아이콘](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. 드롭다운을 사용한 다음, 분기 이름을 클릭합니다.
   ![드롭다운하여 새 기본 분기 선택](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. **업데이트** 를 클릭합니다.
   ![새 기본 분기를 선택한 후 "업데이트" 단추](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. 경고를 읽은 다음, **이해하고 있으며 기본 분기를 업데이트합니다.** 를 클릭합니다.
   ![업데이트를 실행하는 "이해하고 있으며 기본 분기를 업데이트합니다." 단추](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

