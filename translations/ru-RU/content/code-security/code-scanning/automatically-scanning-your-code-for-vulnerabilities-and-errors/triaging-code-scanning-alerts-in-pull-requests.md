---
title: Рассмотрение оповещений проверки кода в запросах на вытягивание
shortTitle: Triage alerts in pull requests
intro: 'Если {% data variables.product.prodname_code_scanning %} выявляет проблему в запросе на вытягивание, вы можете просмотреть выделенный код и разрешить оповещение.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
ms.openlocfilehash: 657a4c90b1296da97b08ab704cbace5c4e9ab982
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108806'
---
{% data reusables.code-scanning.beta %}

## Сведения о результатах функции {% data variables.product.prodname_code_scanning %} для запросов на вытягивание

В репозиториях можно настроить {% data variables.product.prodname_code_scanning %} как проверку запросов на вытягивание, при этом {% data variables.product.prodname_code_scanning %} будет проверять код в запросах на вытягивание. По умолчанию проверка осуществляется только для запросов на вытягивание, предназначенных для ветви по умолчанию, но при необходимости это поведение можно настроить в {% data variables.product.prodname_actions %} или в сторонней системе непрерывной интеграции и поставки (CI/CD). Если после слияния изменений в целевой ветви появятся новые оповещения {% data variables.product.prodname_code_scanning %}, они будут отображаться в нескольких расположениях.

- Проверьте результаты в запросе на вытягивание {% ifversion code-scanning-pr-conversations-tab %}.
- Вкладка **Сообщения** запроса на вытягивание в рамках проверки запроса на вытягивание {% endif %}. 
- Вкладка **Измененные файлы** запроса на вытягивание.

