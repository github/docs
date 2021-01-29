---
title: Borrar una imagen de contenedor
intro: 'You can delete a specific version or all versions of a private or public container image on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/deleting-a-container-image
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### Acerca de la eliminación de paquetes

Puedes eliminar una imagen de contenedor completa o una versión específica en {% data variables.product.prodname_dotcom %}. Para borrar una imagen de contenedor, debes utilizar la IU. Por el momento no se puede utilizar GraphQLpara borrar una imagen de contenedor.

Para borrar una imagen de contenedor debes tener permisos administrativos en la misma.

Cuando borres paquetes públicos, toma en cuenta que podrías dañar proyetos que dependen de ellos.

### Borrar una versión de una imagen de contenedor que pertenezca a un usuario en {% data variables.product.prodname_dotcom %}

To only delete specific versions of a container image, you can use these steps. To delete an entire package, see "[Deleting all versions of a user-owned container image on {% data variables.product.prodname_dotcom %}](#deleting-all-versions-of-a-user-owned-container-image-on-github)."

{% data reusables.package_registry.package-settings-from-user-level %}
5. A la izquierda, da clic en **Administrar versiones**.
6. Optionally, to ensure you're seeing all of your package versions, use the "Type" drop down menu and select **All**. ![Package version type drop down menu showing option to list all versions](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. To the right of the version you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} and select **Delete version**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **I understand the consequences, delete this version (Comprendo las consecuencias, eliminar esta versión)**. ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Borrar una versión de una imagen de contenedor que pertenezca a una organización en {% data variables.product.prodname_dotcom %}

To only delete specific versions of a container image that you have admin , you can use these steps. To delete an entire package, see "[Deleting all versions of an organization-owned container image on {% data variables.product.prodname_dotcom %}](#deleting-all-versions-of-an-organization-owned-container-image-on-github)."

{% data reusables.package_registry.package-settings-from-org-level %}
5. A la izquierda, da clic en **Administrar versiones**.
6. Optionally, to ensure you're seeing all of your package versions, use the "Type" drop down menu and select **All**. ![Package version type drop down menu showing option to list all versions](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. To the right of the version you want to delete, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} and select **Delete version**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **I understand the consequences, delete this version (Comprendo las consecuencias, eliminar esta versión)**. ![Confirm package version deletion button](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Deleting all versions of a user-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}
5. On the left, click **Options**. !["Options" menu option](/assets/images/help/package-registry/options-for-container-settings.png)
6. Under "Danger zone", click **Delete this package**. ![Delete package version button](/assets/images/help/package-registry/delete-container-package-button.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this package**. ![Confirm package version deletion button](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Deleting all versions of an organization-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}
5. On the left, click **Options**. !["Options" menu option](/assets/images/help/package-registry/options-for-container-settings.png)
6. Under "Danger zone", click **Delete this package**. ![Botón para eliminar paquete](/assets/images/help/package-registry/delete-container-package-button.png)
6. To confirm deletion, type the package name and click **I understand the consequences, delete this package**. ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-container-package-deletion.png)
