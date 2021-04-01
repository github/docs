---
title: Renombrar una rama
intro: Puedes cambiar el nombre de una rama en un repositorio.
permissions: Las personas con permisos de escritura en un repositorio pueden renombrar las ramas de éste. Las personas con permisos administrartivos pueden renombrar la rama predeterminada.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
topics:
  - repositories
---

### Acerca de renombrar las ramas

Puedes renombrar una rama en un repositorio de {% data variables.product.product_location %}. Para obtener más información sobre cómo renombrar ramas, consulta la sección "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches)".

Si renombras una rama, {% data variables.product.prodname_dotcom %} redireccionará automáticamente los enlaces en{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location_enterprise %}{% endif %} que contengan el nombre anterior de la rama al enlace equivalente en la rama que se renombró. {% data variables.product.prodname_dotcom %} también actualizará las políticas de protección de rama, así como la rama base para las solicitudes de cambios y borradores de lanzamientos.

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
