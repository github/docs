---
title: 디버그 로깅 사용
shortTitle: Enable debug logging
intro: '워크플로 로그가 워크플로, 작업 또는 단계가 예상대로 작동하지 않는 이유를 진단하기에 충분한 세부 정보를 제공하지 않는 경우 추가 디버그 로깅을 사용하도록 설정할 수 있습니다.'
redirect_from:
  - /actions/managing-workflow-runs/enabling-debug-logging
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4d991aa5166c57aec47f98a59b41b78ece5b7254
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009455'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

워크플로가 포함된 리포지토리에서 비밀을 설정하면 추가 로그를 사용할 수 있으므로 동일한 권한 요구 사항이 적용됩니다.

- {% data reusables.actions.permissions-statement-secrets-repository %}
- {% data reusables.actions.permissions-statement-secrets-environment %}
- {% data reusables.actions.permissions-statement-secrets-organization %}
- {% data reusables.actions.permissions-statement-secrets-api %}

비밀 설정 방법에 대한 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

{% ifversion debug-reruns %}

또한 워크플로를 실행할 수 있는 액세스 권한이 있는 사용자는 누구나 실행기 진단 로깅을 사용하도록 설정하고 워크플로를 다시 실행하기 위한 디버그 로깅을 단계별로 실행할 수 있습니다. 자세한 내용은 “[워크플로 및 작업 다시 실행](/actions/managing-workflow-runs/re-running-workflows-and-jobs)”을 참조하세요.

 {% endif %}

## 실행기 진단 로깅 사용

실행기 진단 로깅은 실행기의 작업 실행 현황에 대한 정보가 포함된 추가 로그 파일을 제공합니다. 다음 두 개의 로그 파일이 로그 보관 파일에 추가됩니다.

* 실행기 프로세스 로그 - 작업을 실행할 실행기를 조정하고 설정하는 방법에 대한 정보가 포함됩니다.
* 작업자 프로세스 로그 - 작업 실행을 로깅합니다.

1. 실행기 진단 로깅을 사용하도록 설정하려면 워크플로가 포함된 리포지토리에서 `ACTIONS_RUNNER_DEBUG` 비밀을 `true`로 설정합니다.

1. 실행기 진단 로그를 다운로드하려면 워크플로 실행의 로그 보관 파일을 다운로드합니다. 실행기 진단 로그는 `runner-diagnostic-logs` 폴더에 포함됩니다. 로그 다운로드 방법에 대한 자세한 내용은 “[로그 다운로드](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs)”를 참조하세요.

## 단계 디버그 로깅 사용

단계 디버그 로깅은 작업 실행 중 및 실행 후 작업 로그의 세부 정보 표시를 늘립니다.

1. 단계 디버그 로깅을 사용하도록 설정하려면 워크플로가 포함된 리포지토리에서 `ACTIONS_STEP_DEBUG` 비밀을 `true`로 설정해야 합니다.

1. 이 비밀을 설정하면 더 많은 디버그 이벤트가 단계 로그에 표시됩니다. 자세한 내용은 [“로그를 보고 오류 진단](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures)”을 참조하세요.
