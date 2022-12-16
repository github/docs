---
title: GitHub Desktop에서 검사 보기 및 다시 실행
shortTitle: Viewing and re-running checks
intro: '검사 상태를 보고 {% data variables.product.prodname_desktop %}에서 다시 실행할 수 있습니다.'
versions:
  fpt: '*'
ms.openlocfilehash: d763dc4e4b30844b905b4e601df6c9cb500c8094
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068025'
---
## {% data variables.product.prodname_desktop %}의 검사 정보

{% data variables.product.prodname_desktop %}은 끌어오기 요청 분기에서 실행된 검사 상태를 표시합니다. 분기 이름 옆에 있는 검사 배지는 검사의 보류 중, 통과 또는 실패 상태를 표시합니다.  {% data variables.product.prodname_desktop %}에서 검사 상태를 보는 동안 모든 검사, 실패한 검사 또는 개별 검사를 다시 실행할 수도 있습니다. 리포지토리에서 검사를 설정하는 방법에 관한 자세한 내용은 “[상태 검사 정보](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)”를 참조하세요.

{% data variables.product.prodname_desktop %}은 검사에 실패할 때 시스템 알림도 표시합니다. 알림을 사용하도록 설정하는 방법에 관한 자세한 내용은 “[GitHub Desktop에서 알림 구성](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop)”을 참조하세요.

## 검사 보기 및 다시 실행

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.click-pull-requests %} ![현재 분기 드롭다운 메뉴의 끌어오기 요청 탭](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png) {% data reusables.desktop.choose-pr-from-list %} ![리포지토리의 열려 있는 끌어오기 요청 목록](/assets/images/help/desktop/click-pull-request.png)
4. 끌어오기 요청 분기 이름의 오른쪽에 있는 끌어오기 요청 번호를 클릭합니다.
  ![분기 이름 옆에 표시되는 검사](/assets/images/help/desktop/checks-dialog.png)
5. 실패한 검사를 다시 실행하려면 **{% octicon "sync" aria-label="The sync icon" %} 다시 실행** 을 클릭하고 **실패한 검사 다시 실행** 을 선택합니다.
  ![실패한 검사 다시 실행](/assets/images/help/desktop/re-run-failed-checks.png)
6. 개별 검사를 다시 실행하려면 다시 실행하려는 개별 검사를 마우스로 가리키고 {% octicon "sync" aria-label="The sync icon" %} 아이콘을 선택하여 검사를 다시 실행합니다.
  ![개별 검사 다시 실행](/assets/images/help/desktop/re-run-individual-checks.png)
7. 다시 실행될 검사의 요약이 포함된 확인 대화 상자가 표시됩니다. **검사 다시 실행** 을 클릭하여 다시 실행을 수행하려는지 확인합니다.
  ![다시 실행 확인 대화 상자](/assets/images/help/desktop/re-run-confirmation-dialog.png)
