---
title: Configurar GitHub Pages para tu empresa
intro: 'Puedes habilitar o inhabilitar {% data variables.product.prodname_pages %} para tu empresa{% ifversion ghes %} y elegir si quieres que los sitios sean accesibles al público en general{% endif %}.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-github-pages-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Pages
shortTitle: Configure GitHub Pages
ms.openlocfilehash: 1cb2bd78f006bfd86a3f0a2e42db4fcf2cea3b73
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112881'
---
{% ifversion ghes %}

## Habilitar los sitios públicos para {% data variables.product.prodname_pages %}

Si se habilitó el modo privado en tu empresa, el público en general no podrá acceder a los sitios de {% data variables.product.prodname_pages %} que estén hospedados en tu empresa a menos de que habilites los sitios públicos.

{% warning %}

**Advertencia:** Si habilita los sitios públicos para {% data variables.product.prodname_pages %}, todos los sitios de todos los repositorios de la empresa serán accesibles para el público.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
4. Seleccione **Páginas públicas**.
  ![Casilla para habilitar Páginas públicas](/assets/images/enterprise/management-console/public-pages-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## Inhabilitar {% data variables.product.prodname_pages %} para tu empresa

Si el aislamiento de subdominios está inhabilitado en tu empresa, también debes inhabilitar las {% data variables.product.prodname_pages %} para protegerte de vulnerabilidades de seguridad potenciales. Para más información, vea "[Habilitación del aislamiento de subdominios](/admin/configuration/enabling-subdomain-isolation)".

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. Anule la selección de **Habilitar páginas**.
  ![Casilla para deshabilitar {% data variables.product.prodname_pages %}](/assets/images/enterprise/management-console/pages-select-button.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.pages-tab %}
1. En "Directivas de páginas", anule la selección de **Habilitar {% data variables.product.prodname_pages %}** .
  ![Casilla para deshabilitar {% data variables.product.prodname_pages %}](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png) {% data reusables.enterprise-accounts.pages-policies-save %}

{% endif %}

{% ifversion ghes > 3.4 %}

## Configuración de los encabezados de respuesta de {% data variables.product.prodname_pages %} para la empresa

Puede agregar o invalidar encabezados de respuesta para sitios de {% data variables.product.prodname_pages %} hospedados por {% data variables.product.product_location %}.

{% warning %}

**Advertencia:** Asegúrese de que los encabezados de respuesta están configurados correctamente antes de guardarlos. Las configuraciones incorrectas pueden afectar negativamente a la seguridad de {% data variables.product.product_location %}.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. Escriba la configuración de los encabezados y, después, haga clic en **Agregar encabezados**.
   - En el campo **Nombre del encabezado HTTP**, escriba el nombre del encabezado. La longitud del nombre del encabezado debe tener menos de 128 caracteres.
   - En el campo **Valor del encabezado HTTP**, escriba el valor del encabezado. La longitud del valor del encabezado debe tener menos de 300 caracteres.
![Campos de nombre y valor del encabezado de respuesta de {% data variables.product.prodname_pages %} en {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/pages-override-header-section.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}
## Información adicional

- "[Habilitación del modo privado](/admin/configuration/enabling-private-mode)" {% endif %}
