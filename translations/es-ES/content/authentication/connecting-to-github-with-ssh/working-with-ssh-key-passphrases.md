---
title: Trabajar con contraseñas de clave SSH
intro: Puedes asegurar tus claves SSH y configurar un agente de autenticación para no tener que volver a ingresar tu contraseña cada vez que uses tus claves SSH.
redirect_from:
  - /ssh-key-passphrases
  - /working-with-key-passphrases
  - /articles/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/connecting-to-github-with-ssh/working-with-ssh-key-passphrases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key passphrases
ms.openlocfilehash: 5ddacfa052b866fe1cbd601caa8a1ff9ab6934fd
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147409119'
---
## Acerca de las frases de contraseña para claves SSH

Con las claves SSH, si alguien obtiene acceso a tu equipo, el atacante también tiene acceso a cada sistema que usa esa clave. Para agregar una capa extra de seguridad, puedes incluir una contraseña a tu clave SSH. Para evitar escribir la frase de contraseña cada vez que te conecta, puedes guardar la frase de contraseña de forma segura en el agente SSH.

## Agregar o cambiar una contraseña

Puedes cambiar la contraseña por una llave privada existente sin volver a generar el par de claves al escribir el siguiente comando:

```shell
$ ssh-keygen -p -f ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
> Enter old passphrase: <em>[Type old passphrase]</em>
> Key has comment '<em>your_email@example.com</em>'
> Enter new passphrase (empty for no passphrase): <em>[Type new passphrase]</em>
> Enter same passphrase again: <em>[Repeat the new passphrase]</em>
> Your identification has been saved with the new passphrase.
```

Si tu clave ya tiene una contraseña, se te pedirá que la ingreses antes de que puedas cambiar a una nueva contraseña.

{% windows %}

## Inicio automático `ssh-agent` en Git para Windows

Puede ejecutar `ssh-agent` automáticamente al abrir bash o el shell de Git. Copie las líneas siguientes y péguelas en su archivo `~/.profile` o `~/.bashrc` en el shell de Git:

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2=agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```

Si la clave privada no está almacenada en una de las ubicaciones predeterminadas (como `~/.ssh/id_rsa`), necesitará indicarle a su agente de autenticación SSH dónde encontrarla. Para agregar la clave a ssh-agent, escriba `ssh-add ~/path/to/my_key`. Para obtener más información, consulte "[Generación de una nueva clave SSH y adición a ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)".

{% tip %}

**Sugerencia:** Si desea `ssh-agent` olvidar la clave después de algún tiempo, puede configurarla para tal fin mediante la ejecución de `ssh-add -t <seconds>`.

{% endtip %}

Ahora, cuando ejecutas Git Bash por primera vez, se te pedirá tu contraseña:

```shell
> Initializing new SSH agent...
> succeeded
> Enter passphrase for /c/Users/<em>you</em>/.ssh/id_rsa:
> Identity added: /c/Users/<em>you</em>/.ssh/id_rsa (/c/Users/<em>you</em>/.ssh/id_rsa)
> Welcome to Git (version <em>1.6.0.2-preview20080923</em>)
>
> Run 'git help git' to display the help index.
> Run 'git help <command>' to display help for specific commands.
```

El proceso `ssh-agent` continuará funcionando hasta que cierre sesión, apague su equipo o termine el proceso.

{% endwindows %}

{% mac %}

## Guardar tu contraseña en keychain

En Mac OS X Leopard y hasta OS X El Capitan, estos archivos de llave privada predeterminada se manejan automáticamente:

- *.ssh/id_rsa*
- *.ssh/identity*

La primera vez que usas tu clave, se te pedirá que ingreses tu contraseña. Si eliges guardar la contraseña con tu keychain, no necesitarás ingresarla nuevamente.

De lo contrario, puedes almacenar tu contraseña en la keychain cuando agregues tu clave a ssh-agent. Para obtener más información, consulte "[Adición de la clave SSH a ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)".

{% endmac %}
