---
title: Generación de una nueva clave SSH y adición al agente SSH
intro: 'Una vez que has comprobado las claves SSH existentes, puedes generar una nueva clave SSH para usarla para la autenticación y luego agregarla al ssh-agent.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent
  - /articles/generating-a-new-ssh-key
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Generate new SSH key
ms.openlocfilehash: 8714cb24a6ed46fda17f53295601748ebffdc255
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147409143'
---
## Acerca de las frases de contraseña de clave SSH

{% data reusables.ssh.about-ssh %} Para obtener más información, consulta ["Acerca de SSH](/authentication/connecting-to-github-with-ssh/about-ssh)".

Al generar una clave SSH, puedes agregar una frase de contraseña para proteger aún más la clave. Siempre que uses la clave, debes escribir la frase de contraseña. Si la clave tiene una frase de contraseña y no quieres escribir la frase de contraseña cada vez que uses la clave, puedes agregar la clave al agente SSH. El agente SSH administra las claves SSH y recuerda la frase de contraseña.

Si todavía no tienes una llave SSH, debes generar una nueva para utilizarla para autenticación. Si no estás seguro si ya tienes una llave SSH, puedes verificar si hay llaves existentes. Para obtener más información, consulta "[Comprobar tus claves SSH existentes](/github/authenticating-to-github/checking-for-existing-ssh-keys)".

Si quieres utilizar una llave de seguridad de hardware para autenticarte en {% data variables.product.product_name %}, debes generar una llave SSH nueva para esta. Debes conectar tu llave de seguridad de hardware a tu computadora cuando te autentiques con el par de llaves. Para obtener más información, consulta las [notas de la versiónde OpenSSH 8.2](https://www.openssh.com/txt/release-8.2).

## Generar una nueva clave SSH

Puedes generar una nueva clave SSH en el equipo local. Después de generar la clave, puedes agregar la clave a tu cuenta en {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} para habilitar la autenticación para las operaciones de Git a través de SSH.

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Pega el siguiente texto, que sustituye tu dirección de correo electrónico en {% data variables.product.product_name %}.
   {%- ifversion ghae %}  <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>" 
   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "<em>your_email@example.com</em>"
   ```
   {% note %}
   
   **Nota:** Si usas un sistema heredado que no admite el algoritmo Ed25519, usa:
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>"
   ```

   {% endnote %} {%- endif %}

   Esto crea una llave SSH utilizando el correo electrónico proporcionado como etiqueta.
   ```shell
   > Generating public/private <em>algorithm</em> key pair.
   ```
3. Cuando se te indique "Ingresar un archivo donde guardar la clave", presiona Intro. Con esta acción se acepta la ubicación predeterminada del archivo.

   {% mac %}
   
   ```shell
   > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_<em>algorithm</em>): <em>[Press enter]</em>
   ```
   
   {% endmac %}
   
   {% windows %}
   
   ```shell
   > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_<em>algorithm</em>):<em>[Press enter]</em>
   ```

   {% endwindows %}
   
   {% linux %}
   
   ```shell
   > Enter a file in which to save the key (/home/<em>you</em>/.ssh/<em>algorithm</em>): <em>[Press enter]</em>
   ```
   
   {% endlinux %}

4. Cuando se le pida, escriba una frase de contraseña segura. Para obtener más información, consulta "[Trabajar con contraseñas de clave SSH](/articles/working-with-ssh-key-passphrases)".
   ```shell
   > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
   > Enter same passphrase again: <em>[Type passphrase again]</em>
   ```

## Agregar tu clave SSH al ssh-agent

Antes de agregar una llave SSH nueva al ssh-agent para que administre tus llaves, debes haber verificado si habían llaves SSH existentes y haber generado una llave SSH nueva. <span class="platform-mac">Al agregar la clave SSH al agente, usa el comando `ssh-add` de macOS predeterminado y no una aplicación instalada por [macports](https://www.macports.org/), [homebrew](http://brew.sh/) o algún otro origen externo.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. Si estás usando macOS Sierra 10.12.2 o una versión posterior, deberás modificar tu archivo `~/.ssh/config` para cargar las claves automáticamente en el agente ssh-agent y almacenar las contraseñas en tu cadena de claves.

   * En primer lugar, comprueba si el archivo `~/.ssh/config` existe en la ubicación predeterminada.

     ```shell
     $ open ~/.ssh/config
     > The file /Users/<em>you</em>/.ssh/config does not exist.
     ```

   * Si el archivo no existe, créalo.

     ```shell
     $ touch ~/.ssh/config
     ```

   * Abre el archivo `~/.ssh/config` y, a continuación, modifica el archivo para que contenga las líneas siguientes. Si tu llave SSH tiene un nombre o ruta diferentes que el código de ejemplo, modifica el nombre de archivo o ruta para que coincida con tu configuración actual. 

     ```
     Host *
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **Notas:**
     
     - Si decides no agregar una frase de contraseña a la clave, debes omitir la línea `UseKeychain`.
  
     - Si ves un error `Bad configuration option: usekeychain`, agrega una línea adicional a la sección `Host *` de la configuración.

       ```
       Host *
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. Agrega tu llave privada SSH al ssh-agent y almacena tu contraseña en tu keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
   ```
   {% note %}

   **Nota:** La opción `-K` es una versión estándar de Apple de `ssh-add`, que almacena la contraseña en tu cadena de claves cuando agregas una clave SSH al agente ssh-agent. Si eliges no agregar una frase de contraseña a tu clave, ejecuta el comando sin la opción `-K`. 

   Si no tienes instalada la versión estándar de Apple, puedes recibir un mensaje de error. Para obtener más información sobre cómo resolver este error, consulta "[Error: ssh-add: opción no válida -- K](/articles/error-ssh-add-illegal-option-k)".
  
   En MacOS Monterey (12.0), las marcas `-K` y `-A` están en desuso y se han reemplazado por las marcas `--apple-use-keychain` y `--apple-load-keychain`, respectivamente. 

   {% endnote %}

4. Agrega la llave SSH a tu cuenta en {% data variables.product.product_name %}. Para obtener más información, consulta "[Adición de una clave SSHa tu cuenta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Verifica que el agente ssh-agent se esté ejecutando. Puedes usar las instrucciones de "Auto-lanzamiento ssh-agent" en "[Trabajar con contraseñas de clave SSH](/articles/working-with-ssh-key-passphrases) o iniciarla manualmente:
   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

2. Agrega tu llave privada SSH al ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Agrega la llave SSH a tu cuenta en {% data variables.product.product_name %}. Para obtener más información, consulta "[Adición de una clave SSHa tu cuenta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. Agrega tu llave privada SSH al ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Agrega la llave SSH a tu cuenta en {% data variables.product.product_name %}. Para obtener más información, consulta "[Adición de una clave SSHa tu cuenta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endlinux %}

## Generar una llave SSH nueva para una llave de seguridad de hardware

Si estás utilizando macOS o Linux, puede que necesites actualizar tu cliente SSH o instalar un cliente SSH nuevo antes de generar una llave SSH nueva. Para obtener más información, consulta "[Error: Tipo de clave desconocido](/github/authenticating-to-github/error-unknown-key-type)".

1. Insterta tu clave de seguridad de hardware en tu computadora.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Pega el siguiente texto, sustitutyendo la dirección de correo electrónico por tu cuenta de {% data variables.product.product_name %}.
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "<em>your_email@example.com</em>"
   ```
  
   {%- ifversion not ghae %} {% note %}

   **Nota:** Si se produce un error en el comando y recibes los errores `invalid format` o `feature not supported,` puede que estés usando una clave de seguridad de hardware que no admite el algoritmo Ed25519. En vez de esto, ingresa el siguiente comando.
   ```shell
    $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   ```
   
   {% endnote %} {%- endif %}
4. Cuando se te solicite, pulsa el botón en tu llave de seguridad de hardware.
5. Cuando se te pida "Ingresar un archivo en donde se pueda guardar la llave", teclea Enter para aceptar la ubicación predeterminada.

   {% mac %}
   
   ```shell
   > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): <em>[Press enter]</em>
   ```

   {% endmac %}
   
   {% windows %}
   
   ```shell
   > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):<em>[Press enter]</em>
   ```

   {% endwindows %}
   
   {% linux %}
   
   ```shell
   > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): <em>[Press enter]</em>
   ```
   
   {% endlinux %}

6. Cuando se te pida que escribas una frase de contraseña, presiona **Entrar**.
   ```shell
   > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
   > Enter same passphrase again: <em>[Type passphrase again]</em>
   ```
7. Agrega la llave SSH a tu cuenta en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Adición de una clave SSHa tu cuenta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".
