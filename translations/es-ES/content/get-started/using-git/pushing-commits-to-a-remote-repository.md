---
title: Subir confirmaciones de cambios a un repositorio remoto
intro: Usa `git push` para insertar confirmaciones realizadas en la rama local en un repositorio remoto.
redirect_from:
  - /articles/pushing-to-a-remote
  - /articles/pushing-commits-to-a-remote-repository
  - /github/using-git/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/using-git/pushing-commits-to-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Push commits to a remote
ms.openlocfilehash: 61a3eb3e0b0147810b561b59b58879688dd4ba36
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126237'
---
## Acerca de `git push`
El comando `git push` toma dos argumentos:

* Un nombre remoto, por ejemplo, `origin`
* Un nombre de rama, por ejemplo, `main`

Por ejemplo:

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

Por ejemplo, normalmente se ejecuta `git push origin main` para insertar los cambios locales en el repositorio en línea.

## Renombrar ramas

Para cambiar el nombre de una rama, tendría que usar el mismo comando `git push`, pero agregar un argumento más: el nombre de la nueva rama. Por ejemplo:

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

Esto inserta `LOCALBRANCHNAME` en `REMOTENAME`, pero se cambia el nombre a `REMOTEBRANCHNAME`.

## Abordar errores sin avance rápido

Si la copia local de un repositorio está desincronizada, o "atrasada", con respecto al repositorio ascendente al que se realiza la inserción, recibirá un mensaje en el que se indica `non-fast-forward updates were rejected`.
Esto significa que debe recuperar los cambios ascendentes antes de poder insertar los cambios locales.

Para más información sobre este error, vea "[Solución de errores de avance no rápido](/github/getting-started-with-github/dealing-with-non-fast-forward-errors)".

## Subir etiquetas

De manera predeterminada, y sin parámetros adicionales, `git push` envía todas las ramas que coinciden para que tengan el mismo nombre que las ramas remotas.

Para subir una etiqueta única, puedes emitir el mismo comando que al subir una rama:

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

Para subir todas tus etiquetas, puede escribir el comando:

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

## Eliminar una etiqueta o rama remota

La sintaxis para borrar una rama es un poco críptica a primera vista:

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

Nota que hay un espacio antes de los dos puntos. El comando se parece a los mismos pasos que realizaría para cambiar el nombre de una rama. Pero aquí le indica a Git que no inserte _nada_ en `BRANCHNAME` en `REMOTENAME`. Por este motivo, `git push` elimina la rama en el repositorio remoto.

## Remotos y bifurcaciones

Es posible que ya sepa que [puede "bifurcar" repositorios](https://guides.github.com/overviews/forking/) en GitHub.

Al clonar un repositorio de su propiedad, le proporciona una URL remota que le indica a Git dónde recuperar e insertar las actualizaciones. Si quiere colaborar con el repositorio original, tendría que agregar una nueva URL remota, normalmente llamada `upstream`, al clon de Git local:

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

Ahora, puede capturar actualizaciones y ramas desde *su* bifurcación:

```shell
git fetch upstream
# Grab the upstream remote's branches
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://{% data variables.command_line.codeblock %}/<em>octocat</em>/<em>repo</em>
>  * [new branch]      main     -> upstream/main
```

Cuando haya finalizado los cambios locales, puede insertar la rama local en GitHub e [iniciar una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Para más información sobre cómo trabajar con bifurcaciones, vea "[Sincronización de una bifurcación](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)".

## Información adicional

- [El capítulo "Remotes" del libro "Pro Git"](https://git-scm.com/book/ch5-2.html)
- [Página principal de `git remote`](https://git-scm.com/docs/git-remote.html)
- "[Hoja de referencia rápida de Git](/articles/git-cheatsheet)"
- "[Flujos de trabajo de Git](/github/getting-started-with-github/git-workflows)"
- "[Manual de Git](https://guides.github.com/introduction/git-handbook/)"
