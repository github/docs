---
title: 启用和禁用版本更新
intro: '您可以配置仓库，以便 {% data variables.product.prodname_dependabot %} 自动更新您使用的包。'
permissions: '拥有仓库写入权限的用户可以启用或禁用仓库的 {% data variables.product.prodname_dependabot_version_updates %}。'
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note-no-link %}

### 关于依赖项的版本更新

通过将 *dependabot.yml* 配置文件检入仓库的 `.github` 目录，可启用 {% data variables.product.prodname_dependabot_version_updates %}。 {% data variables.product.prodname_dependabot %} then raises pull requests to keep the dependencies you configure up-to-date. 对于您想更新的每个包管理器的依赖项，必须指定包清单文件的位置及为文件所列的依赖项检查更新的频率。 For information about enabling security updates, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."

{% data reusables.dependabot.initial-updates %} 更多信息请参阅“[自定义依赖项更新](/github/administering-a-repository/customizing-dependency-updates)。”

### 启用 {% data variables.product.prodname_dependabot_version_updates %}

{% note %}

{% data reusables.dependabot.private-dependencies %}

{% endnote %}

{% data reusables.dependabot.create-dependabot-yml %}
1. 使用 `package-ecosystem` 指定要监视的包管理器。
1. 对于每个包管理器，可使用：
    - `directory` 指定清单或其他定义文件的位置。
    - `schedule.interval` 指定检查新版本的频率。
{% data reusables.dependabot.check-in-dependabot-yml %}

#### 示例 *dependabot.yml* 文件

下面的示例 *dependabot.yml* 文件将为两个包管理器配置版本更新：npm 和 Docker。 当此文件被检入时，{% data variables.product.prodname_dependabot %} 会检查默认分支上的清单文件中是否有过时的依赖项。 如果发现过时的依赖项，将针对默认分支提出拉取请求，以更新依赖项。

```yaml
# Basic dependabot.yml file with
# minimum configuration for two package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"

  # Enable version updates for Docker
  - package-ecosystem: "docker"
    # Look for a `Dockerfile` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
```

在上面的示例中，如果 Docker 依赖项已过时很久，您可能会先执行 `daily` 安排，直到这些依赖项达到最新状态，然后降回每周安排。

#### 在复刻上启用版本更新

如果您想在复刻上启用版本更新，还需要执行一个额外的步骤。 存在 *dependabot.yml* 配置文件时，不会自动启用版本更新。 这样可确保复刻所有者在从原始仓库拉取变更时不会无意中启用版本更新，包括 *dependabot.yml* 配置文件。

在复刻上，也需要显式启用 {% data variables.product.prodname_dependabot %}。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
5. 在“Enable Dependabot（启用 Dependabot）”下，单击 **Enable Dependabot（启用 Dependabot）**。

### 检查版本更新的状态

启用版本更新后，将在仓库的依赖关系图中发现新的 **Dependabot** 选项卡。 This tab shows which package managers {% data variables.product.prodname_dependabot %} is configured to monitor and when {% data variables.product.prodname_dependabot %} last checked for new versions.

![仓库洞察选项卡，依赖关系图，Dependabot 选项卡](/assets/images/help/dependabot/dependabot-tab-view-beta.png)

更多信息请参阅“[列出为版本更新配置的依赖项](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)。”

### 禁用 {% data variables.product.prodname_dependabot_version_updates %}

您可以通过从仓库删除 *dependabot.yml* 文件完全禁用版本更新。 更多情况下，您会希望临时为一个或多个依赖项或包管理器禁用更新。

- 包管理器：通过设置 `open-pull-requests-limit: 0` 或为配置文件中的相关 `package-ecosystem` 添加注释执行禁用。
- 特定依赖项：通过为您想从更新中排除的包或应用程序添加 `ignore` 属性执行禁用。

禁用依赖项时，可以使用通配符匹配一组相关库。 您也可以指定要排除的版本。 如果您需要阻止库更新，利用待处理的工作支持对 API 进行重大变更，但又希望您使用的版本得到所有安全修复，此方法将特别有用。

#### 为某些依赖项禁用版本更新的示例

下面的示例 *dependabot.yml* 文件包括禁用某些依赖项的更新，同时允许其他更新继续进行的不同方式的示例。

```yaml
# dependabot.yml file with updates
# disabled for Docker and limited for npm

version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Overwrite any ignores created using `@dependabot ignore` commands
    ignore:
      # Ignore updates to packages that start 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
```

{% data reusables.dependabot.warning-ignore-option %}

有关检查现有忽略首选项的更多信息，请参阅“[依赖项更新的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)。”
