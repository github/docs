---
title: Поиск проблем и запросов на вытягивание
intro: 'Можно выполнять поиск проблем и запросов на вытягивание на {% data variables.product.product_name %} и использовать квалификаторы поиска в любом сочетании, чтобы уточнить результаты.'
redirect_from:
  - /articles/searching-issues
  - /articles/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search issues & PRs
ms.openlocfilehash: 8565d2d31c66291114da8ab4a95312a568d39ae3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106464'
---
Вы можете искать проблемы и запросы на вытягивание глобально во всех {% data variables.product.product_name %}, или искать проблемы и запросы на вытягивание в определенной организации. Дополнительные сведения см. в разделе [Сведения о поиске в {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

{% tip %}

**Советы.** {% ifversion ghes or ghae %}
  - Эта статья содержит примеры поиска на веб-сайте {% data variables.product.prodname_dotcom %}.com, но вы можете использовать те же фильтры поиска в {% data variables.location.product_location %}. {% endif %}
  - Список вариантов синтаксиса поиска, которые можно добавить в любой квалификатор поиска для дальнейшего улучшения результатов, см. в разделе [Общие сведения о синтаксисе поиска](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).
  - Используйте кавычки для многословных условий поиска. Например, если вы хотите найти проблемы с меткой "Выполняется", выполните поиск `label:"in progress"`. Регистр в поиске не учитывается.
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

## Поиск только проблем или запросов на вытягивание

По умолчанию поиск {% data variables.product.product_name %} возвращает и проблемы, и запросы на вытягивание. Однако результаты поиска можно ограничить только проблемами или только запросами на вытягивание с помощью квалификатора `type` или `is`.

| Квалификатор  | Пример
| ------------- | -------------
| `type:pr` | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) соответствует запросам на вытягивание со словом "cat".
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) соответствует проблемам, содержащим слово "github" и имеющим комментарий @defunkt.
| `is:pr` | [**event type:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) соответствует запросам на вытягивание со словом "event".
| `is:issue` | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) соответствует закрытым проблемам с меткой "bug".

## Поиск по названию, тексту или комментариям

С помощью квалификатора `in` можно ограничить поиск заголовками, текстом, комментариями или любым сочетанием этих значений. Если опустить этот квалификатор, выполняется поиск заголовков, текста и комментариев.

| Квалификатор     | Пример
| ------------- | -------------
| `in:title` | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues)соответствует проблемам со словом "warning" в заголовке.
| `in:body` | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) соответствует проблемам со словом "error" в заголовке или тексте.
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) соответствует проблемам, в комментариях которых упоминается "shipit".

## Поиск в репозиториях пользователя или организации

Для поиска проблем и запросов на вытягивание во всех репозиториях, принадлежащих определенному пользователю или организации, можно использовать квалификатор `user` или `org`. Для поиска проблем и запросов на вытягивание в определенном репозитории можно использовать квалификатор `repo`.

{% data reusables.pull_requests.large-search-workaround %}

| Квалификатор        | Пример
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) соответствует проблемам со словом "ubuntu" в репозиториях, принадлежащих @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) соответствует проблемам в репозиториях, принадлежащих организации GitHub.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) соответствует проблемам из проекта shumway @mozilla, созданным до марта 2012 г.

## Поиск по открытому или закрытому состоянию

Вы можете фильтровать проблемы и запросы на вытягивание по тому, открыты они или закрыты, с помощью квалификатора `state` или `is`.

| Квалификатор        | Пример
| ------------- | -------------
| `state:open` | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) соответствует открытым проблемам, в которых упоминается @vmg со словом "libraries".
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) соответствует закрытым проблемам со словом "design" в тексте.
| `is:open` | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) соответствует открытым проблемам со словом "performance".
| `is:closed` | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) соответствует закрытым проблемам и запросам на вытягивание со словом "android".

{% ifversion issue-close-reasons %}
## Поиск по причине закрытия проблемы

Проблемы можно отфильтровать по причине, заданной при закрытии проблемы, используя квалификатор `reason`.

