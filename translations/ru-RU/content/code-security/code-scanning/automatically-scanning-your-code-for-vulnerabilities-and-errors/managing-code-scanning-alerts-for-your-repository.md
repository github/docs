---
title: Управление оповещениями проверки кода для репозитория
shortTitle: Manage alerts
intro: 'Из представления безопасности {% ifversion delete-code-scanning-alerts %}вы можете просматривать, исправлять, закрывать или удалять оповещения {% else %} вы можете просматривать, исправлять или закрывать оповещения{% endif %} для потенциальных уязвимостей или ошибок в коде репозитория.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
ms.openlocfilehash: b672af79096c1f52a0670cd747ef159f071a3d07
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147693330'
---
{% data reusables.code-scanning.beta %}

## Просмотр оповещений в репозитории

Любой пользователь с разрешением на чтение для репозитория может просматривать заметки {% data variables.product.prodname_code_scanning %} для запросов на включение внесенных изменений. Дополнительные сведения см. в разделе [Рассмотрение оповещений {% data variables.product.prodname_code_scanning %} в запросах на вытягивание](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).

Чтобы просмотреть сводку по всем оповещениям в репозитории на вкладке **Безопасность**, требуется разрешение на запись.

По умолчанию на странице оповещений о проверке кода применяется фильтр, в результате на ней отображаются оповещения только для ветви репозитория по умолчанию.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Кроме того, отфильтровать оповещения можно с помощью раскрывающихся меню, или указав нужный текст в поле поиска. Например, можно отфильтровать список по инструменту, который использовался для идентификации оповещений.
   ![Фильтрация по средству](/assets/images/help/repository/code-scanning-filter-by-tool.png) {% data reusables.code-scanning.explore-alert %} ![Сводка оповещений](/assets/images/help/repository/code-scanning-click-alert.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} ![Раздел "Затронутые ветви" в оповещении](/assets/images/help/repository/code-scanning-affected-branches.png){% endif %}
1. Если в оповещении выделена проблема с потоком данных, щелкните **Показать пути**, чтобы отобразить путь из источника данных к приемнику, где используется этот поток.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Ссылка "Показать пути" в оповещении](/assets/images/help/repository/code-scanning-show-paths.png) {% else %} ![Ссылка "Показать пути" в оповещении](/assets/images/enterprise/3.4/repository/code-scanning-show-paths.png) {% endif %}
2. Оповещения, связанные с анализом {% data variables.product.prodname_codeql %} содержат описание проблемы. Нажмите кнопку **Дополнительно**, чтобы узнать, как исправить код.
   ![Сведения о предупреждении](/assets/images/help/repository/code-scanning-alert-details.png)

Дополнительные сведения см. в статье [Сведения об оповещениях функции "{% data variables.product.prodname_code_scanning %}"](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts).

{% note %}

**Примечание.** В анализе результатов работы функции "{% data variables.product.prodname_code_scanning %}" с помощью {% data variables.product.prodname_codeql %} сведения о последнем запуске показываются в заголовке в верхней части списка оповещений функции "{% data variables.product.prodname_code_scanning %}" для репозитория. 

Например, там приводится время последней проверки, количество проанализированных строк кода по сравнению с общим количеством строк кода в репозитории, а также общее количество созданных оповещений.
  ![Баннер пользовательского интерфейса](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}

## Фильтрация оповещений функции "{% data variables.product.prodname_code_scanning %}"

Оповещения, которые показаны в представлении оповещений для функции "{% data variables.product.prodname_code_scanning %}", можно фильтровать. Это полезно, когда нужно выделить определенный тип оповещений. Для уточнения списка отображаемых оповещений можно использовать ряд стандартных фильтров и ключевых слов. 

- Чтобы применить стандартный фильтр, нажмите **Фильтры** или фильтр, показанный в заголовке списка оповещений, и выберите вариант из раскрывающегося списка.
  {% ifversion fpt or ghes or ghec %}![Стандартные фильтры](/assets/images/help/repository/code-scanning-predefined-filters.png) {% else %}![Стандартные фильтры](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- Чтобы использовать ключевое слово, введите его в текстовом поле фильтров или:
  1. Щелкните текстовое поле фильтров, чтобы открыть список всех доступных ключевых слов фильтра.
  2. Щелкните нужное ключевое слово и выберите значение из раскрывающегося списка.
  ![Список фильтров по ключевым словам](/assets/images/help/repository/code-scanning-filter-keywords.png)

Преимущество фильтров по ключевым словам состоит в том, что в раскрывающихся списках отображаются только значения с результатами. Благодаря этому вы не будете задавать фильтры, которые не дают результатов.

Если ввести несколько фильтров, в представлении будут отображаться оповещения, соответствующие _всем_ этим фильтрам. Например, с фильтром `is:closed severity:high branch:main` будут отображаться только закрытые оповещения с высоким уровнем серьезности в ветви `main`. Исключение составляют фильтры, относящиеся к ссылкам (`ref`, `branch` и `pr`): например, с фильтром `is:open branch:main branch:next` отображаются открытые оповещения как из ветви `main`, так и из ветви `next`.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}

