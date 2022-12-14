---
title: GPG 키와 메일 연결
intro: 'GPG 키는 커밋자 ID와 일치하는 {% data variables.product.product_name %} 확인 메일과 연결되어야 합니다.'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/associating-an-email-with-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Associate email with GPG key
ms.openlocfilehash: 52d06daca2025cecd76a23a4dec12a6d2037b902
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094027'
---
{% note %}

{% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에서 커밋자 ID 및 계정과 연결된 확인된 전자 메일 주소와 일치하는 GPG 키를 사용하는 경우 커밋 서명 및 태그 서명을 시작할 수 있습니다.

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
4. 사용하려는 GPG 키 ID로 대체하여 `gpg --edit-key GPG key ID`을 입력합니다. 다음 예제에서 GPG 키 ID는 `3AA5C34371567BD2`입니다.
  ```shell
  $ gpg --edit-key 3AA5C34371567BD2
  ```
5. `gpg> adduid`을 입력하여 사용자 ID 세부 정보를 추가합니다.
  ```shell
  $ gpg> adduid
  ```
6. 프롬프트에 따라 실명, 메일 주소 및 설명을 입력합니다. `N`, `C` 또는 `E`을 선택하여 항목을 수정할 수 있습니다. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %} 자세한 내용은 “[커밋 메일 주소 설정](/articles/setting-your-commit-email-address)”을 참조하세요.{% endif %}
  ```shell
  Real Name: OCTOCAT
  Email address: "octocat@github.com"
  Comment: GITHUB-KEY
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. `O`을 입력하여 선택 항목을 확인합니다.
8. 키의 암호를 입력합니다.
9. `gpg> save`를 입력하여 변경 내용을 저장합니다.
  ```shell
  $ gpg> save
  ```
10. 사용하려는 GPG 키 ID로 대체하여 `gpg --armor --export GPG key ID`을 입력합니다. 다음 예제에서 GPG 키 ID는 `3AA5C34371567BD2`입니다.
  ```shell
  $ gpg --armor --export 3AA5C34371567BD2
  # Prints the GPG key, in ASCII armor format
  ```
11. [GPG 키를 GitHub 계정에 추가](/articles/adding-a-gpg-key-to-your-github-account)하여 업로드합니다.

## 추가 참고 자료

- “[기존 GPG 키 확인](/articles/checking-for-existing-gpg-keys)”
- “[새 GPG 키 생성](/articles/generating-a-new-gpg-key)”
- “[GPG 키에 확인된 메일 주소 사용](/articles/using-a-verified-email-address-in-your-gpg-key)”
- “[GitHub 계정에 GPG 키 추가](/articles/adding-a-gpg-key-to-your-github-account)”
- “[커밋 서명](/articles/signing-commits)”
- “[태그 서명](/articles/signing-tags)”
