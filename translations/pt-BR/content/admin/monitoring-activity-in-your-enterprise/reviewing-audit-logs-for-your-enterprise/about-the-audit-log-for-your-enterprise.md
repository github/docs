---
title: Sobre o log de auditoria da sua empresa
intro: 'Para dar suporte à depuração e à conformidade interna e externa, o {% data variables.product.product_name %} oferece logs de eventos auditados do{% ifversion ghes %} sistema, {% endif %} do usuário, da organização e do repositório.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159034'
---
## Sobre logs de auditoria

{% data reusables.audit_log.retention-periods %}

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

Além de ver seu log de auditoria, você pode monitorar a atividade na sua empresa de outras maneiras, como {% ifversion ghes or ghae %}vendo os logs de push e {% endif %}gerenciando os webhooks globais. Para obter mais informações, confira "[Como explorar a atividade do usuário na sua empresa](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity)".

## Como usar os logs de auditoria

Como proprietário da empresa{% ifversion ghes %} ou administrador do site{% endif %}, você pode interagir com os dados de log de auditoria da sua empresa de várias maneiras:
- Veja o log de auditoria da sua empresa. Para obter mais informações, confira "[Como acessar o log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)".
- Pesquise eventos específicos no log de auditoria{% ifversion ghec %} e exporte os dados do log de auditoria{% endif %}. Para obter mais informações, confira "[Pesquisa no log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)"{% ifversion ghec %} e "[Como exportar o log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)"{% endif %}.{% ifversion token-audit-log %}
- Você pode identificar todos os eventos que foram executados por um token de acesso específico. Para obter mais informações, confira "[Como identificar eventos de log de auditoria executados por um token de acesso](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)". {% endif %} {% ifversion audit-data-retention-tab %}
- Você pode definir configurações, como o período de retenção para eventos do log de auditoria{% ifversion enable-git-events %} e se os eventos do Git estão incluídos{% endif %}. Para obter mais informações, confira "[Como configurar o log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)."{% endif %} {%- ifversion enterprise-audit-log-ip-addresses %}
- Você pode ver o endereço IP associado aos eventos no log de auditoria. Para obter mais informações, confira "[Como exibir endereços IP no log de auditoria da empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise)".
{%- endif %} {%- ifversion audit-log-streaming %}
- Você pode transmitir dados de auditoria e eventos do Git de {% data variables.product.prodname_dotcom %} para um sistema externo de gerenciamento de dados. Para obter mais informações, confira "[Streaming do log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)".
{%- endif %} {%- ifversion ghes %}
- Encaminhe os logs de auditoria e do sistema, da empresa para um sistema de monitoramento hospedado por terceiros. Para obter mais informações, confira "[Encaminhamento de log](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".
{%- endif %}
- Use a API de Log de auditoria para ver as ações executadas na sua empresa. Para obter mais informações, confira "[Como usar a API do log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)".

Para ver a lista completa das ações do log de auditoria que podem ser exibidas no log de auditoria da empresa, confira "[Ações do log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

## Leitura adicional
- "[Como revisar o log de auditoria da sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)" {%- ifversion ghes %}
- "[Sobre os logs do sistema](/admin/enterprise-management/monitoring-your-appliance/about-system-logs)" {%- endif %}
