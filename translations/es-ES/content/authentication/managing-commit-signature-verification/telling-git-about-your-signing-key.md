---
title: Informarle a Git acerca de tu clave de firma
intro: 'To sign commits locally, you need to inform Git that there''s a GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} or X.509 key you''d like to use.'
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
1. Opcionalmente, para que se te pida ingresar un PIN o frase de ingreso cuando estos se requieran, instala `pinentry-mac`. Pior ejemplo, utilizando [Homebrew](https://brew.sh/):
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

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
1. Para agregar tu clave GPG a tu archivo de inicio `.bashrc`, ejecuta el siguiente comando:
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %}
{% ifversion ssh-commit-verification %}

## Telling Git about your SSH key

You can use an existing SSH key to sign commits and tags, or generate a new one specifically for signing. Para obtener más información, consulta "[Generar una nueva llave SSH y agregarla a ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.configure-ssh-signing %}
{% data reusables.gpg.copy-ssh-public-key %}
{% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## Leer más

- "[Adding a new SSH key to your GitHub account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."
- "[Firmar confirmaciones](/articles/signing-commits)"
- "[Firmar etiquetas](/articles/signing-tags)"
