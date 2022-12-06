---
title: Utilizar SSH a través del puerto HTTPS
intro: 'Algunas veces, los firewalls se niegan a permitir conexiones SSH por completo.  Si el uso de [clonación HTTPS con almacenamiento en caché de credenciales](/github/getting-started-with-github/caching-your-github-credentials-in-git) no es una opción, puedes intentar clonar usando una conexión SSH hecha a través del puerto HTTPS.  La mayoría de las reglas del firewall deberían permitir esto, pero los servidores proxy pueden interferir.'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
  - /github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Use SSH over HTTPS port
ms.openlocfilehash: 24a56147129e68c674eaf8dc733a203e2b03348a
ms.sourcegitcommit: 8c8d8598beeaa4f83b3f30cb160a5288fdb4ef9a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190326'
---
{% tip %}

**Usuarios de {% data variables.product.prodname_ghe_server %}** : actualmente no se admite el acceso a {% data variables.product.prodname_ghe_server %} por SSH mediante el puerto HTTPS.

{% endtip %}

Para probar si es posible el SSH a través del puerto HTTPS, ejecuta este comando SSH:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% note %}

**Nota**: El nombre de host del puerto 443 es `ssh.{% data variables.command_line.backticks %}`, no `{% data variables.command_line.backticks %}`.

{% endnote %}

Si eso funcionó, ¡fantástico! Si no es así, es posible que tenga que [seguir nuestra guía de solución de problemas](/articles/error-permission-denied-publickey).

Ahora, para clonar el repositorio, puedes ejecutar el siguiente comando:

```
$ git clone ssh://git@ssh.{% data variables.command_line.codeblock %}:443/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## Habilitar conexiones SSH a través de HTTPS

Si puedes acceder a `git@ssh.{% data variables.command_line.backticks %}` mediante SSH en el puerto 443, puede reemplazar los valores SSH para forzar que cualquier conexión a {% data variables.location.product_location %} se ejecute mediante ese servidor y ese puerto.

Para establecerlo en el archivo de configuración de SSH, edite el archivo en `~/.ssh/config` y agregue esta sección:

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

Puedes probar que esto funcione volviéndote a conectar a {% data variables.location.product_location %}:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

## Actualización de hosts conocidos

La primera vez que interactúes con GitHub después de cambiar al puerto 443, puedes recibir un mensaje de advertencia que indica que no se ha encontrado el host en `known_hosts` o que se ha encontrado con otro nombre.

```ShellSession
> The authenticity of host '[ssh.github.com]:443 ([140.82.112.36]:443)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> This host key is known by the following other names/addresses:
>     ~/.ssh/known_hosts:32: github.com
> Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Es seguro responder "sí" a esta pregunta, suponiendo que la huella digital SSH coincida con una de las huellas publicadas de GitHub. Para obtener la lista de huellas digitales, consulta "[Huellas digitales de la clave SSH de GitHub](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)".
