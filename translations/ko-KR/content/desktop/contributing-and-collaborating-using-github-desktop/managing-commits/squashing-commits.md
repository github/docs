---
title: 커밋 스쿼시
intro: '{% data variables.product.prodname_desktop %}을 사용하여 분기 기록에서 커밋을 스쿼시할 수 있습니다.'
versions:
  fpt: '*'
ms.openlocfilehash: fb8141710a99b52f1b9a93e1abc0429b5e29f116
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117492'
---
## 커밋 스쿼시 정보

스쿼시를 사용하면 분기 기록에 있는 여러 커밋을 단일 커밋으로 결합할 수 있습니다. 이렇게 하면 리포지토리의 기록을 더 읽고 이해할 수 있게 유지할 수 있습니다.

## 커밋 스쿼시

{% mac %}

{% data reusables.desktop.current-branch-menu %}
2. 분기 목록에서 스쿼시할 커밋이 있는 분기를 선택합니다.
{% data reusables.desktop.history-tab %}
4. 커밋을 선택하여 스쿼시하고 결합하려는 커밋에 놓습니다. <kbd>명령</kbd> 또는 <kbd>Shift</kbd>를 사용하여 커밋 하나를 선택하거나 여러 커밋을 선택할 수 있습니다.
  ![스쿼시 끌어서 놓기](/assets/images/help/desktop/squash-drag-and-drop.png)
5. 새 커밋의 커밋 메시지를 수정합니다. 스쿼시하려고 선택한 커밋의 커밋 메시지는 **요약** 및 **설명** 필드에 미리 채워집니다.
6. **스쿼시 커밋** 을 클릭합니다.

{% endmac %}

{% windows %}

{% data reusables.desktop.current-branch-menu %}
2. 분기 목록에서 스쿼시할 커밋이 있는 분기를 선택합니다.
{% data reusables.desktop.history-tab %}
4. 커밋을 선택하여 스쿼시하고 결합하려는 커밋에 놓습니다. <kbd>Ctrl</kbd> 또는 <kbd>Shift</kbd>를 사용하여 커밋 하나를 선택하거나 여러 커밋을 선택할 수 있습니다.
  ![스쿼시 끌어서 놓기](/assets/images/help/desktop/squash-drag-and-drop.png)
5. 새 커밋의 커밋 메시지를 수정합니다. 스쿼시하려고 선택한 커밋의 커밋 메시지는 **요약** 및 **설명** 필드에 미리 채워집니다.
6. **스쿼시 커밋** 을 클릭합니다.

{% endwindows %}

## 커밋을 스쿼시할 때 발생하는 오류 메시지

커밋을 스쿼시하면 다음 알림 또는 오류 메시지 중 하나가 표시될 수 있습니다.

* 알림에는 분기와 관련해 요청된 변경 내용으로 원격 분기를 업데이트하기 위해 강제 푸시가 필요하다는 내용이 표시됩니다. 강제 푸시는 분기의 커밋 기록을 변경하고 해당 분기에서 작업하는 다른 협력자들에게 영향을 줍니다.  **스쿼시 시작** 을 선택하여 스쿼시한 다음 **강제 푸시 원본** 을 클릭하여 변경 내용을 푸시합니다.

  ![스쿼시 강제 푸시 대화 상자](/assets/images/help/desktop/squash-force-push.png)

* 오류에는 스쿼시된 커밋 사이에 병합 커밋이 있기 때문에 스쿼시에 실패했음이 표시됩니다.

  ![병합 커밋 다시 정렬 대화 상자](/assets/images/help/desktop/squash-merge-commit-dialog.png)

* 현재 분기에 커밋되지 않은 변경 내용이 있음을 나타내는 알림이 표시됩니다. **변경 내용 스태시 및 계속** 을 선택하여 변경 내용을 저장하고 계속하거나 **닫기** 를 선택하여 메시지를 해제하고 변경 내용을 커밋합니다. 커밋되지 않은 변경 내용이 더 이상 없으면 커밋을 스쿼시할 수 있습니다.

  ![스쿼시 스태시 대화 상자](/assets/images/help/desktop/squash-stash-dialog.png)
