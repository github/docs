---
title: Exportando a atividade de log de auditoria da sua empresa
intro: Você pode exportar dados de eventos de auditoria e do Git para um arquivo para análise off-line.
shortTitle: Exportar logs de auditoria
permissions: Enterprise owners can export the audit log.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
---

## Sobre exportações de dados de registros de auditoria e eventos do Git

Você pode exportar o log de auditoria fazendo o download de um arquivo do JSON ou CSV da sua empresa em {% data variables.product.product_name %}. Ao exportar eventos do log de auditoria, você pode consultar por um ou mais desses classificadores para filtrar eventos de log específicos para exportação. Para obter mais informações sobre os qualificadores de pesquisa, consulte "[Pesquisa baseada na ação executada](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed).

Você pode exportar dados de eventos Git fazendo o download de um arquivo JSON do log de auditoria da empresa. Ao contrário dos dados de log de auditoria, você não pode consultar eventos específicos do Git para filtrar e exportar na interface do usuário do log de auditoria.

{% data reusables.audit_log.exported-log-keys-and-values %}

Como alternativa à exportação de eventos de log, você pode usar a API para recuperar os eventos de log de auditoria ou configurar {% data variables.product.product_name %} para transmitir dados de auditoria quando os eventos forem registrados. Para obter mais informações, consulte "[Usando a API de registro de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)" e "[Transmitindo o registro de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)".

## Exportando dados de log de auditoria

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Opcionalmente, apenas para exportar resultados filtrados, pesquise um ou mais qualificadores ou filtros de log.
2. Selecione o menu suspenso {% octicon "download" aria-label="The Download icon" %} **Exportar** e escolha o formato de arquivo (JSON ou CSV) para exportar eventos de log.

    ![Botão de exportação](/assets/images/help/organizations/org-audit-log-export.png)

## Exportando dados de eventos do Git

Você também pode exportar dados de eventosdo Git por intervalo de datas.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Selecione o menu suspenso {% octicon "download" aria-label="The Download icon" %} **Exportar eventos do Git** e escolha um intervalo de datas para exportar eventos de registro.

    ![Exportar botão de eventos do Git](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. Clique em {% octicon "file-zip" aria-label="The File-zip icon" %} **Fazer o download dos resultados** para fazer o download do arquivo.
1. Os dados são exportados como um arquivo JSON comprimido. Para extrair os dados do JSON, descompacte o arquivo usando um cliente de utilitário do arquiv ou comando. Por exemplo:

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
