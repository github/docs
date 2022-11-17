---
title: Создание и тестирование для .NET
intro: Можно создать рабочий процесс непрерывной интеграции (CI) для сборки и тестирования проекта .NET.
redirect_from:
  - /actions/guides/building-and-testing-net
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Build & test .NET
ms.openlocfilehash: eadb00516976159f2efffcaa04cb4b46471c527f
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147063621'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве описано, как создать, протестировать и опубликовать пакет .NET.

{% ifversion ghae %} Чтобы создать и протестировать проект .NET на платформе {% data variables.product.prodname_ghe_managed %}, требуется пакет SDK для .NET Core. {% data reusables.actions.self-hosted-runners-software %} {% else %} Размещенные в {% data variables.product.prodname_dotcom %} средства выполнения имеют кэш инструментов с предварительно установленным программным обеспечением, включающим в себя пакет SDK для .NET Core. Полный список актуального программного обеспечения и предварительно установленных версий пакета SDK для .NET Core см. в разделе [Программное обеспечение, установленное в средствах выполнения, размещенных в {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners).
{% endif %}

## Предварительные требования

Вы уже должны быть знакомы с синтаксисом YAML и его использованием с {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions).

Рекомендуется иметь базовое представление о пакете SDK для .NET Core. Дополнительные сведения см. в разделе [Приступая к работе с .NET](https://dotnet.microsoft.com/learn).

## Использование начального рабочего процесса .NET

{% data variables.product.prodname_dotcom %} предоставляет начальный рабочий процесс .NET, который должен работать для большинства проектов .NET. В этом руководстве приведены примеры настройки начального рабочего процесса. Дополнительные сведения см. в разделе [Начальный рабочий процесс .NET](https://github.com/actions/setup-dotnet).

Чтобы быстро приступить к работе, добавьте начальный рабочий процесс в каталог `.github/workflows` своего репозитория.

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: ['3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup .NET Core SDK {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      - name: Install dependencies
        run: dotnet restore
      - name: Build
        run: dotnet build --configuration Release --no-restore
      - name: Test
        run: dotnet test --no-restore --verbosity normal
```

## Указание версии .NET

Чтобы использовать предустановленную версию пакета SDK для .NET Core в размещенном в {% data variables.product.prodname_dotcom %} средстве выполнения, используйте действие `setup-dotnet`. Это действие находит определенную версию .NET из кэша инструментов в средстве выполнения и добавляет необходимые двоичные файлы в переменную `PATH`. Эти изменения будут сохранены для остальной части задания.

Действие `setup-dotnet` представляет собой рекомендуемый способ использования .NET с {% data variables.product.prodname_actions %}, так как он обеспечивает согласованное поведение в разных средствах выполнения и различных версиях .NET. При использовании локального средства выполнения необходимо установить .NET и добавить его в `PATH`. Дополнительные сведения см. в описании действия [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk).

### Использование нескольких версий .NET

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup dotnet {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      # You can test your matrix by printing the current dotnet version
      - name: Display dotnet version
        run: dotnet --version
```

### Использование определенной версии .NET

Вы можете настроить задание для использования конкретной версии .NET, например `3.1.3`. Кроме того, можно использовать синтаксис семантической версии, чтобы получить последний дополнительный выпуск. В этом примере используется последний дополнительный выпуск .NET 3.

```yaml
    - name: Setup .NET 3.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x'
```

## Установка зависимостей

Для размещенных в {% data variables.product.prodname_dotcom %} средств выполнения установлен диспетчер пакетов NuGet. Вы можете использовать CLI .NET для установки зависимостей из реестра пакетов NuGet перед сборкой и тестированием кода. Например, приведенный ниже код YAML устанавливает пакет `Newtonsoft`.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% ifversion actions-caching %}

### Кэширование зависимостей

Зависимости NuGet можно кэшировать с помощью уникального ключа, что позволяет восстановить зависимости для будущих рабочих процессов посредством действия [`cache`](https://github.com/marketplace/actions/cache). Например, приведенный ниже код YAML устанавливает пакет `Newtonsoft`.

Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/guides/caching-dependencies-to-speed-up-workflows).

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.nuget/packages
    # Look to see if there is a cache hit for the corresponding requirements file
    key: {% raw %}${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}
    restore-keys: |
      ${{ runner.os }}-nuget{% endraw %}
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% note %}

**Примечание**. В зависимости от количества зависимостей может быть быстрее использовать кэш зависимостей. Проекты с большим количеством крупных зависимостей должны выигрывать в производительности из-за сокращения времени скачивания. Проекты с меньшим количеством зависимостей могут не получать значительного выигрыша в производительности, либо производительность может даже немного снижаться из-за того, как NuGet устанавливает кэшированные зависимости. Производительность варьируется от проекта к проекту.

{% endnote %}

{% endif %}

## Создание и тестирование кода

Вы можете использовать те же команды, которые используются для создания и тестирования кода в локальной среде. В этом примере показано, как использовать `dotnet build` и `dotnet test` в задании:

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet restore
- name: Build
  run: dotnet build
- name: Test with the dotnet CLI
  run: dotnet test
```

## Упаковка данных рабочего процесса в виде артефактов

После завершения рабочего процесса можно отправить полученные артефакты для анализа. Например, может потребоваться сохранить файлы журналов, основные дампы, результаты теста или снимки экрана. В следующем примере показано, как использовать действие `upload-artifact` для отправки результатов теста.

Дополнительные сведения см. в разделе [Сохранение данных рабочего процесса с помощью артефактов](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

      steps:
        - uses: {% data reusables.actions.action-checkout %}
        - name: Setup dotnet
          uses: {% data reusables.actions.action-setup-dotnet %}
          with:
            dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        - name: Install dependencies
          run: dotnet restore
        - name: Test with dotnet
          run: dotnet test --logger trx --results-directory {% raw %}"TestResults-${{ matrix.dotnet-version }}"{% endraw %}
        - name: Upload dotnet test results
          uses: {% data reusables.actions.action-upload-artifact %}
          with:
            name: {% raw %}dotnet-results-${{ matrix.dotnet-version }}{% endraw %}
            path: {% raw %}TestResults-${{ matrix.dotnet-version }}{% endraw %}
          # Use always() to always run this step to publish test results when there are test failures
          if: {% raw %}${{ always() }}{% endraw %}
```

## Публикация в реестрах пакетов

Вы можете настроить рабочий процесс для публикации пакета .NET в реестре пакетов после прохождения тестов CI. Вы можете использовать секреты репозитория для хранения любых токенов или учетных данных, необходимых для публикации двоичного файла. В следующем примере пакет создается и публикуется в {% data variables.product.prodname_registry %} с помощью `dotnet core cli`.

```yaml
name: Upload dotnet package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: '3.1.x' # SDK Version to use.
          source-url: https://nuget.pkg.github.com/<owner>/index.json
        env:
          NUGET_AUTH_TOKEN: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
      - run: dotnet build --configuration Release <my project>
      - name: Create the package
        run: dotnet pack --configuration Release <my project>
      - name: Publish the package to GPR
        run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
