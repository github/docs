---
title: Параметры конфигурации для файла dependabot.yml
intro: 'Подробные сведения обо всех параметрах, которые можно использовать для настройки того, как {% data variables.product.prodname_dependabot %} обслуживает репозитории:'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure dependabot.yml
ms.openlocfilehash: 3ec6cddf63b2e2d238baf96ea7d437fcb3c21d3a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147692000'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Сведения о файле *dependabot.yml*

В файле конфигурации {% data variables.product.prodname_dependabot %} *dependabot.yml* используется синтаксис YAML. Если вы не знакомы с YAML и хотите узнать о нем подробнее, см. раздел [Освойте YAML за 5 минут](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes).

Этот файл необходимо сохранить в каталоге `.github` вашего репозитория. Когда вы добавляете или обновляете файл *dependabot.yml*, запускается немедленная проверка наличия обновлений версии. Дополнительные сведения и пример см. в разделе [Настройка обновлений версий {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-dependabot-version-updates).

Любые параметры, которые также влияют на обновления системы безопасности, используются в следующий раз, когда предупреждение системы безопасности активирует запрос на вытягивание обновления системы безопасности.  Дополнительные сведения см. в разделе [Настройка обновлений версий {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates).

Файл *dependabot.yml* содержит два обязательных ключа верхнего уровня: `version` и `updates`. При необходимости вы можете включить ключ верхнего уровня `registries` {% ifversion ghes = 3.5 %} и (или) ключ `enable-beta-ecosystems`{% endif %}. Файл должен начинаться с `version: 2`.

## Параметры конфигурации для файла *dependabot.yml*

Ключ верхнего уровня `updates` является обязательным. Он используется для настройки того, как {% data variables.product.prodname_dependabot %} обновляет версии или зависимости проекта. Каждая запись настраивает параметры обновления для определенного диспетчера пакетов. Вы можете использовать следующие параметры.

{% data reusables.dependabot.configuration-options %}

Эти параметры в целом относятся к следующим категориям.

- Основные параметры настройки, которые необходимо включать во все конфигурации: [`package-ecosystem`](#package-ecosystem), [`directory`](#directory), [`schedule.interval`](#scheduleinterval).
- Параметры для настройки расписания обновлений: [`schedule.time`](#scheduletime), [`schedule.timezone`](#scheduletimezone), [`schedule.day`](#scheduleday).
- Параметры для управления обновлениями зависимостей: [`allow`](#allow), [`ignore`](#ignore), [`vendor`](#vendor).
- Параметры для добавления метаданных в запросы на вытягивание: [`reviewers`](#reviewers), [`assignees`](#assignees), [`labels`](#labels), [`milestone`](#milestone).
- Параметры для изменения поведения запросов на вытягивание: [`target-branch`](#target-branch), [`versioning-strategy`](#versioning-strategy), [`commit-message`](#commit-message), [`rebase-strategy`](#rebase-strategy), [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator).

Кроме того, параметр [`open-pull-requests-limit`](#open-pull-requests-limit) изменяет максимальное количество запросов на вытягивание для обновлений версии, которое может открыть {% data variables.product.prodname_dependabot %}.

{% note %}

**Примечание.** Некоторые из этих параметров конфигурации также могут влиять на запросы на вытягивание, инициированные для обновлений системы безопасности уязвимых манифестов пакетов.

Обновления системы безопасности создаются для уязвимых манифестов пакетов только в ветви по умолчанию. Если параметры конфигурации заданы для одной и той же ветви (true, если вы не используете `target-branch`) и указывают `package-ecosystem` и `directory` для уязвимого манифеста, запросы на вытягивание для обновлений системы безопасности используют соответствующие параметры.

Как правило, обновления системы безопасности используют любые параметры конфигурации, влияющие на запросы на вытягивание, такие как добавление метаданных или изменение их поведения. Дополнительные сведения об обновлениях системы безопасности см. в разделе [Настройка {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates).

{% endnote %}

### `package-ecosystem`

**Обязательно**. Вы добавляете по одному элементу `package-ecosystem` для каждого диспетчера пакетов, для которого вам нужно, чтобы {% data variables.product.prodname_dependabot %} отслеживал выход новых версий. The repository must also contain a dependency manifest or lock file each of these package managers. Если вы хотите включить вендоринг для диспетчера пакетов, который его поддерживает, вендоринговые зависимости должны находиться в требуемом каталоге. Дополнительные сведения см. в описании параметра [`vendor`](#vendor) ниже.

{% data reusables.dependabot.supported-package-managers %}

```yaml
# Basic set up for three package managers

version: 2
updates:

  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for Composer
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
```

### `directory`

**Обязательно**. Вы должны определить расположение манифестов пакетов для каждого диспетчера пакетов (например, *package.json* или *Gemfile*). Каталог следует определять относительно корня репозитория для всех экосистем, кроме GitHub Actions. Для GitHub Actions задайте в качестве каталога `/` для проверки файлов рабочего процесса в `.github/workflows`.

```yaml
# Specify location of manifest files for each package manager

version: 2
updates:
  - package-ecosystem: "composer"
    # Files stored in repository root
    directory: "/"
    schedule:
      interval: "daily"

  - package-ecosystem: "npm"
    # Files stored in `app` directory
    directory: "/app"
    schedule:
      interval: "daily"

  - package-ecosystem: "github-actions"
    # Workflow files stored in the
    # default location of `.github/workflows`
    directory: "/"
    schedule:
      interval: "daily"
```

### `schedule.interval`

**Обязательно**. Вы должны определить, с какой частотой следует проверять наличие новых версий для каждого диспетчера пакетов. По умолчанию {% data variables.product.prodname_dependabot %} произвольно назначает время применения всех обновлений в файле конфигурации. Чтобы задать определенное время, можно использовать параметры [`schedule.time`](#scheduletime) и [`schedule.timezone`](#scheduletimezone).

- `daily` — выполняется в каждый будний день, с понедельника по пятницу.
- `weekly` — выполняется раз в неделю. По умолчанию это происходит в понедельник. Чтобы изменить день, используйте параметр [`schedule.day`](#scheduleday).
- `monthly` — выполняется раз в месяц. Это происходит в первый день месяца.

```yaml
# Set update schedule for each package manager

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every weekday
      interval: "daily"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      # Check for updates managed by Composer once a week
      interval: "weekly"
```

{% note %}

**Примечание**. Параметр `schedule` определяет, когда {% data variables.product.prodname_dependabot %} пытается применить новое обновление. Однако это не единственный случай, когда вы можете получать запросы на вытягивание. Обновления могут запускаться на основе изменений в файле `dependabot.yml`, изменений в файлах манифеста после сбоя обновления или {% data variables.product.prodname_dependabot_security_updates %}. Дополнительные сведения см. в разделах [Частота запросов на вытягивание {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates#frequency-of-dependabot-pull-requests) и [Сведения об {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates).

{% endnote %}

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Используйте параметр `allow`, чтобы указать, какие зависимости подлежат обновлению. Это относится как к обновлениям версии, так и к обновлениям системы безопасности. Можно использовать следующие параметры.

- `dependency-name` — позволяет разрешить обновления для зависимостей с соответствующими именами. При необходимости можно использовать `*` для сопоставления нуля или более символов. Для зависимостей Java атрибут `dependency-name` имеет формат `groupId:artifactId`, например: `org.kohsuke:github-api`.
- `dependency-type` — позволяет разрешить обновления для зависимостей определенных типов.

  | Типы зависимостей | Поддерживаемые диспетчерами пакетов | Разрешение обновлений |
  |------------------|-------------------------------|--------|
  | `direct` | Все | Все явно определенные зависимости. |
  | `indirect` | `bundler`, `pip`, `composer`, `cargo` | Зависимости прямых зависимостей (также называемые подзависимостями или временными зависимостями).|
  | `all` | Все | Все явно определенные зависимости. Для `bundler`, `pip`, `composer`, `cargo` также зависимости прямых зависимостей.|
  | `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Только зависимости в рабочей группе зависимостей. |
  | `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Только зависимости в группе зависимостей разработки. |

```yaml
# Use `allow` to specify which dependencies to maintain

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow updates for Lodash
      - dependency-name: "lodash"
      # Allow updates for React and any packages starting "react"
      - dependency-name: "react*"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow both direct and indirect updates for all packages
      - dependency-type: "all"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow only direct updates for
      # Django and any packages starting "django"
      - dependency-name: "django*"
        dependency-type: "direct"
      # Allow only production updates for Sphinx
      - dependency-name: "sphinx"
        dependency-type: "production"
```

### `assignees`

Используйте параметр `assignees`, чтобы указать отдельных уполномоченных для всех запросов на вытягивание, вызванных для диспетчера пакетов.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify assignees for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Add assignees
    assignees:
      - "octocat"
```

### `commit-message`

По умолчанию {% data variables.product.prodname_dependabot %} пытается обнаружить ваши настройки сообщений фиксации и использовать аналогичные шаблоны. Чтобы явно указать настройки, используйте параметр `commit-message`.

Поддерживаемые варианты

{% note %}

**Примечание.** Параметры `prefix` и `prefix-development` имеют ограничение в 15 символов.

{% endnote %}

- `prefix` задает префикс для всех сообщений фиксации.
- `prefix-development` задает отдельный префикс для всех сообщений фиксации, обновляющих зависимости в группе зависимостей разработки. Если вы указываете значение для этого параметра, `prefix` используется только для обновлений зависимостей в рабочей группе зависимостей. Эта функция поддерживается диспетчерами пакетов `bundler`, `composer`, `mix`, `maven`, `npm` и `pip`.
- `include: "scope"` указывает, что за любым префиксом следует список зависимостей, обновленных в фиксации.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customize commit messages

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    commit-message:
      # Prefix all commit messages with "npm"
      prefix: "npm"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Prefix all commit messages with "Composer"
    # include a list of updated dependencies
    commit-message:
      prefix: "Composer"
      include: "scope"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Include a list of updated dependencies
    # with a prefix determined by the dependency group
    commit-message:
      prefix: "pip prod"
      prefix-development: "pip dev"
      include: "scope"
```
Если вы используете ту же конфигурацию, что и в примере выше, поднятие библиотеки `requests` в группе зависимостей разработки `pip` приведет к созданию сообщения о фиксации:

   `pip dev: bump requests from 1.0.0 to 1.0.1`
   
### `ignore`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Зависимости можно пропускать, либо добавляя их в `ignore`, либо используя команду `@dependabot ignore` в запросах на вытягивание, открытых {% data variables.product.prodname_dependabot %}.

#### Создание условий `ignore` из `@dependabot ignore`

Зависимости, пропуск которых задан с помощью команды `@dependabot ignore`, хранятся централизованно для каждого диспетчера пакетов. Если вы запускаете пропуск зависимостей в файле `dependabot.yml`, эти существующие настройки учитываются в конфигурации вместе с зависимостями `ignore`.

Чтобы проверить, есть ли в репозитории сохраненные настройки `ignore`, выполните поиск `"@dependabot ignore" in:comments` в репозитории. Если вы хотите отменить пропуск зависимости, заданный таким образом, повторно откройте запрос на вытягивание.

Дополнительные сведения о командах `@dependabot ignore` см. в разделе [Управление запросами на вытягивание для обновлений зависимостей](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands).

#### Указание пропускаемых зависимостей и версий

Вы можете использовать параметр `ignore`, чтобы указать, какие зависимости подлежат обновлению. Параметр `ignore` поддерживает следующие параметры.

- `dependency-name` — позволяет пропускать обновления для зависимостей с соответствующими именами. При необходимости можно использовать `*` для сопоставления нуля или более символов. Для зависимостей Java атрибут `dependency-name` имеет формат `groupId:artifactId` (например: `org.kohsuke:github-api`). {% ifversion dependabot-grouped-dependencies %} Чтобы запретить {% data variables.product.prodname_dependabot %} автоматическое обновление определений типов TypeScript из DefinitelyTyped, используйте `@types/*`.{% endif %}
- `versions` — позволяет пропускать определенные версии или диапазоны версий. Если вы хотите определить диапазон, используйте стандартный шаблон для диспетчера пакетов (например, `^1.0.0` для npm или `~> 2.0` для Bundler).
- `update-types` — позволяет пропускать определенные типы обновлений, таких как обновления `major`, `minor` или `patch` SemVer для обновлений версий (например, при указании `version-update:semver-patch` будут пропускаться обновления исправлений). Вы можете сочетать этот параметр с `dependency-name: "*"`, чтобы пропускать определенные `update-types` для всех зависимостей. В настоящее время поддерживаются только варианты `version-update:semver-major`, `version-update:semver-minor`и `version-update:semver-patch`. Этот параметр не влияет на обновления системы безопасности.

Если `versions` и `update-types` используются вместе, {% data variables.product.prodname_dependabot %} будет пропускать все обновления в любом наборе.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Use `ignore` to specify dependencies that should not be updated

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "express"
        # For Express, ignore all updates for version 4 and 5
        versions: ["4.x", "5.x"]
        # For Lodash, ignore all updates
      - dependency-name: "lodash"
        # For AWS SDK, ignore all patch updates
      - dependency-name: "aws-sdk"
        update-types: ["version-update:semver-patch"]
```

{% note %}

**Примечание**. {% data variables.product.prodname_dependabot %} может выполнять обновления версий в файлах манифеста или блокировки, только если может получить доступ ко всем зависимостям в файле, даже если вы добавите недоступные зависимости в параметр `ignore` файла конфигурации. Дополнительные сведения см. в разделах [Управление параметрами безопасности и анализа для организации](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files) и [Устранение ошибок {% data variables.product.prodname_dependabot %}](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies).


{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% note %}

**Примечание.** Для экосистемы `pub` {% data variables.product.prodname_dependabot %} не будет выполнять обновление, когда версия, которую он пытается обновить, пропускается, даже если доступна более ранняя версия.

{% endnote %}

{% endif %}

### `insecure-external-code-execution`

Диспетчеры пакетов с параметром `package-ecosystem`, имеющим значение `bundler`, `mix` или `pip`, могут выполнять внешний код в манифесте одновременно с процессом обновления версии. Это может предоставить взломанному пакету возможность кражи учетных данных или получения доступа к настроенным реестрам. При добавлении параметра [`registries`](#registries) в конфигурацию `updates` {% data variables.product.prodname_dependabot %} автоматически запрещает выполнение внешнего кода. В этом случае обновление версии может завершиться неудачно. Вы можете переопределить это поведение и разрешить выполнение внешнего кода для диспетчеров пакетов `bundler`, `mix` и `pip`, задав `allow` для параметра `insecure-external-code-execution`.

Вы можете явно запретить выполнение внешнего кода независимо от того, существует ли параметр `registries` для этой конфигурации обновления, задав `deny` для параметра `insecure-external-code-execution`.

{% raw %}
```yaml
# Allow external code execution when updating dependencies from private registries

version: 2
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
updates:
  - package-ecosystem: "bundler"
    directory: "/rubygems-server"
    insecure-external-code-execution: allow
    registries: "*"
    schedule:
      interval: "monthly"
```
{% endraw %}

### `labels`

{% data reusables.dependabot.default-labels %}

Используйте параметр `labels`, чтобы переопределить метки по умолчанию и указать альтернативные метки для всех запросов на вытягивание, созданных для диспетчера пакетов. Если какая-либо из этих меток не определена в репозитории, она пропускается.
Чтобы отключить все метки, в том числе метки по умолчанию, используйте `labels: [ ]`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify labels for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Specify labels for npm pull requests
    labels:
      - "npm"
      - "dependencies"
```

### `milestone`

С помощью `milestone` вы можете связывать с вехой все запросы на вытягивание, инициированные для диспетчера пакетов. При этом следует указывать числовой идентификатор вехи, а не ее метку. Если вы посмотрите на веху, ее идентификатором является последняя часть URL-адреса страницы, после `milestone`. Например: `https://github.com/<org>/<repo>/milestone/3`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a milestone for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Associate pull requests with milestone "4"
    milestone: 4
```

### `open-pull-requests-limit`

По умолчанию {% data variables.product.prodname_dependabot %} открывает не более пяти запросов на вытягивание для обновлений версии. После создания пяти открытых запросов на вытягивание из {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_dependabot %} не будет открывать новые запросы, пока некоторые из этих открытых запросов не будут объединены или закрыты. Вы можете изменить это ограничение с помощью параметра `open-pull-requests-limit`. Он также позволяет временно отключить обновления версий для диспетчера пакетов.

Этот параметр не влияет на обновления системы безопасности, для которых установлено отдельное внутреннее ограничение в десять открытых запросов на вытягивание.

```yaml
# Specify the number of open pull requests allowed

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Allow up to 10 open pull requests for pip dependencies
    open-pull-requests-limit: 10
```

### `pull-request-branch-name.separator`

{% data variables.product.prodname_dependabot %} создает ветвь для каждого запроса на вытягивание. Каждое имя ветви включает в себя `dependabot`, а также диспетчер пакетов и зависимость, которые обновляются. По умолчанию эти части разделяются символом `/`, например: `dependabot/npm_and_yarn/next_js/acorn-6.4.1`.

Вы можете задать другой разделитель с помощью `pull-request-branch-name.separator`. Можно выбрать `"-"`, `_` или `/`. Символ дефиса должен быть заключен в кавычки, так как в противном случае он интерпретируется как запуск пустого списка YAML.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a different separator for branch names

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    pull-request-branch-name:
      # Separate sections of the branch name with a hyphen
      # for example, `dependabot-npm_and_yarn-next_js-acorn-6.4.1`
      separator: "-"
```

### `rebase-strategy`

По умолчанию {% data variables.product.prodname_dependabot %} автоматически перемещает открытые запросы на вытягивание из одной ветви в другую при обнаружении изменений в запросе на вытягивание. Это поведение можно отключить с помощью параметра `rebase-strategy`.

Возможные значения для параметра стратегии перемещения изменений из одной ветви в другую

- `disabled`, чтобы отключить автоматическое перемещение изменений из одной ветви в другую.
- `auto`, чтобы использовать поведение по умолчанию и перемещать открытые запросы на вытягивание из одной ветви в другую при обнаружении изменений.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Disable automatic rebasing

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable rebasing for npm pull requests
    rebase-strategy: "disabled"
```

### `registries`

Чтобы разрешить {% data variables.product.prodname_dependabot %} доступ к частному реестру пакетов при обновлении версии, необходимо включить параметр `registries` в соответствующую конфигурацию `updates`. Вы можете разрешить использование всех определенных реестров, задав `"*"` для `registries`. Кроме того, вы можете перечислить реестры, которые может использовать обновление. Для этого используйте имя реестра, определенное в разделе `registries` верхнего уровня файла _dependabot.yml_. Дополнительные сведения см. в разделе [Параметры конфигурации для частных реестров](#configuration-options-for-private-registries) ниже.

Чтобы {% data variables.product.prodname_dependabot %} мог использовать диспетчеры пакетов `bundler`, `mix` и `pip` для обновления зависимостей в частных реестрах, можно разрешить выполнение внешнего кода. Дополнительные сведения см. в разделе [`insecure-external-code-execution`](#insecure-external-code-execution) выше.

```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries
# when updating dependency versions for this ecosystem

{% raw %}
version: 2
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}
updates:
  - package-ecosystem: "gitsubmodule"
    directory: "/"
    registries:
      - maven-github
    schedule:
      interval: "monthly"
{% endraw %}
```

### `reviewers`

Используйте параметр `reviewers`, чтобы указать отдельных рецензентов или команд рецензентов для всех запросов на вытягивание, вызванных для диспетчера пакетов. Необходимо использовать полное имя команды, включая организацию, как если бы вы упоминали (@mentioning) эту команду.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify reviewers for pull requests

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Add reviewers
    reviewers:
      - "octocat"
      - "my-username"
      - "my-org/python-team"
```

### `schedule.day`

При установке расписания обновления `weekly` {% data variables.product.prodname_dependabot %} по умолчанию проверяет наличие новых версий в понедельник в произвольно установленное время для репозитория. Чтобы указать другой день проверки наличия обновлений, используйте параметр `schedule.day`.

Поддерживаемые значения

- `monday`
- `tuesday`
- `wednesday`
- `thursday`
- `friday`
- `saturday`
- `sunday`

```yaml
# Specify the day for weekly checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
```

### `schedule.time`

По умолчанию {% data variables.product.prodname_dependabot %} проверяет наличие новых версий в произвольно установленное время для репозитория. С помощью `schedule.time` можно указать другое время суток для проверки наличия обновлений (в формате `hh:mm`).

```yaml
# Set a time for checks
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      # Check for npm updates at 9am UTC
      time: "09:00"
```

### `schedule.timezone`

По умолчанию {% data variables.product.prodname_dependabot %} проверяет наличие новых версий в произвольно установленное время для репозитория. С помощью `schedule.timezone` можно указать другой часовой пояс. Идентификатор часового пояса должен быть из базы данных часовых поясов, поддерживаемой [iana](https://www.iana.org/time-zones). Дополнительные сведения см. в разделе [Список часовых поясов базы данных tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```yaml
# Specify the timezone for checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      # Use Japan Standard Time (UTC +09:00)
      timezone: "Asia/Tokyo"
```

### `target-branch`

По умолчанию {% data variables.product.prodname_dependabot %} проверяет наличие файлов манифеста в ветви по умолчанию и инициирует запросы на вытягивание обновлений версий для этой ветви. Параметр `target-branch` используется для указания другой ветви для файлов манифеста и запросов на вытягивание. Если вы используете этот параметр, то параметры для этого диспетчера пакетов больше не будут влиять ни на какие запросы на вытягивание, инициированные для обновлений системы безопасности.

```yaml
# Specify a non-default branch for pull requests for pip

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise pull requests for version updates
    # to pip against the `develop` branch
    target-branch: "develop"
    # Labels on pull requests for version updates only
    labels:
      - "pip dependencies"

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
    # Labels on pull requests for security and version updates
    labels:
      - "npm dependencies"
```

### `vendor`

С помощью параметра `vendor` можно указать {% data variables.product.prodname_dependabot %} выполнять вендоринг зависимостей при их обновлении. Не используйте этот параметр, если вы используете `gomod`, так как {% data variables.product.prodname_dependabot %} автоматически обнаруживает вендоринг для этого инструмента.

```yaml
# Configure version updates for both dependencies defined in manifests and vendored dependencies

version: 2
updates:
  - package-ecosystem: "bundler"
    # Raise pull requests to update vendored dependencies that are checked in to the repository
    vendor: true
    directory: "/"
    schedule:
      interval: "weekly"
```

{% data variables.product.prodname_dependabot %} обновляет только вендоринговые зависимости, расположенные в определенных каталогах в репозитории.

| Диспетчер пакетов | Требуемый путь к файлу для вендоринговых зависимостей | Дополнительные сведения |
  |------------------|-------------------------------|--------|
  | `bundler` | Зависимости должны находиться в каталоге _vendor/cache_.</br>Остальные пути не поддерживаются. | [Документация по `bundle cache`](https://bundler.io/man/bundle-cache.1.html) |
  | `gomod` | Нет требований к пути (зависимости обычно находятся в каталоге _vendor_) | [Документация по `go mod vendor`](https://golang.org/ref/mod#go-mod-vendor) |


### `versioning-strategy`

Когда {% data variables.product.prodname_dependabot %} изменяет файл манифеста для обновления версии, он использует следующие общие стратегии.

- Для приложений повышаются требования к версии, например, npm, pip и Composer.
- Для библиотек расширяется диапазон версий, например, Bundler и Cargo.

С помощью параметра `versioning-strategy` можно изменить это поведение для поддерживаемых диспетчеров пакетов.

{% data reusables.dependabot.option-affects-security-updates %}

Возможные стратегии обновления

| Параметр | Поддерживаются | Действие |
|--------|--------------|--------|
| `lockfile-only` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Создавать запросы на вытягивание только для обновления файлов блокировки. Пропускать все новые версий, для которых требуются изменения манифеста пакета. |
| `auto` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Следовать описанной выше стратегии по умолчанию.|
| `widen`| `composer`, `npm` | Ослабить требование к версии, чтобы при возможности включать как новую, так и старую версию. |
| `increase`| `bundler`, `composer`, `npm` | Всегда повышать требование к версии для соответствия новой версии. |
| `increase-if-necessary` | `bundler`, `composer`, `npm` | Повышать требование к версии только в том случае, если это требуется новой версией. |

```yaml
# Customize the manifest version strategy

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Update the npm manifest file to relax
    # the version requirements
    versioning-strategy: widen

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Increase the version requirements for Composer
    # only when required
    versioning-strategy: increase-if-necessary

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Only allow updates to the lockfile for pip and
    # ignore any version updates that affect the manifest
    versioning-strategy: lockfile-only
```

## Параметры конфигурации для частных реестров

Ключ верхнего уровня `registries` является необязательным. Он позволяет указать сведения о проверке подлинности, которые {% data variables.product.prodname_dependabot %} может использовать для доступа к частным реестрам пакетов.

{% note %}

**Примечание.** Частные реестры за брандмауэрами в частных сетях не поддерживаются.

{% endnote %}

Значение ключа `registries` является ассоциативным массивом, каждый элемент которого состоит из ключа, определяющего конкретный реестр, и значения, являющегося ассоциативным массивом, которое указывает параметры, необходимые для доступа к реестру. Следующий файл *dependabot.yml* настраивает реестр, определенный как `dockerhub` в разделе `registries` файла, а затем ссылается на этот файл в разделе `updates` файла.

{% raw %}
```yaml
# Minimal settings to update dependencies in one private registry

version: 2
registries:
  dockerhub: # Define access for a private registry
    type: docker-registry
    url: registry.hub.docker.com
    username: octocat
    password: ${{secrets.DOCKERHUB_PASSWORD}}
updates:
  - package-ecosystem: "docker"
    directory: "/docker-registry/dockerhub"
    registries:
      - dockerhub # Allow version updates for dependencies in this registry
    schedule:
      interval: "monthly"
```
{% endraw %}

Для указания параметров доступа используются следующие параметры. Параметры реестра должны содержать `type` и `url`, а также, как правило, либо сочетание `username` и `password`, либо `token`.

| Параметр&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Описание |
|:---|:---|
| `type`                     | Определяет тип реестра. Полный список типов см. ниже. |
| `url`                      | URL-адрес, используемый для доступа к зависимостям в этом реестре. Протокол указывать необязательно. Если этот параметр не задан, для него предполагается значение `https://`. {% data variables.product.prodname_dependabot %} добавляет или пропускает конечные косые черты по мере необходимости. |
| `username`                 | Имя пользователя, которое {% data variables.product.prodname_dependabot %} использует для доступа к реестру. |
| `password`                 | Ссылка на секрет {% data variables.product.prodname_dependabot %}, содержащий пароль для указанного пользователя. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot). |
| `key`                    | Ссылка на секрет {% data variables.product.prodname_dependabot %}, содержащий ключ доступа для этого реестра. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot). |
| `token`                    | Ссылка на секрет {% data variables.product.prodname_dependabot %}, содержащий маркер доступа для этого реестра. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot). |
| `replaces-base`            | Для реестров с параметром `type: python-index` при логическом значении `true` pip разрешает зависимости, используя указанный URL-адрес, а не базовый URL-адрес индекса пакета Python (по умолчанию `https://pypi.org/simple`). |


Каждая конфигурация `type` требует предоставления определенных параметров. Некоторые типы позволяют подключаться несколькими способами. В следующих разделах приведены сведения о параметрах, которые следует использовать для каждой конфигурации `type`.

### `composer-repository`

Тип `composer-repository` поддерживает имя пользователя и пароль.

{% raw %}
```yaml
registries:
  composer:
    type: composer-repository
    url: https://repo.packagist.com/example-company/
    username: octocat
    password: ${{secrets.MY_PACKAGIST_PASSWORD}}
```
{% endraw %}

### `docker-registry`

{% note %}

**Примечание.** Мы не поддерживаем Реестр контейнеров Azure (ACR).

{% endnote %}

Тип `docker-registry` поддерживает имя пользователя и пароль.

{% raw %}
```yaml
registries:
  dockerhub:
    type: docker-registry
    url: https://registry.hub.docker.com
    username: octocat
    password: ${{secrets.MY_DOCKERHUB_PASSWORD}}
```
{% endraw %}

Тип `docker-registry` также можно использовать для вытягивания из Amazon ECR с использованием статических учетных данных AWS.

{% raw %}
```yaml
registries:
  ecr-docker:
    type: docker-registry
    url: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
    username: ${{secrets.ECR_AWS_ACCESS_KEY_ID}}
    password: ${{secrets.ECR_AWS_SECRET_ACCESS_KEY}}
```
{% endraw %}

### `git`

Тип `git` поддерживает имя пользователя и пароль.

{% raw %}
```yaml
registries:
  github-octocat:
    type: git
    url: https://github.com
    username: x-access-token
    password: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `hex-organization`

Тип `hex-organization` поддерживает организацию и ключ.

{% raw %}
```yaml
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
```
{% endraw %}

### `maven-repository`

Тип `maven-repository` поддерживает имя пользователя и пароль.

{% raw %}
```yaml
registries:
  maven-artifactory:
    type: maven-repository
    url: https://artifactory.example.com
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

### `npm-registry`

Тип `npm-registry` поддерживает имя пользователя и пароль или маркер безопасности.

При использовании имени пользователя и пароля `.npmrc`маркер безопасности может содержать `_password` в кодировке `base64`. Однако пароль, на который есть ссылки в файле конфигурации {% data variables.product.prodname_dependabot %}, должен быть исходным (незашифрованным) паролем.

{% raw %}
```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}  # Must be an unencoded password
```
{% endraw %}

{% raw %}
```yaml
registries:
  npm-github:
    type: npm-registry
    url: https://npm.pkg.github.com
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `nuget-feed`

Тип `nuget-feed` поддерживает имя пользователя и пароль или маркер безопасности.

{% raw %}
```yaml
registries:
  nuget-example:
    type: nuget-feed
    url: https://nuget.example.com/v3/index.json
    username: octocat@example.com
    password: ${{secrets.MY_NUGET_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  nuget-azure-devops:
    type: nuget-feed
    url: https://pkgs.dev.azure.com/.../_packaging/My_Feed/nuget/v3/index.json
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
```
{% endraw %}

### `python-index`

Тип `python-index` поддерживает имя пользователя и пароль или маркер безопасности.

{% raw %}
```yaml
registries:
  python-example:
    type: python-index
    url: https://example.com/_packaging/my-feed/pypi/example
    username: octocat
    password: ${{secrets.MY_BASIC_AUTH_PASSWORD}}
    replaces-base: true
```
{% endraw %}

{% raw %}
```yaml
registries:
  python-azure:
    type: python-index
    url: https://pkgs.dev.azure.com/octocat/_packaging/my-feed/pypi/example
    token: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
    replaces-base: true
```
{% endraw %}

### `rubygems-server`

Тип `rubygems-server` поддерживает имя пользователя и пароль или маркер безопасности.

{% raw %}
```yaml
registries:
  ruby-example:
    type: rubygems-server
    url: https://rubygems.example.com
    username: octocat@example.com
    password: ${{secrets.MY_RUBYGEMS_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `terraform-registry`

Тип `terraform-registry` поддерживает маркер безопасности.

{% raw %}
```yaml
registries:
  terraform-example:
    type: terraform-registry
    url: https://terraform.example.com
    token: ${{secrets.MY_TERRAFORM_API_TOKEN}}
```
{% endraw %}

{% ifversion fpt or ghec or ghes > 3.4 %} 
## Включение поддержки экосистем бета-уровня

### `enable-beta-ecosystems`

По умолчанию {% data variables.product.prodname_dependabot %} обновляет манифесты зависимостей и файлы блокировки только для полностью поддерживаемых экосистем. Используйте флаг `enable-beta-ecosystems`, чтобы явно согласиться на обновления для экосистем, которые еще не общедоступны.

```yaml
# Configure beta ecosystem

version: 2
enable-beta-ecosystems: true
updates:{% ifversion fpt or ghec or ghes > 3.5 %}
  - package-ecosystem: "beta-ecosystem"{% else %}
  - package-ecosystem: "pub"{% endif %}
    directory: "/"
    schedule:
      interval: "daily"
```
{% endif %}
