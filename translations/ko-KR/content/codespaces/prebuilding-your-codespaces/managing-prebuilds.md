---
title: 사전 빌드 관리
shortTitle: Manage prebuilds
intro: '리포지토리에 대한 사전 빌드 구성을 검토, 수정 및 삭제할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f39c46d91193db4c1c44ab336d86024b40adcea4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160189'
---
## 사전 빌드 구성 확인, 변경, 삭제

리포지토리에 구성하는 사전 빌드는 {% data variables.product.prodname_actions %} 워크플로를 사용하여 생성 및 업데이트되며 {% data variables.product.prodname_github_codespaces %} 서비스에서 관리합니다. 

사전 빌드 구성의 설정에 따라 다음과 같은 이벤트에 의해 사전 빌드를 업데이트하는 워크플로가 트리거될 수 있습니다.

* 사전 빌드 구성 만들기 또는 업데이트
* 사전 빌드를 포함하도록 구성된 분기에 커밋 또는 끌어오기 요청 푸시
* 개발 컨테이너 구성 파일 변경
* 사전 빌드 구성에서 정의한 일정
* 수동으로 워크플로 트리거

사전 빌드 구성의 설정은 사전 빌드의 업데이트를 자동으로 트리거하는 이벤트를 결정합니다. 자세한 내용은 "[사전 빌드 구성](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)"을 참조하세요. 

리포지토리에 대한 관리자 액세스 권한이 있는 사용자는 사전 빌드의 진행 상황을 확인하고 사전 빌드 구성을 편집 및 삭제할 수 있습니다. 

### 사전 빌드 진행 보기
리포지토리 설정의 {% data variables.product.prodname_github_codespaces %} 페이지에서 설정한 각 사전 빌드 구성에 대한 최신 워크플로 실행의 현재 상태를 볼 수 있습니다. 예를 들어 “현재 실행 중” 또는 “1시간 전 마지막 실행”이 있습니다.

최신 사전 빌드 워크플로 실행에 대한 로그 출력을 보려면 **출력 보기** 를 클릭합니다.

![‘출력 보기’ 단추](/assets/images/help/codespaces/prebuilds-see-output.png) 

그러면 **작업** 탭에 워크플로의 가장 최근 실행 출력이 표시됩니다.

![사전 빌드 워크플로 출력](/assets/images/help/codespaces/prebuilds-log-output.png) 

또는 지정된 분기와 연결된 모든 사전 빌드 워크플로 실행을 보려면 줄임표 버튼을 클릭하고 드롭다운 메뉴에서 **실행 보기** 를 선택합니다.

![드롭다운 메뉴의 '실행 보기' 옵션](/assets/images/help/codespaces/prebuilds-view-runs.png) 

연결된 분기의 사전 빌드에 대한 워크플로 실행 기록이 표시됩니다.

![워크플로 실행 기록](/assets/images/help/codespaces/prebuilds-workflow-runs.png) 

### 사전 빌드 구성 편집

1. 리포지토리 설정의 {% data variables.product.prodname_codespaces %} 페이지에서 편집하려는 사전 빌드 구성의 오른쪽에 있는 줄임표를 클릭합니다.
1. 드롭다운 메뉴에서 **편집** 을 클릭합니다.
 
   ![드롭다운 메뉴의 '편집' 옵션](/assets/images/help/codespaces/prebuilds-edit.png) 

1. 사전 빌드 구성에 필요한 변경 내용을 적용한 다음 **업데이트** 를 클릭합니다. 

   {% data reusables.codespaces.prebuilds-permission-authorization %}


### 사전 빌드 구성 비활성화

구성에 대한 사전 빌드의 업데이트를 일시 중지하려면 구성에 대한 워크플로 실행을 사용하지 않도록 설정하면 됩니다. 사전 빌드 구성에 대해 워크플로 실행을 사용하지 않도록 설정해도 해당 구성에 대해 이전에 만든 사전 빌드는 삭제되지 않으며, 결과적으로 기존 사전 빌드 템플릿에서 codespace가 계속 생성됩니다.

사전 빌드 구성에 대해 워크플로 실행을 사용하지 않도록 설정하면 사전 빌드 만들기 실패를 조사해야 하는 경우에 유용합니다.

1. 리포지토리 설정의 {% data variables.product.prodname_codespaces %} 페이지에서 비활성화하려는 사전 빌드 구성의 오른쪽에 있는 줄임표를 클릭합니다.
1. 드롭다운 메뉴에서 **실행 사용 안 함** 을 클릭합니다.

   ![드롭다운 메뉴의 '실행 사용 안 함' 옵션](/assets/images/help/codespaces/prebuilds-disable.png)

1. 이 구성을 사용하지 않음을 확인하기 위해 **확인** 을 클릭합니다.

### 사전 빌드 구성 삭제

사전 빌드 구성을 삭제하면 해당 구성에 대해 이전에 만든 모든 사전 빌드도 삭제됩니다. 따라서 구성을 삭제한 직후에 새 codespace를 만들 때 해당 구성에서 생성된 사전 빌드를 더 이상 사용할 수 없습니다.

사전 빌드 구성을 삭제한 후에도 큐에 대기되었거나 시작된 해당 구성에 대한 워크플로는 계속 실행됩니다. 이전에 완료된 워크플로 실행과 함께 워크플로 실행 기록에 나열됩니다.

1. 리포지토리 설정의 {% data variables.product.prodname_codespaces %} 페이지에서 삭제하려는 사전 빌드 구성의 오른쪽에 있는 줄임표를 클릭합니다.
1. 드롭다운 메뉴에서 **삭제** 를 클릭합니다.

   ![드롭다운 메뉴의 '삭제' 옵션](/assets/images/help/codespaces/prebuilds-delete.png)

1. 클릭 **확인** 여 삭제를 확인 합니다.

### 수동으로 사전 빌드 트리거

사전 빌드 구성에 대한 워크플로 실행을 수동으로 트리거하는 것이 유용할 수 있습니다. 일반적으로 이 작업은 사전 빌드 구성에 대한 워크플로 문제를 디버그하는 경우에만 필요합니다.

1. 리포지토리 설정의 {% data variables.product.prodname_codespaces %} 페이지에서 워크플로를 트리거하려는 사전 빌드 구성의 오른쪽에 있는 줄임표를 클릭합니다.
1. 드롭다운 메뉴에서 **수동으로 트리거** 를 클릭합니다.

   ![드롭다운 메뉴의 '수동으로 트리거' 옵션](/assets/images/help/codespaces/prebuilds-manually-trigger.png) 

## 추가 참고 자료

- “[사전 빌드 문제 해결](/codespaces/troubleshooting/troubleshooting-prebuilds)”
