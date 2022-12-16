---
title: 커밋 순서 변경
intro: '{% data variables.product.prodname_desktop %}을 사용하여 분기 기록에서 커밋 순서를 변경할 수 있습니다.'
versions:
  fpt: '*'
ms.openlocfilehash: 5f68af5f2798e6780a91515886130f2b3ca7e6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117495'
---
## 커밋 순서 변경 정보

순서를 다시 지정하면 커밋 기록을 변경하여 커밋이 보다 의미 있게 진행될 수 있도록 할 수 있습니다. {% data variables.product.prodname_desktop %}을(를) 사용하면 분기 기록에 커밋을 끌어서 놓아 다시 정렬할 수 있습니다.

## 커밋 순서 변경

{% data reusables.desktop.current-branch-menu %}
2. 분기 목록에서 다시 정렬하려는 커밋이 있는 분기를 클릭합니다.
{% data reusables.desktop.history-tab %}
4. 다시 정렬하려는 커밋을 끌어서 인접한 두 커밋 사이에 놓습니다.
  ![끓어서 놓기 다시 정렬](/assets/images/help/desktop/reorder-drag-and-drop.png) 애플리케이션이 커밋을 다시 정렬하는 동안 **프로세스의 순서 변경** 대화 상자는 변경 진행률을 나타냅니다.

## 커밋 순서를 다시 정렬할 때 발생하는 오류 메시지

커밋 순서를 다시 지정하면 다음 알림 또는 오류 메시지 중 하나가 표시될 수 있습니다.

* 알림에는 분기와 관련해 요청된 변경 내용으로 원격 분기를 업데이트하기 위해 강제 푸시가 필요하다는 내용이 표시됩니다. 이는 다시 정렬한 커밋이 이전에 원격 분기로 푸시된 경우에 표시됩니다. 강제 푸시는 분기의 커밋 기록을 변경하고 해당 분기에서 작업하는 다른 협력자들에게 영향을 줍니다.  **순서 변경 시작** 을 선택하여 순서를 변경한 다음 **강제 푸시 원본** 을 클릭하여 변경 내용을 푸시합니다.

  ![강제 푸시 대화 상자의 순서 다시 지정](/assets/images/help/desktop/reorder-force-push-dialog.png)

* 오류에는 다시 정렬된 커밋 사이에 병합 커밋이 있기 때문에 다시 정렬에 실패했음이 표시됩니다.

  ![병합 커밋 다시 정렬 대화 상자](/assets/images/help/desktop/reorder-merge-commit-dialog.png)

* 현재 분기에 커밋되지 않은 변경 내용이 있음을 나타내는 알림이 표시됩니다. **변경 내용 스태시 및 계속** 을 선택하여 변경 내용을 저장하고 계속하거나 **닫기** 를 선택하여 메시지를 해제하고 변경 내용을 커밋합니다. 커밋되지 않은 변경 내용이 더 이상 없으면 커밋의 순서를 변경할 수 있습니다.

  ![스태시 항목 다시 정렬 대화 상자](/assets/images/help/desktop/reorder-stash-dialog.png)

* 메시지에는 애플리케이션이 분기에서 커밋 순서를 계속 다시 정렬하기 전에 해결해야 하는 병합 충돌이 있음이 표시됩니다.
    1. **충돌 보기** 를 클릭하여 충돌을 확인합니다.
      ![reorder resolve conflicts message](/assets/images/help/desktop/reorder-resolve-conflicts.png) {% data reusables.desktop.resolve-merge-conflicts %}
   3. 모든 충돌이 해결되면 커밋 순서를 변경할 수 있습니다.
  
