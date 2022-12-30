---
ms.openlocfilehash: 3661ae0cbef8282faa12b3d71bef77d503fcc0c6
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147785410"
---

## Git über Deinen X.509-Schlüssel informieren

Du kannst [smimesign](https://github.com/github/smimesign) verwenden, um Commits und Tags mit S/MIME zu signieren.

{% data reusables.gpg.smime-git-version %}

1. Installiere [smimesign](https://github.com/github/smimesign#installation).
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Lege fest, dass Git S/MIME zum Signieren von Commits und Tags verwendet. Verwende in Git 2.19 oder höher die Befehle `git config gpg.x509.program` und `git config gpg.format`:
  - Führe den folgenden Befehl aus, um S/MIME zum Signieren sämtlicher Repositorys zu verwenden:
  ```shell
  $ git config --global gpg.x509.program smimesign
  $ git config --global gpg.format x509
  ```
  - Führe den folgenden Befehl aus, um S/MIME zum Signieren eines einzelnen Repositorys zu verwenden:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.x509.program smimesign
  $ git config --local gpg.format x509
  ```
  Verwende in Git 2.18 oder niedrigeren Versionen den Befehl `git config gpg.program`:
  - Führe den folgenden Befehl aus, um S/MIME zum Signieren sämtlicher Repositorys zu verwenden:
  ```shell
  $ git config --global gpg.program smimesign
  ```
  - Führe den folgenden Befehl aus, um S/MIME zum Signieren eines einzelnen Repositorys zu verwenden:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.program smimesign
  ```
  Wenn Du einen X.509-Schlüssel verwendest, der mit Deiner Beitragender-Identität übereinstimmt, kannst Du Commits und Tags signieren.
4. Wenn du keinen X.509-Schlüssel verwendest, der deiner Committeridentität entspricht, liste mit dem Befehl `smimesign --list-keys` die X.509-Schlüssel auf, für die du sowohl über ein Zertifikat als auch über einen privaten Schlüssel verfügst.
  ```shell
  $ smimesign --list-keys
  ```
5. Kopiere die Zertifikats-ID des gewünschten X.509-Schlüssels aus der Liste der X.509-Schlüssel. In diesem Beispiel lautet die Zertifikat-ID `0ff455a2708394633e4bb2f88002e3cd80cbd76f`:
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
6. Um Deinen X.509-Signaturschlüssel in Git festzulegen, füge den folgenden Text ein, und ersetze die zuvor kopierte Zertifikats-ID.
  - Um Deinen X.509-Schlüssel zum Signieren sämtlicher Repositorys zu verwenden:
  ```shell
  $ git config --global user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
  - Um Deinen X.509-Schlüssel zum Signieren eines einzelnen Repositorys zu verwenden:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
