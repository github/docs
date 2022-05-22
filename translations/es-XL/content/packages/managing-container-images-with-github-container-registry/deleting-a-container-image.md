---
title: Deleting a container image
intro: 'You can delete a version of a private container image using GraphQL or on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### Acerca de la eliminación de paquetes

You can remove an entire container image or a specific version on {% data variables.product.prodname_dotcom %}. To delete a container image, you must use the UI. Using GraphQL to delete a container image is not supported at this time.

To delete a container image, you must have admin permissions to the container image.

When deleting public packages, be aware that you may break projects that depend on your package.



### Nombres y versiones de paquetes reservados

{% data reusables.package_registry.package-immutability %}

### Deleting a version of a user-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}
5. On the left, click **Manage versions**.
5. A la derecha de la versión que deseas eliminar, haz clic en **Delete (Eliminar)**. ![Botón para eliminar paquete](/assets/images/help/package-registry/delete-package-button.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **I understand the consequences, delete this version (Comprendo las consecuencias, eliminar esta versión)**. ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-package-deletion.png)

### Deleting a version of an organization-owned container image on {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}
5. On the left, click **Manage versions**.
5. A la derecha de la versión que deseas eliminar, haz clic en **Delete (Eliminar)**. ![Botón para eliminar paquete](/assets/images/help/package-registry/delete-package-button.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **I understand the consequences, delete this version (Comprendo las consecuencias, eliminar esta versión)**. ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-package-deletion.png)
