---
title: Настройка сканирования кода
intro: 'Вы можете настроить то, как {% data variables.product.prodname_dotcom %} будет проверять код в проекте на наличие уязвимостей и ошибок.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
  - /code-security/secure-coding/configuring-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
  - Pull requests
  - JavaScript
  - Python
shortTitle: Configure code scanning
ms.openlocfilehash: cad147292c113d749004f2fe303b27a4dada1456
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182317'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

{% ifversion ghes or ghae %} {% note %}

**Примечание.** В этой статье описываются функции, доступные в версии действия CodeQL и в связанном пакете интерфейса командной строки CodeQL, который входит в первоначальный выпуск этой версии {% data variables.product.product_name %}. Если в вашей организации используется более поздняя версия действия CodeQL, сведения о последних функциях см. в [статье, посвященной {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning). {% ifversion not ghae %} Сведения об использовании последней версии см. в разделе [Настройка сканирования кода для устройства](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).{% endif %}

{% endnote %} {% endif %}

## Сведения о конфигурации {% data variables.product.prodname_code_scanning %}

Вы можете запустить {% data variables.product.prodname_code_scanning %} на сайте {% data variables.product.product_name %} с помощью {% data variables.product.prodname_actions %} или из системы непрерывной интеграции (CI). Дополнительные сведения см. на странице [Сведения о {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions) или [Сведения о {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} в системе CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system).

Эта статья посвящена выполнению {% data variables.product.prodname_code_scanning %} на {% data variables.product.product_name %} с помощью действий.

Перед настройкой {% data variables.product.prodname_code_scanning %} для репозитория необходимо настроить {% data variables.product.prodname_code_scanning %}, добавив рабочий процесс {% data variables.product.prodname_actions %} в репозиторий. Дополнительные сведения см. в статье [Настройка функции {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

{% data reusables.code-scanning.edit-workflow %}

Анализ {% data variables.product.prodname_codeql %} — это только один из типов {% data variables.product.prodname_code_scanning %} в {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_marketplace %}{% ifversion ghes %} для {% data variables.product.prodname_dotcom_the_website %}{% endif %} содержит другие рабочие процессы {% data variables.product.prodname_code_scanning %}, которые можно использовать. {% ifversion fpt or ghec %} Их можно найти на странице "Начало работы с {% data variables.product.prodname_code_scanning %}", доступ к которой можно получить на вкладке **Безопасность {% octicon "shield" aria-label="The shield symbol" %}** .{% endif %} Конкретные примеры, приведенные в этой статье, относятся к файлу {% data variables.code-scanning.codeql_workflow %}.

## Изменение рабочего процесса {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_dotcom %} сохраняет файлы рабочего процесса в каталоге _.github/workflows_ репозитория. Вы можете найти добавленный рабочий процесс, выполнив поиск по имени файла. Например, по умолчанию файл рабочего процесса для{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} называется _codeql-analysis.yml_.

1. В репозитории перейдите к файлу рабочего процесса, который необходимо изменить.
1. В правом верхнем углу представления файла щелкните {% octicon "pencil" aria-label="The edit icon" %}, чтобы открыть редактор рабочих процессов.
![Кнопка изменения файла рабочего процесса](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. После редактирования файла щелкните **Start commit** (Начать фиксацию) и заполните форму Commit changes (Фиксация изменений). Вы можете выбрать вариант фиксации непосредственно в текущей ветви или создать новую ветвь и запустить запрос на вытягивание.
![Фиксация обновления рабочего процесса codeql.yml](/assets/images/help/repository/code-scanning-workflow-update.png)

Дополнительные сведения о редактировании файлов рабочего процесса см. на странице [Сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

## Настройка частоты

Вы можете настроить {% data variables.code-scanning.codeql_workflow %} для сканирования кода по расписанию или при возникновении определенных событий в репозитории.

Проверка кода при принудительной отправке изменений и при создании запроса на вытягивание не позволяет разработчикам вводить новые уязвимости и ошибки в код. Проверка кода по расписанию позволяет узнать о последних уязвимостях и ошибках, обнаруженных {% data variables.product.company_short %}, исследователями безопасности и сообществом, даже если разработчики не выполняют активные мероприятия по обслуживанию репозитория.

### Проверка при принудительной отправке

По умолчанию {% data variables.code-scanning.codeql_workflow %} использует `on.push` событие для запуска проверки кода при каждой отправке в ветвь репозитория по умолчанию и все защищенные ветви. Для активации {% data variables.product.prodname_code_scanning %} в указанной ветви она должна содержать рабочий процесс. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#on).

В случае сканирования при принудительной отправке результаты отображаются на вкладке **Безопасность** вашего репозитория. Дополнительные сведения см. в разделе [Управление оповещениями о сканировании кода для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

Кроме того, когда `on:push` сканирование возвращает результаты, которые можно сопоставить с открытым запросом на вытягивание, эти оповещения будут автоматически отображаться в запросе на вытягивание в том же месте, что и другие оповещения о запросах на вытягивание. Оповещения определяются путем сравнения имеющихся результатов анализа заголовка ветви с результатами анализа целевой ветви. Дополнительные сведения об оповещениях {% data variables.product.prodname_code_scanning %} в запросах на вытягивание см. на странице [Рассмотрение оповещений {% data variables.product.prodname_code_scanning %} в запросах на вытягивание](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).

### Сканирование запросов на вытягивание

По умолчанию {% data variables.code-scanning.codeql_workflow %} использует `pull_request` событие для запуска проверки кода в запросах на вытягивание, предназначенных для ветви по умолчанию. {% ifversion ghes %}Событие `pull_request` не активируется, если запрос на вытягивание был открыт из частной вилки.{% else %}Если запрос на вытягивание получен из частной вилки, событие `pull_request` будет активировано только в том случае, если вы выбрали параметр "Запуск рабочих процессов из запросов на вытягивание вилки" в параметрах репозитория. Дополнительные сведения см. в разделе [Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks).{% endif %}

Дополнительные сведения о событии `pull_request` см. в разделе [События, активирующие рабочие процессы](/actions/learn-github-actions/events-that-trigger-workflows#pull_request).

При проверке запросов на вытягивание результаты отображаются в виде оповещений в результатах проверки запроса на вытягивание. Дополнительные сведения см. на странице [Рассмотрение оповещений проверки кода в запросах на вытягивание](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).

Использование триггера `pull_request` , настроенного для сканирования фиксации слияния запроса на вытягивание, а не головной фиксации, даст более эффективные и точные результаты, чем сканирование головки ветви при каждой отправке. Однако при использовании системы CI/CD, которая не может быть настроена для активации по запросам на вытягивание, можно по-прежнему использовать триггер `on:push` и {% data variables.product.prodname_code_scanning %} для сопоставления результатов с открытыми запросами на вытягивание в ветви и добавления оповещений в качестве заметок к запросу на вытягивание. Дополнительные сведения см. в разделе [Сканирование при принудительной отправке](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push).

### Определение серьезности сбоя проверки запроса на вытягивание

По умолчанию только оповещения с уровнем серьезности `Error`, уровнем серьезности системы безопасности `Critical` или `High` приведут к сбою проверки запроса на вытягивание. Для оповещений с более низким уровнем серьезности проверка будет выполнена успешно. Вы можете изменить уровни серьезности оповещений и уровни безопасности, при которых происходит сбой проверки запроса на вытягивание в параметрах репозитория. Дополнительные сведения об уровнях серьезности см. в разделе [Сведения об оповещениях сканирования кода](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. В разделе "Сканирование кода" справа от пункта "Сбой проверки" используйте раскрывающееся меню, чтобы выбрать уровень серьезности, которым вы хотите вызвать сбой проверки запроса на вытягивание.
![Параметр сбоя проверки](/assets/images/help/repository/code-scanning-check-failure-setting.png)

### Отключение ненужных сканирований запросов на вытягивание

Активацию проверки кода можно отключить для определенных запросов на вытягивание, предназначенных для ветви по умолчанию, независимо от того, какие файлы были изменены. Это можно настроить, указав `on:pull_request:paths-ignore` или `on:pull_request:paths` в рабочем процессе {% data variables.product.prodname_code_scanning %}. Например, если единственными изменениями в запросе на вытягивание являются файлы с расширениями `.md` или `.txt`, можно использовать следующий массив `paths-ignore`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

{% note %}

**Примечания**

* `on:pull_request:paths-ignore` и `on:pull_request:paths` задают условия, определяющие, будут ли действия в рабочем процессе выполняться при запросе на вытягивание. Они не определяют, какие файлы будут анализироваться при _выполнении_ действий. Если запрос на вытягивание содержит все файлы, которые не соответствуют `on:pull_request:paths-ignore` или `on:pull_request:paths`, рабочий процесс выполняет действия и сканирует все файлы, измененные в запросе на вытягивание, включая те, которые совпадают с `on:pull_request:paths-ignore` или `on:pull_request:paths`, если файлы не были исключены. Сведения об исключении файлов из анализа см. в разделе [Указание каталогов для проверки](#specifying-directories-to-scan).
* Для файлов рабочего процесса {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} не используйте ключевые слова `paths-ignore` или `paths` с событием `on:push`, так как это, скорее всего, приведет к пропуску анализа. Для точных результатов {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} необходимо иметь возможность сравнивать новые изменения с анализом предыдущей фиксации.

{% endnote %}

Дополнительные сведения об использовании `on:pull_request:paths-ignore` и `on:pull_request:paths`, чтобы определить время выполнения рабочего процесса для запроса на вытягивание, см. в разделе [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore).

### Сканирование по расписанию

Если вы используете по умолчанию {% data variables.code-scanning.codeql_workflow %}, рабочий процесс будет проверять код в репозитории раз в неделю в дополнение к проверкам, инициированным событиями. Чтобы настроить это расписание, измените значение `cron` в рабочем процессе. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onschedule).

{% note %}

**Примечание**. {% data variables.product.prodname_dotcom %} выполняет только запланированные задания, которые находятся в рабочих процессах в ветви по умолчанию. Изменение расписания в рабочем процессе в любой другой ветви не действует, пока вы не объедините ветвь по умолчанию.

{% endnote %}

### Пример

В следующем примере показан {% data variables.code-scanning.codeql_workflow %} для определенного репозитория, который имеет ветвь по умолчанию с именем `main` и одну защищенную ветвь с именем `protected`.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

Этот рабочий процесс проверяет:
* каждую отправку в ветвь по умолчанию и защищенную ветвь;
* каждый запрос на вытягивание в ветвь по умолчанию;
* ветвь по умолчанию каждый понедельник в 14:20 UTC.

## Указание операционной системы

Если для компиляции кода требуется определенная операционная система, можно настроить операционную систему в {% data variables.code-scanning.codeql_workflow %}. Измените значение `jobs.analyze.runs-on`, чтобы указать операционную систему для компьютера, на котором выполняются действия {% data variables.product.prodname_code_scanning %}. {% ifversion ghes %}Вы указываете операционную систему с помощью соответствующей метки в качестве второго элемента в массиве из двух элементов после `self-hosted`.{% else %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [ubuntu-latest]
```

Если вы решили использовать локальное средство выполнения тестов для сканирования кода, можно указать операционную систему, используя соответствующую метку в качестве второго элемента в массиве из двух элементов после `self-hosted`.{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} поддерживает последние версии Ubuntu, Windows и macOS. Поэтому типичные значения для этого параметра: `ubuntu-latest`, `windows-latest` и `macos-latest`. Дополнительные сведения см. на страницах [Выбор средства выполнения тестов для задания](/actions/using-jobs/choosing-the-runner-for-a-job) и [Использование меток с локальными средствами выполнения тестов](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners).

{% ifversion ghes %}Необходимо убедиться, что Git находится в переменной PATH в локальных средствах выполнения.{% else %}При использовании локального средства выполнения необходимо убедиться, что Git находится в переменной PATH.{% endif %} Дополнительные сведения см. на страницах [Сведения о локальных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners) и [Добавление локальных средств выполнения](/actions/hosting-your-own-runners/adding-self-hosted-runners).

Рекомендуемые спецификации (ОЗУ, ядра ЦП и диск) для выполнения анализа {% data variables.product.prodname_codeql %} {% ifversion not ghes %} на локальных компьютерах{% endif %} см. на странице [Рекомендуемые аппаратные ресурсы для запуска{% data variables.product.prodname_codeql %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql).

## Указание расположения для баз данных {% data variables.product.prodname_codeql %}

Как правило, вам не нужно беспокоиться о том, где {% data variables.code-scanning.codeql_workflow %} помещает базы данных {% data variables.product.prodname_codeql %}, так как в последующих шагах будут автоматически находиться базы данных, созданные на предыдущих шагах. Однако если вы пишете пользовательский шаг рабочего процесса, который требует, чтобы база данных {% data variables.product.prodname_codeql %} была в определенном расположении диска, например для отправки базы данных в качестве артефакта рабочего процесса, можно указать это расположение с помощью параметра `db-location` в действии `init`.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    db-location: {% raw %}'${{ github.workspace }}/codeql_dbs'{% endraw %}
```

{% data variables.code-scanning.codeql_workflow %} ожидает, что путь, указанный в `db-location` , будет доступен для записи и либо не существует, либо будет пустым каталогом. При использовании этого параметра в задании, выполняющемся в локальном средстве выполнения или с помощью контейнера Docker, пользователь должен убедиться, что выбранный каталог очищается между запусками или что базы данных удаляются после того, как они больше не нужны. {% ifversion fpt or ghec or ghes %} Это необязательно для заданий, выполняемых в средствах выполнения, размещенных в {% data variables.product.prodname_dotcom %}, которые получают свежий экземпляр и чистую файловую систему при каждом запуске. Дополнительные сведения см. на странице [Сведения о средствах выполнения, размещенных в {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners).{% endif %}

Если этот параметр не используется, {% data variables.code-scanning.codeql_workflow %} создаст базы данных во временном расположении по своему усмотрению.

## Изменение анализируемых языков

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} автоматически обнаруживает код, написанный на поддерживаемых языках.

{% data reusables.code-scanning.codeql-languages-bullets %}

Файл {% data variables.code-scanning.codeql_workflow %} по умолчанию содержит матрицу с именем `language` , в которой перечислены языки в репозитории, которые анализируются. {% data variables.product.prodname_codeql %} автоматически заполняет эту матрицу при добавлении {% data variables.product.prodname_code_scanning %} в репозиторий. Использование матрицы `language` оптимизирует {% data variables.product.prodname_codeql %} для параллельного выполнения каждого анализа. Учитывая преимущества параллелизации сборок с точки зрения производительности, рекомендуется, чтобы все рабочие процессы применяли эту конфигурацию. Дополнительные сведения о матрицах см. на странице [Использование матрицы для заданий](/actions/using-jobs/using-a-matrix-for-your-jobs).

{% data reusables.code-scanning.specify-language-to-analyze %}

Если рабочий процесс использует матрицу `language`, {% data variables.product.prodname_codeql %} жестко кодируется для анализа только языков в этой матрице. Чтобы изменить языки, для которых нужно выполнять анализ, измените значение переменной матрицы. Чтобы не выполнять анализ для какого-либо из языков, этот язык можно удалить. Если язык отсутствовал в репозитории при настройке {% data variables.product.prodname_code_scanning %}, его можно добавить. Например, если при настройке {% data variables.product.prodname_code_scanning %} в репозитории изначально содержался только код JavaScript, а затем был добавлен код Python, в матрицу необходимо добавить `python`.

```yaml
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']
```

Если рабочий процесс не содержит матрицу с именем `language`, {% data variables.product.prodname_codeql %} настраивается для последовательного выполнения анализа. Если языки в рабочем процессе не указаны, {% data variables.product.prodname_codeql %} автоматически обнаружит все поддерживаемые языки в репозитории и попытается выполнить для них анализ. Если вы хотите выбрать языки для анализа без использования матрицы, можно воспользоваться параметром `languages` в действии `init`.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: cpp, csharp, python
```
{% ifversion fpt or ghec %}
## Анализ зависимостей Python

Для средств выполнения тестов, размещенных в GitHub, использующих только Linux, {% data variables.code-scanning.codeql_workflow %} попытается автоматически установить зависимости Python, чтобы получить дополнительные результаты для анализа CodeQL. Вы можете управлять этим поведением, указав параметр `setup-python-dependencies` для действия, вызываемого шагом "Инициализация CodeQL". По умолчанию этот параметр имеет значение `true`:

-  Если репозиторий содержит код, написанный на Python, шаг "Инициализация CodeQL" устанавливает необходимые зависимости в средстве выполнения, размещенном в GitHub. Если автоматическая установка завершается успешно, действие также устанавливает переменную среды `CODEQL_PYTHON` в исполняемый файл Python, включающий зависимости.

- Если репозиторий не имеет зависимостей Python или зависимости указаны неожиданным образом, вы получите предупреждение и действие продолжится с оставшимися заданиями. Действие может успешно выполняться, даже если возникают проблемы с интерпретацией зависимостей, но результаты могут быть неполными.

Кроме того, можно установить зависимости Python вручную в любой операционной системе. Необходимо добавить `setup-python-dependencies` и задать для значение `false`, а также для `CODEQL_PYTHON` задать исполняемый файл Python, включающий зависимости, как показано в этом извлечении рабочего процесса:

```yaml
jobs:
  CodeQL-Build:
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ];
          then pip install -r requirements.txt;
          fi
          # Set the `CODEQL-PYTHON` environment variable to the Python executable
          # that includes the dependencies
          echo "CODEQL_PYTHON=$(which python)" >> $GITHUB_ENV
      - name: Initialize CodeQL
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

## Настройка категории для анализа

Используйте `category` для различения нескольких анализов для одного и того же средства и фиксации, но для разных языков или различных частей кода. Указанная в рабочем процессе категория будет включена в файл результатов SARIF.

Этот параметр особенно полезен, если вы работаете с monorepos и имеете несколько файлов SARIF для различных компонентов monorepo.

``` yaml
    - name: Perform CodeQL Analysis
      uses: {% data reusables.actions.action-codeql-action-analyze %}
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow,
        # GitHub will generate a default category name for you
        category: "my_category"
```

Если вы не укажете параметр `category` в рабочем процессе, {% data variables.product.product_name %} создаст имя категории, исходя из имени файла рабочего процесса, запускающего действие, имя действия и любые переменные матрицы. Пример:
- Рабочий процесс `.github/workflows/codeql-analysis.yml` и действие `analyze` создают категорию `.github/workflows/codeql.yml:analyze`.
- Рабочий процесс `.github/workflows/codeql-analysis.yml`, действие `analyze` и переменные матрицы `{language: javascript, os: linux}` создают категорию `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux`.

Значение `category` будет отображаться как свойство `<run>.automationDetails.id` в SARIF версии 2.1.0. Дополнительные сведения см. на странице [Поддержка SARIF для {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object).

Указанная категория не перезаписывает сведения об объекте `runAutomationDetails` в файле SARIF, если они включены.

## Выполнение дополнительных запросов

{% data reusables.code-scanning.run-additional-queries %}

{% ifversion codeql-packs %}
### Использование пакетов запросов {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Чтобы добавить один или несколько пакетов запросов {% data variables.product.prodname_codeql %} (бета-версии), добавьте запись `with: packs:` в раздел `uses: {% data reusables.actions.action-codeql-action-init %}` рабочего процесса. В `packs` укажите один или несколько пакетов для использования и (необязательно) версию для загрузки. Если не указать версию, загружается последняя версия. Если вы хотите использовать пакеты, которые не являются общедоступными, необходимо задать для переменной среды `GITHUB_TOKEN` секрет, имеющий доступ к пакетам. Дополнительные сведения см. на странице [Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow) и [Зашифрованные секреты](/actions/reference/encrypted-secrets).

{% note %}

**Примечание.** Для рабочих процессов, создающих базы данных {% data variables.product.prodname_codeql %} для нескольких языков, необходимо указать пакеты запросов {% data variables.product.prodname_codeql %} в файле конфигурации. Дополнительные сведения см. в разделе [Указание пакетов запросов {% data variables.product.prodname_codeql %}](#specifying-codeql-query-packs), указанном ниже.

{% endnote %}

В указанном ниже примере `scope` является организация или личная учетная запись, которая опубликовала пакет. При выполнении рабочего процесса четыре пакета запросов {% data variables.product.prodname_codeql %} скачиваются из {% data variables.product.product_name %} и запросов по умолчанию или набора запросов для каждого запуска пакета:
- Будет скачана последняя версия `pack1` с выполнением всех запросов по умолчанию.
- Будет скачана версия 1.2.3 для `pack2` с выполнением всех запросов по умолчанию.
- Будет скачана последняя версия `pack3`, которая совместима с версией 3.2.1, с выполнением всех запросов.
- Будет скачана версия 4.5.6 для `pack4` с выполнением только тех запросов, которые обнаружены в `path/to/queries`.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~3.2.1,scope/pack4@4.5.6:path/to/queries
```

### Скачивание пакетов {% data variables.product.prodname_codeql %} из {% data variables.product.prodname_ghe_server %}

Если рабочий процесс использует пакеты, опубликованные в установке {% data variables.product.prodname_ghe_server %}, необходимо сообщить рабочему процессу, где их найти. Это можно сделать с помощью `registries` входных данных действия {% data reusables.actions.action-codeql-action-init %}. Эти входные данные принимают список `url`свойств , `packages`и `token` , как показано ниже.

```
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    registries: {% raw %}|
      # URL to the container registry, usually in this format
      - url: https://containers.GHEHOSTNAME1/v2/

        # List of package glob patterns to be found at this registry
        packages:
          - my-company/*
          - my-company2/*

        # Token, which should be stored as a secret
        token: ${{ secrets.GHEHOSTNAME1_TOKEN }}

      # URL to the default container registry
      - url: https://ghcr.io/v2/
        # Packages can also be a string
        packages: "*/*"
        token: ${{ secrets.GHCR_TOKEN }}

    {% endraw %}
```

Шаблоны пакетов в списке реестров проверяются по порядку, поэтому, как правило, в первую очередь следует размещать наиболее конкретные шаблоны пакетов. Значения для `token` должны быть {% data variables.product.pat_v1 %}, созданные экземпляром GitHub, из которых вы загружаете с `read:packages` разрешения.

Обратите внимание на после `|` `registries` имени свойства. Это важно, так как входные данные {% data variables.product.prodname_actions %} могут принимать только строки. `|` При использовании преобразует последующий текст в строку, которая затем анализируется с помощью действия {% data reusables.actions.action-codeql-action-init %}.

### Использование запросов в пакетах QL
{% endif %} Чтобы добавить один или несколько запросов, добавьте запись `with: queries:` в раздел `uses: {% data reusables.actions.action-codeql-action-init %}` рабочего процесса. Если запросы находятся в частном репозитории, используйте параметр `external-repository-token`, чтобы указать маркер, имеющий доступ для извлечения частного репозитория.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

Кроме того, можно указать наборы запросов в значении `queries`. Наборы запросов представляют собой коллекции запросов, обычно сгруппированные по цели или языку.

{% data reusables.code-scanning.codeql-query-suites-explanation %}

{% ifversion codeql-packs %}
### Работа с пользовательскими файлами конфигурации
{% endif %}

При использовании файла конфигурации для пользовательских параметров применяются любые дополнительные {% ifversion codeql-packs %}пакеты или {% endif %}запросы, указанные в рабочем процессе, вместо запросов, указанных в файле конфигурации. Если вы хотите запустить объединенный набор дополнительных {% ifversion codeql-packs %}пакетов или {% endif %}запросов, добавьте в начало значения {% ifversion codeql-packs %}`packs` или {% endif %}`queries` в рабочем процессе символ `+`. Дополнительные сведения см. в разделе [Использование пользовательского файла конфигурации](#using-a-custom-configuration-file).

В следующем примере символ `+` гарантирует, что указанные дополнительные {% ifversion codeql-packs %}пакеты и {% endif %}запросы используются вместе с любыми другими, указанными в соответствующем файле конфигурации.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- ifversion codeql-packs %}
    packs: +scope/pack1,scope/pack2@1.2.3,scope/pack3@4.5.6:path/to/queries
    {%- endif %}
```

## Использование пользовательского файла конфигурации

Пользовательский файл конфигурации — это альтернативный способ настройки дополнительных {% ifversion codeql-packs %}пакетов и {% endif %}запросов для выполнения. Вы также можете использовать файл, чтобы отключить запросы по умолчанию{% ifversion code-scanning-exclude-queries-from-analysis %}, исключить или включить определенные запросы{% endif %} и указать каталоги для сканирования во время анализа.

Используйте в файле рабочего процесса параметр `config-file` действия `init`, чтобы указать путь к файлу конфигурации, который необходимо использовать. В этом примере загружается файл конфигурации _./.github/codeql/codeql-config.yml_.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

Если файл конфигурации находится во внешнем частном репозитории, используйте параметр `external-repository-token` действия `init`, чтобы указать маркер, имеющий доступ к частному репозиторию.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

Параметры в файле конфигурации записываются в формате YAML.

{% ifversion codeql-packs %}
### Указание пакетов запросов {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

В массиве указываются пакеты запросов {% data variables.product.prodname_codeql %}. Обратите внимание, что формат отличается от формата, используемого файлом рабочего процесса.

{% raw %}
``` yaml
packs:
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1
  # Use version 1.2.3 of 'pack2'
  - scope/pack2@1.2.3
  # Use the latest version of 'pack3' compatible with 3.2.1
  - scope/pack3@~3.2.1
  # Use pack4 and restrict it to queries found in the 'path/to/queries' directory
  - scope/pack4:path/to/queries
  # Use pack5 and restrict it to the query 'path/to/single/query.ql'
  - scope/pack5:path/to/single/query.ql
  # Use pack6 and restrict it to the query suite 'path/to/suite.qls'
  - scope/pack6:path/to/suite.qls
```
{% endraw %}

Полный формат для указания пакета запросов:`scope/name[@version][:path]`. `version` и `path` являются необязательными. `version` — это диапазон версий SemVer. Если он отсутствует, используется последняя версия. Дополнительные сведения о диапазонах SemVer см. в [документации SemVer по npm](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges).

При наличии рабочего процесса, который создает несколько баз данных {% data variables.product.prodname_codeql %}, можно указать любые пакеты запросов {% data variables.product.prodname_codeql %} для выполнения в пользовательском файле конфигурации, используя вложенную карту пакетов.

{% raw %}
``` yaml
packs:
  # Use these packs for JavaScript and TypeScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java and Kotlin analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```
{% endraw %} {% endif %}

### Указание дополнительных запросов

Дополнительные запросы задаются в массиве `queries`. Каждый элемент массива содержит параметр `uses`, имеющий значение, определяющее отдельный файл запроса, каталог, содержащий файлы запросов, или файл определения набора запросов.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

При необходимости можно присвоить каждому элементу массива имя, как показано в примере файлов конфигурации ниже. Дополнительные сведения о дополнительных запросах см. в разделе [Выполнение дополнительных запросов](#running-additional-queries) выше.

### Отключение запросов по умолчанию

Если требуется выполнить только пользовательские запросы, можно отключить запросы безопасности по умолчанию с помощью `disable-default-queries: true`.

{% ifversion code-scanning-exclude-queries-from-analysis %}
### Исключение конкретных запросов из анализа

Вы можете добавлять фильтры `exclude` и `include` в пользовательский файл конфигурации, чтобы указать запросы, которые необходимо исключить из анализа или включить в него.

Это полезно, если вы хотите исключить, например:
- Конкретные запросы из наборов по умолчанию (`security`, `security-extended` и`security-and-quality`).
- Конкретные запросы, результаты которых вас не интересуют.
- Все запросы, которые создают предупреждения и рекомендации.

Вы можете использовать фильтры `exclude`, как в приведенном ниже файле конфигурации, чтобы исключить запросы, которые требуется удалить из анализа по умолчанию. В приведенном ниже примере файла конфигурации запросы `js/redundant-assignment` и `js/useless-assignment-to-local` исключаются из анализа.

```yaml
query-filters:
  - exclude:
      id: js/redundant-assignment
  - exclude:
      id: js/useless-assignment-to-local
```
Чтобы найти идентификатор запроса, можно щелкнуть оповещение в списке оповещений на вкладке "Безопасность". Откроется страница сведений об оповещении. Поле `Rule ID` содержит идентификатор запроса. Дополнительные сведения о странице сведений об оповещении см. в разделе [Сведения об оповещениях {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details).

{% tip %}

**Советы**
- Важно учитывать порядок фильтров. Первая инструкция фильтра, которая идет после инструкций по запросам и пакетам запросов, определяет, включены или исключены запросы по умолчанию.
- Последующие инструкции выполняются по порядку, а инструкции, которые отображаются позже в файле, имеют приоритет над предыдущими инструкциями.

{% endtip %}

Вы можете найти еще один пример, иллюстрирующий использование этих фильтров, в разделе [Примеры файлов конфигурации](#example-configuration-files).

Дополнительные сведения об использовании фильтров `exclude` и `include` в пользовательском файле конфигурации см. в разделе [Создание наборов запросов {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/#filtering-the-queries-in-a-query-suite). Сведения о метаданных запросов, доступных для фильтрации, см. в разделе [Метаданные для запросов CodeQL](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/).

{% endif %}

### Указание каталогов для сканирования

Для интерпретируемых языков, поддерживаемых {% data variables.product.prodname_codeql %} (Python{% ifversion fpt or ghes > 3.3 or ghae > 3.3 %}, Ruby{% endif %} и JavaScript/TypeScript), можно ограничить {% data variables.product.prodname_code_scanning %} файлами в определенных каталогах, добавив `paths` массив в файл конфигурации. Добавив массив `paths-ignore`, можно исключить из анализа файлы в определенных каталогах.

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**Примечание.**

* Ключевые слова `paths` и `paths-ignore`, используемые в контексте файла конфигурации {% data variables.product.prodname_code_scanning %}, не следует путать с такими же ключевыми словами при использовании `on.<push|pull_request>.paths` в рабочем процессе. Когда они используются для изменения `on.<push|pull_request>` в рабочем процессе, они определяют, будут ли выполняться действия, когда кто-то изменяет код в указанных каталогах. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore).
* Символы шаблона фильтра `?`, `+`, `[`, `]` и `!` не поддерживаются и будут сопоставлены буквально.
*               Символы `**` могут находиться только в начале или в конце строки. В противном случае они должны быть заключены в косые черты. Символы `**` нельзя смешивать с другими символами. Например, `foo/**`, `**/foo` и `foo/**/bar` — это допустимый синтаксис, а `**foo` — нет. Однако, как показано в примере, одиночные звезды можно использовать вместе с другими символами. Все, что содержит символ `*`, необходимо заключить в кавычки.

{% endnote %}

Если для компилируемых языков требуется ограничить {% data variables.product.prodname_code_scanning %} конкретными каталогами в проекте, необходимо указать в рабочем процессе соответствующие шаги сборки. Команды, которые необходимо использовать для исключения каталога из сборки, зависят от системы сборки. Дополнительные сведения см. в статье [Настройка рабочего процесса {% data variables.product.prodname_codeql %} для скомпилированных языков](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).

При изменении кода в конкретных каталогах можно быстро анализировать небольшие части монорепозитория. Необходимо исключить каталоги на этапах сборки, а также использовать ключевые слова `paths-ignore` и `paths` для [`on.<push|pull_request>`](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) в рабочем процессе.

### Примеры файлов конфигурации

{% data reusables.code-scanning.example-configuration-files %}

## Настройка {% data variables.product.prodname_code_scanning %} для скомпилированных языков

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} Дополнительные сведения о настройке {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} для скомпилированных языков см. на странице [Настройка рабочего процесса {% data variables.product.prodname_codeql %} для скомпилированных языков](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages).

## Передача данных {% data variables.product.prodname_code_scanning %} в {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} может отображать данные анализа кода, созданные сторонним инструментом. Вы можете загрузить данные анализа кода с помощью действия `upload-sarif`. Дополнительные сведения см. в разделе [Отправка SARIF-файла в GitHub](/code-security/secure-coding/uploading-a-sarif-file-to-github).
