---
title: Borrar una imagen de contenedor
intro: 'Puedes borrar una versión específica o todas las versiones de una imagen de contenedor privada o púb lica en {% data variables.product.prodname_dotcom %}.'
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

Para borrar únicamente versiones específicas de una imagen de contenedor, puedes utilizar estos pasos. Para borrar un paquete entero, consulta la sección "[Borrar todas las versiones de una imagen de contenedor que pertenece a un usuario de {% data variables.product.prodname_dotcom %}](#deleting-all-versions-of-a-user-owned-container-image-on-github)".

{% data reusables.package_registry.package-settings-from-user-level %}
5. A la izquierda, da clic en **Administrar versiones**.
6. Opcionalmente, para garantizar que estás viendo todas las versiones de tu paquete, utiliza el menú desplegable de "Tipo" y selecciona **Todos**. ![Menú desplegable del tipo de versión de un paquete que muestra la opción para listar todas las versiones](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. A la derecha de la versión que quieres borrar, da clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y selecciona **Borrar versión**. ![Botón de borrar versión del paquete](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **I understand the consequences, delete this version (Comprendo las consecuencias, eliminar esta versión)**. ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Borrar una versión de una imagen de contenedor que pertenezca a una organización en {% data variables.product.prodname_dotcom %}

Para borrar únicamente las versiones específicas de una imagen de contenedor en la que tengas permisos administrativos, puedes utilizar estos pasos. Para borrar un paquete completo, consulta la sección "[Borrar todas las versiones de una imagen de contenedor propiedad de una organización en {% data variables.product.prodname_dotcom %}](#deleting-all-versions-of-an-organization-owned-container-image-on-github)".

{% data reusables.package_registry.package-settings-from-org-level %}
5. A la izquierda, da clic en **Administrar versiones**.
6. Opcionalmente, para garantizar que estás viendo todas las versiones de tu paquete, utiliza el menú desplegable de "Tipo" y selecciona **Todos**. ![Menú desplegable del tipo de versión de un paquete que muestra la opción para listar todas las versiones](/assets/images/help/package-registry/make-all-container-versions-visible.png)
5. A la derecha de la versión que quieres borrar, da clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y selecciona **Borrar versión**. ![Botón de borrar versión del paquete](/assets/images/help/package-registry/delete-container-package-version.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **I understand the consequences, delete this version (Comprendo las consecuencias, eliminar esta versión)**. ![Botón para confirmar el borrado de la versión del paquete](/assets/images/help/package-registry/confirm-container-package-version-deletion.png)

### Borrar todas las versiones de una imagen de contenedor propiedad de un usuario en {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}
5. A la izquierda, da clic en **Opciones**. ![Opción del menú "Opciones"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Debajo de "Zona de peligro", da clic en **Borra este paquete**. ![Botón de borrar versión del paquete](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar el borrado, teclea el nombre del paquete y da clic en **Entiendo las consecuencias, borrar este paquete**. ![Botón para confirmar el borrado de la versión del paquete](/assets/images/help/package-registry/confirm-container-package-deletion.png)

### Borrar todas las versiones de una imagen de contenedor propiedad de una organización en {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}
5. A la izquierda, da clic en **Opciones**. ![Opción del menú "Opciones"](/assets/images/help/package-registry/options-for-container-settings.png)
6. Debajo de "Zona de peligro", da clic en **Borra este paquete**. ![Botón para eliminar paquete](/assets/images/help/package-registry/delete-container-package-button.png)
6. Para confirmar el borrado, teclea el nombre del paquete y da clic en **Entiendo las consecuencias, borrar este paquete**. ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-container-package-deletion.png)
