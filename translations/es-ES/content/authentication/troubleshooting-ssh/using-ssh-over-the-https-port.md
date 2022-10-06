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
ms.openlocfilehash: 47bdb96fac65d9432dfc54f671366d1b6c153556
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883405'
---
{% tip %}

**Usuarios de {% data variables.product.prodname_ghe_server %}** : actualmente no se admite el acceso a {% data variables.product.prodname_ghe_server %} por SSH mediante el puerto HTTPS.

{% endtip %}

Para probar si es posible el SSH a través del puerto HTTPS, ejecuta este comando SSH:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

Si eso funcionó, ¡fantástico! Si no es así, es posible que tenga que [seguir nuestra guía de solución de problemas](/articles/error-permission-denied-publickey).

## Habilitar conexiones SSH a través de HTTPS

Si puede acceder a `git@ssh.{% data variables.command_line.backticks %}` mediante SSH en el puerto 443, puede reemplazar los valores SSH para forzar que cualquier conexión a {% data variables.product.product_location %} se ejecute mediante ese servidor y ese puerto.

Para establecerlo en el archivo de configuración de SSH, edite el archivo en `~/.ssh/config` y agregue esta sección:

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

Puedes probar que esto funcione volviéndote a conectar a {% data variables.product.product_location %}:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```
