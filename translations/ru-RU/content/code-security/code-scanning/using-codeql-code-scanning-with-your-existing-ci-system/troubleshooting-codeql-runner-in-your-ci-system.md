---
title: Устранение неполадок со средством выполнения CodeQL в системе CI
shortTitle: Troubleshoot CodeQL runner
intro: 'Если у вас возникли проблемы с {% data variables.code-scanning.codeql_runner %}, воспользуйтесь этими советами.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/troubleshooting-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Troubleshooting
  - Integration
  - CI
ms.openlocfilehash: b241e0c01b463a46a1eb3b47b68ba0283a94609d
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161165'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

## Выполнение команды `init` занимает слишком много времени

Прежде чем {% data variables.code-scanning.codeql_runner %} сможет создавать и анализировать код, ему требуется доступ к пакету {% data variables.product.prodname_codeql %}, который содержит интерфейс командной строки {% data variables.product.prodname_codeql %} и библиотеки {% data variables.product.prodname_codeql %}.

При первом использовании {% data variables.code-scanning.codeql_runner %} на компьютере `init` команда загружает пакет {% data variables.product.prodname_codeql %} на компьютер. Загрузка может занять несколько минут.
Пакет {% data variables.product.prodname_codeql %} кэшируется между запусками, поэтому при повторном использовании {% data variables.code-scanning.codeql_runner %} на том же компьютере пакет {% data variables.product.prodname_codeql %} больше не скачается.

Чтобы избежать автоматического скачивания, можно вручную скачать пакет {% data variables.product.prodname_codeql %} на компьютер и указать путь с помощью флага `--codeql-path` команды `init`.

## Во время сборки не найден код

`analyze` Если команда для {% data variables.code-scanning.codeql_runner %} завершается ошибкой `No source code was seen during the build`, это означает, что {% data variables.product.prodname_codeql %} не удалось отслеживать код. У этого сбоя может быть несколько причин.

1. Автоматическое определение языка идентифицировало поддерживаемый язык, но в репозитории нет анализируемого кода на этом языке. Типичный пример — служба определения языка находит файл, связанный с определенным языком программирования, например файл `.h` или `.gyp`, но в репозитории отсутствует соответствующий исполняемый код. Чтобы решить эту проблему, можно вручную определить языки, которые требуется проанализировать, с помощью флага `--languages` команды `init`. Дополнительные сведения см. в разделе [Настройка {% data variables.code-scanning.codeql_runner %} в системе CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system).

1. Вы анализируете скомпилированный язык без использования команды `autobuild` и выполняете шаги сборки самостоятельно после шага `init`. Чтобы сборка работала, необходимо настроить среду таким образом, чтобы {% data variables.code-scanning.codeql_runner %} могли отслеживать процесс сборки. Команда `init` создает инструкции по экспорту необходимых переменных среды, чтобы можно было скопировать и запустить скрипт после выполнения команды `init`.
   - В macOS и Linux:
     ```shell
      $ . codeql-runner/codeql-env.sh
     ```
   - В Windows с помощью командной оболочки (`cmd`) или пакетного файла (`.bat`):
     ```shell
     > call codeql-runner\codeql-env.bat
     ```
   - В Windows с использованием PowerShell:
     ```shell
     > cat codeql-runner\codeql-env.sh | Invoke-Expression
     ```

   Переменные среды также хранятся в файле `codeql-runner/codeql-env.json`. Этот файл содержит один объект JSON, который сопоставляет ключи переменных среды со значениями. Если вы не можете запустить скрипт, созданный командой `init`, вместо этого можно использовать данные в формате JSON.

   {% note %}

   **Примечание.** Если вы использовали флаг `--temp-dir` команды `init` для указания пользовательского каталога для временных файлов, путь к файлам `codeql-env` может отличаться.

   {% endnote %}

1. Вы анализируете скомпилированный язык на macOS без использования команды `autobuild` и выполняете шаги сборки самостоятельно после шага `init`. Если включена функция SIP (System Integrity Protection), а она включена по умолчанию в последних версиях OSX, анализ может завершиться ошибкой. Чтобы устранить эту проблему, перед командой сборки укажите переменную среды `$CODEQL_RUNNER`. 
   Например, если вы используете команду сборки `cmd arg1 arg2`, выполните команду `$CODEQL_RUNNER cmd arg1 arg2`.

1. Код собирается в контейнере или на отдельном компьютере. Если вы используете контейнерную сборку или передаете сборку на другой компьютер, обязательно запустите {% data variables.code-scanning.codeql_runner %} в контейнере или на компьютере, где выполняется задача сборки. Дополнительные сведения см. в разделе [Выполнение сканирования кода CodeQL в контейнере](/code-security/secure-coding/running-codeql-code-scanning-in-a-container).
