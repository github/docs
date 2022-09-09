---
title: 排查 Dependabot 错误
intro: '有时，{% data variables.product.prodname_dependabot %} 无法提出拉取请求以更新依赖项。 您可以查看错误并取消阻止 {% data variables.product.prodname_dependabot %}。'
shortTitle: Troubleshoot errors
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Pull requests
  - Troubleshooting
  - Errors
  - Dependencies
ms.openlocfilehash: 74c614d2bf4bc1dadb3b5be90b743d46b1f869e7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146455475'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## 关于 {% data variables.product.prodname_dependabot %} 错误

{% data reusables.dependabot.pull-request-introduction %}

如果有任何因素阻止 {% data variables.product.prodname_dependabot %} 提出拉取请求，则报告为错误。

## 使用 {% data variables.product.prodname_dependabot_security_updates %} 调查错误

当 {% data variables.product.prodname_dependabot %} 被阻止创建拉取请求以修复 {% data variables.product.prodname_dependabot %} 警报时，它会在警报上发布错误消息。 {% data variables.product.prodname_dependabot_alerts %} 视图显示尚未解决的所有警报列表。 若要访问警报视图，请单击存储库“安全”选项卡上的“{% data variables.product.prodname_dependabot_alerts %}” 。 如果旨在修复有漏洞依赖项的拉取请求已生成，则警报将包括指向该拉取请求的链接。

