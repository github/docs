---
title: Administrar lanzamientos en un repositorio
intro: Puedes crear lanzamientos que desees poner en conjunto y entregar iteraciones de un proyecto a los usuarios.
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
  - /github/administering-a-repository/managing-releases-in-a-repository
  - /github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage releases
ms.openlocfilehash: d8a5f77941c7c46656c891c0892af95d0b1b8637
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107489'
---
## Acerca de la administración de lanzamientos

Puede crear versiones con notas de la versión, @mentions de colaboradores y vínculos a archivos binarios, así como editar o borrar las versiones existentes. También puedes crear, modificar y eliminar versiones mediante Releases API. Para obtener más información, consulta "[Versiones](/rest/releases/releases)" en la documentación de la API REST.

{% ifversion fpt or ghec %} También puede publicar una acción para una versión específica en {% data variables.product.prodname_marketplace %}. Para más información, vea "[Publicación de una acción en {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace)".

Puedes elegir si los objetos de {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) se incluirán en los archivos ZIP y .tar que cree {% data variables.product.product_name %} para cada lanzamiento. Para más información, vea "[Administración de objetos {% data variables.large_files.product_name_short %} en archivos del repositorio](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)".
{% endif %}

## Crear un lanzamiento

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. Haga clic en **Borrador de una nueva versión**.

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}![Botón Borrador de lanzamientos](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![Botón Borrador de lanzamientos](/assets/images/help/releases/draft_release_button.png){% endif %}
1. Haz clic en **Elegir una etiqueta**, escribe un número de versión y presiona **ENTRAR**. Como alternativa, selecciona una etiqueta existente.

   ![Ingresa una etiqueta](/assets/images/help/releases/releases-tag-create.png)
1. Si va a crear una etiqueta, haga clic en **Crear etiqueta**.

   ![Captura de pantalla de la confirmación de que quieres crear una etiqueta.](/assets/images/help/releases/releases-tag-create-confirm.png)
   
1. Si creaste una etiqueta nueva, utiliza el menú desplegable para seleccionar la rama que contiene el proyecto que quieres lanzar.

   
   ![Captura de pantalla de la lista desplegable para elegir una rama.](/assets/images/help/releases/releases-choose-branch.png)

   

{%- data reusables.releases.previous-release-tag %}
1. Escribe un título y una descripción para tu lanzamiento.
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Si usas @mention para mencionar a algún usuario en la descripción, la versión publicada incluirá una sección **Colaboradores** con una lista de avatares de todos los usuarios mencionados.
   {%- endif %} {% ifversion fpt or ghec or ghes > 3.3 %} Como alternativa, puedes generar automáticamente las notas de la versión si haces clic en {% ifversion previous-release-tag %}**Generar notas de la versión**{% else %}**Generar automáticamente notas de la versión**{% endif %}.{% endif %}{% ifversion previous-release-tag %}

   ![Captura de pantalla de la descripción de las versiones.](/assets/images/help/releases/releases_description_auto.png){% else %}

   ![Captura de pantalla de la descripción de las versiones.](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}

1. Opcionalmente, para incluir los archivos binarios tales como programas compilados en tu lanzamiento, arrastra y suelta o selecciona manualmente los archivos en la caja de binarios.

   ![GIF animado en el que se muestra cómo se proporciona un DMG con la versión.](/assets/images/help/releases/releases_adding_binary.gif)

1. Para notificar a los usuarios que la versión no está lista para producción y puede ser inestable, seleccione **Es una versión preliminar**.

   ![Captura de pantalla de la casilla para marcar una versión como versión preliminar.](/assets/images/help/releases/prerelease_checkbox.png)

{%- ifversion releases-set-latest-release %} 
1. Opcionalmente, puedes seleccionar **Establecer como versión más reciente**. Si no seleccionas esta opción, la etiqueta de versión más reciente se asignará automáticamente en función del Versionamiento Semántico.

   ![Captura de pantalla de la casilla para marcar una versión como versión más reciente.](/assets/images/help/releases/latest-release-checkbox.png)

{%- endif %}  
{%- ifversion discussions %}
1. Opcionalmente, si se han habilitado los {% data variables.product.prodname_discussions %} en el repositorio, seleccione **Crear un debate para esta versión**, después el menú desplegable **Categoría** y haga clic en una categoría para el debate de la versión.

   ![Captura de pantalla de la casilla para crear un debate de versión y del menú desplegable para elegir una categoría.](/assets/images/help/releases/create-release-discussion.png)

{%- endif %}
1. Si está listo para publicar la versión, haga clic en **Publish release** (Publicar versión). Para trabajar después en la versión, haga clic en **Save draft** (Guardar borrador).
   ![Botones Publicar versión y Guardar borrador](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghae > 3.3 %} Después, puedes ver las versiones publicadas o los borradores en la fuente de versiones del repositorio. Para obtener más información, consulta "[Captura de pantalla de las versiones y etiquetas del repositorio](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)".

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %} ![Versión publicada con colaboradores @mentioned](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% else %} ![Versión publicada con colaboradores @mentioned](/assets/images/help/releases/releases-overview-with-contributors.png) {% endif %} {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. Para crear una versión, use el subcomando `gh release create`. Reemplace `tag` con la etiqueta que quiera para la versión.

   ```shell
   gh release create TAG
   ```

2. Sigue los mensajes interactivos. Como alternativa, puedes especificar los argumentos para omitir estos mensajes. Para más información sobre los posibles argumentos, vea [el manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_release_create). Por ejemplo, este comando crea un pre-lanzamiento con el título y notas especificados.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} Si usas @mention para mencionar a algún usuario de {% data variables.product.product_name %} en las notas, la versión publicada en {% data variables.product.prodname_dotcom_the_website %} incluirá una sección **Colaboradores** con una lista de avatares de todos los usuarios mencionados.
{% endif %}

