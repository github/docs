---
title: 작업의 종료 코드 설정
shortTitle: Set exit codes
intro: '종료 코드를 사용하여 작업의 상태를 설정할 수 있습니다. {% data variables.product.prodname_dotcom %}는 합격 또는 불합격 작업을 나타내는 상태를 표시합니다.'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: 394b17dc03c4998797df222fe7c81c3269003ec9
ms.sourcegitcommit: d3929a033c42c99b153910685256d079d7d87467
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114279'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 종료 코드 정보

{% data variables.product.prodname_dotcom %}는 종료 코드를 사용하여 작업의 검사 실행 상태를 설정합니다. 상태는 `success` 또는 `failure`일 수 있습니다.

종료 상태 | 실행 상태 검사 | 설명
------------|------------------|------------
`0` | `success` | 작업이 성공적으로 완료되었으며 작업에 의존하는 다른 작업이 시작될 수 있습니다.
0이 아닌 값(0이 아닌 정수)| `failure` | 다른 종료 코드는 작업이 실패했음을 나타냅니다. 작업이 실패하면 모든 동시 작업이 취소되고 이후 작업은 건너뜁니다. 검사 실행 및 검사 모음 모두 `failure` 상태를 가져옵니다.

## JavaScript 작업에서 실패 종료 코드 설정

JavaScript 작업을 만드는 경우 작업 도구 키트 [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) 패키지를 사용하여 메시지를 로그하고 실패 종료 코드를 설정할 수 있습니다. 예를 들면 다음과 같습니다.

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

자세한 내용은 “[JavaScript 작업 만들기](/articles/creating-a-javascript-action)”를 참조하세요.

## Docker 컨테이너 작업에서 오류 종료 코드 설정

Docker 컨테이너 작업을 만드는 경우 `entrypoint.sh` 스크립트에서 실패 종료 코드를 설정할 수 있습니다. 예를 들면 다음과 같습니다.

```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

자세한 내용은 “[Docker 컨테이너 작업 만들기](/articles/creating-a-docker-container-action)”를 참조하세요.
