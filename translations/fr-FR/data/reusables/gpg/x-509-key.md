---
ms.openlocfilehash: 3661ae0cbef8282faa12b3d71bef77d503fcc0c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147785409"
---

## Informer Git concernant votre clé X.509

Vous pouvez utiliser [smimesign](https://github.com/github/smimesign) pour signer des commits et des étiquettes à l’aide de S/MIME.

{% data reusables.gpg.smime-git-version %}

1. Installez [smimesign](https://github.com/github/smimesign#installation).
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Configurez Git afin d’utiliser S/MIME pour signer des validations et des balises. Dans Git 2.19 ou version ultérieure, utilisez les commandes `git config gpg.x509.program` et `git config gpg.format` :
  - Pour utiliser S/MIME pour signer pour tous les dépôts :
  ```shell
  $ git config --global gpg.x509.program smimesign
  $ git config --global gpg.format x509
  ```
  - Pour utiliser S/MIME pour signer pour un seul dépôt :
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.x509.program smimesign
  $ git config --local gpg.format x509
  ```
  Dans Git 2.18 ou version antérieure, utilisez la commande `git config gpg.program` :
  - Pour utiliser S/MIME pour signer pour tous les dépôts :
  ```shell
  $ git config --global gpg.program smimesign
  ```
  - Pour utiliser S/MIME pour signer pour un seul dépôt :
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.program smimesign
  ```
  Si vous utilisez une clé X.509 correspondant à votre identité de valideur, vous pouvez commencer à signer des validations et des étiquettes.
4. Si vous n’utilisez pas de clé X.509 correspondant à votre identité de valideur, répertoriez les clés X.509 pour lesquelles vous disposez ’un certificat et d’une clé privée à l’aide de la commande `smimesign --list-keys`.
  ```shell
  $ smimesign --list-keys
  ```
5. Dans la liste des clés X.509, copiez l’ID de certificat de la clé X.509 que vous souhaitez utiliser. Dans cet exemple, l’ID de certificat est `0ff455a2708394633e4bb2f88002e3cd80cbd76f` :
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
6. Pour définir votre clé de signature X.509 dans Git, collez le texte ci-dessous, en remplaçant l’ID de certificat par celui que vous avez copié précédemment.
  - Pour utiliser votre clé X.509 pour signer pour tous les dépôts :
  ```shell
  $ git config --global user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
  - Pour utiliser votre clé X.509 pour signer pour un seul dépôt :
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
