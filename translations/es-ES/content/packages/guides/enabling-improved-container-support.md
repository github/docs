---
title: Habilitar el soporte de contenedores mejorado
intro: 'Para utilizar el {% data variables.product.prodname_github_container_registry %}, debes habilitarlo para tu cuenta de usuario o de organización.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
versions:
  free-pro-team: '*'
---

{% note %}

**Nota:** El {% data variables.product.prodname_github_container_registry %} se encuentra actualmente en su fase de beta público y está sujeto a cambios. Durante el beta, el almacenamiento y el ancho de banda son gratuitos. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)".

{% endnote %}

### Habilitar el {% data variables.product.prodname_github_container_registry %} para tu cuenta personal

Una vez que habilites el {% data variables.product.prodname_github_container_registry %} para tu cuenta de usuario personal, puedes publicar contenedores en el {% data variables.product.prodname_github_container_registry %}, los cuales le pertenezcan a dicha cuenta.

Para utilizar el {% data variables.product.prodname_github_container_registry %} dentro de una organización, el propietario de ésta debe habilitar la característica para los miembros de la misma.

{% data reusables.feature-preview.feature-preview-setting  %}
2. A la izquierda, selecciona "mejorar el soporte de contenedores" y luego da clic en **Habilitar**. ![Soporte de contenedores mejorado](/assets/images/help/settings/improved-container-support.png)

### Habilitar el {% data variables.product.prodname_github_container_registry %} para tu cuenta de organización

Antes de que los miembros o propietarios de una organización puedan publicar imágenes de contenedores en el {% data variables.product.prodname_github_container_registry %}, un propietario de la organización debe habilitar la vista previa de características para la misma.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. A la izquierda, da clic en **Paquetes**.
5. Debajo de "Soporte mejorado para contenedores", selecciona "Habilitar el soporte mejorado para contenedores" y da clic en **Guardar**. ![Opción para habilitar el soporte del registro de contenedores y botón de guardar](/assets/images/help/package-registry/enable-improved-container-support-for-orgs.png)
6. Debajo de "Creación de contenedores", selecciona si quieres habilitar la creación de imágenes de contenedor privadas o públicas.
    - Para habilitar a los miembros de la organización para que creen imágenes de contenedor, da clic en **Públicas**.
    - Para habilitar a los miembros de la organización para que creen imágenes de contenedor que solo sean visibles para otros miembros de la organización, da clic en **Privadas**. Puedes personalizar aún más la visibilidad de las imagenes de contenedor privadas. Para obtener más información, consulta la sección "[Configurar el control de accesos y la visibilidad para las imagenes de contenedor](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)".

    ![Opciones para habilitar los paquetes públicos o privados ](/assets/images/help/package-registry/package-creation-org-settings.png)
