---
title: Utilizar el reenvío del agente SSH
intro: 'Para simplificar los despliegues en un servidor, puedes configurar el reenvío del agente SSH para utilizar las llaves SSH locales de forma segura.'
redirect_from:
  - /guides/using-ssh-agent-forwarding/
  - /v3/guides/using-ssh-agent-forwarding
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



El reenvío del agente de SSH puede utilizarse para hacer despliegues a un servidor simple.  Te permite utilizar llaves SSH locales en vez de dejar las llaves (¡sin frases de acceso!) en tu servidor.

Si ya configuraste una llave SSH para que interactúe con {% data variables.product.product_name %}, probablemente estás familiarizado con el `ssh-agent`. Es un programa que se ejecuta en segundo plano y que mantiene tu llave cargada en la memoria para que no tengas que ingresar tu frase deacceso cada que quieres utilizar esta llave. Lo ingenioso de esto es que puedes elegir dejar que los servidores accedan a tu `ssh-agent` local como si ya se estuvieran ejecutando en el servidor. Esto es como pedirle a un amigo que ingrese su contraseña para que puedas utilizar su computadora.

Revisa la sección [Guía de Tips Técnicos de Steve Friedl][tech-tips] para obtener una explicación más exacta del reenvío del agente SSH.

### Configurar el reenvío del agente SSH

Asegúrate de que tu propia llave SSH está configurada y funciona. Puedes utilizar [nuestra guía para generar llaves SSH][generating-keys] si aún no lo has hecho.

Puedes probar que tu llave local funciona si ingresas `ssh -T git@github.com` en la terminal:

```shell
$ ssh -T git@github.com
# Attempt to SSH in to github
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not provide
> shell access.
```

Estamos empezando muy bien. Vamso a configurar SSH para permitir el reenvío del agente en tu servidor.

1. Utilizando tu editor de texto preferido, abre el archivo en `~/.ssh/config`. Si este archivo no existe, puedes crearlo si ingresas `touch ~/.ssh/config` en la terminal.

2. Ingresa el siguiente texto en el archivo, reemplazando `example.com` con el nombre de dominio o la IP de tu servidor:
   
        Host example.com
          ForwardAgent yes

{% warning %}

**Advertencia:** Podrías estar tentado a utilizar un comodín como `Host *` para aplicar esta configuración únicamente a todas las conexiones SSH. No es realmente una buena idea, ya que compartirías tus llaves SSH locales con *todos* los servidores en los que ingreses con SSH. No tendrán acceso directo a las llaves, pero podrán utilizarlas *como si fueran tú* mientras que se establece la conexión. **Deberías agregar únicamente los servidores en los que confías y que pretendes usar con el reenvío del agente.**

{% endwarning %}

### Probar el reenvío del agente SSH

Para probar que el reenvío del agente funciona en tu servidor, puedes ingresar con SSH en tu servidor y ejecutar `ssh -T git@github.com` una vez más.  Si todo sale bien, te regresará el mismo mensaje que salió cuando lo hiciste localmente.

Si no estás seguro de que se esté utilizando tu llave local, también puedes inspeccionar la variable `SSH_AUTH_SOCK` en tu servidor:

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
$ ssh -T git@github.com
# Try to SSH to github
> Permission denied (publickey).
```

### Solucionar problemas del reenvío del agente SSH

Aquí te mostramos algunos puntos en los cuales tener cuidado cuando intentes solucionar problemas relacionados con el reenvío del agente SSH.

#### Debes utilizar una URL con SSH para revisar el código

El reenvío SSH funciona únicamente con URL con SSH, no con aquellas de HTTP(s). Revisa el archivo *.git/config* en tu servidor y asegúrate de que la URL es de estilo SSH como se muestra a continuación:

```shell
[remote "origin"]
  url = git@github.com:<em>yourAccount</em>/<em>yourProject</em>.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

#### Tus llaves SSH deben funcionar localmente

Antes de que hagas que tus llaves funcionen a través del reenvío del agente, primero deben funcionar localmente. [Nuestra guía para generar llaves SSH][generating-keys] puede ayudarte a configurar tus llaves SSH localmente.

#### Tu sistema debe permitir el reenvío del agente SSH

Algunas veces, la configuración del sistema deja de permitir el reenvío del agente SSH. Puedes verificar si se está utilizando un archivo de configuración del sistema ingresando el siguiente comando en la terminal:

```shell
$ ssh -v <em>example.com</em>
# Connect to example.com with verbose debug output
> OpenSSH_5.6p1, OpenSSL 0.9.8r 8 Feb 2011</span>
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Applying options for example.com
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
$ exit
# Returns to your local command prompt
```

En este ejemplo, el archivo *~/.ssh/config* se carga primero, luego se lee el */etc/ssh_config*.  Podemos inspeccionar ese archivo para ver si está anulando nuestras opciones si ejecutamos los siguientes comandos:

```shell
$ cat /etc/ssh_config
# Print out the /etc/ssh_config file
> Host *
>   SendEnv LANG LC_*
>   ForwardAgent no
```

En este ejemplo, nuestro archivo */etc/ssh_config* dice específicamente `ForwardAgent no`, lo cual es una manera de bloquear el reenvío del agente. Si borramos esta línea del archivo deberíamos poder hacer funcionar el reenvío del agente nuevamente.

#### Tu servidor debe permitir el reenvío del agente SSH en las conexiones entrantes

El reenvío del agente también puede bloquearse en tu servidor. Puedes verificar que se permita este reenvío si entras al servidor mediante SSH y ejecutas `sshd_config`. La salida de este comando deberá indicar que se configuró `AllowAgentForwarding`.

#### Tu `ssh-agent` local debe estar ejecutándose

En la mayoría de las computadoras, el sistema operativo lanza el `ssh-agent` automáticamente.  Sin embargo, en Windows, tienes que hacerlo manualmente. Tenemos [una guía de cómo empezar con el `ssh-agent` cuando abres Git Bash][autolaunch-ssh-agent].

Para verificar que el `ssh-agent` se está ejecutando en tu computadora, teclea el siguiente comando en la terminal:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/launch-kNSlgU/Listeners
```

#### Tu llave debe estar disponible para el `ssh-agent`

Puedes verificar que tu llave esté visible para el `ssh-agent` si ejecutas el siguiente comando:

```shell
ssh-add -L
```

Si el comando dice que no hay identidad disponible, necesitarás agregar tu llave:

```shell
$ ssh-add <em>yourkey</em>
```

{% tip %}

En Mac OS X, `ssh-agent` "olvidará" esta llave una vez que se reinicie. Pero puedes importar tus llaves SSH en Keychain si utilizas este comando:

```shell
$ ssh-add -K <em>yourkey</em>
```

{% endtip %}

[tech-tips]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[generating-keys]: /articles/generating-ssh-keys
[generating-keys]: /articles/generating-ssh-keys
[autolaunch-ssh-agent]: /github/authenticating-to-github/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
