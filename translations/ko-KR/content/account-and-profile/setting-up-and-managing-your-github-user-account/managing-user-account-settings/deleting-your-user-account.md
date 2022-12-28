---
title: 사용자 계정 삭제
intro: You can delete your personal account on {% data variables.product.product_name %} at any time.
redirect_from:
- /articles/deleting-a-user-account
- /articles/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Delete your personal account
ms.openlocfilehash: fe18309f93bdb4124fa5a58d22ab7a93b451e6e1
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088913"
---
개인 계정을 삭제하면 모든 리포지토리, 프라이빗 리포지토리 포크, Wiki, 문제, 끌어오기 요청, 계정이 소유한 페이지가 제거됩니다. {% ifversion fpt or ghec %} 사용자가 만든 문제와 끌어오기 요청 및 다른 사용자가 소유한 리포지토리에서 만든 댓글은 삭제되지 않습니다. 대신 [삭제할 사용자](https://github.com/ghost)와 연결됩니다. {% else %}사용자가 만든 문제와 끌어오기 요청 및 다른 사용자가 소유한 리포지토리에서 만든 댓글은 삭제되지 않습니다.{% endif %}

{% ifversion fpt or ghec %} 계정을 삭제하면 청구가 중지됩니다. 계정과 연결된 메일 주소는 {% data variables.product.product_location %}의 다른 계정에서 사용할 수 있게 됩니다. 90일이 지나면 다른 사람도 새 계정에서 계정 이름을 사용할 수 있게 됩니다. {% endif %}

조직의 유일한 소유자인 경우 개인 계정을 삭제하려면 먼저 소유권을 다른 사람에게 전송하거나 조직을 삭제해야 합니다. 조직에 다른 소유자가 있는 경우 개인 계정을 삭제하려면 먼저 조직에서 자신을 제거해야 합니다.

자세한 내용은 다음을 참조하세요.
- “[조직 소유권 전송](/articles/transferring-organization-ownership)”
- “[조직 계정 삭제](/articles/deleting-an-organization-account)”
- “[조직에서 자신을 제거](/articles/removing-yourself-from-an-organization/)”

## <a name="back-up-your-account-data"></a>계정 데이터 백업

개인 계정을 삭제하기 전에 계정 소유의 모든 리포지토리, 프라이빗 포크, Wiki, 문제, 끌어오기 요청의 복사본을 만듭니다.

{% warning %}

**경고:** 개인 계정이 삭제되면 GitHub에서 콘텐츠를 복원할 수 없습니다.

{% endwarning %}

## <a name="delete-your-personal-account"></a>개인 계정 삭제

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. 계정 설정 페이지의 아래에 있는 “계정 삭제”에서 **계정 삭제** 를 클릭합니다. 개인 계정을 삭제하려면 다음을 수행합니다.
    - 조직의 유일한 소유자인 경우 소유권을 다른 사람에게 전송하거나 조직을 삭제해야 합니다.
    - 조직에 다른 조직 소유자가 있는 경우 조직에서 자신을 제거해야 합니다.
   ![계정 삭제 단추](/assets/images/help/settings/settings-account-delete.png)
4. “이 작업을 수행하려는지 확인합니다” 대화 상자에서 다음 단계를 완료하여 계정이 삭제되면 어떻게 되는지 확인합니다. ![계정 삭제 확인 대화 상자](/assets/images/help/settings/settings-account-deleteconfirm.png) {% ifversion fpt or ghec %}- 계정이 소유한 모든 리포지토리, 프라이빗 리포지토리 포크, Wiki, 문제, 끌어오기 요청, {% data variables.product.prodname_pages %} 사이트가 삭제되고 청구가 즉시 종료됩니다. 90일 후 사용자 이름은 {% data variables.product.product_name %}에서 누구나 사용할 수 있게 됩니다.
  {% else %}- 계정이 소유한 모든 리포지토리, 프라이빗 리포지토리 포크, Wiki, 문제, 끌어오기 요청, 페이지가 삭제되고 사용자 이름은 {% data variables.product.product_name %}에서 사용할 수 있게 된다는 점을 기억하세요.
  {% endif %}- 첫 번째 필드에 {% data variables.product.product_name %} 사용자 이름 또는 메일을 입력합니다.
    - 두 번째 필드에 프롬프트의 메시지를 입력합니다.
