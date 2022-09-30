---
title: 'Error: ssh-add: opción ilegal -- K'
intro: 'Este error significa que tu versión de `ssh-add` no es compatible con la integración keychain macOS, que te permite almacenar tu frase de contraseña en keychain.'
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssh-add-illegal-option----k
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: 'ssh-add: illegal option -- K'
ms.openlocfilehash: a9c563f637d2deb544611c8b357761ff1148fa1c
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145091740'
---
La opción `-K` es una versión estándar de Apple de `ssh-add`, que almacena la contraseña en su cadena de claves cuando agrega una clave SSH al ssh-agent. Si ha instalado una versión diferente de `ssh-add`, puede que no sea compatible con `-K`.

## Resolver el problema

Para agregar su clave privada SSH al ssh-agent, puede especificar la ruta a la versión de Apple de `ssh-add`:

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_ed25519
```

{% note %}

**Nota**: {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

## Información adicional

- "[Generar una nueva clave SSH y agregarla al ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"
- [Página man de Linux para SSH-ADD](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- A fin de ver la página man de Apple para SSH-ADD, ejecute `man ssh-add` en el terminal.
