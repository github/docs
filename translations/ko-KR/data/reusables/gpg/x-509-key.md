---
ms.openlocfilehash: f277d0294224922a74ce406c5cfb2a06daa6db2d
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: "148008972"
---

## Git에 X.509 키에 대해 알리기

[smimesign](https://github.com/github/smimesign)을 사용하여 S/MIME를 통해 커밋 및 태그에 서명할 수 있습니다.

{% data reusables.gpg.smime-git-version %}

1. [smimesign](https://github.com/github/smimesign#installation)을 설치합니다.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. S/MIME을 사용하여 커밋 및 태그에 서명하도록 Git을 구성합니다. Git 2.19 이상에서는 `git config gpg.x509.program` 및 `git config gpg.format` 명령을 사용합니다.
  - S/MIME을 사용하여 모든 리포지토리에 서명하려면 다음을 수행합니다.
  ```shell
  $ git config --global gpg.x509.program smimesign
  $ git config --global gpg.format x509
  ```
  - S/MIME을 사용하여 단일 리포지토리에 서명하려면 다음을 수행합니다.
  ```shell
  $ cd PATH-TO-REPOSITORY
  $ git config --local gpg.x509.program smimesign
  $ git config --local gpg.format x509
  ```
  Git 2.18 이하 버전에서는 `git config gpg.program` 명령을 사용합니다.
  - S/MIME을 사용하여 모든 리포지토리에 서명하려면 다음을 수행합니다.
  ```shell
  $ git config --global gpg.program smimesign
  ```
  - S/MIME을 사용하여 단일 리포지토리에 서명하려면 다음을 수행합니다.
  ```shell
  $ cd  PATH-TO-REPOSITORY
  $ git config --local gpg.program smimesign
  ```
  커밋한 사람 ID와 일치하는 X.509 키를 사용하는 경우 커밋 및 태그에 서명을 시작할 수 있습니다.
4. 커밋한 사람 ID와 일치하는 X.509 키를 사용하지 않는 경우 `smimesign --list-keys` 명령을 사용하여 인증서와 프라이빗 키가 모두 있는 X.509 키를 나열합니다.
  ```shell
  $ smimesign --list-keys
  ```
5. X.509 키 목록에서 사용하려는 X.509 키의 인증서 ID를 복사합니다. 이 예제에서 인증서 ID는 `0ff455a2708394633e4bb2f88002e3cd80cbd76f`입니다.
  ```shell
  $ smimesign --list-keys
               ID: 0ff455a2708394633e4bb2f88002e3cd80cbd76f
              S/N: a2dfa7e8c9c4d1616f1009c988bb70f
        Algorithm: SHA256-RSA
         Validity: 2017-11-22 00:00:00 +0000 UTC - 2020-11-22 12:00:00 +0000 UTC
           Issuer: CN=DigiCert SHA2 Assured ID CA,OU=www.digicert.com,O=DigiCert Inc,C=US
          Subject: CN=Octocat,O=GitHub\, Inc.,L=San Francisco,ST=California,C=US
           Emails: octocat@github.com
  ```
6. Git에서 X.509 서명 키를 설정하려면 아래 텍스트를 붙여넣고 이전에 복사한 인증서 ID를 대체합니다.
  - X.509 키를 사용하여 모든 리포지토리에 서명하려면 다음을 수행합니다.
  ```shell
  $ git config --global user.signingkey 0ff455a2708394633e4bb2f88002e3cd80cbd76f
  ```
  - X.509 키를 사용하여 단일 리포지토리에 서명하려면 다음을 수행합니다.
  ```shell
  $ cd  PATH-TO-REPOSITORY
  $ git config --local user.signingkey 0ff455a2708394633e4bb2f88002e3cd80cbd76f
  ```
