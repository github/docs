---
title: 끌어오기 요청에서 분기 삭제 및 복원
intro: 리포지토리에 쓰기 액세스 권한이 있는 경우 닫히거나 병합된 끌어오기 요청과 연결된 분기를 삭제할 수 있습니다. 열려 있는 끌어오기 요청과 직접 연결된 분기는 삭제할 수 없습니다.
redirect_from:
  - /articles/tidying-up-pull-requests
  - /articles/restoring-branches-in-a-pull-request
  - /articles/deleting-unused-branches
  - /articles/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request
  - /github/administering-a-repository/managing-branches-in-your-repository/deleting-and-restoring-branches-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Delete & restore branches
ms.openlocfilehash: 48007869ae43d39553e0f8948f90e89b7fb73af0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136947'
---
## 끌어오기 요청에 사용되는 분기 삭제

끌어오기 요청이 병합되거나 닫혀 있고 분기를 참조하는 다른 열린 끌어오기 요청이 없는 경우 끌어오기 요청과 연결된 분기를 삭제할 수 있습니다. 끌어오기 요청과 연결되지 않은 분기를 닫는 방법에 대한 자세한 내용은 “[리포지토리 내에서 분기 만들기 및 삭제](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)”를 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. 끌어오기 요청 목록에서 삭제하려는 분기와 연결된 끌어오기 요청을 클릭합니다.
5. 끌어오기 요청의 아래쪽 가까이에 있는 **분기 삭제** 를 클릭합니다.
   ![분기 삭제 단추](/assets/images/help/pull_requests/delete_branch_button.png)

   현재 이 분기에 대해 열려 있는 끌어오기 요청이 있는 경우 이 단추가 표시되지 않습니다.

## 삭제된 분기 복원

닫힌 끌어오기 요청의 헤드 분기를 복원할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.list-closed-pull-requests %}
4. 끌어오기 요청 목록에서 복원하려는 분기와 연결된 끌어오기 요청을 클릭합니다.
5. 끌어오기 요청의 아래쪽 가까이에 있는 **분기 복원** 을 클릭합니다.
   ![삭제된 분기 복원 단추](/assets/images/help/branches/branches-restore-deleted.png)

## 추가 참고 자료

- “[리포지토리 내에서 분기 만들기 및 삭제](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)”
- “[분기 자동 삭제 관리](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)”
