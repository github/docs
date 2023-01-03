---
title: Acerca del registro de auditoría de la empresa
intro: 'Para permitir la depuración y el cumplimiento interno y externo, {% data variables.product.product_name %} proporciona registros de eventos del sistema{% ifversion ghes %},{% endif %}, de usuario, de organización y de repositorio auditados.'
shortTitle: About audit logs
redirect_from:
  - /enterprise/admin/articles/audit-logging
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
  - /admin/user-management/audit-logging
  - /admin/user-management/monitoring-activity-in-your-enterprise/audit-logging
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/auditing-activity-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: be8600e2037793a145fd2484742ddd3eb52e91a4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159041'
---
## Acerca de los registros de auditoría

{% data reusables.audit_log.retention-periods %}

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

Además de ver el registro de auditoría, puede supervisar la actividad de la empresa de otras maneras, como {% ifversion ghes or ghae %}visualizar registros de inserción y {% endif %}administrar webhooks globales. Para más información, vea "[Exploración de la actividad de usuario en la empresa](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity)".

## Uso de los registros de auditoría

Como propietario de la empresa{% ifversion ghes %} o administrador del sitio{% endif %}, puede interactuar con los datos del registro de auditoría para la empresa de varias maneras:
- Puede ver el registro de auditoría de la empresa. Para más información, vea "[Acceso al registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)".
- Puede buscar eventos específicos en el registro de auditoría{% ifversion ghec %} y exportar datos del registro de auditoría{% endif %}. Para obtener más información, consulta "[Búsqueda en el registro de auditoría de la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)"{% ifversion ghec %} y "[Exportación del registro de auditoría de la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)"{% endif %}.{% ifversion token-audit-log %}
- Puedes identificar todos los eventos que ha realizado un token de acceso específico. Para obtener más información, consulta "[Identificación de eventos de registro de auditoría que realiza un token de acceso](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)". {% endif %} {% ifversion audit-data-retention-tab %}
- Puedes configurar opciones, como el período de retención de eventos de registro de auditoría{% ifversion enable-git-events %} y si los eventos de Git están incluidos{% endif %}. Para obtener más información, consulta "[Configuración del registro de auditoría de la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)". {% endif %} {%- ifversion enterprise-audit-log-ip-addresses %}
- Puedes mostrar la dirección IP asociada a eventos en el registro de auditoría. Para más información, consulta "[Visualización de direcciones IP en el registro de auditoría de una empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise)".
{%- endif %} {%- ifversion audit-log-streaming %}
- Puedes trasmitir datos de eventos de Git y de auditorías desde {% data variables.product.prodname_dotcom %} hacia un sistema externo de administración de datos. Para más información, vea "[Streaming del registro de auditoría para su empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)".
{%- endif %} {%- ifversion ghes %}
- Puede reenviar los registros de auditoría y del sistema, desde la empresa a un sistema de supervisión hospedado de terceros. Para más información, vea "[Reenvío de registros](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".
{%- endif %}
- Puede usar la API de registro de auditoría para ver las acciones realizadas en el empresa. Para más información, vea "[Uso de la API de registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)".

Para obtener una lista completa de las acciones del registro de auditoría que pueden aparecer en el registro de auditoría de la empresa, vea "[Acciones del registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

## Información adicional
- "[Revisión del registro de auditoría de la organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)" {%- ifversion ghes %}
- "[Acerca de los registros del sistema](/admin/enterprise-management/monitoring-your-appliance/about-system-logs)" {%- endif %}
