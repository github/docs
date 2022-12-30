---
title: 커밋 수정
intro: '{% data variables.product.prodname_desktop %}을 사용하여 마지막 커밋을 수정할 수 있습니다.'
versions:
  fpt: '*'
ms.openlocfilehash: 8d92d5f755df662c4948196cf9f84b3227ec0067
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117503'
---
## 커밋 수정 정보

커밋 수정은 현재 분기에서 수행한 가장 최근 커밋을 수정하는 방법입니다. 이는 커밋 메시지를 편집해야 하거나 커밋에 변경 내용을 포함하는 것을 잊어버린 경우에 유용할 수 있습니다.

커밋을 원격 리포지토리로 푸시할 때까지 계속 수정할 수 있습니다. 커밋을 푸시하면 {% data variables.product.prodname_desktop %}에서 수정 옵션이 비활성화됩니다. 커밋을 수정할 때 이전 커밋을 현재 분기에 대한 새 커밋으로 바꿉니다. 원격 리포지토리에 푸시된 커밋을 수정하면 리포지토리를 사용하는 다른 협력자가 혼동을 일으킬 수 있습니다.

## 커밋 수정

{% data reusables.desktop.history-tab %}
2. 가장 최근 커밋을 마우스 오른쪽 단추로 클릭하고 **커밋 수정** 을 선택합니다.
  ![커밋 상황에 맞는 메뉴 수정](/assets/images/help/desktop/amend-commit-context-menu.png)
3. **요약** 필드를 클릭하여 커밋 메시지를 수정합니다. 필요에 따라 **설명** 필드에서 커밋에 대한 정보를 수정하거나 추가할 수 있습니다.
4. 커밋에 추가하려는 커밋되지 않은 변경 내용을 선택합니다. 변경 내용 선택에 대한 자세한 내용은 “[프로젝트 변경 내용 커밋 및 검토](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)”를 참조하세요.
5. 변경 내용을 완료한 후 **마지막 커밋 수정** 을 클릭합니다.
  ![마지막 커밋 수정 개요](/assets/images/help/desktop/amend-last-commit-overview.png)
