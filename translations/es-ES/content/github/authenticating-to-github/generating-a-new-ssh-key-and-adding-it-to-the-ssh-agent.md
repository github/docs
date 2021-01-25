---
title: Generar una nueva clave SSH y agregarla al ssh-agent
intro: 'Una vez que has comprobado las claves SSH existentes, puedes generar una nueva clave SSH para usarla para la autenticación y luego agregarla al ssh-agent.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent/
  - /articles/generating-a-new-ssh-key/
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Si todavía no tienes una clave SSH, debes [generar una nueva clave SSH](#generating-a-new-ssh-key). Si no estás seguro de si ya tienes una clave SSH, comprueba las [claves existentes](/articles/checking-for-existing-ssh-keys).

Si no deseas volver a ingresar tu contraseña cada vez que usas tu clave SSH, puedes [agregar tu clave al SSH agent](#adding-your-ssh-key-to-the-ssh-agent), que gestiona tus claves SSH y recuerda tu contraseña.

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

4. Donde se indica, escribe una contraseña segura. Para obtener más información, consulta "[Trabajar con frases de contraseña de la clave SSH](/articles/working-with-ssh-key-passphrases)".
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```

### Agregar tu clave SSH al ssh-agent

Antes de agregar una nueva clave SSH al ssh-agent para gestionar tus claves, debes haber [comprobado las claves SSH existentes](/articles/checking-for-existing-ssh-keys) y [generado una nueva clave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key). <span class="platform-mac">Cuando agregues tu clave SSH al agente, usa el comando macOS `ssh-add` y no una aplicación instalada por [macports](https://www.macports.org/), [homebrew](http://brew.sh/) o alguna otra fuente externa.</span>

{% mac %}

1. {% data reusables.command_line.start_ssh_agent %}

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

    * Abre tu archivo `~/.ssh/config` y luego modifícalo reemplazando `~/.ssh/id_ed25519` si no estás utilizando la ubicación y nombre predeterminados para tu llave de `id_ed25519`.

      ```
      Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_ed25519
      ```

     {% note %}

     **Nota:** Si eliges no agregar una frase de acceso a tu llave, deberás omitir la línea `UseKeychain`.

     {% endnote %}

3. Agrega tu llave privada SSH al ssh-agent y almacena tu contraseña en tu keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_ed25519
  ```
  {% note %}

  **Nota:** La opción `-K` es una versión estándar de Apple de `ssh-add`, que almacena la contraseña en tu keychain cuando agregas una clave SSH al ssh-agent. Si eliges no agregar una frase de acceso a tu llave, ejecuta el comando sin la opción `-K`.

  Si no tienes instalada la versión estándar de Apple, puedes recibir un mensaje de error. Para obtener más información sobre cómo resolver este error, consulta "[Error: ssh-add: opción ilegal -- K](/articles/error-ssh-add-illegal-option-k)".

  {% endnote %}

4. [Agrega la clave SSH a tu cuenta de GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Verifica que el ssh-agent se esté ejecutando. Puedes utilizar las instrucciones de "Autolanzamiento del ssh-agent" que se encuentran en [Trabajar con frases de acceso de las llaves SSH](/articles/working-with-ssh-key-passphrases)" o iniciarlo manualmente:
  ```shell
  # start the ssh-agent in the background
  $ eval `ssh-agent -s`
  > Agent pid 59566
  ```

2. Agrega tu llave privada SSH al ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. [Agrega la clave SSH a tu cuenta de GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)

{% endwindows %}

{% linux %}

1. {% data reusables.command_line.start_ssh_agent %}

2. Agrega tu llave privada SSH al ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. [Agrega la clave SSH a tu cuenta de GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)

{% endlinux %}

### Further reading

- "[Acerca de SSH](/articles/about-ssh)"
- Para obtener más información, consulta "[Trabajar con frases de contraseña de la clave SSH](/articles/working-with-ssh-key-passphrases)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[Autorizar una clave SSH para usar con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}
