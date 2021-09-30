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
topics:
  - Repositories
shortTitle: Administrar los lanzamientos
---

{% ifversion fpt or ghes > 3.0 or ghae %}

## Acerca de la administración de lanzamientos

You can create new releases with release notes, @mentions of contributors, and links to binary files, as well as edit or delete existing releases.

{% ifversion fpt %}
También puedes publicar una acción desde un lanzamiento específico en {% data variables.product.prodname_marketplace %}. Para obtener más información, consulta la sección "<a href="/actions/creating-actions/publishing-actions-in-github-marketplace" class="dotcom-only">Publicar una acción en {% data variables.product.prodname_marketplace %}</a>".

Puedes elegir si los objetos de {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) se incluirán en los archivos ZIP y .tar que cree {% data variables.product.product_name %} para cada lanzamiento. Para obtener más información, consulta la sección "[Administrar los objetos de {% data variables.large_files.product_name_short %} en los archivos de tu repositorio](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)".
{% endif %}
{% endif %}

## Crear un lanzamiento

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Haz clic en **Borrador de un nuevo lanzamiento**. ![Botón Borrador de lanzamientos](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt %}Click **Choose a tag** and type{% else %}Type{% endif %} a version number for your release.
   {% ifversion fpt %}
   ![Enter a tag](/assets/images/help/releases/releases-tag-create.png)
1. Click **Create new tag**. ![Confirm you want to create a new tag](/assets/images/help/releases/releases-tag-create-confirm.png)
   {% else %}
   ![Versión de lanzamientos con etiquetas](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
5. Utiliza el menú desplegable para seleccionar la rama que contiene el proyecto que quieres lanzar.
   {% ifversion fpt %}![Choose a branch](/assets/images/help/releases/releases-choose-branch.png)
   {% else %}![Rama de lanzamientos con etiquetas](/assets/images/enterprise/releases/releases-tag-branch.png)
   {% endif %}
6. Escribe un título y una descripción para tu lanzamiento.
   {%- ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}
   If you @mention any {% data variables.product.product_name %} users in the description, the published release will include a **Contributors** section with an avatar list of all the mentioned users.
   {%- endif %}
   ![Descripción de lanzamientos](/assets/images/help/releases/releases_description.png)
7. Opcionalmente, para incluir los archivos binarios tales como programas compilados en tu lanzamiento, arrastra y suelta o selecciona manualmente los archivos en la caja de binarios. ![Proporcionar un DMG con el lanzamiento](/assets/images/help/releases/releases_adding_binary.gif)
8. Para notificar a los usuarios que el lanzamiento no está listo para producción y puede ser inestable, selecciona **Esto es un pre-lanzamiento**. ![Casilla de verificación para marcar un lanzamiento como prelanzamiento](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt %}
1. Opcionalmente, selecciona **Crear un debate para este lanzamiento** y luego, selecciona el menú desplegable de **Categoría** y haz clic en aquella que describa el debate de dicho lanzamiento. ![Casilla de verificación para crear un debate de lanzamiento y menú desplegable para elegir una categoría](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
9. Si estás listo para publicitar tu lanzamiento, haz clic en **Publicar lanzamiento**. Para seguir trabajando luego en el lanzamiento, haz clic en **Guardar borrador**. ![Botones Publicar lanzamiento y Borrador de lanzamiento](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}
   You can then view your published or draft releases in the releases feed for your repository. For more information, see "[Viewing your repository's releases and tags](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."

   ![Published release with @mentioned contributors](/assets/images/help/releases/releases-overview-with-contributors.png)
   {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. To create a release, use the `gh release create` subcommand. Replace `tag` with the desired tag for the release.

   ```shell
   gh release create <em>tag</em>
   ```

2. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_release_create). For example, this command creates a prerelease with the specified title and notes.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}
If you @mention any {% data variables.product.product_name %} users in the notes, the published release on {% data variables.product.prodname_dotcom_the_website %} will include a **Contributors** section with an avatar list of all the mentioned users.
{% endif %}

{% endcli %}

## Editar un lanzamiento

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. En la parte derecha de la página, junto al lanzamiento que quieres editar, da clic en **Editar lanzamiento**. ![Editar un lanzamiento](/assets/images/help/releases/edit-release.png)
4. Edit the details for the release in the form, then click **Update release**.{% ifversion fpt or ghes > 3.2 or ghae-issue-4972 %} If you add or remove any @mentions of GitHub users in the description, those users will be added or removed from the avatar list in the **Contributors** section of the release.{% endif %} ![Actualizar un lanzamiento](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Releases cannot currently be edited with {% data variables.product.prodname_cli %}.

{% endcli %}

## Eliminar un lanzamiento

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Da clic en el nombre del lanzamiento que quieres eliminar. ![Enlace para ver el lanzamiento](/assets/images/help/releases/release-name-link.png)
4. En la esquina superior derecha de la página, haz clic en **Eliminar**. ![Botón para eliminar lanzamiento](/assets/images/help/releases/delete-release.png)
5. Da clic en **Eliminar este lanzamiento**. ![Confirmar la eliminación del lanzamiento](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. To delete a release, use the `gh release delete` subcommand. Replace `tag` with the tag of the release to delete. Use the `-y` flag to skip confirmation.

   ```shell
   gh release delete <em>tag</em> -y
   ```

{% endcli %}
