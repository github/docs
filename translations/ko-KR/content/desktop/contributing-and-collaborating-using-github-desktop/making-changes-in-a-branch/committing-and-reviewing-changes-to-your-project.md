---
title: 프로젝트 변경 내용 커밋 및 검토
intro: '{% data variables.product.prodname_desktop %}은 편집할 때 모든 파일의 모든 변경 내용을 추적합니다. 변경 내용을 그룹화하여 의미 있는 커밋을 만드는 방법을 결정할 수 있습니다.'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
versions:
  fpt: '*'
shortTitle: Commit & review changes
ms.openlocfilehash: ecc12722a7d0eebeedc13878972d138ca894db5a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117556'
---
## 커밋 정보

{% data reusables.commits.about-commits %} 협업하는 커밋에 공동 작성자를 추가할 수도 있습니다.

{% data reusables.desktop.update-email-address %} 자세한 내용은 “[GitHub Desktop용 Git 구성](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)”을 참조하세요.

## 분기 선택 및 변경

1. [새 분기 만들기](/desktop/guides/contributing-to-projects/managing-branches) 또는 툴바에서 {% octicon "git-branch" aria-label="The branch icon" %} **현재 분기** 를 클릭하고 목록에서 분기를 선택하여 기존 분기를 선택합니다.

  ![현재 분기를 전환하는 드롭다운 메뉴](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.make-changes %}

## Diff 표시 방법 선택

검토 요구에 맞게 {% data variables.product.prodname_desktop %}에 Diff가 표시되는 방식을 변경할 수 있습니다.

Diff 보기 방법을 변경하려면 Diff 보기의 오른쪽 위 모서리에서 {% octicon "gear" aria-label="The Gear icon" %}을 클릭합니다.
- 전체 diff가 표시되는 방식을 변경하려면 “Diff 표시”에서 **통합** 또는 **분할** 을 선택합니다. 통합 보기는 변경 내용을 선형으로 표시하고 분할 보기는 왼쪽에 이전 콘텐츠, 오른쪽에는 새 콘텐츠를 표시합니다.
- 보다 실질적인 변경 내용에 집중할 수 있도록 공백 변경 내용을 숨기려면 **공백 변경 내용 숨기기** 를 선택합니다.

![Diff 옵션 메뉴](/assets/images/help/desktop/diff-selection.png)

{% data variables.product.prodname_desktop %}이 기본적으로 표시하는 것보다 더 많은 파일이 표시되어야 하는 경우 Diff를 확장할 수 있습니다.
- 강조 표시된 변경 내용 위 또는 아래의 다음 몇 줄을 보려면 줄 번호 위 또는 아래 화살표를 클릭합니다.
- 전체 파일을 보려면 Diff 보기를 마우스 오른쪽 단추로 클릭하고 **전체 파일 확장** 을 클릭합니다.

![Diff 보기 확장](/assets/images/help/desktop/expand-diff-view.png)

## 커밋에 포함할 변경 내용 선택

텍스트 편집기에서 파일을 변경하고 로컬로 저장하면 {% data variables.product.prodname_desktop %}에서도 변경 내용이 표시됩니다.

* 빨간색 {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} 아이콘은 제거된 파일을 나타냅니다.
* 노란색 {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} 아이콘은 수정된 파일을 나타냅니다.
* 녹색 {% octicon "diff-added" aria-label="The diff added icon color-green" %} 아이콘은 추가된 파일을 나타냅니다.
* 스태시된 변경 내용에 액세스하려면 **스태시된 변경 내용** 을 클릭합니다.

  ![스태시된 변경 내용 옵션](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}

  ![변경된 모든 파일을 커밋하려면 확인란을 선택](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}

  ![커밋할 파일 옆에 있는 확인란 선택](/assets/images/help/desktop/commit-some.png)

### 부분 커밋 만들기

한 파일에 여러 변경 내용이 포함되어 있지만 일부 변경 내용만 커밋에 포함하려는 경우 부분 커밋을 만들 수 있습니다. 나머지 변경 내용은 그대로 유지되므로 추가 수정 및 커밋을 수행할 수 있습니다. 이렇게 하면 코드 또는 산문 변경 내용과 별도로 커밋의 줄 바꿈 변경 내용을 유지하는 것과 같이 의미 있는 별도의 커밋을 수행할 수 있습니다.

커밋에서 변경된 줄을 제외하려면 파란색이 사라지도록 하나 이상의 변경된 줄을 클릭합니다. 여전히 파란색으로 강조 표시된 선이 커밋에 포함됩니다.

  ![파일에서 선택되지 않은 줄](/assets/images/help/desktop/partial-commit.png)

