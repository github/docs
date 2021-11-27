---
title: Renombrar un archivo
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
---

## Renombrar un archivo en {% data variables.product.product_name %}

El renombrar un archivo también te da la oportunidad de [mover el archivo a una ubicación nueva](/articles/moving-a-file-to-a-new-location)

{% tip %}

**Tips**:

- Si intentas renombrar un archivo de un repositorio al que no tienes acceso, bifurcaremos el proyecto para tu cuenta de usuario y te ayudaremos a enviar [una solicitud de extracción](/articles/about-pull-requests) al repositorio original después de que confirmes tu cambio.
- Los nombres de los archivos creados a través de la interfaz web solo pueden contener caracteres alfanuméricos y guiones (`-`). Para utilizar otros caracteres, crea y confirma los archivos de forma local y luego súbelos al repositorio.
- Algunos archivos, como las imágenes, requieren que los renombres desde la línea de comando. Para obtener más información, consulta "[Renombrar un archivo usando la línea de comando](/articles/renaming-a-file-using-the-command-line)".

{% endtip %}

1. En tu repositorio, busca el archivo que quieres renombrar.
2. En la esquina superior derecha de la vista del archivo, haz clic en {% octicon "pencil" aria-label="The edit icon" %} para abrir el editor de archivos. ![Icono Edit file (Editar archivo)](/assets/images/help/repository/edit-file-icon.png)
3. En el campo de nombre del archivo, cambia el nombre del archivo con el nombre de archivo nuevo que quieras. También puedes actualizar los contenidos de tu archivo en el mismo momento. ![Editar el nombre del archivo](/assets/images/help/repository/changing-file-name.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## Renombrar un archivo usando la línea de comando

Puedes usar la línea de comando para renombrar cualquier archivo de tu repositorio.

Muchos archivos se pueden [renombrar directamente en {% data variables.product.product_name %}](/articles/renaming-a-file), pero algunos, como las imágenes, requieren que los renombres desde la línea de comando.

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
3. Renombra el archivo, especificando el nombre de archivo antiguo y el nombre de archivo nuevo que le quieres asignar. Esto preparará tu cambio para la confirmación.
  ```shell
  $ git mv <em>old_filename</em> <em>new_filename</em>
  ```
4. Utiliza `git status` para comprobar los nombres de archivo antiguo y nuevo.
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

