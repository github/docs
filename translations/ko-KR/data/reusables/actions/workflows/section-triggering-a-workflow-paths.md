---
ms.openlocfilehash: 621271104f28983cd2cc1319a302fc1654e54acb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067781"
---

`push` 및 `pull_request` 이벤트를 사용하는 경우 변경된 파일 경로에 따라 실행되도록 워크플로를 구성할 수 있습니다. 경로 필터는 태그 푸시에 대해 평가되지 않습니다.

파일 경로 패턴을 포함하려는 경우 또는 파일 경로 패턴을 포함 및 제외하려는 경우 `paths` 필터를 사용합니다. 파일 경로 패턴만 제외하려는 경우 `paths-ignore` 필터를 사용합니다. 워크플로의 동일한 이벤트에 대해 `paths` 필터와 `paths-ignore` 필터 둘 다는 사용할 수 없습니다.

`branches`/`branches-ignore` 및 `paths`를 둘 다 정의하는 경우 워크플로는 두 필터가 모두 충족될 때만 실행됩니다.

`paths` 및 `paths-ignore` 키워드는 둘 이상의 경로 이름에 대한 일치 판정을 위해 `*` 및 `**` 와일드카드 문자를 사용하는 GLOB 패턴을 허용합니다. 자세한 내용은 “[필터 패턴 치트 시트](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”를 참조하세요.

#### 예: 경로 포함

하나 이상의 경로가 `paths` 필터의 패턴과 일치하면 워크플로가 실행됩니다. 예를 들어 JavaScript 파일(`.js`)을 푸시할 때마다 다음 워크플로가 실행됩니다.

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**참고:** [경로 필터링](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [분기 필터링](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) 또는 [커밋 메시지](/actions/managing-workflow-runs/skipping-workflow-runs)로 인해 워크플로를 건너뛰는 경우 해당 워크플로와 연결된 검사는 “보류 중” 상태로 유지됩니다. 이러한 검사가 성공해야 하는 끌어오기 요청은 병합에서 차단됩니다. 자세한 내용은 “[건너뛰었으나 필요한 검사 처리](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks)”를 참조하세요.

{% endnote %}

#### 예: 경로 제외

모든 경로 이름이 `paths-ignore`의 패턴과 일치하면 워크플로가 실행되지 않습니다. 경로 이름이 `paths-ignore`의 패턴과 일치하지 않는 경우 일부 경로 이름이 패턴과 일치하더라도 워크플로가 실행됩니다.

다음 경로 필터가 있는 워크플로는 리포지토리의 루트에 있는 `docs` 디렉터리 외부에 하나 이상의 파일이 포함된 `push` 이벤트에서만 실행됩니다.

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### 예: 경로 포함 및 제외

`paths` 및 `paths-ignore`를 사용하여 단일 워크플로의 동일한 이벤트를 필터링할 수 없습니다. 단일 이벤트에 대한 경로 패턴을 포함 및 제외하려면 `!` 문자와 함께 `paths` 필터를 사용하여 제외해야 하는 경로를 나타냅니다.

`!` 문자를 사용하여 경로를 정의하는 경우 `!` 문자 없이 하나 이상의 경로도 정의해야 합니다. 경로만 제외하려면 `paths-ignore`를 대신 사용합니다.

패턴을 정의하는 순서가 중요합니다.

- 긍정 일치 후 일치하는 부정 패턴(접두사 `!`)은 경로를 제외합니다.
- 부정 일치 후 일치하는 긍정 패턴은 경로를 다시 포함합니다.

이 예제에서는 `sub-project/docs` 디렉터리에 파일이 없는 한 `push` 이벤트가 `sub-project` 디렉터리 또는 해당 하위 디렉터리에 파일을 포함할 때마다 실행됩니다. 예를 들어 `sub-project/index.js` 또는 `sub-project/src/index.js`를 변경한 푸시는 워크플로 실행을 트리거하지만, `sub-project/docs/readme.md`만 변경하는 푸시는 그러지 않습니다.

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Git 차이 비교

{% note %}

**참고:** 1,000개를 초과하는 커밋을 푸시하거나 {% data variables.product.prodname_dotcom %}가 시간 제한으로 인해 차이를 생성하지 않는 경우 워크플로가 항상 실행됩니다.

{% endnote %}

필터는 변경된 파일을 평가하고 `paths-ignore` 또는 `paths` 목록에 따라 이를 실행하여 워크플로 실행 여부를 결정합니다. 변경된 파일이 없으면 워크플로가 실행되지 않습니다.

{% data variables.product.prodname_dotcom %}는 푸시에는 2개의 점 차이를, 끌어오기 요청에는 3개의 점 차이를 사용하여 변경된 파일 목록을 생성합니다.
- **끌어오기 요청:** 세 개의 점 차이는 토픽 분기의 최신 버전과 토픽 분기가 기본 분기와 마지막으로 동기화된 커밋을 비교한 것입니다.
- **기존 분기로 푸시:** 두 개의 점 차이는 헤드와 기본 SHA를 서로 직접 비교합니다.
- **새 분기로 푸시:** 푸시된 가장 깊은 커밋의 상위 부모에 대한 두 개의 점 차이입니다.

차이는 300개의 파일로 제한됩니다. 필터에서 반환된 처음 300개 파일에서 일치하지 않는 파일이 변경된 경우 워크플로가 실행되지 않습니다. 워크플로가 자동으로 실행되도록 보다 구체적인 필터를 만들어야 할 수 있습니다.

자세한 내용은 “[끌어오기 요청의 분기 비교 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)”를 참조하세요.
