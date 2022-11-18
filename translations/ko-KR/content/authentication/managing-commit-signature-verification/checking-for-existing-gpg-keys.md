---
title: 기존 GPG 키 확인
intro: GPG 키를 생성하기 전에 기존 GPG 키가 있는지 확인할 수 있습니다.
redirect_from:
  - /articles/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/managing-commit-signature-verification/checking-for-existing-gpg-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Existing GPG keys
ms.openlocfilehash: 23a984642b98d3793f6540666f27943420cf3a4a
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008857'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**참고:** GPG는 macOS 또는 Windows에 기본적으로 설치되지 않습니다. GPG 명령줄 도구를 설치하려면 [GnuPG의 다운로드 페이지](https://www.gnupg.org/download/)를 참조하세요.

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %}
3. 명령 출력을 확인하여 GPG 키 쌍이 있는지 확인합니다.
    * GPG 키 쌍이 없거나 커밋 및 태그 서명에 사용할 수 있는 것을 사용하지 않으려면 [새 GPG 키를 생성](/articles/generating-a-new-gpg-key)합니다.
    * 기존 GPG 키 쌍이 있고 커밋 및 태그에 서명하는 데 사용하려는 경우 사용하려는 GPG 키 ID로 대체하여 다음 명령을 사용하여 퍼블릭 키를 표시할 수 있습니다. 이 예제에서 GPG 키 ID는 `3AA5C34371567BD2`입니다.
      ```shell
      $ gpg --armor --export 3AA5C34371567BD2
      # Prints the GPG key ID, in ASCII armor format
      ```
      그런 다음 [GPG 키를 GitHub 계정에 추가](/articles/adding-a-gpg-key-to-your-github-account)할 수 있습니다.

## 추가 참고 자료

* “[새 GPG 키 생성](/articles/generating-a-new-gpg-key)”
* “[GitHub 계정에 GPG 키 추가](/articles/adding-a-gpg-key-to-your-github-account)”
* “[서명 키에 대해 Git에 알리기](/articles/telling-git-about-your-signing-key)”
* “[GPG 키와 메일 연결](/articles/associating-an-email-with-your-gpg-key)”
* “[커밋 서명](/articles/signing-commits)”
* “[태그 서명](/articles/signing-tags)”
