---
title: Agregar una clave SSH nueva a tu cuenta de GitHub
intro: 'Para configurar tu cuenta de {% data variables.product.product_name %} a fin de usar tu clave SSH nueva (o existente), también deberás agregarla a tu cuenta de {% data variables.product.product_name %}.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - SSH
shortTitle: Agregar una llave SSH nueva
---

Antes de agregar una nueva llave GPG a tu cuenta de {% data variables.product.product_name %}, deberías haber:
* [Comprobado tus claves SSH existentes](/articles/checking-for-existing-ssh-keys)
* [Generar una nueva clave SSH y agregarla al ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Después de agregar una nueva clave SSH a tu cuenta de {% data variables.product.product_name %}, puedes reconfigurar los repositorios locales para usar SSH. Para obtener más información, consulta "[Alternar URL remota de HTTPS a SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)".

{% data reusables.ssh.key-type-support %}

{% mac %}

{% include tool-switcher %}
{% webui %}

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

{% endwebui %}

{% endmac %}

{% windows %}

{% include tool-switcher %}

{% webui %}

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

{% endwebui %}

{% endwindows %}

{% linux %}

{% include tool-switcher %}
{% webui %}

1. Copia la llave SSH pública a tu portapapeles.

  Si tu archivo de llave SSH pública tiene un nombre diferente que en el código de ejemplo, modifica el nombre de archivo para que coincida con tu configuración actual. Al copiar tu clave, no agregues líneas nuevas o espacios en blanco.

  ```shell
  $ cat ~/.ssh/id_ed25519.pub
  # Then select and copy the contents of the id_ed25519.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **Tip:** Alternatively, you can locate the hidden `.ssh` folder, open the file in your favorite text editor, and copy it to your clipboard.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Haz clic en **New SSH key** (Nueva clave SSH) o **Add SSH key** (Agregar clave SSH). ![Botón SSH Key (Clave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. En el campo "Title" (Título), agrega una etiqueta descriptiva para la clave nueva. Por ejemplo, si estás usando tu Mac personal, es posible que llames a esta tecla "Personal MacBook Air".
6. Pega tu clave en el campo "Key". ![Campo de llave](/assets/images/help/settings/ssh-key-paste.png)
7. Haz clic en **Add SSH key** (Agregar tecla SSH). ![Botón Add key (Agregar llave)](/assets/images/help/settings/ssh-add-key.png)
8. Si se te solicita, confirma tu contraseña {% data variables.product.product_name %}.![Diálogo Modo sudo](/assets/images/help/settings/sudo_mode_popup.png)

{% endwebui %}

{% endlinux %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To add an SSH key to your GitHub account, use the `ssh-key add` subcommand, specifying your public key.

```shell
gh ssh-key add <em>key-file</em>
```

Para incluir un título para la clave nueva, utiliza el marcador `-t` o `--title`.

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

{% endcli %}

{% ifversion fpt %}
## Leer más

- "[Autorizar una clave SSH para usar con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{% endif %}
