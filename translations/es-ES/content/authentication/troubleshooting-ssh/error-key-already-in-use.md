---
title: 'Error: La clave ya está en uso'
intro: 'Este error se produce al intentar [agregar una clave](/articles/adding-a-new-ssh-key-to-your-github-account) que ya se ha agregado a otra cuenta o repositorio.'
redirect_from:
  - /articles/error-key-already-in-use
  - /github/authenticating-to-github/error-key-already-in-use
  - /github/authenticating-to-github/troubleshooting-ssh/error-key-already-in-use
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: d202de2efe05951fe829a8198b20831fc15bbd72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145091744'
---
## Determinar dónde se ha usado la clave

Para determinar dónde se ha usado ya la clave, abra una terminal y escriba el comando `ssh`. Use la marca `-i` para obtener la ruta a la clave que quiera comprobar:

```shell
$ ssh -T -ai <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
# Connect to {% data variables.product.product_location %} using a specific ssh key
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

En la respuesta, *username* es la cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} a la que se adjunta actualmente la clave. Si la respuesta tiene un aspecto similar a "username/repo", la clave se ha adjuntado a un repositorio como una [*clave de implementación*](/guides/managing-deploy-keys#deploy-keys).


Para forzar a que SSH use solo la clave proporcionada en la línea de comandos, use `-o` para agregar la opción `IdentitiesOnly=yes`:

```shell
$ ssh -v -o "IdentitiesOnly=yes" -i <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
```

## Resolver el problema

Para resolver el problema, quite primero la clave de la otra cuenta o repositorio y, después, [agréguela a la cuenta](/articles/adding-a-new-ssh-key-to-your-github-account).

Si no tiene permisos para transferir la clave y no puede ponerse en contacto con un usuario que los tenga, quite el par de claves y [genere uno nuevo](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Claves de implementación

Una vez que una clave se ha vinculado a un repositorio como llave de implementación, no se la puede usar en otro repositorio.  Si se produce este error al configurar las claves de implementación, vea "[Administración de claves de implementación](/guides/managing-deploy-keys)".
