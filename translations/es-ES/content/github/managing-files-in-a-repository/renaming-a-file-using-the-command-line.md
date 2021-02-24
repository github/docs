---
title: Renombrar un archivo usando la línea de comando
intro: Puedes usar la línea de comando para renombrar cualquier archivo de tu repositorio.
redirect_from:
  - /articles/renaming-a-file-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

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

### Leer más
- "[Mover un archivo a una ubicación nueva mediante la línea de comando](/articles/moving-a-file-to-a-new-location-using-the-command-line)"
- [Agregar un archivo a un repositorio mediante la línea de comando](/articles/adding-a-file-to-a-repository-using-the-command-line)"
