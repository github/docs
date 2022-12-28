---
title: Создание и тестирование для Go
intro: Вы можете создать рабочий процесс непрерывной интеграции для сборки и тестирования проекта Go.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Build & test Go
ms.openlocfilehash: 590edc2af0b7f370e52b449f320bdc2a758450bc
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160858'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве описано, как создать, протестировать и опубликовать пакет Go.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Размещенные в {% data variables.product.prodname_dotcom %} средства выполнения имеют кэш инструментов с предварительно установленным программным обеспечением, включающим в себя зависимости для Go. Полный список актуального программного обеспечения и предварительно установленных версий Go см. в разделе [Сведения о программном обеспечении, установленном в средствах выполнения, размещенных в {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software).
{% endif %}

## Предварительные требования

Вы уже должны быть знакомы с синтаксисом YAML и его использованием с {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions).

Рекомендуется иметь базовое представление о пакете SDK для языка Go. Дополнительные сведения см. в разделе [Приступая к работе с Go](https://golang.org/doc/tutorial/getting-started).

## Использование начального рабочего процесса Go

{% data variables.product.prodname_dotcom %} предоставляет начальный рабочий процесс Go, который должен работать для большинства проектов Go. В этом руководстве приведены примеры, которые можно использовать для настройки начального рабочего процесса. Дополнительные сведения см. в статье [Начальный рабочий процесс Go](https://github.com/actions/starter-workflows/blob/main/ci/go.yml).

Чтобы быстро приступить к работе, добавьте начальный рабочий процесс в каталог `.github/workflows` своего репозитория.

```yaml{:copy}
name: Go package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: 1.15

      - name: Build
        run: go build -v ./...

      - name: Test
        run: go test -v ./...
```

## Указание версии Go

Самый простой способ указать версию Go заключается в использовании действия `setup-go`, предоставляемого {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в описании [действия `setup-go`](https://github.com/actions/setup-go/).

Чтобы использовать предустановленную версию Go для средства выполнения, размещенного в {% data variables.product.prodname_dotcom %}, передайте соответствующую версию свойству `go-version` действия `setup-go`. Это действие находит определенную версию Go из кэша инструментов в средстве выполнения и добавляет необходимые двоичные файлы в переменную `PATH`. Эти изменения будут сохранены для остальной части задания.

Действие `setup-go` представляет собой рекомендуемый способ использования Go с {% data variables.product.prodname_actions %}, так как помогает обеспечить согласованное поведение в разных средствах выполнения и различных версиях Go. При использовании локального средства выполнения необходимо установить Go и добавить его в `PATH`.

### Использование нескольких версий Go

```yaml{:copy}
name: Go

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go {% raw %}${{ matrix.go-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      # You can test your matrix by printing the current Go version
      - name: Display Go version
        run: go version
```

### Использование определенной версии Go

Вы можете настроить задание для использования конкретной версии Go, например `1.16.2`. Кроме того, можно использовать синтаксис семантической версии, чтобы получить последний дополнительный выпуск. В этом примере используется последнее исправление Go 1.16:

```yaml{:copy}
      - name: Setup Go 1.16.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.16.x'
```

## Установка зависимостей

Можно использовать для `go get` установки зависимостей:

```yaml{:copy}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: |
          go get .
          go get example.com/octo-examplemodule
          go get example.com/octo-examplemodule@v1.3.4
```

{% ifversion actions-caching %}

### Кэширование зависимостей

Можно кэшировать и восстанавливать зависимости с помощью [действия`setup-go`](https://github.com/actions/setup-go). По умолчанию кэширование отключено, но вы можете задать параметр `cache` равным `true`, чтобы включить его.

Если кэширование включено, действие `setup-go` выполняет поиск файла зависимостей `go.sum` в корневом каталоге репозитория и использует хэш файла зависимостей в составе ключа кэша.

```yaml{:copy}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
          cache: true
```

Кроме того, можно использовать параметр `cache-dependency-path` для случаев использования нескольких файлов зависимостей или их расположения в разных подкаталогах.

```yaml{:copy}
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

Если у вас есть особые требования или вам нужно управлять кэшированием более детально, можно использовать [действие `cache`](https://github.com/marketplace/actions/cache). Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

{% endif %}

## Создание и тестирование кода

Вы можете использовать те же команды, которые используются для создания и тестирования кода в локальной среде. В этом примере рабочего процесса показано, как использовать `go build` и `go test` в задании:

```yaml{:copy}
name: Go
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: go get .
      - name: Build
        run: go build -v ./...
      - name: Test with the Go CLI
        run: go test
```

## Упаковка данных рабочего процесса в виде артефактов

После завершения рабочего процесса можно отправить полученные артефакты для анализа. Например, может потребоваться сохранить файлы журналов, основные дампы, результаты теста или снимки экрана. В следующем примере показано, как использовать действие `upload-artifact` для отправки результатов теста.

Дополнительные сведения см. в разделе [Хранение данных рабочего процесса в качестве артефактов](/actions/using-workflows/storing-workflow-data-as-artifacts).

```yaml{:copy}
name: Upload Go test results

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      - name: Install dependencies
        run: go get .
      - name: Test with Go
        run: go test -json > TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
      - name: Upload Go test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Go-results-{% raw %}${{ matrix.go-version }}{% endraw %}
          path: TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
```
