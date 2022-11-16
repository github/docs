---
title: Настройка рабочего процесса CodeQL для скомпилированных языков
shortTitle: Configure compiled languages
intro: 'Вы можете настроить, как {% data variables.product.prodname_dotcom %} использует {% data variables.code-scanning.codeql_workflow %} для сканирования кода, написанного на скомпилированных языках, на наличие уязвимостей и ошибок.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
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
  - Actions
  - Repositories
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 91983e79a6381b4a38cbb1de4f6d7f228637b192
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161202'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Сведения о {% data variables.code-scanning.codeql_workflow %} и скомпилированных языках

Настройте {% data variables.product.prodname_dotcom %}, чтобы использовать {% data variables.product.prodname_code_scanning %} для своего репозитория, добавив в репозиторий рабочий процесс {% data variables.product.prodname_actions %}. Для {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} добавьте {% data variables.code-scanning.codeql_workflow %}. Дополнительные сведения см. в статье [Настройка функции {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/setting-up-code-scanning-for-a-repository).

{% data reusables.code-scanning.edit-workflow %} Общие сведения о настройке {% data variables.product.prodname_code_scanning %} и изменнии файлов рабочего процесса приведены в статье [Настройка функции "{% data variables.product.prodname_code_scanning %}"](/code-security/secure-coding/configuring-code-scanning) и [Общие сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

##  Сведения об автоматической сборке для {% data variables.product.prodname_codeql %}

{% data variables.product.prodname_code_scanning_capc %} выполняет запросы к одной или нескольким базам данных. Каждая база данных содержит представление всего кода на одном языке в репозитории.   
Для скомпилированных языков C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} и Java процесс заполнения этой базы данных включает сборку кода и извлечение данных. {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

Если рабочий процесс использует таблицу `language`, `autobuild` пытается собрать каждый из компилируемых языков, перечисленных в матрице. Если вы не используете таблицу, `autobuild` попытается выполнить сборку на поддерживаемом компилируемом языке с наибольшим числом исходных файлов в репозитории. За исключением Go, анализ других компилируемых языков в репозитории завершится ошибкой, если вы не предоставите команды сборки в явном виде.

{% note %}

{% ifversion ghae %} **Примечание.** {% data reusables.actions.self-hosted-runners-software %} {% else %} **Примечание.** Если для {% data variables.product.prodname_actions %} используются локальные средства выполнения тестов, может потребоваться установить дополнительное программное обеспечение для использования процесса `autobuild`. Кроме того, что если для вашего репозитория требуется определенная версия инструмента сборки, вам может потребоваться сначала установить его вручную. Дополнительные сведения см. в статье [Спецификации для средств выполнения тестов, размещенных на {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

{% endnote %}

### C/C++

| Поддерживаемый тип системы | Имя системы |
|----|----|
| Операционная система | Windows, macOS и Linux |
| Система сборки | Windows: MSbuild и скрипты сборки<br/>Linux и macOS: Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild и скрипты сборки |

Поведение шага `autobuild` зависит от операционной системы, в которой выполняется извлечение. В Windows шаг `autobuild` пытается выполнить автоматическое определение подходящего метода сборки для C/C++ с помощью следующего подхода:

1. Вызов `MSBuild.exe` для файла решения (`.sln`) или проекта (`.vcxproj`), ближайшего к корневому каталогу.
Если `autobuild` обнаруживает несколько файлов решения или проекта с одной и той же (самой короткой) глубиной относительно каталога верхнего уровня, он попытается собрать все из них.
2. Вызов скрипта, который похож на скрипт сборки — _build.bat_, _build.cmd_ и _build.exe_ (в этом порядке).

На Linux и macOS шаг `autobuild` проверяет наличие файлов в репозитории, чтобы определить используемую систему сборки:

1. Поиск системы сборки в корневом каталоге.
2. Если она не будет найдена, выполняется поиск по подкаталогам уникального каталога с системой сборки для C/C++.
3. Выполнение соответствующей команду, чтобы настроить систему. 

### C#

| Поддерживаемый тип системы | Имя системы |
|----|----|
| Операционная система | Windows и Linux |
| Система сборки | .NET и MSbuild, а также скрипты сборки |

Процесс `autobuild` пытается выполнить автоматическое определение подходящего метода сборки для C# с помощью следующего подхода:

1. Вызов `dotnet build` для файла решения (`.sln`) или проекта (`.csproj`), ближайшего к корневому каталогу.
2. Вызов `MSbuild` (Linux) или (Windows) для файла решения (`MSBuild.exe`) или проекта, ближайшего к корневому каталогу.
Если `autobuild` обнаруживает несколько файлов решения или проекта с одной и той же (самой короткой) глубиной относительно каталога верхнего уровня, он попытается собрать все из них.
3. Вызов скрипта, который выглядит как скрипт сборки —_build_ и _build.sh_ (в этом порядке для Linux) или _build.bat_, _build.cmd_ и _build.exe_ (в этом порядке для Windows).

{% ifversion codeql-go-autobuild %}

### Go

| Поддерживаемый тип системы | Имя системы |
|----|----|
| Операционная система | Windows, macOS и Linux |
| Система сборки | Модули `dep` Go и Glide, а также скрипты сборки, включая makefiles и скрипты Ninja |

Процесс `autobuild` пытается автоматически определить подходящий способ установки зависимостей, необходимых репозиторию Go, перед извлечением всех `.go` файлов:

1. Вызовите `make`, `ninja``./build` или `./build.sh` (в таком порядке), пока не будет выполнена одна из этих команд, а следующая `go list ./...` команда также не будет успешно выполнена, указывая на установку необходимых зависимостей.
2. Если ни одна из этих команд не выполнена успешно, найдите `go.mod`или `glide.yaml``Gopkg.toml` и выполните команду `go get` (если не используется поставщик) `dep ensure -v` или`glide install`, соответственно, чтобы попытаться установить зависимости.
3. Наконец, если файлы конфигураций для этих диспетчеров зависимостей не найдены, измените порядок структуры каталогов репозитория, подходящую для добавления в `GOPATH`, и используйте для `go get` установки зависимостей. После завершения извлечения структура каталогов возвращается в нормальное состояние.
4. Извлеките весь код Go в репозитории, аналогично выполнению `go build ./...`.

{% endif %}

### Java

| Поддерживаемый тип системы | Имя системы |
|----|----|
| Операционная система | Windows, macOS и Linux (без ограничений) |
| Система сборки | Gradle, Maven и Ant |

Процесс `autobuild` пытается определить систему сборки для баз кода Java, применяя следующую стратегию:

1. Поиск файла сборки в корневом каталоге. Проверка наличия файлов сборки Gradle, затем Maven, а затем Ant.
2. Запуск первого найденного файла сборки. Если присутствуют файлы и Gradle, и Maven, используется файл Gradle.
3. В противном случае выполняется поиск файлов сборки в непосредственных подкаталогах корневого каталога. Если только один подкаталог содержит файлы сборки, запускается первый файл, определенный в этом подкаталоге (используя тот же приоритет, что и для 1). Если несколько подкаталогов содержат файлы сборки, возникает об ошибка.

## Добавление шагов сборки для компилируемого языка

{% data reusables.code-scanning.autobuild-add-build-steps %} Сведения об изменении файла рабочего процесса можно найти в сттье [Настройка функции "{% data variables.product.prodname_code_scanning %}"](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow).

После удаления шага `autobuild` раскомментируйте запуска `run` и добавьте команды сборки, которые подходят для вашего репозитория. Шаг рабочего процесса `run` используется для запуска программы командной строки с помощью оболочки операционной системы. Вы можете изменить эти команды и добавить дополнительные команды для настройки процесса сборки.

``` yaml
- run: |
    make bootstrap
    make release
```

Дополнительные сведения о ключевом слове `run` см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

Если репозиторий содержит несколько компилируемых языков, можно указать команды сборки для конкретного языка. Например, если репозиторий содержит C/C++, C# и Java и `autobuild` правильно собирает C/C++ и C#, но сборка Java завершается сбоем, можно использовать в рабочем процессе приведенную ниже конфигурацию после шага `init`. В ней указываются шаги сборки для Java, а для C/C++ и C# по-прежнему используется `autobuild`:

```yaml
- if: matrix.language == 'cpp' || matrix.language == 'csharp' 
  name: Autobuild
  uses: {% data reusables.actions.action-codeql-action-autobuild %}

- if: matrix.language == 'java' 
  name: Build Java
  run: |
    make bootstrap
    make release
```

Дополнительные сведения об условном операторе `if` см. в статье [Синтаксис рабочего процесса для GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif).

Дополнительные советы и рекомендации, если `autobuild` не собирает ваш код, см. в статье [Устранение неполадок рабочего процесса {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow).

Если вы добавили шаги сборки вручную для скомпилированных языков, а {% data variables.product.prodname_code_scanning %} по-прежнему не работают в репозитории, обратитесь в {% data variables.contact.contact_support %}.
