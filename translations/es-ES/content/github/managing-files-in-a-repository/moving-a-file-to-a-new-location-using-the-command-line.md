---
title: Mover un archivo a una nueva ubicación utilizando la línea de comando
intro: Puedes utilizar la línea de comando para mover archivos dentro de un repositorio al eliminar el archivo de la ubicación anterior y después agregarlo en la nueva ubicación.
redirect_from:
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Muchos archivos pueden [moverse directamente en {% data variables.product.product_name %}](/articles/moving-a-file-to-a-new-location), pero algunos archivos, como imágenes, necesitan que los muevas desde la línea de comando.

{% data reusables.command_line.manipulating_file_prereqs %}

1. En la computadora, mueve el archivo a una nueva ubicación dentro del directorio que fue creado localmente en tu computadora cuando clonaste el repositorio.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Utiliza `git status` para verificar la nueva ubicación y la ubicación anterior del archivo.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes not staged for commit:
  > #   (use "git add/rm <file>..." to update what will be committed)
  > #   (use "git checkout -- <file>..." to discard changes in working directory)
  > #
  > #     deleted:    /<em>old-folder</em>/<em>image.png</em>
  > #
  > # Untracked files:
  > #   (use "git add <file>..." to include in what will be committed)
  > #
  > #     /<em>new-folder</em>/<em>image.png</em>
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
{% data reusables.git.stage_for_commit %} Esto eliminará, o `git rm`, el archivo de la ubicación antigua y agregará, o `git add`, el archivo en la nueva ubicación.
  ```shell
  $ git add .
  # Agrega el archivo a tu repositorio local y lo presenta para la confirmación.
  # {% data reusables.git.unstage-codeblock %}
  ```
5. Utiliza `git status` para verificar los cambios preparados para confirmar.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #    renamed:    /old-folder/image.png -> /new-folder/image.png
  # Displays the changes staged for commit
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Move file to new directory"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

### Leer más

- "[Renombrar un archivo utilizando la línea de comando](/articles/renaming-a-file-using-the-command-line)"
- [Agregar un archivo a un repositorio mediante la línea de comando](/articles/adding-a-file-to-a-repository-using-the-command-line)"
