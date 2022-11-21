---
title: 끌어오기 요청의 분기 비교 정보
intro: 끌어오기 요청에는 토픽 분기에서 수행한 변경 내용과 변경 내용을 병합하려는 기본 분기를 비교하는 diff가 표시됩니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
  - /articles/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Compare branches
ms.openlocfilehash: c45bcb3bceda42019be3139724e0b68234e90cfc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881806'
---
{% note %}

**참고:** 끌어오기 요청을 만들 때 변경 내용을 비교하는 베이스 분기를 변경할 수 있습니다. 자세한 내용은 “[끌어오기 요청 만들기](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)”를 참조하세요.

{% endnote %}

파일이 변경된 탭의 끌어오기 요청에서 제안된 변경 내용을 볼 수 있습니다. ![끌어오기 요청 파일 변경 탭](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

커밋 자체를 보는 대신 끌어오기 요청이 병합되면 제안된 변경 내용이 파일에 표시되므로 이를 볼 수 있습니다. 파일은 변경된 파일 탭 내에서 사전순으로 표시됩니다. 파일에 추가된 내용은 녹색으로 표시되고 `+` 기호가 앞에 표시되며 제거된 콘텐츠는 빨간색으로 표시되고 `-` 기호가 앞에 표시됩니다.

## Diff 보기 옵션

{% tip %}

**팁:** 변경 컨텍스트를 이해하는 데 어려움이 있는 경우 변경된 파일 탭에서 **보기** 를 클릭하여 제안된 변경 내용이 포함된 전체 파일을 볼 수 있습니다.

{% endtip %}

Diff를 볼 수 있는 몇 가지 옵션이 있습니다.
- 통합 보기는 업데이트된 콘텐츠와 기존 콘텐츠를 선형 보기로 함께 표시합니다.
- 분할 보기는 한쪽에 이전 콘텐츠가 표시되고 다른 쪽에는 새 콘텐츠가 표시됩니다.
- 서식 있는 Diff 보기는 끌어오기 요청이 병합된 후 변경 내용이 어떻게 보일지 미리 보여 줍니다.
- 원본 보기는 서식 있는 Diff 보기의 서식 없이 원본의 변경 내용을 표시합니다.

또한 공백 변경 내용을 무시하여 끌어오기 요청의 상당한 변경 내용을 보다 정확하게 볼 수 있습니다.

![Diff 보기 옵션 메뉴](/assets/images/help/pull_requests/diff-settings-menu.png)

큰 끌어오기 요청의 변경 내용 검토를 간소화하기 위해 Diff를 필터링하여 선택한 파일 형식만 표시하거나, CODEOWNER인 파일을 표시하거나, 이미 본 파일을 숨기거나, 삭제된 파일을 숨길 수 있습니다. 자세한 내용은 “[파일 형식별 끌어오기 요청의 파일 필터링](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)”을 참조하세요.

  ![파일 필터 드롭다운 메뉴](/assets/images/help/pull_requests/file-filter-menu.png)

## Diff에 표시되지 않는 이유
- 파일 또는 특정 파일 형식의 총 제한을 초과했습니다. 자세한 내용은 “[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#limits-for-viewing-content-and-diffs-in-a-repository)”를 참조하세요.
- 파일이 리포지토리의 *.gitattributes* 파일에 있는 규칙과 일치하여 해당 파일이 기본적으로 표시되지 않도록 차단합니다. 자세한 내용은 “[변경된 파일이 GitHub에 표시되는 방식 사용자 지정](/articles/customizing-how-changed-files-appear-on-github)”을 참조하세요.

## 3점 및 2점 Git Diff 비교

`git diff` 명령에는 두 개의 비교 메서드인 2점(`git diff A..B`)과 3점(`git diff A...B`)이 있습니다. 기본적으로 {% data variables.product.prodname_dotcom %}의 끌어오기 요청은 3점 diff를 표시합니다.

### 3점 Git diff 비교 

3점 비교는 두 분기의 최신 공통 커밋(병합 기준)과 토픽 분기의 최신 버전 간 차이점을 보여 줍니다.

### 2점 Git diff 비교

2점 비교는 기본 분기의 최신 상태(예: `main`)와 토픽 분기의 최신 버전 간 차이점을 보여 줍니다.

{% data variables.product.prodname_dotcom %}의 점 2개 비교 비교에서 두 개의 커밋 참조를 보려면 리포지토리의 “변경 내용 비교” 페이지의 URL을 편집할 수 있습니다. 자세한 내용은 _Pro Git_ 책 사이트에서 [“committish”에 대한 Git 용어집](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish)을 참조하세요.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

두 개의 점 Diff는 SHA 또는 OID(개체 ID)와 같은 두 개의 Git 커밋 참조를 서로 직접 비교합니다. {% data variables.product.prodname_dotcom %}에서 2점 Diff 비교의 Git 커밋 참조를 동일한 리포지토리 또는 해당 포크로 푸시해야 합니다.

끌어오기 요청에서 두 개의 점 Diff를 시뮬레이션하고 각 분기의 최신 버전 간의 비교를 보려면 베이스 분기를 토픽 분기에 병합하여 분기 간의 마지막 공통 상위 항목을 업데이트할 수 있습니다.

변경 내용을 비교하는 Git 명령에 대한 자세한 내용은 _Pro Git_ 책 사이트에서 “[Git Diff 옵션](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203)”을 참조하세요.

## {% data variables.product.prodname_dotcom %}의 3점 비교 정보

3점 비교는 병합 기준과 비교되므로 “끌어오기 요청이 도입하는 내용”에 초점을 맞추고 있습니다. 

2점 비교를 사용하는 경우 토픽 분기를 변경하지 않은 경우에도 기본 분기가 업데이트되면 diff가 변경됩니다. 또한 2점 비교는 기본 분기에 초점을 맞춥니다. 즉, 추가하는 모든 항목이 삭제된 것처럼 기본 분기에서 누락된 것으로 표시되고 그 반대의 경우도 마찬가지입니다. 결과적으로 토픽 분기가 도입하는 변경 내용이 모호해집니다.

반면, 3점 비교를 사용하여 분기를 비교하면 기본 분기가 업데이트되는 경우 토픽 분기의 변경 내용이 항상 diff에 포함됩니다. 이는 분기가 분할된 이후 diff가 모든 변경 내용을 표시하기 때문입니다.

### 자주 병합

혼동을 방지하려면 기본 분기(예: `main`)를 토픽 분기에 자주 병합합니다. 기본 분기를 병합하면 2점 및 3점 비교에서 표시되는 diff가 동일합니다. 가능한 한 빨리 끌어오기 요청을 병합하는 것이 좋습니다. 이렇게 하면 참가자가 끌어오기 요청을 더 작게 만들 수 있으며 일반적으로 권장됩니다.

## 추가 참고 자료

- “[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”
- “[포크 정보](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”
