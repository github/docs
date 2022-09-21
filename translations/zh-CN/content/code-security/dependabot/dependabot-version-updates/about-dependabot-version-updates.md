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
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates
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
shortTitle: Dependabot version updates
ms.openlocfilehash: 56bac2fbf2fb42a418cffbd478aa526803b124d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145186082'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## 关于 {% data variables.product.prodname_dependabot_version_updates %}

{% data variables.product.prodname_dependabot %} 负责维护您的依赖项。 您可以使用它来确保仓库自动跟上它所依赖的包和应用程序的最新版本。

通过将 `dependabot.yml` 配置文件签入存储库，可启用 {% data variables.product.prodname_dependabot_version_updates %}。 配置文件指定存储在仓库中的清单或其他包定义文件的位置。 {% data variables.product.prodname_dependabot %} 使用此信息检查过时的包和应用程序。 {% data variables.product.prodname_dependabot %} 通过查看依赖项的语义版本控制 ([semver](https://semver.org/)) 来确定是否存在新版本的依赖项，从而决定它是否应该更新到该版本。 对于某些软件包管理器，{% data variables.product.prodname_dependabot_version_updates %} 也支持供应。 供应（或缓存）的依赖项是检入仓库中特定目录的依赖项，而不是在清单中引用的依赖项。 即使包服务器不可用，供应的依赖项在生成时也可用。 {% data variables.product.prodname_dependabot_version_updates %} 可以配置为检查为新版本供应的依赖项，并在必要时更新它们。 

当 {% data variables.product.prodname_dependabot %} 发现过时的依赖项时，它将引发一个拉取请求，用于将清单更新到依赖项的最新版本。 对于供应和依赖项，{% data variables.product.prodname_dependabot %} 提出拉取请求以直接将过时的依赖项替换为新版本。 检查测试是否通过，查看拉取请求摘要中包含的更改日志和发行说明，然后合并它。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot %} 版本更新](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”。

如果启用“安全更新”，{% data variables.product.prodname_dependabot %} 还将引发用于更新易受攻击的依赖项的拉取请求。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-tos %}

## {% data variables.product.prodname_dependabot %} 拉取请求的频率

在配置文件中指定检查每个生态系统的新版本的频率：每日、每周或每月。

{% data reusables.dependabot.initial-updates %}

如果您启用了安全更新，有时会看到额外的安全更新拉取请求。 这些请求是由依赖于默认分支的 {% data variables.product.prodname_dependabot %} 警报触发的。 {% data variables.product.prodname_dependabot %} 自动提出拉取请求以更新有漏洞的依赖项。

## 支持的仓库和生态系统
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

您可以为包含其中一个受支持包管理器的依赖项清单或锁定文件的仓库配置版本更新。 对于某些软件包管理器，您也可以配置依赖项的供应。 有关详细信息，请参阅“[dependabot.yml 文件的配置选项](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#vendor)”。
{% note %}

{% data reusables.dependabot.private-dependencies-note %} 

{% data variables.product.prodname_dependabot %} 不支持所有包管理器的私有 {% data variables.product.prodname_dotcom %} 依赖项。 详见下表。

{% endnote %}

{% data reusables.dependabot.supported-package-managers %}

如果您的仓库已使用集成进行依赖项管理，则在启用 {% data variables.product.prodname_dependabot %} 前需要禁用此集成。 {% ifversion fpt or ghec %} 有关详细信息，请参阅“[关于集成](/github/customizing-your-github-workflow/about-integrations)”。{% endif %}

## 关于 {% data variables.product.prodname_dependabot %} 版本更新通知

您可以按 {% data variables.product.company_short %} 筛选通知，以显示由 {% data variables.product.prodname_dependabot %}创建的拉取请求的通知。 有关详细信息，请参阅“[管理收件箱中的通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)”。