{% endcli %}

## Editar un lanzamiento

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. De lado derecho de la página, junto al lanzamiento que quieras editar, haz clic en {% octicon "pencil" aria-label="The edit icon" %}.
  ![Edición de una versión](/assets/images/help/releases/edit-release-pencil.png) {% else %}
3. En la parte derecha de la página, junto a la versión que quiere editar, haga clic en **Editar versión**.
  ![Edición de una versión](/assets/images/help/releases/edit-release.png) {% endif %}
4. Edita los detalles de la versión en el formulario y, después, haz clic en **Actualizar versión**.{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Si agregas o eliminas @mentions de los usuarios de GitHub en la descripción, estos se agregarán o eliminarán de la lista de avatares en la sección **Colaboradores** de la versión.{% endif %} ![Actualización de una versión](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Los lanzamientos no pueden editarse con {% data variables.product.prodname_cli %} actualmente.

{% endcli %}

## Eliminar un lanzamiento

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. De lado derecho de la página, junto al lanzamiento que quieras borrar, haz clic en {% octicon "trash" aria-label="The trash icon" %}.
  ![Eliminación de una versión](/assets/images/help/releases/delete-release-trash.png) {% else %}
3. Da clic en el nombre del lanzamiento que quieres eliminar.
  ![Vínculo para ver la versión](/assets/images/help/releases/release-name-link.png)
4. En la esquina superior derecha de la página, haga clic en **Eliminar**.
  ![Botón para eliminar la versión](/assets/images/help/releases/delete-release.png) {% endif %}
5. Haga clic en **Eliminar esta versión**.
  ![Confirmación de la eliminación de la versión](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. Para eliminar una versión, use el subcomando `gh release delete`. Reemplace `tag` con la etiqueta de la versión que se va a eliminar. Use la marca `-y` para omitir la confirmación.

   ```shell
   gh release delete TAG -y
   ```

{% endcli %}
