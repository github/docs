---
title: Запуск средства выполнения CodeQL в системе CI
shortTitle: Run CodeQL runner
intro: '{% data variables.code-scanning.codeql_runner %} можно использовать для выполнения {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} в сторонней системе непрерывной интеграции.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system
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
ms.openlocfilehash: 7e60376ed165a3af2da7f000c37d326cb33ade99
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161097'
---
<!--UI-LINK: When GitHub Enterprise Server <=3.0 doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% ifversion codeql-runner-supported %}

{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Сведения о {% data variables.code-scanning.codeql_runner %}

{% data variables.code-scanning.codeql_runner %} — это средство, которое можно использовать для запуска {% data variables.product.prodname_code_scanning %} в коде, обрабатываемом в сторонней системе непрерывной интеграции (CI). {% data reusables.code-scanning.about-code-scanning %} Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_code_scanning %} с {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql).

Во многих случаях проще настроить {% data variables.product.prodname_code_scanning %} {% data variables.product.prodname_codeql %} с помощью {% data variables.product.prodname_codeql_cli %} непосредственно в системе CI. 

Вы также можете использовать {% data variables.product.prodname_actions %} для запуска {% data variables.product.prodname_code_scanning %} в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

{% data variables.code-scanning.codeql_runner %} — это программа командной строки, которая выполняет анализ {% data variables.product.prodname_codeql %} при извлечении репозитория {% data variables.product.prodname_dotcom %}. Вы добавляете средство выполнения в свою стороннюю систему, а затем вызываете это средство выполнения для анализа кода и отправки результатов в {% data variables.product.product_name %}. Эти результаты отображаются в репозитории как оповещения {% data variables.product.prodname_code_scanning %}.

{% note %}

