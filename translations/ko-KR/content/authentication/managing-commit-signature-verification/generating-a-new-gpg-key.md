---
title: 새 GPG 키 생성
intro: 기존 GPG 키가 없는 경우 커밋 및 태그 서명에 사용할 새 GPG 키를 생성할 수 있습니다.
redirect_from:
  - /articles/generating-a-new-gpg-key
  - /github/authenticating-to-github/generating-a-new-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/generating-a-new-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: fbe51f7b50414632e6994d6f621441c8923e47f1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710229'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

## GPG 키 생성

{% note %}

**참고:** 새 GPG 키를 생성하기 전에 메일 주소를 확인했는지 확인합니다. 메일 주소를 확인하지 않은 경우 GPG를 사용하여 커밋 및 태그에 서명할 수 없습니다. {% ifversion fpt or ghec %} 자세한 내용은 “[메일 주소 확인](/articles/verifying-your-email-address)”을 참조하세요. {% endif %}

{% endnote %}

1. 해당 운영 체제에 대한 [GPG 명령줄 도구](https://www.gnupg.org/download/)를 다운로드 및 설치합니다. 일반적으로 운영 체제에 대한 최신 버전을 설치하는 것이 좋습니다.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. GPG 키 쌍을 생성합니다. 여러 버전의 GPG가 있으므로 적절한 키 생성 명령을 찾으려면 관련 [_기본 페이지_](https://en.wikipedia.org/wiki/Man_page)를 참조해야 할 수 있습니다. 키는 RSA를 사용해야 합니다.
    - 버전 2.1.17 이상인 경우 아래 텍스트를 붙여넣어 GPG 키 쌍을 생성합니다.
      ```shell{:copy}
      $ gpg --full-generate-key
      ```
    - 버전 2.1.17 이상이 아닌 경우 `gpg --full-generate-key` 명령이 작동하지 않습니다. 아래 텍스트를 붙여넣고 6단계로 건너뜁니다.
      ```shell{:copy}
      $ gpg --default-new-key-algo rsa4096 --gen-key
      ```
4. 프롬프트에서 원하는 키 종류를 지정하거나 `Enter`를 눌러 기본값을 적용합니다.
5. 프롬프트에서 원하는 키 크기를 지정하거나 `Enter`를 눌러 기본값을 적용합니다. 키는 `4096` 비트 이상이어야 합니다.
6. 키가 유효해야 하는 시간을 입력합니다. `Enter` 키를 눌러 키가 만료되지 않음을 나타내는 기본 선택을 지정합니다. 만료 날짜가 필요하지 않은 경우 이 기본값을 적용하는 것이 좋습니다.
7. 선택한 내용이 올바른지 확인합니다.
8. 사용자 ID 정보를 입력합니다.

  {% note %}

  **참고:** 메일 주소를 입력하라는 메시지가 표시되면 GitHub 계정의 확인된 메일 주소를 입력해야 합니다. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %}  자세한 내용은 “[메일 주소 확인](/articles/verifying-your-email-address)” 및 “[커밋 메일 주소 설정](/articles/setting-your-commit-email-address)”을 참조하세요.{% endif %}

  {% endnote %}

9. 보안 암호를 입력합니다.
{% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
10. 사용하려는 GPG 키 ID로 대체하여 아래 텍스트를 붙여넣습니다. 이 예제에서 GPG 키 ID는 `3AA5C34371567BD2`입니다.
 ```shell{:copy}
 $ gpg --armor --export 3AA5C34371567BD2
 # Prints the GPG key ID, in ASCII armor format
 ```
11. `-----BEGIN PGP PUBLIC KEY BLOCK-----`로 시작하고 `-----END PGP PUBLIC KEY BLOCK-----`로 끝나는 GPG 키를 복사합니다.
12. [GitHub 계정에 GPG 키를 추가합니다](/articles/adding-a-gpg-key-to-your-github-account).

## 추가 참고 자료

* “[기존 GPG 키 확인](/articles/checking-for-existing-gpg-keys)”
* “[GitHub 계정에 GPG 키 추가](/articles/adding-a-gpg-key-to-your-github-account)”
* “[서명 키에 대해 Git에 알리기](/articles/telling-git-about-your-signing-key)”
* “[GPG 키와 메일 연결](/articles/associating-an-email-with-your-gpg-key)”
* “[커밋 서명](/articles/signing-commits)”
* “[태그 서명](/articles/signing-tags)”
