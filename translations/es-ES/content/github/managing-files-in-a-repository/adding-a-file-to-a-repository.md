---
title: Agregar un archivo a un repositorio
intro: 'Puedes cargar y confirmar un archivo existente a un repositorio {% data variables.product.product_name %}. Arrastra y suelta un archivo en cualquier directorio en el árbol de archivos desde la página principal del repositorio.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

Los archivos que agregues a un repositorio mediante un navegador están limitados a {% data variables.large_files.max_github_browser_size %} por archivo. Puedes agregar archivos más grandes, de hasta {% data variables.large_files.max_github_size %} cada uno, mediante la línea de comando. Para obtener más información, consulta "[Agregar un archivo a un repositorio mediante la línea de comando](/articles/adding-a-file-to-a-repository-using-the-command-line)".

{% tip %}

**Tips:**
- Puedes cargar múltiples archivos en {% data variables.product.product_name %} a la vez.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
2. Debajo del nombre del repositorio, haz clic en **Upload files** (Cargar archivos). ![Botón Upload files (Cargar archivos)](/assets/images/help/repository/upload-files-button.png)
{% else %}
2. Sobre la lista de archivos, da clic en **Cargar archivos** utilizando el menú desplegable de **Agregar archivo**. !["Archivos cargados" en el menú desplegable de "Agregar archivo"](/assets/images/help/repository/upload-files-button.png)
{% endif %}
3. Arrastra y suelta el archivo o la carpeta que te gustaría cargar en tu repositorio en el árbol del archivo. ![Área para arrastrar y soltar](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. Haz clic en **Commit changes** (Confirmar cambios). ![Botón Commit changes (Confirmar cambios)](/assets/images/help/repository/commit-changes-button.png)
