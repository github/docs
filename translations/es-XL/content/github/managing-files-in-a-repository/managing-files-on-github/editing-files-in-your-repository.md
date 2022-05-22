---
title: Editar archivos en tu repositorio
intro: 'Puedes editar archivos directamente en {% data variables.product.product_name %} en cualquiera de tus repositorios usando el editor de archivos.'
redirect_from:
  - /articles/editing-files/
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% tip %}

**Sugerencia**:{% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**Nota:** El editor de archivos de {% data variables.product.product_name %} usa [CodeMirror](https://codemirror.net/).

{% endnote %}

1. En tu repositorio, dirígete al archivo que deseas editar.
{% data reusables.repositories.edit-file %}
3. En la pestaña **Editar archivo**, realiza todos los cambios que sean necesarios. ![Nuevo contenido en el archivo](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Leer más

* "[Editar archivos en el repositorio de otro usuario](/articles/editing-files-in-another-user-s-repository)"
