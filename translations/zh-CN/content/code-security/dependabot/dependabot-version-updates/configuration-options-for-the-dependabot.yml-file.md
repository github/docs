---
title: Configuration options for the dependabot.yml file
intro: '可用于自定义 {% data variables.product.prodname_dependabot %} 如何维护仓库的所有选项的详细信息。'
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
  ghes: '>3.2'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure dependabot.yml
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## 关于 *dependabot.yml* 文件

{% data variables.product.prodname_dependabot %} 配置文件 *dependabot.yml* 使用 YAML 语法。 如果您是 YAML 的新用户并想要了解更多信息，请参阅“[五分钟了解 YAML](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)”。

必须将此文件存储在仓库的 `.github` 目录中。 添加或更新 *dependabot.yml* 文件时，这将触发对版本更新的立即检查。 For more information and an example, see "[Configuring {% data variables.product.prodname_dependabot %} version updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-dependabot-version-updates)."

下次安全警报触发安全更新的拉取请求时将使用所有同时影响安全更新的选项。  更多信息请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)。”

*dependabot.yml* 文件有两个必需的顶级密钥：`version` 和 `updates`。 您可以选择性包括一个顶级`注册表`键。 该文件必须以 `version: 2` 开头。

## 更新的配置选项

顶级 `updates` 密钥是必需的。 您使用它来配置 {% data variables.product.prodname_dependabot %} 如何更新版本或项目的依赖项。 每个条目都为特定的包管理器配置更新设置。 您可以使用以下选项。

