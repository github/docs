---
title: Crear un repositorio desde una plantilla
intro: 'You can make an existing repository a template, so you and others can generate new repositories with the same directory structure, branches, and files.'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Crear un repositorio de plantilla
---

{% note %}

**Nota**: Ty repositorio de plantilla no puede incluir archivos que se almacenen utilizando {% data variables.large_files.product_name_short %}.

{% endnote %}

Para crear un repositorio de plantilla, debes crear un repositorio y luego convertirlo en una plantilla. Para obtener más información sobre la creación de repositorios, consulta "[Crear un repositorio nuevo](/articles/creating-a-new-repository)."

After you make your repository a template, anyone with access to the repository can generate a new repository with the same directory structure and files as your default branch. They can also choose to include all the other branches in your repository. Branches created from a template have unrelated histories, so you cannot create pull requests or merge between the branches. Para obtener más información, consulta "[Crear un repositorio a partir de una plantilla](/articles/creating-a-repository-from-a-template)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Selecciona **Repositorio de plantilla**. ![Casilla de verificación para convertir un repositorio en una plantilla](/assets/images/help/repository/template-repository-checkbox.png)
