---
title: Фильтрация и поиск проблем и запросов на вытягивание
intro: 'Чтобы найти подробные сведения о репозитории в {% data variables.product.product_name %}, можно фильтровать, сортировать и выполнять поиск, а также запрашивать запросы на вытягивание, относящиеся к репозиторию.'
redirect_from:
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /articles/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /articles/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /articles/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /articles/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/finding-information-in-a-repository
  - /articles/finding-information-in-a-repository
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sharing-filters
  - /articles/sharing-filters
  - /github/managing-your-work-on-github/sharing-filters
  - /github/managing-your-work-on-github/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /articles/sorting-issues-and-pull-requests
  - /github/managing-your-work-on-github/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /github/administering-a-repository/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/sharing-filters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
type: how_to
ms.openlocfilehash: 24f91958f98f4b6744ee3b21bf3d748aef062eb6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107600'
---
{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Фильтрация проблем и запросов на вытягивание

Вы можете применять к проблемам и запросам на вытягивание фильтры по умолчанию, чтобы упорядочивать списки.

{% data reusables.search.requested_reviews_search %}

Применяйте фильтры к проблемам и запросам на вытягивание, чтобы найти:
- Все открытые проблемы и запросы на вытягивание.
- Проблемы и запросы на вытягивание, созданные вами.
- Проблемы и запросы на вытягивание, назначенные вам.
- Проблемы и запросы на вытягивание, в которых вас упомянули ([ **@mentioned**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)).

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Щелкните **Фильтры**, чтобы выбрать нужный тип фильтра.
  ![Использование раскрывающегося списка "Фильтры"](/assets/images/help/issues/issues_filter_dropdown.png)

## Фильтрация проблем и запросов на вытягивание по пользователям, которым назначены элементы

Назначив [кому-либо проблему или запрос на вытягивание](/articles/assigning-issues-and-pull-requests-to-other-github-users), вы можете выполнять поиск по лицам, которые получили назначение.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. В правом верхнем углу нажмите на раскрывающееся меню "Кому назначено".
4. В раскрывающемся меню "Кому назначено" перечислены все, у кого есть доступ на запись в ваш репозиторий. Щелкните имя пользователя, которому назначены интересующие вас элементы, или нажмите кнопку **Не назначено никому**, чтобы посмотреть, какие проблемы не назначены.
![Использование раскрывающегося списка "Кому назначено"](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

Чтобы очистить фильтр, нажмите кнопку **Очистить текущий поисковый запрос, фильтры и сортировки**.

{% endtip %}

## Фильтрация проблем и запросов на вытягивание по меткам

После [применения меток к проблеме или запросу на вытягивание](/articles/applying-labels-to-issues-and-pull-requests) вы можете выполнять поиск по меткам.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. В списке меток щелкните метку, чтобы просмотреть проблемы и запросы на вытягивание, к которым она применена.
  ![Список меток репозитория](/assets/images/help/issues/labels-page.png)

{% tip %}

**Совет**. Чтобы очистить фильтр, нажмите кнопку **Очистить текущий поисковый запрос, фильтры и сортировки**.

{% endtip %}

## Фильтрация запросов на вытягивание по состоянию проверки

Вы можете использовать фильтры для вывода списка запросов на вытягивание по состоянию проверки, чтобы искать запросы на вытягивание, которые вы проверили или вам поручили проверить.

Вы можете отфильтровать список запросов на вытягивание в репозитории, чтобы найти:
- Запросы на вытягивание, которые еще не [проверены](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews).
- Запросы на вытягивание, [требующие проверки](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) до слияния.
- Запросы на вытягивание, утвержденные рецензентом.
- Запросы на вытягивание, в которых рецензент запросил изменения.
- Проверенные запросы на вытягивание
- Запросы на вытягивание, которые кто-то попросил вас проверить напрямую
- Запросы на вытягивание, которые [поручили проверить вам или вашей команде](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. В правом верхнем углу нажмите на раскрывающееся меню "Проверки".
  ![Раскрывающееся меню "Проверки" в меню фильтра над списком запросов на вытягивание](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Выберите фильтр, чтобы найти все запросы на вытягивание с этим состоянием.
  ![Список фильтров в раскрывающемся меню "Проверки"](/assets/images/help/pull_requests/pr-review-filters.png)

## Использование поиска для фильтрации проблем и запросов на вытягивание

Используйте расширенные фильтры для поиска проблем и запросов на вытягивание, которые соответствуют определенным критериям.

### Поиск проблем и запросов на вытягивание

{% webui %}

В строке поиска проблем и запросов на вытягивание можно настраивать пользовательские фильтры и сортировать результаты по широкому спектру критериев. Панель поиска можно найти на вкладках **Проблемы** и **Запросы на вытягивание**, а также на [панелях мониторинга "Проблемы и запросы на вытягивание"](/articles/viewing-all-of-your-issues-and-pull-requests).

![Панель поиска проблем и запросов на вытягивание](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Совет.** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Для поиска проблем или запросов на вытягивание можно использовать {% data variables.product.prodname_cli %}. Используйте подкоманду `gh issue list` или `gh pr list` с аргументом `--search` и поисковой запрос.

Например, можно выбрать проблемы, которые никому не назначены, с метками `help wanted` или `bug`, и отсортировать их по дате создания.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

Вы также можете вывести все запросы на вытягивание, в которых упоминается команда `octo-org/octo-team`.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### Сведения об условиях поиска

С помощью условий поиска для запросов на вытягивание и проблем можно:

- Фильтровать проблемы и запросы на вытягивание по автору: `state:open type:issue author:octocat`.
- Фильтровать проблемы и запросы на вытягивание, которые связаны с определенными пользователями, но не обязательно упоминают их ([ **@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)): `state:open type:issue involves:octocat`.
- Фильтровать проблемы и запросы на вытягивание по пользователям, которым они назначены: `state:open type:issue assignee:octocat`.
- Фильтровать проблемы и запросы на вытягивание по метке: `state:open type:issue label:"bug"`.
- Фильтровать условия поиска, используя `-` перед запросом: `state:open type:issue -author:octocat`.

{% tip %}

**Совет.** Вы можете фильтровать проблемы и запросы на вытягивание по метке с помощью логического ИЛИ или логического И.
- Чтобы фильтровать проблемы с помощью логического ИЛИ, используйте синтаксис запятой: `label:"bug","wip"`.
- Чтобы фильтровать проблемы с помощью логического И, используйте отдельные фильтры меток: `label:"bug" label:"wip"`.

{% endtip %}

Для проблем с помощью поиска можно также:

- Фильтровать проблемы, связанные с запросом на вытягивание, по закрывающей ссылке: `linked:pr`{% ifversion issue-close-reasons %}
- Фильтровать проблемы по причине их закрытия: `is:closed reason:complete` или `is:closed reason:"not planned"`{% endif %}

Для запросов на вытягивание можно также использовать поиск, чтобы:
- Фильтровать [черновики](/articles/about-pull-requests#draft-pull-requests) запросов на вытягивание: `is:draft`.
- Фильтровать запросы на вытягивание, которые еще не [проверены](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews): `state:open type:pr review:none`.
- Фильтровать запросы на вытягивание, [требующие проверки](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) до слияния: `state:open type:pr review:required`.
- Фильтровать запросы на вытягивание, утвержденные рецензентом: `state:open type:pr review:approved`.
- Фильтровать запросы на вытягивание, в которых рецензент запросил изменения: `state:open type:pr review:changes_requested`.
- Фильтровать запросы на вытягивание по [рецензенту](/articles/about-pull-request-reviews/): `state:open type:pr reviewed-by:octocat`.
- Фильтрация запросов на вытягивание по конкретному пользователю [, запрашиваемого для проверки](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`
- Отфильтруйте запросы на вытягивание, которые кто-то попросил вас просмотреть напрямую: `state:open type:pr user-review-requested:@me`
- Фильтровать запросы на вытягивание по команде, запросившей проверку: `state:open type:pr team-review-requested:github/docs`
- Фильтровать запросы на вытягивание, связанные с проблемой, которую запрос на вытягивание может закрыть: `linked:issue`.

## Сортировка проблем и запросов на вытягивание

Фильтры можно отсортировать для получения более подробной информации за определенный период.

Отфильтрованное представление можно отсортировать по следующим критериям:

* Самые новые созданные проблемы или запросы на вытягивание.
* Самые старые созданные проблемы или запросы на вытягивание.
* Проблемы или запросы на вытягивание с наибольшим числом комментариев.
* Проблемы или запросы на вытягивание с наименьшим числом комментариев.
* Самые новые обновленные проблемы или запросы на вытягивание.
* Самые старые обновленные проблемы или запросы на вытягивание.
* Самая частая реакция на проблемы или запросы на вытягивание.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
1. В правом верхнем углу нажмите на раскрывающееся меню "Сортировка".
  ![Использование раскрывающейся вкладки "Сортировка"](/assets/images/help/issues/issues_sort_dropdown.png)

Чтобы очистить выбор сортировки, нажмите кнопку **Сортировка** > **Самые новые**.

## Общий доступ к отфильтрованному представлению

При фильтрации или сортировке проблем и запросов на вытягивание URL-адрес браузера автоматически обновляется в соответствии с новым представлением.

Вы можете отправить URL-адрес, сгенерированный проблемой, любому пользователю, и он увидит то же представление фильтра, которое видите вы.

Например, если вы отфильтровали проблемы, назначенные Hubot, и отсортировали результаты по самым старым открытым проблемам, URL-адрес будет выглядеть примерно следующим образом:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## Дополнительные материалы

- [Поиск проблем и запросов на вытягивание](/articles/searching-issues)
