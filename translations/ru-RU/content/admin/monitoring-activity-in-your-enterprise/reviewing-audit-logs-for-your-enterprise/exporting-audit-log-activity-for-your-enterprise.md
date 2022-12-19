---
title: Экспорт действий журнала аудита для предприятия
intro: Данные аудита и событий Git можно экспортировать в файл для автономного анализа.
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060741'
---
## Сведения об экспорте данных журнала аудита и событий Git

Журнал аудита можно экспортировать, скачав JSON-файл или CSV-файл из предприятия на {% data variables.product.product_name %}. При экспорте событий журнала аудита можно запросить один или несколько поддерживаемых квалификаторов, чтобы отфильтровать определенные события журнала для экспорта. Дополнительные сведения о квалификаторах поиска см. в разделе [Поиск на основе выполненного действия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed).

Можно экспортировать данные событий Git, скачав JSON-файл из журнала аудита предприятия. В отличие от данных журнала аудита, вы не можете запрашивать определенные события Git для фильтрации и экспорта в пользовательском интерфейсе журнала аудита. 

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}

В качестве альтернативы экспорту событий журнала можно использовать API для получения событий журнала аудита или настройки {% data variables.product.product_name %}, чтобы была возможность потоковой передачи данных аудита по мере регистрации событий. Дополнительные сведения см. в разделе [Использование API журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise) и [Потоковая передача журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

## Экспорт данных журнала аудита

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. При необходимости можно экспортировать только отфильтрованные результаты, выполнить поиск по одному или нескольким поддерживаемым квалификаторами или фильтрам журналов.
2. Выберите раскрывающееся меню экспорта {% octicon "download" aria-label="The Download icon" %} **Экспорт**, а затем формат файла (JSON или CSV), чтобы экспортировать события журнала.

    ![Кнопка экспорта](/assets/images/help/organizations/org-audit-log-export.png)

## Экспорт данных событий Git

Можно также экспортировать данные событий Git по диапазону дат.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Выберите раскрывающееся меню {% octicon "download" aria-label="The Download icon" %} **Экспорт событий Git**, а затем диапазон дат для экспорта событий журнала.

    ![Кнопка "Экспорт событий Git"](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. Щелкните {% octicon "file-zip" aria-label="The File-zip icon" %} **Скачать результаты**, чтобы скачать файл.
1. Данные экспортируются в виде сжатого JSON-файла. Чтобы извлечь данные JSON, распакуйте файл с помощью клиента или команды архивной программы. Пример:

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
