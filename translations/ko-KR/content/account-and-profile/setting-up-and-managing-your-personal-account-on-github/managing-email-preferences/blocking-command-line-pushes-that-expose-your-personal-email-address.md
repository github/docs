---
title: 개인 메일 주소를 노출하는 명령줄 푸시 차단
intro: 웹 기반 작업을 수행할 때 메일 주소를 비공개로 유지하기로 선택한 경우 개인 메일 주소를 노출할 수도 있는 명령줄 푸시를 차단하도록 선택할 수도 있습니다.
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Block push with personal email
ms.openlocfilehash: 2c79886af1e35e0f02419610dfca1459a9693731
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165459'
---
명령줄에서 커밋을 푸시하면 [Git에서 설정](/articles/setting-your-commit-email-address)한 메일 주소가 커밋과 연결됩니다. 이 설정을 사용하도록 지정하면 GitHub에 푸시할 때마다 가장 최근 커밋이 확인됩니다. 해당 커밋의 작성자 메일이 GitHub 계정의 프라이빗 메일인 경우 푸시가 차단되고 프라이빗 메일 노출에 대한 경고가 표시됩니다.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.keeping_your_email_address_private %}
4. 명령줄에서 푸시하는 커밋의 메일 주소를 프라이빗으로 유지하려면 **내 메일을 노출하는 명령줄 푸시 차단** 을 선택합니다.
![메일을 노출하는 명령줄 푸시 차단 옵션](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## 추가 참고 자료

- “[커밋 메일 주소 설정](/articles/setting-your-commit-email-address)”
