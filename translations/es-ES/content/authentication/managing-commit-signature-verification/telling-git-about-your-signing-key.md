---
title: Informarle a Git acerca de tu clave de firma
intro: 'Para firmar las confirmaciones localmente, necesitas informar a Git que hay una clave de GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} o X.509 que quieres utilizar.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179953'
---
{% mac %}

## Informarle a Git acerca de tu llave GPG

Si estás utilizando una clave GPG que coincide con tu identidad de confirmante y tu dirección de correo electrónico verificada asociada a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, entonces puedes comenzar a firmar confirmaciones y etiquetas.

{% note %}

Si no tienes una llave GPG que coincida con la identidad de la persona que confirma el cambio, debes asociar un correo electrónico a una llave existente. Para más información, vea "[Asociación de un correo electrónico con la clave de GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Si tienes múltiples llaves GPG, le debes decir a Git cuál utilizar.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. Si no usa el conjunto de GPG, ejecute el comando siguiente en el shell de `zsh` para agregar la clave de GPG al archivo `.zshrc`, si existe, o bien al archivo `.zprofile`:
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  Como alternativa, si usa el shell de `bash`, ejecute este comando:
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
1. Opcionalmente, para que se le solicite que escriba un PIN o una frase de contraseña cuando sea necesario, instale `pinentry-mac`. Por ejemplo, con [Homebrew](https://brew.sh/):
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% endmac %}

{% windows %}

## Informarle a Git acerca de tu llave GPG

Si estás utilizando una clave GPG que coincide con tu identidad de confirmante y tu dirección de correo electrónico verificada asociada a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, entonces puedes comenzar a firmar confirmaciones y etiquetas.

{% note %}

Si no tienes una llave GPG que coincida con la identidad de la persona que confirma el cambio, debes asociar un correo electrónico a una llave existente. Para más información, vea "[Asociación de un correo electrónico con la clave de GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Si tienes múltiples llaves GPG, le debes decir a Git cuál utilizar.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}

{% endwindows %}

{% linux %}

## Informarle a Git acerca de tu llave GPG

Si estás utilizando una clave GPG que coincide con tu identidad de confirmante y tu dirección de correo electrónico verificada asociada a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, entonces puedes comenzar a firmar confirmaciones y etiquetas.

{% note %}

Si no tienes una llave GPG que coincida con la identidad de la persona que confirma el cambio, debes asociar un correo electrónico a una llave existente. Para más información, vea "[Asociación de un correo electrónico con la clave de GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Si tienes múltiples llaves GPG, le debes decir a Git cuál utilizar.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. Para agregar la clave de GPG al archivo de inicio de `.bashrc`, ejecute el comando siguiente:
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %} {% ifversion ssh-commit-verification %}

## Indicación a Git acerca de tu clave SSH

Puedes usar una clave SSH existente para firmar confirmaciones y etiquetas, o generar una nueva específicamente para firmar. Para obtener más información, consulta "[Generación de una nueva clave SSH y adición a ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-ssh-signing %} {% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## Información adicional

- "[incorporación de una clave SSH nueva a tu cuenta de GitHub](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)".
- "[Firma de confirmaciones](/articles/signing-commits)"
- "[Firma de etiquetas](/articles/signing-tags)"