Если у вас есть разрешение на запись для репозитория, вы можете просмотреть все существующие оповещения функции {% data variables.product.prodname_code_scanning %} на вкладке **Безопасность**. Дополнительные сведения об оповещениях репозитория см. в разделе [Управление оповещениями {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).

В репозиториях, где {% данных variables.product.prodname_code_scanning %} настроено для сканирования при каждой отправке кода, {% данных variables.product.prodname_code_scanning %} также сопоставляет результаты с любыми открытыми запросами на вытягивание и добавляет оповещения в виде заметок в тех же местах, что и другие проверки запросов на вытягивание. Дополнительные сведения см. в разделе [Сканирование при принудительной отправке](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push).

Если запрос на вытягивание нацелен на защищенную ветвь, в которой используется функция {% data variables.product.prodname_code_scanning %}, а владелец репозитория настроил обязательные проверки состояния, перед слиянием запроса на вытягивание необходимо пройти проверку "Результаты {% data variables.product.prodname_code_scanning_capc %}. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging).

## Сведения об использовании функции {% data variables.product.prodname_code_scanning %} в качестве проверки запроса на вытягивание

Функцию {% data variables.product.prodname_code_scanning %} можно настроить в качестве проверки запроса на вытягивание разными способами, поэтому в каждом репозитории может использоваться своя конфигурация, а в некоторых из них настраивается несколько проверок. 

### Проверка "Результаты {% data variables.product.prodname_code_scanning_capc %}"

В любой конфигурации функции {% data variables.product.prodname_code_scanning %} результаты {% data variables.product.prodname_code_scanning %} содержит проверка **Результаты {% data variables.product.prodname_code_scanning_capc %}** . Результаты для каждого используемого средства анализа отображаются отдельно. Все новые оповещения, связанные с изменениями в запросе на вытягивание, отображаются в виде заметок. 

Чтобы просмотреть полный набор оповещений для проанализированной ветви, щелкните **"Просмотреть все оповещения ветви**". Откроется полное представление оповещений, в котором можно отфильтровать все оповещения в ветви по типу, уровню серьезности, тегу и т. д. Дополнительные сведения см. в разделе [Управление оповещениями проверки кода для репозитория](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts).

![{% данных variables.product.prodname_code_scanning_capc %} результаты проверки по запросу на вытягивание](/assets/images/help/repository/code-scanning-results-check.png)

### Сбой проверки "Результаты {% data variables.product.prodname_code_scanning_capc %}"

Если проверка результатов {% data variables.product.prodname_code_scanning %} выявит какие-либо проблемы с уровнем серьезности `error`, `critical` или `high`, она завершается сбоем, а в ее результатах отображается ошибка. Если все найденные функцией {% data variables.product.prodname_code_scanning %} результаты имеют более низкий уровень серьезности, оповещения обрабатываются как предупреждения или заметки, а проверка завершается успешно.

![Завершившаяся сбоем проверка {% data variables.product.prodname_code_scanning %} в запросе на вытягивание](/assets/images/help/repository/code-scanning-check-failure.png)

Вы можете переопределить поведение по умолчанию в параметрах репозитория, указав уровень серьезности и условия уровней безопасности, которые приведут к сбою проверки запроса на вытягивание. Дополнительные сведения см. в разделе [Определение серьезности сбоя проверки запроса на вытягивание](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure).

### Другие проверки {% data variables.product.prodname_code_scanning %}

В разных конфигурациях могут быть настроены дополнительные проверки, выполняемые для запросов на вытягивание с помощью функции {% data variables.product.prodname_code_scanning %}. Как правило, это рабочие процессы, которые анализируют код или отправляют результаты функции {% data variables.product.prodname_code_scanning %}. Эти проверки могут выполняться для устранения неполадок при возникновении проблем с анализом. 

Например, если в репозитории используется {% data variables.product.prodname_codeql_workflow %}, перед началом проверки результатов для каждого языка выполняется проверка **{% data variables.product.prodname_codeql %} / Анализ (ЯЗЫК)** . Проверка "Анализ" может завершиться сбоем при возникновении проблем с конфигурацией, а также если запрос на вытягивание нарушает работу сборки для языка, который этой проверке требуется скомпилировать (например, C/C++, C# или Java). 

Как и в случае с другими проверками запросов на вытягивание, полные сведения о сбое проверки можно просмотреть на вкладке **Проверки**. Дополнительные сведения см. в разделах [Настройка {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning) и [Устранение неполадок с рабочим процессом {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow).

## Просмотр оповещения по запросу на вытягивание

{% ifversion code-scanning-pr-conversations-tab %} Все оповещения {% data variables.product.prodname_code_scanning %} по запросу на вытягивание можно просмотреть на вкладке **Сообщения**. {% data variables.product.prodname_code_scanning_capc %} выведет проверку запроса на вытягивание, в которой каждое оповещение будет отображаться в виде заметки в строках кода, из которых оно было активировано. Вы можете прокомментировать оповещения, закрыть оповещения и просмотреть пути для оповещений непосредственно из заметок. Вы можете просмотреть полные сведения об оповещении, щелкнув ссылку "Подробнее", чтобы перейти на страницу сведений об оповещении.

![Заметка для оповещения на вкладке "Сообщения" запроса на вытягивание](/assets/images/help/repository/code-scanning-pr-conversation-tab.png)

Вы также можете просмотреть все оповещения {% data variables.product.prodname_code_scanning %} на вкладке **Измененные файлы** запроса на вытягивание. Существующие оповещения {% data variables.product.prodname_code_scanning %} по файлам, которые не относятся к изменениям в запросе на вытягивание, будут отображаться на вкладке **Измененные файлы**.

{% else %} Все оповещения {% data variables.product.prodname_code_scanning %} по запросу на вытягивание можно просмотреть на вкладке **Измененные файлы**. Каждое оповещение отображается в виде заметки в строках кода, из которых оно было активировано. В заметке отображается уровень серьезности оповещения. 

![Заметка для оповещения в инструменте сравнения запроса на вытягивание](/assets/images/help/repository/code-scanning-pr-annotation.png) {% endif %}

Если у вас есть разрешение на запись для репозитория, в некоторых заметках будут содержаться ссылки с дополнительным контекстом для оповещения. В приведенном выше примере из анализа {% data variables.product.prodname_codeql %} с помощью ссылки **Предоставленное пользователем значение** можно просмотреть, на каком этапе в поток данных поступают ненадежные данные (источник данных). В этом случае также можно просмотреть полный путь из источника в использующий данные код (приемник) с помощью кнопки **Показать пути**. Так можно проверить, являются ли данные ненадежными или анализу не удалось распознать шаг очистки данных между источником и приемником. Дополнительные сведения об анализе потока данных с помощью {% data variables.product.prodname_codeql %} см. в разделе [Сведения об анализе потока данных](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/).

Дополнительные сведения об оповещении пользователь с разрешением на запись может просмотреть по ссылке **Показать подробности**, представленной в заметке. С ее помощью можно в полном объеме просмотреть контекст и метаданные, выводимые средством в представлении оповещения. В приведенном ниже примере можно увидеть теги, показывающие уровень серьезности, тип и соответствующие распространенные уязвимости (CWE) для проблемы. В этом представлении также показана фиксация, в связи с которой возникла проблема.

{% ifversion fpt или ghec или ghes > 3.4 или ghae > 3,4 %} {% данных reusables.code-scanning.alert-default-branch %} {% endif %}

В подробном представлении оповещения некоторые средства {% data variables.product.prodname_code_scanning %}, например анализ {% data variables.product.prodname_codeql %}, также выводят описание проблемы и ссылку **Показать больше** для просмотра указаний по исправлению кода.

{% ifversion fpt или ghec или ghes > 3.4 или ghae > 3.4 %} ![ Описание оповещений и ссылка для отображения дополнительных сведений](/assets/images/help/repository/code-scanning-pr-alert.png) {% остальных %} ![описание оповещений и ссылка для отображения дополнительных сведений](/assets/images/enterprise/3.4/repository/code-scanning-pr-alert.png) {% endif %}

{% ifversion code-scanning-pr-conversations-tab %}
## Комментарий к оповещению в запросе на вытягивание

Вы можете прокомментировать любое оповещение{% data variables.product.prodname_code_scanning %}, вызванное изменениями в запросе на вытягивание. Оповещения отображаются как заметки на вкладке **Сообщения** запроса на вытягивание, в рамках проверки запроса на вытягивание, а также на вкладке **Измененные файлы**. Вы можете прокомментировать только оповещения, вызванные изменениями в запросе на вытягивание. Существующие оповещения {% data variables.product.prodname_code_scanning %} по файлам, которые не относятся к изменениям в запросе на вытягивание, будут отображаться на вкладке **Измененные файлы**, но без возможности комментирования.

Вы можете выбрать, чтобы все сообщения в запросе на вытягивание (в том числе для оповещений {% data variables.product.prodname_code_scanning %}), разрешались до слияния запроса на вытягивание. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-conversation-resolution-before-merging).
{% endif %}
## Исправление оповещения по запросу на вытягивание

Любой пользователь с доступом на отправку к запросу на вытягивание может исправить оповещение {% data variables.product.prodname_code_scanning %}, указанное в этом запросе. После фиксации изменений в запросе на вытягивание будут заново выполнены его проверки. Если в результате внесения изменений проблема исправлена, оповещение закрывается, а заметка удаляется.

## Отклонение оповещения по запросу на вытягивание

Оповещение также можно закрыть, отклонив его. Если вы не считаете, что оповещение требуется исправлять, его можно отклонить. {% data reusables.code-scanning.close-alert-examples %} Если у вас есть разрешение на запись для репозитория, в аннотациях в коде и в сводке оповещений будет доступна кнопка **Отклонить**. При нажатии кнопки **Отклонить** вам будет предложено выбрать причину закрытия оповещения.
{% ifversion comment-dismissed-code-scanning-alert %} ![Снимок экрана: оповещение о проверке кода с выделенным раскрывающимся списком для выбора причины закрытия](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {% else %} ![Выбор причины для закрытия оповещения](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {% endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

Дополнительные сведения о закрытии оповещений см. в разделе {% ifversion delete-code-scanning-alerts %}[Управление оповещениями {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts).{% else %} "[Управление оповещениями {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#dismissing--alerts).{% endif %}
