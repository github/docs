---
ms.openlocfilehash: 4e50754bfa8075681d503e689df630855eedbbab
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089105"
---

`push` 이벤트를 사용하는 경우 특정 분기 또는 태그에서 실행되도록 워크플로를 구성할 수 있습니다.

분기 이름 패턴을 포함하려는 경우 또는 분기 이름 패턴을 포함하거나 제외하려는 경우 `branches` 필터를 사용합니다. 분기 이름 패턴만 제외하려는 경우 `branches-ignore` 필터를 사용합니다. 워크플로의 동일한 이벤트에 대해 `branches` 필터와 `branches-ignore` 필터 둘 다는 사용할 수 없습니다.

태그 이름 패턴을 포함하려는 경우 또는 태그 이름 패턴을 포함하거나 제외하려는 경우 `tags` 필터를 사용합니다. 태그 이름 패턴만 제외하려는 경우 `tags-ignore` 필터를 사용합니다. 워크플로의 동일한 이벤트에 대해 `tags` 필터와 `tags-ignore` 필터 둘 다는 사용할 수 없습니다.

`tags`/`tags-ignore`만 정의하거나 `branches`/`branches-ignore`만 정의하는 경우 워크플로는 정의되지 않은 Git 참조에 영향을 주는 이벤트에 대해 실행되지 않습니다. `tags`/`tags-ignore` 및 `branches`/`branches-ignore`를 모두 정의하지 않는 경우 워크플로는 분기 또는 태그에 영향을 주는 이벤트에 대해 실행됩니다. `branches`/`branches-ignore` 및 [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)를 둘 다 정의하는 경우 워크플로는 두 필터가 모두 충족될 때만 실행됩니다.

`branches`, `branches-ignore`, `tags` 및 `tags-ignore` 키워드는 두 개 이상의 분기 또는 태그 이름과 일치하도록 `*`, `**`, `+`, `?`, `!` 등의 문자를 사용하는 GLOB 패턴을 허용합니다. 이름에 해당 문자가 포함되어 있고 리터럴 일치를 원하는 경우 각 특수 문자를 `\`로 이스케이프해야 합니다. GLOB 패턴에 대한 자세한 내용은 “[필터 패턴 치트 시트](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”를 참조하세요.

#### 예: 분기 및 태그 포함

`branches` 및 `tags`에 정의된 패턴은 Git 참조의 이름을 기준으로 평가됩니다. 예를 들어, 다음 워크플로는 `push` 이벤트가 있을 때마다 실행됩니다.

- `main`으로 명명된 분기(`refs/heads/main`)
- `mona/octocat`으로 명명된 분기(`refs/heads/mona/octocat`)
- `releases/10`과 같이 이름이 `releases/`로 시작하는 분기(`refs/heads/releases/10`)
- `v2` 태그(`refs/tags/v2`)
- `v1.9.1`처럼 이름이 `v1.`으로 시작하는 태그(`refs/tags/v1.9.1`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
    # Sequence of patterns matched against refs/tags
    tags:        
      - v2
      - v1.*
```

#### 예: 분기 및 태그 제외

패턴이 `branches-ignore` 또는 `tags-ignore` 패턴과 일치하면 워크플로가 실행되지 않습니다. `branches` 및 `tags`에 정의된 패턴은 Git 참조의 이름을 기준으로 평가됩니다. 예를 들어, `push` 이벤트가 다음을 대상으로 하지 않는 한 `push` 이벤트가 있을 때마다 다음 워크플로가 실행됩니다.

- `mona/octocat`으로 명명된 분기(`refs/heads/mona/octocat`)
- `beta/3-alpha`와 같이 이름이 `releases/**-alpha`와 일치하는 분기(`refs/releases/beta/3-alpha`)
- `v2` 태그(`refs/tags/v2`)
- `v1.9`처럼 이름이 `v1.`으로 시작하는 태그(`refs/tags/v1.9`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
    # Sequence of patterns matched against refs/tags
    tags-ignore:        
      - v2
      - v1.*
```

#### 예: 분기 및 태그 포함 및 제외

단일 워크플로에서 동일한 이벤트를 필터링하는 데는 `branches` 및 `branches-ignore`를 사용할 수 없습니다. 마찬가지로 단일 워크플로에서 동일한 이벤트를 필터링하는 데는 `tags` 및 `tags-ignore`를 사용할 수 없습니다. 단일 이벤트에 대한 분기 또는 태그 패턴을 포함하거나 제외하려면 `branches` 또는 `tags` 필터를 `!` 문자와 함께 사용하여 제외해야 하는 분기 또는 태그를 나타냅니다.

`!` 문자를 사용하여 분기를 정의하는 경우 `!` 문자 없이 하나 이상의 분기도 정의해야 합니다. 분기만 제외하려면 `branches-ignore`를 대신 사용합니다. 마찬가지로 `!` 문자를 사용하여 태그를 정의하는 경우 `!` 문자 없이 하나 이상의 태그도 정의해야 합니다. 태그만 제외하려면 대신 `tags-ignore`를 사용합니다.

패턴을 정의하는 순서가 중요합니다.

- 긍정 일치 후 일치하는 부정 패턴(접두사 `!`)은 Git ref를 제외합니다.
- 부정 일치 후 일치하는 긍정 패턴은 Git ref를 다시 포함합니다.

부정 패턴 `!releases/**-alpha`는 긍정 패턴을 따르므로 다음 워크플로는 `releases/10` 또는 `releases/beta/mona`에 대한 푸시에서 실행되지만 `releases/10-alpha` 또는 `releases/beta/3-alpha`에서는 실행되지 않습니다.

```yaml
on:
  push:
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
