---
title: Установка CodeQL CLI в системе непрерывной интеграции
shortTitle: Configure CodeQL CLI
intro: 'Вы можете настроить систему непрерывной интеграции для выполнения {% data variables.product.prodname_codeql_cli %}, выполнения анализа {% data variables.product.prodname_codeql %} и отправки результатов в {% data variables.product.product_name %} для отображения в виде оповещений {% data variables.product.prodname_code_scanning %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
ms.openlocfilehash: 165aee9852cb6863dceddb41daf6d05176191f7a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182301'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% ifversion ghes or ghae %} {% note %}

**Примечание.** В этой статье описаны функции, доступные в версии {% data variables.product.prodname_codeql_cli %} во время выпуска {% data variables.product.product_name %}. Если в вашей организации используется более поздняя версия {% data variables.product.prodname_codeql_cli %}, ознакомьтесь с [документацией {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system).

{% endnote %} {% endif %}

## Сведения о создании результатов сканирования кода с помощью {% data variables.product.prodname_codeql_cli %}

После того как вы обеспечили доступ к {% data variables.product.prodname_codeql_cli %} для серверов в системе непрерывной интеграции и удостоверились, что они могут проходить проверку подлинности с помощью {% data variables.product.product_name %}, можно приступить к созданию данных.

Для создания результатов и их отправки в {% data variables.product.product_name %} используются три разных команды:

<!--Option to analyze multiple languages with one call-->
1. `database create` для создания базы данных {% data variables.product.prodname_codeql %} для представления иерархической структуры каждого поддерживаемого языка программирования в репозитории.
2. ` database analyze` для выполнения запросов по анализу каждой базы данных {% data variables.product.prodname_codeql %} и суммирования результатов в файле SARIF.
3. `github upload-results` для загрузки полученных файлов SARIF в {% data variables.product.product_name %}, где результаты сопоставляются с ветвью или запросом на вытягивание и отображаются в виде оповещений {% data variables.product.prodname_code_scanning %}.

Вы можете отобразить справку командной строки для любой команды, используя параметр <nobr>`--help`</nobr>.

{% data reusables.code-scanning.upload-sarif-ghas %}

## Создание баз данных {% data variables.product.prodname_codeql %} для анализа

1. Извлеките код, который нужно проанализировать:
    - Для ветви извлеките заголовок ветви, которую необходимо проанализировать.
    - Для запроса на вытягивание извлеките фиксацию заголовка запроса на вытягивание или фиксацию слияния запроса на вытягивание, сгенерированную с помощью {% data variables.product.prodname_dotcom %}.
2. Настройте среду для базы кода, убедившись, что все зависимости доступны. Дополнительные сведения см. в разделах [Создание баз данных для нескомпилированных языков](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-non-compiled-languages) и [Создание баз данных для скомпилированных языков](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/#creating-databases-for-compiled-languages) в документации по {% data variables.product.prodname_codeql_cli %}.
3. Найдите команду сборки (если таковая имеется) для базы кода. Обычно она доступна в файле конфигурации в системе CI.
4. Запустите `codeql database create` из корня извлечения вашего репозитория и выполните сборку базы кода.

  ```shell
  # Single supported language - create one CodeQL database
  codeql database create &lt;database&gt; --command&lt;build&gt; --language=&lt;language-identifier&gt;

  # Multiple supported languages - create one CodeQL database per language
  codeql database create &lt;database&gt; --command&lt;build&gt; \
        --db-cluster --language=&lt;language-identifier&gt;,&lt;language-identifier&gt;
  ```

  {% note %}

  **Примечание.** Если вы используете контейнерную сборку, вам нужно запустить {% data variables.product.prodname_codeql_cli %} в контейнере, где выполняется задача сборки.

  {% endnote %}

| Параметр | Обязательно | Использование |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Укажите имя и расположение каталога, который необходимо создать для базы данных {% data variables.product.prodname_codeql %}. Команда завершится ошибкой, если вы попытаетесь перезаписать существующий каталог. Если также указать `--db-cluster`, это родительский каталог, а для каждого проанализированного языка создается подкаталог.|
| <nobr>`--language`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Укажите идентификатор языка, для которого нужно создать базу данных, один из следующих: `{% data reusables.code-scanning.codeql-languages-keywords %}` (используйте `javascript` для анализа кода TypeScript {% ifversion codeql-kotlin-beta %} и `java` анализа кода Kotlin{% endif %}). При использовании с <nobr>`--db-cluster`</nobr> параметр принимает список с разделителями-запятыми или может быть указан более одного раза.
| <nobr>`--command`</nobr> | | (рекомендуется). Используйте для указания команды сборки или скрипта, вызывающего процесс сборки для базы кода. Команды запускаются из текущей папки или, если она определена, из <nobr>`--source-root`</nobr>. Не требуется для анализа Python и JavaScript/TypeScript. |
| <nobr>`--db-cluster`</nobr> | | Необязательный элемент. Используйте в многоязычных базах кода для создания одной базы данных для каждого языка, заданного <nobr>`--language`</nobr>.
| <nobr>`--no-run-unnecessary-builds`</nobr> | | (рекомендуется). Используйте, чтобы подавлять команду сборки для языков, где {% data variables.product.prodname_codeql_cli %} не нужно отслеживать сборку (например, Python и JavaScript/TypeScript).
| <nobr>`--source-root`</nobr> | | Необязательный элемент. Используйте, если вы запускаете CLI за пределами корневого элемента извлечения репозитория. По умолчанию командой `database create` предполагается, что текущий каталог является корневым каталогом для исходных файлов. Используйте этот параметр, чтобы указать другое местоположение. |
| <nobr>`--codescanning-config`</nobr> | | Необязательно (дополнительно). Используйте этот вариант, если у вас есть файл конфигурации, указывающий, как создавать базы данных {% data variables.product.prodname_codeql %} и какие запросы будут выполняться на последующих шагах. Дополнительные сведения см. в разделе [Использование пользовательского файла конфигурации](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-a-custom-configuration-file) и [database create](https://codeql.github.com/docs/codeql-cli/manual/database-create/#cmdoption-codeql-database-create-codescanning-config). |

Дополнительные сведения см. в статье [Создание баз данных {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/) в документации для {% data variables.product.prodname_codeql_cli %}.

### Пример использования одного языка

В этом примере создается база данных {% data variables.product.prodname_codeql %} для репозитория, извлеченного в папку `/checkouts/example-repo`. Он использует средство извлечения JavaScript для создания иерархического представления кода JavaScript и TypeScript в репозитории. Результирующая база данных хранится в `/codeql-dbs/example-repo`.

```
$ codeql database create /codeql-dbs/example-repo --language=javascript \
    --source-root /checkouts/example-repo

> Initializing database at /codeql-dbs/example-repo.
> Running command [/codeql-home/codeql/javascript/tools/autobuild.cmd]
    in /checkouts/example-repo.
> [build-stdout] Single-threaded extraction.
> [build-stdout] Extracting
...
> Finalizing database at /codeql-dbs/example-repo.
> Successfully created database at /codeql-dbs/example-repo.
```

### Пример с несколькими языками

В этом примере создаются две базы данных {% data variables.product.prodname_codeql %} для репозитория, извлеченного в папку `/checkouts/example-repo-multi`. Он использует следующую информацию:

- `--db-cluster` для запроса анализа более чем одного языка.
- `--language` для указания, для каких языков следует создавать базы данных.
- `--command`, чтобы сообщить инструменту команду сборки для базы кода. Здесь это `make`.
- `--no-run-unnecessary-builds` чтобы сообщить инструменту о необходимости пропустить команду сборки для языков, где она не требуется (например, Python).

Результирующие базы данных хранятся в подкаталогах `python` и `cpp` в `/codeql-dbs/example-repo-multi`.

```
$ codeql database create /codeql-dbs/example-repo-multi \
    --db-cluster --language python,cpp \
    --command make --no-run-unnecessary-builds \
    --source-root /checkouts/example-repo-multi
Initializing databases at /codeql-dbs/example-repo-multi.
Running build command: [make]
[build-stdout] Calling python3 /codeql-bundle/codeql/python/tools/get_venv_lib.py
[build-stdout] Calling python3 -S /codeql-bundle/codeql/python/tools/python_tracer.py -v -z all -c /codeql-dbs/example-repo-multi/python/working/trap_cache -p ERROR: 'pip' not installed.
[build-stdout] /usr/local/lib/python3.6/dist-packages -R /checkouts/example-repo-multi
[build-stdout] [INFO] Python version 3.6.9
[build-stdout] [INFO] Python extractor version 5.16
[build-stdout] [INFO] [2] Extracted file /checkouts/example-repo-multi/hello.py in 5ms
[build-stdout] [INFO] Processed 1 modules in 0.15s
[build-stdout] <output from calling 'make' to build the C/C++ code>
Finalizing databases at /codeql-dbs/example-repo-multi.
Successfully created databases at /codeql-dbs/example-repo-multi.
$
```

## Анализ базы данных {% data variables.product.prodname_codeql %}

1. Создайте базу данных {% data variables.product.prodname_codeql %} (см. выше).
2. Запустите `codeql database analyze` в базе данных и укажите, какие {% ifversion codeql-packs %} пакеты и (или) {% endif %}запросы нужно использовать.
  ```shell
  codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
      --output=&lt;output&gt;  {% ifversion codeql-packs %}--download &lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
  ```

{% note %}

**Примечание.** Если вы анализируете более одной базы данных {% data variables.product.prodname_codeql %} для одной фиксации, необходимо указать категорию SARIF для каждого набора результатов, создаваемых этой командой. При отправке результатов в {% data variables.product.product_name %} {% data variables.product.prodname_code_scanning %} использует эту категорию для хранения результатов для каждого языка отдельно. Если вы забыли это сделать, то при каждой отправке будут перезаписаны предыдущие результаты.

```shell
codeql database analyze &lt;database&gt; --format=&lt;format&gt; \
    --sarif-category=&lt;language-specifier&gt; --output=&lt;output&gt; \
    {% ifversion codeql-packs %}&lt;packs,queries&gt;{% else %}&lt;queries&gt;{% endif %}
```
{% endnote %}

| Параметр | Обязательно | Использование |
|--------|:--------:|-----|
| `<database>` | {% octicon "check-circle-fill" aria-label="Required" %} | Укажите путь к каталогу, содержащему базу данных {% data variables.product.prodname_codeql %} для анализа. |
| `<packs,queries>` | | Укажите пакеты или запросы {% data variables.product.prodname_codeql %} для выполнения. Чтобы выполнить стандартные запросы, используемые для {% data variables.product.prodname_code_scanning %}, опустите этот параметр. Чтобы просмотреть другие наборы запросов, включенные в пакет {% data variables.product.prodname_codeql_cli %}, выполните поиск в `/<extraction-root>/qlpacks/codeql/<language>-queries/codeql-suites`. Сведения о создании собственного набора запросов см. в статье [Создание наборов запросов CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/) в документации по {% data variables.product.prodname_codeql_cli %}.
| <nobr>`--format`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Укажите формат для файла результатов, созданного командой. Для отправки в {% data variables.product.company_short %} это должен быть: {% ifversion fpt or ghae or ghec %}`sarif-latest`{% else %}`sarifv2.1.0`{% endif %}. Дополнительные сведения см. на странице [Поддержка SARIF для {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/sarif-support-for-code-scanning).
| <nobr>`--output`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Укажите, где следует сохранить файл результатов SARIF.
| <nobr>`--sarif-category`<nobr> | {% octicon "question" aria-label="Required with multiple results sets" %} | Необязательно для анализа отдельных баз данных. Требуется для определения языка при анализе нескольких баз данных для одной фиксации в репозитории. Укажите категорию для включения в файл результатов SARIF для этого анализа. Категория используется для различения нескольких анализов для одного и того же средства и фиксации, но для разных языков или различных частей кода.|{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
| <nobr>`--sarif-add-query-help`</nobr> | | Необязательный элемент. Используйте, если хотите включить доступную справку по запросам на языке разметки markdown для пользовательских запросов, используемых при анализе. Любая справка по пользовательским запросам, содержащимся в выходных данных SARIF, будет отображаться в пользовательском интерфейсе проверки кода, если соответствующий запрос создает предупреждение. Дополнительные сведения см. в статье [Анализ баз данных с помощью {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/#including-query-help-for-custom-codeql-queries-in-sarif-files) в документации по {% data variables.product.prodname_codeql_cli %}.{% endif %}{% ifversion codeql-packs %}
| `<packs>` | | Необязательный элемент. Используйте, если необходимо включить пакеты запросов CodeQL в анализ. Дополнительные сведения см. в разделе [Скачивание и использование пакетов данных {% data variables.product.prodname_codeql %}](#downloading-and-using-codeql-query-packs).
| <nobr>`--download`</nobr> | | Необязательный элемент. Используйте, если некоторые из ваших пакетов запросов CodeQL еще не находятся на диске и их необходимо скачать перед выполнением запросов.{% endif %}
| <nobr>`--threads`</nobr> | | Необязательный элемент. Используйте, если требуется использовать более одного потока для выполнения запросов. Значение по умолчанию — `1`. Можно указать больше потоков для ускорения выполнения запросов. Чтобы задать число потоков, равное числу логических процессоров, укажите `0`.
| <nobr>`--verbose`</nobr> | | Необязательный элемент. Используйте для получения более подробных сведений о процессе анализа и диагностических данных из процесса создания базы данных.

Дополнительные сведения см. в статье [Анализ баз данных с {% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/) в документации для {% data variables.product.prodname_codeql_cli %}.

### Простой пример

В этом примере анализируется база данных {% data variables.product.prodname_codeql %}, хранящаяся в папке `/codeql-dbs/example-repo`, и результаты сохраняются в виде файла SARIF: `/temp/example-repo-js.sarif`. Он использует `--sarif-category`, чтобы включить в файл SARIF дополнительные сведения, определяющие результаты в виде JavaScript. Это критически важно при наличии нескольких баз данных {% data variables.product.prodname_codeql %} для анализа отдельной фиксации в репозитории.

```
$ codeql database analyze /codeql-dbs/example-repo  \
    javascript-code-scanning.qls --sarif-category=javascript \
    --format={% ifversion fpt or ghae or ghec %}sarif-latest{% else %}sarifv2.1.0{% endif %} --output=/temp/example-repo-js.sarif

> Running queries.
> Compiling query plan for /codeql-home/codeql/qlpacks/codeql-javascript/AngularJS/DisablingSce.ql.
...
> Shutting down query evaluator.
> Interpreting results.
```

## Загрузка результатов в {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

Перед отправкой результатов в {% data variables.product.product_name %} необходимо определить оптимальный способ передачи созданных ранее {% data variables.product.prodname_github_app %} или {% data variables.product.pat_generic %} в {% data variables.product.prodname_codeql_cli %} (см. [раздел Установка {% data variables.product.prodname_codeql_cli %} в системе CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system#generating-a-token-for-authentication-with-github)). Рекомендуется проанализировать руководство по использованию системы CI для безопасного использования хранилища секретов. {% data variables.product.prodname_codeql_cli %} поддерживает следующие действия:

- Передача маркера в CLI через стандартный ввод с помощью параметра `--github-auth-stdin` (рекомендуется).
- Сохранение секрета в переменной среды `GITHUB_TOKEN` и запуск интерфейса командной строки без включения параметра `--github-auth-stdin`.

Если вы выбрали наиболее безопасный и надежный метод для сервера CI, выполните команду `codeql github upload-results` в каждом файле результатов SARIF и включите `--github-auth-stdin`, если только маркер не доступен в переменной среды `GITHUB_TOKEN`.

  ```shell
  echo "$UPLOAD_TOKEN" | codeql github upload-results --repository=&lt;repository-name&gt; \
      --ref=&lt;ref&gt; --commit=&lt;commit&gt; --sarif=&lt;file&gt; \
      {% ifversion ghes or ghae %}--github-url=&lt;URL&gt; {% endif %}--github-auth-stdin
  ```

| Параметр | Обязательно | Использование |
|--------|:--------:|-----|
| <nobr>`--repository`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Укажите *ВЛАДЕЛЬЦА/ИМЯ* репозитория, в который будут отправлены данные. Владельцем должна быть организация в пределах предприятия, имеющая лицензию на {% data variables.product.prodname_GH_advanced_security %}. Вам необходимо включить {% data variables.product.prodname_GH_advanced_security %} для репозитория{% ifversion fpt or ghec %}, если только репозиторий не является общедоступным{% endif %}. Дополнительные сведения см. в статье [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).
| <nobr>`--ref`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Укажите имя извлеченного и проанализированного `ref`, чтобы результаты можно было сопоставить с правильным кодом. Для ветки используйте: `refs/heads/BRANCH-NAME`, для фиксации заголовка запроса на вытягивание используйте `refs/pull/NUMBER/head` или для созданной {% data variables.product.prodname_dotcom %} фиксации слияния запроса на вытягивание используйте `refs/pull/NUMBER/merge`.
| <nobr>`--commit`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Укажите полный SHA для проанализированной фиксации.
| <nobr>`--sarif`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Укажите файл SARIF для загрузки.{% ifversion ghes or ghae %}
| <nobr>`--github-url`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Укажите URL-адрес для {% data variables.product.product_name %}.{% endif %}
| <nobr>`--github-auth-stdin`</nobr> | | Необязательный элемент. Используйте для передачи интерфейса командной строки {% data variables.product.prodname_github_app %} или {% data variables.product.pat_generic %}, созданного для проверки подлинности с помощью REST API {% data variables.product.company_short %}, через стандартные входные данные. Это не требуется, если команда имеет доступ к переменной среды `GITHUB_TOKEN`, заданной с помощью этого маркера.

Дополнительные сведения см. в статье [Результаты загрузки GitHub](https://codeql.github.com/docs/codeql-cli/manual/github-upload-results/) в документации по {% data variables.product.prodname_codeql_cli %}.

### Простой пример

В этом примере выполняется загрузка результатов из файла SARIF `temp/example-repo-js.sarif` в репозиторий `my-org/example-repo`. Для API {% data variables.product.prodname_code_scanning %} сообщается, что результаты необходимы для фиксации `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` в ветви `main`.

```
$ echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes or ghae %}--github-url={% data variables.command_line.git_url_example %} \
    {% endif %}--github-auth-stdin
```

Эта команда ничего не выводит, если загрузка не удалась. Командная строка возвращается после завершения загрузки и начала обработки данных. В небольших базах кода вскоре после этого вы сможете изучить оповещения {% data variables.product.prodname_code_scanning %} в {% data variables.product.product_name %}. Вы можете просматривать оповещения непосредственно в запросе на вытягивание или на вкладке **Безопасность** для ветвей, в зависимости от кода, который был извлечен. Дополнительные сведения см. на страницах [Рассмотрение оповещений {% data variables.product.prodname_code_scanning %} в запросах на вытягивание](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests) и [Управление оповещениями {% data variables.product.prodname_code_scanning %} для вашего репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository).

{% ifversion codeql-packs %}
## Скачивание и использование пакетов запросов {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.beta-codeql-packs-cli %}

Пакет {% data variables.product.prodname_codeql_cli %} включает запросы, которые обслуживают эксперты {% data variables.product.company_short %}, исследователи безопасности и участники сообщества. Если вам необходимо выполнять запросы, разработанные другими организациями, пакеты запросов {% data variables.product.prodname_codeql %} предоставляют эффективный и надежный способ загрузки и выполнения запросов. Дополнительные сведения см. в разделе [Сведения о проверке кода с помощью CodeQL](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries).

Прежде чем использовать пакет данных {% data variables.product.prodname_codeql %} для анализа базы данных, необходимо скачать все необходимые пакеты из {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}. Это можно сделать с помощью флага `--download` в рамках команды `codeql database analyze`. Если пакет не является общедоступным, для проверки подлинности необходимо использовать {% data variables.product.prodname_github_app %} или {% data variables.product.pat_generic %}. Дополнительные сведения и пример см. выше в разделе [ {% data variables.product.product_name %}](#uploading-results-to-github).

| Параметр | Обязательно | Использование |
|--------|:--------:|-----|
| <nobr>`<scope/name@version:path>`</nobr> | {% octicon "check-circle-fill" aria-label="Required" %} | Укажите область и имя одного или нескольких пакетов запросов CodeQL для скачивания с помощью списка, разделенного запятыми. При необходимости включите версию для скачивания и распаковки. По умолчанию скачивается последняя версия пакета. При необходимости добавьте путь к запросу, каталогу или набору запросов для выполнения. Если путь не включен, выполните запросы этого пакета по умолчанию. |
| <nobr>`--github-auth-stdin`</nobr> | | Необязательный элемент. Передайте {% data variables.product.prodname_github_app %} или {% data variables.product.pat_generic %}, созданные для проверки подлинности с помощью REST API {% data variables.product.company_short %}, в интерфейс командной строки через стандартные входные данные. Это не требуется, если команда имеет доступ к переменной среды `GITHUB_TOKEN`, заданной с помощью этого маркера.

### Простой пример

В этом примере выполняется команда `codeql database analyze` с параметром `--download`, чтобы:

1. Скачать последнюю версию пакета `octo-org/security-queries`.
2. Скачать версию `octo-org/optional-security-queries` пакета, которая была бы *совместима* с версией 1.0.1 (в данном случае это версия 1.0.2). Дополнительные сведения о совместимости SemVer см. в [документации по семантическому диапазону версий npm](https://github.com/npm/node-semver#ranges).
3. Выполните все запросы по умолчанию в `octo-org/security-queries`.
4. Выполнение только запроса `queries/csrf.ql` из `octo-org/optional-security-queries`

```
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql database analyze --download /codeql-dbs/example-repo \
    octo-org/security-queries \
    octo-org/optional-security-queries@~1.0.1:queries/csrf.ql \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0
> Installed fresh octo-org/optional-security-queries@1.0.2
> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/2] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> [2/2] Found in cache: /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> Starting evaluation of octo-org/optional-security-queries/queries/csrf.ql.
> [2/2 eval 694ms] Evaluation done; writing results to octo-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```

### Прямое скачивание пакетов {% data variables.product.prodname_codeql %}

Если вы хотите скачать пакет {% data variables.product.prodname_codeql %} без его немедленного запуска, можно использовать команду `codeql pack download`. Это полезно, если вы хотите избежать доступа к Интернету при выполнении запросов {% data variables.product.prodname_codeql %}. При выполнении анализа {% data variables.product.prodname_codeql %} можно указать пакеты, версии и пути так же, как и в предыдущем примере:

```shell
echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download &lt;scope/name@version:path&gt; &lt;scope/name@version:path&gt; ...
```

### Скачивание пакетов {% data variables.product.prodname_codeql %} из нескольких реестров контейнеров {% data variables.product.company_short %}

Если ваши пакеты {% data variables.product.prodname_codeql %} находятся в нескольких реестрах контейнеров, необходимо указать {% data variables.product.prodname_codeql_cli %}, где найти каждый пакет. Дополнительные сведения см. в статье [Настройка {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors#downloading-codeql-packs-from-github-enterprise-server).
{% endif %}

## Пример конфигурации непрерывной интеграции для анализа {% data variables.product.prodname_codeql %}

Это пример серии команд, которые можно использовать для анализа базы кодов с двумя поддерживаемыми языками, а затем загрузить результаты в {% data variables.product.product_name %}.

```shell
# Create CodeQL databases for Java and Python in the 'codeql-dbs' directory
# Call the normal build script for the codebase: 'myBuildScript'

codeql database create codeql-dbs --source-root=src \
    --db-cluster --language=java,python --command=./myBuildScript

# Analyze the CodeQL database for Java, 'codeql-dbs/java'
# Tag the data as 'java' results and store in: 'java-results.sarif'

codeql database analyze codeql-dbs/java java-code-scanning.qls \
    --format=sarif-latest --sarif-category=java --output=java-results.sarif

# Analyze the CodeQL database for Python, 'codeql-dbs/python'
# Tag the data as 'python' results and store in: 'python-results.sarif'

codeql database analyze codeql-dbs/python python-code-scanning.qls \
    --format=sarif-latest --sarif-category=python --output=python-results.sarif

# Upload the SARIF file with the Java results: 'java-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=java-results.sarif --github-auth-stdin

# Upload the SARIF file with the Python results: 'python-results.sarif'

echo $UPLOAD_TOKEN | codeql github upload-results --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=python-results.sarif --github-auth-stdin
```

## Устранение неполадок {% data variables.product.prodname_codeql_cli %} в системе CI

### Просмотр журналов и сведений по диагностике

При анализе базы данных {% data variables.product.prodname_codeql %} с помощью набора запросов {% data variables.product.prodname_code_scanning %} в дополнение к созданию подробной информации об оповещениях интерфейс командной строки сообщает диагностические данные с этапа создания базы данных и сводные метрики. Для репозиториев с небольшим количеством предупреждений эта информация может оказаться полезной для определения того, действительно ли в коде мало проблем или возникали ли ошибки при создании базы данных {% data variables.product.prodname_codeql %}. Для более подробного вывода из `codeql database analyze` используйте параметр `--verbose`.

Дополнительные сведения о типе доступных диагностических сведений см. в разделе [Просмотр журналов {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs#about-analysis-and-diagnostic-information).

### {% data variables.product.prodname_code_scanning_capc %} отображает только результаты анализа на одном из проанализированных языков

По умолчанию {% data variables.product.prodname_code_scanning %} ожидается один файл результатов SARIF по каждому анализу для репозитория. Следовательно, когда вы загружаете второй файл результатов SARIF для фиксации, он рассматривается как замена исходного набора данных.

Если вы хотите загрузить более одного набора результатов в API {% data variables.product.prodname_code_scanning %} для фиксации в репозитории, необходимо идентифицировать каждый набор результатов как уникальный. Для репозиториев, в которых вы создаете более одной базы данных {% data variables.product.prodname_codeql %} для анализа каждой фиксации, используйте параметр `--sarif-category`, чтобы указать язык или другую уникальную категорию для каждого файла SARIF, который вы создаете для этого репозитория.

{% ifversion fpt or ghec or ghes > 3.7 or ghae > 3.7 %}
### Проблемы с извлечением Python

Мы не рекомендуем использовать Python 2 для {% data variables.product.prodname_codeql_cli %}, в частности для этапа создания базы данных CodeQL (извлечение кода).

Если вы используете {% data variables.product.prodname_codeql_cli %} для запуска {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} в коде, написанном на Python, необходимо убедиться, что в системе CI установлен Python 3.

{% endif %}

## Дополнительные материалы

- [Создание базы данных CodeQL](https://codeql.github.com/docs/codeql-cli/creating-codeql-databases/)
- [Анализ баз данных с помощью интерфейса командной строки CodeQL](https://codeql.github.com/docs/codeql-cli/analyzing-databases-with-the-codeql-cli/)
- [Публикация и использование пакетов CodeQL](https://codeql.github.com/docs/codeql-cli/publishing-and-using-codeql-packs/)
