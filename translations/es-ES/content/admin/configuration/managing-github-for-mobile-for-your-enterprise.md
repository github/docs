---
title: Administrar a GitHub para móviles en tu empresa
intro: Puedes decidir si los usuarios autenticados pueden conectarse a {% data variables.product.product_location %} con {% data variables.product.prodname_mobile %}.
permissions: Los propietarios de las empresas pueden administrar a {% data variables.product.prodname_mobile %} para empresas en {% data variables.product.product_name %}.
versions:
  enterprise-server: '>=3.0'
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### Acerca de {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %} Para obtener más información, consulta la sección "[GitHub para móviles](/github/getting-started-with-github/github-for-mobile)."

Los miembros de tu empresa pueden utilizar {% data variables.product.prodname_mobile %} para clasificar, colaborar y administrar el trabajo en {% data variables.product.product_location %} desde un dispositivo móvil. Predeterminadamente, {% data variables.product.prodname_mobile %} se encuentra habilitado para {% data variables.product.product_location %}. Puedes permitir o dejar de permitir que los miembros de la empresa utilicen {% data variables.product.prodname_mobile %} para autenticarse en {% data variables.product.product_location %} y accedan a tus datos empresariales.

### Habilitar o inhabilitar {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
1. En la barra lateral, da clic en **Móvil**. !["Móvil" en la barra lateral izquierda para la consola de administración de {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/click-mobile.png)
1. Debajo de "GitHub para móviles", selecciona o deselecciona **Habilitar las apps de GitHub Móvil**. ![Casilla de verificación para "Habilitar las Apps de GitHub Móvil" en la consola de administración de {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png)
{% data reusables.enterprise_management_console.save-settings %}
