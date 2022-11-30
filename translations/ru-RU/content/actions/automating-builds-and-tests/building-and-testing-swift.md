---
title: Создание и тестирование для Swift
intro: Вы можете создать рабочий процесс непрерывной интеграции для сборки и тестирования проекта Swift.
redirect_from:
  - /actions/guides/building-and-testing-swift
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Swift
shortTitle: Build & test Swift
ms.openlocfilehash: 5717f9c7a939d2347ea5a49458002185c3ec07eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408998'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве описано, как создавать и тестировать пакет Swift.

{% ifversion ghae %} Чтобы создать и протестировать проект Swift на платформе {% data variables.product.prodname_ghe_managed %}, требуются необходимые зависимости Swift. Размещенные в {% data reusables.actions.self-hosted-runners-software %} {% else %}{% data variables.product.prodname_dotcom %} средства выполнения тестов имеют кэш инструментов с предварительно установленным программным обеспечением, а средства выполнения тестов Ubuntu и macOS включают в себя зависимости для создания пакетов Swift. Полный список актуальных программ и предварительно установленных версий Swift и Xcode см. в статье [Сведения о средствах выполнения тестов, размещенных в GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software).{% endif %}

## Предварительные требования

Вы уже должны быть знакомы с синтаксисом YAML и его использованием с {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions).

Рекомендуется иметь базовое представление о пакетах Swift. Дополнительные сведения см. в статье [Пакеты Swift](https://developer.apple.com/documentation/swift_packages) документации Apple для разработчиков.

## Использование начального рабочего процесса Swift

{% data variables.product.prodname_dotcom %} предоставляет начальный рабочий процесс Swift, который должен работать для большинства проектов Swift. В этом руководстве приведены примеры настройки начального рабочего процесса. Дополнительные сведения см. в разделе [Начальный рабочий процесс Swift](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml).

Чтобы быстро приступить к работе, добавьте начальный рабочий процесс в каталог `.github/workflows` своего репозитория.

```yaml{:copy}
name: Swift

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

## Указание версии Swift

Чтобы использовать конкретную предварительно установленную версию Swift в размещенном в {% data variables.product.prodname_dotcom %} средстве выполнения тестов, примените действие `fwal/setup-swift`. Это действие находит определенную версию Swift из кэша инструментов в средстве выполнения тестов и добавляет необходимые двоичные файлы в переменную `PATH`. Эти изменения будут сохранены для остальной части задания. Дополнительные сведения см. в описании действия [`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift).

При использовании локального средства выполнения тестов необходимо установить нужные версии Swift и добавить их в `PATH`.

В приведенных ниже примерах показано использование действия `fwal/setup-swift`.

### Использование нескольких версий Swift

Задание можно настроить для использования нескольких версий Swift в матрице.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}


name: Swift

on: [push]

jobs:
  build:
    name: {% raw %}Swift ${{ matrix.swift }} on ${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest]
        swift: ["5.2", "5.3"]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
        with:
          swift-version: {% raw %}${{ matrix.swift }}{% endraw %}
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

### Использование одной определенной версии Swift

Вы можете настроить задание для использования одной конкретной версии Swift, например `5.3.3`.

{% raw %}
```yaml{:copy}
steps:
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Get swift version
    run: swift --version # Swift 5.3.3
```
{% endraw %}

## Создание и тестирование кода

Вы можете использовать те же команды, которые используете в локальной среде для создания и тестирования кода с помощью Swift. В этом примере показано, как использовать `swift build` и `swift test` в задании:

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```
