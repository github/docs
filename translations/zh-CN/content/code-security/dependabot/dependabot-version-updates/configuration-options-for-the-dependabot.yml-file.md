---
title: dependabot.yml 文件的配置选项
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
  ghes: '*'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure dependabot.yml
ms.openlocfilehash: f7753a73f4a889b3c97ca1f47ad3dc1d41da5bc8
ms.sourcegitcommit: 8544f120269257d01adfe4a27b62f08fc8691727
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 08/02/2022
ms.locfileid: '147444651'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## <a name="about-the-dependabotyml-file"></a>关于 dependabot.yml 文件

{% data variables.product.prodname_dependabot %} 配置文件 dependabot.yml 使用 YAML 语法。 如果你不熟悉 YAML 并且想要了解详细信息，请参阅“[在五分钟内了解 YAML](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)”。

必须将此文件存储在存储库的 `.github` 目录中。 在添加或更新 dependabot.yml 文件时，这将立即触发版本更新检查。 有关详细信息和示例，请参阅“[配置 {% data variables.product.prodname_dependabot %} 版本更新](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-dependabot-version-updates)”。

下次安全警报触发安全更新的拉取请求时将使用所有同时影响安全更新的选项。  有关详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)”。

dependabot.yml 文件有两个必需的顶级项：`version` 和 `updates`。 可以选择包括顶级 `registries` 项{% ifversion ghes = 3.5 %} 和/或 `enable-beta-ecosystems` 项{% endif %}。 该文件必须以 `version: 2` 开头。

## <a name="configuration-options-for-the-dependabotyml-file"></a>dependabot.yml 文件的配置选项

顶级 `updates` 项是必需的。 您使用它来配置 {% data variables.product.prodname_dependabot %} 如何更新版本或项目的依赖项。 每个条目都为特定的包管理器配置更新设置。 您可以使用以下选项。

{% data reusables.dependabot.configuration-options %}

这些选项大致分为以下类别。

