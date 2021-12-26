---
title: Generar una nueva clave SSH y agregarla al ssh-agent
intro: 'Una vez que has comprobado las claves SSH existentes, puedes generar una nueva clave SSH para usarla para la autenticación y luego agregarla al ssh-agent.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent/
  - /articles/generating-a-new-ssh-key/
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

### Acerca de la generación de llaves SSH

Si todavía no tienes una llave SSH, debes generar una nueva para utilizarla para autenticación. Si no estás seguro si ya tienes una llave SSH, puedes verificar si hay llaves existentes. Para obtener más información, consulta la sección "[Verificar si hay llaves SSH existentes](/github/authenticating-to-github/checking-for-existing-ssh-keys)".

{% if currentVersion == "free-pro-team@latest" %}

Si quieres utilizar una llave de seguridad de hardware para autenticarte en {% data variables.product.product_name %}, debes generar una llave SSH nueva para esta. Debes conectar tu llave de seguridad de hardware a tu computadora cuando te autentiques con el par de llaves. Para obtener más información, consulta las[notas de lanzamiento de OpenSSH 8.2](https://www.openssh.com/txt/release-8.2).

{% endif %}
Si no deseas volver a ingresar tu contraseña cada vez que usas tu clave SSH, puedes agregar tu clave al agente SSH, el cual administrará tus claves SSH y recordará tu contraseña.

### Generar una nueva clave SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Pega el siguiente texto, que sustituye tu dirección de correo electrónico en {% data variables.product.product_name %}.
  ```shell
  $ ssh-keygen -t ed25519 -C "<em>your_email@example.com</em>"
  ```
  {% note %}

  **Nota:** Si estás utilizando un sistema tradicional que no es compatible con el algoritmo Ed25519, utiliza:
  ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```

  {% endnote %}
  Esto crea una nueva clave ssh usando el correo electrónico proporcionado como etiqueta.
  ```shell
  > Generating public/private ed25519 key pair.
  ```
3. Cuando se te indique "Ingresar un archivo donde guardar la clave", presiona Intro. Al hacerlo aceptas la ubicación predeterminada del archivo.

  {% mac %}

  ```shell
  > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_ed25519): <em>[Press enter]</em>
  ```

  {% endmac %}

  {% windows %}

  ```shell
  > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_ed25519):<em>[Press enter]</em>
  ```

  {% endwindows %}

  {% linux %}

  ```shell
  > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_ed25519): <em>[Press enter]</em>
  ```

  {% endlinux %}

4. Donde se indica, escribe una contraseña segura. Para obtener más información, consulta la sección ["Trabajar con contraseñas de llaves SSH](/articles/working-with-ssh-key-passphrases)".
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```

### Agregar tu clave SSH al ssh-agent

