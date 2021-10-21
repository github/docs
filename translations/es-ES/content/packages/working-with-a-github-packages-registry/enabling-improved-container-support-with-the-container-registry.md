---
title: Habilitar la compatibilidad mejorada para contenedores con el registro de contenedores
intro: 'Para utilizar el {% data variables.product.prodname_container_registry %}, debes habilitarlo para tu cuenta de organización o de usuario.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/container-guides-for-github-packages/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  free-pro-team: '*'
---

{% note %}

**Nota:** El {% data variables.product.prodname_container_registry %} se encuentra actualmente en beta público y está sujeto a cambios. Durante el beta, el almacenamiento y el ancho de banda son gratuitos. Para obtener más información, consulta la sección "[Introducción a las {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages)".

{% endnote %}

{% data reusables.package_registry.docker-vs-container-registry %}

### Habilitar el {% data variables.product.prodname_container_registry %} para tu cuenta personal

Una vez que se habilita el {% data variables.product.prodname_container_registry %} para tu cuenta de usuario personal, puedes publicar los contenedores en el {% data variables.product.prodname_container_registry %} que pertenece a tu cuenta de usuario.

Para utilizar el {% data variables.product.prodname_container_registry %} dentro de una organización, el propietario de esta debe habilitar la característica para sus miembros.

{% data reusables.feature-preview.feature-preview-setting  %}
2. A la izquierda, selecciona "mejorar el soporte de contenedores" y luego da clic en **Habilitar**. ![Soporte de contenedores mejorado](/assets/images/help/settings/improved-container-support.png)

### Habilitar el {% data variables.product.prodname_container_registry %} para tu cuenta organizacional

Antes de que los propietarios o miembros de las organizaciones puedan publicar imágenes de contenedor en el {% data variables.product.prodname_container_registry %}, el propietario de la organización debe habilitar la característica de vista previa de la organización.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. A la izquierda, da clic en **Paquetes**.
5. Debajo de "Soporte mejorado para contenedores", selecciona "Habilitar el soporte mejorado para contenedores" y da clic en **Guardar**. ![Opción para habilitar el soporte del registro de contenedores y botón de guardar](/assets/images/help/package-registry/enable-improved-container-support-for-orgs.png)
6. Debajo de "Creación de contenedores", elige si quieres habilitar la creación de imágenes de contenedor públicas, privadas o internas.
    - Para habilitar a los miembros de la organización para que creen imágenes de contenedor públicas, selecciona **Públicas**.
    - Para habilitar a los miembros de la organización para que creen imágenes de contenedor que solo sean visibles para otros miembros de la misma, selecciona **Privadas**. Puedes personalizar aún más la visibilidad de las imagenes de contenedor privadas. Para obtener más información, consulta la sección "[Configurar el control de accesos y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".
    - **Únicamente para {% data variables.product.prodname_ghe_cloud %}:** Para habilitar a los miembros de las organizaciones para que creen imágenes de contenedor que solo sean visibles para otros miembros de ellas, selecciona **Intarno**. ![Opciones de visibilidad para las imágenes de contenedor que publican los miembros de la organización](/assets/images/help/package-registry/container-creation-org-settings.png)
