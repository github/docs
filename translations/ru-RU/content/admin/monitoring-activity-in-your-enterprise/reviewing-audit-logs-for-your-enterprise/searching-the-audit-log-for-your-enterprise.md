---
title: Доступ к журналу аудита для предприятия
intro: Вы можете найти обширный список проверенных действий на предприятии.
shortTitle: Search audit logs
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can search the audit log.'
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
  - /admin/user-management/searching-the-audit-log
  - /admin/user-management/monitoring-activity-in-your-enterprise/searching-the-audit-log
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 12bc44b7d81df55366f8b839261cf8899a53729d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183999'
---
## Сведения о поиске журнала аудита предприятия

Поиск в журнале аудита предприятия можно выполнить непосредственно в пользовательском интерфейсе с помощью раскрывающегося списка **Фильтры** или ввести поисковый запрос.

  ![Поисковый запрос](/assets/images/enterprise/site-admin-settings/search-query.png)

Дополнительные сведения о просмотре журнала аудита предприятия см. в разделе [Доступ к журналу аудита для вашей организации](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise). 

{% data reusables.audit_log.git-events-not-in-search-results %}

Кроме того, для получения событий журнала аудита можно использовать API. Дополнительные сведения см. в разделе [Использование API журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise).

Поиск записей по тексту невозможен. При этом можно составлять поисковые запросы, используя различные фильтры. Многие операторы, используемые в запросах к журналу, например `-`, `>` и `<`, используются в том же формате, что и при поиске в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Поиск в {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

{% note %}

**Примечание**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Фильтры поисковых запросов

Filter| Описание
--------------:| -----------
`Yesterday's activity` | Все действия, созданные за последний день.
`Enterprise account management` | Все действия в категории `business`.
`Organization membership` | Все действия, выполняемые в процессе приглашения нового пользователя на присоединение к организации.
`Team management` | Все действия, связанные с управлением командой.<br/>— При добавлении или удалении учетной записи пользователя или репозитория из команды<br/>— При повышении или понижении уровня поддержки команды<br/>— При удалении команды
`Repository management` | Все действия для управления репозиториями.<br/>— При создании или удалении репозитория<br/>— При изменении видимости репозитория<br/>— При добавлении или удалении команды из репозитория {% ifversion ghec %}
`Billing updates` | Все действия, касающиеся оплаты вашему предприятию для {% data variables.product.prodname_dotcom %}, и связанные с изменением вашего адреса электронной почты выставления счетов.{% endif %}
`Hook activity` | Все действия для веб-перехватчиков и перехватчиков предварительного получения.
`Security management` | Все действия, касающиеся ключей SSH, ключей развертывания, ключей безопасности, двухфакторной проверки подлинности, проверки подлинности учетных данных единого входа SAML и оповещений об уязвимостях для репозиториев.

## Синтаксис поискового запроса

Поисковый запрос можно создать из одной или нескольких пар `key:value`, разделенных логическими операторами «И»/»ИЛИ». Например, чтобы просмотреть все действия, которые повлияли на репозиторий `octocat/Spoon-Knife` с начала 2017 г.:

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

Пары `key:value`, которые можно использовать в поисковом запросе:

Ключ            | Значение
--------------:| --------------------------------------------------------
`actor_id`     | Идентификатор учетной записи пользователя, которая инициировала действие
`actor`        | Имя учетной записи пользователя, которая инициировала действие
`oauth_app_id` | Идентификатор приложения OAuth, связанного с действием
`action`       | Имя проверяемого действия
`user_id`      | Идентификатор пользователя, на которого повлияло действие
`user`         | Имя пользователя, на которого повлияло действие
`repo_id`      | Идентификатор репозитория, на который повлияло действие (если применимо)
`repo`         | Имя репозитория, на который повлияло действие (если применимо)
`actor_ip`     | IP-адрес, с которого было инициировано действие
`created`      | Время, при котором произошло действие{% ifversion ghes %}. При запросе журнала аудита с панели мониторинга администратора сайта используйте `created_at` вместо{% endif %}
`from`         | Представление, с которого было инициировано действие
`note`         | Прочие сведения о событиях (в формате обычного текста или JSON)
`org`          | Имя организации, на которое повлияло действие (если применимо)
`org_id`       | Идентификатор организации, на которое повлияло действие (если применимо)
`business` | Имя предприятия, на которое повлияло действие (если применимо)
`business_id` | Идентификатор предприятия, на которое повлияло действие (если применимо)
{%- ifversion token-audit-log %} `hashed_token` | Маркер, используемый для проверки подлинности действия (если применимо, см. [раздел Определение событий журнала аудита, выполняемых маркером доступа](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)) {%- endif %}

Чтобы просмотреть действия, сгруппированные по категориям, также можно использовать квалификатор действия в качестве пары `key:value`. Дополнительные сведения см. в разделе [Поиск на основе выполненного действия](#search-based-on-the-action-performed).

Полный список действий журнала аудита предприятия см. в разделе [Действия журнала аудита для корпорации](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).

## Поиск в журнале аудита

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### Поиск с учетом выполненного действия

Для поиска определенных событий используйте квалификатор `action` в запросе. Пример:

  * `action:team` находит все события, сгруппированные в категории команды.
  * `-action:hook` исключает все события в категории веб-перехватчика.

Каждая категория содержит набор связанных действий, для которых можно выполнить фильтрацию. Пример:

  * `action:team.create` находит все события, в которых создавалась команда.
  * `-action:hook.events_changed` исключает все события, в рамках которых изменялись события в веб-перехватчике.

Действия, которые можно найти в журнале аудита предприятия, группируются по следующим категориям:

{% data reusables.audit_log.audit-log-action-categories %}

### Поиск с учетом времени действия

Используйте квалификатор `created` для фильтрации событий в журнале аудита с учетом времени их возникновения.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Пример:

  * `created:2014-07-08` находит все события, произошедшие 8 июля 2014 г.
  * `created:>=2014-07-08` находит все события, произошедшие после 8 июля 2014 г.
  * `created:<=2014-07-08` находит все события, произошедшие до 8 июля 2014 г.
  * `created:2014-07-01..2014-07-31` находит все события, произошедшие в июле 2014 г.

### Поиск по расположению

С помощью квалификатора `country` можно выполнить фильтрацию событий в журнале аудита с учетом страны-происхождения. Можно использовать короткий двухбуквенный код страны или ее полное название. Имейте в виду, что страны, в названиях которых есть пробелы, необходимо заключать в кавычки. Пример:

  * `country:de` находит все события, произошедшие в Германии.
  * `country:Mexico` находит все события, произошедшие в Мексике.
  * `country:"United States"` находит события, произошедшие в США.

{% ifversion token-audit-log %}
### Поиск на основе токена, который выполнил действие

`hashed_token` Используйте квалификатор для поиска на основе токена, который выполнил действие. Перед поиском маркера необходимо создать хэш SHA-256. Дополнительные сведения см. в разделе [Определение событий журнала аудита, выполняемых маркером доступа](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token).
{% endif %}
