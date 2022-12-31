---
title: 회사를 떠나는 모범 사례
intro: If you use your account on {% data variables.product.product_name %} for both personal and work purposes, there are a few things to keep in mind when you leave your company or organization.
redirect_from:
- /articles/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Leaving your company
ms.openlocfilehash: 4384955c0b81e887cb2671a537291b438664e621
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091400"
---
회사를 떠나기 전에 개인 계정에서 다음 정보를 업데이트해야 합니다.

- 회사 메일 주소를 [메일 설정에서 삭제](/articles/changing-your-primary-email-address)하여 확인을 취소합니다. 그런 다음 계정에 연결된 커밋을 유지하기 위해 확인하지 않고 다시 추가할 수 있습니다.
- 회사 메일에서 개인 메일로 [기본 메일 주소를 변경](/articles/changing-your-primary-email-address)합니다.
{% ifversion fpt or ghec %}
- [새 기본 메일 주소를 확인합니다](/articles/verifying-your-email-address).
{% endif %}
- 필요에 따라 [GitHub 사용자 이름을 변경](/articles/changing-your-github-username)하여 회사 또는 조직에 대한 참조를 제거합니다.

## <a name="leaving-organizations"></a>조직 떠나기

조직에 속한 리포지토리로 작업한 경우 [조직의 멤버에서 자신을 제거](/articles/removing-yourself-from-an-organization)하는 것이 좋습니다. 조직 소유자인 경우 먼저 [조직의 소유권을 다른 사람에게 이전](/articles/transferring-organization-ownership)해야 합니다.

## <a name="removing-professional-associations-with-personal-repositories"></a>개인 리포지토리와의 직업 관련 연결 제거

다른 사람의 개인 계정에 속한 리포지토리에서 직업과 관련하여 협업을 수행한 경우 해당 리포지토리에서 [자신을 협력자에서 제거](/articles/removing-yourself-from-a-collaborator-s-repository)하는 것이 좋습니다.

- 작업과 관련된 [리포지토리 시청을 중지](https://github.com/watching)합니다. 이러한 알림을 더 이상 원하지 않습니다.
- 떠난 후에도 다른 사람들이 계속 작업해야 할 수 있는 [자신이 소유한 리포지토리를 이전](/articles/how-to-transfer-a-repository)합니다.
- 수행한 작업과 관련된 [자신에게 속한 포크를 삭제](/articles/deleting-a-repository)합니다. 포크를 삭제해도 업스트림 리포지토리는 삭제되지 않습니다.
- 컴퓨터에 있을 수 있는 포크의 로컬 복사본을 삭제합니다.

```shell
$ rm -rf <em>work_directory</em>
```
