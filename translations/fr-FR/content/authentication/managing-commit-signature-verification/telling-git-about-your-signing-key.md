---
title: Informer Git de l’utilisation de votre clé de signature
intro: 'Pour signer les commits localement, vous devez informer Git qu’il y a une clé GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} ou X.509 que vous voulez utiliser.'
redirect_from:
  - /articles/telling-git-about-your-gpg-key
  - /articles/telling-git-about-your-signing-key
  - /github/authenticating-to-github/telling-git-about-your-signing-key
  - /github/authenticating-to-github/managing-commit-signature-verification/telling-git-about-your-signing-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Tell Git your signing key
ms.openlocfilehash: d70911bdf3ff5de93537f7c9acb1374a4f2c90e3
ms.sourcegitcommit: aded2711e14a0c2473049d3d7e05c82a74e4c634
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179948'
---
{% mac %}

## Informer Git de l’utilisation de votre clé GPG

Si vous utilisez une clé GPG qui correspond à votre identité de commiteur et à votre adresse e-mail vérifiée associées à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, vous pouvez commencer à signer des commits et des étiquettes.

{% note %}

Si vous n’avez pas de clé GPG qui correspond à votre identité de commiteur, vous devez associer un e-mail à une clé existante. Pour plus d’informations, consultez « [Association d’un e-mail à votre clé GPG](/articles/associating-an-email-with-your-gpg-key) ».

{% endnote %}

Si vous avez plusieurs clés GPG, vous devez indiquer à Git laquelle utiliser.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. Si vous n’utilisez pas la suite GPG, exécutez la commande suivante dans l’interpréteur de commandes `zsh` pour ajouter la clé GPG à votre fichier `.zshrc`, s’il existe, ou votre fichier `.zprofile` :
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  Vous utilisez l’interpréteur de commandes `bash`, vous pouvez également exécuter cette commande :
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
1. Si vous le souhaitez, pour être invité à entrer un code PIN ou une phrase secrète quand c’est nécessaire, installez `pinentry-mac`. Par exemple, avec [Homebrew](https://brew.sh/) :
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% endmac %}

{% windows %}

## Informer Git de l’utilisation de votre clé GPG

Si vous utilisez une clé GPG qui correspond à votre identité de commiteur et à votre adresse e-mail vérifiée associées à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, vous pouvez commencer à signer des commits et des étiquettes.

{% note %}

Si vous n’avez pas de clé GPG qui correspond à votre identité de commiteur, vous devez associer un e-mail à une clé existante. Pour plus d’informations, consultez « [Association d’un e-mail à votre clé GPG](/articles/associating-an-email-with-your-gpg-key) ».

{% endnote %}

Si vous avez plusieurs clés GPG, vous devez indiquer à Git laquelle utiliser.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}

{% endwindows %}

{% linux %}

## Informer Git de l’utilisation de votre clé GPG

Si vous utilisez une clé GPG qui correspond à votre identité de commiteur et à votre adresse e-mail vérifiée associées à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, vous pouvez commencer à signer des commits et des étiquettes.

{% note %}

Si vous n’avez pas de clé GPG qui correspond à votre identité de commiteur, vous devez associer un e-mail à une clé existante. Pour plus d’informations, consultez « [Association d’un e-mail à votre clé GPG](/articles/associating-an-email-with-your-gpg-key) ».

{% endnote %}

Si vous avez plusieurs clés GPG, vous devez indiquer à Git laquelle utiliser.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. Pour ajouter votre clé GPG à votre fichier de démarrage `.bashrc`, exécutez la commande suivante :
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %} {% ifversion ssh-commit-verification %}

## Informer Git concernant votre clé SSH

Vous pouvez utiliser une clé SSH existante pour signer des commits et des étiquettes, ou en générer une nouvelle spécifiquement pour la signature. Pour plus d’informations, consultez « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ».

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-ssh-signing %} {% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## Lectures supplémentaires

- « [Ajout d’une nouvelle clé SSH à votre compte GitHub](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) ».
- « [Signature de commits](/articles/signing-commits) »
- « [Signature d’étiquettes](/articles/signing-tags) »
