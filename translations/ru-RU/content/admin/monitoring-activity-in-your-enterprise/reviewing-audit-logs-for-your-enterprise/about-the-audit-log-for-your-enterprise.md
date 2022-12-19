---
title: Сведения о журнале аудита для предприятия
intro: 'Для поддержки отладки и обеспечения соответствия внутренним и внешним требованиям в {% data variables.product.product_name %} имеются журналы аудита{% ifversion ghes %} системы,{% endif %} пользователей, организаций и событий репозитория.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159040'
---
## Сведения о журналах аудита

{% data reusables.audit_log.retention-periods %}

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

Помимо просмотра журнала аудита, можно отслеживать действия на предприятии другими способами, например, {% ifversion ghes or ghae %}просматривая журналы отправки и {% endif %}управляя глобальными веб-перехватчиками. Дополнительные сведения см. в разделе [Изучение действий пользователей на предприятии](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity).

## Использование журналов аудита

Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} может взаимодействовать с данными журнала аудита для предприятия несколькими способами:
- Можно просматривать журнал аудита для предприятия. Дополнительные сведения см. в разделе [Доступ к журналу аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise).
- Можно искать в журнале аудита определенные события{% ifversion ghec %} и экспортировать данные журнала аудита{% endif %}. Дополнительные сведения см. [в разделах Поиск в журнале аудита для вашего предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise){% ifversion ghec %} и [Экспорт журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise){% endif %}. {% ifversion token-audit-log %}
- Вы можете определить все события, выполненные с помощью определенного маркера доступа. Дополнительные сведения см. в разделе [Определение событий журнала аудита, выполняемых маркером доступа](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token). {% endif %} {% ifversion audit-data-retention-tab %}
- Вы можете настроить параметры, такие как период хранения для событий журнала аудита{% ifversion enable-git-events %} и включение событий Git{% endif %}. Дополнительные сведения см. в разделе [Настройка журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise).{% endif %} {%- ifversion enterprise-audit-log-ip-addresses %}
- IP-адрес, связанный с событиями, можно отобразить в журнале аудита. Дополнительные сведения см. в разделе [Отображение IP-адресов в журнале аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise).
{%- endif %} {%- ifversion audit-log-streaming %}
- Можно выполнять потоковую передачу аудита и данных событий Git из {% data variables.product.prodname_dotcom %} во внешнюю систему управления данными. Дополнительные сведения см. в разделе [Потоковая передача журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).
{%- endif %} {%- ifversion ghes %}
- Можно переадресовывать журналы аудита и системные журналы из предприятия в размещенную третьей стороной систему мониторинга. Дополнительные сведения см. в разделе [Пересылка журналов](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding).
{%- endif %}
- API журнала аудита можно использовать для просмотра действий, выполняемых на предприятии. Дополнительные сведения см. в разделе [Использование API журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise).

Полный список действий журнала аудита, которые могут отображаться в журнале аудита предприятия, см. в разделе [Действия журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).

## Дополнительные материалы
- [Проверка журнала аудита для организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization) {%- ifversion ghes %}
- [Сведения о системных журналах](/admin/enterprise-management/monitoring-your-appliance/about-system-logs) {%- endif %}
