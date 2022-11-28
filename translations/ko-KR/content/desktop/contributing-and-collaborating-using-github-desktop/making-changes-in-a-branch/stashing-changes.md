---
title: 스태시 변경
intro: 변경 내용을 스태시하여 분기에 커밋하지 않고 변경 내용을 일시적으로 저장할 수 있습니다.
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/stashing-changes
ms.openlocfilehash: ef061bec3c60041fc40ab3e8be45d1557ca90219
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117511'
---
## 스태시된 변경 내용 정보

리포지토리에 변경 내용을 적용하려면 파일을 저장한 다음 변경 내용을 분기에 커밋해야 합니다. 아직 커밋할 준비가 되지 않은 변경 내용을 저장한 경우 나중에 변경 내용을 스태시할 수 있습니다. 변경 내용을 스태시하면 변경 내용이 파일에서 일시적으로 제거되고 나중에 변경 내용을 복원하거나 취소하도록 선택할 수 있습니다. {% data variables.product.prodname_desktop %}을(를) 사용하여 한 번에 하나의 변경 내용 집합만 스태시할 수 있습니다. {% data variables.product.prodname_desktop %}을(를) 사용하여 변경 내용을 스태시하면 저장되지 않은 모든 변경 내용이 스태시됩니다. 분기에서 변경 내용을 스태시하면 분기를 안전하게 변경하거나 현재 분기를 다른 내용으로 변경할 수 있습니다.

{% data variables.product.prodname_desktop %}을(를) 사용하여 분기를 전환하는데 변경 내용을 저장했지만 커밋되고 않은 경우, {% data variables.product.prodname_desktop %}은(는) 변경 내용을 스태시하거나 다른 분기로 가져오라는 메시지를 표시합니다. 자세한 내용은 “[분기 관리](/desktop/contributing-to-projects/managing-branches#switching-between-branches)”를 참조하세요.

## 스태시 변경

{% data reusables.desktop.click-changed-files-header %} {% data reusables.desktop.click-stash-all-changes %}

## 스태시된 변경 내용 복원

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-restore %}

## 스태시된 변경 내용 삭제

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-discard %}
