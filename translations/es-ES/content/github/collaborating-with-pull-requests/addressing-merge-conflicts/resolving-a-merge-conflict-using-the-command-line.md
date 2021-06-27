---
title: Resolver un conflicto de fusión con la línea de comando
intro: Puedes resolver conflictos de fusión con la línea de comando y un editor de texto.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
  - /articles/resolving-a-merge-conflict-from-the-command-line/
  - /articles/resolving-a-merge-conflict-using-the-command-line
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Los conflictos de fusión ocurren cuando se hacen cambios contrapuestos en la misma línea de un archivo o cuando una persona edita un archivo y otra persona borra el mismo archivo. Para obtener más información, consulta "[Acerca de los conflictos de fusión](/articles/about-merge-conflicts/)".

{% tip %}

**Sugerencia:** Puedes utilizar el editor de conflictos en {% data variables.product.product_name %} para resolver conflictos de fusión de cambios de líneas contrapuestos entre ramas que son parte de una solicitud de extracción. Para obtener más información, consulta "[Resolver un conflicto de fusión en GitHub](/articles/resolving-a-merge-conflict-on-github)".

{% endtip %}

### Conflictos de fusión de cambios de líneas contrapuestos

Para resolver un conflicto de fusión causado por cambios de líneas contrapuestos, debes decidir qué cambios incorporar desde las diferentes ramas de una confirmación nueva.

Por ejemplo, si usted y otra persona editaron el archivo _styleguide.md_ en las mismas líneas de diferentes ramas del mismo repositorio de Git, recibirás un error de conflicto de fusión cuando trates de fusionar estas ramas. Debes resolver este conflicto de fusión con una confirmación nueva antes de que puedas fusionar estas ramas.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navega en el repositorio de Git local que tiene el conflicto de fusión.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
3. Genera una lista de los archivos afectados por el conflicto de fusión. En este ejemplo, el archivo *styleguide.md* tiene un conflicto de fusión.
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
4. Abre tu editor de texto preferido, como [Atom](https://atom.io/), y navega hasta el archivo que tiene los conflictos de fusión.
5. Para ver el origen de un conflicto de fusión en tu archivo, busca el archivo para el marcador de conflicto `<<<<<<<`. Cuando abras el archivo en tu editor de texto, verás los cambios desde la rama HEAD (encabezado) o base después de la línea `<<<<<<< HEAD`. Luego verás `=======`, que separa tus cambios de los cambios en la otra rama, seguido de `>>>>>>> BRANCH-NAME`. En este ejemplo, una persona escribió "abrir una propuesta" en la rama base o HEAD (encabezado), y otra persona escribió "haz tu pregunta en IRC" en la rama de comparación o `branch-a`.

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
  Si tienes preguntas, abre una propuesta o consulta en nuestro canal IRC si es más urgente.
  ```
7. Agrega o almacena tus cambios.
  ```shell
  $ git add .
  ```
8. Confirma tus cambios con un comentario.
  ```shell
  $ git commit -m "Conflicto de fusión resuelto incorporando ambas sugerencias".
  ```

Ahora puedes fusionar las ramas en la línea de comando o [subir tus cambios a tu repositorio remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) en {% data variables.product.product_name %} y [fusionar tus cambios](/articles/merging-a-pull-request/) en una solicitud de extracción.

### Conflictos de fusión de archivos eliminados

Para resolver un conflicto de fusión causado por cambios contrapuestos en un archivo, cuando una persona elimina un archivo en una rama y otra persona edita el mismo archivo, debes decidir si eliminar o conservar el archivo eliminado en una confirmación nueva.

Por ejemplo, si editaste un archivo, como *README.md*, y otra persona eliminó el mismo archivo en otra rama del mismo repositorio de Git, recibirás un error de conflicto de fusión cuando trates de fusionar estas ramas. Debes resolver este conflicto de fusión con una confirmación nueva antes de que puedas fusionar estas ramas.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navega en el repositorio de Git local que tiene el conflicto de fusión.
  ```shell
  cd <em>REPOSITORY-NAME</em>
  ```
2. Genera una lista de los archivos afectados por el conflicto de fusión. En este ejemplo, el archivo *README.md* tiene un conflicto de fusión.
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
3. Abre tu editor de texto preferido, como [Atom](https://atom.io/), y navega hasta el archivo que tiene los conflictos de fusión.
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

Ahora puedes fusionar las ramas en la línea de comando o [subir tus cambios a tu repositorio remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) en {% data variables.product.product_name %} y [fusionar tus cambios](/articles/merging-a-pull-request/) en una solicitud de extracción.

### Leer más

- "[Acerca de los conflictos de fusión](/articles/about-merge-conflicts)"
- "[Revisar las solicitudes de extracción de forma local](/articles/checking-out-pull-requests-locally/)"
