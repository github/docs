---
title: Acerca de la bitácora de auditoría para tu empresa
intro: 'Para apoyar la depuración y el cumplimiento externo e interno, {% data variables.product.product_name %} proporciona bitácoras de eventos auditados de {% ifversion ghes %} sistema,{% endif %} usuario, organización y repositorio.'
shortTitle: Acerca de las bitácoras de auditoría
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
---

## Acerca de las bitácoras de auditoría

{% data reusables.audit_log.retention-periods %}

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

Adicionalmente a ver tu bitácora de auditoría, puedes monitorear la actividad en tu empresa de otras formas, tal como {% ifversion ghes or ghae %}ver las bitácoras de auditoría y {% endif %}administrar los webhooks globales. Para obtener más información, consulta la sección "[Explorar la actividad de usuario en tu empresa](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity)".

## Utilizar tus bitácoras de auditoría

Como propietario de empresa{% ifversion ghes %} o administrador de sitio{% endif %}, puedes interactuar con los datos de la bitácora de auditoría para tu empresa de varias formas:
- Puedes ver la bitácora de auditoría para tu empresa. Para obtener más información, consulta la sección "[Acceder a la bitácora de auditoría de tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)".
- Puedes buscar la bitácora de auditoría para eventos específicos{% ifversion ghec %} y exportar los datos de bitácora de auditoría{% endif %}. For more information, see "[Searching the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)"{% ifversion ghec %} and "[Exporting the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)"{% endif %}.{% ifversion audit-data-retention-tab %}
- You can configure settings, such as the retention period for audit log events{% ifversion enable-git-events %} and whether Git events are included{% endif %}. For more information, see "[Configuring the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)."{% endif %}
{%- ifversion enterprise-audit-log-ip-addresses %}
- Puedes mostrar la dirección IP asociada con los eventos en la bitácora de auditoría. Para obtener más información, consulta la sección "[Mostrar las direcciones IP en la bitácora de auditoría de tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise)".
{%- endif %}
{%- ifversion audit-log-streaming %}
- Puedes trasmitir datos de eventos de Git y de auditorías desde {% data variables.product.prodname_dotcom %} hacia un sistema externo de administración de datos. Para obtener más información, consulta la sección "[Transmitir la bitácora de auditoría de tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)".
{%- endif %}
{%- ifversion ghes %}
- Puedes reenviar bitácoras de auditoría y de sistema desde tu empresa hacia un sistema de monitoreo hospedado de terceros. Para obtener más información, consulta la sección "[Reenvío de bitácoras](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".
{%- endif %}
{%- ifversion ghec or ghes > 3.2 or ghae-issue-6648 %}
- Puedes utilizar la API de bitácora de auditoría para ver las acciones que se llevan a cabo en tu empresa. Para obtener más información, consulta la sección "[Utilizar la API de bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)".
{%- endif %}

Para obtener una lista completa de acciones de bitácora de auditoría que pudieran aparecer en la bitácora de auditoría de tu empresa, consulta la sección "[Acciones de la bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

## Leer más
- "[Revisar el registro de auditoría para tu organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)"
{%- ifversion ghes %}
- "[Acerca de las bitácoras de sistema](/admin/enterprise-management/monitoring-your-appliance/about-system-logs)"
{%- endif %}