Antes de agregar una llave SSH nueva al ssh-agent para que administre tus llaves, debes haber verificado si habían llaves SSH existentes y haber generado una llave SSH nueva. <span class="platform-mac">Cuando agregues tu clave SSH al agente, usa el comando macOS `ssh-add` y no una aplicación instalada por [macports](https://www.macports.org/), [homebrew](http://brew.sh/) o alguna otra fuente externa.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. Si estás usando macOS Sierra 10.12.2 o una versión posterior, deberás modificar tu archivo `~/.ssh/config` para cargar las claves automáticamente en el ssh-agent y almacenar las contraseñas en tu keychain.

    * Primero, revisa si tu archivo `~/.ssh/config` existe en la ubicación predeterminada.

      ```shell
      $ open ~/.ssh/config
      > The file /Users/<em>you</em>/.ssh/config does not exist.
      ```

    * Si el archivo no existe, créalo.

      ```shell
      $ touch ~/.ssh/config
      ```

    * Abre tu archivo `~/.ssh/config` y luego modifícalo para que contenga las siguientes líneas. Si tu llave SSH tiene un nombre o ruta diferentes que el código de ejemplo, modifica el nombre de archivo o ruta para que coincida con tu configuración actual.

      ```
      Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_ed25519
      ```

     {% note %}

     **Nota:** Si eliges no agregar una frase de acceso a tu llave, deberás omitir la línea `UseKeychain`.

     {% endnote %}

      {% mac %}
      {% note %}

      **Nota:** Si ves un error como este

      ```
      /Users/USER/.ssh/config: line 16: Bad configuration option: usekeychain
      ```

      y una línea de configuración adicional en tu sección `Host *`:

      ```
      Host *
        IgnoreUnknown UseKeychain
      ```

      {% endnote %}
      {% endmac %}

3. Agrega tu llave privada SSH al ssh-agent y almacena tu contraseña en tu keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_ed25519
  ```
  {% note %}

  **Nota:** La opción `-K` es una versión estándar de Apple de `ssh-add`, que almacena la contraseña en tu keychain cuando agregas una clave SSH al ssh-agent. Si eliges no agregar una frase de acceso a tu llave, ejecuta el comando sin la opción `-K`.

  Si no tienes instalada la versión estándar de Apple, puedes recibir un mensaje de error. Para obtener más información sobre cómo resolver este error, consulta "[Error: ssh-add: opción ilegal -- K](/articles/error-ssh-add-illegal-option-k)".

  {% endnote %}

4. Agrega la llave SSH a tu cuenta en {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Agregar una llave SSH nueva a tu cuenta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Verifica que el ssh-agent se esté ejecutando. Puedes utilizar las instrucciones de "Autolanzamiento del ssh-agent" que se encuentran en [Trabajar con frases de acceso de las llaves SSH](/articles/working-with-ssh-key-passphrases)" o iniciarlo manualmente:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```

2. Agrega tu llave privada SSH al ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Agrega la llave SSH a tu cuenta en {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Agregar una llave SSH nueva a tu cuenta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. Agrega tu llave privada SSH al ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Agrega la llave SSH a tu cuenta en {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Agregar una llave SSH nueva a tu cuenta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endlinux %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1"  %}
### Generar una llave SSH nueva para una llave de seguridad de hardware

Si estás utilizando macOS o Linux, puede que necesites actualizar tu cliente SSH o instalar un cliente SSH nuevo antes de generar una llave SSH nueva. Para obtener más información, consulta el "[Error: Unknown key type](/github/authenticating-to-github/error-unknown-key-type)"

1. Insterta tu clave de seguridad de hardware en tu computadora.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Pega el siguiente texto, sustitutyendo la dirección de correo electrónico por tu cuenta de {% data variables.product.product_name %}.
  ```shell
  $ ssh-keygen -t ed25519-sk -C "<em>your_email@example.com</em>"
  ```
  {% note %}

  **Nota:** Si el comando falla y recibes el error `invalid format` o `feature not supported,` puede que estés utilizando una llave de seguridad de hardware que no sea compatible con el algoritmo Ed25519. En vez de esto, ingresa el siguiente comando.
  ```shell
   $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
  ```

  {% endnote %}
4. Cuando se te solicite, pulsa el botón en tu llave de seguridad de hardware.
5. Cuando se te pida "Ingresar un archivo en donde se pueda guardar la llave", teclea Enter para aceptar la ubicación predeterminada.

  {% mac %}

  ```shell
  > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_ed25519_sk): <em>[Press enter]</em>
  ```

  {% endmac %}

  {% windows %}

  ```shell
  > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_ed25519_sk):<em>[Press enter]</em>
  ```

  {% endwindows %}

  {% linux %}

  ```shell
  > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_ed25519_sk): <em>[Press enter]</em>
  ```

  {% endlinux %}

6. Cuando se te solicite teclear una contraseña, teclea **Enter**.
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```
7. Agrega la llave SSH a tu cuenta en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Agregar una llave SSH nueva a tu cuenta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endif %}

### Leer más

- "[Acerca de SSH](/articles/about-ssh)"
- Para obtener más información, consulta "[Trabajar con frases de contraseña de la clave SSH](/articles/working-with-ssh-key-passphrases)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[Autorizar una clave SSH para usar con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}
