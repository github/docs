---
title: Administrar GitHub Móvil para tu empresa
intro: 'Puedes decidir si las personas pueden utilizar {% data variables.product.prodname_mobile %} para conectarse a {% data variables.product.product_location %}.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Mobile
redirect_from:
  - /admin/configuration/configuring-your-enterprise/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/managing-github-for-mobile-for-your-enterprise
shortTitle: Administrar GitHub Móvil
---

## Acerca de {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} permite que las personas clasifiquen, colaboren y administren el trabajo de {% data variables.product.product_location %} desde un dispositivo móvil después de autenticarse con éxito. {% data reusables.mobile.about-mobile %} Para obtener más información, consulta la sección "[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)".

Puedes permitir o dejar de permitir que las personas utilicen {% data variables.product.prodname_mobile %} para autenticarse en {% data variables.product.product_location %} y que accedan a los datos de tu instancia. Predeterminadamente, {% data variables.product.prodname_mobile %} está {% ifversion ghes > 3.3 %} habilitado para las personas que utilizan {% data variables.product.product_location %}.{% else %} inhabilitado para las personas que utilizan {% data variables.product.product_location %}. Para permitir la conexión a tu instancia con {% data variables.product.prodname_mobile %}, debes habilitar la característica para esta.{% endif %}

{% ifversion ghes < 3.6 %}
{% note %}

**Nota:** Si mejoras a {% data variables.product.prodname_ghe_server %} 3.4.0 o posterior y no has inhabilitado o habilitado {% data variables.product.prodname_mobile %} previamente, {% data variables.product.prodname_mobile %} se habilitará predeterminadamente. Si previamente inhabilitaste o habilitaste {% data variables.product.prodname_mobile %} para tu instancia, tu preferencia se preservará cuando lo mejores. Para obtener más información sobre cómo mejorar tu instancia, consulta la sección "[Mejorar {% data variables.product.product_name %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)".

{% endnote %}
{% endif %}

## Habilitar o inhabilitar {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
1. En la barra lateral, da clic en **Móvil**. !["Móvil" en la barra lateral izquierda para la consola de administración de {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/click-mobile.png)
1. Debajo de "GitHub Móvil", selecciona o deselecciona **Habilitar las Apps de GitHub Móvil**. ![Casilla de verificación para "Habilitar las Apps de GitHub Móvil" en la consola de administración de {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png)
{% data reusables.enterprise_management_console.save-settings %}
