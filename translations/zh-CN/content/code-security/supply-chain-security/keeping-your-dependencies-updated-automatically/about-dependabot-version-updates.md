---
title: 关于 Dependabot 版本更新
intro: '您可以使用 {% data variables.product.prodname_dependabot %} 来确保您使用的包更新到最新版本。'
redirect_from:
  - /github/administering-a-repository/about-dependabot
  - /github/administering-a-repository/about-github-dependabot
  - /github/administering-a-repository/about-github-dependabot-version-updates
  - /github/administering-a-repository/about-dependabot-version-updates
  - /code-security/supply-chain-security/about-dependabot-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/upgrading-from-dependabotcom-to-github-native-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependabot 版本更新
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## 关于 {% data variables.product.prodname_dependabot_version_updates %}

{% data variables.product.prodname_dependabot %} 负责维护您的依赖项。 您可以使用它来确保仓库自动跟上它所依赖的包和应用程序的最新版本。

通过将配置文件检入仓库，可启用 {% data variables.product.prodname_dependabot_version_updates %}。 配置文件指定存储在仓库中的清单或其他包定义文件的位置。 {% data variables.product.prodname_dependabot %} 使用此信息来检查过时的软件包和应用程序。 {% data variables.product.prodname_dependabot %} 确定依赖项是否有新版本，它通过查看依赖的语义版本 ([semver](https://semver.org/)) 来决定是否应更新该版本。 对于某些软件包管理器，{% data variables.product.prodname_dependabot_version_updates %} 也支持供应。 供应（或缓存）的依赖项是检入仓库中特定目录的依赖项，而不是在清单中引用的依赖项。 即使包服务器不可用，供应的依赖项在生成时也可用。 {% data variables.product.prodname_dependabot_version_updates %} 可以配置为检查为新版本供应的依赖项，并在必要时更新它们。

当 {% data variables.product.prodname_dependabot %} 发现过时的依赖项时，它会发起拉取请求以将清单更新到依赖项的最新版本。 对于供应和依赖项，{% data variables.product.prodname_dependabot %} 提出拉取请求以直接将过时的依赖项替换为新版本。 检查测试是否通过，查看拉取请求摘要中包含的更改日志和发行说明，然后合并它。 更多信息请参阅“[启用和禁用 {% data variables.product.prodname_dependabot %} 版本更新](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”。

如果启用_安全更新_，{% data variables.product.prodname_dependabot %} 还会发起拉取请求以更新易受攻击依赖项。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-tos %}

## {% data variables.product.prodname_dependabot %} 拉取请求的频率

在配置文件中指定检查每个生态系统的新版本的频率：每日、每周或每月。

{% data reusables.dependabot.initial-updates %}

如果您启用了安全更新，有时会看到额外的安全更新拉取请求。 这些由默认分支上依赖项的 {% data variables.product.prodname_dependabot %} 警报所触发。 {% data variables.product.prodname_dependabot %} 自动提出拉取请求以更新有漏洞的依赖项。

## 支持的仓库和生态系统
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported repositories or ecosystems. -->

您可以为包含其中一个受支持包管理器的依赖项清单或锁定文件的仓库配置版本更新。 对于某些软件包管理器，您也可以配置依赖项的供应。 更多信息请参阅“[依赖项更新的配置选项](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#vendor)。”
{% note %}

{% data reusables.dependabot.private-dependencies-note %}

{% data variables.product.prodname_dependabot %} 不支持所有包管理器的私有 {% data variables.product.prodname_dotcom %} 依赖项。 详见下表。

{% endnote %}

{% data reusables.dependabot.supported-package-managers %}

如果您的仓库已使用集成进行依赖项管理，则在启用 {% data variables.product.prodname_dependabot %} 前需要禁用此集成。 {% ifversion fpt or ghec %}更多信息请参阅“[关于集成](/github/customizing-your-github-workflow/about-integrations)”。{% endif %}

## 关于 {% data variables.product.prodname_dependabot %} 版本更新通知

您可以按 {% data variables.product.company_short %} 筛选通知，以显示由 {% data variables.product.prodname_dependabot %}创建的拉取请求的通知。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)”。