![{% data variables.product.prodname_dependabot_alerts %} 视图显示拉取请求链接](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

有多个原因可能导致警报中没有拉取请求链接：

1. {% data variables.product.prodname_dependabot_security_updates %} 未对仓库启用。
{% ifversion GH-advisory-db-supports-malware %}
1. 警报适用于恶意软件，并且包没有安全版本。
{% endif %}
1. 警报针对未在锁文件中显式定义的间接或过渡依赖项。
1. 某个错误阻止了 {% data variables.product.prodname_dependabot %} 创建拉取请求。

如果某个错误阻止了 {% data variables.product.prodname_dependabot %} 创建拉取请求，您可以通过单击警报来显示错误详情。

## 使用 {% data variables.product.prodname_dependabot_version_updates %} 调查错误

当 {% data variables.product.prodname_dependabot %} 被阻止创建拉取请求以更新生态系统中的依赖项时，它将在清单文件中发布错误图标。 由 {% data variables.product.prodname_dependabot %} 管理的清单文件列于 {% data variables.product.prodname_dependabot %} 选项卡上。若要访问此选项卡，请在存储库的“见解”选项卡上单击“依赖项关系图”，然后单击“{% data variables.product.prodname_dependabot %}”选项卡  。

![{% data variables.product.prodname_dependabot %} 视图显示错误](/assets/images/help/dependabot/dependabot-tab-view-error.png)

{% ifversion fpt or ghec %}

若要查看任何清单文件的日志文件，请单击“上次检查时间以前”链接。 当您显示一个带有错误符号的清单(例如上面截图中的 Maven）的日志文件时，也会显示任何错误。

![{% data variables.product.prodname_dependabot %} 版本更新错误和日志 ](/assets/images/help/dependabot/dependabot-version-update-error.png)

{% else %}

若要查看任何清单文件的日志，请单击“上次检查时间以前”链接，然后单击“查看日志” 。

![{% data variables.product.prodname_dependabot %} 版本更新错误和日志 ](/assets/images/enterprise/3.3/dependabot/dependabot-version-update-error.png)

{% endif %}

## 了解 {% data variables.product.prodname_dependabot %} 错误

安全更新拉取请求用于将有漏洞依赖项升级到包含漏洞修复的最低版本。 而版本更新拉取请求用于将依赖项升级到包清单文件和 {% data variables.product.prodname_dependabot %} 配置文件允许的最新版本。 因此，某些错误特定于一种类型的更新。

### {% data variables.product.prodname_dependabot %} 无法将依赖项更新到无漏洞版本

仅限安全更新。 {% data variables.product.prodname_dependabot %} 无法创建拉取请求以将有漏洞依赖项更新到安全版本，而又不破坏此存储库依赖项关系图中的其他依赖项。

每个具有依赖项的应用程序都有一个依赖关系图，即应用程序直接或间接依赖的每个包版本的定向非循环图。 每次更新依赖项时，必须解决此图，否则将无法构建应用程序。 当生态系统具有深刻而复杂的依赖关系图（例如 npm 和 RubyGems）时，如果不升级整个生态系统，往往难以升级单个依赖项。

避免这个问题的最佳办法是跟上最新发布的版本，例如启用版本更新。 这增加了通过不破坏依赖关系图的简单升级解决一个依赖项中的漏洞的可能性。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot %} 版本更新](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”。

### {% data variables.product.prodname_dependabot %} 无法更新到所需的版本，因为已经为最新版本打开了拉取请求

仅限安全更新。 {% data variables.product.prodname_dependabot %} 不会创建拉取请求以将有漏洞依赖项更新到安全版本，因为已存在更新此依赖项的打开拉取请求。 如果在一个依赖项中检测到漏洞，但已经存在将该依赖项更新到最新版本的打开拉取请求时，您将会看到此错误。

有两个选项：您可以查看打开的拉取请求，确认更改安全后合并它，或者关闭该拉取请求并触发新的安全更新拉取请求。 有关详细信息，请参阅“[手动触发 {% data variables.product.prodname_dependabot %} 拉取请求](#triggering-a-dependabot-pull-request-manually)”。

### {% data variables.product.prodname_dependabot %} 在更新过程中超时

{% data variables.product.prodname_dependabot %} 评估所需更新和准备拉取请求所用的时间超过了允许的最大时间。 此错误通常只出现在具有许多清单文件的大型存储库中，例如具有数百个 package.json 文件的 npm 或 yarn 单存储库项目。 对 Composer 生态系统的更新也需要较长的时间来评估，可能会超时。

此错误难以解决。 如果版本更新超时，可以使用 `allow` 参数来指定更新最重要的依赖项，或者使用 `ignore` 参数从更新中排除某些依赖项。 更新配置可能使 {% data variables.product.prodname_dependabot %} 能够在规定时间内检查版本更新并生成请求。

如果安全更新超时，您可以通过保持依赖项更新（例如，启用版本更新）来减少更新需要。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot %} 版本更新](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”。

### {% data variables.product.prodname_dependabot %} 无法再打开拉取请求

{% data variables.product.prodname_dependabot %} 生成的打开拉取请求数量存在限制。 如果达到此限制，将无法打开新的拉取请求，并报告此错误。 解决此错误的最佳方法是审查并合并一些打开的拉取请求。

安全性和版本更新拉取请求有各自的限制，因此打开版本更新拉取请求不会阻止安全更新拉取请求的创建。 安全更新拉取请求的限制是 10。 默认情况下，版本更新的限制为 5，但你可以使用配置文件中的 `open-pull-requests-limit` 参数来更改它。 有关详细信息，请参阅“[dependabot.yml 文件的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)”。

解决此错误的最佳方法是合并或关闭一些现有拉取请求，然后手动触发新的拉取请求。 有关详细信息，请参阅“[手动触发 {% data variables.product.prodname_dependabot %} 拉取请求](#triggering-a-dependabot-pull-request-manually)”。

### {% data variables.product.prodname_dependabot %} 无法解析或访问您的依赖项

如果 {% data variables.product.prodname_dependabot %} 尝试检查是否需要更新仓库中的依赖项引用，但无法访问一个或多个依赖项文件，则操作将失败，并返回错误消息“{% data variables.product.prodname_dependabot %} can't resolve your LANGUAGE dependency files（无法解析语言依赖项文件）”。 API 错误类型为 `git_dependencies_not_reachable`

同样，如果 {% data variables.product.prodname_dependabot %} 不能访问依赖项所在的私有包注册表，则会产生以下错误之一：

*   “Dependabot 无法访问专用包注册表中的依赖项”<br>
   （API 错误类型：`private_source_not_reachable`）
*   “Dependabot 无法对专用包注册表进行身份验证”<br>
   （API 错误类型：`private_source_authentication_failure`）
*   “Dependabot 在等待专用包注册表时超时”<br>
   （API 错误类型：`private_source_timed_out`）
*   “Dependabot 无法验证专用包注册表的证书”<br>
   （API 错误类型：`private_source_certificate_failure`）

要让 {% data variables.product.prodname_dependabot %} 成功更新依赖项引用，请确保所有引用依赖项都托管在可访问的位置。 

仅限版本更新。 {% data reusables.dependabot.private-dependencies-note %} 此外，{% data variables.product.prodname_dependabot %} 不支持所有包管理器的 {% data variables.product.prodname_dotcom %} 私有依赖项。 有关详细信息，请参阅“[关于 Dependabot 版本更新](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)”。

## 手动触发 {% data variables.product.prodname_dependabot %} 拉取请求

如果取消阻止了 {% data variables.product.prodname_dependabot %}，您可以手动触发新的尝试来创建拉取请求。

- 安全更新 - 显示 {% data variables.product.prodname_dependabot %} 警报，查看你修复的错误，然后单击“创建 {% data variables.product.prodname_dependabot %} 安全更新” 。
- 版本更新 - 在存储库的“见解”选项卡上单击“依赖项关系图”，然后单击“Dependabot”选项卡   。单击“上次检查时间之前”，查看上次检查版本更新期间 {% data variables.product.prodname_dependabot %} 生成的日志文件。 单击“检查更新”。

## 延伸阅读

- “[依赖项关系图疑难解答](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)”。
- “[漏洞依赖项检测疑难解答](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)”
