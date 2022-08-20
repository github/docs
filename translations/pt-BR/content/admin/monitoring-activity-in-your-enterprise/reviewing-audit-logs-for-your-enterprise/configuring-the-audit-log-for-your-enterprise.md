---
title: Configurando o log de auditoria para a sua empresa
intro: Você pode definir as configurações para o log de auditoria da sua empresa.
shortTitle: Configurar logs de auditoria
permissions: Enterprise owners can configure the audit log.
versions:
  feature: audit-data-retention-tab
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
---

## Sobre a configuração do log de auditoria

Você pode configurar um período de retenção para dados deo log de auditoria e ver os detalhes de armazenamento indexado.

{% ifversion enable-git-events %}
Após configurar um período de retenção, você pode habilitar ou desabilitar os eventos relacionados ao Git desde que aparecem no log de auditoria.
{% endif %}

## Configurar um período de retenção para dados de log de auditoria

Você pode configurar um período de retenção para dados do log de auditoria para {% data variables.product.product_location %}. Os dados que excederem o período que você configurar serão removidos permanentemente do disco.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
{% data reusables.audit_log.audit-data-retention-tab %}
1. Em "Defina as configurações de retenção de log de auditoria", selecione o menu suspenso e clique em um período de retenção.

   ![Captura de tela do menu suspenso para configurações de retenção do log de auditoria](/assets/images/help/enterprises/audit-log-retention-dropdown.png)
1. Clique em **Salvar**.

{% ifversion enable-git-events %}
## Gerenciando eventos do Git no log de auditoria

Você pode habilitar ou desabilitar eventos relacionados ao Git, como `git.clone` e `git.push` desde que aparecerem no seu log de auditoria. Para obter uma lista de eventos do Git registrados, consulte "[Eventos de log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)".

Se você habilitar eventos do Git, devido ao grande número de eventos Git registrados, recomendamos monitorar o armazenamento de arquivos da sua instância e analisar suas configurações de alerta relacionadas. Para obter mais informações, consulte "[Monitorando o armazenamento](/admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds#monitoring-storage)".

Antes de poder habilitar eventos Git no log de auditoria, você deve configurar um período de retenção para dados de log de auditoria diferentes de "infinito". Para obter mais informações, consulte "[Configurando um período de retenção para os dados de log de auditoria](#configuring-a-retention-period-for-audit-log-data)".

{% data reusables.audit_log.git-events-not-in-search-results %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
{% data reusables.audit_log.audit-data-retention-tab %}
1. Em "Optar por participar do evento do Git" selecione ou desmarque **Habilitar eventos git no audit-log**.

   ![Captura de tela da caixa de seleção para habilitar eventos Git no log de auditoria](/assets/images/help/enterprises/enable-git-events-checkbox.png)
1. Clique em **Salvar**.

{% endif %}
