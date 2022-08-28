---
title: 从 Dependabot.com 上传到 GitHub 原生的 Dependabot
intro: 您可以通过合并拉取请求升级到 GitHub 原生的 Dependabot，允许继续更新您的依赖项。
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
redirect_from:
  - /code-security/supply-chain-security/upgrading-from-dependabotcom-to-github-native-dependabot
---

{% warning %}

Dependabot Preview 将在 2021 年 8 月 3 日关闭。 为了继续获取 Dependabot 更新，请在此之前迁移到 GitHub 原生的 Dependabot。

在该日期之后，来自 Dependabot Preview 的任何打开的拉取请求都将保持打开状态，但自动程序本身将不再运行于您的 {% data variables.product.prodname_dotcom %} 帐户和组织中。

{% endwarning %}

### 关于从 Dependabot Preview 升级到 {% data variables.product.prodname_dotcom %} 原生的 {% data variables.product.prodname_dependabot %}

Dependabot Preview 已直接植入 {% data variables.product.prodname_dotcom %}，因此您可以将 {% data variables.product.prodname_dependabot %} 与 {% data variables.product.prodname_dotcom %} 中的所有其他功能一起使用，而无需安装和使用单独的应用程序。 通过迁移到 {% data variables.product.prodname_dotcom %} 原生的 {% data variables.product.prodname_dependabot %}，我们也可以注重将大量令人兴奋的新功能植入 {% data variables.product.prodname_dependabot %}，包括更多的[生态系统更新](https://github.com/github/roadmap/issues/150)、[改进的通知](https://github.com/github/roadmap/issues/133)以及 {% data variables.product.prodname_dependabot %} 对 [{% data variables.product.prodname_ghe_server %}](https://github.com/github/roadmap/issues/86) 和 [{% data variables.product.prodname_ghe_managed %}](https://github.com/github/roadmap/issues/135) 的支持。

### Dependabot Preview 与 {% data variables.product.prodname_dotcom %} 原生 {% data variables.product.prodname_dependabot %} 之间的差异

虽然大多数 Dependabot Preview 功能存在于 {% data variables.product.prodname_dotcom %} 原生 {% data variables.product.prodname_dependabot %} 中，但仍有几个功能不可用：
- **实时更新：** 我们希望将来恢复这些功能。 现在，您可以每天运行 {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot %}，以便在发布后的一天内捕获新包。
- **PHP 环境变量注册表：** 对于依赖 `ACF_PRO_KEY` 环境变量的项目，您也许能够提供 Advanced Custom Fields 插件的许可副本。 相关示例请参阅 [dependabot/acf-php-example](https://github.com/dependabot/acf-php-example#readme)。 对于其他环境变量，您可以使用 {% data variables.product.prodname_actions %} 从这些注册表中获取依赖项。
- **自动合并：**我们始终建议您在合并依赖项之前先验证它们；因此，在可预见的将来将不支持自动合并。 对于那些已审核依赖项或仅使用内部依赖项的用户，我们建议添加第三方自动合并应用程序，或设置用于合并的 GitHub Actions。

在 {% data variables.product.prodname_dotcom %}-原生 {% data variables.product.prodname_dependabot %} 中，您可以使用配置文件配置所有版本更新。 此文件类似于 Dependabot Preview 配置文件，其中包含一些将自动包含在升级拉取请求中的更改和改进。 有关升级拉取请求的更多信息，请参阅“[升级到 GitHub 原生 Dependabot](/code-security/supply-chain-security/upgrading-from-dependabotcom-to-github-native-dependabot#upgrading-to-github-native-dependabot)”。

要查看以前在 Dependabot.com 仪表板上的 {% data variables.product.prodname_dotcom %}-原生 {% data variables.product.prodname_dependabot %} 的更新日志：

  1. 导航到仓库的 **Insights（洞察）**页面。
  2. 单击左侧的 **Dependency graph（依赖项图）**。
  3. 单击 **{% data variables.product.prodname_dependabot %}**。

有关 {% data variables.product.prodname_dotcom %}-原生 {% data variables.product.prodname_dependabot %} 版本更新的更多信息，请参阅“[关于 Dependabot 版本更新](/code-security/supply-chain-security/about-dependabot-version-updates)”。

### 升级到 {% data variables.product.prodname_dotcom %}-原生 {% data variables.product.prodname_dependabot %}

从 Depabot Preview 升级到 {% data variables.product.prodname_dotcom %}-原生 {% data variables.product.prodname_dependabot %} 需要您合并仓库中的*升级到 GitHub-原生 Dependabot* 拉取请求。 此拉取请求包括 {% data variables.product.prodname_dotcom %}-原生 {% data variables.product.prodname_dependabot %} 所需的更新配置文件。

如果使用私有仓库，则必须在组织的安全和分析设置中授予 Dependabot 访问这些仓库的权限。 更多信息请参阅“[允许 Dependabot 访问私有依赖项](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)”。 以前，Dependabot 可以访问组织内的所有仓库，但是我们实施了此更改，因为对 Dependabot 使用最小权限原则更为安全。

如果使用私人注册表，则必须将现有的 Dependabot Preview 密钥添加到仓库或组织的“ Dependabot 密钥”中。 更多信息请参阅“[管理 Dependabot 的加密密码](/code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot)”。

如果您在迁移方面有任何问题或需要帮助，您可以在 [dependabot/dependabot-core](https://github.com/dependabot/dependabot-core/issues/new?assignees=%40dependabot%2Fpreview-migration-reviewers&labels=E%3A+preview-migration&template=migration-issue.md&title=) 仓库中查看或打开议题。
