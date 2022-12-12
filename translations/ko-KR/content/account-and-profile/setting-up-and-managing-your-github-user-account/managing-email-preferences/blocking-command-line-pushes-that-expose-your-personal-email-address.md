---
title: 개인 메일 주소를 노출하는 명령줄 푸시 차단
intro: If you've chosen to keep your email address private when performing web-based operations, you can also choose to block command line pushes that may expose your personal email address.
redirect_from:
- /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
- /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Block push with personal email
ms.openlocfilehash: e085c19339cc530537626d9bf987125aebfd3427
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090083"
---
명령줄에서 커밋을 푸시하면 [Git에서 설정](/articles/setting-your-commit-email-address)한 메일 주소가 커밋과 연결됩니다. 이 설정을 사용하도록 지정하면 GitHub에 푸시할 때마다 가장 최근 커밋이 확인됩니다. 해당 커밋의 작성자 메일이 GitHub 계정의 프라이빗 메일인 경우 푸시가 차단되고 프라이빗 메일 노출에 대한 경고가 표시됩니다.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. 명령줄에서 푸시하는 커밋의 메일 주소를 프라이빗으로 유지하려면 **내 메일을 노출하는 명령줄 푸시 차단** 을 선택합니다.
![메일을 노출하는 명령줄 푸시 차단 옵션](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## <a name="further-reading"></a>추가 참고 자료

- “[커밋 메일 주소 설정](/articles/setting-your-commit-email-address)”
