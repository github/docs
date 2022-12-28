---
title: 끌어오기 요청 병합 정보
intro: '기능 분기의 모든 커밋을 유지하거나, 모든 커밋을 단일 커밋으로 스쿼시하거나, 개별 커밋을 `head` 분기에서 `base` 분기로 개별 커밋을 다시 적용하여 [끌어오기 요청을 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)할 수 있습니다.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
  - /articles/about-pull-request-merge-squashing
  - /articles/about-pull-request-merges
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-merges
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 73f55f86a4b4b18828a767959e580abde87ea906
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099317'
---
## 커밋 병합

{% data reusables.pull_requests.default_merge_option %}

## 커밋 스쿼시 및 병합

{% data reusables.pull_requests.squash_and_merge_summary %}

### Squash 병합에 대한 병합 메시지

{% ifversion default-merge-squash-commit-message %} 스쿼시 및 병합할 때 {% data variables.product.prodname_dotcom %}에서는 사용자가 편집할 수 있는 기본 커밋 메시지를 생성합니다. 리포지토리 구성 방법과 끌어오기 요청에 있는 커밋 수(병합 커밋은 제외)에 따라, 이 메시지에는 끌어오기 요청 제목, 끌어오기 요청 설명 또는 커밋 관련 정보가 포함될 수 있습니다.
{% else %} Squash 및 병합할 때 {% data variables.product.prodname_dotcom %}에서는 사용자가 편집할 수 있는 기본 커밋 메시지를 생성합니다. 기본 메시지는 끌어오기 요청의 커밋 수에 따라 달라지며 병합 커밋은 포함하지 않습니다.

커밋 수 | 요약 | Description |
----------------- | ------- | ----------- | 
하나의 커밋 | 단일 커밋에 대한 커밋 메시지의 제목과 끌어오기 요청 번호 | 단일 커밋에 대한 커밋 메시지의 본문 텍스트
둘 이상의 커밋 | 끌어오기 요청 제목과 끌어오기 요청 번호 | 모든 Squash된 커밋에 대한 커밋 메시지 목록(날짜 순서)
{% endif %}

커밋 수 | 요약 | Description |
----------------- | ------- | ----------- |
하나의 커밋 | 단일 커밋에 대한 커밋 메시지의 제목과 끌어오기 요청 번호 | 단일 커밋에 대한 커밋 메시지의 본문 텍스트
둘 이상의 커밋 | 끌어오기 요청 제목과 끌어오기 요청 번호 | 모든 Squash된 커밋에 대한 커밋 메시지 목록(날짜 순서)

{% ifversion default-merge-squash-commit-message %} 리포지토리에 대한 유지 관리자 또는 관리자 액세스 권한이 있는 사람은 모든 스쿼시된 커밋에 대한 리포지토리의 기본 병합 메시지가 끌어오기 요청 제목만 사용하거나, 끌어오기 요청 제목 및 커밋 세부 정보를 사용하거나, 끌어오기 요청 제목 및 설명을 사용하도록 설정할 수 있습니다. 자세한 내용은 "[커밋 스쿼시 구성](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)"을 참조하세요.{% endif %}

{% ifversion ghes = 3.6 %} 리포지토리에 대한 관리자 액세스 권한이 있는 사용자는 끌어오기 요청의 제목을 모든 스쿼시된 커밋에 대한 기본 병합 메시지로 사용하도록 리포지토리를 구성할 수 있습니다. 자세한 내용은 "[커밋 Squash 구성](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)"을 참조하세요.
{% endif %}

### 장기 실행 분기 Squash 및 병합

