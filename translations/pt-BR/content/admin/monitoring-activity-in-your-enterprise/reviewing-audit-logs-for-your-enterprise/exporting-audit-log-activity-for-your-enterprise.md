---
title: Como exportar a atividade do log de auditoria da sua empresa
intro: Você pode exportar dados de eventos Git e de auditoria para um arquivo para análise offline.
shortTitle: Export audit logs
permissions: Enterprise owners can export the audit log.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: 208e086fa93c89879357d340aa459b3d40824383
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060735'
---
## Sobre as exportações de dados de eventos do Git e do log de auditoria

Você pode exportar o log de auditoria baixando um arquivo JSON ou CSV da sua empresa no {% data variables.product.product_name %}. Ao exportar eventos do log de auditoria, você pode consultar o log por um ou mais desses qualificadores compatíveis para filtrar eventos de log específicos para exportação. Para obter mais informações sobre os qualificadores de pesquisa, confira "[Pesquisa com base na ação executada](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed)".

Você pode exportar dados de eventos do Git baixando um arquivo JSON do log de auditoria da sua empresa. Ao contrário dos dados do log de auditoria, você não pode consultar eventos específicos do Git para filtragem e exportação na interface do usuário do log de auditoria. 

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}

Como alternativa à exportação de eventos de log, você pode usar a API para recuperar eventos de log de auditoria ou configurar o {% data variables.product.product_name %} para transmitir os dados de auditoria à medida que os eventos são registrados. Para obter mais informações, confira "[Como usar a API de log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)" e "[Como transmitir o log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)".

## Como exportar os dados de log de auditoria

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Opcionalmente, para exportar apenas os resultados filtrados, pesquise por um ou mais qualificadores ou filtros de log compatíveis.
2. Selecione o menu suspenso {% octicon "download" aria-label="The Download icon" %} **Exportar** e escolha o formato de arquivo (JSON ou CSV) para exportar os eventos de log.

    ![Botão Exportar](/assets/images/help/organizations/org-audit-log-export.png)

## Como exportar os dados de eventos do Git

Você também pode exportar os dados de eventos do Git por intervalo de datas.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Selecione o menu suspenso {% octicon "download" aria-label="The Download icon" %} **Exportar eventos do Git** e escolha um intervalo de datas para o qual os eventos de log serão exportados.

    ![Botão Exportar eventos do Git](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. Clique em {% octicon "file-zip" aria-label="The File-zip icon" %} **Baixar Resultados** para baixar o arquivo.
1. Os dados são exportados como um arquivo JSON compactado. Para extrair os dados JSON, descompacte o arquivo usando um comando ou um cliente de utilitário de arquivos. Por exemplo:

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