К фильтру `tag` можно добавить префикс `-`, чтобы исключить результаты с этим тегом. Например, с фильтром `-tag:style` отображаются только оповещения, у которых нет тега `style` {% ifversion codeql-ml-queries %}, а фильтр `-tag:experimental` исключает все экспериментальные оповещения. Дополнительную информацию см. в разделе "[Сведения об оповещениях функции "{% data variables.product.prodname_code_scanning %}"](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)".{% else %}.{% endif %}

{% endif %}

### Ограничение результатов только кодом приложения

С помощью фильтра "Оповещения только в коде приложения" или ключевого слова `autofilter:true` со значением можно ограничить результаты оповещениями в коде приложения. Дополнительные сведения о типах кода, отличных от кода приложения, см. в разделе "[Сведения о метках для оповещений, не входящих в код приложения](#about-labels-for-alerts-that-are-not-found-in-application-code)".

{% ifversion fpt or ghes or ghec %}

## Поиск в оповещениях функции "{% data variables.product.prodname_code_scanning %}"

В списке оповещений можно выполнять поиск. Это полезно, если в репозитории имеется много оповещений или если вы не знаете точное имя оповещения. {% data variables.product.product_name %} позволяет искать произвольный текст в следующих расположениях:
- Имя оповещения.
- Сведения об оповещении (также включают информацию, скрытую из представления по умолчанию в сворачиваемом разделе **Дополнительно**) {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Сведения об оповещении, используемые при поиске {% else %} ](/assets/images/help/repository/code-scanning-free-text-search-areas.png)Сведения об оповещении, используемые при поиске![](/assets/images/enterprise/3.4/repository/code-scanning-free-text-search-areas.png) {% endif %}

| Вид поиска | Пример синтаксиса | Результаты |
| ---- | ---- | ---- |
| Поиск по одному слову | `injection` | Возвращает все оповещения, содержащие слово `injection` |
| Поиск по нескольким словам | `sql injection` | Возвращает все оповещения, содержащие слова `sql` или `injection` |
| Поиск точного совпадения</br>(используются двойные кавычки) |  `"sql injection"` | Возвращает все оповещения, содержащие точную фразу `sql injection` |
| Поиск с оператором OR | `sql OR injection` | Возвращает все оповещения, содержащие слова `sql` или `injection` |
| Поиск с оператором AND | `sql AND injection` | Возвращает все оповещения, содержащие оба слова: `sql` и `injection` | 

{% tip %}

**Советы** 
- Поиск по нескольким словам эквивалентен поиску с оператором OR.
- Поиск с оператором AND возвращает результаты, в которых слова из поискового запроса находятся в имени оповещения или в сведениях о нем _в любом месте_ и в любом порядке.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. Справа от раскрывающихся меню **Фильтры** введите в поле поиска произвольного текста ключевые слова, которые нужно найти.
  ![Поле поиска произвольного текста](/assets/images/help/repository/code-scanning-search-alerts.png)
2. Нажмите <kbd>Ввод</kbd>. В список оповещений попадут открытые оповещения функции "{% data variables.product.prodname_code_scanning %}", соответствующие условиям поиска.

{% endif %}

