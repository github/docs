---
title: Informarle a Git acerca de tu clave de firma
intro: 'Para firmar las confirmaciones localmente, necesitas informar a Git que hay una llave de GPG o X.509 que quieres utilizar.'
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
shortTitle: Decirle tu llave de firma a Git
---

{% mac %}

## Informarle a Git acerca de tu llave GPG

Si estás utilizando una llave GPG que empata con tu identidad de confirmante y tu dirección de correo electrónico verificada asociada con tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, entonces puedes comenzar a firmar confirmaciones y etiquetas.

{% note %}

Si no tienes una llave GPG que coincida con la identidad de la persona que confirma el cambio, debes asociar un correo electrónico a una llave existente. Para obtener más información, consulta "[Asociar un correo electrónico a tu llave GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Si tienes múltiples llaves GPG, le debes decir a Git cuál utilizar.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. Si no estás utilizando la suite de GPG, ejecuta el siguiente comando en el shell de `zsh` para agregar la llave GPG a tu archivo `.zshrc`, si es que existe, o a tu archivo `.zprofile`:
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  Como alternativa, si utilizas el shell `bash`, ejecuta este comando:
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```

{% data reusables.gpg.x-509-key %}

{% endmac %}

{% windows %}

## Informarle a Git acerca de tu llave GPG

Si estás utilizando una llave GPG que empata con tu identidad de confirmante y tu dirección de correo electrónico verificada asociada con tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, entonces puedes comenzar a firmar confirmaciones y etiquetas.

{% note %}

Si no tienes una llave GPG que coincida con la identidad de la persona que confirma el cambio, debes asociar un correo electrónico a una llave existente. Para obtener más información, consulta "[Asociar un correo electrónico a tu llave GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Si tienes múltiples llaves GPG, le debes decir a Git cuál utilizar.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}

{% data reusables.gpg.x-509-key %}

{% endwindows %}

{% linux %}

## Informarle a Git acerca de tu llave GPG

Si estás utilizando una llave GPG que empata con tu identidad de confirmante y tu dirección de correo electrónico verificada asociada con tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, entonces puedes comenzar a firmar confirmaciones y etiquetas.

{% note %}

Si no tienes una llave GPG que coincida con la identidad de la persona que confirma el cambio, debes asociar un correo electrónico a una llave existente. Para obtener más información, consulta "[Asociar un correo electrónico a tu llave GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Si tienes múltiples llaves GPG, le debes decir a Git cuál utilizar.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. Para agregar tu llave GPG a tu perfil bash, ejecuta el siguiente comando:
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
  {% note %}

  **Nota:** Si no tienes `.bash_profile`, este comando agrega tu llave GPG al `.profile`.

  {% endnote %}

{% endlinux %}

## Leer más

- "[Comprobar llaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
- "[Generar una llave GPG nueva](/articles/generating-a-new-gpg-key)"
- "[Utilizar una dirección de correo electrónico verificada en tu llave GPG](/articles/using-a-verified-email-address-in-your-gpg-key)"
- "[Agregar una nueva llave GPG a tu cuenta de GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)"
- "[Asociar un correo electrónico con tu llave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Firmar confirmaciones](/articles/signing-commits)"
- "[Firmar etiquetas](/articles/signing-tags)"
