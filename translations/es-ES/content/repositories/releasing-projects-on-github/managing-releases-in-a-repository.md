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
shortTitle: Administrar los lanzamientos
---

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}

## Acerca de la administración de lanzamientos

Puedes crear lanzamientos nuevos con notas de lanzamiento, @menciones de contribuyentes y enlaces a archivos binarios, así como editar o borrar los lanzamientos existentes.

{% ifversion fpt or ghec %}
También puedes publicar una acción desde un lanzamiento específico en {% data variables.product.prodname_marketplace %}. Para obtener más información, consulta la sección "<a href="/actions/creating-actions/publishing-actions-in-github-marketplace" class="dotcom-only">Publicar una acción en {% data variables.product.prodname_marketplace %}</a>".

Puedes elegir si los objetos de {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) se incluirán en los archivos ZIP y .tar que cree {% data variables.product.product_name %} para cada lanzamiento. Para obtener más información, consulta la sección "[Administrar los objetos de {% data variables.large_files.product_name_short %} en los archivos de tu repositorio](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)".
{% endif %}
{% endif %}

## Crear un lanzamiento

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Haz clic en **Borrador de un nuevo lanzamiento**.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}![Releases draft button](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![Releases draft button](/assets/images/help/releases/draft_release_button.png){% endif %}
4. {% ifversion fpt or ghec %}Click **Choose a tag**, type{% else %}Type{% endif %} a version number for your release{% ifversion fpt or ghec %}, and press **Enter**{% endif %}. Como alternativa, selecciona una etiqueta existente.
   {% ifversion fpt or ghec %}
   ![Ingresa una etiqueta](/assets/images/help/releases/releases-tag-create.png)
5. Si estás creando una etiqueta nueva, haz clic en **Crear etiqueta nueva**. ![Confirma si quieres crear una etiqueta nueva](/assets/images/help/releases/releases-tag-create-confirm.png)
   {% else %}
   ![Versión de lanzamientos con etiquetas](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
5. Si creaste una etiqueta nueva, utiliza el menú desplegable para seleccionar la rama que contiene el proyecto que quieres lanzar.
   {% ifversion fpt or ghec %}![Elige una rama](/assets/images/help/releases/releases-choose-branch.png)
   {% else %}![Rama de lanzamientos con etiquetas](/assets/images/enterprise/releases/releases-tag-branch.png)
   {% endif %}
6. Escribe un título y una descripción para tu lanzamiento.
   {%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4972 %}
   Si @mencionas a cualquier usuario de {% data variables.product.product_name %} en la descripción, el lanzamiento publicado incluirá una sección de **Contribuyentes** con una lista de avatares de los usuarios mencionados.
   {%- endif %}
   {% ifversion fpt or ghec %} Como alternativa, puedes generar tus notas de lanzamiento automáticamente dando clic en **Generar notas de lanzamiento automáticamente**.
   {% endif %}
   ![Descripción de lanzamientos](/assets/images/help/releases/releases_description_auto.png)
7. Opcionalmente, para incluir los archivos binarios tales como programas compilados en tu lanzamiento, arrastra y suelta o selecciona manualmente los archivos en la caja de binarios. ![Proporcionar un DMG con el lanzamiento](/assets/images/help/releases/releases_adding_binary.gif)
8. Para notificar a los usuarios que el lanzamiento no está listo para producción y puede ser inestable, selecciona **Esto es un pre-lanzamiento**. ![Casilla de verificación para marcar un lanzamiento como prelanzamiento](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt or ghec %}
1. Optionally, if {% data variables.product.prodname_discussions %} are enabled in the repository, select **Create a discussion for this release**, then select the **Category** drop-down menu and click a category for the release discussion. ![Casilla de verificación para crear un debate de lanzamiento y menú desplegable para elegir una categoría](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
9. Si estás listo para publicitar tu lanzamiento, haz clic en **Publicar lanzamiento**. Para seguir trabajando luego en el lanzamiento, haz clic en **Guardar borrador**. ![Botones Publicar lanzamiento y Borrador de lanzamiento](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4972 or ghae-issue-4974 %}
   Entonces podrás ver tus lanzamientos publicados o en borrador dentro de las noticias de lanzamientos de tu repositorio. Para obtener más información, consulta la sección "[Ver las etiquetas y lanzamientos de tu repositorio](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)".

   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
   ![Lanzamiento publicado con contribuyentes @mencionados](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
   {% else %}
   ![Lanzamiento publicado con contribuyentes @mencionados](/assets/images/help/releases/releases-overview-with-contributors.png)
   {% endif %}
   {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. Para crear un lanzamiento, utiliza el subcomando `gh release create`. Reemplaza `tag` con la etiqueta deseada para el lanzamiento.

   ```shell
   gh release create <em>tag</em>
   ```

2. Sigue los mensajes interactivos. Como alternativa, puedes especificar los argumentos para omitir estos mensajes. Para obtener más información sobre los argumentos posibles, consulta [el manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_release_create). Por ejemplo, este comando crea un pre-lanzamiento con el título y notas especificados.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.2 or ghae-issue-4972 or ghec %}
Si @mencionas a cualquier usuario de {% data variables.product.product_name %} en las notas, el lanzamiento publicado en el {% data variables.product.prodname_dotcom_the_website %} incluirá una sección de **Contribuyentes** con una lista de avatares de todos los usuarios mencionados.
{% endif %}

{% endcli %}

## Editar un lanzamiento

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. On the right side of the page, next to the release you want to edit, click {% octicon "pencil" aria-label="The edit icon" %}. ![Editar un lanzamiento](/assets/images/help/releases/edit-release-pencil.png)
{% else %}
3. En la parte derecha de la página, junto al lanzamiento que quieres editar, da clic en **Editar lanzamiento**. ![Editar un lanzamiento](/assets/images/help/releases/edit-release.png)
{% endif %}
4. Edita los detalles del lanzamiento en el formato, luego haz clic en **Actualizar lanzamiento**.{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4972 %} Si agregas o eliminas cualquier @mención de los usuarios de GitHub en la descripción, estos se agregarán o eliminarán de la lista de avatares en la sección de **Contribuyentes** del lanzamiento.{% endif %} ![Actualizar un lanzamiento](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Los lanzamientos no pueden editarse con {% data variables.product.prodname_cli %} actualmente.

{% endcli %}

## Eliminar un lanzamiento

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. On the right side of the page, next to the release you want to delete, click {% octicon "trash" aria-label="The trash icon" %}. ![Borrar un lanzamiento](/assets/images/help/releases/delete-release-trash.png)
{% else %}
3. Da clic en el nombre del lanzamiento que quieres eliminar. ![Enlace para ver el lanzamiento](/assets/images/help/releases/release-name-link.png)
4. En la esquina superior derecha de la página, haz clic en **Eliminar**. ![Botón para eliminar lanzamiento](/assets/images/help/releases/delete-release.png)
{% endif %}
5. Da clic en **Eliminar este lanzamiento**. ![Confirmar la eliminación del lanzamiento](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. Para borrar un lanzamiento, utiliza el subcomando `gh release delete`. Reemplaza `tag` con la etiqueta del lanzamiento que se debe borrar. Utiliza el marcador `-y` para omitir la confirmación.

   ```shell
   gh release delete <em>tag</em> -y
   ```

{% endcli %}
