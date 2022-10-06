---
title: Utilizar el reenvío del agente SSH
intro: 'Para simplificar los despliegues en un servidor, puedes configurar el reenvío del agente SSH para utilizar las llaves SSH locales de forma segura.'
redirect_from:
  - /guides/using-ssh-agent-forwarding
  - /v3/guides/using-ssh-agent-forwarding
  - /articles/using-ssh-agent-forwarding
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: SSH agent forwarding
ms.openlocfilehash: ca827e1fc70288acc2da5c3a28ecfd71ece4a504
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996261'
---
El reenvío del agente de SSH puede utilizarse para hacer despliegues a un servidor simple.  Te permite utilizar llaves SSH locales en vez de dejar las llaves (¡sin frases de acceso!) en tu servidor.

Si ya ha configurado una clave SSH para interactuar con {% data variables.product.product_name %}, probablemente esté familiarizado con `ssh-agent`. Es un programa que se ejecuta en segundo plano y que mantiene tu llave cargada en la memoria para que no tengas que ingresar tu frase deacceso cada que quieres utilizar esta llave. Lo mejor es que puede elegir dejar que los servidores accedan a la instancia local de `ssh-agent` como si ya se ejecutaran en el servidor. Esto es como pedirle a un amigo que ingrese su contraseña para que puedas utilizar su computadora.

Consulte la [guía de sugerencias técnicas de Steve Friedl][tech-tips] para obtener una explicación más detallada del reenvío de agentes SSH.

## Configurar el reenvío del agente SSH

Asegúrate de que tu propia llave SSH está configurada y funciona. Puede usar [nuestra guía sobre generación de claves SSH][generating-keys] si todavía no lo ha hecho.

Para probar que la clave local funciona, escriba `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` en el terminal:

```shell
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Attempt to SSH in to github
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not provide
> shell access.
```

Estamos empezando muy bien. Vamso a configurar SSH para permitir el reenvío del agente en tu servidor.

1. En el editor de texto que prefiera, abra el archivo en `~/.ssh/config`. Si este archivo no existe, puede crearlo si escribe `touch ~/.ssh/config` en el terminal.

2. Escriba el texto siguiente en el archivo y reemplace `example.com` el por nombre de dominio o IP del servidor:

        Host example.com
          ForwardAgent yes

{% warning %}

**Advertencia:** Es posible que tenga la tentación de usar un carácter comodín como `Host *` simplemente para aplicar esta configuración a todas las conexiones SSH. No es recomendable, ya que compartiría las claves SSH locales con *todos* los servidores a los que acceda con SSH. No tendrán acceso directo a las claves, pero podrán utilizarlas *en su nombre* mientras que la conexión esté establecida. **Solo debería agregar los servidores en los que confíe y que pretenda usar con el reenvío de agentes.**

{% endwarning %}

## Probar el reenvío del agente SSH

Para probar que el reenvío de agentes funciona con el servidor, puede conectarse mediante SSH al servidor y ejecutar `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` una vez más.  Si todo sale bien, te regresará el mismo mensaje que salió cuando lo hiciste localmente.

Si no está seguro de si se usa la clave local, también puede inspeccionar la variable `SSH_AUTH_SOCK` en el servidor:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/ssh-4hNGMk8AZX/agent.79453
```

Si no se ha configurado la variable, esto significa que el reenvío del agente no funciona:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> <em>[No output]</em>
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Try to SSH to github
> Permission denied (publickey).
```

## Solucionar problemas del reenvío del agente SSH

Aquí te mostramos algunos puntos en los cuales tener cuidado cuando intentes solucionar problemas relacionados con el reenvío del agente SSH.

### Debes utilizar una URL con SSH para revisar el código

El reenvío SSH funciona únicamente con URL con SSH, no con aquellas de HTTP(s). Compruebe el archivo `.git/config` en el servidor y asegúrese de que la URL es una dirección URL de estilo SSH como la siguiente:

```shell
[remote "origin"]
  url = git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}:<em>yourAccount</em>/<em>yourProject</em>.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

### Tus llaves SSH deben funcionar localmente

Antes de que hagas que tus llaves funcionen a través del reenvío del agente, primero deben funcionar localmente. [Nuestra guía sobre generación de claves SSH][generating-keys] puede ayudarle a configurar las claves SSH localmente.

### Tu sistema debe permitir el reenvío del agente SSH

Algunas veces, la configuración del sistema deja de permitir el reenvío del agente SSH. Puedes verificar si se está utilizando un archivo de configuración del sistema ingresando el siguiente comando en la terminal:

```shell
$ ssh -v <em>example.com</em>
# Connect to example.com with verbose debug output
> OpenSSH_8.1p1, LibreSSL 2.7.3</span>
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Applying options for example.com
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
$ exit
# Returns to your local command prompt
```

En el ejemplo anterior, primero se carga el archivo `~/.ssh/config` y después se lee `/etc/ssh_config`.  Podemos inspeccionar ese archivo para ver si está anulando nuestras opciones si ejecutamos los siguientes comandos:

```shell
$ cat /etc/ssh_config
# Print out the /etc/ssh_config file
> Host *
>   SendEnv LANG LC_*
>   ForwardAgent no
```

En este ejemplo, el archivo `/etc/ssh_config` dice `ForwardAgent no`específicamente, que es una manera de bloquear el reenvío de agentes. Si borramos esta línea del archivo deberíamos poder hacer funcionar el reenvío del agente nuevamente.

### Tu servidor debe permitir el reenvío del agente SSH en las conexiones entrantes

El reenvío del agente también puede bloquearse en tu servidor. Puede comprobar que el reenvío de agentes está permitido si accede mediante SSH al servidor y ejecuta `sshd_config`. La salida de este comando debe indicar que `AllowAgentForwarding` está establecido.

### La instancia local de `ssh-agent` debe estar en ejecución

En la mayoría de los equipos, el sistema operativo inicia `ssh-agent` de forma automática.  Sin embargo, en Windows, tienes que hacerlo manualmente. Tenemos [una guía sobre cómo iniciar `ssh-agent` cada vez que abra Git Bash][autolaunch-ssh-agent].

Para comprobar que `ssh-agent` se ejecuta en el equipo, escriba el comando siguiente en el terminal:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/launch-kNSlgU/Listeners
```

### La clave debe estar disponible para `ssh-agent`

Para comprobar que la clave es visible para `ssh-agent`, ejecute el comando siguiente:

```shell
ssh-add -L
```

Si el comando dice que no hay identidad disponible, necesitarás agregar tu llave:

```shell
$ ssh-add <em>yourkey</em>
```

{% tip %}

En macOS, `ssh-agent` "olvidará" esta clave, una vez que se reinicie durante los reinicios. Pero puedes importar tus llaves SSH en Keychain si utilizas este comando:

```shell
$ ssh-add -K <em>yourkey</em>
```

{% endtip %}

[tech-tips]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[generating-keys]: /articles/generating-ssh-keys
[ssh-passphrases]: /ssh-key-passphrases/
[autolaunch-ssh-agent]: /github/authenticating-to-github/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
