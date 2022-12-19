---
title: 기본 메일 주소 변경
intro: You can change the email address associated with your personal account at any time.
redirect_from:
- /articles/changing-your-primary-email-address
- /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Primary email address
ms.openlocfilehash: af1443f1f23b8038d2cf1f4e42a1ab0a83214edb
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091412"
---
{% note %}

**참고:** 기본 메일 주소를 백업 메일 주소로 이미 설정된 메일로 변경할 수 없습니다.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
3. 기본 메일 주소로 설정할 새 메일 주소를 추가하려면 “메일 주소 추가”에서 새 메일 주소를 입력하고 **추가** 를 클릭합니다.
   ![다른 메일 주소 추가 단추](/assets/images/help/settings/add_another_email_address.png)
4. “기본 메일 주소”에서 드롭다운 메뉴를 사용하여 기본 메일 주소로 설정할 메일 주소를 클릭한 다음, **저장** 을 클릭합니다.
   ![기본 메일 주소로 설정 단추](/assets/images/help/settings/set_as_primary_email.png)
5. 계정에서 이전 메일 주소를 제거하려면 이전 메일 옆에 있는 {% octicon "trash" aria-label="The trash symbol" %}을 클릭합니다.
{% ifversion fpt or ghec %}
6. 새 기본 메일 주소를 확인합니다. 확인된 메일 주소가 없으면 {% data variables.product.product_name %}의 일부 기능을 사용할 수 없습니다. 자세한 내용은 “[메일 주소 확인](/articles/verifying-your-email-address)”을 참조하세요.
{% endif %}
