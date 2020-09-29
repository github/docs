---
title: Configurar la visibilidad predeterminada de los nuevos repositorios en tu aparato
intro: 'Puedes establecer la visibilidad predeterminada para todos los repositorios nuevos creados a través de la interfaz web en tu aparato {% data variables.product.prodname_ghe_server %} para que sean privados o públicos.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
versions:
  enterprise-server: '*'
---

Cada que alguien crea un repositorio nuevo en {% data variables.product.product_location_enterprise %}, esta persona debe escoger un tipo de visibilidad para el mismo. Cuando configuras un tipo de visibilidad predeterminado para la instancia, puedes escoger cuál tipo de visibilidad se seleccionará predeterminadamente. Para obtener más información sobre los tipos de visibilidad para los repositorios, visita "[Acerca de la visibilidad de los repositorios](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

Si un administrador de sitio revoca a los miembros el privilegio de crear ciertos tipos de repositorios, estos no podrán crear dicho tipo de repositorio aún si la configuración de visibilidad esté predeterminada para ello. Para obtener más información, consulta "[Restringir la creación de repositorios en tu instancia](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)."

{% tip %}

**Consejo:** Puedes limitar la capacidad para cambiar la visibilidad de un repositorio solo para los administradores del sitio. Para obtener más información, consulta "[Evitar que los usuarios cambien la visibilidad de un repositorio](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility)."

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Debajo de "Default repository visibility" (visibilidad predeterminada del repositorio), utiliza el menú desplegable y selecciona un tipo de visibilidad predeterminado. ![Menú desplegable para elegir la visibilidad de repositorios predeterminada para tu instancia](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}
