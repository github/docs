---
title: 분기 동기화
intro: '{% data variables.product.prodname_dotcom %}에서 프로젝트로 커밋이 푸시되므로 원격 리포지토리에서 끌어와 프로젝트의 로컬 복사본을 동기화 상태로 유지할 수 있습니다.'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
  - /desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch
versions:
  fpt: '*'
ms.openlocfilehash: eb803c8f5ef34c4ab25255c1635d31468b1b32af
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090146'
---
## 분기 동기화 정보

마지막으로 동기화한 이후 {% data variables.product.product_name %}의 분기에 추가된 커밋을 풀(pull)하여 로컬 분기를 원격 리포지토리와 동기화할 수 있습니다. 다른 디바이스에서 커밋하거나 여러 사람이 프로젝트에 기여하는 경우 로컬 분기를 동기화하여 분기를 업데이트된 상태로 유지해야 합니다.

로컬 분기로 풀할 때 리포지토리의 로컬 복사본만 업데이트합니다. {% data variables.product.prodname_dotcom %}에서 분기를 업데이트하려면 변경 내용을 푸시해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 변경 내용 푸시](/desktop/contributing-to-projects/pushing-changes-to-github)”를 참조하세요.

한 분기에서 다른 분기에 변경 내용을 추가하려면 분기를 병합할 수 있습니다. 동일한 리포지토리의 다른 분기에서 분기에 변경 내용을 적용하려면 {% data variables.product.prodname_desktop %}의 분기에 다른 분기를 병합할 수 있습니다. 분기의 변경 내용을 다른 분기, 동일한 리포지토리 또는 네트워크의 다른 리포지토리에 병합하도록 요청하려면 {% data variables.product.prodname_desktop %}에 끌어오기 요청을 만들 수 있습니다. 자세한 내용은 “[다른 분기를 프로젝트 분기에 병합](#merging-another-branch-into-your-project-branch)” 및 “[끌어오기 요청 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”를 참조하세요.

일부 워크플로는 병합 대신 다시 지정해야 하거나 다시 지정을 통해 이점을 누릴 수 있습니다. 다시 지정을 통해 함께 커밋의 순서를 변경하고 편집하거나 Squash할 수 있습니다. 자세한 내용은 “[Git 다시 지정 정보](/github/getting-started-with-github/about-git-rebase)” 및 “[프로젝트 분기를 다른 분기로 다시 지정](#rebasing-your-project-branch-onto-another-branch)”을 참조하세요.

## 원격에서 로컬 분기로 풀

1. {% data variables.product.prodname_desktop %}에서 {% octicon "git-branch" aria-label="The branch icon" %} **현재 분기** 드롭다운을 사용하고 업데이트하려는 로컬 분기를 선택합니다.
2.  원격 분기에서 커밋을 확인하려면 **origin 가져오기**
![origin 가져오기 단추](/assets/images/help/desktop/fetch-button.png)를 클릭합니다.
3. 원격 분기에서 커밋을 끌어오려면 다시 표시를 사용하여 **원본 끌어오기** 또는 **원본 끌어오기를** 클릭합니다.
![origin 풀 단추](/assets/images/help/desktop/pull-button.png) {% data reusables.desktop.resolve-merge-conflicts %}

## 다른 분기를 프로젝트 분기로 병합

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.choose-a-branch-to-merge %} {% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **참고:** 병합 충돌이 있는 경우 {% data variables.product.prodname_desktop %}에서 **병합 분기 <em>위에서</em>분기** 단추로 경고를 표시합니다. 모든 충돌을 해결할 때까지 분기를 병합할 수 없습니다.

   {% endnote %}

   ![병합 단추](/assets/images/help/desktop/merge-branch-button.png) {% data reusables.desktop.push-origin %}

## 프로젝트 분기를 다른 분기로 재지정

{% mac %}

1. 메뉴 모음에서 **분기** 드롭다운을 사용하고 **현재 분기 다시 지정** 을 클릭합니다.
![분기 드롭다운에서 현재 분기 다시 지정](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. 현재 분기로 다시 지정할 분기를 클릭한 다음 **다시 지정 시작** 을 클릭합니다.
![다시 지정 시작 단추](/assets/images/help/desktop/start-rebase-button.png)
3. 다시 지정하려는 경우 **다시 지정 시작** 을 클릭합니다.
![다시 지정 시작 단추](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. 로컬 변경 내용을 푸시하려면 **푸시 origin 적용** 을 클릭합니다.
![푸시 origin 적용](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. **분기** 드롭다운을 사용하고 **현재 분기 다시 지정** 을 클릭합니다.
![분기 드롭다운에서 현재 분기 다시 지정](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. 현재 분기로 다시 지정할 분기를 클릭한 다음 **다시 지정 시작** 을 클릭합니다.
![다시 지정 시작 단추](/assets/images/help/desktop/start-rebase-button.png)
3. 다시 지정하려는 경우 **다시 지정 시작** 을 클릭합니다.
![다시 지정 시작 단추](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. 로컬 변경 내용을 푸시하려면 **푸시 origin 적용** 을 클릭합니다.
![푸시 origin 적용](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

## 다른 분기를 프로젝트 분기로 Squash 및 병합

1. **분기** 드롭다운을 사용하고 **Squash 및 현재 분기에 병합** 을 클릭합니다.
![분기 드롭다운에서 Squash 및 병합](/assets/images/help/desktop/squash-and-merge-menu.png)
2. 현재 분기에 병합하려는 분기를 클릭한 다음 **Squash 및 병합** 을 클릭합니다.
![Squash 및 병합 단추](/assets/images/help/desktop/squash-and-merge-selection.png) {% note %}

   **참고:** 병합 충돌이 있는 경우 **Squash 및 병합** 단추 위의 {% data variables.product.prodname_desktop %}이 경고합니다. 모든 충돌을 해결할 때까지 분기를 Squash 및 병합할 수 없습니다.

   {% endnote %} {% data reusables.desktop.push-origin %}

## 추가 정보
- {% data variables.product.prodname_dotcom %} 용어집의 “[풀(pull)](/github/getting-started-with-github/github-glossary#pull)”
- {% data variables.product.prodname_dotcom %} 용어집의 “[병합](/github/getting-started-with-github/github-glossary#merge)”
- {% data variables.product.prodname_dotcom %} 용어집의 “[다시 지정](/github/getting-started-with-github/github-glossary#rebase)”
