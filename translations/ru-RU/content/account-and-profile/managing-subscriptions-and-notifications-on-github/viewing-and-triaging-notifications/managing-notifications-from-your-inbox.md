---
title: Управление уведомлениями из папки "Входящие"
intro: 'В папке "Входящие" можно быстро рассмотреть и синхронизировать уведомления в электронной почте{% ifversion fpt or ghes or ghec %} и на мобильных устройствах{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
  - /github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: Manage from your inbox
ms.openlocfilehash: d3e0d5eb5e7cf3e544ab601651951178402e4150
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106808'
---
## Сведения о папке "Входящие"

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} Дополнительную информацию см. в разделе [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings).
{% endif %}

Для доступа к папке "Входящие" с уведомлениями в правом верхнем углу любой страницы нажмите {% octicon "bell" aria-label="The notifications bell" %}.

  ![Уведомление, обозначающее любое непрочитанное сообщение](/assets/images/help/notifications/notifications_general_existence_indicator.png)

В папке "Входящие" отображаются все уведомления, которые не были отменены или помечены как **Готово**. Вы можете настроить папку "Входящие" в соответствии с вашим рабочим процессом с помощью фильтров, просматривая все или только непрочитанные уведомления и группируя уведомления для краткого обзора.

  ![Представление папки "Входящие"](/assets/images/help/notifications-v2/inbox-view.png)

По умолчанию в папке "Входящие" отображаются прочитанные и непрочитанные уведомления. Чтобы просмотреть только непрочитанные уведомления, нажмите кнопку **Непрочитанные** или используйте запрос `is:unread`.

  ![Представление папки "Входящие" "Непрочитанные"](/assets/images/help/notifications-v2/unread-inbox-view.png)

## Варианты рассмотрения

У вас есть несколько вариантов рассмотрения уведомлений в папке "Входящие".

| Варианты рассмотрения | Описание |
|-----------------|-------------|
| Сохранить            | Сохраняет уведомление для последующей проверки. Чтобы сохранить уведомление, справа от уведомления щелкните {% octicon "bookmark" aria-label="The bookmark icon" %}. <br> <br> Сохраненные уведомления хранятся бессрочно, и их можно просмотреть, нажав кнопку **Сохранено** на боковой панели или с помощью запроса `is:saved`. Если сохраненное уведомление создано более 5 месяцев назад и его сохранение отменено, уведомление исчезнет из папки «Входящие» в течение дня. |
| Готово            | Помечает уведомление как завершенное и удаляет уведомление из папки "Входящие". Чтобы просмотреть все завершенные уведомления, нажмите кнопку **Готово** на боковой панели или в запросе `is:done`. Уведомления, помеченные как **Готово**, сохраняются в течение 5 месяцев.
| Unsubscribe (отмена подписки).     | Автоматически удаляет уведомление из папки "Входящие" и отменяет подписку на беседу до тех пор, пока кто-то не упомянет (@mentioned) вас или вашу команду или не запросит у вас проверку.
| Чтение            | Помечает уведомление как прочтенное. Чтобы просмотреть только прочитанные уведомления в папке "Входящие", используйте запрос `is:read`. Этот запрос не содержит уведомлений со статусом **Готово**.
| Unread          | Помечает уведомление как непрочитанное. Чтобы просмотреть только прочитанные уведомления в папке "Входящие", используйте запрос `is:unread`. |

