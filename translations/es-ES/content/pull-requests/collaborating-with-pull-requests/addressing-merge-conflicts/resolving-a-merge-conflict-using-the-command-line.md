---
title: Resolver un conflicto de fusión con la línea de comando
intro: Puedes resolver conflictos de fusión con la línea de comando y un editor de texto.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /articles/resolving-a-merge-conflict-from-the-command-line
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts in Git
ms.openlocfilehash: 1d4ff97c2a93d3e5a7aebaa8752810e284203bc1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883461'
---
Los conflictos de fusión ocurren cuando se hacen cambios contrapuestos en la misma línea de un archivo o cuando una persona edita un archivo y otra persona borra el mismo archivo. Para más información, vea "[Acerca de los conflictos de combinación](/articles/about-merge-conflicts/)".

{% tip %}

**Sugerencia:** Puede usar el editor de conflictos de {% data variables.product.product_name %} para resolver conflictos de combinación de cambios de líneas contrapuestos entre ramas que forman parte de una solicitud de incorporación de cambios. Para más información, vea "[Resolución de un conflicto de combinación en GitHub](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)".

{% endtip %}

## Conflictos de fusión de cambios de líneas contrapuestos

Para resolver un conflicto de fusión causado por cambios de líneas contrapuestos, debes decidir qué cambios incorporar desde las diferentes ramas de una confirmación nueva.

Por ejemplo, si usted y otra persona han editado el archivo _styleguide.md_ en las mismas líneas de diferentes ramas del mismo repositorio de Git, recibirá un error de conflicto de combinación cuando intente combinar estas ramas. Debes resolver este conflicto de fusión con una confirmación nueva antes de que puedas fusionar estas ramas.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navega en el repositorio de Git local que tiene el conflicto de fusión.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
3. Genera una lista de los archivos afectados por el conflicto de fusión. En este ejemplo, el archivo *styleguide.md* tiene un conflicto de combinación.
  ```shell
  $ git status
  > # On branch branch-b
  > # You have unmerged paths.
  > #   (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #   (use "git add <file>..." to mark resolution)
  > #
  > # both modified:      styleguide.md
  > #
  > no changes added to commit (use "git add" and/or "git commit -a")
  ```
4. Abra el editor de texto que prefiera, por ejemplo [Atom](https://atom.io/), y vaya al archivo que tiene conflictos de combinación.
5. Para ver el origen de un conflicto de combinación en el archivo, busque el marcador de conflicto `<<<<<<<` en el archivo. Al abrir el archivo en el editor de texto, verá los cambios de la rama HEAD o de base después de la línea `<<<<<<< HEAD`. A continuación, verá `=======`, que divide los cambios de los de la otra rama, seguido de `>>>>>>> BRANCH-NAME`. En este ejemplo, una persona ha escrito "abrir una incidencia" en la rama HEAD o de base, y otra persona ha escrito "formula tu pregunta en IRC" en la rama comparada o `branch-a`.

    ```
    If you have questions, please
    <<<<<<< HEAD
    open an issue
    =======
    ask your question in IRC.
    >>>>>>> branch-a
    ```
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %}En este ejemplo, ambos cambios se incorporaron en la fusión final:

  ```shell
  If you have questions, please open an issue or ask in our IRC channel if it's more urgent.
  ```
7. Agrega o lanza tus cambios.
  ```shell
  $ git add .
  ```
8. Confirma tus cambios con un comentario.
  ```shell
  $ git commit -m "Resolved merge conflict by incorporating both suggestions."
  ```

Ahora puede combinar las ramas en la línea de comandos, o bien [insertar los cambios en el repositorio remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) en {% data variables.product.product_name %} y [combinar los cambios](/articles/merging-a-pull-request/) en una solicitud de incorporación de cambios.

## Conflictos de fusión de archivos eliminados

Para resolver un conflicto de fusión causado por cambios contrapuestos en un archivo, cuando una persona elimina un archivo en una rama y otra persona edita el mismo archivo, debes decidir si eliminar o conservar el archivo eliminado en una confirmación nueva.

Por ejemplo, si ha editado un archivo, como *README.md*, y otra persona ha eliminado el mismo archivo en otra rama del mismo repositorio de Git, recibirá un error de conflicto de combinación cuando intente combinar estas ramas. Debes resolver este conflicto de fusión con una confirmación nueva antes de que puedas fusionar estas ramas.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navega en el repositorio de Git local que tiene el conflicto de fusión.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
2. Genera una lista de los archivos afectados por el conflicto de fusión. En este ejemplo, el archivo *README.md* tiene un conflicto de combinación.
  ```shell
  $ git status
  > # On branch main
  > # Your branch and 'origin/main' have diverged,
  > # and have 1 and 2 different commits each, respectively.
  > #  (use "git pull" to merge the remote branch into yours)
  > # You have unmerged paths.
  > #  (fix conflicts and run "git commit")
  > #
  > # Unmerged paths:
  > #  (use "git add/rm <file>..." as appropriate to mark resolution)
  > #
  > #   deleted by us:   README.md
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
3. Abra el editor de texto que prefiera, por ejemplo [Atom](https://atom.io/), y vaya al archivo que tiene conflictos de combinación.
6. Decide si quieres conservar el archivo eliminado. Puede que quieras ver los últimos cambios hechos en el archivo eliminado en tu editor de texto.

 Para volver a agregar el archivo eliminado a tu repositorio:
  ```shell
  $ git add README.md
  ```
 Para eliminar este archivo de tu repositorio:
  ```shell
  $ git rm README.md
  > README.md: needs merge
  > rm 'README.md'
  ```
7. Confirma tus cambios con un comentario.
  ```shell
  $ git commit -m "Resolved merge conflict by keeping README.md file."
  > [branch-d 6f89e49] Merge branch 'branch-c' into branch-d
  ```

Ahora puede combinar las ramas en la línea de comandos, o bien [insertar los cambios en el repositorio remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) en {% data variables.product.product_name %} y [combinar los cambios](/articles/merging-a-pull-request/) en una solicitud de incorporación de cambios.

## Información adicional

- "[Acerca de los conflictos de combinación](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)"
- "[Extracción del repositorio de las solicitudes de incorporación de cambios localmente](/articles/checking-out-pull-requests-locally/)"