| 选项                                                                         |  必选   | 描述                                                          |
|:-------------------------------------------------------------------------- |:-----:|:----------------------------------------------------------- |
| [`package-ecosystem`](#package-ecosystem)                                  | **X** | 要使用的包管理器                                                    |
| [`目录`](#directory)                                                         | **X** | 包清单位置                                                       |
| [`schedule.interval`](#scheduleinterval)                                   | **X** | 检查更新的频率                                                     |
| [`allow`](#allow)                                                          |       | 自定义允许的更新                                                    |
| [`assignees`](#assignees)                                                  |       | 要在拉取请求上设置的受让人                                               |
| [`commit-message`](#commit-message)                                        |       | 提交消息首选项                                                     |
| [`ignore`](#ignore)                                                        |       | 忽略某些依赖项或版本                                                  |
| [`insecure-external-code-execution`](#insecure-external-code-execution)    |       | 允许或拒绝清单文件中的代码执行                                             |
| [`labels`](#labels)                                                        |       | 要在拉取请求上设置的标签                                                |
| [`里程碑`](#milestone)                                                        |       | 要在拉取请求上设置的里程碑                                               |
| [`open-pull-requests-limit`](#open-pull-requests-limit)                    |       | 限制对版本更新打开的拉取请求数                                             |
| [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator) |       | 更改拉取请求分支名称的分隔符                                              |
| [`rebase-strategy`](#rebase-strategy)                                      |       | 禁用自动变基                                                      |
| [`registries`](#registries)                                                |       | {% data variables.product.prodname_dependabot %} 可以访问的私有注册表 |
| [`reviewers`](#reviewers)                                                  |       | 要在拉取请求上设置的审查者                                               |
| [`schedule.day`](#scheduleday)                                             |       | 检查更新的周日期                                                    |
| [`schedule.time`](#scheduletime)                                           |       | 每天检查更新的时间 (hh:mm)                                           |
| [`schedule.timezone`](#scheduletimezone)                                   |       | 一天中时间的时区（区域标识符）                                             |
| [`target-branch`](#target-branch)                                          |       | 对其创建拉取请求的分支                                                 |
| [`vendor`](#vendor)                                                        |       | 更新供应或缓存的依赖项                                                 |
| [`versioning-strategy`](#versioning-strategy)                              |       | 如何更新清单版本要求                                                  |

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

一般而言，安全更新会使用影响拉取请求的任何配置选项，例如添加元数据或改变其行为。 有关安全更新的更多信息，请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)”。

{% endnote %}

### `package-ecosystem`

**必填**。 为您希望 {% data variables.product.prodname_dependabot %} 监控新版本的每个包管理器添加一个 `package-ecosystem` 元素。 仓库还必须包含其中每个包管理器的依赖项清单或锁定文件。 如果您想要为支持它的软件包管理器启用供应，则必须在所需的目录中找到供应的依赖项。 更多信息请参阅下面的 [`vendor`](#vendor)。

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

**必填**。 必须为每个包管理器（如 *package.json* 或 *Gemfile*）定义包清单的位置。 为所有生态系统（GitHub Actions 除外）定义相对于仓库根目录的目录。 对于 GitHub Actions，将目录设置为 `/` 以检查 `.github/workflows` 中的工作流程文件。

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

**必填**。 必须为每个包管理器定义检查新版本的频率。 默认情况下， {% data variables.product.prodname_dependabot %} 随机分配一个时间来应用配置文件中的所有更新。 要设置特定时间，请使用 [`schedule.time`](#scheduletime) 和 [`schedule.timezone`](#scheduletimezone)。

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

{% note %}

**注意**：`时间表` 定义 {% data variables.product.prodname_dependabot %} 尝试更新的时间。 但是，这不是您可收到拉取请求的唯一时间。 更新可基于 `dependabot.yml` 文件的更改、更新失败后清单文件的更改或 {% data variables.product.prodname_dependabot_security_updates %} 触发。 For more information, see "[Frequency of {% data variables.product.prodname_dependabot %} pull requests](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates#frequency-of-dependabot-pull-requests)" and "[About {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)."

{% endnote %}

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

使用 `allow` 选项自定义更新哪些依赖项。 这适用于版本和安全更新。 您可以使用以下选项：

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

### `ignore`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

通过将依赖项添加到 `ignore` 或针对由 {% data variables.product.prodname_dependabot %} 打开的拉取请求使用 `@dependabot ignore` 命令，可忽略依赖项。

#### 从 `@dependabot ignore` 创建 `ignore` 条件

使用 `@dependabot ignore` 命令忽略的依赖项为每个包管理器集中存储。 如果您开始忽略 `dependabot.yml` 文件中的依赖项，则这些现有的首选项将会与配置中的 `ignore` 依赖项一起被考虑。

您可以搜索仓库中是否有 `"@dependabot ignore" in:comments`，以检查仓库是否存储了 `ignore` 首选项。 如果您希望取消忽略以这种方式忽略的依赖项，请重新打开拉取请求。

For more information about the `@dependabot ignore` commands, see "[Managing pull requests for dependency updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."

#### 指定要忽略的依赖项和版本

可以使用 `ignore` 选项自定义更新哪些依赖项。 `ignore` 选项支持以下选项。

- `dependency-name`—用于忽略名称匹配的依赖项，可以选择使用 `*` 来匹配零个或更多字符。 对于 Java 依赖项，`dependency-name` 属性的格式为：`groupId:artifactId`（例如：`org.kohsuke:github-api`）。
- `versions`—用于忽略特定版本或版本范围。 如果要定义范围，请使用包管理器的标准模式（例如：对 npm 使用 `^1.0.0`，对 Bundler 使用 `~> 2.0`）。
- `update-types`—用于忽略更新类型，如关于版本更新的 semver `major`、`minor` 或 `patch` 更新（例如：`version-update:semver-patch` 将忽略补丁更新）。 您可以将此与 `dependency-name: "*"` 结合，以忽略所有依赖项的特定 `update-types`。 目前，`version-update:semver-major`、`version-update:semver-minor` 和 `version-update:semver-patch` 是唯一支持的选项。 安全更新不受此设置的影响。

如果 `versions` 与 `update-types` 一起使用，则 {% data variables.product.prodname_dependabot %} 将会忽略任一集中的任何更新。

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

**注意**：即使您将不可访问的依赖项添加到配置文件的`忽略`选项，{% data variables.product.prodname_dependabot %} 也仅在可以访问文件中的所有依赖项时才可在清单文件或锁定文件上运行版本更新。 更多信息请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)”和“[排除 {% data variables.product.prodname_dependabot %} 错误](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)”。


{% endnote %}

### `insecure-external-code-execution`

作为版本更新过程的一部分，具有 `package-ecosystem` 值 `bundler`、`mix` 和 `pip` 的包管理器可以在清单中执行外部代码。 这可能允许受损害的软件包窃取凭据或访问已配置的注册。 当您在 `updates` 配置中添加 [`registries`](#registries) 设置时，{% data variables.product.prodname_dependabot %} 自会动阻止外部代码执行，在这种情况下，版本更新可能失败。 您可以选择覆盖此行为，并将 `insecure-external-code-execution` 设置为 `allow`，以允许 `bundler`、`mix` 和 `pip` 包管理器的执行。

您可以通过将 `insecure-external-code-execution` 设置为 `deny`，明确拒绝执行外部代码，而不管是否有此更新配置的 `registries` 设置。

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

默认情况下， {% data variables.product.prodname_dependabot %} 最多打开五个版本更新的拉取请求。 一旦有五个打开的拉取请求，新的请求将被阻止，直到您合并或关闭一些打开的请求，之后可以在后续更新中打开新的拉取请求。 使用 `open-pull-requests-limit` 可更改此限制。 这也提供了一个简单的方法来暂时禁用包管理器的版本更新。

此选项对安全更新没有影响，因为安全更新具有单独的内部限制：10 个打开的拉取请求。

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

{% data variables.product.prodname_dependabot %} 为每个拉取请求生成分支。 每个分支名称包含 `dependabot` 以及更新的包管理器和依赖项。 默认情况下，这些部分用 `/` 符号分隔，例如：`dependabot/npm_and_yarn/next_js/acorn-6.4.1`。

使用 `pullrequest-branch-name.separator` 可指定不同的分隔符。 可以是以下字符之一：`"-"`、`_` 或 `/`。 连字符必须用引号括住，否则会解释为开始一个空的 YAML 列表。

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

默认情况下，{% data variables.product.prodname_dependabot %} 会在检测到拉取请求有任何更改时自动变基打开的拉取请求。 使用 `rebase-strategy` 可禁用此行为。

可用的变基策略

- `disabled` 禁用自动变基。
- `auto` 在检测到更改时使用默认行为并且变基打开的拉取请求。

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

要允许 {% data variables.product.prodname_dependabot %} 在执行版本更新时访问私人包注册表，您必须在相关的 `updates` 配置中包括 `registries` 设置。 您可以通过将 `registrations` 设置为 `"*"` 来允许使用所有定义的注册表。 或者，您可以列出更新可以使用的注册表。 要执行此操作，请使用 _dependabot.yml_ 文件的顶层 `registries` 部分定义的注册表。 更多信息请参阅下面的“[私有注册表的配置选项](#configuration-options-for-private-registries)”。

要允许 {% data variables.product.prodname_dependabot %} 使用 `bundler`、`mix` 和 `pip` 包管理器来更新私人注册表中的依赖项，您可以选择允许外部代码执行。 更多信息请参阅上面的 [`insecure-external-code-execution`](#insecure-external-code-execution)。

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

设置 `weekly` 更新计划时，默认情况下，{% data variables.product.prodname_dependabot %} 会在星期一为仓库随机设置的时间检查新版本。 使用 `schedule.day` 可指定替代的更新检查日期。

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

默认情况下，{% data variables.product.prodname_dependabot %} 在仓库的随机设置时间检查新版本。 使用 `schedule.time` 可指定在一天中的其他时间来检查更新（格式：`h:mm`）。

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

默认情况下，{% data variables.product.prodname_dependabot %} 在仓库的随机设置时间检查新版本。 使用 `schedule.timezone` 可指定其他时区。 时区标识符必须来自 [iana](https://www.iana.org/time-zones) 维护的时区数据库。 更多信息请参阅 [tz 数据库时区列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)。

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

使用 `vendor` 选项指示 {% data variables.product.prodname_dependabot %} 在更新依赖项时供应它们。 如果您使用 `gomod` 作为 {% data variables.product.prodname_dependabot %} 自动检测此工具的供应，请不要使用此选项。

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

| 选项                      | 支持者                                            | 操作                                        |
| ----------------------- | ---------------------------------------------- | ----------------------------------------- |
| `lockfile-only`         | `bundler`、`cargo`、`composer`、`mix`、`npm`、`pip` | 仅创建用于更新 lockfiles 的拉取请求。 忽略任何需要包清单更改的新版本。 |
| `auto`                  | `bundler`、`cargo`、`composer`、`mix`、`npm`、`pip` | 遵循上述默认策略。                                 |
| `widen`                 | `composer`、`npm`                               | 尽可能放宽版本要求，以包括新旧版本。                        |
| `increase`              | `bundler`、`composer`、`npm`                     | 始终增加版本要求以匹配新版本。                           |
| `increase-if-necessary` | `bundler`、`composer`、`npm`                     | 仅当新版本需要时才增加版本要求。                          |

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

## 私人注册的配置选项

顶级 `updates` 密钥可选。 它允许您指定 {% data variables.product.prodname_dependabot %} 可用于访问私人包注册表的身份验证详细信息。

{% note %}

**注意：**不支持私人网络防火墙后面的私人注册表。

{% endnote %}

`registration` 密钥的值是一个关联数组， 其中每个元素由一个能够识别特定注册表的密钥和一个具有关联数组的值组成，指定访问该注册表所需的设置。 以下 *dependabot.yml* 文件配置文件 `registries` 部分识别为 `dockerhub` 的注册表，然后在文件的 `updates` 部分引用此注册表。

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

您使用以下选项来指定访问设置。 注册表设置必须包含 `type` 和 `url`，通常是一个 `username` 和 `password` 组合或 `token`。

| 选项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 描述                                                                                                                                                                                                                                 |
|:-------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | 识别注册表的类型。 请参阅下面的完整类型列表。                                                                                                                                                                                                            |
| `url`                                                                                              | 用于访问此注册表中的依赖项的 URL。 协议是可选的。 如果未指定，则假定是 `https:///`。 {% data variables.product.prodname_dependabot %} 根据需要添加或忽略尾随斜线。                                                                                                                |
| `用户名`                                                                                              | {% data variables.product.prodname_dependabot %} 用于访问注册表的用户名。                                                                                                                                                                      |
| `密码`                                                                                               | 引用包含指定用户密码的 {% data variables.product.prodname_dependabot %} 机密。 更多信息请参阅“[管理 Dependabot 的加密密码](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”。   |
| `键`                                                                                                | 引用包含此注册表访问密钥的 {% data variables.product.prodname_dependabot %} 机密。 更多信息请参阅“[管理 Dependabot 的加密密码](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”。 |
| `令牌`                                                                                               | 引用包含此注册表访问令牌的 {% data variables.product.prodname_dependabot %} 机密。 更多信息请参阅“[管理 Dependabot 的加密密码](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”。 |
| `replaces-base`                                                                                    | 对于具有 `type: python-index` 的注册表，如果布尔值是 `true`，pip 将使用指定的 URL 而不是 Python Package Index 的基础 URL（默认 `https://pypi.org/simple`）来解析依赖项。                                                                                                  |


每个配置 `type` 需要您提供特定的设置。 某些类型允许多种连接方式。 以下各节提供了您应用于每个 `type` 的设置的详细信息。

### `composer-repository`

`composer-repository` 类型支持用户名和密码。

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

`docker-registration` 类型支持用户名和密码。

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

`docker-registration` 类型也可以用来使用静态 AWS 凭据从 Amazon ECR 拉取。

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

`git` 类型支持用户名和密码。

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

`hex-organization` 类型支持组织和密钥。

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

`maven-repository` 类型支持用户名和密码。

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

`npm-registration` 类型支持用户名和密码或令牌。

使用用户名和密码时，`.npmrc`的 auth 令牌可能包含 `base64` 编码 的`_password`；但是，{% data variables.product.prodname_dependabot %} 配置文件中引用的密码必须是原始（未编码）密码。

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

`nuget-feed` 类型支持用户名和密码或令牌。

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

`python-index` 类型支持用户名和密码或令牌。

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

`rubygems-server` 类型支持用户名和密码或令牌。

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

`terraform-registry` 类型支持令牌。

{% raw %}
```yaml
registries:
  terraform-example:
    type: terraform-registry
    url: https://terraform.example.com
    token: ${{secrets.MY_TERRAFORM_API_TOKEN}}
```
{% endraw %}
