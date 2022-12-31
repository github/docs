---
title: macOS 키 집합에서 자격 증명 업데이트
intro: '{% ifversion이 ghae %} 사용자 이름, 암호 또는 {% endif %} {% 데이터 variables.product.pat_generic %}이(가) 아닌 {% 데이터 variables.product.product_name %}을(를) 변경하는 경우 도우미에서 저장된 자격 증명 `git-credential-osxkeychain` 을 업데이트해야 합니다.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/getting-started-with-git/updating-credentials-from-the-macos-keychain
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: macOS Keychain credentials
ms.openlocfilehash: 5007c729221b9daf8e9393dfa7776fdfc3398c34
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094579'
---
{% tip %}

**참고:** macOS 키 집합에서 자격 증명을 업데이트하는 것은 macOS에 기본 제공되는 도우미를 사용하여  `osxkeychain` {% 데이터 variables.product.pat_generic %}을(를) 수동으로 구성한 사용자에게만 적용됩니다. 

대신 [SSH를 구성](/articles/generating-an-ssh-key)하거나 GCM([Git Credential Manager](/get-started/getting-started-with-git/caching-your-github-credentials-in-git))으로 업그레이드하는 것이 좋습니다. GCM은 2FA(2단계 인증)를 포함하여 사용자를 대신하여 인증을 관리할 수 있습니다(더 이상 수동 {% 데이터 variables.product.pat_generic %}s 없음).

{% endtip %}

{% data reusables.user-settings.password-authentication-deprecation %}

## 키 집합 액세스를 통해 자격 증명 업데이트

1. 메뉴 모음 오른쪽에 있는 Spotlight 아이콘(돋보기)을 클릭합니다. `Keychain access`를 입력하고 Enter 키를 눌러 앱을 시작합니다.
   ![Spotlight 검색 창](/assets/images/help/setup/keychain-access.png)
2. 키 집합 액세스에서 **{% data variables.command_line.backticks %}** 을 검색합니다.
3. `{% data variables.command_line.backticks %}`에 대한 “인터넷 암호” 항목을 찾습니다.
4. 항목을 적절하게 편집하거나 삭제합니다.

## 명령줄을 통해 자격 증명 삭제

명령줄을 통해 자격 증명 도우미를 직접 사용하여 키 집합 항목을 지울 수 있습니다.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> [Press Return]
```

성공하면 아무것도 인쇄되지 않습니다. 작동하는지 테스트하려면 {% 데이터 variables.location.product_location %}에서 프라이빗 리포지토리를 시도하고 복제합니다. 암호를 입력하라는 메시지가 표시되면 키 집합 항목이 삭제된 것입니다.

## 추가 참고 자료

- “[Git에서 {% data variables.product.prodname_dotcom %} 자격 증명 캐싱](/github/getting-started-with-github/caching-your-github-credentials-in-git/)”
