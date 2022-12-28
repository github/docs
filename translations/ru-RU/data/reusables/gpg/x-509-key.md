---
ms.openlocfilehash: f277d0294224922a74ce406c5cfb2a06daa6db2d
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: "148008974"
---

## Предоставление Git информации о вашем ключе X.509

Вы можете использовать [smimesign](https://github.com/github/smimesign) для подписывания фиксаций и тегов с помощью S/MIME.

{% data reusables.gpg.smime-git-version %}

1. Установите [smimesign](https://github.com/github/smimesign#installation).
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Настройте Git, чтобы использовать S/MIME для подписывания фиксаций и тегов. В Git 2.19 или более поздней версии используйте команды `git config gpg.x509.program` и `git config gpg.format`:
  - Чтобы использовать S/MIME для подписывания во всех репозиториях, воспользуйтесь следующим кодом:
  ```shell
  $ git config --global gpg.x509.program smimesign
  $ git config --global gpg.format x509
  ```
  - Чтобы использовать S/MIME для подписывания в одном репозитории, воспользуйтесь следующим кодом:
  ```shell
  $ cd PATH-TO-REPOSITORY
  $ git config --local gpg.x509.program smimesign
  $ git config --local gpg.format x509
  ```
  В Git 2.18 или более ранней версии используйте команду `git config gpg.program`:
  - Чтобы использовать S/MIME для подписывания во всех репозиториях, воспользуйтесь следующим кодом:
  ```shell
  $ git config --global gpg.program smimesign
  ```
  - Чтобы использовать S/MIME для подписывания в одном репозитории, воспользуйтесь следующим кодом:
  ```shell
  $ cd  PATH-TO-REPOSITORY
  $ git config --local gpg.program smimesign
  ```
  Если вы используете ключ X.509, соответствующий вашему удостоверению вносителя фиксаций, можно начать подписывание фиксаций и тегов.
4. Если вы не используете ключ X.509, соответствующий вашему удостоверению вносителя фиксаций, выведите список ключей X.509, для которых у вас есть сертификат и закрытый ключ, с помощью команды `smimesign --list-keys`.
  ```shell
  $ smimesign --list-keys
  ```
5. В списке ключей X.509 скопируйте идентификатор сертификата ключа X.509, который вы хотите использовать. В этом примере идентификатором сертификата является `0ff455a2708394633e4bb2f88002e3cd80cbd76f`:
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
6. Чтобы задать ключ подписывания X.509 в Git, вставьте приведенный ниже текст, подставив скопированный ранее идентификатор сертификата.
  - Чтобы использовать ключ X.509 для подписывания во всех репозиториях, воспользуйтесь следующим кодом:
  ```shell
  $ git config --global user.signingkey 0ff455a2708394633e4bb2f88002e3cd80cbd76f
  ```
  - Чтобы использовать ключ X.509 для подписывания в одном репозитории, воспользуйтесь следующим кодом:
  ```shell
  $ cd  PATH-TO-REPOSITORY
  $ git config --local user.signingkey 0ff455a2708394633e4bb2f88002e3cd80cbd76f
  ```
