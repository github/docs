---
title: Agregar un archivo a un repositorio
intro: 'Puedes cargar y confirmar un archivo existente a un repositorio de {% data variables.product.product_name %} o utilizando la línea de comandos.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Agregar un archivo
---

## Agregar un archivo a un repositorio en {% data variables.product.product_name %}

Los archivos que agregues a un repositorio mediante un navegador están limitados a {% data variables.large_files.max_github_browser_size %} por archivo. Puedes agregar archivos más grandes, de hasta {% data variables.large_files.max_github_size %} cada uno, mediante la línea de comando. Para obtener más información, consulta "[Agregar un archivo a un repositorio mediante la línea de comando](#adding-a-file-to-a-repository-using-the-command-line)".

{% tip %}

**Tips:**
- Puedes cargar múltiples archivos en {% data variables.product.product_name %} a la vez.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Sobre la lista de archivos, da clic en **Cargar archivos** utilizando el menú desplegable de **Agregar archivo**. !["Archivos cargados" en el menú desplegable de "Agregar archivo"](/assets/images/help/repository/upload-files-button.png)
3. Arrastra y suelta el archivo o la carpeta que te gustaría cargar en tu repositorio en el árbol del archivo. ![Área para arrastrar y soltar](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. Haz clic en **Commit changes** (Confirmar cambios). ![Botón Commit changes (Confirmar cambios)](/assets/images/help/repository/commit-changes-button.png)

## Agregar un archivo a un repositorio utilizando la línea de comando

Puedes cargar un archivo existente a un repositorio {% data variables.product.product_name %} utilizando la línea de comando.

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

## Leer más

- [Agregar un proyecto existente a GitHub mediante la línea de comando](/articles/adding-an-existing-project-to-github-using-the-command-line)"
