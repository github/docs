---
title: Habilitar comprobaciones de actualización automáticas
intro: 'Puedes habilitar comprobaciones de actualización automáticas para que {% data variables.product.product_location %} busque y descargue el último lanzamiento del {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
  - /admin/enterprise-management/enabling-automatic-update-checks
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Enable automatic update checks
ms.openlocfilehash: c566dc54958cc7d4f26a9279ea3bf8a76aafa636
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331892'
---
Cuando un paquete de actualizaciones se descarga automáticamente para {% data variables.product.product_location %}, recibirás un mensaje informándote que puedes actualizar el {% data variables.product.prodname_ghe_server %}. Los paquetes se descargan en el directorio `/var/lib/ghe-updates` de {% data variables.product.product_location %}. Para obtener más información, consulta "[Actualización de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server)".

Si hay una revisión en caliente disponible para una actualización, `.hpkg` se descargará automáticamente. En la consola de administración puedes elegir instalar el hotpatch de inmediato o programar la instalación para otro momento. Para obtener más información, consulta "[Actualización con una revisión en caliente](/enterprise/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch)".

{% tip %}

**Sugerencia:** Para habilitar las comprobaciones automáticas de actualizaciones, {% data variables.product.product_location %} debe poder conectarse a `https://github-enterprise.s3.amazonaws.com`.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. Haz clic en **Sí, comprueba automáticamente si hay actualizaciones**.
![Botón para habilitar las actualizaciones automáticas](/assets/images/enterprise/management-console/enable_updates_button.png) {% data reusables.enterprise_management_console.save-settings %}

Para saber si tu instancia está actualizada, busca el mensaje emergente en la pestaña de actualizaciones.

![Mensaje emergente que indica tu lanzamiento del servidor de GitHub Enterprise](/assets/images/enterprise/management-console/up-to-date-banner.png)

En **Registros**, puedes ver el estado de la comprobación de actualizaciones más reciente.

![Registros para actualización](/assets/images/enterprise/management-console/update-log.png)
