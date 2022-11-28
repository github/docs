---
title: 워크플로 실행 건너뛰기
intro: 커밋 메시지에 명령을 포함하여 `push` 및 `pull_request` 이벤트에 의해 트리거되는 워크플로 실행을 건너뛸 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Skip workflow runs
ms.openlocfilehash: 32808741dc6de5aacd79f51c9ba098324a3ee57c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199972'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**참고:** [경로 필터링](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [분기 필터링](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) 또는 커밋 메시지(아래 참조)로 인해 워크플로를 건너뛰는 경우 해당 워크플로와 연결된 검사는 "보류 중" 상태로 유지됩니다. 이러한 검사가 성공해야 하는 끌어오기 요청은 병합에서 차단됩니다.

{% endnote %}

다음 문자열을 푸시의 커밋 메시지에 추가하거나 끌어오기 요청의 HEAD 커밋에 추가하면 `on: push` 또는 `on: pull_request`를 사용하여 트리거되는 워크플로가 트리거되지 않습니다.

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

또는 두 개의 빈 줄 뒤에 다음 중 하나가 오도록 커밋 메시지를 끝낼 수 있습니다.
- `skip-checks:true`
- `skip-checks: true`

리포지토리가 특정 검사를 먼저 통과하도록 구성된 경우 끌어오기 요청을 병합할 수 없습니다. 끌어오기 요청을 병합할 수 있도록 하려면 커밋 메시지의 건너뛰기 명령 없이 끌어오기 요청에 새 커밋을 푸시할 수 있습니다.

{% note %}

**참고:** 건너뛰기 지침은 `push` 이벤트 및 `pull_request` 이벤트에만 적용됩니다. 예를 들어 커밋 메시지에 `[skip ci]`를 추가해도 `on: pull_request_target`을 트리거한 워크플로의 실행이 중지되지 않습니다.

{% endnote %}

건너뛰기 지침은 건너뛰기 명령이 포함된 커밋에 의해 트리거되는 워크플로 실행에만 적용됩니다. 워크플로를 실행하지 않도록 설정할 수도 있습니다. 자세한 내용은 “[워크플로 사용 안 함 및 사용](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)”을 참조하세요.
