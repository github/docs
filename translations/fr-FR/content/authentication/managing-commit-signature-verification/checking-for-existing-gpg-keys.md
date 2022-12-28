---
title: Vérification des clés GPG existantes
intro: 'Avant de générer une clé GPG, vous pouvez vérifier si vous n’en avez pas à disposition.'
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
ms.openlocfilehash: c766f4707f2b208c84394f655a7e8b47a9456f6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369296'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**Remarque :** GPG n’est pas installé par défaut sur macOS et Windows. Pour installer les outils en ligne de commande GPG, consultez la [page de téléchargement de GnuPG](https://www.gnupg.org/download/).

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %}
3. Vérifiez la sortie de la commande pour voir si vous avez une paire de clés GPG.
    * Si aucune paire de clés GPG n’est disponible ou si vous ne souhaitez pas utiliser une paire de clés GPG disponible pour la signature des commits et des étiquettes, [générez une nouvelle clé GPG](/articles/generating-a-new-gpg-key).
    * Si une paire de clés GPG est disponible et que vous souhaitez l’utiliser pour signer des commits et des étiquettes, vous pouvez afficher la clé publique à l’aide de la commande suivante en indiquant l’ID de clé GPG que vous souhaitez utiliser. Dans cet exemple, l’ID de clé GPG est `3AA5C34371567BD2` :
      ```shell
      $ gpg --armor --export <em>3AA5C34371567BD2</em>
      # Prints the GPG key ID, in ASCII armor format
      ```
      Vous pouvez ensuite [ajouter votre clé GPG à votre compte GitHub](/articles/adding-a-gpg-key-to-your-github-account).

## Pour aller plus loin

* « [Génération d’une nouvelle clé GPG](/articles/generating-a-new-gpg-key) »
* « [Ajout d’une clé GPG à votre compte GitHub](/articles/adding-a-gpg-key-to-your-github-account) »
* « [Informer Git de l’utilisation de votre clé de signature](/articles/telling-git-about-your-signing-key) »
* « [Association d’un e-mail à votre clé GPG](/articles/associating-an-email-with-your-gpg-key) »
* « [Signature de commits](/articles/signing-commits) »
* « [Signature d’étiquettes](/articles/signing-tags) »
