---
title: Mover un archivo a otra ubicación
intro: 'Puedes mover un archivo a un directorio diferente desde {% data variables.product.product_name %} o utilizando la línea de comandos.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/moving-a-file-to-a-new-location-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Move a file
ms.openlocfilehash: 90e9434401795b6222d6304464c5a7d3839e0b7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136555'
---
Además de cambiar la ubicación del archivo, también puede [actualizar el contenido del archivo](/articles/editing-files-in-your-repository) o [asignarle un nuevo nombre](/articles/renaming-a-file) en la misma confirmación.

## Migrar un archivo a una ubicación nueva en {% data variables.product.product_name %}

{% tip %}

**Sugerencias**:

- Si intentas mover un archivo en un repositorio al que no tienes acceso, bifurcaremos el proyecto a tu cuenta personal y te ayudaremos a enviar [una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) al repositorio original después de confirmar el cambio.
- Algunos archivos, como imágenes, necesitan que los muevas desde la línea de comando. Para obtener más información, vea "[Traslado de un archivo a una nueva ubicación mediante la línea de comandos](/articles/moving-a-file-to-a-new-location-using-the-command-line)".
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. En tu repositorio, navega hasta el archivo que deseas mover.
2. En la esquina superior derecha de la vista del archivo, haga clic en {% octicon "pencil" aria-label="The edit icon" %} para abrir el editor de archivos.
![Icono Edit file (Editar archivo)](/assets/images/help/repository/move-file-edit-file-icon.png)
3. En el campo del nombre de archivo, cambie el nombre del archivo siguiendo estas instrucciones: ![Edición de un nombre de archivo](/assets/images/help/repository/moving_files.gif).
    - Para mover el archivo **a una subcarpeta**, escriba el nombre de la carpeta que quiera seguido de `/`. El nombre de tu nueva carpeta se convierte en el nuevo elemento en la ruta de navegación.
    - Para mover el archivo a un directorio por **encima de la ubicación actual del archivo**, coloque el cursor al principio del campo del nombre de archivo, escriba `../` para subir un nivel de directorio completo o pulse la tecla `backspace` para editar el nombre de la carpeta primaria.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Mover un archivo a una nueva ubicación utilizando la línea de comando 

Puedes utilizar la línea de comando para mover archivos dentro de un repositorio al eliminar el archivo de la ubicación anterior y después agregarlo en la nueva ubicación.

Muchos archivos se pueden [mover directamente en {% data variables.product.product_name %}](/articles/moving-a-file-to-a-new-location), pero otros, como las imágenes, deben moverse desde la línea de comandos.

{% data reusables.command_line.manipulating_file_prereqs %}

1. En la computadora, mueve el archivo a una nueva ubicación dentro del directorio que fue creado localmente en tu computadora cuando clonaste el repositorio.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Use `git status` para comprobar las ubicaciones antiguas y nuevas de los archivos.
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
{% data reusables.git.stage_for_commit %} Esto eliminará (`git rm`) el archivo de la ubicación antigua y lo agregará (`git add`) en la nueva ubicación.
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit.
  # {% data reusables.git.unstage-codeblock %}
  ```
5. Use `git status` para comprobar los cambios almacenados provisionalmente para la confirmación.
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
