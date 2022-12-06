---
title: Настройка журнала аудита для предприятия
intro: Вы можете настроить параметры для журнала аудита предприятия.
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106568'
---
## Сведения о конфигурации журнала аудита

Вы можете настроить период хранения для данных журнала аудита и просмотреть сведения о хранилище индекса.

{% ifversion enable-git-events %} После настройки периода хранения можно включить или отключить события, связанные с Git, отобразив их в журнале аудита.
{% endif %}

## Настройка периода хранения для данных журнала аудита

Вы можете настроить период хранения для данных журнала аудита для {% data variables.location.product_location %}. Данные, превышающие настроенный период, будут окончательно удалены с диска.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. В разделе "Настройка параметров хранения журнала аудита" щелкните раскрывающееся меню и выберите период хранения.

   ![Снимок экрана: раскрывающееся меню для параметров хранения журнала аудита](/assets/images/help/enterprises/audit-log-retention-dropdown.png)
1. Выберите команду **Сохранить**.

{% ifversion enable-git-events %}
## Управление событиями Git в журнале аудита

Вы можете включать или отключать отображение в журнале аудита событий, связанных с Git, например `git.clone` и `git.push`. Список событий Git, которые записываются в журнал, см. в разделе [События журнала аудита для вашего предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions).

Если вы включите события Git, из-за большого их количества мы рекомендуем отслеживать хранилище файлов экземпляра и просматривать связанные конфигурации оповещений. Дополнительные сведения см. в статье [Мониторинг хранилища](/admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds#monitoring-storage).

Перед включением событий Git в журнале аудита необходимо настроить период хранения для данных журнала аудита, отличных от неограниченного. Дополнительные сведения см. в разделе [Настройка срока хранения для данных журнала аудита](#configuring-a-retention-period-for-audit-log-data).

{% data reusables.audit_log.git-events-not-in-search-results %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. В разделе "Согласие на событие Git" выберите или снимите флажок **Включить события Git в журнале аудита**.

   ![Снимок экрана: флажок для включения событий Git в журнале аудита](/assets/images/help/enterprises/enable-git-events-checkbox.png)
1. Выберите команду **Сохранить**.

{% endif %}
