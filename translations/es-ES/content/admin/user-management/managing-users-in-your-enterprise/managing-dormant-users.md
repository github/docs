---
title: Administrar usuarios inactivos
redirect_from:
  - /enterprise/admin/articles/dormant-users
  - /enterprise/admin/articles/viewing-dormant-users
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant
  - /enterprise/admin/user-management/managing-dormant-users
  - /admin/user-management/managing-dormant-users
intro: '{% data reusables.enterprise-accounts.dormant-user-activity-threshold %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
ms.openlocfilehash: 7594a0fc22bef10e84334727ad9e79aa02cd1da6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146680929'
---
{% ifversion ghec %} {% data reusables.enterprise-accounts.dormant-user-release-phase %} {% endif %}

## Acerca de los usuarios inactivos

{% data reusables.enterprise-accounts.dormant-user-activity %}

{% ifversion ghes or ghae%}
## Visualizar usuarios inactivos

{% data reusables.enterprise-accounts.viewing-dormant-users %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. En la barra lateral izquierda, haga clic en **Usuarios inactivos**.
![Pestaña Usuarios inactivos](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% ifversion ghes %}
4. Para suspender todos los usuarios inactivos de esta lista, hag clic en **Suspender todos**, en la parte superior de la página.
![Botón Suspender todos](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

## Determinar si un usuario está inactivo

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
5. En la sección **Información del usuario**, un punto de color rojo con la palabra "Inactivo" indica que la cuenta del usuario está inactiva, y un punto de color verde con la palabra "Activo" indica que está activa.
![Cuenta de usuario inactiva](/assets/images/enterprise/stafftools/dormant-user.png)
![Cuenta de usuario activa](/assets/images/enterprise/stafftools/active-user.png)

## Configurar el umbral de inactividad

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. En "Umbral de inactividad", usa el menú desplegable y haz clic en el umbral de inactividad deseado.
![Menú desplegable Umbral de inactividad](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)

{% endif %}

{% ifversion ghec %}
## Descargar el reporte de usuarios inactivos desde tu cuenta empresarial

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. Para descargar el informe de usuarios inactivos (beta) como un archivo CSV, en "Otros", haga clic en {% octicon "download" aria-label="The Download icon" %} **Descargar**.
  ![Botón Descargar en "Otros" en la página Cumplimiento](/assets/images/help/business-accounts/dormant-users-download-button.png)

{% tip %}

**Sugerencia**: Para evaluar la inactividad del usuario, la actividad del usuario se limita a incluir solo su actividad vinculada a organizaciones, repositorios o eventos de inicio de sesión asociados a la empresa. Por ejemplo, si un usuario ha comentado recientemente una incidencia en un repositorio público no asociado a la empresa, puede considerarse inactivo. Pero si ha comentado recientemente una incidencia en un repositorio público asociado a una organización de tu empresa, no se considerará inactivo y no aparecerá en el informe "Usuario inactivo".

En el caso de eventos de inicio de sesión web, solo los eventos de inicio de sesión mediante un dominio de SSO vinculado a la empresa se consideran actividades de usuario asociadas a la empresa.

{% endtip %}

{% endif %}
