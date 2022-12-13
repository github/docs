---
title: Acerca de la fusión mediante cambio de base de Git
redirect_from:
  - /rebase
  - /articles/interactive-rebase
  - /articles/about-git-rebase
  - /github/using-git/about-git-rebase
  - /github/getting-started-with-github/about-git-rebase
  - /github/getting-started-with-github/using-git/about-git-rebase
intro: 'El comando `git rebase` te permite cambiar fácilmente una serie de confirmaciones, modificando el historial de tu repositorio. Puedes reordenar, editar o combinar confirmaciones.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5ffa3cbb1fcb6c8c37e56e434b08018582a0ff2b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115986'
---
Normalmente, se usaría `git rebase` para lo siguiente:

* Editar mensajes de confirmación previos.
* Combinar varias confirmaciones en una.
* Eliminar o revertir confirmaciones que ya no son necesarias.

{% warning %}

**Advertencia**: Como cambiar el historial de su confirmación puede hacer las cosas difíciles para todos los que usan el repositorio, se considera una mala práctica fusionar mediante cambio de base las confirmaciones cuando ya las ha insertado a un repositorio. Para obtener información sobre cómo fusionar mediante cambio de base de forma segura en {% data variables.product.product_location %}, vea "[Acerca de las combinaciones de solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)".

{% endwarning %}

## Cambiar de base las confirmaciones con una rama

Para cambiar de base todas las confirmaciones entre otra rama y el estado de rama actual, puedes ingresar el siguiente comando en tu shell (ya sea el símbolo del sistema para Windows o la terminal para Mac y Linux):

```shell
$ git rebase --interactive <em>other_branch_name</em>
```

## Cambiar de base las confirmaciones en un momento específico

Para cambiar de base las últimas confirmaciones en tu rama actual, puedes ingresar el siguiente comando en tu shell:

```shell
$ git rebase --interactive HEAD~7
```

## Comandos disponibles mientras se cambia de base

Hay seis comandos disponibles mientras se cambia la base:

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code> simplemente significa que se incluye la confirmación. Reordenar los comandos <code>pick</code> cambia el orden de las confirmaciones cuando la fusión mediante cambio de base está en curso. Si eliges no incluir una confirmación, debes eliminar la línea completa. </dd>

<dt><code>reword</code></dt>
<dd>El comando <code>reword</code> es similar a <code>pick</code>, pero después de usarlo, la fusión mediante cambio de base se pausará y le dará la oportunidad de modificar el mensaje de confirmación. Cualquier cambio hecho por la confirmación no se ve afectado. </dd>

<dt><code>edit</code></dt>
<dd>Si elige realizar <code>edit</code> en una confirmación, se le dará la oportunidad de modificar la confirmación, lo que significa que puede agregar o cambiar la confirmación por completo. También puedes realizar más confirmaciones antes de continuar con el cambio de base. Esto te permite dividir una confirmación grande en otras más pequeñas o eliminar cambios erróneos hechos en una confirmación. </dd>

<dt><code>squash</code></dt>
<dd>Este comando te permite combinar dos o más confirmaciones en una única confirmación. Una confirmación se combina en la confirmación de arriba. Git te da la oportunidad de escribir un mensaje de confirmación nuevo describiendo ambos cambios.</dd>

<dt><code>fixup</code></dt>
<dd>Esto es similar a <code>squash</code>, pero la confirmación que se va a combinar tiene su mensaje descartado. La confirmación simplemente se fusiona en la confirmación de arriba y el mensaje de la confirmación anterior se usa para describir ambos cambios.</dd>

<dt><code>exec</code></dt>
<dd>Esto te permite ejecutar comandos shell de forma arbitraria con una confirmación.</dd>
</dl>

## Un ejemplo de uso de `git rebase`

Independientemente del comando que use, Git iniciará [el editor de texto predeterminado](/github/getting-started-with-github/associating-text-editors-with-git) y abrirá un archivo que detalla las confirmaciones en el intervalo que haya elegido. Ese archivo se ve así:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B

# Rebase 41a72e6..7b36971 onto 41a72e6
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

Desglosando esta información, de principio a fin, vemos que:

- Se enumeran siete confirmaciones, lo que indica que hubo siete cambios entre nuestro punto de partida y el estado de nuestra rama actual.
- Las confirmaciones que eliges cambiar de base se clasifican en el orden de los cambios más antiguos (arriba) a los cambios más nuevos (abajo).
- Cada línea muestra un comando (de manera predeterminada, `pick`), el SHA de confirmación y el mensaje de confirmación. Todo el procedimiento `git rebase` se centra en la manipulación de estas tres columnas. Los cambios realizados se *fusionan mediante cambio de base* en el repositorio.
- Después de las confirmaciones, Git le indica el intervalo de confirmaciones con las que estamos trabajando (`41a72e6..7b36971`).
- Finalmente, Git te ayuda diciéndote los comandos que están disponibles para ti cuando cambias de base las confirmaciones.

## Información adicional

- "[Uso de la fusión mediante cambio de base en Git](/articles/using-git-rebase)"
- [El capítulo "Creación de ramas en Git" del libro _Pro Git_](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [El capítulo "Fusión interactiva mediante cambio de base" del libro _Pro Git_](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- "[Confirmaciones de fusión mediante combinación con "squash" con fusión mediante cambio de base](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)"
- "[Sincronización de la rama](/desktop/contributing-to-projects/syncing-your-branch)" en la documentación de {% data variables.product.prodname_desktop %}
