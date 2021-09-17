---
title: Agregar un archivo a un repositorio utilizando la línea de comando
intro: 'Puedes cargar un archivo existente a un repositorio {% data variables.product.product_name %} utilizando la línea de comando.'
redirect_from:
  - /articles/adding-a-file-to-a-repository-from-the-command-line/
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% tip %}

**Sugerencia:** También puedes [agregar un archivo existente a un repositorio desde el sitio web de {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. En tu computadora, mueve el archivo que deseas cargar a {% data variables.product.product_name %} en el directorio local que se creó cuando clonaste el repositorio.
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.switching_directories_procedural %}
{% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # Agrega el archivo a tu repositorio local y lo presenta para la confirmación. {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

### Leer más

- "[Crear archivos nuevos](/articles/creating-new-files)"
- [Agregar un proyecto existente a GitHub mediante la línea de comando](/articles/adding-an-existing-project-to-github-using-the-command-line)"
