---
title: Hacerse pasar por un usuario
intro: 'Puedes hacerte pasar por usuarios y realizar acciones en su nombre, para solucionar problemas, hacer desbloqueos y otras razones legítimas.'
permissions: Enterprise owners can impersonate users within their enterprise.
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Impersonate a user
ms.openlocfilehash: df0513c3ca2931378e656f228939540dd5ea5816
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109966'
---
## Acerca de hacerse pasar por un usuario

Si necesitas utilizar una cuenta de usuario temporalmente, por ejemplo, cuando solucionas problemas de usuario o cuando dicho usuario está indispuesto y se requiere tomar acción urgentemente, puedes comenzar una sesión de suplantación para actuar en su nombre.

Para cada sesión de suplantación, necesitas proporcionar las razones por las cuales vas a hacerte pasar por el usuario. Una sesión tiene un límite de una hora y tendrás el mismo tipo de acceso que el usuario por el cual te harás pasar.

Las acciones que realices durante una sesión de suplantación se grabarán como eventos en la bitácora de auditoría de la empresa, así como en la bitácora de seguridad del usuario suplantado. La persona por la que te hagas pasar recibirá una notificación por correo electrónico cuando la sesión de suplantación inicie. Para más información, vea "[Eventos de registro de auditoría registro para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)" y "[Revisión del registro de seguridad](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)".

## Hacerse pasar por un usuario

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
4. En la esquina superior izquierda de la página, haga clic en **Información de usuario**.

   ![Información de usuario](/assets/images/enterprise/stafftools/user-info.png)
5. En "Zona de peligro", haga clic en **Iniciar sesión en GitHub como @username**

   ![Suplantar usuario](/assets/images/enterprise/stafftools/impersonate.png)
6. Selecciona una razón del menú desplegable. Si selecciona **Otro**, tendrá que proporcionar contexto adicional en la sección **Notas**. Haga clic en **Comenzar suplantación** para iniciar la sesión.

   ![Razón para la suplantación](/assets/images/enterprise/stafftools/impersonation-reason.png)
7. Cuando esté listo para terminar la sesión de suplantación, haga clic en el banner **Regresar a la vida mundana como nombre de usuario** en la parte superior de la página.

   ![Terminar con la suplantación](/assets/images/enterprise/stafftools/end-impersonation.png)
