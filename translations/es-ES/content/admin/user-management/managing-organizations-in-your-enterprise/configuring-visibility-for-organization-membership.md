---
title: Configurar visibilidad para los miembros de la organización
intro: Puedes configurar la visibilidad para los miembros nuevos de la organización a lo largo de tu empresa como pública o privada. También puedes hacer que los miembros no puedan modificar su visibilidad de la establecida por defecto.
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - User account
shortTitle: Set membership visibility
ms.openlocfilehash: e628fab4f8aa77579e0ce89f18a70813274928b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332348'
---
{% ifversion ghes %} También puedes aplicar la configuración predeterminada de todos los miembros de la organización actuales de la instancia mediante una utilidad de línea de comandos. Por ejemplo, si quieres solicitar que la visibilidad de cada miembro de la organización sea pública, puedes establecer la configuración predeterminada como pública e implementar la predeterminada para todos los nuevos miembros en los parámetros de administración, y luego usar la utilidad de línea de comandos para implementar la configuración pública en los miembros existentes.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
3. En "Visibilidad de pertenencia a la organización predeterminada", usa el menú desplegable y haz clic en **Privado** o **Público**.
  ![Menú desplegable con opción para configurar la visibilidad predeterminada de los miembros de la organización como pública o privada](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. Opcionalmente, para evitar que los miembros cambien su visibilidad de pertenencia predeterminada, selecciona **Aplicar en los miembros de la organización**.
  ![Casilla para aplicar la configuración predeterminada a todos los miembros](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png){% ifversion ghes %}
5. Si quieres aplicar la nueva configuración de visibilidad a todos los miembros existentes, usa la utilidad de línea de comandos `ghe-org-membership-update`. Para más información, consulta "[Utilidades de línea de comandos](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-membership-update)". {% endif %}
