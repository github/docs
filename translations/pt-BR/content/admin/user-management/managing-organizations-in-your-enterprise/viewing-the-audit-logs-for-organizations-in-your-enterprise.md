---
title: Visualizando os logs de auditoria para organizações da sua empresa
intro: Os proprietários corporativos podem exibir ações agregadas de todas as organizações pertencentes a uma conta corporativa no log de auditoria.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
  - /articles/viewing-the-audit-logs-for-organizations-in-your-business-account
  - /articles/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Visualizar logs de auditoria da organização
---

Cada entrada do log de auditoria mostra informações aplicáveis sobre um evento, como:

- A organização em que foi executada uma ação
- O usuário que executou a ação
- Em qual repositório uma ação foi executada
- A ação que foi executada
- Em que país a ação foi executada
- A data e a hora que a ação foi executada

Você pode procurar eventos específicos no log de auditoria e exportar dados do log de auditoria. Para obter mais informações sobre como pesquisar no log de auditoria e sobre eventos de organização específicos, consulte "[Revisar o log de auditoria da organização](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)".

Você também pode transmitir dados de eventos de auditoria e do Git de {% data variables.product.prodname_dotcom %} para um sistema externo de gerenciamento de dados. Para obter mais informações, consulte "[Transmissão dos logs de auditoria para organizações na sua conta corporativa](/admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
