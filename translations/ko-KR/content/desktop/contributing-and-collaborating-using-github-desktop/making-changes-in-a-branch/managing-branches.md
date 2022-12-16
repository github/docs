---
title: 분기 관리
intro: 리포지토리의 기본 분기에서 분기를 만들어 변경 내용을 안전하게 실험할 수 있습니다.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-branches
versions:
  fpt: '*'
ms.openlocfilehash: 30604c6b3ed0ab9ca5c0f3f8ca0fe853624ee86b
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886944'
---
## 분기 관리 정보
분기를 사용하여 프로젝트의 변경 내용을 안전하게 실험할 수 있습니다. 분기는 리포지토리의 다른 분기에서 개발 작업을 격리합니다. 예를 들어 분기를 사용하여 새 기능을 개발하거나 버그를 수정할 수 있습니다.

항상 기존 분기에서 분기를 만듭니다. 일반적으로 리포지토리의 기본 분기에서 분기를 만들 수 있습니다. 그런 다음 다른 사용자가 리포지토리에 적용하는 변경 내용과 격리된 상태로 이 새 분기에서 작업할 수 있습니다.

분기 기록의 이전 커밋에서 시작하여 분기를 만들 수도 있습니다. 이는 버그를 조사하거나 최신 릴리스 위에 핫픽스를 만들기 위해 리포지토리의 이전 보기로 돌아가야 하는 경우에 유용할 수 있습니다.

작업에 만족하면 현재 분기의 변경 내용을 다른 분기로 병합하기 위해 끌어오기 요청을 만들 수 있습니다. 자세한 내용은 “[문제 또는 끌어오기 요청 만들기](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)” 및 “[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”를 참조하세요.

리포지토리에 대한 읽기 권한이 있는 경우 항상 {% data variables.product.prodname_desktop %}에서 분기를 만들 수 있지만 리포지토리에 대한 쓰기 액세스 권한이 있는 경우에만 분기를 {% data variables.product.prodname_dotcom %}로 푸시할 수 있습니다.

{% data reusables.desktop.protected-branches %}

## 분기 만들기

{% tip %}

**팁:** 만드는 첫 번째 새 분기는 기본 분기를 기반으로 합니다. 두 개 이상의 분기가 있는 경우 현재 체크 아웃된 분기 또는 기본 분기를 베이스로 새 분기를 선택할 수 있습니다.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![현재 분기를 전환하는 드롭다운 메뉴](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.create-new-branch %} ![분기 메뉴의 새 분기 옵션](/assets/images/help/desktop/new-branch-button-mac.png) {% data reusables.desktop.name-branch %} ![새 분기의 이름을 만들기 위한 필드](/assets/images/help/desktop/create-branch-name-mac.png) {% data reusables.desktop.select-base-branch %} ![베이스 분기 옵션](/assets/images/help/desktop/create-branch-choose-branch-mac.png) {% data reusables.desktop.confirm-new-branch-button %} ![분기 만들기 단추](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![현재 분기를 전환하는 드롭다운 메뉴](/assets/images/help/desktop/click-branch-in-drop-down-win.png) {% data reusables.desktop.create-new-branch %} ![분기 메뉴의 새 분기 옵션](/assets/images/help/desktop/new-branch-button-win.png) {% data reusables.desktop.name-branch %} ![새 분기의 이름을 만들기 위한 필드](/assets/images/help/desktop/create-branch-name-win.png) {% data reusables.desktop.select-base-branch %} ![베이스 분기 옵션](/assets/images/help/desktop/create-branch-choose-branch-win.png) {% data reusables.desktop.confirm-new-branch-button %} ![분기 만들기 단추](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

## 이전 커밋에서 분기 만들기

{% data reusables.desktop.history-tab %}
2. 새 분기를 만들려는 커밋을 마우스 오른쪽 단추로 클릭하고 **커밋에서 분기 만들기** 를 선택합니다.
  ![커밋 컨텍스트 메뉴에서 분기 만들기](/assets/images/help/desktop/create-branch-from-commit-context-menu.png) {% data reusables.desktop.name-branch %} {% data reusables.desktop.confirm-new-branch-button %} ![커밋에서 분기 만들기](/assets/images/help/desktop/create-branch-from-commit-overview.png)

## 분기 게시

{% data variables.product.product_name %}에 분기를 만드는 경우 {% data variables.product.prodname_dotcom %}에서 협업할 수 있도록 분기를 게시해야 합니다.

1. 앱 위쪽에서 {% octicon "git-branch" aria-label="The branch icon" %} **현재 분기** 를 클릭한 다음 게시하려는 분기를 클릭합니다.
  ![게시할 분기를 선택하는 드롭다운 메뉴](/assets/images/help/desktop/select-branch-from-dropdown.png)
2. **분기 게시** 를 클릭합니다.
  ![분기 게시 단추](/assets/images/help/desktop/publish-branch-button.png)

## 분기 간 전환
리포지토리의 분기를 보고 커밋할 수 있습니다. 커밋되지 않은 저장된 변경 내용이 있는 경우 분기를 전환하기 전에 변경 내용으로 수행할 작업을 결정해야 합니다. 현재 분기에서 변경 내용을 커밋하거나 변경 내용을 스태시하여 현재 분기에 임시로 저장하거나 변경 내용을 새 분기로 가져올 수 있습니다. 분기를 전환하기 전에 변경 내용을 커밋하려면 “[프로젝트 변경 내용 커밋 및 검토](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)”를 참조하세요.
{% tip %}

**팁**: **고급** 설정에서 분기 전환에 대한 기본 동작을 설정할 수 있습니다. 자세한 내용은 “[기본 설정 구성](/desktop/getting-started-with-github-desktop/configuring-basic-settings)”을 참조하세요.

{% endtip %}

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.switching-between-branches %} ![리포지토리의 분기 목록](/assets/images/help/desktop/select-branch-from-dropdown.png)
3. 커밋되지 않은 변경 사항을 저장한 경우 **변경 내용 유지** 또는 **변경 내용 가져오기** 를 선택한 다음 **분기 전환** 을 클릭합니다.
  ![변경 옵션을 사용하여 분기 전환](/assets/images/help/desktop/stash-changes-options.png)

## 분기 삭제

현재 열려 있는 끌어오기 요청과 연결된 분기는 삭제할 수 없습니다. 분기 삭제는 실행 취소할 수 없습니다.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %} ![삭제할 분기를 선택하는 드롭다운 메뉴](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-mac %} ![삭제... 분기 메뉴의 옵션](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %} ![삭제할 분기를 선택하는 드롭다운 메뉴](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-win %} ![삭제... 분기 메뉴의 옵션](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

## 추가 참고 자료

- “[{% data variables.product.prodname_desktop %}에서 리포지토리 복제](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)”
- {% data variables.product.prodname_dotcom %} 용어집의 “[분기](/articles/github-glossary/#branch)”
- “[분기 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)”
- Git 설명서의 “[분기에 대한 설명 요약](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)”
- “[변경 내용 스태시](/desktop/contributing-and-collaborating-using-github-desktop/stashing-changes)”
