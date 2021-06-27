---
title: Renombrar una rama
intro: Puedes cambiar el nombre de una rama en un repositorio.
permissions: People with write permissions to a repository can rename a branch in the repository. People with admin permissions can rename the default branch.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/renaming-a-branch
---

### Acerca de renombrar las ramas

Puedes renombrar una rama en un repositorio de {% data variables.product.product_location %}. Para obtener más información sobre cómo renombrar ramas, consulta la sección "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches)".

Cuando renombras una rama en {% data variables.product.product_location %}, cualquier URL que contega el nombre de la rama antigua se redireccionará automáticamente a la URL equivalente para la rama que se renombró. También se actualizan las políticas de protección de rama, así como la rama base para las solicitudes de cambios abriertas (incluyendo aquellas para las bifurcaciones) y para los borradores de lanzamientos. Después de que se completa el renombramiento, {% data variables.product.prodname_dotcom %} proporciona instrucciones en la página principal del repositorio y dirige a los colaboradores a actualizar sus ambientes locales de Git.

Aunque las URL de archivo se redirigen automáticamente, las URL de archivo sin procesar no se redirigirán. Además, {% data variables.product.prodname_dotcom %} no realiza ninguna redirección si los usuarios realizan un `git pull` para el nombre de rama anterior.

Los flujos de trabajo de las {% data variables.product.prodname_actions %} no siguen a los renombrados, así que, si tu repositorio publica una acción, cualquiera que la utilice con `@{old-branch-name}` fallará. Debes considerar agregar una rama nueva con el contenido original más una confirmación adicional que reporte que el nombre de rama está obsoletizado y que sugiera que los usuarios se migren al nombre de la rama nueva.

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
$ git remote set-head origin -a
```

Opcionalmente, ejecuta el siguiente comando para eliminar las referencias de rastreo al nombre de la rama antigua.
```
$ git remote prune origin
```
