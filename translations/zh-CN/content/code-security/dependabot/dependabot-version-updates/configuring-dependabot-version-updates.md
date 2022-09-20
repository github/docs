---
title: 配置 Dependabot 版本更新
intro: '您可以配置仓库，以便 {% data variables.product.prodname_dependabot %} 自动更新您使用的包。'
permissions: 'People with write permissions to a repository can enable or disable {% data variables.product.prodname_dependabot_version_updates %} for the repository.'
redirect_from:
  - /github/administering-a-repository/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure version updates
ms.openlocfilehash: ae55859e05e3c9e116bc9ee5679dfc85d31121f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180005'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About version updates for dependencies".-->
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## 关于依赖项的版本更新

通过将 dependabot.yml 配置文件签入存储库的 `.github` 目录，可启用 {% data variables.product.prodname_dependabot_version_updates %}。 {% data variables.product.prodname_dependabot %} 然后提出拉取请求，使您配置的依赖项保持最新。 对于您想更新的每个包管理器的依赖项，必须指定包清单文件的位置及为文件所列的依赖项检查更新的频率。 若要了解如何启用安全更新，请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)”。

{% data reusables.dependabot.initial-updates %} 有关详细信息，请参阅“[自定义依赖项更新](/github/administering-a-repository/customizing-dependency-updates)”。

{% data reusables.dependabot.private-dependencies-note %} 此外，{% data variables.product.prodname_dependabot %} 不支持所有包管理器的 {% data variables.product.prodname_dotcom %} 私有依赖项。 有关详细信息，请参阅“[关于 Dependabot 版本更新](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)”和“[{% data variables.product.prodname_dotcom %} 语言支持](/github/getting-started-with-github/github-language-support)”。

## 启用 {% data variables.product.prodname_dependabot_version_updates %}

通过将 dependabot.yml 配置文件提交到存储库，可启用 {% data variables.product.prodname_dependabot_version_updates %}。 {% ifversion dependabot-settings-update-37 %}如果在设置页中启用该功能，GitHub 会创建一个你可以编辑的基本文件，否则你可以使用任何文件编辑器创建该文件。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. 在“代码安全和分析”下，在“{% data variables.product.prodname_dependabot_version_updates %}”右侧，单击“启用”以打开存储库 `.github` 目录中的基本 dependabot.yml 配置文件。
{% else %}
1. 在存储库的 `.github` 目录中创建一个 dependabot.yml 配置文件。 {% endif %}
1. 添加 `version`。 
1. （可选）如果专用注册表中包含依赖项，请添加包含身份验证详细信息的 `registries` 部分。 
1. 添加 `updates` 部分，并输入希望 {% data variables.product.prodname_dependabot %} 监视的每个包管理器的条目。
1. 对于每个包管理器，可使用：
    - `package-ecosystem` 指定包管理器。
    - `directory` 指定清单或其他定义文件的位置。
    - `schedule.interval` 指定检查新版本的频率。
{% data reusables.dependabot.check-in-dependabot-yml %}

有关所有配置选项的信息，请参阅“[dependabot.yml 文件的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates)”。

### 示例 dependabot.yml 文件

下面的示例 dependabot.yml 文件将为 npm 和 Docker 这两个包管理器配置版本更新。 当此文件被检入时，{% data variables.product.prodname_dependabot %} 会检查默认分支上的清单文件中是否有过时的依赖项。 如果发现过时的依赖项，将针对默认分支提出拉取请求，以更新依赖项。

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

在上述示例中，如果 Docker 依赖项已过时很久，你可能需要先执行 `daily` 计划，直到这些依赖项达到最新状态，然后降回每周计划。

### 在复刻上启用版本更新

如果您想在复刻上启用版本更新，还需要执行一个额外的步骤。 存在 dependabot.yml 配置文件时，不会自动启用版本更新。 这样可确保分支所有者在从原始存储库拉取更改（包括 dependabot.yml 配置文件）时，不会无意中启用版本更新。 

在复刻上，也需要显式启用 {% data variables.product.prodname_dependabot %}。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
5. 在“启用 Dependabot”下，单击“启用 Dependabot”。

## 检查版本更新的状态

启用版本更新后，将填充存储库依赖项关系图中的 Dependabot 选项卡。 此选项卡显示配置了哪些要监视的包管理器 {% data variables.product.prodname_dependabot %} 以及 {% data variables.product.prodname_dependabot %} 上次检查新版本的时间。

![仓库洞察选项卡，依赖关系图，Dependabot 选项卡](/assets/images/help/dependabot/dependabot-tab-view.png)

相关信息，请参阅“[列出为版本更新配置的依赖项](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)”。

## 禁用 {% data variables.product.prodname_dependabot_version_updates %}

可通过从存储库中删除 dependabot.yml 文件来完全禁用版本更新。 更多情况下，您会希望临时为一个或多个依赖项或包管理器禁用更新。

- 包管理器：若要禁用，可设置 `open-pull-requests-limit: 0` 或注释掉配置文件中的相关 `package-ecosystem` 内容。
- 特定依赖项：若要禁用，可为你想从更新中排除的包或应用程序添加 `ignore` 属性。

禁用依赖项时，可以使用通配符匹配一组相关库。 您也可以指定要排除的版本。 如果您需要阻止库更新，利用待处理的工作支持对 API 进行重大变更，但又希望您使用的版本得到所有安全修复，此方法将特别有用。

### 为某些依赖项禁用版本更新的示例

下面的示例 dependabot.yml 文件中包含几个示例，它们显示了禁用某些依赖项的更新，同时允许其他更新继续进行的不同方式。

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
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
      # For all packages, ignore all patch updates
      - dependency-name: "*"
        update-types: ["version-update:semver-patch"]
```

若要详细了解如何检查现有“忽略”首选项，请参阅“[dependabot.yml 文件的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)”。
