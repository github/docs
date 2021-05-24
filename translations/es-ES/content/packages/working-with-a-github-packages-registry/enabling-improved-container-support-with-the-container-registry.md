---
title: Enabling improved container support with the Container registry
intro: 'To use the {% data variables.product.prodname_container_registry %}, you must enable it for your user or organization account.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/container-guides-for-github-packages/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  free-pro-team: '*'
---

{% note %}

**Note:** The {% data variables.product.prodname_container_registry %} is currently in public beta and subject to change. Durante el beta, el almacenamiento y el ancho de banda son gratuitos. Para obtener más información, consulta la sección "[Introducción a las {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages)".

{% endnote %}

{% data reusables.package_registry.docker-vs-container-registry %}

### Enabling the {% data variables.product.prodname_container_registry %} for your personal account

Once the {% data variables.product.prodname_container_registry %} is enabled for your personal user account, you can publish containers to the {% data variables.product.prodname_container_registry %} owned by your user account.

To use the {% data variables.product.prodname_container_registry %} within an organization, the organization owner must enable the feature for organization members.

{% data reusables.feature-preview.feature-preview-setting  %}
2. A la izquierda, selecciona "mejorar el soporte de contenedores" y luego da clic en **Habilitar**. ![Soporte de contenedores mejorado](/assets/images/help/settings/improved-container-support.png)

### Enabling the {% data variables.product.prodname_container_registry %} for your organization account

Before organization owners or members can publish container images to the {% data variables.product.prodname_container_registry %}, an organization owner must enable the feature preview for the organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. A la izquierda, da clic en **Paquetes**.
5. Debajo de "Soporte mejorado para contenedores", selecciona "Habilitar el soporte mejorado para contenedores" y da clic en **Guardar**. ![Opción para habilitar el soporte del registro de contenedores y botón de guardar](/assets/images/help/package-registry/enable-improved-container-support-for-orgs.png)
6. Debajo de "Creación de contenedores", elige si quieres habilitar la creación de imágenes de contenedor públicas, privadas o internas.
    - To enable organization members to create public container images, select **Public**.
    - To enable organization members to create private container images that are only visible to other organization members, select **Private**. Puedes personalizar aún más la visibilidad de las imagenes de contenedor privadas. For more information, see "[Configuring a package's access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."
    - **For {% data variables.product.prodname_ghe_cloud %} only:** To enable organization members to create internal container images that are only visible to other organization members, select **Internal**. ![Opciones de visibilidad para las imágenes de contenedor que publican los miembros de la organización](/assets/images/help/package-registry/container-creation-org-settings.png)
