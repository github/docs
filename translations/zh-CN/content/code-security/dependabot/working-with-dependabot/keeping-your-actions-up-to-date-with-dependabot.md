---
title: 使用 Dependabot 保持操作的最新状态
intro: '您可以使用 {% data variables.product.prodname_dependabot %} 来确保您使用的操作更新到最新版本。'
redirect_from:
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
shortTitle: Auto-update actions
ms.openlocfilehash: 804660684230d8a0fb716b69644aab851a4c247b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107723'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## 关于操作的 {% data variables.product.prodname_dependabot_version_updates %}

操作通常使用漏洞修复和新功能进行更新，以使自动化流程更可靠、更快速、更安全。 为 {% data variables.product.prodname_actions %} 启用 {% data variables.product.prodname_dependabot_version_updates %} 时，{% data variables.product.prodname_dependabot %} 将帮助确保存储库 workflow.yml 文件中操作的引用保持最新。 对于文件中的每个操作，{% data variables.product.prodname_dependabot %} 根据最新版本检查操作的引用（通常是与操作关联的版本号或提交标识符）。 如果操作有更新的版本，{% data variables.product.prodname_dependabot %} 将向你发送拉取请求，要求将工作流程文件中的引用更新到最新版本。 有关 {% data variables.product.prodname_dependabot_version_updates %} 的详细信息，请参阅[关于 {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)。 有关为 {% data variables.product.prodname_actions %} 配置工作流程的更多信息，请参阅[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)。
  
{% data reusables.actions.workflow-runs-dependabot-note %}

## 为操作启用 {% data variables.product.prodname_dependabot_version_updates %}

可配置 {% data variables.product.prodname_dependabot_version_updates %} 来维护你的操作以及所依赖的库和包。 

1. 如果你已经为其他生态系统或包管理器启用 {% data variables.product.prodname_dependabot_version_updates %}，只需打开现有的 dependabot.yml 文件。 否则，在存储库的 `.github` 目录中创建一个 dependabot.yml 配置文件。 有关详细信息，请参阅“[配置 Dependabot 版本更新](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)”。
1. 指定 `"github-actions"` 为要监视的 `package-ecosystem`。
1. 设置 `directory` 为 `"/"`，检查 `.github/workflows` 中的工作流文件。
1. 设置 `schedule.interval` 以指定检查新版本的频率。
{% data reusables.dependabot.check-in-dependabot-yml %} 如果已编辑现有文件，请保存所做的更改。

您也可以在复刻上启用 {% data variables.product.prodname_dependabot_version_updates %}。 有关详细信息，请参阅[配置 {% data variables.product.prodname_dependabot %} 版本更新](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-version-updates-on-forks)。

### 例如用于 {% data variables.product.prodname_actions %} 的 dependabot.yml 文件

下面的示例 dependabot.yml 文件配置 {% data variables.product.prodname_actions %} 的版本更新。 `directory` 必须设置为 `"/"` 以检查 `.github/workflows` 中的工作流文件。 `schedule.interval` 设置为 `"weekly"`。 在该文件被检入或更新后，{% data variables.product.prodname_dependabot %} 将检查您的操作的新版本。 {% data variables.product.prodname_dependabot %} 在发现任何过时的操作时，将会提出版本更新的拉取请求。 在初始版本更新后，{% data variables.product.prodname_dependabot %} 将继续每周检查一次过时的操作版本。

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```

## 为操作配置 {% data variables.product.prodname_dependabot_version_updates %}

为操作启用 {% data variables.product.prodname_dependabot_version_updates %} 时，必须指定 `package-ecosystem`、`directory` 和 `schedule.interval` 的值。 您可以设置更多可选属性来进一步自定义版本更新。 有关详细信息，请参阅[dependabot.yml 文件的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates)。

## 延伸阅读

- [关于 GitHub Actions](/actions/getting-started-with-github-actions/about-github-actions)
