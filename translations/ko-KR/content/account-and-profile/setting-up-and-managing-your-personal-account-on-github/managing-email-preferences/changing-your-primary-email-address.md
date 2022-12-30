---
title: 기본 메일 주소 변경
intro: 언제든지 개인 계정과 연결된 메일 주소를 변경할 수 있습니다.
redirect_from:
  - /articles/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Primary email address
ms.openlocfilehash: 5624a44c888b20350497fd2a4ec5a0d07186cdfe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165283'
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