{% ifversion code-scanning-task-lists %}
## Отслеживание оповещений функции "{% data variables.product.prodname_code_scanning %}" в проблемах

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} {% data reusables.code-scanning.github-issues-integration %} {% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Исправление оповещения

Любой пользователь с разрешением на запись для репозитория может исправить оповещение, зафиксировав исправление в коде. Если в репозитории настроен запуск функции "{% data variables.product.prodname_code_scanning %}" для запросов на включение внесенных изменений, рекомендуется создать такой запрос с исправлением. В результате этого будет выполнена {% data variables.product.prodname_code_scanning %}, проанализированы изменения, и система проведет тест, чтобы убедиться, что ваше исправление не создает новых проблем. Дополнительные сведения см. в разделе "[{% data variables.product.prodname_code_scanning %} - настройка](/code-security/secure-coding/configuring-code-scanning)" и "[Рассмотрение оповещений функции "{% data variables.product.prodname_code_scanning %}" в запросах на включение внесенных изменений](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

Если у вас есть разрешение на запись для репозитория, чтобы просмотреть исправленные оповещения, откройте сводку по оповещениям и нажмите кнопку **Закрытые**. Дополнительные сведения см. в разделе "[Просмотр оповещений для репозитория](#viewing-the-alerts-for-a-repository)". В списке "Закрытые" отображаются исправленные оповещения и оповещения, отклоненные пользователями.

С помощью поиска произвольного текста или фильтров можно отобразить подмножество оповещений и отметить все подходящие как закрытые. 

Оповещения могут быть исправлены в одной ветви, но не в другой. Чтобы проверить, исправлено ли оповещение в определенной ветви, используйте "Ветвь" в сводке по оповещениям.

![Фильтрация оповещений по ветви](/assets/images/help/repository/code-scanning-branch-filter.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% note %}

**Примечание.** При сканировании кода с использованием нескольких конфигураций можно получить оповещение с несколькими источниками анализа. Если вы не запускаете все конфигурации регулярно, могут отображаться оповещения, исправленные в одном источнике анализа, но не в другом. Дополнительные сведения см. в разделе [Сведения об источниках анализа](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-analysis-origins).

{% endnote %} {% endif %}
## Закрытие {% ifversion delete-code-scanning-alerts %}или удаление{% endif %} оповещений

Закрыть оповещение можно двумя способами. Можно устранить проблему в коде или отклонить оповещение. {% ifversion delete-code-scanning-alerts %}Кроме того, если у вас есть разрешения администратора для репозитория, вы можете удалить оповещения. Удаление оповещений полезно в ситуациях, когда вы настроили инструмент "{% data variables.product.prodname_code_scanning %}", а затем решили удалить его или если вы настроили анализ {% data variables.product.prodname_codeql %} с большим числом запросов, часть которых перестала быть нужной, после чего удалили некоторые запросы из средства. В обоих случаях удаление оповещений позволяет сократить число результатов функции "{% data variables.product.prodname_code_scanning %}". Оповещения можно удалить из сводного списка на вкладке **Безопасность**.{% endif %}

Отклонение используется для закрытия оповещений, не требующих исправления. {% data reusables.code-scanning.close-alert-examples %} Отклонить оповещения можно в заметках функции "{% data variables.product.prodname_code_scanning %}" в коде или в сводном списке на вкладке **Безопасность**.

Когда оповещение отклоняется:

- оно отклоняется во всех ветвях;
- оно удаляется из текущих оповещений проекта;
- оно перемещается в список "Закрытые" в сводке по оповещениям, где при необходимости его можно открыть заново;
- Причина, по которой было закрыто оповещение, записывается.{% ifversion comment-dismissed-code-scanning-alert %} 
- При необходимости вы можете прокомментировать закрытие с указанием его контекста.{% endif %}
- при следующем запуске функции "{% data variables.product.prodname_code_scanning %}" для того же кода оповещение не создается.

{% ifversion delete-code-scanning-alerts %}При удалении оповещения:

- оно удаляется во всех ветвях;
- оно удаляется из текущих оповещений проекта;
- оно _не_ добавляется в список "Закрытые" в сводке оповещений;
- если код, для которого было создано оповещение, остается неизменным, и то же средство " {% data variables.product.prodname_code_scanning %}" запускается снова без изменений конфигурации, оповещение снова появится в результатах анализа.{% endif %}

Чтобы закрыть {% ifversion delete-code-scanning-alerts %}или удалить{% endif %} оповещения, сделайте следующее:

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}{% ifversion delete-code-scanning-alerts %}
1. Если у вас есть разрешения администратора для репозитория и вы хотите удалить оповещения для этого средства "{% data variables.product.prodname_code_scanning %}", установите некоторые или все флажки и нажмите кнопку **Удалить**.

   ![Удаление оповещений](/assets/images/help/repository/code-scanning-delete-alerts.png)

   При необходимости с помощью поиска произвольного текста или фильтров можно отобразить подмножество оповещений и одновременно удалить все соответствующие оповещения. Например, если вы удалили запрос из анализа {% data variables.product.prodname_codeql %}, с помощью фильтра "Правило" можно показать только оповещения для этого запроса, а затем выбрать и удалить все эти оповещения.

{% ifversion ghes or ghae %} ![Фильтрация оповещений по правилу](/assets/images/help/repository/code-scanning-filter-by-rule.png) {% else %} ![Фильтрация оповещений по правилу](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png) {% endif %}{% endif %}
1. Если вы хотите отклонить оповещение, важно сначала изучить его, чтобы выбрать правильную причину отклонения. Щелкните оповещение, которое нужно изучить.
![Откройте оповещение в списке сводки](/assets/images/help/repository/code-scanning-click-alert.png) {%- ifversion comment-dismissed-code-scanning-alert %}
1. Просмотрите оповещение, щелкните **Закрыть оповещение** и выберите причину закрытия оповещения. 
  ![Снимок экрана: оповещение проверки кода с выделенным раскрывающимся списком для выбора причины закрытия](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {%- else %}
1. Просмотрите оповещение, а затем нажмите **Отклонить** и выберите причину отклонения оповещения.
  ![Выбор причины закрытия оповещения](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {%- endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### Отклонение нескольких оповещений одновременно

Если в проекте есть несколько оповещений, которые нужно отклонить по одной причине, в сводке по оповещениям их можно отклонить все сразу. Как правило, необходимо отфильтровать список, а затем отклонить все подходящие оповещения. Например, может потребоваться отклонить все текущие оповещения в проекте, имеющие отметку определенной уязвимости CWE.

## Дополнительные материалы

- "[Рассмотрение оповещений функции "{% data variables.product.prodname_code_scanning %}" в запросах на включение внесенных изменений](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"
- "[Настройка функции "{% data variables.product.prodname_code_scanning %}" для репозитория](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"
- "[Сведения об интеграции с функцией "{% data variables.product.prodname_code_scanning %}"](/code-security/secure-coding/about-integration-with-code-scanning)"
