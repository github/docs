---
title: Atividade de auditoria na sua empresa
shortTitle: Atividade de auditoria
intro: 'Você pode auditar a atividade do {% data variables.product.prodname_managed_users %} na sua empresa, visualizar informações sobre quais ações foram realizadas, por qual usuário e quando elas ocorreram.'
permissions: Enterprise owners can access the audit log.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
---

## Sobre o log de auditoria

O log de auditoria permite que os proprietários corporativos revisem ou exportem rapidamente as ações realizadas por proprietários e integrantes da sua empresa. Cada entrada do log de auditoria mostra informações sobre o evento.

- A organização em que foi executada uma ação
- O usuário que executou a ação
- Em qual repositório uma ação foi executada
- A ação que foi executada
- Em que país a ação foi executada
- A data e a hora que a ação foi executada

## Acessar o log de auditoria

Você também pode acessar o log de auditoria da sua empresa a partir da API REST. Para obter mais informações, consulte "[Administração do GitHub Enterprise](/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise)" na documentação da API.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Opcionalmente, acima da lista de eventos, selecione o menu suspenso **Exportar Eventos do Git** ou **Exportar** e escolha opções para exportar eventos do log de auditoria. ![Os menus suspensos "Exportar eventos do Git" e "Exportar" para o log de auditoria da empresa](/assets/images/help/enterprises/audit-log-export-drop-down-menus.png)
