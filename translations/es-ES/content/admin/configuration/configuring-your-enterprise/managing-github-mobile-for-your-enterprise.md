---
title: Administrar GitHub Móvil para tu empresa
intro: 'Puedes decidir si los usuarios pueden utilizar {% data variables.product.prodname_mobile %} para conectarse a {% data variables.product.product_location %}.'
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
shortTitle: Manage GitHub Mobile
ms.openlocfilehash: f46673c16611a7f1ced6d0476c6ad3d79807f6d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062276'
---
## Acerca de {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} permite a los usuarios clasificar y administrar el trabajo, y colaborar en él, en {% data variables.product.product_location %} desde un dispositivo móvil después de una autenticación correcta. {% data reusables.mobile.about-mobile %} Para obtener más información, vea "[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)".

Puede permitir o impedir que los usuarios usen {% data variables.product.prodname_mobile %} para autenticarse en {% data variables.product.product_location %} y acceder a los datos de la instancia. De manera predeterminada, {% data variables.product.prodname_mobile %} es{% ifversion ghes > 3.3 %} habilitado para las personas que usan {% data variables.product.product_location %}.{% else %} no está habilitado para las personas que usan {% data variables.product.product_location %}. A fin de permitir la conexión a la instancia con {% data variables.product.prodname_mobile %}, debe habilitar la característica para la instancia.{% endif %}

{% ifversion ghes < 3.6 %} {% note %}

**Nota**: Si actualiza a {% data variables.product.prodname_ghe_server %} 3.4.0 o posterior y no se ha deshabilitado o habilitado previamente {% data variables.product.prodname_mobile %}, {% data variables.product.prodname_mobile %} se habilitará de manera predeterminada. Si ha deshabilitado o habilitado previamente {% data variables.product.prodname_mobile %} para su instancia, se conservará su preferencia durante la actualización. Para obtener más información sobre cómo actualizar la instancia, vea "[Actualización de {% data variables.product.product_name %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)".

{% endnote %} {% endif %}

## Habilitar o inhabilitar {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}
1. En la barra lateral de la izquierda, haga clic en **Mobile** (Dispositivos móviles).
  !["Dispositivos móviles" en la barra lateral izquierda para la consola de administración de {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/click-mobile.png)
1. En "GitHub Mobile" (GitHub Móvil), seleccione o anule la selección de **Enable GitHub Mobile Apps** (Habilitar aplicaciones de GitHub Móvil).
  ![Casilla para "Habilitar aplicaciones de GitHub Móvil" en la consola de administración de {% data variables.product.prodname_ghe_server %}](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png) {% data reusables.enterprise_management_console.save-settings %}
