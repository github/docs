---
title: Utilizar la rebase de Git en la línea de comando
redirect_from:
  - /articles/using-git-rebase
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git/using-git-rebase-on-the-command-line
intro: Aquí hay un breve tutorial acerca de usar `git rebase` en la línea de comandos.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git rebase
ms.openlocfilehash: e0d2d2d10da187d6cc38a72a44e8235ec1f6f73f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145134653'
---
## Utilizar el rebase de Git

En este ejemplo, se describirán todos los comandos `git rebase` disponibles, excepto `exec`.

Para comenzar la fusión mediante cambio de base, se escribe `git rebase --interactive HEAD~7` en el terminal. Nuestro editor de texto preferido mostrará las siguientes líneas:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B
```

En este ejemplo, haremos lo siguiente:

* Fusionar mediante combinación con "squash" la quinta confirmación (`fa39187`) en la confirmación `"Patch A"` (`1fc6c95`), mediante `squash`.
* Subir la última confirmación (`7b36971`) por delante de la confirmación `"Patch B"` (`6b2481b`) y mantenerla como `pick`.
* Combinar la confirmación `"A fix for Patch B"` (`c619268`) en la confirmación `"Patch B"` (`6b2481b`) y omitir el mensaje de confirmación mediante `fixup`.
* Dividir la tercera confirmación (`dd1475d`) en dos más pequeñas, mediante `edit`.
* Corregir el mensaje de la confirmación mal escrita (`4ca2acc`), mediante `reword`.

Por suerte, Parece mucho trabajo, pero haciendo cada paso por vez, podemos concretar esos cambios fácilmente.

Para comenzar, tendremos que modificar los comandos en el archivo para que luzca como sigue:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Se ha cambiado cada comando de la línea de `pick` por el comando que nos interesa.

Ahora, guarda y cierra el editor; esto comenzará la rebase interactiva.

Git omite el primer comando de fusión mediante cambio de base, `pick 1fc6c95`, ya que no necesita hacer nada. Pasa al comando siguiente, `squash fa39187`. Como esta operación requiere tu entrada, Git vuelve a abrir tu editor de texto. El archivo que abre luce parecido a lo siguiente:

```
# This is a combination of two commits.
# The first commit's message is:

Patch A

# This is the 2nd commit message:

something to add to patch A

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
# modified:   a
#
```

Este archivo es la manera de Git de decir, "Esto es lo que voy a hacer con `squash`". Enumera el mensaje de la primera confirmación (`"Patch A"`) y el de la segunda (`"something to add to patch A"`). Si estás satisfecho con estos mensajes de confirmación, puedes guardar el archivo y cerrar el editor. De lo contrario, tienes la opción de cambiar el mensaje de confirmación, simplemente, cambiando el texto.

Cuando el editor esté cerrado, la rebase continúa:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Git procesa los dos comandos `pick` (para `pick 7b36971` y `pick 6b2481b`). *También* procesa el comando `fixup` (`fixup c619268`), ya que no necesita ninguna interacción. `fixup` combina los cambios de `c619268` en la confirmación antes de hacerlo, `6b2481b`. Los dos cambios tendrán el mismo mensaje de confirmación: `"Patch B"`.

Git llega a la operación `edit dd1475d`, se detiene e imprime el siguiente mensaje en el terminal:

```shell
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue
```

En este punto, puedes editar cualquiera de los archivos de tu proyecto para hacer más cambios. Para cada cambio que haga, tendrá que realizar una confirmación nueva; para ello, escriba el comando `git commit --amend`. Cuando haya terminado de realizar todos los cambios, puede ejecutar `git rebase --continue`.

Después, Git llega al comando `reword 4ca2acc`.  Este abre tu editor de texto una vez más y presenta la siguiente información:

```
i cant' typ goods

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD^1 <file>..." to unstage)
#
# modified:   a
#
```

Como antes, Git muestra el mensaje de confirmación para que lo edites. Puede cambiar el texto (`"i cant' typ goods"`), guardar el archivo y cerrar el editor. Git terminará la rebase y te devolverá al terminal.

## Subir código de rebase a GitHub

Como ha modificado el historial de Git, el valor `git push origin` habitual **no funcionará**. Tendrás que modificar el comando realizando un "empuje forzado" de tus últimos cambios:

```shell
# Don't override changes
$ git push origin main --force-with-lease

# Override changes
$ git push origin main --force
```

{% warning %}

El cargar forzadamente tiene implicaciones serias ya que cambia la secuencia del historial de confirmaciones para la rama. Utilízalo con cuidado, especialmente si muchas personas acceden a tu repositorio.

{% endwarning %}

## Información adicional

* "[Resolución de conflictos de combinación después de una fusión mediante cambio de base de Git](/github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase)"
