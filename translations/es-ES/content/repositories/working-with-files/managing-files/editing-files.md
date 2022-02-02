---
title: Editar archivos
intro: 'Puedes editar archivos directamente en {% data variables.product.product_name %} en cualquiera de tus repositorios usando el editor de archivos.'
redirect_from:
  - /articles/editing-files
  - /articles/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/editing-files-in-your-repository
  - /articles/editing-files-in-another-user-s-repository
  - /github/managing-files-in-a-repository/editing-files-in-another-users-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-another-users-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Editar archivos
---

## Editar archivos en tu repositorio

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

## Editar archivos en el repositorio de otro usuario

Cuando editas un archivo en el repositorio de otro usuario, automáticamente [bifurcaremos el repositorio](/articles/fork-a-repo) y [abriremos una solicitud de cambios](/articles/creating-a-pull-request) para ti.

1. En el repositorio de otro usuario, dirígete a la carpeta que contiene el archivo que deseas editar. Haz clic en el nombre del archivo que deseas editar.
2. Sobre el contenido del archivo, haz clic en {% octicon "pencil" aria-label="The edit icon" %}. En este punto del proceso, GitHub bifurca el repositorio por ti.
3. Realiza todos los cambios que necesites en el archivo. ![Nuevo contenido en el archivo](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
6. Haz clic en **Proponer cambio en el archivo**. ![Botón Confirmar cambios](/assets/images/help/repository/propose_file_change_button.png)
7. Escribe un título y una descripción para tu solicitud de extracción. ![Página de descripción de la solicitud de extracción](/assets/images/help/pull_requests/pullrequest-description.png)
8. Haz clic en **Create Pull Request** (Crear solicitud de extracción). ![Botón Solicitud de extracción](/assets/images/help/pull_requests/pullrequest-send.png)
