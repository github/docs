---
title: Настройка средства выполнения тестов CodeQL в системе CI
shortTitle: Configure CodeQL runner
intro: 'Вы можете настроить, как {% data variables.code-scanning.codeql_runner %} сканирует код в проекте и передает результаты в {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Integration
  - CI
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 64245dd9f320947510db3e108b30c886c95b89d1
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161073'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## О настройке {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} в системе CI

Для интеграции {% data variables.product.prodname_code_scanning %} в систему НЕПРЕРЫВНОй интеграции можно использовать {% data variables.code-scanning.codeql_runner %}. Дополнительные сведения см[. в разделе Выполнение {% data variables.code-scanning.codeql_runner %} в системе CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system).

Как правило, {% data variables.code-scanning.codeql_runner %} вызывается следующим образом.

```shell
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` зависит от того, где вы скачали {% data variables.code-scanning.codeql_runner %} в системе CI. `codeql-runner-OS` зависит от используемой операционной системы.
Существует три версии {% data variables.code-scanning.codeql_runner %}, `codeql-runner-linux`, `codeql-runner-macos`и `codeql-runner-win`для систем Linux, macOS и Windows соответственно. 

Чтобы настроить способ сканирования кода в {% data variables.code-scanning.codeql_runner %}, можно использовать флаги, такие как `--languages` и `--queries`, или указать пользовательские параметры в отдельном файле конфигурации.

## Сканирование запросов на вытягивание

Сканирование кода при каждом создании запроса на вытягивание предотвращает внесение разработчиками в код новых уязвимостей и ошибок.

Чтобы отсканировать запрос на вытягивание, запустите команду `analyze` ​​и используйте флаг `--ref` для указания запроса на вытягивание. Ссылка является `refs/pull/<PR-number>/head` или `refs/pull/<PR-number>/merge` в зависимости от того, извлечена ли фиксация HEAD ветки запроса на вытягивание или фиксация слияния с базовой веткой.

```shell
$ /path/to-runner/codeql-runner-linux analyze --ref refs/pull/42/merge
```

{% note %}

**Примечание**. Если при анализе кода с помощью стороннего инструмента необходимо, чтобы результаты отображались в виде проверок запросов на вытягивание, нужно выполнить команду `upload` и использовать флаг `--ref`, чтобы вместо ветви указать запрос на вытягивание. Ссылка является `refs/pull/<PR-number>/head` или `refs/pull/<PR-number>/merge`.

{% endnote %}

## Переопределение автоматического определения языка

{% data variables.code-scanning.codeql_runner %} автоматически обнаруживает и сканирует код, написанный на поддерживаемых языках.

{% data reusables.code-scanning.codeql-languages-bullets %}

{% data reusables.code-scanning.specify-language-to-analyze %}

Чтобы переопределить автоматическое определение языка, выполните команду `init` ​​с флагом `--languages`, за которым следует разделенный запятыми список ключевых слов языка. Ключевые слова для поддерживаемых языков: {% data reusables.code-scanning.codeql-languages-keywords %}.

```shell
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

## Выполнение дополнительных запросов

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites-explanation %}

Чтобы добавить один или несколько запросов, передайте список путей, разделенных запятыми, флагу `--queries` ​​команды `init`. Вы также можете указать дополнительные запросы в файле конфигурации.

Если вы также используете файл конфигурации для пользовательских параметров и указываете дополнительные запросы с флагом `--queries` , {% data variables.code-scanning.codeql_runner %} использует дополнительные запросы, указанные с флагом <nobr>`--queries`</nobr> , вместо любых в файле конфигурации.
Если необходимо запустить комбинированный набор дополнительных запросов, указанных с помощью флага и в файле конфигурации, добавьте перед значением, переданным <nobr>`--queries`</nobr>, символ `+`.
Дополнительные сведения см. в разделе [Использование пользовательского файла конфигурации](#using-a-custom-configuration-file).

В следующем примере символ гарантирует, что {% data variables.code-scanning.codeql_runner %} использует дополнительные запросы вместе с любыми запросами, `+` указанными в указанном файле конфигурации.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

## Использование пользовательского файла конфигурации

Вместо передачи дополнительных сведений в команды {% data variables.code-scanning.codeql_runner %} можно указать пользовательские параметры в отдельном файле конфигурации.

Файл конфигурации представляет собой файл YAML. Он использует синтаксис, аналогичный синтаксису рабочего процесса для {% data variables.product.prodname_actions %}, как показано в примерах ниже. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions). 

Используйте флаг `--config-file` команды `init`, чтобы указать файл конфигурации. Значение <nobr>`--config-file`</nobr> — это путь к файлу конфигурации, который необходимо использовать. В этом примере загружается файл конфигурации _.github/codeql/codeql-config.yml_.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

### Примеры файлов конфигурации

{% data reusables.code-scanning.example-configuration-files %}

## Настройка {% data variables.product.prodname_code_scanning %} для скомпилированных языков

Для скомпилированных языков C/C++, C#, {% ifversion codeql-go-autobuild %} Go, {% endif %} и Java {% data variables.product.prodname_codeql %} выполняет сборку кода перед его анализом. {% data reusables.code-scanning.analyze-go %}

Для многих распространенных систем сборки {% data variables.code-scanning.codeql_runner %} может создавать код автоматически. Чтобы выполнить сборку кода автоматически, запустите `autobuild` между шагами `init` и `analyze`. Обратите внимание, что если для вашего репозитория требуется определенная версия инструмента сборки, вам может потребоваться сначала установить инструмент сборки вручную. 

Процесс `autobuild` пытается собрать только _один_ скомпилированный язык для репозитория. Для анализа автоматически выбирается язык с наибольшим количеством файлов. Если необходимо явно выбрать язык, используйте флаг `--language` команды `autobuild`.

```shell
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

