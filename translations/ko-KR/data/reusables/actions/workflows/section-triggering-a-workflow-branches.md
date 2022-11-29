---
ms.openlocfilehash: 476305b7c40430f20edb235a1c1ce73482464c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146064237"
---
`pull_request` 및 `pull_request_target` 이벤트를 사용하는 경우 특정 분기를 대상으로 하는 끌어오기 요청에 대해서만 실행되도록 워크플로를 구성할 수 있습니다.

분기 이름 패턴을 포함하려는 경우 또는 분기 이름 패턴을 포함하거나 제외하려는 경우 `branches` 필터를 사용합니다. 분기 이름 패턴만 제외하려는 경우 `branches-ignore` 필터를 사용합니다. 워크플로의 동일한 이벤트에 대해 `branches` 필터와 `branches-ignore` 필터 둘 다는 사용할 수 없습니다.

`branches`/`branches-ignore` 및 [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)를 둘 다 정의하는 경우 워크플로는 두 필터가 모두 충족될 때만 실행됩니다.

`branches` 및 `branches-ignore` 키워드는 `*`, `**`, `+`, `?`, `!` 및 두 개 이상의 분기 이름을 찾기 위한 기타 문자 등의 문자를 사용하는 GLOB 패턴을 허용합니다. 이름에 해당 문자가 포함되어 있고 리터럴 일치를 원하는 경우 각 특수 문자를 `\`로 이스케이프해야 합니다. GLOB 패턴에 대한 자세한 내용은 “[필터 패턴 치트 시트](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”를 참조하세요.

#### 예: 분기 포함

`branches`에 정의된 패턴은 Git ref의 이름에 따라 평가됩니다. 예를 들어 끌어오기 요청 대상 지정을 위한 `pull_request` 이벤트가 있을 때마다 다음 워크플로가 실행됩니다.

- `main`으로 명명된 분기(`refs/heads/main`)
- `mona/octocat`으로 명명된 분기(`refs/heads/mona/octocat`)
- `releases/10`과 같이 이름이 `releases/`로 시작하는 분기(`refs/heads/releases/10`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
```

#### 예: 분기 제외

패턴이 `branches-ignore` 패턴과 일치하면 워크플로가 실행되지 않습니다. `branches`에 정의된 패턴은 Git ref의 이름에 따라 평가됩니다. 예를 들어 끌어오기 요청의 대상을 지정하지 않는 한 `pull_request` 이벤트가 있을 때마다 다음 워크플로가 실행됩니다.

- `mona/octocat`으로 명명된 분기(`refs/heads/mona/octocat`)
- `releases/beta/3-alpha`와 같이 이름이 `releases/**-alpha`와 일치하는 분기(`refs/heads/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### 예: 분기 포함 및 제외

`branches` 및 `branches-ignore`를 사용하여 단일 워크플로의 동일한 이벤트를 필터링할 수 없습니다. 단일 이벤트에 대한 분기 패턴을 포함 및 제외하려면 `!` 문자와 함께 `branches` 필터를 사용하여 제외해야 하는 분기를 나타냅니다.

`!` 문자를 사용하여 분기를 정의하는 경우 `!` 문자 없이 하나 이상의 분기도 정의해야 합니다. 분기만 제외하려면 `branches-ignore`를 대신 사용합니다.

패턴을 정의하는 순서가 중요합니다.

- 긍정 일치 후 일치하는 부정 패턴(접두사 `!`)은 Git ref를 제외합니다.
- 부정 일치 후 일치하는 긍정 패턴은 Git ref를 다시 포함합니다.

다음 워크플로는 `releases/10` 또는 `releases/beta/mona`를 대상으로 하는 끌어오기 요청에 대한 `pull_request` 이벤트에서 실행되지만 `!releases/**-alpha` 부정 패턴이 긍정 패턴 이후에 나오므로 `releases/10-alpha` 또는 `releases/beta/3-alpha`를 대상으로 하는 끌어오기 요청에 대해서는 그러지 않습니다.

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```
