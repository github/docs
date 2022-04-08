---
title: Sobre o log de auditoria da sua empresa
intro: 'Para suportar depuração e conformidade interna e externa, {% data variables.product.product_name %} fornece logs de sistema auditado{% ifversion ghes %} ,{% endif %} usuário, organização e eventos de repositórios.'
shortTitle: Sobre os logs de auditoria
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

## Sobre os logs de auditoria

{% data reusables.audit_log.retention-periods %}

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

Além de visualizar seu registro de auditoria, você pode monitorar atividades na sua empresa de outras formas, tais como {% ifversion ghes or ghae %}visualizando os logs de push e {% endif %}gerenciando webhooks globais. Para obter mais informações, consulte "[Explorando atividades de usuário na sua empresa](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity)".

## Usando seus logs de auditoria

Como proprietário corporativo{% ifversion ghes %} ou administrador do site{% endif %}, você pode interagir com os dados do log de auditoria na sua empresa de várias maneiras:
- Você pode visualizar o log de auditoria da sua empresa. Para obter mais informações, consulte[Acessando o log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)".
- Você pode pesquisar eventos específicos no log de auditoria{% ifversion ghec %} e exportar dados de log de auditoria{% endif %}. Para obter mais informações, consulte "[Pesquisando o log de auditoria para a sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)"{% ifversion ghec %} e "[Exportando o log de auditoria para a sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)"{% endif %}.
{%- ifversion ghec %}
- Você pode transmitir dados de auditoria e eventos do Git de {% data variables.product.prodname_dotcom %} para um sistema externo de gerenciamento de dados. Para obter mais informações, consulte[Transmitindo o log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)".
{%- else %}
- Você pode encaminhar logs de auditoria e sistema, da sua empresa para um sistema de monitoramento hospedado por terceiros. Para obter mais informações, consulte "[Encaminhamento de registro](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".
{%- endif %}
{%- ifversion ghec or ghes > 3.2 or ghae-issue-6648 %}
- Você pode usar a API do log de auditoria para visualizar as ações realizadas na sua empresa. Para obter mais informações, consulte[Usando a API do log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)".
{%- endif %}

Para obter uma lista completa de ações de log de auditoria que podem aparecer no log de auditoria da sua empresa, consulte "[Ações de log de auditoria para a sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

{% ifversion ghec %}
## Eventos do Git

Os dados de eventos do Git, como clonar, buscar e fazer push são registrados. Para obter mais informações, consulte[Transmitindo o log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)".

{% endif %}

## Leia mais
- "[Revisar o log de auditoria da organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)"
{%- ifversion ghes %}
- "[Sobre os logs do sistema](/admin/enterprise-management/monitoring-your-appliance/about-system-logs)"
{%- endif %}
