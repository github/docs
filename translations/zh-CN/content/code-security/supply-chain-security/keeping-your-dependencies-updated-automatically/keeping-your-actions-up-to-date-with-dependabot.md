---
title: 使用 Dependabot 保持操作的最新状态
intro: '您可以使用 {% data variables.product.prodname_dependabot %} 来确保您使用的操作更新到最新版本。'
redirect_from:
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-actions-up-to-date-with-dependabot
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
---

### 关于操作的 {% data variables.product.prodname_dependabot_version_updates %}

操作通常使用漏洞修复和新功能进行更新，以使自动化流程更可靠、更快速、更安全。 为 {% data variables.product.prodname_actions %} 启用 {% data variables.product.prodname_dependabot_version_updates %} 时，{% data variables.product.prodname_dependabot %} 将帮助确保仓库 *workflow.yml* 文件中操作的引用保持最新。 对于文件中的每个操作，{% data variables.product.prodname_dependabot %} 根据最新版本检查操作的引用（通常是与操作关联的版本号或提交标识符）。 如果操作有更新的版本，{% data variables.product.prodname_dependabot %} 将向您发送拉取请求，要求将工作流程文件中的引用更新到最新版本。 有关 {% data variables.product.prodname_dependabot_version_updates %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)”。 有关为 {% data variables.product.prodname_actions %} 配置工作流程的更多信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

{% data reusables.actions.workflow-runs-dependabot-note %}

### 为操作启用 {% data variables.product.prodname_dependabot_version_updates %}

{% data reusables.dependabot.create-dependabot-yml %} 如果您已经为其他生态系统或包管理器启用 {% data variables.product.prodname_dependabot_version_updates %}，只需打开现有的 *dependabot.yml* 文件。
1. 将 `"github-actions"` 指定为要监控的 `package-ecosystem`。
1. 将 `directory` 设置为 `"/"` 以检查 `.github/workflows` 中的工作流程文件。
1. 设置 `schedule.interval` 指定检查新版本的频率。
{% data reusables.dependabot.check-in-dependabot-yml %} 如果已编辑现有文件，请保存所做的更改。

您也可以在复刻上启用 {% data variables.product.prodname_dependabot_version_updates %}。 更多信息请参阅“[启用和禁用版本更新](/github/administering-a-repository/enabling-and-disabling-version-updates#enabling-version-updates-on-forks)。”

#### 例如用于 {% data variables.product.prodname_actions %} 的 *dependabot.yml* 文件

下面的示例 *dependabot.yml* 文件配置为 {% data variables.product.prodname_actions %} 的版本更新。 `directory` 必须设置为 `"/"` 才可检查 `.github/workflows` 中的工作流程文件。 `schedule.interval` 设置为 `"daily"`。 在该文件被检入或更新后，{% data variables.product.prodname_dependabot %} 将检查您的操作的新版本。 {% data variables.product.prodname_dependabot %} 在发现任何过时的操作时，将会提出版本更新的拉取请求。 在初始版本更新后， {% data variables.product.prodname_dependabot %} 将继续每天检查一次过时的操作。

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every weekday
      interval: "daily"
```

### 为操作配置 {% data variables.product.prodname_dependabot_version_updates %}

为操作启用 {% data variables.product.prodname_dependabot_version_updates %} 时，必须指定 `package-ecosystem`、`directory` 和 `schedule.interval` 的值。 您可以设置更多可选属性来进一步自定义版本更新。 更多信息请参阅“[依赖项更新的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates)。”

### 延伸阅读

- "[关于 GitHub Actions](/actions/getting-started-with-github-actions/about-github-actions)"
