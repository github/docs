---
title: 워크플로 실행 로그 사용
shortTitle: Workflow run logs
intro: '워크플로 실행의 각 작업에 대한 로그를 보고, 검색하고, 다운로드할 수 있습니다.'
redirect_from:
  - /actions/managing-workflow-runs/using-workflow-run-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: d0e5aadc46cbd89895abe51f83f15fd10708b09e
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009530'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

워크플로 실행 페이지에서 워크플로 실행이 진행 중인지 아니면 완료되었는지 확인할 수 있습니다. 퍼블릭 리포지토리를 포함하여 워크플로 실행 정보를 보려면 {% data variables.product.prodname_dotcom %} 계정에 로그인해야 합니다. 자세한 내용은 “[GitHub 대한 액세스 권한](/articles/access-permissions-on-github)”을 참조하세요.

실행이 완료되면 결과가 성공, 실패, 취소 또는 중립인지 확인할 수 있습니다. 실행이 실패한 경우 빌드 로그를 보고 검색하여 실패를 진단하고 워크플로를 다시 실행할 수 있습니다. 청구 가능한 작업 실행 시간(분)을 보거나 로그를 다운로드하고 아티팩트를 빌드할 수도 있습니다.

{% data variables.product.prodname_actions %}는 Checks API를 사용하여 워크플로의 상태, 결과, 로그를 출력합니다. {% data variables.product.prodname_dotcom %}는 각 워크플로 실행에 대한 새 검사 도구 모음을 만듭니다. 확인 도구 모음에는 워크플로의 각 작업에 대한 검사 실행이 포함되며 각 작업에는 여러 단계가 포함됩니다. {% data variables.product.prodname_actions %}는 워크플로의 한 단계로 실행됩니다. Checks API에 대한 자세한 내용은 “[검사](/rest/reference/checks)”를 참조하세요.

{% data reusables.actions.invalid-workflow-files %}

## 로그 확인을 통한 실패 진단

워크플로 실행이 실패하는 경우 실패가 발생한 단계를 확인하고 실패한 단계의 빌드 로그를 검토하여 문제를 해결할 수 있습니다. 각 단계를 실행하는 데 걸린 시간을 확인할 수 있습니다. 로그 파일의 특정 줄에 permalink를 복사하여 팀과 공유할 수도 있습니다. {% data reusables.repositories.permissions-statement-read %}

워크플로 파일에 구성된 단계 외에도 {% data variables.product.prodname_dotcom %}는 각 작업에 두 단계를 추가하여 작업 실행을 설정하고 완료합니다. 단계는 “작업 설정” 및 “작업 완료”라는 이름으로 워크플로 실행에 기록됩니다.

{% data variables.product.prodname_dotcom %}에서 호스트되는 실행기에서 실행되는 작업의 경우 “작업 설정”은 실행기의 이미지에 대한 세부 정보를 기록하고 실행기 컴퓨터에 있던 사전 설치된 도구 목록 링크를 포함합니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %} {% data reusables.repositories.view-failed-job-results %} {% data reusables.repositories.view-specific-line %}

## 로그 검색

특정 단계에 대한 빌드 로그를 검색할 수 있습니다. 로그를 검색하면 확장된 단계만 결과에 포함됩니다. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. 로그 출력의 오른쪽 상단의 **검색 로그** 검색 상자에 검색 쿼리를 입력합니다.
![로그를 검색하는 검색 상자](/assets/images/help/repository/search-log-box-updated-2.png)

## 로그 다운로드

워크플로 실행에서 로그 파일을 다운로드할 수 있습니다. 워크플로의 아티팩트를 다운로드할 수도 있습니다. 자세한 내용은 “[아티팩트를 사용하여 워크플로 데이터 유지](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”를 참조하세요. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. 오른쪽 상단의 {% octicon "gear" aria-label="The gear icon" %} 아이콘을 클릭하고 **로그 보관 계층 다운로드** 를 선택합니다.
  
  ![로그 다운로드 드롭다운 메뉴](/assets/images/help/repository/download-logs-drop-down-updated-2.png)
  

  {% ifversion re-run-jobs %}

  {% note %}

  **참고**: 부분적으로 다시 실행된 워크플로에 대한 로그 보관 계층을 다운로드하는 경우 보관 계층에는 다시 실행된 작업만 포함됩니다. 워크플로에서 실행된 작업에 대한 전체 로그 집합을 가져오려면 다른 작업을 실행한 이전 실행 시도에 대한 로그 보관 계층을 다운로드해야 합니다.

  {% endnote %}

  {% endif %}

## 로그 삭제

워크플로 실행에서 로그 파일을 삭제할 수 있습니다. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. 오른쪽 상단의 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 아이콘을 클릭합니다.
    
    ![Kebab 가로 아이콘](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)
    
2. 로그 파일을 삭제하려면 **모든 로그 삭제** 단추를 클릭하고 확인 프롬프트를 검토합니다. 
  
  ![모든 로그 삭제](/assets/images/help/repository/delete-all-logs-updated-2.png)
  
로그를 삭제하면 **모든 로그 삭제** 단추가 사라지며 워크플로 실행에 남아 있는 로그 파일이 없음을 나타냅니다.

## {% data variables.product.prodname_cli %}를 사용하여 로그 보기

{% data reusables.cli.cli-learn-more %}

특정 작업에 대한 로그를 보려면 `run view` 하위 명령을 사용합니다. `run-id`를 로그를 보려는 실행의 ID로 바꿉니다. {% data variables.product.prodname_cli %}는 실행에서 작업을 선택할 수 있는 대화형 메뉴를 반환합니다. `run-id`를 지정하지 않으면 {% data variables.product.prodname_cli %}에서 최근 실행을 선택할 수 있는 대화형 메뉴를 반환한 다음 실행에서 작업을 선택할 수 있는 다른 대화형 메뉴를 반환합니다.

```shell
gh run view RUN_ID --log
```

`--job` 플래그를 사용하여 작업 ID를 지정할 수도 있습니다. `job-id`를 로그를 보려는 작업의 ID로 바꿉니다.

```shell
gh run view --job JOB_ID --log
```

`grep`을 사용하여 로그를 검색할 수 있습니다. 예를 들어 이 명령은 `error`라는 단어를 포함하는 모든 로그 항목을 반환합니다.

```shell
gh run view --job JOB_ID --log | grep error
```

실패한 단계에 대한 로그를 필터링하려면 `--log` 대신에 `--log-failed`를 사용합니다.

```shell
gh run view --job JOB_ID --log-failed
```
