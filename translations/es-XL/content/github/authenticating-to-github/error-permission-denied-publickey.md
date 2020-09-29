---
title: 'Error: Permiso denegado (publickey)'
intro: Un error de "Permiso denegado" significa que el servidor rechazó tu conexión. Esto puede suceder por varias razones. A continuación se explican los ejemplos más comunes.
redirect_from:
  - /articles/error-permission-denied-publickey
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### ¿El comando `sudo` se debe usar con Git?

No deberías estar usando el comando `sudo` con Git. Si tienes una *muy buena razón* para usar `sudo`, asegúrate de estar usándolo con todos los comandos (probablemente es mejor que uses `su` para obtener un shell como raíz en este punto). Si [generas claves SSH](/articles/generating-an-ssh-key) sin `sudo` y luego intentas usar un comando como `sudo git push`, no estarás usando las mismas claves que generaste.

### Verifica si estás conectado al servidor correcto

Escribir no es fácil. Todos los sabemos. Escribe con cuidado; no podrás conectarte con "githib.com" ni a "guthub.com". En algunos casos, una red corporativa puede generar problemas al tratar de resolver también el registro de DNS.

Para asegurarte de que te estás conectando al dominio correcto, puedes ingresar el siguiente comando:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_5.6p1, OpenSSL 0.9.8r 8 Feb 2011
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} [IP ADDRESS] port 22.
```

La conexión debe establecerse en el puerto 22{% if currentVersion == "free-pro-team@latest" %}, a menos que estés anulando parámetros para usar [SSH a través de HTTPS](/articles/using-ssh-over-the-https-port){% endif %}.

### Siempre usa el usuario "git"

Todas las conexiones, incluidas las de URL remotas, deben hacerse como el usuario "git". Si intentas conectarte con tu nombre de usuario de {% data variables.product.product_name %}, la conexión fallará:

```shell
$ ssh -T <em>GITHUB-USERNAME</em>@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
Si tu conexión ha fallado y estás usando una URL remota con tu nombre de usuario de {% data variables.product.product_name %}, puedes [cambiar tu URL remota para usar el usuario "git"](/articles/changing-a-remote-s-url/).

Para verificar tu conexión, debes escribir:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated...
```

### Asegúrate de tener una clave que esté en uso

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Verifica si tienes una llave privada generada y cargada en SSH. Si estás usando OpenSSH 6.7 o una versión anterior:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  Si estás usando OpenSSH 6.8 o una versión más reciente:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. Verifica si tienes una llave privada generada y cargada en SSH. Si estás usando OpenSSH 6.7 o una versión anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  Si estás usando OpenSSH 6.8 o una versión más reciente:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Verifica si tienes una llave privada generada y cargada en SSH. Si estás usando OpenSSH 6.7 o una versión anterior:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  Si estás usando OpenSSH 6.8 o una versión más reciente:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

{% endlinux %}

El comando `ssh-add` *debe* imprimir una larga cadena de números y letras. Si no imprime nada, necesitarás [generar una nueva clave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) y asociarla con {% data variables.product.product_name %}.

{% tip %}

**Consejo**: En la mayoría de los sistemas las claves privadas predeterminadas (`~/.ssh/id_rsa`{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}, `~/. sh/id_dsa`{% endif %} y `~/.ssh/identity`) se añaden automáticamente al agente de autenticación SSH. No debería ser necesario que ejecutes `ssh-add path/to/key` a menos que anules el nombre del archivo cuando generes una llave.

{% endtip %}

#### Más detalles

Para verificar si esa llave se está usando, también puedes intentar conectarte con `git@{% data variables.command_line.backticks %}`:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa-cert type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa-cert type -1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_rsa
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_dsa
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

En ese ejemplo, no teníamos ninguna llave para que usara SSH. El "-1" al final de las líneas que dicen "identity file" (identidad del archivo) significan que SSH no pudo encontrar un archivo para usar. Luego, en las líneas que indican "Trying private key" (Probando llave privada) también indica que no se encontró ningún archivo. Si existiera un archivo, esas líneas dirían "1" y "Ofreciendo llave privada", respectivamente:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type 1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Offering RSA public key: /Users/<em>you</em>/.ssh/id_rsa
```

### Verifica si la llave pública está asociada a tu cuenta

Debes indicarle tu llave privada a {% data variables.product.product_name %} para establecer una conexión segura.

{% mac %}

1. Abre Terminal.
2. Inicia el agente SSH en segundo plano.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Busca tu huella digital de llave pública y anótala. Si estás usando OpenSSH 6.7 o una versión anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Si estás usando OpenSSH 6.8 o una versión más reciente:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Compara la lista de claves SSH con el resultado que arroja el comando `ssh-add`. ![Lista de claves SSH en {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endmac %}

{% windows %}

1. Abre la línea de comando.
2. Inicia el agente SSH en segundo plano.
  ```shell
  $ ssh-agent -s
  > Agent pid 59566
  ```
3. Busca tu huella digital de llave pública y anótala. Si estás usando OpenSSH 6.7 o una versión anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Si estás usando OpenSSH 6.8 o una versión más reciente:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Compara la lista de claves SSH con el resultado que arroja el comando `ssh-add`. ![Lista de claves SSH en {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endwindows %}

{% linux %}

1. Abre Terminal.
2. Inicia el agente SSH en segundo plano.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Busca tu huella digital de llave pública y anótala. Si estás usando OpenSSH 6.7 o una versión anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Si estás usando OpenSSH 6.8 o una versión más reciente:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Compara la lista de claves SSH con el resultado que arroja el comando `ssh-add`. ![Lista de claves SSH en {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

Si no ves tu llave pública en {% data variables.product.product_name %}, será necesario que [agregues tu clave SSH a {% data variables.product.product_name %}](/articles/adding-a-new-ssh-key-to-your-github-account) para asociarla con tu computadora.

{% warning %}

**Advertencia**: Si ves una clave SSH que no te resulta familiar en {% data variables.product.product_name %}, elimínala de inmediato y contáctate con {% data variables.contact.contact_support %} para recibir más ayuda. Una llave pública no identificada puede indicar un posible problema de seguridad. Para obtener más información, consulta "[Revisar tus claves SSH](/articles/reviewing-your-ssh-keys)".

{% endwarning %}
