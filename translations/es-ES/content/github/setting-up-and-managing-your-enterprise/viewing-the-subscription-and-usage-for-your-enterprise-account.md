---
title: Ver la suscripción y el uso de tu cuenta de empresa
intro: 'Puedes ver la suscripción actual, el uso de la licencia, las facturas, el historial de pagos y otra información de facturación de tu cuenta de empresa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Los propietarios de la empresa y los gerente de facturación pueden acceder y administrar todas las configuraciones de facturación para las cuentas de empresa.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - empresa
---

### Acerca de la facturación para las cuentas de empresa

Las cuentas empresariales actualmente están disponibles para los clientes de {% data variables.product.prodname_enterprise %} que pagan por factura. La facturación de todas las organizaciones e instancias de {% data variables.product.prodname_ghe_server %} que se encuentre conectada con tu cuenta empresarial se agregará a un cargo único de factura de todos tus servicios de pago de {% data variables.product.prodname_dotcom_the_website %} (inlcuyendo las licencias de pago en las organizaciones, paquetes de datos de {% data variables.large_files.product_name_long %},{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %} uso de {% data variables.product.prodname_GH_advanced_security %},{% endif %} y suscripciones de apps de {% data variables.product.prodname_marketplace %}).

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obtener más información, consulta la sección "[Conectar una suscripción de Azure a tu empresa](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)".{% endif %}

Para obtener más información acerca de administrar a los gerentes de facturación, consulta la sección "[Invitar a las personas a administrar tu empresa](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)".

### Ver la suscripción y el uso de tu cuenta de empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Debajo de
"{% if currentVersion == "free-pro-team@latest" %}Licencias{% else %}licencias{% endif %}de usuario", visualiza el total de tus licencias, cantidad de licencias utilizadas, y la fecha de vencimiento de tu suscripción.
  {% if currentVersion == "free-pro-team@latest" %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Información de licencia y suscripción en las configuraciones de facturación de la empresa](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. Opcionalmente, para ver los detalles del uso de la licencia o para descargar un archivo de
{% if currentVersion == "free-pro-team@latest" %}CSV{% elsif enterpriseServerVersions contains currentVersion %}JSON{% endif %} con detalles de la licencia{% if currentVersion == "free-pro-team@latest" %}, a la derecha de "Licencias de Usuario"{% endif %}, da clic en **Ver{% if currentVersion == "free-pro-team@latest" %}detalles{% elsif enterpriseServerVersions contains currentVersion %}usuarios{% endif %}** o {% if currentVersion == "free-pro-team@latest" %}{% octicon "download" aria-label="The download icon" %}{% elsif enterpriseServerVersions contains currentVersion %}**Exportar uso de la licencia**{% endif %}.{% if currentVersion == "free-pro-team@latest" %}
  ![Botón de "Ver detalles" y botón con icono de descargar a la derecha de "Licencia de usuario"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}
{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %}
1. Opcionalmente, para ver los detalles de uso de otras características, en la barra lateral izquierda, da clic en **Facturación**. ![Pestaña de facturación en la barra lateral de parámetros de la cuenta de empresa](/assets/images/help/business-accounts/settings-billing-tab.png)

### Leer más

- "[Acerca de la facturación de GitHub Actions](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions#about-billing-for-github-actions)"
- "[Acerca de la facturación para el Almacenamiento de Archivos Grandes de Git](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-git-large-file-storage)"
- "[Acerca de las licencias para {% data variables.product.prodname_GH_advanced_security %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)"

{% endif %}