- 必须在所有配置中包含的基本设置选项：[`package-ecosystem`](#package-ecosystem)、[`directory`](#directory)、[`schedule.interval`](#scheduleinterval)。
- 用于自定义更新计划的选项：[`schedule.time`](#scheduletime)、[`schedule.timezone`](#scheduletimezone)、[`schedule.day`](#scheduleday)。
- 用于控制要更新的依赖项的选项：[`allow`](#allow)、[`ignore`](#ignore)、[`vendor`](#vendor)。
- 用于向拉取请求添加元数据的选项：[`reviewers`](#reviewers)、[`assignees`](#assignees)、[`labels`](#labels)、[`milestone`](#milestone)。
- 用于更改拉取请求的行为的选项：[`target-branch`](#target-branch)、[`versioning-strategy`](#versioning-strategy)、[`commit-message`](#commit-message)、[`rebase-strategy`](#rebase-strategy)、[`pull-request-branch-name.separator`](#pull-request-branch-nameseparator)。

此外，[`open-pull-requests-limit`](#open-pull-requests-limit) 选项会更改 {% data variables.product.prodname_dependabot %} 可以打开的版本更新的最大拉取请求数。

{% note %}

注意：其中一些配置选项还可能会影响针对易受攻击的程序包清单安全更新提出的拉取请求。

仅对默认分支上有漏洞的包清单提出安全更新。 如果为同一分支设置了配置选项（除非使用 `target-branch`，否则为 true），并为易受攻击的清单指定了 `package-ecosystem` 和 `directory`，则安全更新的拉取请求将使用相关选项。

一般而言，安全更新会使用影响拉取请求的任何配置选项，例如添加元数据或改变其行为。 有关安全更新的详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)”。

{% endnote %}

### `package-ecosystem`

“必需”。 你为希望 {% data variables.product.prodname_dependabot %} 监视新版本的每个包管理器添加一个 `package-ecosystem` 元素。 仓库还必须包含其中每个包管理器的依赖项清单或锁定文件。 如果您想要为支持它的软件包管理器启用供应，则必须在所需的目录中找到供应的依赖项。 有关详细信息，请参阅下面的 [`vendor`](#vendor)。

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

“必需”。 必须为每个包管理器定义程序包清单的位置（例如 package.json 或 Gemfile） 。 为所有生态系统（GitHub Actions 除外）定义相对于仓库根目录的目录。 对于 GitHub Actions，请将目录设置为 `/`，以检查 `.github/workflows` 中的工作流文件。

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

“必需”。 必须为每个包管理器定义检查新版本的频率。 默认情况下， {% data variables.product.prodname_dependabot %} 随机分配一个时间来应用配置文件中的所有更新。 若要设置特定时间，可以使用 [`schedule.time`](#scheduletime) 和 [`schedule.timezone`](#scheduletimezone)。

- `daily` - 在每个工作日（周一至周五）运行。
- `weekly` - 每周运行一次。 默认情况下为星期一。 若要对此进行修改，请使用 [`schedule.day`](#scheduleday)。
- `monthly` - 每月运行一次。 在每月的第一天运行。

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

注意：`schedule` 定义 {% data variables.product.prodname_dependabot %} 尝试新更新的时间。 但是，这不是您可收到拉取请求的唯一时间。 可以基于对 `dependabot.yml` 文件所做的更改、在更新失败后对清单文件的更改或 {% data variables.product.prodname_dependabot_security_updates %} 触发更新。 有关详细信息，请参阅“[{% data variables.product.prodname_dependabot %} 拉取请求的频率](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates#frequency-of-dependabot-pull-requests)”和“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)”。

{% endnote %}

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

使用 `allow` 选项自定义更新的依赖项。 这适用于版本和安全更新。 您可以使用下列选项：

- `dependency-name` - 用于允许具有匹配名称的依赖项的更新，可以选择使用 `*` 匹配零个或多个字符。 对于 Java 依赖项，`dependency-name` 属性的格式为 `groupId:artifactId`，例如：`org.kohsuke:github-api`。
- `dependency-type` - 用于允许特定类型的依赖项的更新。

  | 依赖项类型 | 支持的包管理器 | 允许更新 |
  |------------------|-------------------------------|--------|
  | `direct` | All | 所有明确定义的依赖项。 |
  | `indirect` | `bundler`, `pip`, `composer`, `cargo` | 直接依赖关系的依赖项（也称为子依赖项或暂时依赖项）。|
  | `all` | All | 所有明确定义的依赖项。 对于 `bundler`、`pip`、`composer`、`cargo`，还包括直接依赖项的依赖项。|
  | `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | 仅“产品依赖项组”中的依赖项。 |
  | `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | 仅“产品依赖项组”中的依赖项。 |

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

使用 `assignees` 为针对包管理器提出的所有拉取请求指定单个代理人。

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

默认情况下，{% data variables.product.prodname_dependabot %} 会尝试检测您的提交消息首选项并使用类似的模式。 使用 `commit-message` 选项可显式指定首选项。

支持的选项

{% note %}

注意：`prefix` 和 `prefix-development` 选项具有 15 个字符的限制。

{% endnote %}

- `prefix` 指定所有提交消息的前缀。
- `prefix-development` 为更新开发依赖项组中的依赖项的所有提交消息指定单独的前缀。 为该选项指定值时，`prefix` 仅用于更新生产依赖项组中的依赖项。 这由 `bundler`、`composer`、`mix`、`maven`、`npm` 和 `pip` 支持。
- `include: "scope"` 指定任何前缀都后跟提交中更新的依赖项列表。

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
如果使用与上述示例相同的配置，则升级 `pip` 开发依赖项组中的 `requests` 库将生成提交消息：

   `pip dev: bump requests from 1.0.0 to 1.0.1`
   
### `ignore`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

通过将依赖项添加到 `ignore`，或者对由 {% data variables.product.prodname_dependabot %} 打开的拉取请求使用 `@dependabot ignore` 命令，可以忽略依赖项。

#### <a name="creating-ignore-conditions-from-dependabot-ignore"></a>从 `@dependabot ignore` 创建 `ignore` 条件

使用 `@dependabot ignore` 命令忽略的依赖项将针对每个包管理器集中存储。 如果开始忽略 `dependabot.yml` 文件中的依赖项，则这些现有首选项将与配置中的 `ignore` 依赖项一起考虑。

可以通过在存储库中搜索 `"@dependabot ignore" in:comments` 来检查该存储库是否存储了 `ignore` 首选项。 如果您希望取消忽略以这种方式忽略的依赖项，请重新打开拉取请求。

有关 `@dependabot ignore` 命令的详细信息，请参阅“[管理依赖项更新的拉取请求](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)”。

#### <a name="specifying-dependencies-and-versions-to-ignore"></a>指定要忽略的依赖项和版本

可以使用 `ignore` 选项自定义更新的依赖项。 `ignore` 选项支持以下选项。

- `dependency-name` - 用于忽略具有匹配名称的依赖项的更新，可以选择使用 `*` 匹配零个或多个字符。 对于 Java 依赖项，`dependency-name` 属性的格式为 `groupId:artifactId`（例如：`org.kohsuke:github-api`）。 {% ifversion dependabot-grouped-dependencies %} 要防止 {% data variables.product.prodname_dependabot %} 从 DefinitelyTyped 自动更新 TypeScript 类型定义，请使用 `@types/*`。{% endif %}
- `versions` - 用于忽略特定版本或版本范围。 如果要定义范围，请使用包管理器的标准模式（例如：对于 npm，请使用 `^1.0.0`；对于 Bundler，请使用 `~> 2.0`）。
- `update-types` - 用于忽略更新类型，例如版本更新的 semver `major`、`minor` 或 `patch` 更新（例如：`version-update:semver-patch` 将忽略修补程序更新）。 可以将其与 `dependency-name: "*"` 相结合，以忽略所有依赖项的特定 `update-types`。 目前，仅支持 `version-update:semver-major`、`version-update:semver-minor` 和 `version-update:semver-patch` 选项。 安全更新不受此设置的影响。

如果结合使用 `versions` 和 `update-types`，{% data variables.product.prodname_dependabot %} 将忽略任一集中的任何更新。

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

注意：{% data variables.product.prodname_dependabot %} 在可以访问文件中的所有依赖项时，只能在清单或锁定文件上运行版本更新，即使你将不可访问的依赖项添加到配置文件的 `ignore` 选项也是如此。 有关详细信息，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)”和“[排查 {% data variables.product.prodname_dependabot %} 错误](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)”。


{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% note %}

注意：对于 `pub` 生态系统，{% data variables.product.prodname_dependabot %} 在其尝试更新到的版本被忽略时不会执行更新，即使有可用早期版本也是如此。

{% endnote %}

{% endif %}

### `insecure-external-code-execution`

包含 `package-ecosystem` 值 `bundler`、`mix` 和 `pip` 的包管理器可能会在版本更新过程中在清单中执行外部代码。 这可能允许受损害的软件包窃取凭据或访问已配置的注册。 在 `updates` 配置中添加 [`registries`](#registries) 设置时，{% data variables.product.prodname_dependabot %} 会自动阻止外部代码执行，在此情况下，版本更新可能会失败。 可以选择通过将 `insecure-external-code-execution` 设置为 `allow` 来替代此行为，允许针对 `bundler`、`mix` 和 `pip` 包管理器的外部代码执行。

可以通过将 `insecure-external-code-execution` 设置为 `deny` 显式拒绝外部代码执行，而不考虑此更新配置是否有 `registries` 设置。

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

使用 `labels` 替代默认标签，并为针对包管理器提出的所有拉取请求指定替代标签。 如果其中任何标签未在仓库中定义，将被忽略。
若要禁用所有标签（包括默认标签），请使用 `labels: [ ]`。

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

使用 `milestone` 将针对包管理器提出的所有拉取请求与里程碑相关联。 您需要指定里程碑的数字标识符，而不是其标签。 如果查看里程碑，则 `milestone` 之后的页面 URL 的最后一部分是标识符。 例如：`https://github.com/<org>/<repo>/milestone/3`。

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

默认情况下， {% data variables.product.prodname_dependabot %} 最多打开五个版本更新的拉取请求。 一旦有五个打开的拉取请求，新的请求将被阻止，直到您合并或关闭一些打开的请求，之后可以在后续更新中打开新的拉取请求。 使用 `open-pull-requests-limit` 可以更改此限制。 这也提供了一个简单的方法来暂时禁用包管理器的版本更新。

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

{% data variables.product.prodname_dependabot %} 为每个拉取请求生成分支。 每个分支名称都包括 `dependabot`，以及更新的包管理器和依赖项。 默认情况下，这些部分由 `/` 符号分隔，例如：`dependabot/npm_and_yarn/next_js/acorn-6.4.1`。

使用 `pull-request-branch-name.separator` 指定不同的分隔符。 这可以是 `"-"`、`_` 或 `/` 之一。 连字符必须用引号括住，否则会解释为开始一个空的 YAML 列表。

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

默认情况下，{% data variables.product.prodname_dependabot %} 会在检测到拉取请求有任何更改时自动变基打开的拉取请求。 使用 `rebase-strategy` 可以禁用此行为。

可用的变基策略

- `disabled` 用于禁用自动变基。
- `auto` 用于在检测到更改时使用默认行为并变基打开的拉取请求。

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

若要在执行版本更新时允许 {% data variables.product.prodname_dependabot %} 访问专用包注册表，必须在相关 `updates` 配置中包含 `registries` 设置。 可以通过将 `registries` 设置为 `"*"` 来允许使用所有已定义的注册表。 或者，您可以列出更新可以使用的注册表。 为此，请使用 dependabot.yml 文件的顶级 `registries` 部分中定义的注册表名称。 有关详细信息，请参阅下面的“[专用注册表的配置选项](#configuration-options-for-private-registries)”。

若要允许 {% data variables.product.prodname_dependabot %} 使用 `bundler`、`mix` 和 `pip` 包管理器更新专用注册表中的依赖项，可以选择允许外部代码执行。 有关详细信息，请参阅上面的 [`insecure-external-code-execution`](#insecure-external-code-execution)。

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

使用 `reviewers` 为针对包管理器提出的所有拉取请求指定单个审阅者或审阅者团队。 必须使用完整的团队名称，包括组织，就像你是 @mentioning 团队一样。

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

设置 `weekly` 更新计划时，默认情况下，{% data variables.product.prodname_dependabot %} 会在周一的随机设置时间检查存储库的新版本。 使用 `schedule.day` 可以指定检查更新的备用日期。

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

默认情况下，{% data variables.product.prodname_dependabot %} 在仓库的随机设置时间检查新版本。 使用 `schedule.time` 可以指定检查更新的备用时间（格式：`hh:mm`）。

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

默认情况下，{% data variables.product.prodname_dependabot %} 在仓库的随机设置时间检查新版本。 使用 `schedule.timezone` 可以指定备用时区。 时区标识符必须来自 [iana](https://www.iana.org/time-zones) 维护的时区数据库。 有关详细信息，请参阅 [tz 数据库时区列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)。

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

默认情况下，{% data variables.product.prodname_dependabot %} 会检查默认分支上的清单文件，并对此分支提出版本更新的拉取请求。 使用 `target-branch` 可以为清单文件和拉取请求指定不同的分支。 使用此选项时，此包管理器的设置将不再影响针对安全更新提出的任何拉取请求。

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

使用 `vendor` 选项指示 {% data variables.product.prodname_dependabot %} 在更新依赖项时提供其供应商。 如果使用 `gomod`，请勿使用此选项，因为 {% data variables.product.prodname_dependabot %} 会自动检测此工具的供应。

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

| 程序包管理器 | 供应的依赖项所需的文件路径 | 详细信息 |
  |------------------|-------------------------------|--------|
  | `bundler` | 依赖项必须位于 vendor/cache 目录中。</br>不支持其他文件路径。 | [`bundle cache` 文档](https://bundler.io/man/bundle-cache.1.html) |
  | `gomod` | 无路径要求（依赖项通常位于 vendor 目录中） | [`go mod vendor` 文档](https://golang.org/ref/mod#go-mod-vendor) |


### `versioning-strategy`

{% data variables.product.prodname_dependabot %} 在编辑清单文件来更新版本时，使用以下总体策略：

- 对于 app，版本要求会增加，例如：npm、pip 和 Composer。
- 对于库，版本的范围会扩大，例如： Bundler 和 Cargo。

使用 `versioning-strategy` 选项可以更改受支持的包管理器的此行为。

{% data reusables.dependabot.option-affects-security-updates %}

可用的更新策略

| 选项 | 支持的服务 | 操作 |
|--------|--------------|--------|
| `lockfile-only` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | 仅创建用于更新 lockfiles 的拉取请求。 忽略任何需要包清单更改的新版本。 |
| `auto` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | 遵循上述默认策略。|
| `widen`| `composer`, `npm` | 尽可能放宽版本要求，以包括新旧版本。 |
| `increase`| `bundler`, `composer`, `npm` | 始终增加版本要求以匹配新版本。 |
| `increase-if-necessary` | `bundler`, `composer`, `npm` | 仅当新版本需要时才增加版本要求。 |

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

## <a name="configuration-options-for-private-registries"></a>私人注册的配置选项

顶级 `registries` 项是可选的。 它允许您指定 {% data variables.product.prodname_dependabot %} 可用于访问私人包注册表的身份验证详细信息。

{% note %}

注意：不支持专用网络上防火墙后面的专用注册表。

{% endnote %}

`registries` 项的值是一个关联阵列，其中每个元素由一个标识特定注册表的键和一个为关联阵列的值组成，该值指定访问该注册表所需的设置。 以下 dependabot.yml 文件在文件的 `registries` 部分配置一个标识为 `dockerhub` 的注册表，然后在文件的 `updates` 部分中引用该注册表。

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

您使用以下选项来指定访问设置。 注册表设置必须包含 `type` 和 `url`，并且通常包含 `username` 和 `password` 组合或 `token`。

| 选项&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 说明 |
|:---|:---|
| `type`                     | 识别注册表的类型。 请参阅下面的完整类型列表。 |
| `url`                      | 用于访问此注册表中的依赖项的 URL。 协议是可选的。 如果未指定，则假定为 `https://`。 {% data variables.product.prodname_dependabot %} 根据需要添加或忽略尾随斜线。 |
| `username`                 | {% data variables.product.prodname_dependabot %} 用于访问注册表的用户名。 |
| `password`                 | 引用包含指定用户密码的 {% data variables.product.prodname_dependabot %} 机密。 有关详细信息，请参阅“[管理 Dependabot 的加密机密](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”。 |
| `key`                    | 引用包含此注册表访问密钥的 {% data variables.product.prodname_dependabot %} 机密。 有关详细信息，请参阅“[管理 Dependabot 的加密机密](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”。 |
| `token`                    | 引用包含此注册表访问令牌的 {% data variables.product.prodname_dependabot %} 机密。 有关详细信息，请参阅“[管理 Dependabot 的加密机密](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”。 |
| `replaces-base`            | 对于包含 `type: python-index` 的注册表，如果布尔值为 `true`，pip 会使用指定的 URL 而不是 Python 包索引的基 URL（默认为 `https://pypi.org/simple`）来解析依赖项。 |


每个配置 `type` 都要求提供特定设置。 某些类型允许多种连接方式。 以下部分提供了每个 `type` 应该使用的设置的详细信息。

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

{% note %}

注意：我们不支持 Azure 容器注册表 (ACR)。

{% endnote %}

`docker-registry` 类型支持用户名和密码。

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

`docker-registry` 类型还可用于使用静态 AWS 凭据从 Amazon ECR 中拉取。

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

`npm-registry` 类型支持用户名和密码或者令牌。

使用用户名和密码时，`.npmrc` 的身份验证令牌可能包含 `base64` 编码的 `_password`；但是，{% data variables.product.prodname_dependabot %} 配置文件中引用的密码必须是原始（未编码）密码。

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

`nuget-feed` 类型支持用户名和密码或者令牌。

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

`python-index` 类型支持用户名和密码或者令牌。

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

`rubygems-server` 类型支持用户名和密码或者令牌。

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

{% ifversion fpt or ghec or ghes > 3.4 %} 
## <a name="enabling-support-for-beta-level-ecosystems"></a>启用对 beta 级生态系统的支持

### `enable-beta-ecosystems`

默认情况下，{% data variables.product.prodname_dependabot %} 仅针对完全支持的生态系统更新依赖项清单和锁定文件。 使用 `enable-beta-ecosystems` 标志选择加入尚未正式发布的生态系统更新。

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
