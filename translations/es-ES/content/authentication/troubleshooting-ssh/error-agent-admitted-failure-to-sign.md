---
title: 'Error: El agente admitió una falla para registrarse'
intro: 'En raras circunstancias, la conexión a {% data variables.product.product_name %} a través de SSH en Linux genera el error `"Agent admitted failure to sign using the key"`. Sigue los pasos siguientes para resolver el problema.'
redirect_from:
  - /articles/error-agent-admitted-failure-to-sign-using-the-key
  - /articles/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/troubleshooting-ssh/error-agent-admitted-failure-to-sign
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Agent failure to sign
ms.openlocfilehash: eceb783df61b403a6b94b8eda84be62e63aa5ead
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145091747'
---
Cuando intentes implementar SSH en {% data variables.product.product_location %} en una computadora con Linux, posiblemente veas el siguiente mensaje en tu terminal:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agent admitted failure to sign using the key.
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

Para más información, vea <a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>este informe de incidencias</a>.

## Solución

Debería poder solucionar este error mediante la carga de las claves en el agente de SSH con `ssh-add`:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Enter passphrase for /home/<em>you</em>/.ssh/id_rsa: <em>[tippy tap]</em>
> Identity added: /home/<em>you</em>/.ssh/id_rsa (/home/<em>you</em>/.ssh/id_rsa)
```

Si la clave no tiene el nombre de archivo predeterminado (`/.ssh/id_rsa`), tendrá que pasar esa ruta a `ssh-add`:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Enter passphrase for /home/<em>you</em>/.ssh/my_other_key: <em>[tappity tap tap]</em>
> Identity added: /home/<em>you</em>/.ssh/my_other_key (/home/<em>you</em>/.ssh/my_other_key)
```
