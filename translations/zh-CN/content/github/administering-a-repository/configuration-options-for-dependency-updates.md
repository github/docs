---
title: 依赖项更新的配置选项
intro: '可用于自定义 {% data variables.product.prodname_dependabot %} 如何维护仓库的所有选项的详细信息。'
permissions: '拥有仓库写入权限的人可配置仓库的 {% data variables.product.prodname_dependabot %}。'
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### 关于 *dependabot.yml* 文件

{% data variables.product.prodname_dependabot %} 配置文件 *dependabot.yml* 使用 YAML 语法。 如果您是 YAML 的新用户并想要了解更多信息，请参阅“[五分钟了解 YAML](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)”。

必须将此文件存储在仓库的 `.github` 目录中。 添加或更新 *dependabot.yml* 文件时，这将触发对版本更新的立即检查。 下次安全警报触发安全更新的拉取请求时将使用所有同时影响安全更新的选项。 更多信息请参阅“[启用和禁用版本更新](/github/administering-a-repository/enabling-and-disabling-version-updates)”和“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)”。

### *dependabot.yml* 的配置选项

*dependabot.yml* 文件必须以 `version: 2` 开头，后接 `updates` 数组。

| 选项                                                                         |  必选   | 描述                |
|:-------------------------------------------------------------------------- |:-----:|:----------------- |
| [`package-ecosystem`](#package-ecosystem)                                  | **X** | 要使用的包管理器          |
| [`目录`](#directory)                                                         | **X** | 包清单位置             |
| [`schedule.interval`](#scheduleinterval)                                   | **X** | 检查更新的频率           |
| [`allow`](#allow)                                                          |       | 自定义允许的更新          |
| [`assignees`](#assignees)                                                  |       | 要在拉取请求上设置的受让人     |
| [`commit-message`](#commit-message)                                        |       | 提交消息首选项           |
| [`ignore`](#ignore)                                                        |       | 忽略某些依赖项或版本        |
| [`labels`](#labels)                                                        |       | 要在拉取请求上设置的标签      |
| [`里程碑`](#milestone)                                                        |       | 要在拉取请求上设置的里程碑     |
| [`open-pull-requests-limit`](#open-pull-requests-limit)                    |       | 限制对版本更新打开的拉取请求数   |
| [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator) |       | 更改拉取请求分支名称的分隔符    |
| [`rebase-strategy`](#rebase-strategy)                                      |       | 禁用自动变基            |
| [`reviewers`](#reviewers)                                                  |       | 要在拉取请求上设置的审查者     |
| [`schedule.day`](#scheduleday)                                             |       | 检查更新的周日期          |
| [`schedule.time`](#scheduletime)                                           |       | 每天检查更新的时间 (hh:mm) |
| [`schedule.timezone`](#scheduletimezone)                                   |       | 一天中时间的时区（区域标识符）   |
| [`target-branch`](#target-branch)                                          |       | 对其创建拉取请求的分支       |
| [`vendor`](#vendor)                                                        |       | 更新供应或缓存的依赖项       |
| [`versioning-strategy`](#versioning-strategy)                              |       | 如何更新清单版本要求        |

这些选项大致分为以下类别。

- 必须包含在所有配置中的基本设置选项：[`package-ecosystem`](#package-ecosystem)、[`directory`](#directory)、[`schedule.interval`](#scheduleinterval)。
- 用于自定义更新计划的选项：[`schedule.time`](#scheduletime)、[`schedule.timezone`](#scheduletimezone)、[`schedule.day`](#scheduleday)。
- 用于控制更新哪些依赖项的选项：[`allow`](#allow)、[`ignore`](#ignore)、[`vendor`](#vendor)。
- 用于将元数据添加到拉取请求的选项：[`reviewers`](#reviewers)、[`assignees`](#assignees)、[`labels`](#labels)、[`milestone`](#milestone)。
- 用于更改拉取请求行为的选项：[`target-branch`](#target-branch)、[`versioning-strategy`](#versioning-strategy)、[`commit-message`](#commit-message)、[`rebase-strategy`](#rebase-strategy)、[`pull-request-branch-name.separator`](#pull-request-branch-nameseparator)。

此外，[`open-pull-requests-limit`](#open-pull-requests-limit) 选项用于更改 {% data variables.product.prodname_dependabot %} 可打开的版本更新拉取请求最大数。

{% note %}

**注：**其中一些配置选项还可能影响对漏洞包清单的安全更新提出的拉取请求。

仅对默认分支上有漏洞的包清单提出安全更新。 如果为同一分支设置配置选项（不使用 `target-branch` 时为 true），并为有漏洞的清单指定 `package-ecosystem` 和 `directory`，则安全更新的拉取请求使用相关选项。

一般而言，安全更新会使用影响拉取请求的任何配置选项，例如添加元数据或改变其行为。 有关安全更新的更多信息，请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)”。

{% endnote %}

### `package-ecosystem`

**必选** 为您希望 {% data variables.product.prodname_dependabot %} 监控新版本的每个包管理器添加一个 `package-ecosystem` 元素。 仓库还必须包含其中每个包管理器的依赖项清单或锁定文件。 如果您想要为支持它的软件包管理器启用供应，则必须在所需的目录中找到供应的依赖项。 更多信息请参阅下面的 [`vendor`](#vendor)。

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

### `目录`

**必选** 必须为每个包管理器（如 *package.json* 或 *Gemfile*）定义包清单的位置。 为所有生态系统（GitHub 操作除外）定义相对于仓库根目录的目录。 对于 GitHub 操作，将目录设置为 `/` 以检查 `.github/workflows` 中的工作流程文件。

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

**必选** 必须为每个包管理器定义检查新版本以及提出版本更新拉取请求的频率。 默认情况下，在 UTC 时间凌晨 5 点运行。 若要修改此选项，请使用 [`schedule.time`](#scheduletime) 和 [`schedule.timezone`](#scheduletimezone)。

- `daily`—每个工作日（星期一到星期五）运行。
- `weekly`—每周运行一次。 默认情况下为星期一。 若要修改此选项，请使用 [`schedule.day`](#scheduleday)。
- `monthly`—每月运行一次。 在每月的第一天运行。

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

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

使用 `allow` 选项自定义更新哪些依赖项。 这对有漏洞的依赖项的安全更新没有影响。 您可以使用以下选项：

- `dependency-name`—用于更新名称匹配的依赖项，可以选择使用 `*` 来匹配零个或更多字符。 对于 Java 依赖项，`dependency-name` 属性的格式为：`groupId:artifactId`，例如：`org.kohsuke:github-api`。
- `dependency-type`—用于更新特定类型的依赖项。

  | 依赖项类型 | 支持的包管理器                                        | 允许更新                                                            |
  | ----- | ---------------------------------------------- | --------------------------------------------------------------- |
  | `直接`  | 所有                                             | 所有明确定义的依赖项。                                                     |
  | `间接`  | `bundler`、`pip`、`composer`、`cargo`             | 直接依赖关系的依赖项（也称为子依赖项或暂时依赖项）。                                      |
  | `all` | 所有                                             | 所有明确定义的依赖项。 对于 `bundler`、`pip`、`composer`、`cargo` 以及直接依赖关系的依赖项。 |
  | `生产`  | `bundler`、`composer`、`mix`、`maven`、`npm`、`pip` | 仅“产品依赖项组”中的依赖项。                                                 |
  | `开发`  | `bundler`、`composer`、`mix`、`maven`、`npm`、`pip` | 仅“产品依赖项组”中的依赖项。                                                 |

```yaml
# Customizing the dependencies to maintain with `allow`

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

使用 `assignees` 指定对包管理器提出的所有拉取请求的个别受理人。

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

默认情况下，{% data variables.product.prodname_dependabot %} 会尝试检测您的提交消息首选项并使用类似的模式。 使用 `commit-message` 选项来明确指定首选项。

支持的选项

- `prefix` 指定所有提交消息的前缀。
- `prefix-development` 为更新“开发”依赖项组中依赖项的所有提交消息指定单独的前缀。 指定此选项的值时，`prefix` 仅用于更新“生产”依赖项组中的依赖项。 支持的包管理器：`bundler`、`composer`、`mix`、`maven`、`npm` 和 `pip`。
- `include: "scope"` 指定任何前缀后接提交中更新的依赖项列表。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customizing commit messages

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

### `ignore`

{% data reusables.dependabot.warning-ignore-option %}

#### 检查现有的 ignore 首选项

在添加 `ignore` 选项到配置文件之前，检查您以前是否对安全更新或版本更新拉取请求使用过任何e `@dependabot ignore` 命令。 {% data variables.product.prodname_dependabot %} 集中存储每个包管理器的这些首选项，并且此信息被 `ignore` 选项覆盖。 有关 `@dependabot ignore` 命令的更多信息，请参阅“[管理依赖项更新的拉取请求](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)”。

您可以搜索仓库中是否有 `"@dependabot ignore" in:comments`，以检查仓库是否存储了首选项。 如果审查结果中的任何拉取请求，您可以决定是否在配置文件中指定这些忽略的依赖项或版本。

#### 指定要忽略的依赖项和版本

{% data reusables.dependabot.default-dependencies-allow-ignore %}

可以使用 `ignore` 选项自定义更新哪些依赖项。 `ignore` 选项支持以下选项。

- `dependency-name`—用于忽略名称匹配的依赖项，可以选择使用 `*` 来匹配零个或更多字符。 对于 Java 依赖项，`dependency-name` 属性的格式为：`groupId:artifactId`，例如：`org.kohsuke:github-api`。
- `versions`—用于忽略特定版本或版本范围。 如果要定义范围，请使用包管理器的标准模式（例如：对 npm 使用 `^1.0.0`，对 Bundler 使用 `~> 2.0`）。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customizing the dependencies to maintain with `ignore`

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
        # For Loadash, ignore all updates
      - dependency-name: "loadash"
```

{% note %}

**注**：{% data variables.product.prodname_dependabot_version_updates %} 无法为包含私有 git 依赖项或私有 git 注册表的清单中的任何依赖项运行版本更新，即使您将私有依赖项添加到配置文件的 `ignore` 选项。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot#supported-repositories-and-ecosystems)”。

{% endnote %}

### `labels`

{% data reusables.dependabot.default-labels %}

使用 `labels` 覆盖默认标签，并指定为包管理器提出的所有拉取请求的替代标签。 如果其中任何标签未在仓库中定义，将被忽略。 要禁用所有标签（包括默认标签），请使用 `labels: [ ]`。

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

### `里程碑`

使用 `milestone` 将对包管理器提出的所有拉取请求与里程碑相关联。 您需要指定里程碑的数字标识符，而不是其标签。 如果查看里程碑，则页面 URL 的最后一部分（`milestone` 之后）是标识符。 例如：`https://github.com/<org>/<repo>/milestone/3`。

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

默认情况下， {% data variables.product.prodname_dependabot %} 最多打开五个版本更新的拉取请求。 有五个拉取请求打开后，新的请求将被阻止，直到您合并或关闭一些打开的请求。 使用 `open-pull-requests-limit` 可更改此限制。 这也提供了一个简单的方法来暂时禁用包管理器的版本更新。

此选项对安全更新没有影响，因为安全更新具有单独的内部限制：10 个打开的拉取请求。

```yaml
# Changing the number of open pull requests allowed

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

{% data variables.product.prodname_dependabot %} 为每个拉取请求生成分支。 每个分支名称包含 `dependabot` 以及更新的包管理器和依赖项。 默认情况下，这些部分用 `/` 符号分隔，例如：`dependabot/npm_and_yarn/next_js/acorn-6.4.1`。

使用 `pullrequest-branch-name.separator` 可指定不同的分隔符。 可以是以下字符之一：`"-"`、`_` 或 `/`。 连字符必须用引号括住，否则会解释为开始一个空的 YAML 列表。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specifying a different separator for branch names

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

默认情况下，{% data variables.product.prodname_dependabot %} 会在检测到冲突时自动变基打开的拉取请求。 使用 `rebase-strategy` 可禁用此行为。

可用的变基策略

- `disabled` 禁用自动变基。
- `auto` 在检测到冲突时使用默认行为并且变基打开的拉取请求。

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Disabling automatic rebasing

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable rebasing for npm pull requests
    rebase-strategy: "disabled"
```

### `reviewers`

使用 `reviewers` 指定对包管理器提出的所有拉取请求的个别受理人。 您必须使用完整的团队名称，包括组织，就好像您@提及团队一样。

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

设置 `weekly` 更新计划时，默认情况下，{% data variables.product.prodname_dependabot %} 会在 UTC 时间星期一凌晨 5:00 检查新版本。 使用 `schedule.day` 可指定替代的更新检查日期。

支持的值

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

默认情况下， {% data variables.product.prodname_dependabot %} 在 UTC 时间凌晨 5:00 检查新版本。 使用 `schedule.time` 可指定在一天中的其他时间来检查更新（格式：`h:mm`）。

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

默认情况下， {% data variables.product.prodname_dependabot %} 在 UTC 时间凌晨 5:00 检查新版本。 使用 `schedule.timezone` 可指定其他时区。 时区标识符必须来自 [iana](https://www.iana.org/time-zones) 维护的时区数据库。 更多信息请参阅 [tz 数据库时区列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)。

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

默认情况下，{% data variables.product.prodname_dependabot %} 会检查默认分支上的清单文件，并对此分支提出版本更新的拉取请求。 使用 `target-branch` 可为清单文件和拉取请求指定不同的分支。 使用此选项时，此包管理器的设置将不再影响针对安全更新提出的任何拉取请求。

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

使用 `vendor` 选项指示 {% data variables.product.prodname_dependabot %} 在更新依赖项时供应它们。

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

{% data variables.product.prodname_dependabot %} 仅更新位于仓库的特定目录中供应的依赖项。

| 包管理器      | 供应的依赖项所需的文件路径                             | 更多信息                                                            |
| --------- | ----------------------------------------- | --------------------------------------------------------------- |
| `bundler` | 依赖项必须在 _vendor/cache_ 目录中。</br>不支持其他文件路径。 | [`bundle cache` 文档](https://bundler.io/man/bundle-cache.1.html) |
| `gomod`   | 没有路径要求（依赖项通常位于 _vendor_ 目录中）              | [`go mod vendor` 文档](https://golang.org/ref/mod#go-mod-vendor)  |


### `versioning-strategy`

{% data variables.product.prodname_dependabot %} 在编辑清单文件来更新版本时，使用以下总体策略：

- 对于 app，版本要求会增加，例如：npm、pip 和 Composer。
- 对于库，版本的范围会扩大，例如： Bundler 和 Cargo。

使用 `versioning-strategy` 选项可改变支持的包管理器的这种行为。

{% data reusables.dependabot.option-affects-security-updates %}

可用的更新策略

| 选项                      | 支持者                                            | 操作                                          |
| ----------------------- | ---------------------------------------------- | ------------------------------------------- |
| `lockfile-only`         | `bundler`、`cargo`、`composer`、`mix`、`npm`、`pip` | 仅创建用于更新 lockfiles 更新的拉取请求。 忽略任何需要包清单更改的新版本。 |
| `auto`                  | `bundler`、`cargo`、`composer`、`mix`、`npm`、`pip` | 遵循上述默认策略。                                   |
| `widen`                 | `composer`、`npm`                               | 尽可能放宽版本要求，以包括新旧版本。                          |
| `increase`              | `bundler`、`composer`、`npm`                     | 始终增加版本要求以匹配新版本。                             |
| `increase-if-necessary` | `bundler`、`composer`、`npm`                     | 仅当新版本需要时才增加版本要求。                            |

```yaml
# Customizing the manifest version strategy

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