Если команда `autobuild` не может собрать ваш код, вы можете самостоятельно выполнить этапы сборки между шагами `init` и `analyze`. Дополнительные сведения см[. в разделе Выполнение {% data variables.code-scanning.codeql_runner %} в системе CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system#compiled-language-example).

## Передача данных {% data variables.product.prodname_code_scanning %} в {% data variables.product.prodname_dotcom %}

По умолчанию {% data variables.code-scanning.codeql_runner %} отправляет результаты из {% data variables.product.prodname_code_scanning %} при выполнении `analyze` команды. Файлы SARIF также можно передать отдельно, используя команду `upload`.

После передачи данных {% data variables.product.prodname_dotcom %} отобразит оповещения в вашем репозитории. 
- При передаче в запрос на вытягивание, например `--ref refs/pull/42/merge` или `--ref refs/pull/42/head`, результаты отображаются в виде оповещений при проверке запроса на вытягивание. Дополнительные сведения см. на странице [Рассмотрение оповещений проверки кода в запросах на вытягивание](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).
- При передаче в ветвь, например `--ref refs/heads/my-branch`, результаты появятся на вкладке **Безопасность** для вашего репозитория. Дополнительные сведения см. в разделе [Управление оповещениями о сканировании кода для репозитория](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).

## Справочник по командам {% data variables.code-scanning.codeql_runner %}

{% data variables.code-scanning.codeql_runner %} поддерживает следующие команды и флаги.

### `init`

Инициализирует {% data variables.code-scanning.codeql_runner %} и создает базу данных {% data variables.product.prodname_codeql %} для каждого языка для анализа.

| Флаг | Обязательно | Входное значение |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | Имя репозитория для инициализации. |
| `--github-url` | ✓ | URL-адрес экземпляра {% data variables.product.prodname_dotcom %}, в котором размещен ваш репозиторий. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Чтение маркера {% data variables.product.prodname_github_apps %} или {% data variables.product.pat_generic %} из стандартных входных данных. |
| `--languages` | | Разделенный запятыми список языков для анализа. По умолчанию {% data variables.code-scanning.codeql_runner %} обнаруживает и анализирует все поддерживаемые языки в репозитории. |
| `--queries` | | Разделенный запятыми список дополнительных запросов, которые необходимо выполнить в дополнение к набору запросов безопасности по умолчанию. Это переопределяет параметр `queries` в пользовательском файле конфигурации. |
| `--config-file` | | Путь к пользовательскому файлу конфигурации. |
| `--codeql-path` | | Путь к копии исполняемого файла CLI {% data variables.product.prodname_codeql %} для использования. По умолчанию {% data variables.code-scanning.codeql_runner %} скачивает копию. |
| `--temp-dir` | | Каталог, в котором хранятся временные файлы. Значение по умолчанию — `./codeql-runner`. |
| `--tools-dir` | | Каталог, в котором инструменты и другие файлы {% data variables.product.prodname_codeql %} хранятся между запусками. По умолчанию это подкаталог домашнего каталога. |
| <nobr>`--checkout-path`</nobr> | | Путь к извлечению вашего репозитория. По умолчанию используется текущая рабочая папка. | 
| `--debug` | | Нет. Печатает более подробные выходные данные. |
| <nobr>`--trace-process-name`</nobr> | | Расширенный, только для Windows. Имя процесса, в который внедряется трассировщик Windows этого процесса. |
| <nobr>`--trace-process-level`</nobr> | | Расширенный, только для Windows. Количество уровней вплоть до родительского процесса, куда внедряется трассировщик Windows этого процесса. |
| `-h`, `--help` | | Нет. Отображает справку по команде. |

### `autobuild`

Попытки собрать код для компилируемых языков C/C++, C# и Java. Для этих языков {% data variables.product.prodname_codeql %} выполняет сборку кода перед его анализом. Запустите `autobuild` между шагами `init` и `analyze`.

| Флаг | Обязательно | Входное значение |
| ---- |:--------:| ----------- |
| `--language` | | Язык для сборки. По умолчанию {% data variables.code-scanning.codeql_runner %} создает скомпилированный язык с наибольшим числом файлов. |
| <nobr>`--temp-dir`</nobr> | | Каталог, в котором хранятся временные файлы. Значение по умолчанию — `./codeql-runner`. |
| `--debug` | | Нет. Печатает более подробные выходные данные. |
| <nobr> `-h`, `--help`</nobr> | | Нет. Отображает справку по команде. |

### `analyze`

Анализирует код в базах данных {% data variables.product.prodname_codeql %} и передает результаты в {% data variables.product.product_name %}.

| Флаг | Обязательно | Входное значение |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | Имя репозитория для анализа. |
| `--commit` | ✓ | SHA фиксации для анализа. В Git и Azure DevOps это соответствует значению `git rev-parse HEAD`. В Jenkins это соответствует `$GIT_COMMIT`. |
| `--ref` | ✓ | Имя ссылки для анализа, например `refs/heads/main` или `refs/pull/42/merge`. В Git или Jenkins это соответствует значению `git symbolic-ref HEAD`. В Azure DevOps это соответствует `$(Build.SourceBranch)`. |
| `--github-url` | ✓ | URL-адрес экземпляра {% data variables.product.prodname_dotcom %}, в котором размещен ваш репозиторий. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Чтение маркера {% data variables.product.prodname_github_apps %} или {% data variables.product.pat_generic %} из стандартных входных данных. |
| <nobr>`--checkout-path`</nobr> | | Путь к извлечению вашего репозитория. По умолчанию используется текущая рабочая папка.  |
| `--no-upload` | | Нет. Останавливает отправку результатов {% data variables.code-scanning.codeql_runner %} в {% data variables.product.product_name %}. |
| `--output-dir` | | Каталог, в котором хранятся выходные файлы SARIF. По умолчанию находится в каталоге временных файлов. |
| `--ram` | | Объем памяти, используемый при выполнении запросов. По умолчанию используется вся доступная память. |
| <nobr>`--no-add-snippets`</nobr> | | Нет. Исключает фрагменты кода из выходных данных SARIF. |
| <nobr>`--category`<nobr> | | Категория для включения в файл результатов SARIF для этого анализа. Категорию можно использовать для различения нескольких анализов для одного и того же инструмента и фиксации, но выполненных на разных языках или в разных частях кода. Это значение появится в свойстве `<run>.automationDetails.id` в SARIF v2.1.0. |
| `--threads` | | Количество потоков, используемых при выполнении запросов. По умолчанию используются все доступные ядра. |
| `--temp-dir` | | Каталог, в котором хранятся временные файлы. Значение по умолчанию — `./codeql-runner`. |
| `--debug` | | Нет. Печатает более подробные выходные данные. |
| `-h`, `--help` | | Нет. Отображает справку по команде. |

### `upload`

Передает файлы SARIF в {% data variables.product.product_name %}.

{% note %}

**Примечание**. При анализе кода с помощью средства выполнения тестов CodeQL команда `analyze` передает результаты SARIF по умолчанию. Вы можете использовать команду `upload` ​​для передачи результатов SARIF, созданных другими инструментами.

{% endnote %}

| Флаг | Обязательно | Входное значение |
| ---- |:--------:| ----------- |
| `--sarif-file` | ✓ | Файл SARIF для передачи или каталог, содержащий несколько файлов SARIF. |
| `--repository` | ✓ | Имя проанализированного репозитория. |
| `--commit` | ✓ | SHA проанализированной фиксации. В Git и Azure DevOps это соответствует значению `git rev-parse HEAD`. В Jenkins это соответствует `$GIT_COMMIT`. |
| `--ref` | ✓ | Имя проанализированной ссылки, например `refs/heads/main` или `refs/pull/42/merge`. В Git или Jenkins это соответствует значению `git symbolic-ref HEAD`. В Azure DevOps это соответствует `$(Build.SourceBranch)`. |
| `--github-url` | ✓ | URL-адрес экземпляра {% data variables.product.prodname_dotcom %}, в котором размещен ваш репозиторий. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Чтение маркера {% data variables.product.prodname_github_apps %} или {% data variables.product.pat_generic %} из стандартных входных данных. |
| <nobr>`--checkout-path`</nobr> | | Путь к извлечению вашего репозитория. По умолчанию используется текущая рабочая папка.  |
| `--debug` | | Нет. Печатает более подробные выходные данные. |
| `-h`, `--help` | | Нет. Отображает справку по команде. |
