---
title: Настройка обновлений зависимостей
intro: 'Вы можете определить, как {% data variables.product.prodname_dependabot %} поддерживает ваши зависимости.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/customizing-dependency-updates
  - /code-security/supply-chain-security/customizing-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/customizing-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
  - Vulnerabilities
shortTitle: Customize updates
ms.openlocfilehash: 99a3869313598733493d21f8b15d46db98b1a53c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107744'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Сведения о настройке обновлений зависимостей

После включения обновлений версий можно настроить способ поддержки зависимостей {% data variables.product.prodname_dependabot %}, добавив дополнительные параметры в файл *dependabot.yml*. Например, можно сделать следующее:

- Указать, в какой день недели следует открывать запросы на вытягивание для обновлений версий: `schedule.day`.
- Указать рецензентов, уполномоченных и метки для каждого диспетчера пакетов: `reviewers`, `assignees` и `labels`.
- Определить стратегию управления версиями для изменений в каждом файле манифеста: `versioning-strategy`.
- Изменить максимальное количество открытых запросов на вытягивание для обновлений версий со значения по умолчанию (5) на другое значение: `open-pull-requests-limit`.
- Открыть запросы на вытягивание для обновлений версий, чтобы выбрать конкретную ветвь вместо ветви по умолчанию: `target-branch`.

Дополнительные сведения о параметрах конфигурации см. в разделе [Параметры конфигурации для файла dependabot.yml](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates).

При обновлении файла *dependabot.yml* в репозитории {% data variables.product.prodname_dependabot %} выполняет немедленную проверку с новой конфигурацией. В течение нескольких минут вы увидите обновленный список зависимостей на вкладке **{% data variables.product.prodname_dependabot %}** . Если в репозитории большое число зависимостей, время ожидания может быть увеличено. Вы также можете просмотреть новые запросы на вытягивание для обновлений версий. Дополнительные сведения см. в разделе [Перечисление зависимостей, настроенных для обновлений версий](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates).

## Влияние изменений конфигурации на обновления системы безопасности

При модификации файла *dependabot.yml* вы можете заметить некоторые изменения в запросах на вытягивание, созданных для обновлений системы безопасности. Эти запросы на вытягивание всегда активируются советом по безопасности для зависимости, а не расписанием {% data variables.product.prodname_dependabot %}. Однако они наследуют соответствующие параметры конфигурации из файла *dependabot.yml*, если для обновлений версий не указана другая целевая ветвь.

Пример см. в разделе [Настройка пользовательских меток](#setting-custom-labels) ниже.

## Изменение расписания

При установке расписания обновления `daily` {% data variables.product.prodname_dependabot %} по умолчанию проверяет наличие новых версий в 05:00 (UTC). С помощью `schedule.time` можно указать альтернативное время суток для проверки наличия обновлений (формат: `hh:mm`).

В приведенном ниже примере файла *dependabot.yml* конфигурация npm расширяется, чтобы указать, когда {% data variables.product.prodname_dependabot %} должен проверять наличие обновлений версий для зависимостей.

```yaml
# dependabot.yml file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry for updates at 2am UTC
    schedule:
      interval: "daily"
      time: "02:00"
```

## Настройка рецензентов и уполномоченных

По умолчанию {% data variables.product.prodname_dependabot %} создает запросы на вытягивание без рецензентов и уполномоченных.

Вы можете использовать `reviewers` и `assignees`, чтобы указать рецензентов и уполномоченных для всех запросов на вытягивание, созданных для диспетчера пакетов. При указании команды необходимо использовать полное имя команды, как для команды @mentioning (включая организацию).

Приведенный ниже пример файла *dependabot.yml* изменяет конфигурацию npm, чтобы все запросы на вытягивание, открытые с помощью обновлений версии и системы безопасности для npm, имели двух рецензентов и одного уполномоченного.

```yaml
# dependabot.yml file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with an assignee
    assignees:
      - "user-name"
```

## Настройка пользовательских меток

{% data reusables.dependabot.default-labels %}

Чтобы переопределить метки по умолчанию и указать альтернативные метки для всех запросов на вытягивание, созданных для диспетчера пакетов, можно использовать `labels`. Вы не можете создавать метки в файле *dependabot.yml*, поэтому альтернативные метки уже должны существовать в репозитории.

Приведенный ниже пример файла *dependabot.yml* изменяет конфигурацию npm,так чтобы все запросы на вытягивание, открытые с помощью обновлений версии и системы безопасности для npm, имели пользовательские метки. Он также изменяет конфигурацию Docker, чтобы проверить наличие обновлений версий в пользовательской ветви и создать запросы на вытягивание с пользовательскими метками для этой пользовательской ветви. Изменения в Docker не повлияют на запросы на вытягивание для обновлений системы безопасности, так как обновления системы безопасности всегда выполняются в ветви по умолчанию.

{% note %}

**Примечание.** Новая ветвь `target-branch` должна содержать Dockerfile для обновления, в противном случае это изменение приведет к отключению обновлений версий для Docker.

{% endnote %}

```yaml
# dependabot.yml file with
# customized npm configuration

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"

    # Keep Docker dependencies up to date
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise pull requests for Docker version updates
    # against the "develop" branch. The Docker configuration
    # no longer affects security update pull requests.
    target-branch: "develop"
    # Use custom labels on pull requests for Docker version updates
    labels:
      - "Docker dependencies"
      - "triage-board"
```

## Дополнительные примеры

Дополнительные примеры см. в разделе [Параметры конфигурации для файла dependabot.yml](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates).
