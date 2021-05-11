---
title: Administrar lanzamientos en un repositorio
intro: Puedes crear lanzamientos que desees poner en conjunto y entregar iteraciones de un proyecto a los usuarios.
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases/
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### Acerca de la administración de lanzamientos

También puedes publicar una acción para un lanzamiento específico en {% data variables.product.prodname_marketplace %}. Para obtener más información, consulta la sección "[Publicar una acción en {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
Puedes elegir si los objetos de {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) se incluirán en los archivos ZIP y .tar que cree {% data variables.product.product_name %} para cada lanzamiento. Para obtener más información, consulta la sección "[Administrar los objetos de {% data variables.large_files.product_name_short %} en los archivos de tu repositorio](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also manage releases using the {% data variables.product.prodname_cli %}. For more information, see "[`gh release`](https://cli.github.com/manual/gh_release)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### Crear un lanzamiento

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Haz clic en **Borrador de un nuevo lanzamiento**. ![Botón Borrador de lanzamientos](/assets/images/help/releases/draft_release_button.png)
4. Escribe un número de versión para tu lanzamiento. Las versiones se basan en [etiquetas Git](https://git-scm.com/book/en/Git-Basics-Tagging). Te recomendamos darles a las etiquetas nombres que se adapten al [control semántico de versiones](http://semver.org/). ![Versión de lanzamientos con etiquetas](/assets/images/help/releases/releases-tag-version.png)
5. Utiliza el menú desplegable para seleccionar la rama que contiene el proyecto que quieres lanzar. ![Rama de lanzamientos con etiquetas](/assets/images/help/releases/releases-tag-branch.png)
6. Escribe un título y una descripción para tu lanzamiento. ![Descripción de lanzamientos](/assets/images/help/releases/releases_description.png)
7. Opcionalmente, para incluir los archivos binarios tales como programas compilados en tu lanzamiento, arrastra y suelta o selecciona manualmente los archivos en la caja de binarios. ![Proporcionar un DMG con el lanzamiento](/assets/images/help/releases/releases_adding_binary.gif)
8. Para notificar a los usuarios que el lanzamiento no está listo para producción y puede ser inestable, selecciona **Esto es un pre-lanzamiento**. ![Casilla de verificación para marcar un lanzamiento como prelanzamiento](/assets/images/help/releases/prerelease_checkbox.png)
9. Si estás listo para publicitar tu lanzamiento, haz clic en **Publicar lanzamiento**. Para seguir trabajando luego en el lanzamiento, haz clic en **Guardar borrador**. ![Botones Publicar lanzamiento y Borrador de lanzamiento](/assets/images/help/releases/release_buttons.png)

También puedes crear un lanzamiento automáticamente desde la línea de comandos o en un script. Para obtener más información, consulta la sección "[Lanzamientos](/v3/repos/releases/#create-a-release)."

### Editar un lanzamiento

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. En la parte derecha de la página, junto al lanzamiento que quieres editar, da clic en **Editar lanzamiento**. ![Editar un lanzamiento](/assets/images/help/releases/edit-release.png)
4. Edita los detalles del lanzamiento en el formato, después, da clic en **Actualizar lanzamiento**. ![Actualizar un lanzamiento](/assets/images/help/releases/update-release.png)

### Eliminar un lanzamiento

Debes eliminar todos los archivos binarios adjuntos a un lanzamiento antes de poder eliminarlo.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Da clic en el nombre del lanzamiento que quieres eliminar. ![Enlace para ver el lanzamiento](/assets/images/help/releases/release-name-link.png)
4. En la esquina superior derecha de la página, haz clic en **Eliminar**. ![Botón para eliminar lanzamiento](/assets/images/help/releases/delete-release.png)
5. Da clic en **Eliminar este lanzamiento**. ![Confirmar la eliminación del lanzamiento](/assets/images/help/releases/confirm-delete-release.png)
