---
title: Obtener cambios de un repositorio remoto
intro: Puedes usar los comandos Git más frecuentes para acceder a repositorios remotos.
redirect_from:
  - /articles/fetching-a-remote
  - /articles/getting-changes-from-a-remote-repository
  - /github/using-git/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/using-git/getting-changes-from-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Get changes from a remote
ms.openlocfilehash: 11996b33ccedea8169f472feb1804f2eed5a5d9d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126238'
---
## Opciones para obtener cambios

Estos comandos son muy útiles al interactuar con [un repositorio remoto](/github/getting-started-with-github/about-remote-repositories). `clone` y `fetch` descargan código remoto desde la dirección URL remota de un repositorio al equipo local, `merge` se usa para combinar el trabajo de diferentes personas con el suyo, y `pull` es una combinación de `fetch` y `merge`.

## Clonar un repositorio

Para obtener una copia completa del repositorio de otro usuario, use `git clone` de esta forma:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
# Clones a repository to your computer
```

Puede elegir [entre varias direcciones URL diferentes](/github/getting-started-with-github/about-remote-repositories) al clonar un repositorio. Cuando inicias sesión en {% data variables.product.prodname_dotcom %}, estas URL están disponibles debajo de los detalles del repositorio:

![Lista de URL remota](/assets/images/help/repository/remotes-url.png)

Al ejecutar `git clone`, tienen lugar las siguientes acciones:
- Se crea una carpeta con el nombre `repo`
- Esta carpeta se inicializa como un repositorio de Git.
- Se crea un repositorio remoto denominado `origin`, que apunta a la dirección URL desde la que ha realizado la clonación
- Todos los archivos y confirmaciones del repositorio se descargan aquí.
- La rama predeterminada está desmarcada

Para cada rama `foo` del repositorio remoto, se crea una rama `refs/remotes/origin/foo` de seguimiento remoto correspondiente en el repositorio local. Normalmente, puede abreviar estos nombres de rama de seguimiento remoto a `origin/foo`.

## Extraer cambios de un repositorio remoto

Use `git fetch` para recuperar el nuevo trabajo realizado por otras personas. Al capturar desde un repositorio se obtienen todas las ramas de seguimiento remoto nuevas y etiquetas *sin* combinar estos cambios en las ramas propias.

Si ya tiene un repositorio local con una URL remota configurada para el proyecto deseado, puede capturar toda la información nueva si usa `git fetch *remotename*` en el terminal:

```shell
$ git fetch <em>remotename</em>
# Fetches updates made to a remote repository
```

De otra forma, siempre puedes agregar un remoto nuevo y luego recuperarlo. Para más información, vea "[Administración de repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)".

## Fusionar cambios en tu rama local

La fusión combina tus cambios locales con los cambios realizados por otros.

Por lo general, fusionas una rama de seguimiento remoto (es decir, una rama extraída desde un repositorio remoto) con tu rama local:

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# Merges updates made online with your local work
```

## Extraer cambios de un repositorio remoto

`git pull` es un método abreviado útil para completar `git fetch` y `git merge `en el mismo comando:

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# Grabs online updates and merges them with your local work
```

Como `pull` realiza una combinación en los cambios recuperados, debe asegurarse de que el trabajo local se confirma antes de ejecutar el comando `pull`. Si se produce [un conflicto de combinación](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) que no puede resolver, o si decide salir de la combinación, puede usar `git merge --abort` para restaurar la rama al estado que tenía antes de extraerla.

## Información adicional

- ["Trabajo con repositorios remotos" en el libro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)"{% ifversion fpt or ghec %}
- "[Solución de problemas de conectividad](/articles/troubleshooting-connectivity-problems)"{% endif %}
