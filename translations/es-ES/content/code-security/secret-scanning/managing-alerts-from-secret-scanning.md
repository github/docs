---
title: Administración de alertas del examen de secretos
intro: Puedes ver y cerrar las alertas para los secretos que se hayan revisado en tu repositorio.
permissions: People with admin access to a repository can view and dismiss alerts.
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Manage secret alerts
ms.openlocfilehash: f7c92b975d5bf8646b25d817564bff32ffc94e1c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158673'
---
{% data reusables.secret-scanning.beta %}

## Administrar las alertas del {% data variables.product.prodname_secret_scanning %}

{% ifversion ghec %} {% note %}

**Nota**: Las alertas se crean únicamente para los repositorios que tienen habilitado {% data variables.product.prodname_secret_scanning_GHAS %}. Los secretos que se encuentran en los repositorios públicos utilizando el servicio gratuito de {% data variables.product.prodname_secret_scanning_partner%} se reportan directamente al socio, sin crear una alerta.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. En la barra lateral izquierda, haga clic en **Secret scanning alerts** (Alertas de análisis de secretos).
   {% ifversion ghes or ghec %} ![Pestaña "Alertas de análisis de secretos"](/assets/images/help/repository/sidebar-secrets.png) {% endif %} {% ifversion ghae %} ![Pestaña "Alertas de análisis de secretos"](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png) {% endif %}
1. Debajo de "Escaneo de secretos" da clic en la alerta que quieras ver.
   {% ifversion ghec %} ![Lista de alertas del análisis de secretos](/assets/images/help/repository/secret-scanning-click-alert.png) {% endif %} {% ifversion ghes %} ![Lista de alertas del análisis de secretos](/assets/images/help/repository/secret-scanning-click-alert-ghe.png) {% endif %} {% ifversion ghae %} ![Lista de alertas del análisis de secretos](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png) {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Para descartar una alerta, selecciona el menú desplegable "Descartar alerta" y haz clic en un motivo para resolver una alerta.

   ![Captura de pantalla del menú desplegable para descartar una alerta del análisis de secretos](/assets/images/help/repository/secret-scanning-dismiss-alert.png){% else %}
1. Para descartar una alerta, selecciona el menú desplegable "Marcar como" y haz clic en un motivo para resolver una alerta. 
  
   ![Captura de pantalla del menú desplegable para resolver una alerta a partir del análisis de secretos](/assets/images/enterprise/3.2/repository/secret-scanning-resolve-alert-ghe.png)

   {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Opcionalmente, agrega un comentario de descarte. El comentario de descarte se agregará a la escala de tiempo de la alerta y se puede usar como justificación durante el proceso de auditoría y creación de informes. Puedes ver el historial de todas las alertas descartadas y los comentarios del descarte en la escala de tiempo de la alerta. También puedes recuperar o establecer un comentario mediante la API {% data variables.product.prodname_secret_scanning_caps %}. El comentario está incluido en el campo `resolution_comment`. Para más información, consulta "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/secret-scanning#update-a-secret-scanning-alert)" en la documentación de la API REST.

  ![Captura de pantalla en la que se muestra cómo descartar una alerta mediante la lista desplegable "Descartar alerta", con la opción de agregar un comentario de descarte](/assets/images/help/repository/secret-scanning-dismissal-comment.png)

1. Haz clic en **Descartar alerta**.
{% endif %}

## Asegurar los secretos en riesgo

Cuando un secreto se haya confirmado en un repositorio, deberás considerarlo en riesgo. {% data variables.product.prodname_dotcom %} recomienda tomar las siguientes acciones para los secretos puestos en riesgo:

- Para un {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %} comprometido, elimina el token comprometido, crea un nuevo token y actualiza todo servicio que use el token antiguo. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %} para la línea de comandos](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)".
{%- ifversion token-audit-log %}
  - {% ifversion ghec %} Si tu organización es propiedad de una cuenta empresarial, identifica mediante la opción {% else %}Identificar{% endif %} las acciones realizadas por el token en peligro en los recursos de la empresa. Para obtener más información, consulta "[Identificación de eventos de registro de auditoría realizados por un token de acceso](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)".
{%- endif %}
- Para el resto de secretos, compruebe primero que los que se hayan confirmado en {% data variables.product.product_name %} sean válidos. Si es así, cree un secreto, actualice los servicios que usan el secreto anterior y, después, elimine el secreto anterior.

{% ifversion ghec %} {% note %}

**Nota**: Si se detecta un secreto en un repositorio público en {% data variables.product.prodname_dotcom_the_website %} y dicho secreto también coincide con el patrón de un asociado, se generará una alerta y el secreto potencial se notifica al proveedor de servicios. Para obtener más información sobre los patrones de asociados, vea "[Secretos compatibles con patrones de asociados](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)".

{% endnote %} {% endif %}

## Configurar las notificaciones para las alertas del {% data variables.product.prodname_secret_scanning %}

Cuando se detecta un secreto nuevo, {% data variables.product.product_name %} notifica a todos los usuarios con acceso a las alertas de seguridad del repositorio de acuerdo con sus preferencias de notificación. Recibirás notificaciones por correo electrónico si estás observando el repositorio, si habilitaste las notificaciones para las alertas de seguridad o para toda la actividad del repositorio o si eres el autor de la confirmación que contiene el secreto y si no estás ignorando el repositorio.

Para obtener más información, vea "[Administrar la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)" y "[Configurar notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)".
