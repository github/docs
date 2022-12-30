---
title: Personalizar los mensajes de usuario para tu empresa
shortTitle: Customizing user messages
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-for-your-enterprise
intro: 'Puedes crear mensajes personalizados que los usuarios verán en {% data variables.location.product_location %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Maintenance
ms.openlocfilehash: b767a651f19b6200abfc67696d98147ebf65bd9a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106439'
---
## Acerca de los mensajes de usuario

Hay varios tipos de mensajes de usuario.
- Mensajes que aparecen en la página de {% ifversion ghes %}inicio de sesión o {% endif %}cierre de sesión{% ifversion ghes or ghae %}
- Mensajes obligatorios, los cuales aparecen en una ventana emergente que debe cerrarse{% endif %}{% ifversion ghes or ghae %}
- Letreros de anuncio, los cuales aparecen en la parte superior de cada página{% endif %}

{% ifversion ghes %} {% note %}

**Nota:** Si usa SAML para la autenticación, el proveedor de identidades presenta la página de inicio de sesión y no se puede personalizar mediante {% data variables.product.prodname_ghe_server %}.

{% endnote %}

Puedes usar Markdown para dar formato al mensaje. Para más información, vea "[Acerca de la escritura y el formato en {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/)".

## Crear un mensaje de inicio de sesión personalizado

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes %}A la derecha de{% else %}En{% endif %} "Página de inicio de sesión", haga clic en **Agregar mensaje** o **Editar mensaje**.
![{% ifversion ghes %}Botón Agregar{% else %}Editar{% endif %} mensaje](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. En **Mensaje de inicio de sesión**, escriba el mensaje que quiere que vean los usuarios.
![Mensaje de inicio de sesión](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![Botón Vista previa](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. Revisar el mensaje presentado.
![Mensaje de inicio de sesión representado](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %} {% endif %}

## Crear un mensaje de cierre de sesión personalizado

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes or ghae %}A la derecha de{% else %}En{% endif %} "Página de cierre de sesión", haga clic en **Agregar mensaje** o **Editar mensaje**.
![Botón Agregar mensaje](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. En **Mensaje de cierre de sesión**, escriba el mensaje que quiere que vean los usuarios.
![Mensaje de inicio de two_factor_auth_header](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% ifversion ghes or ghae %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![Botón Vista previa](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Revisar el mensaje presentado.
![Mensaje de cierre de sesión representado](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% ifversion ghes or ghae %}
## Crear un mensaje obligatorio

Puedes crear un mensaje obligatorio que {% data variables.product.product_name %} mostrará a todos los usuarios la primera vez que inicien sesión después de que guardaste el mensaje. El mensaje aparece en una ventana emergente que el usuario debe descartar para poder usar {% data variables.location.product_location %}.

Los mensajes obligatorios tienen varios usos.

- Proporcinar información de integración para los empleados nuevos
- Indicar a los usuarios cómo obtener ayuda con {% data variables.location.product_location %}
- Garantizar que todos los usuarios leen tus condiciones de servicio para usar {% data variables.location.product_location %}

Si incluyes cajas de verificación con lenguaje de marcado en el mensaje, todas ellas deberán seleccionarse antes de que el usuario pueda descartar el mensaje. Por ejemplo, si incluyes tus condiciones de servicio en el mensaje obligatorio, puede que necesites que cada usuario seleccione una casilla para confirmar que leyó dichas condiciones.

Cada vez que un usuario vea un mensaje obligatorio, se crea un evento de bitácora de auditoría. El evento incluye la versión del mensaje que vio el usuario. Para más información, vea "[Eventos del registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

{% ifversion display-mandatory-message-again %} {% else %} {% note %}

**Nota:** Si cambias el mensaje obligatorio de {% data variables.location.product_location %}, los usuarios que ya lo hayan confirmado no verán el mensaje nuevo. 

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. A la derecha de "Mensaje obligatorio", haga clic en **Agregar mensaje**.
  ![Botón para agregar mensaje obligatorio](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. Debajo de "Mensaje obligatorio", en la casilla de texto, teclea tu mensaje.
  ![Captura de pantalla del cuadro de texto de mensaje obligatorio](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png) {%- ifversion display-mandatory-message-again %} 
1. Opcionalmente, selecciona **Mostrar mensaje actualizado a todos los usuarios, incluso si descartan el anterior**.
![Captura de pantalla de la casilla que, cuando se activa, envía mensajes obligatorios a todos los usuarios](/assets/images/enterprise/site-admin-settings/push-mandatory-message-checkbox.png) {% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% ifversion ghes or ghae %}
## Crear un letrero de anuncio global

Puedes configurar un letrero de anuncio global para que se muestre a todos los usuarios en la parte superior de cada página.

{% ifversion ghae or ghes %} También puede configurar un banner de anuncio{% ifversion ghes %} en el shell administrativo mediante una utilidad de línea de comandos o{% endif %} mediante la API. Para más información, vea {% ifversion ghes %}"[Utilidades de línea de comandos](/enterprise/admin/configuration/command-line-utilities#ghe-announce)" y {% endif %}"[Administración de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements)".
{% else %}

También puedes configurar un letrero de anuncio en el shell administrativo utilizando una utilidad de línea de comandos. Para más información, vea "[Utilidades de línea de comandos](/enterprise/admin/configuration/command-line-utilities#ghe-announce)".

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. {% ifversion ghes or ghae %}A la derecha de{% else %}En{% endif %} "Anuncio", haga clic en **Agregar anuncio**.
  ![Botón Agregar anuncio](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Debajo de "Anuncio", en el campo de texto, teclea el anuncio que quieras mostrar en un letrero.
  ![Campo de texto para agregar el anuncio](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Opcionalmente, debajo de "Vence en", selecciona el menú desplegable de calendario y da clic en la fecha de vencimiento.
  ![Menú desplegable de calendario para elegir la fecha de expiración](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png){% ifversion ghe-announce-dismiss %}
1. Opcionalmente, para permitir que cada usuario descarte el anuncio, selecciona **Descartable por el usuario**.

   ![Captura de pantalla de la casilla "Descartable por el usuario"](/assets/images/enterprise/site-admin-settings/user-dismissible-checkbox.png){% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %} {% endif %}
