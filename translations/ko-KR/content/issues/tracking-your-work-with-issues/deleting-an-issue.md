---
title: 문제 삭제
intro: 리포지토리에서 관리자 권한이 있는 사용자는 리포지토리에서 이슈를 영구적으로 삭제할 수 있습니다.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/deleting-an-issue
  - /articles/deleting-an-issue
  - /github/managing-your-work-on-github/deleting-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/deleting-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 140bd1fdb272dd3203b993cf5f5f7038963fafe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146774574'
---
이슈를 삭제하는 기능은 리포지토리가 개인 계정 또는 조직이 소유하는지 여부에 따라 달라집니다.
- 개인 계정이 소유한 리포지토리에서 이슈를 삭제할 수 있는 유일한 계정은 해당 계정입니다.
- 관리자 또는 소유자 권한이 있는 계정만 조직이 소유한 리포지토리에서 이슈를 삭제할 수 있습니다.

  조직 소유의 리포지토리에서 이슈를 삭제하려면 조직 소유자가 조직의 리포지토리에 대한 이슈를 삭제하도록 설정해야 합니다. 자세한 내용은 “[사용자가 조직에서 문제를 삭제하도록 허용](/articles/allowing-people-to-delete-issues-in-your-organization)” 및 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요.

협력자는 이슈가 삭제될 때 알림을 받지 못합니다. 협력자가 삭제된 이슈의 URL을 방문하면 웹 페이지를 찾을 수 없다는 메시지가 표시됩니다(그러나 API를 사용하여 삭제된 것을 확인할 수 있음). 리포지토리에서 관리자 또는 소유자 권한이 있는 사용자에게는 문제를 삭제한 사람의 사용자 이름과 문제가 삭제된 시간이 추가로 표시됩니다.

1. 삭제하려는 문제로 이동합니다.
2. 오른쪽 표시줄의 “알림”에서 **문제 삭제** 를 클릭합니다.
![문제 페이지의 오른쪽 표시줄 아래쪽에 강조 표시된 “문제 삭제” 텍스트](/assets/images/help/issues/delete-issue.png)
4. 삭제를 확인하려면 **이 문제 삭제** 를 클릭합니다.

## 추가 참고 자료

- “[끌어오기 요청을 문제에 연결](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)”