Сведения о доступных сочетаниях клавиш см. в разделе [Сочетания клавиш](/github/getting-started-with-github/keyboard-shortcuts#notifications).

Прежде чем выбрать вариант рассмотрения, вы можете просмотреть сведения об уведомлении. Дополнительные сведения см. в разделе [Рассмотрение одного уведомления](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification).

## Одновременное рассмотрение нескольких уведомлений

Для одновременного рассмотрения нескольких уведомлений выберите соответствующие уведомления и используйте раскрывающийся список {% octicon "kebab-horizontal" aria-label="The edit icon" %} для выбора варианта рассмотрения.

![Раскрывающееся меню с параметрами рассмотрения и выбранными уведомлениями](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

## Фильтры уведомлений по умолчанию

По умолчанию в папке "Входящие" есть фильтры, когда вы назначены, участвуете в цепочке, получили запрос на проверку запроса на вытягивание или было упомянуто (@mentioned) ваше имя пользователя или был упомянута (@mentioned) команда, к которой вы относитесь.

  ![Пользовательские фильтры по умолчанию](/assets/images/help/notifications-v2/default-filters.png)

## Настройка папки "Входящие" с помощью пользовательских фильтров

Вы можете добавить до 15 собственных пользовательских фильтров.

{% data reusables.notifications.access_notifications %}
2. Чтобы открыть параметры фильтра, на левой боковой панели рядом с пунктом "Фильтры" щелкните {% octicon "gear" aria-label="The Gear icon" %}.

  {% tip %}

  **Совет.** Вы можете быстро просмотреть результаты применения фильтра, создав запрос в представлении папки "Входящие" и нажав кнопку **Сохранить**, чтобы открыть настраиваемые параметры фильтра.

  {% endtip %}

3. Добавьте имя фильтра и запрос фильтра. Например, чтобы просмотреть уведомления только для определенного репозитория, можно создать фильтр с помощью запроса `repo:octocat/open-source-project-name reason:participating`. Вы также можете добавить эмодзи с помощью нативной клавиатуры эмодзи. Список поддерживаемых поисковых запросов см. в разделе [Поддерживаемые запросы для пользовательских фильтров](#supported-queries-for-custom-filters).

  ![Пример пользовательского фильтра](/assets/images/help/notifications-v2/custom-filter-example.png)

4. Нажмите кнопку **Создать**.

## Ограничения пользовательского фильтра

Пользовательские фильтры в настоящее время не поддерживаются:
  - Полнотекстовый поиск в папке "Входящие", включая поиск по заголовку запроса на вытягивание или проблемы.
  - Различия между фильтрами запросов `is:issue`, `is:pr` и `is:pull-request`. Эти запросы возвращают как проблемы, так и запросы на вытягивание.
  - Создание более 15 пользовательских фильтров.
  - Изменение фильтров по умолчанию или их порядка.
  - Поиск [исключения](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results) с помощью `NOT` или `-QUALIFIER`.

## Поддерживаемые запросы для пользовательских фильтров

Ниже приведены типы фильтров, которые можно использовать:
  - Фильтрация по репозиторию с помощью `repo:`.
  - Фильтрация по типу обсуждения с помощью `is:`.
  - Фильтрация по причине уведомления с помощью `reason:` {% ifversion fpt or ghec %}.
  - Фильтрация по автору уведомлений с помощью `author:`.
  - Фильтрация по организации с помощью `org:` {% endif %}.

### Поддерживаемые запросы `repo:`

Чтобы добавить фильтр `repo:`, необходимо включить владельца репозитория в запрос: `repo:owner/repository`. Владелец — это организация или пользователь, которому принадлежит ресурс {% data variables.product.prodname_dotcom %}, который активирует уведомление. Например, `repo:octo-org/octo-repo` будет отображать уведомления, активированные в репозитории octo-repo в организации octo-org.

### Поддерживаемые запросы `is:`

Чтобы отфильтровать уведомления для определенного действия по {% данных variables.location.product_location %}, можно использовать  `is` запрос. Например, чтобы просмотреть только обновления приглашений репозитория, используйте `is:repository-invitation`{% ifversion not ghae %}, а для просмотра только {% data variables.product.prodname_dependabot_alerts %}, используйте `is:repository-vulnerability-alert`{% endif %}.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`{% ifversion fpt or ghec %}
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% ifversion fpt or ghec %}
- `is:discussion`{% endif %}

Сведения о сокращении числа уведомлений для {% data variables.product.prodname_dependabot_alerts %} см. в разделе [Настройка уведомлений для {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts).

Вы также можете использовать запрос `is:`, чтобы описать, как уведомление было рассмотрено.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

### Поддерживаемые запросы `reason:`

Чтобы отфильтровать уведомления по причине получения обновления, можно использовать запрос `reason:`. Например, чтобы просмотреть уведомления, когда вас (или вашу команду) попросили проверить запрос на вытягивание, используйте `reason:review-requested`. Дополнительные сведения см. в разделе [Сведения об уведомлениях](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications).

| Запрос | Описание |
|-----------------|-------------|
| `reason:assign` | Если есть обновление для проблемы или запроса на вытягивание, который вам назначили.
| `reason:author` | Если вы открыли запрос на вытягивание или проблему и было обновление или новый комментарий.
| `reason:comment`| Если вы оставили комментарий к проблеме, запросу на вытягивание или обсуждению команды.
| `reason:participating` | Если вы оставили комментарий к проблеме, запросу на вытягивание или обсуждению команды и вас упомянули (@mentioned).
| `reason:invitation` | Если вас пригласили в команду, организацию или репозиторий.
| `reason:manual` | Если вы щелкнули **Подписаться** на проблему или запрос на вытягивание, на который вы еще не подписаны.
| `reason:mention` | Вас напрямую упомянули (@mentioned).
| `reason:review-requested` | Вам или команде, членом которой вы являетесь, поступил запрос на проверку запроса на вытягивание.
| `reason:security-alert` | Если создано оповещение системы безопасности для репозитория.
| `reason:state-change`  | При изменении состояния запроса на вытягивание или проблемы. Например, проблема закрыта или запрос на вытягивание объединен с ветвью.
| `reason:team-mention` | Если кто-то упомянул (@mentioned) вашу команду.
| `reason:ci-activity` | Если в репозитории есть обновление CI, например новый статус выполнения рабочего процесса.

{% ifversion fpt or ghec %}
### Поддерживаемые запросы `author:`

Чтобы отфильтровать уведомления по пользователю, можно использовать запрос `author:`. Автор — это исходный автор потока (проблемы, запроса на вытягивание, gist, обсуждения и т. д.), о котором вы получаете уведомление. Например, чтобы просмотреть уведомления о потоках, созданных пользователем Octocat, используйте `author:octocat`.

### Поддерживаемые запросы `org:`

Чтобы отфильтровать уведомления по организации, можно использовать запрос `org`. Организация, которую необходимо указать в запросе, — это организация репозитория, о котором вы получаете уведомление на {% data variables.product.prodname_dotcom %}. Этот запрос полезен, если вы входите в несколько организаций и хотите просмотреть уведомления для определенной организации.

Например, чтобы просмотреть уведомления от организации octo-org, используйте `org:octo-org`. 

{% endif %}

## Пользовательские фильтры {% data variables.product.prodname_dependabot %}

{% ifversion fpt или ghec или ghes %} Если вы используете {% данных variables.product.prodname_dependabot %} для поддержания актуальности зависимостей, можно использовать и сохранить эти настраиваемые фильтры:
- `is:repository_vulnerability_alert` для отображения уведомлений для {% data variables.product.prodname_dependabot_alerts %}.
- `reason:security_alert` для отображения уведомлений для {% data variables.product.prodname_dependabot_alerts %} и запросов на вытягивание для обновлений системы безопасности.
- `author:app/dependabot` для отображения уведомлений, созданных {% data variables.product.prodname_dependabot %}. Сюда входят {% data variables.product.prodname_dependabot_alerts %}, запросы на вытягивание для обновлений системы безопасности и запросы на вытягивание для обновления версий.

Дополнительные сведения о {% data variables.product.prodname_dependabot %} см. в разделе [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies).
{% endif %}

{% ifversion ghae %}

Если вы используете {% data variables.product.prodname_dependabot %}, чтобы узнавать о небезопасных зависимостях, можно использовать и сохранить эти настраиваемые фильтры для отображения уведомлений для {% data variables.product.prodname_dependabot_alerts %}.
- `is:repository_vulnerability_alert` 
- `reason:security_alert`

Дополнительные сведения о {% data variables.product.prodname_dependabot %} см. в разделе [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).
{% endif %}