| Квалификатор        | Пример
| ------------- | -------------
| `reason:completed` | [**libraries is:closed reason:completed**](https://github.com/search?q=libraries+is%3Aclosed+reason%3Acompleted&type=Issues) соответствует проблемам со словом "библиотеки", которые были закрыты как "завершенные".
| `reason:"not planned"` | [**библиотеки is:закрыто reason:незапланированные**](https://github.com/search?q=libraries+is%3Aclosed+reason%3A%22not+planned%22&type=Issues) соответствует проблемам со словом "библиотеки", которые были закрыты как "незапланированные".
 
{% endif %}

## Фильтрация по видимости репозитория

Вы можете фильтровать по видимости репозитория, содержащего проблемы и запросы на вытягивание, с помощью квалификатора `is`. Дополнительные сведения см. в разделе [Сведения о репозиториях](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

| Квалификатор | Пример | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) соответствует проблемам и запросам на вытягивание в общедоступных репозиториях.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues) соответствует проблемам и запросам на вытягивание во внутренних репозиториях.{% endif %} | `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues) соответствует проблемам и запросам на вытягивание, содержащим слово "cupcake", в частных репозиториях, к которым у вас есть доступ.

## Поиск по автору

Квалификатор `author` позволяет находить проблемы и запросы на вытягивание, созданные определенным пользователем или учетной записью интеграции.

| Квалификатор     | Пример
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) соответствует проблемам и запросам на вытягивание, содержащим слово "cool" и созданным @gjtorikian.
| | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) соответствует проблемам, написанным @mdo, в тексте которых имеется слово "bootstrap".
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) соответствует проблемам, созданным учетной записью интеграции с именем "robot".

## Поиск по уполномоченному

Квалификатор `assignee` позволяет находить проблемы и запросы на вытягивание, назначенные определенному пользователю. Вы не можете искать проблемы и запросы на вытягивание, назначенные _любому_ уполномоченному, однако вы можете искать [проблемы и запросы на вытягивание, у которых нет уполномоченного](#search-by-missing-metadata).

| Квалификатор     | Пример
| ------------- | -------------
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) соответствует проблемам и запросам на вытягивание в проекте libgit2 в libgit2, которые назначены @vmg.

## Поиск по упоминаниям

Квалификатор `mentions` позволяет находить проблемы, в которых упоминается определенный пользователь. Дополнительные сведения см. в разделе [Упоминание людей и команд](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams).

| Квалификатор     | Пример
| ------------- | -------------
| <code>mentions:<em>USERNAME</em></code> | [ **`resque mentions:defunkt`**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) соответствует проблемам со словом "resque", в которых упоминается @defunkt.

## Поиск по упоминаемым командам

Для организаций и команд, к которым вы принадлежите, вы можете использовать квалификатор `team`, чтобы найти проблемы или запросы на вытягивание, в которых упоминается (@mention) определенная команда в этой организации. Замените эти примеры имен на названия вашей организации и команды, чтобы выполнить поиск.

| Квалификатор        | Пример
| ------------- | -------------
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **`team:jekyll/owners`** соответствует проблемам, в которых упоминается команда `@jekyll/owners`.
| | **team:myorg/ops is:open is:pr** соответствует открытым запросам на вытягивание, в которых упоминается команда `@myorg/ops`.

## Поиск по комментатору

Квалификатор `commenter` позволяет находить проблемы, содержащие комментарий определенного пользователя.

| Квалификатор        | Пример
| ------------- | -------------
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) соответствует проблемам в репозиториях, принадлежащих GitHub, которые содержат слово "github", и имеют комментарий от @defunkt.

## Поиск по пользователю, вовлеченному в проблему или запрос на вытягивание

Квалификатор `involves` можно использовать для поиска проблем, которые каким-либо образом связаны с определенным пользователем. Квалификатор `involves` является логическим ИЛИ между квалификаторами `author`, `assignee`, `mentions` и `commenter` для одного пользователя. Другими словами, этот квалификатор находит проблемы и запросы на вытягивание, которые либо созданы определенным пользователем, либо назначены этому пользователю, либо упоминают его, либо имеют от него комментарий.

| Квалификатор        | Пример
| ------------- | -------------
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** соответствует проблемам, в которые вовлечен пользователь @defunkt или @jlord.
| | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) соответствует проблемам, в которые вовлечен @mdo, и в тексте которых нет слова "bootstrap".

## Поиск связанных проблем и запросов на вытягивание
Вы можете сузить результаты, включив в них только проблемы, связанные с запросом на вытягивание с помощью закрывающей ссылки, или запросы на вытягивание, связанные с проблемой, которую запрос на вытягивание может закрыть.

| Квалификатор | Пример |
| ------------- | ------------- |
| `linked:pr` | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) соответствует открытым проблемам в репозитории `desktop/desktop`, которые связаны с запросом на вытягивание с помощью закрывающей ссылки. |
| `linked:issue` | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) соответствует закрытым запросам на вытягивание в репозитории `desktop/desktop`, связанным с проблемой, которую этот запрос на вытягивание может закрыть. |
| `-linked:pr` | [**repo:desktop/desktop is:open -linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) соответствует открытым проблемам в репозитории `desktop/desktop`, которые не связаны с запросом на вытягивание с помощью закрывающей ссылки. |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) соответствует открытым запросам на вытягивание в репозитории `desktop/desktop`, не связанным с проблемой, которую этот запрос на вытягивание может закрыть. |

## Поиск по метке

Вы можете сужать результаты по меткам, используя квалификатор `label`. Так как проблемы могут иметь несколько меток, можно включать в список отдельный квалификатор для каждой проблемы.

| Квалификатор        | Пример
| ------------- | -------------
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) соответствует проблемам с меткой "help wanted", которые находятся в репозиториях Ruby.
|  | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) соответствует проблемам со словом "broken" в тексте, у которых нет метки "bug", но *есть* метка "priority".
| | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) соответствует проблемам с метками "ошибка" и "разрешено".
| | [**label:bug, устранены**](https://github.com/search?q=label%3Abug%2Cresolved&type=Issues) проблемы с меткой "ошибка" или меткой "разрешено".

## Поиск по вехе

Квалификатор `milestone` позволяет находить проблемы или запросы на вытягивание, которые являются частью [вехи](/articles/about-milestones) в репозитории.

| Квалификатор        | Пример
| ------------- | -------------
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) соответствует проблемам, которые находятся в вехе с именем "overhaul".
| | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) соответствует проблемам, которые находятся в вехе с именем "bug fix".

## Поиск по доске проекта

Квалификатор `project` можно использовать для поиска проблем, связанных с определенной [доской проекта](/articles/about-project-boards/) в репозитории или организации. Искать доски проекта необходимо по номеру доски проекта. Номер доски проекта можно найти в конце URL-адреса доски проекта.

| Квалификатор        | Пример
| ------------- | -------------
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** соответствует проблемам, принадлежащим GitHub, которые связаны с доской проекта 57 в организации.
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** соответствует проблемам, связанным с доской проекта 1 в лингвистическом репозитории @github.

## Поиск по состоянию фиксации

Запросы на вытягивание можно фильтровать по состоянию фиксации. Это особенно удобно, если вы используете [API состояния](/rest/reference/commits#commit-statuses) или службу CI.

| Квалификатор        | Пример
| ------------- | -------------
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) соответствует запросам на вытягивание, открытым в репозиториях Go и находящимся в состоянии ожидания.
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) соответствует открытым запросам на вытягивание со словом "finally" в тексте, которые находятся в состоянии успеха.
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) соответствует запросам на вытягивание, открытым в мае 2015 г., которые находятся в состоянии сбоя.

## Поиск по SHA фиксации

Если вы знаете конкретный хэш SHA фиксации, его можно использовать для поиска запросов на вытягивание, содержащих этот SHA. Синтаксис требует, чтобы SHA имел не менее семи символов.

| Квалификатор        | Пример
| ------------- | -------------
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) соответствует запросам на вытягивание со SHA фиксации, который начинается с `e1109ab`.
| | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) соответствует объединенным запросам на вытягивание со SHA фиксации, который начинается с `0eff326d6213c`.

## Поиск по имени ветви

Вы можете фильтровать запросы на вытягивание по ветви, из которой они поступили ("головной" ветви), или по ветви, в которую они объединяются ("базовой" ветви).

| Квалификатор        | Пример
| ------------- | -------------
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) соответствует закрытым запросам на вытягивание, открытым из ветвей, имена которых начинаются со слова "change".
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) соответствует запросам на вытягивание, которые объединяются в ветвь `gh-pages`.

## Поиск по языку

С помощью квалификатора `language` можно искать проблемы и запросы на вытягивание в репозиториях, написанных на определенном языке.

| Квалификатор        | Пример
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) соответствует открытым проблемам, находящимся в репозиториях Ruby.

## Поиск по количеству комментариев

Для поиска по количеству комментариев вы можете использовать квалификатор `comments` вместе с [квалификаторами "больше чем", "меньше чем" и квалификаторами диапазона](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Квалификатор        | Пример
| ------------- | -------------
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3E100&type=Issues) соответствует закрытым проблемам с более чем 100 комментариями.
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) соответствует проблемам с количеством комментариев от 500 до 1000.

## Поиск по количеству взаимодействий

Вы можете фильтровать проблемы и запросы на вытягивание по количеству взаимодействий с помощью квалификатора `interactions` вместе с [квалификаторами "больше чем", "меньше чем" и квалификаторами диапазона](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax). Количество взаимодействий — это количество реакций и комментариев по проблеме или запросу на вытягивание.

| Квалификатор        | Пример
| ------------- | -------------
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) соответствует запросам на вытягивание или проблемам, имеющим более 2000 взаимодействий.
| | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) соответствует запросам на вытягивание или проблемам с количеством взаимодействий от 500 до 1000.

## Поиск по количеству реакций

Вы можете фильтровать проблемы и запросы на вытягивание по количеству реакций с помощью квалификатора `reactions` вместе с [квалификаторами "больше чем", "меньше чем" и квалификаторами диапазона](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Квалификатор        | Пример
| ------------- | -------------
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) соответствует проблемам с количеством реакций более 1000.
| | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) соответствует проблемам с количеством реакций от 500 до 1000.

## Поиск черновиков запросов на вытягивание
Вы можете фильтровать по черновикам запросов на вытягивание. Дополнительные сведения см. в разделе [Сведения о запросах на вытягивание](/articles/about-pull-requests#draft-pull-requests).

| Квалификатор        | Пример
| ------------- | -------------
| `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue) соответствует черновикам запросов на вытягивание.
| `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) соответствует запросам на вытягивание, которые готовы к проверке.

## Поиск по состоянию проверки и рецензенту запроса на вытягивание

Вы можете фильтровать запросы на вытягивание на основе их [состояния проверки](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) (_нет_, _требуется_, _утверждено_ или _запрос на изменение_), рецензента и запрошенного рецензента.

| Квалификатор        | Пример
| ------------- | -------------
| `review:none` | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) соответствует запросам на вытягивание, которые не были проверены.
| `review:required` | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) соответствует запросам на вытягивание, которым требуется проверка перед объединением.
| `review:approved` | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) соответствует запросам на вытягивание, утвержденным рецензентом.
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) соответствует запросам на вытягивание, рецензент которых запросил изменения.
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) соответствует запросам на вытягивание, проверенным конкретным лицом.
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) соответствует запросам на вытягивание, в которых запрошена проверка указанным лицом. После того как запрошенные рецензенты проверят запрос на вытягивание, они перестают отображаться в результатах поиска. Если запрошенный пользователь находится в команде, запрашиваемой для проверки, в результатах поиска также будут отображаться запросы для этой команды.
| <code>user-review-requested:@me</code> | [**type:pr user-review-requested:@me**](https://github.com/search?q=is%3Apr+user-review-requested%3A%40me+) соответствует запросам на вытягивание, которые вам было предложено просмотреть напрямую.
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:github/docs соответствует запросам**](https://github.com/search?q=type%3Apr+team-review-requested%3Agithub%2Fdocs&type=pullrequests) на вытягивание, которые имеют запросы на проверку от команды `github/docs`. После того как запрошенные рецензенты проверят запрос на вытягивание, они перестают отображаться в результатах поиска.

## Поиск по моменту создания или последнего обновления проблемы или запроса на вытягивание

Вы можете фильтровать проблемы в зависимости от времени создания или времени последнего обновления. Для фильтрации по времени создания проблемы можно использовать квалификатор `created`; чтобы узнать, когда проблема была в последний раз обновлена, можно использовать квалификатор `updated`.

Оба квалификатора принимают дату в качестве параметра. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Квалификатор        | Пример
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) соответствует открытым проблемам, созданным до 2011 г. в репозиториях, написанных на C#.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) соответствует проблемам со словом "weird" в тексте, которые были обновлены после февраля 2013 г.

## Поиск по моменту закрытия проблемы или запроса на вытягивание

Вы можете фильтровать проблемы и запросы на вытягивание по времени их закрытия, используя квалификатор `closed`.

Этот квалификатор принимает дату в качестве параметра. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Квалификатор        | Пример
| ------------- | -------------
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) соответствует проблемам и запросам на вытягивание в Swift, закрытым после 11 июня 2014 г.
| | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) соответствует проблемам и запросам на вытягивание со словом "data" в тексте, которые были закрыты до октября 2012 г.

## Поиск по моменту объединения запроса на вытягивание

Вы можете фильтровать проблемы и запросы на вытягивание по времени их объединения, используя квалификатор `merged`.

Этот квалификатор принимает дату в качестве параметра. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Квалификатор        | Пример
| ------------- | -------------
| <code>merged:<em>YYYY-MM-DD</em></code> | [ **`language:javascript merged:<2011-01-01`**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) соответствует запросам на вытягивание в репозиториях JavaScript, которые были объединены до 2011 г.
| | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues) соответствует запросам на вытягивание в Ruby со словом "fast" в заголовке, которые были объединены после мая 2014 г.

## Поиск в зависимости от того, объединен или не объединен запрос на вытягивание

Запросы на вытягивание можно фильтровать в зависимости от того, объединены они или нет, с помощью квалификатора `is`.

| Квалификатор        | Пример
| ------------- | -------------
| `is:merged` | [**bug is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) соответствует объединенным запросам на вытягивание со словом "bug".
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) соответствует запросам на вытягивание со словом "ошибка", которые открыты или были закрыты без слияния.

## Поиск в зависимости от того, является ли репозиторий архивным

С помощью квалификатора `archived` можно фильтровать результаты в зависимости от того, находится ли запрос на вытягивание в архивном репозитории.

| Квалификатор     | Пример
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) соответствует проблемам и запросам на вытягивание, содержащим слово "GNOME" и находящимся в архивных репозиториях, к которым у вас есть доступ.
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) соответствует проблемам и запросам на вытягивание, содержащим слово "GNOME" и находящимся не в архивных репозиториях, к которым у вас есть доступ.

## Поиск в зависимости от того, заблокирована ли беседа

Вы можете искать проблему или запрос на вытягивание, в котором есть заблокированная беседа, с помощью квалификатора `is`. Дополнительные сведения см. в разделе [Блокировка бесед](/communities/moderating-comments-and-conversations/locking-conversations).

| Квалификатор        | Пример
| ------------- | -------------
| `is:locked` | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) соответствует проблемам или запросам на вытягивание со словами "code of conduct", которые имеют заблокированную беседу и находятся не в архивном репозитории.
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) соответствует проблемам или запросам на вытягивание со словами "code of conduct", которые имеют разблокированную беседу и находятся не в архивном репозитории.

## Поиск по отсутствующим метаданным

С помощью квалификатора `no` можно сузить поиск до проблем и запросов на вытягивание, в которых отсутствуют определенные метаданные. Это могут быть следующие метаданные:

* Метки
* Вехи
* Уполномоченные
* Проекты

| Квалификатор        | Пример
| ------------- | -------------
| `no:label` | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) соответствует проблемам и запросам на вытягивание с словом "priority", в которых нет никаких меток.
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) соответствует проблемам, не связанным с вехой, содержащей слово "sprint".
| `no:assignee` | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) соответствует проблемам, не связанным с уполномоченным, содержащим слово "important" и находящимся в репозиториях Java.
| `no:project` | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) соответствует проблемам, не связанным с доской проекта и содержащим слово "build".

## Дополнительные материалы

- [Сортировка результатов поиска](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
