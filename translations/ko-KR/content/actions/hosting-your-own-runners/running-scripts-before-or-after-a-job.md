---
title: 작업 전후에 스크립트 실행
intro: 작업 직전 또는 직후에 자체 호스팅 실행기에서 스크립트를 자동으로 실행할 수 있습니다.
versions:
  feature: job-hooks-for-runners
type: tutorial
miniTocMaxHeadingLevel: 3
shortTitle: Run a script before or after a job
ms.openlocfilehash: 2af9b5859f8f5a4b8285463f178e546224066e75
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098982'
---
{% note %}

**참고**: 이 기능은 현재 베타로 제공되며 변경될 수 있습니다.

{% endnote %}

## 사전 및 사후 작업 스크립트 정보

작업 실행 전이나 작업 실행이 완료된 후 자체 호스팅 실행기에서 스크립트를 자동으로 실행할 수 있습니다. 스크립트를 사용하여 실행기 환경 빌드 또는 해제나 디렉터리 정리와 같은 작업 요구 사항을 지원할 수 있습니다. 스크립트를 통해 실행기 사용 현황에 대한 원격 분석을 추적할 수도 있습니다.

실행기에서 특정 환경 변수를 설정하면 사용자 지정 스크립트가 자동으로 트리거됩니다. 환경 변수에 스크립트의 절대 경로가 포함되어야 합니다. 자세한 내용은 아래의 “[스크립트 트리거](#triggering-the-scripts)”를 참조하세요.

지원되는 스크립팅 언어는 다음과 같습니다.

- **Bash**: `bash`를 사용하며 `sh`로 대체될 수 있습니다. `-e {pathtofile}`를 실행하여 실행됩니다.
- **PowerShell**: `pwsh`를 사용하며 `powershell`로 대체될 수 있습니다. `-command \". '{pathtofile}'\"`를 실행하여 실행됩니다.

## 스크립트 작성

사용자 지정 스크립트는 다음 기능을 사용할 수 있습니다.

- **환경 변수**: 스크립트에서 기본 환경 변수에 액세스할 수 있습니다. 전체 웹후크 이벤트 페이로드는 `GITHUB_EVENT_PATH`에서 찾을 수 있습니다. 자세한 내용은 “[환경 변수](/actions/learn-github-actions/environment-variables#default-environment-variables)”를 참조하세요.
- **워크플로 명령**: 스크립트에서 워크플로 명령을 사용할 수 있습니다. 자세한 내용은 ["{% data variables.product.prodname_actions %}에 대한 워크플로 명령"](/actions/using-workflows/workflow-commands-for-github-actions){% ifversion actions-save-state-set-output-envs %}{% else %}을(를) 제외하고 `save-state` `set-output`다음 스크립트에서 지원되지 않는 {% endif %}을(를) 참조하세요. 스크립트에서 환경 파일도 사용할 수 있습니다. 자세한 내용은 [환경 파일](/actions/using-workflows/workflow-commands-for-github-actions#environment-files)을 참조하세요.

{% note %}

**참고**: 리포지토리에 대한 읽기 권한이 있는 모든 사용자가 UI 로그에서 출력을 확인할 수 있으므로 스크립트를 사용하여 중요한 정보를 콘솔에 출력하지 않도록 합니다.

{% endnote %}

### 종료 코드 처리

사전 작업 스크립트의 경우 종료 코드 `0`은 스크립트가 성공적으로 완료되었으며 작업이 계속 실행됨을 나타냅니다. 다른 종료 코드가 있는 경우에는 작업이 실행되지 않고 실패한 것으로 표시됩니다. 사전 작업 스크립트의 결과를 보려면 로그에서 `Set up runner` 항목을 확인합니다. 로그를 확인하는 방법에 대한 자세한 내용은 “[로그를 보고 오류 진단](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)”을 참조하세요.

[`continue-on-error`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) 설정은 스크립트에서 사용할 수 없습니다.

## 스크립트 트리거

사용자 지정 스크립트를 실행기에 배치해야 하지만 `actions-runner` 애플리케이션 디렉터리에 저장하면 안 됩니다. 스크립트는 실행기 서비스를 실행하는 서비스 계정의 보안 컨텍스트에서 실행됩니다.

{% note %}

**참고**: 트리거된 스크립트는 동기적으로 처리되므로 실행되는 동안 작업 실행을 차단합니다.

{% endnote %}

실행기에 스크립트의 절대 경로를 포함하는 다음 환경 변수가 있는 경우 스크립트가 자동으로 실행됩니다.
- `ACTIONS_RUNNER_HOOK_JOB_STARTED`: 작업이 실행기에 할당된 경우 작업 실행이 시작되기 전에 이 환경 변수에 정의된 스크립트가 트리거됩니다.
- `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`: 작업 처리가 완료된 후 이 환경 변수에 정의된 스크립트가 트리거됩니다.

환경 변수를 설정하기 위해 운영 체제에 추가하거나, 자체 호스팅 실행기 애플리케이션 디렉터리 내의 `.env` 파일에 추가할 수 있습니다. 예를 들어 다음 `.env` 항목은 각 작업이 실행되기 전에 실행기에서 `cleanup_script.sh`라는 스크립트를 자동으로 실행하도록 합니다.

```bash
ACTIONS_RUNNER_HOOK_JOB_STARTED=/cleanup_script.sh
```

## 문제 해결


### 시간 제한 설정 없음

현재 `ACTIONS_RUNNER_HOOK_JOB_STARTED` 또는 `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`에서 실행된 스크립트에 사용할 수 있는 시간 제한 설정이 없습니다. 따라서 스크립트에 시간 제한 처리를 추가하는 것이 좋습니다.

### 워크플로 실행 로그 검토

스크립트가 실행되고 있는지 확인하기 위해 해당 작업에 대한 로그를 검토할 수 있습니다. 스크립트를 트리거하는 환경 변수에 따라 `Set up runner` 또는 `Complete runner`에 대한 별도의 단계에 스크립트가 나열됩니다. 로그를 확인하는 방법에 대한 자세한 내용은 “[로그를 보고 오류 진단](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)”을 참조하세요.