**Примечание.** {% ifversion fpt or ghec %}
* {% data variables.code-scanning.codeql_runner %} использует интерфейс командной строки {% data variables.product.prodname_codeql %} для анализа кода и, следовательно, имеет те же условия лицензии. Его можно бесплатно использовать в общедоступных репозиториях, которые хранятся на {% data variables.product.prodname_dotcom_the_website %}, а также можно использовать в частных репозиториях, принадлежащих клиентам с лицензией {% data variables.product.prodname_advanced_security %}. Дополнительные сведения см. в разделах [Условия {% data variables.product.product_name %} {% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql/license) и [Интерфейс командной строки {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/).
{% else %}
* {% data variables.code-scanning.codeql_runner %} доступен клиентам с лицензией {% data variables.product.prodname_advanced_security %}.
{% endif %} {% ifversion ghae %}
* {% data variables.code-scanning.codeql_runner %} не следует путать с интерфейсом командной строки {% data variables.product.prodname_codeql %}. CLI {% data variables.product.prodname_codeql %} — это интерфейс командной строки, который позволяет создавать базы данных {% data variables.product.prodname_codeql %} для исследования безопасности и выполнять запросы {% data variables.product.prodname_codeql %}.
Дополнительные сведения см. в разделе [{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/).
{% endif %} {% endnote %}

## Скачивание {% data variables.code-scanning.codeql_runner %}

{% data variables.code-scanning.codeql_runner %} можно скачать из https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action/releases. В некоторых операционных системах может потребоваться изменить разрешения для скачанного файла, прежде чем его можно будет запустить.

В Linux

```shell
chmod +x codeql-runner-linux
```

Действия для MacOS.

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

В Windows изменение разрешений для файла `codeql-runner-win.exe` обычно не требуется.

## Добавление {% data variables.code-scanning.codeql_runner %} в систему CI

Скачав {% data variables.code-scanning.codeql_runner %} и убедившись, что он может быть выполнен, следует сделать средство выполнения доступным для каждого сервера CI, который планируется использовать для {% data variables.product.prodname_code_scanning %}. Например, можно настроить каждый сервер для копирования средства выполнения из центрального внутреннего расположения. Кроме того, можно использовать REST API для получения средства выполнения непосредственно из {% data variables.product.prodname_dotcom %}, например: 

```shell
wget https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

Помимо этого, каждому серверу CI также потребуется следующее.

- {% data variables.product.prodname_github_app %} или {% data variables.product.pat_generic %} для использования {% data variables.code-scanning.codeql_runner %}. Необходимо использовать маркер доступа с областью `repo` или {% data variables.product.prodname_github_app %} с разрешением на запись `security_events`, а также разрешениями на чтение `metadata` и `contents`. Дополнительные сведения см. в [разделах Создание {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)и [Создание {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token).
- Доступ к пакету {% data variables.product.prodname_codeql %}, связанному с этим выпуском {% data variables.code-scanning.codeql_runner %}. Этот пакет содержит запросы и библиотеки, необходимые для анализа {% data variables.product.prodname_codeql %}, а также интерфейс командной строки {% data variables.product.prodname_codeql %}, который используется средством выполнения внутренним образом. Дополнительные сведения см. в разделе "[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)".

Существуют следующие варианты предоставления доступа к пакету {% data variables.product.prodname_codeql %}.

1. Разрешите серверам CI доступ к https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action, чтобы {% data variables.code-scanning.codeql_runner %} мог скачать пакет автоматически.
1. Скачайте или извлеките пакет вручную, сохраните его вместе с другими центральными ресурсами и используйте <nobr>`--codeql-path`</nobr> флаг , чтобы указать расположение пакета в вызовах для инициализации {% data variables.code-scanning.codeql_runner %}.

## Вызов {% data variables.code-scanning.codeql_runner %}

Необходимо вызвать {% data variables.code-scanning.codeql_runner %} из расположения возврата репозитория, который требуется проанализировать. При этом используются две следующие основные команды.

1. `init` требуется для инициализации средства выполнения и создания базы данных {% data variables.product.prodname_codeql %} для каждого анализируемого языка. Эти базы данных заполняются и анализируются последующими командами.
1. `analyze` требуется для заполнения баз данных {% data variables.product.prodname_codeql %}, анализа их и отправки результатов в {% data variables.product.product_name %}.

Для обеих команд необходимо указать URL-адрес {% data variables.product.product_name %}, *владельца/имя* репозитория, а также {% data variables.product.prodname_github_apps %} или {% data variables.product.pat_generic %} для проверки подлинности. Кроме того, необходимо указать расположение пакета CodeQL, если сервер CI не имеет доступа для его загрузки непосредственно из репозитория `github/codeql-action`.

Вы можете настроить, где {% data variables.code-scanning.codeql_runner %} хранит пакет CodeQL для последующего анализа на сервере с помощью флага <nobr>`--tools-dir`</nobr> и где он хранит временные файлы во время анализа с помощью <nobr>`--temp-dir`</nobr>.

Для просмотра ссылки на командную строку для средства выполнения используйте флаг `-h`. Например, чтобы вывести список всех команд, выполните `codeql-runner-OS -h`, а чтобы вывести список всех флагов, доступных для команды `init`, выполните `codeql-runner-OS init -h` (где `OS` зависит от используемого исполняемого файла). Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_code_scanning %} в системе CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference).

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Простой пример

В этом примере запускается анализ {% data variables.product.prodname_codeql %} на сервере CI Linux для репозитория `octo-org/example-repo`, размещенного в `{% data variables.command_line.git_url_example %}`. Процесс очень прост, так как репозиторий содержит только языки, которые можно анализировать с помощью {% data variables.product.prodname_codeql %} напрямую, без сборки (то есть Go, JavaScript, Python и TypeScript).

В этом примере сервер имеет доступ к загрузке пакета {% data variables.product.prodname_codeql %} непосредственно из репозитория `github/codeql-action`, поэтому нет необходимости использовать флаг `--codeql-path`.

1. Извлеките репозиторий для анализа.
1. Перейдите в каталог, в который извлечен репозиторий.
1. Инициализируйте {% data variables.code-scanning.codeql_runner %} и создайте базы данных {% data variables.product.prodname_codeql %} для обнаруженных языков.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

{% data reusables.code-scanning.codeql-runner-analyze-example %}

### Пример со скомпилированным языком

Этот пример аналогичен предыдущему, но на этот раз репозиторий содержит код на C/C++, C# или Java. Чтобы создать базу данных {% data variables.product.prodname_codeql %} для этих языков, интерфейс командной строки должен выполнять мониторинг сборки. В конце процесса инициализации средство выполнения сообщает команду, необходимую для настройки среды перед сборкой кода. Вы должны выполнить эту команду, прежде чем вызывать обычный процесс сборки CI, а затем выполнить команду `analyze`.

1. Извлеките репозиторий для анализа.
1. Перейдите в каталог, в который извлечен репозиторий.
1. Инициализируйте {% data variables.code-scanning.codeql_runner %} и создайте базы данных {% data variables.product.prodname_codeql %} для обнаруженных языков.
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so that CodeQL can monitor the build, for example by running 
      ". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
    ```
1. Получите скрипт, созданный действием `init` для настройки среды для мониторинга сборки. Обратите внимание на начальную точку и пробел в следующем фрагменте кода.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. Выполните сборку кода. В macOS перед командой сборки необходимо указать переменную среды `$CODEQL_RUNNER`. Дополнительные сведения см. в разделе [Устранение неполадок {% data variables.code-scanning.codeql_runner %} в системе CI](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build).

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**Примечание:** Если вы используете контейнерную сборку, необходимо запустить {% data variables.code-scanning.codeql_runner %} в контейнере, в котором выполняется задача сборки.

{% endnote %}

## Дополнительные материалы

- [Настройка {% data variables.code-scanning.codeql_runner %} в системе CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)
- [Устранение неполадок {% data variables.code-scanning.codeql_runner %} в системе CI](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system)

{% else %}

## Сведения о {% data variables.code-scanning.codeql_runner %}

{% data variables.code-scanning.codeql_runner %} устарел. [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-cli-binaries/releases) версии 2.7.6 имеет полное равенство функций.

Сведения о переходе на {% data variables.product.prodname_codeql_cli %} см. в разделе [Переход со средства выполнения CodeQL на CLI CodeQL](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli).

## Дополнительные материалы

- [Объявление нерекомендуемым средства выполнения CodeQL](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/) в блоге GitHub

{% endif %}