끌어오기 요청이 병합된 후 끌어오기 요청의 [헤드 분기](/github/getting-started-with-github/github-glossary#head-branch)에서 작업을 계속하려면 끌어오기 요청을 Squash하고 병합하지 않는 것이 좋습니다.

끌어오기 요청을 만들 때 {% data variables.product.prodname_dotcom %}은 헤드 분기와 [베이스 분기](/github/getting-started-with-github/github-glossary#base-branch) 모두에 있는 가장 최근 커밋인 공통 상위 커밋을 식별합니다. 끌어오기 요청을 Squash하고 병합할 때 {% data variables.product.prodname_dotcom %}는 공통 상위 커밋 이후 헤드 분기에서 수행한 모든 변경 내용을 포함하는 커밋을 베이스 분기에 만듭니다.

이 커밋은 헤드 분기가 아닌 베이스 분기에만 있으므로 두 분기의 공통 상위 항목은 변경되지 않습니다. 헤드 분기에서 계속 작업한 다음 두 분기 간에 새 끌어오기 요청을 만들면 끌어오기 요청에는 이전 끌어오기 요청에서 Squash 및 병합한 커밋을 포함하여 공통 상위 항목 이후의 모든 커밋이 포함됩니다. 충돌이 없으면 이러한 커밋을 안전하게 병합할 수 있습니다. 그러나 이 워크플로는 병합이 충돌할 가능성을 더 높입니다. 장기 실행 헤드 분기에 대한 끌어오기 요청을 계속 Squash하고 병합하는 경우 동일한 충돌을 반복적으로 해결해야 합니다.

## 커밋 다시 지정 및 병합

{% data reusables.pull_requests.rebase_and_merge_summary %}

다음과 같은 경우 {% 데이터 variables.location.product_location %}에 자동으로 다시 기반하고 병합할 수 없습니다.
- 끌어오기 요청에 병합 충돌이 있습니다.
- 베이스 분기에서 헤드 분기로 커밋을 다시 실행하면 충돌이 실행됩니다.
- 커밋을 다시 지정하는 것은 병합 충돌 없이 다시 지정이 가능하지만 병합과는 다른 결과를 생성하는 경우와 같이 “안전하지 않은” 것으로 간주됩니다.

여전히 커밋을 다시 지정하려고 하지만 {% 데이터 variables.location.product_location %}에서 자동으로 다시 지정하고 병합할 수 없는 경우 다음을 수행해야 합니다.
- 명령줄에서 로컬로 베이스 분기에 토픽 분기(또는 헤드 분기)를 다시 지정
- [명령줄에서 병합 충돌을 해결합니다](/articles/resolving-a-merge-conflict-using-the-command-line/).
- 다시 지정된 커밋을 끌어오기 요청의 토픽 분기(또는 원격 헤드 분기)에 강제 푸시합니다.

리포지토리에 쓰기 권한이 있는 사용자는 {% 데이터 variables.location.product_location %}의 다시 기반 및 병합 단추를 사용하여 [변경 내용을 병합](/articles/merging-a-pull-request/) 할 수 있습니다.

## 간접 병합

끌어오기 요청은 헤드 분기가 외부적으로 기본 분기에 직접 또는 간접적으로 병합되는 경우 자동으로 병합될 수 있습니다. 즉, 대상 분기의 끝에서 헤드 분기의 팁 커밋에 연결할 수 있게 되면 예를 들면 다음과 같습니다.

* 분기 `main` 가 커밋 **C** 에 있습니다.
* 분기 `feature` 가 분기 해제되었으며 `main` 현재 커밋 **D** 에 있습니다. 이 분기에는 끌어오기 요청 대상 지정이 있습니다 `main`.
* 분기 `feature_2` 가 분기되고 `feature` 현재 커밋 **E** 에 있습니다. 이 분기에는 끌어오기 요청 대상도 있습니다 `main`.

끌어오기 요청 **E** --> `main`가 먼저 병합되면 끌어오기 요청 **D** --> `main`는 이제 모든 커밋에 `feature` 연결할 수 `main`있으므로 *자동으로* 병합된 것으로 표시됩니다. 명령줄에서 서버에 병합 `feature_2` 하고 서버로 `main` 푸시 `main` 하면 두 끌어오기 요청 *이 모두* 병합된 것으로 표시됩니다.

이 상황에서 끌어오기 요청은 [분기 보호 규칙이](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-rules) 충족되지 않은 경우에도 표시됩니다`merged`.

## 추가 참고 자료

- “[끌어오기 요청 정보](/articles/about-pull-requests/)”
- “[병합 충돌 처리](/github/collaborating-with-pull-requests/addressing-merge-conflicts)”
