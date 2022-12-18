---
ms.openlocfilehash: a35ad50ac71e34c7aecdc8f58720f962375acabd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067789"
---

`workflow_run` 이벤트를 사용하는 경우 워크플로를 트리거하기 위해 트리거 워크플로를 실행해야 하는 분기를 지정할 수 있습니다.

`branches` 및 `branches-ignore` 필터는 `*`, `**`, `+`, `?`, `!` 및 그 외 두 개 이상의 분기 이름에 대한 일치 판정을 위한 문자 등의 문자를 사용하는 GLOB 패턴을 허용합니다. 이름에 해당 문자가 포함되어 있고 리터럴 일치를 원하는 경우 각 특수 문자를 `\`로 이스케이프해야 합니다. GLOB 패턴에 대한 자세한 내용은 “[필터 패턴 치트 시트](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”를 참조하세요.

예를 들어 다음 트리거가 있는 워크플로는 이름이 `releases/`로 시작하는 분기에서 `Build`라는 워크플로가 실행되는 경우에만 실행됩니다.

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

다음 트리거가 있는 워크플로는 이름이 `canary`가 아닌 분기에서 `Build`라는 워크플로가 실행되는 경우에만 실행됩니다.

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

워크플로의 동일한 이벤트에 대해 `branches` 필터와 `branches-ignore` 필터 둘 다는 사용할 수 없습니다. 단일 이벤트에 대한 분기 패턴을 포함 및 제외하려면 `!` 문자와 함께 `branches` 필터를 사용하여 제외해야 하는 분기를 나타냅니다.

패턴을 정의하는 순서가 중요합니다.

- 긍정 일치 후 일치하는 부정 패턴(접두사 `!`)은 분기를 제외합니다.
- 부정 일치 후 일치하는 긍정 패턴은 분기를 다시 포함합니다.

예를 들어 다음 트리거가 있는 워크플로는 이름이 `releases/10` 또는 `releases/beta/mona`인 분기에서 `Build`라는 워크플로가 실행되는 경우에만 실행되며 분기 이름이 `releases/10-alpha`, `releases/beta/3-alpha` 또는 `main`인 경우에는 그러지 않습니다.

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