## 변경 내용 취소
유지하지 않으려는 커밋되지 않은 변경 내용이 있는 경우 변경 내용을 삭제할 수 있습니다. 그러면 컴퓨터의 파일에서 변경 내용이 제거됩니다. 커밋되지 않은 모든 변경 내용을 하나 이상의 파일에서 삭제하거나 추가한 특정 줄을 삭제할 수 있습니다.

삭제된 변경 내용은 휴지통의 날짜가 지정된 파일에 저장됩니다. 휴지통을 비울 때까지 삭제된 변경 내용을 복구할 수 있습니다.

### 하나 이상의 파일에서 변경 내용 삭제

{% data reusables.desktop.select-discard-files %} {% data reusables.desktop.click-discard-files %}

  ![컨텍스트 메뉴의 변경 내용 취소 옵션](/assets/images/help/desktop/discard-changes-mac.png) {% data reusables.desktop.confirm-discard-files %}

  ![확인 대화 상자의 변경 내용 취소 단추](/assets/images/help/desktop/discard-changes-confirm-mac.png)

### 하나 이상의 줄에서 변경 내용 삭제
커밋되지 않은 하나 이상의 변경된 줄을 삭제할 수 있습니다.

{% note %}

**참고:** 한 줄 삭제는 선을 추가하고 제거하는 변경 내용 그룹에서 사용하지 않도록 설정됩니다.

{% endnote %}

추가된 줄을 삭제하려면 변경된 줄 목록에서 삭제할 줄을 마우스 오른쪽 단추로 클릭하고 **추가된 줄 삭제** 를 선택합니다.

  ![확인 대화 상자에서 한 줄 삭제](/assets/images/help/desktop/discard-single-line.png)

변경된 줄 그룹을 취소하려면 삭제하려는 줄의 줄 번호 오른쪽에 있는 세로 막대를 마우스 오른쪽 단추로 클릭한 다음 **추가된 줄 삭제** 를 선택합니다.

  ![확인 대화 상자에서 추가된 줄 그룹을 삭제](/assets/images/help/desktop/discard-multiple-lines.png)


## 커밋 메시지 작성 및 변경 내용 푸시

커밋에 포함하도록 선택한 변경 내용에 만족하면 커밋 메시지를 작성하고 변경 내용을 푸시합니다. 커밋에 대해 협업한 경우 둘 이상의 작성자에게 커밋의 특성을 지정할 수도 있습니다.

{% note %}

**참고**: {% data reusables.desktop.tags-push-with-commits %} 자세한 내용은 “[태그 관리](/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/managing-tags)”를 참조하세요.

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![메시지 커밋 필드](/assets/images/help/desktop/commit-message.png)
1. 필요에 따라 커밋을 다른 작성자에게 특성화하려면 공동 작성자 추가 아이콘을 클릭하고 포함할 사용자 이름을 입력합니다.

  ![커밋 메시지에 공동 작성자 추가](/assets/images/help/desktop/add-co-author-commit.png) {% data reusables.desktop.commit-button %}

  ![[커밋] 단추](/assets/images/help/desktop/commit-button.png)
4. 커밋하려는 분기가 보호되면 데스크톱에서 경고합니다.
    - 변경 내용을 이동하려면 **분기 전환** 을 클릭합니다.
    - 보호된 분기에 변경 사항을 커밋하려면 **_BRANCH_ 에 커밋** 을 클릭합니다.

  분기 보호 규칙에 대한 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches)”를 참조하세요.

  ![보호된 분기 경고](/assets/images/help/desktop/protected-branch-warning.png) {% data reusables.desktop.push-origin %}

6. 작업 중인 분기를 기반으로 끌어오기 요청이 있는 경우 {% data variables.product.prodname_desktop %}은 끌어오기 요청에 대해 실행된 검사의 상태를 표시합니다. 검사에 대한 자세한 내용은 "[GitHub Desktop에서 검사 보기 및 다시 실행](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)"을 참조하세요.

 ![분기 이름 옆에 표시되는 검사](/assets/images/help/desktop/checks-dialog.png)

 현재 분기에 대한 끌어오기 요청이 만들어지지 않은 경우 {% data variables.product.prodname_desktop %}에서 만들 수 있는 옵션을 제공합니다. 자세한 내용은 "[이슈 또는 끌어오기 요청 만들기](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request)"를 참조하세요.

 ![끌어오기 요청 만들기](/assets/images/help/desktop/mac-create-pull-request.png)
