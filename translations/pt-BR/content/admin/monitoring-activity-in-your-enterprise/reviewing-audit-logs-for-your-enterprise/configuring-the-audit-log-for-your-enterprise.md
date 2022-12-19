---
title: Configurando o log de auditoria da sua empresa
intro: Você pode definir as configurações do log de auditoria da sua empresa.
shortTitle: Configure audit logs
permissions: Enterprise owners can configure the audit log.
versions:
  feature: audit-data-retention-tab
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: f624607d5729d32d836efedf1fa355a96489a175
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106562'
---
## Sobre a configuração do log de auditoria

Você pode configurar um período de retenção para dados de log de auditoria e ver os detalhes do armazenamento de índice.

{% ifversion enable-git-events %} Depois de configurar um período de retenção, você pode habilitar ou desabilitar eventos relacionados ao Git de aparecerem no log de auditoria.
{% endif %}

## Configurando um período de retenção para dados de log de auditoria

Você pode configurar um período de retenção de dados de log de auditoria para {% data variables.location.product_location %}. Os dados que excederem o período configurado serão removidos permanentemente do disco.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. Em "Definir configurações de retenção de log de auditoria", selecione o menu suspenso e clique em um período de retenção.

   ![Captura de tela do menu suspenso para configurações de retenção de log de auditoria](/assets/images/help/enterprises/audit-log-retention-dropdown.png)
1. Clique em **Salvar**.

{% ifversion enable-git-events %}
## Gerenciando eventos Git no log de auditoria

Você pode habilitar ou desabilitar eventos relacionados ao Git, como `git.clone` e `git.push`, de aparecer em seu log de auditoria. Para obter uma lista dos eventos Git que são registrados, confira "[Auditar eventos de log para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)".

Se você habilitar os eventos Git, devido ao grande número de eventos Git registrados, recomendamos monitorar o armazenamento de arquivos da sua instância e examinar suas configurações de alerta relacionadas. Para obter mais informações, confira "[Monitorar o armazenamento](/admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds#monitoring-storage)".

Para habilitar eventos Git no log de auditoria, configure um período de retenção para dados de log de auditoria que não sejam "infinitos". Para obter mais informações, confira "[Configurar um período de retenção para dados de log de auditoria](#configuring-a-retention-period-for-audit-log-data)".

{% data reusables.audit_log.git-events-not-in-search-results %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. Em "Aceitação de evento Git", marque ou desmarque **Habilitar eventos Git no log de auditoria**.

   ![Captura de tela da caixa de seleção para habilitar eventos Git no log de auditoria](/assets/images/help/enterprises/enable-git-events-checkbox.png)
1. Clique em **Salvar**.

{% endif %}
