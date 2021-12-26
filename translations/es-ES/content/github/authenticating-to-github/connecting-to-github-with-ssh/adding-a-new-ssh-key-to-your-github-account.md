---
title: Agregar una clave SSH nueva a tu cuenta de GitHub
intro: 'Para configurar tu cuenta de {% data variables.product.product_name %} a fin de usar tu clave SSH nueva (o existente), también deberás agregarla a tu cuenta de {% data variables.product.product_name %}.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

Antes de agregar una nueva llave GPG a tu cuenta de {% data variables.product.product_name %}, deberías haber:
* [Comprobado tus claves SSH existentes](/articles/checking-for-existing-ssh-keys)
* [Generar una nueva clave SSH y agregarla al ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Después de agregar una nueva clave SSH a tu cuenta de {% data variables.product.product_name %}, puedes reconfigurar los repositorios locales para usar SSH. Para obtener más información, consulta "[Alternar URL remota de HTTPS a SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)".

{% data reusables.ssh.dsa-support %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: También puedes agregar una llave SSH utilizando el {% data variables.product.prodname_cli %}. Para obtener más información, consulta "[`gh ssh-key add`](https://cli.github.com/manual/gh_ssh-key_add)" en la documentación de {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

{% mac %}

1. Copia la llave SSH pública a tu portapapeles.

  Si tu archivo de llave SSH pública tiene un nombre diferente que en el código de ejemplo, modifica el nombre de archivo para que coincida con tu configuración actual. Al copiar tu clave, no agregues líneas nuevas o espacios en blanco.

  ```shell
  $ pbcopy &lt; ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
  ```

  {% tip %}

  **Sugerencia:** Si `pbcopy` no está funcionando, puedes ubicar la carpeta `.ssh` oculta, abrir el archivo en tu editor de texto favorito, y copiarlo en tu portapapeles.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Haz clic en **New SSH key** (Nueva clave SSH) o **Add SSH key** (Agregar clave SSH). ![Botón SSH Key (Clave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. En el campo "Title" (Título), agrega una etiqueta descriptiva para la clave nueva. Por ejemplo, si estás usando tu Mac personal, es posible que llames a esta tecla "Personal MacBook Air".
6. Pega tu clave en el campo "Key". ![Campo de llave](/assets/images/help/settings/ssh-key-paste.png)
7. Haz clic en **Add SSH key** (Agregar tecla SSH). ![Botón Add key (Agregar llave)](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user_settings.sudo-mode-popup %}

{% endmac %}

{% windows %}

1. Copia la llave SSH pública a tu portapapeles.

  Si tu archivo de llave SSH pública tiene un nombre diferente que en el código de ejemplo, modifica el nombre de archivo para que coincida con tu configuración actual. Al copiar tu clave, no agregues líneas nuevas o espacios en blanco.

  ```shell
  $ clip &lt; ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
  ```

  {% tip %}

  **Sugerencia:** Si `clip` no está funcionando, puedes ubicar la carpeta `.shh` oculta, abrir el archivo en tu editor de texto favorito, y copiarlo en tu portapapeles.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Haz clic en **New SSH key** (Nueva clave SSH) o **Add SSH key** (Agregar clave SSH). ![Botón SSH Key (Clave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. En el campo "Title" (Título), agrega una etiqueta descriptiva para la clave nueva. Por ejemplo, si estás usando tu Mac personal, es posible que llames a esta tecla "Personal MacBook Air".
6. Pega tu clave en el campo "Key". ![Campo de llave](/assets/images/help/settings/ssh-key-paste.png)
7. Haz clic en **Add SSH key** (Agregar tecla SSH). ![Botón Add key (Agregar llave)](/assets/images/help/settings/ssh-add-key.png)
8. Si se te solicita, confirma tu contraseña {% data variables.product.product_name %}.![Diálogo Modo sudo](/assets/images/help/settings/sudo_mode_popup.png)

{% endwindows %}

{% linux %}

1. Copia la llave SSH pública a tu portapapeles.

  Si tu archivo de llave SSH pública tiene un nombre diferente que en el código de ejemplo, modifica el nombre de archivo para que coincida con tu configuración actual. Al copiar tu clave, no agregues líneas nuevas o espacios en blanco.

  ```shell
  $ sudo apt-get update
  $ sudo apt-get install xclip
  # Downloads and installs xclip. If you don't have `apt-get`, you might need to use another installer (like `yum`)

  $ xclip -selection clipboard &lt; ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
  ```
  {% tip %}

  **Sugerencia:** Si `xclip` no está funcionando, puedes ubicar la carpeta `.ssh` oculta, abrir el archivo en tu editor de texto favorito, y copiarlo en tu portapapeles.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Haz clic en **New SSH key** (Nueva clave SSH) o **Add SSH key** (Agregar clave SSH). ![Botón SSH Key (Clave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. En el campo "Title" (Título), agrega una etiqueta descriptiva para la clave nueva. Por ejemplo, si estás usando tu Mac personal, es posible que llames a esta tecla "Personal MacBook Air".
6. Pega tu clave en el campo "Key". ![Campo de llave](/assets/images/help/settings/ssh-key-paste.png)
7. Haz clic en **Add SSH key** (Agregar tecla SSH). ![Botón Add key (Agregar llave)](/assets/images/help/settings/ssh-add-key.png)
8. Si se te solicita, confirma tu contraseña {% data variables.product.product_name %}.![Diálogo Modo sudo](/assets/images/help/settings/sudo_mode_popup.png)

{% endlinux %}

{% if currentVersion == "free-pro-team@latest" %}
### Leer más

- "[Autorizar una clave SSH para usar con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{% endif %}
