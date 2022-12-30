---
title: cambiar el nombre de un archivo
intro: 'Puedes renombrar cualquier archivo en tu repositorio directamente en {% data variables.product.product_name %} o utilizando la línea de comandos.'
redirect_from:
  - /articles/renaming-a-file
  - /github/managing-files-in-a-repository/renaming-a-file
  - /articles/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/renaming-a-file
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/renaming-a-file-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 826c9c45ee8cace0d3e81c78fc010ac4c76f9ab1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136548'
---
## Renombrar un archivo en {% data variables.product.product_name %}

Al cambiar el nombre de un archivo también puede [mover el archivo a una nueva ubicación](/articles/moving-a-file-to-a-new-location).

{% tip %}

**Sugerencias**:

- Si intentas cambiar el nombre de un archivo en un repositorio al que no tienes acceso, bifurcaremos el proyecto a su cuenta personal y te ayudaremos a enviar [una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) al repositorio original después de confirmar el cambio.
- Los nombres de archivo creados desde la interfaz web solo pueden contener caracteres alfanuméricos y guiones (`-`). Para utilizar otros caracteres, crea y confirma los archivos de forma local y luego súbelos al repositorio.
- Algunos archivos, como las imágenes, requieren que los renombres desde la línea de comando. Para más información, vea "[Cambio del nombre de un archivo mediante la línea de comandos](/articles/renaming-a-file-using-the-command-line)".

{% endtip %}

1. En tu repositorio, busca el archivo que quieres renombrar.
2. En la esquina superior derecha de la vista del archivo, haga clic en {% octicon "pencil" aria-label="The edit icon" %} para abrir el editor de archivos.
![Icono Editar archivo](/assets/images/help/repository/edit-file-icon.png)
3. En el campo de nombre del archivo, cambia el nombre del archivo con el nombre de archivo nuevo que quieras. También puedes actualizar los contenidos de tu archivo en el mismo momento.
![Edición de un nombre de archivo](/assets/images/help/repository/changing-file-name.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Renombrar un archivo usando la línea de comando 

Puedes usar la línea de comando para renombrar cualquier archivo de tu repositorio.

Muchos archivos se pueden [cambiar de nombre directamente en {% data variables.product.product_name %}](/articles/renaming-a-file), pero otros, como las imágenes, es necesario cambiarlos de nombre desde la línea de comandos.

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. Renombra el archivo, especificando el nombre de archivo antiguo y el nombre de archivo nuevo que le quieres asignar. Esto preparará tu cambio para la confirmación.
  ```shell
  $ git mv <em>old_filename</em> <em>new_filename</em>
  ```
4. Use `git status` para comprobar los nombres de archivo antiguos y nuevos.
  ```shell
  $ git status
  > # On branch <em>your-branch</em>
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #     renamed: <em>old_filename</em> -> <em>new_filename</em>
  > #
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Rename file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

