---
title: Renombrar una rama
intro: Puedes cambiar el nombre de una rama en un repositorio.
permissions: People with write permissions to a repository can rename a branch in the repository. People with admin permissions can rename the default branch.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
topics:
  - Repositories
---

### Acerca de renombrar las ramas

Puedes renombrar una rama en un repositorio de {% data variables.product.product_location %}. Para obtener más información sobre cómo renombrar ramas, consulta la sección "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches)".

When you rename a branch on {% data variables.product.product_location %}, any URLs that contain the old branch name are automatically redirected to the equivalent URL for the renamed branch. Branch protection policies are also updated, as well as the base branch for open pull requests (including those for forks) and draft releases. After the rename is complete, {% data variables.product.prodname_dotcom %} provides instructions on the repository's home page directing contributors to update their local Git environments.

Although file URLs are automatically redirected, raw file URLs are not redirected. Also, {% data variables.product.prodname_dotcom %} does not perform any redirects if users perform a `git pull` for the previous branch name.

### Renombrar una rama

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. En la lista de ramas, a la derecha de la rama que quieras renombrar, da clic en {% octicon "pencil" aria-label="The edit icon" %}. ![Icono de lápiz a la derecha de la rama que quieras renombrar](/assets/images/help/branch/branch-rename-edit.png)
1. Teclea un nombre nuevo para la rama. ![Campo de texto para teclear un nombre de rama nuevo](/assets/images/help/branch/branch-rename-type.png)
1. Revisa la información sobre los ambientes locales y luego da clic en **Renombrar rama**. ![Información de ambiente local y botón de "Renombrar rama"](/assets/images/help/branch/branch-rename-rename.png)

### Actualizar un clon local después de que cambie el nombre de una rama

Después de que renombras una rama en un repositorio con {% data variables.product.product_name %}, cualquier colaborador con un clon local del repositorio necesitará actualizar dicho clon.

Desde el clon local del repositorio en una computadora, ejecuta los siguientes comandos para actualizar el nombre de la rama predeterminada.

```shell
$ git branch -m <em>OLD-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git fetch origin
$ git branch -u origin/<em>NEW-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
```
