---
title: 워크플로 상태 배지 추가
shortTitle: Add a status badge
intro: 리포지토리에 상태 배지를 표시하여 워크플로의 상태를 나타낼 수 있습니다.
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 3c6fafea5be53c49e464cb65d0db3773873a843f
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009521'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**참고**: 프라이빗 리포지토리의 워크플로 배지는 외부에서 액세스할 수 없으므로 외부 사이트에서 배지를 포함하거나 연결할 수 없습니다.

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


`README.md` 파일에 워크플로 상태 배지를 추가하려면 먼저 표시할 상태 배지의 URL을 찾습니다. 그런 다음 Markdown을 사용하여 `README.md` 파일에서 배지를 이미지로 표시할 수 있습니다. Markdown의 이미지 태그에 대한 자세한 내용은 “[기본 쓰기 및 서식 지정 구문](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)”을 참조하세요.

## 워크플로 파일 이름 사용

워크플로 파일의 이름을 사용하여 워크플로 상태 배지의 URL을 빌드할 수 있습니다.

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

`README.md` 파일에 워크플로 상태 배지를 표시하려면 이미지 포함을 위해 Markdown 태그를 사용합니다. Markdown의 이미지 태그에 대한 자세한 내용은 “[기본 쓰기 및 서식 지정 구문](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)”을 참조하세요.

예를 들어 `README.md` 파일에 다음 Markdown을 추가하여 파일 경로가 `.github/workflows/main.yml`인 워크플로의 상태 배지를 추가합니다. 리포지토리의 `OWNER`는 `github` 조직이고 `REPOSITORY` 이름은 `docs`입니다.

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## `branch` 매개 변수 사용

특정 분기의 워크플로 실행 상태를 표시하려면 상태 배지 URL의 끝에 `?branch=<BRANCH_NAME>`을 추가합니다.

예를 들어 다음 Markdown을 `README.md` 파일에 추가하여 이름이 `feature-1`인 분기의 상태 배지를 표시합니다.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## `event` 매개 변수 사용

`push` 이벤트에 의해 트리거되는 워크플로의 상태를 표시하려면 상태 배지 URL의 끝에 `?event=push`를 추가합니다.

예를 들어 다음 Markdown을 `README.md` 파일에 추가하여 `push` 이벤트에 의해 트리거되는 워크플로 실행 상태가 포함된 배지를 표시합니다. 그러면 해당 분기의 현재 상태의 빌드 상태가 표시됩니다.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
