---
title: Génération d’une nouvelle clé GPG
intro: 'Si vous n’avez pas de clé GPG à disposition, vous pouvez en générer une pour signer les commits et les étiquettes.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710226'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

## Génération d’une clé GPG

{% note %}

**Remarque :** Avant de générer une nouvelle clé GPG, veillez à vérifier votre adresse e-mail. Si vous n’avez pas vérifié votre adresse e-mail, vous ne pourrez pas signer de commits et d’étiquettes avec GPG.{% ifversion fpt or ghec %} Pour plus d’informations, consultez « [Vérification de votre adresse e-mail](/articles/verifying-your-email-address) ».{% endif %}

{% endnote %}

1. Téléchargez et installez [les outils en ligne de commande GPG](https://www.gnupg.org/download/) pour votre système d’exploitation. D’une manière générale, nous recommandons d’installer la version la plus récente de votre système d’exploitation.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Générez une paire de clés GPG. Étant donné qu’il existe plusieurs versions de GPG, vous devrez peut-être consulter la [_page man_](https://en.wikipedia.org/wiki/Man_page) correspondante pour trouver la commande de génération de clé appropriée. Votre clé doit utiliser RSA.
    - Si vous utilisez la version 2.1.17 ou une version ultérieure, collez le texte ci-dessous pour générer une paire de clés GPG.
      ```shell{:copy}
      $ gpg --full-generate-key
      ```
    - Si vous n’utilisez pas la version 2.1.17 ou une version ultérieure, la commande `gpg --full-generate-key` ne fonctionne pas. Collez le texte ci-dessous et passez à l’étape 6.
      ```shell{:copy}
      $ gpg --default-new-key-algo rsa4096 --gen-key
      ```
4. À l’invite, spécifiez le type de clé souhaité ou appuyez sur `Enter` pour accepter la valeur par défaut.
5. À l’invite, spécifiez la taille de clé souhaitée ou appuyez sur `Enter` pour accepter la valeur par défaut. La taille de votre clé doit être d’au moins `4096` bits.
6. Entrez la durée de validité de la clé. Appuyez sur `Enter` pour confirmer la sélection par défaut (la clé n’expire pas). Sauf si vous avez besoin d’une date d’expiration, nous vous recommandons d’accepter cette valeur par défaut.
7. Vérifiez que vos sélections sont correctes.
8. Entrez vos informations d’identifiant utilisateur.

  {% note %}

  **Remarque :** Quand vous êtes invité à entrer votre adresse e-mail, veillez à entrer l’adresse e-mail vérifiée de votre compte GitHub. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %}  Pour plus d’informations, consultez « [Vérification de votre adresse e-mail](/articles/verifying-your-email-address) » et « [Définition de votre adresse e-mail de commit](/articles/setting-your-commit-email-address) ».{% endif %}

  {% endnote %}

9. Tapez une phrase secrète sûre.
{% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
10. Collez le texte ci-dessous en indiquant l’ID de clé GPG que vous souhaitez utiliser. Dans cet exemple, l’ID de clé GPG est `3AA5C34371567BD2` :
 ```shell{:copy}
 $ gpg --armor --export 3AA5C34371567BD2
 # Prints the GPG key ID, in ASCII armor format
 ```
11. Copiez votre clé GPG en commençant par `-----BEGIN PGP PUBLIC KEY BLOCK-----` et en terminant par `-----END PGP PUBLIC KEY BLOCK-----`.
12. [Ajoutez la clé GPG à votre compte GitHub](/articles/adding-a-gpg-key-to-your-github-account).

## Pour aller plus loin

* « [Vérification des clés GPG existantes](/articles/checking-for-existing-gpg-keys) »
* « [Ajout d’une clé GPG à votre compte GitHub](/articles/adding-a-gpg-key-to-your-github-account) »
* « [Informer Git de l’utilisation de votre clé de signature](/articles/telling-git-about-your-signing-key) »
* « [Association d’un e-mail à votre clé GPG](/articles/associating-an-email-with-your-gpg-key) »
* « [Signature de commits](/articles/signing-commits) »
* « [Signature d’étiquettes](/articles/signing-tags) »
