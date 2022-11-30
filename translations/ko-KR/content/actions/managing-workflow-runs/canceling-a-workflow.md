---
title: 워크플로 취소
shortTitle: Cancel a workflow
intro: '진행 중인 워크플로 실행을 취소할 수 있습니다. 워크플로 실행을 취소하면 {% data variables.product.prodname_dotcom %}가 해당 워크플로의 일부인 모든 작업과 단계를 취소합니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4da063adbb14b2090245a0a0cc0b444dac4a737f
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009617'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

## 워크플로 실행 취소

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. 워크플로 실행 목록에서 취소하려는 `queued` 실행 또는 `in progress` 실행의 이름을 클릭합니다.
![워크플로 실행의 이름](/assets/images/help/repository/in-progress-run.png)
1. 워크플로의 오른쪽 위 모서리에서 **워크플로 취소** 를 클릭합니다.
![확인 도구 모음 취소 단추](/assets/images/help/repository/cancel-check-suite-updated.png)

## 워크플로 실행을 취소하기 위해 {% data variables.product.prodname_dotcom %}가 수행하는 단계

워크플로 실행을 취소할 때 워크플로 실행과 관련된 리소스를 사용하는 다른 소프트웨어를 실행 중일 수 있습니다. 워크플로 실행을 취소하기 위해 {% data variables.product.prodname_dotcom %}가 수행하는 단계를 이해하는 것이 워크플로 실행과 관련된 리소스를 확보하는 데 도움이 될 수 있습니다.

1. 워크플로 실행을 취소하기 위해 서버는 현재 실행 중인 모든 작업에 대한 `if` 조건을 다시 평가합니다. 조건이 `true`로 평가되면 작업이 취소되지 않습니다. 예를 들어 `if: always()` 조건은 true로 평가되고 작업이 계속 실행됩니다. 조건이 없으면 이전 단계가 성공적으로 완료된 경우에만 실행되는 `if: success()` 조건과 동일합니다.
2. 취소해야 하는 작업의 경우 서버는 취소해야 하는 작업이 있는 모든 실행기 컴퓨터에 취소 메시지를 보냅니다.
3. 계속 실행되는 작업의 경우 서버는 완료되지 않은 단계에 대해 `if` 조건을 다시 평가합니다. 조건이 `true`로 평가되면 단계가 계속 실행됩니다.
4. 취소해야 하는 단계의 경우 실행기 컴퓨터는 단계의 입력 프로세스(javascript 작업의 경우 `node`, 컨테이너 작업의 경우 `docker`, 단계에서 `run`을 사용할 경우 `bash/cmd/pwd`)로 `SIGINT/Ctrl-C`를 보냅니다. 프로세스가 7500ms 이내에 끝나지 않으면 실행기는 `SIGTERM/Ctrl-Break`를 프로세스로 보낸 다음 프로세스가 종료될 때까지 2,500ms를 기다립니다. 프로세스가 계속 실행 중이면 실행기에서 프로세스 트리를 종료합니다.
5. 5분 취소 시간 제한 기간이 지나면 서버는 실행을 완료하지 않거나 취소 프로세스를 완료하지 못한 모든 작업 및 단계를 강제로 종료합니다.
