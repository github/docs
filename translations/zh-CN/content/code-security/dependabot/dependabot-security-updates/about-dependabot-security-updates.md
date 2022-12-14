---
title: 关于 Dependabot 安全更新
intro: '{% data variables.product.prodname_dependabot %} 可通过提出安全更新拉取请求为您修复有漏洞依赖项。'
shortTitle: Dependabot security updates
redirect_from:
  - /github/managing-security-vulnerabilities/about-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/about-dependabot-security-updates
  - /code-security/supply-chain-security/about-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Repositories
  - Dependencies
  - Pull requests
ms.openlocfilehash: 4ea3bd49a5d46376129afd2282fe043954a7d653
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181282'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About Dependabot security updates".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## 关于 {% data variables.product.prodname_dependabot_security_updates %}

{% data variables.product.prodname_dependabot_security_updates %} 使您更容易修复仓库中的有漏洞依赖项。 如果启用此功能，当针对存储库依赖项关系图中有漏洞的依赖项发出 {% data variables.product.prodname_dependabot %} 警报时，{% data variables.product.prodname_dependabot %} 将自动尝试对其进行修复。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”和“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)”。

{% data variables.product.prodname_dotcom %} 可能会向受最近发布的 {% data variables.product.prodname_dotcom %} 安全通告披露的漏洞影响的仓库发送 {% data variables.product.prodname_dependabot_alerts %}。 {% data reusables.security-advisory.link-browsing-advisory-db %}

{% data variables.product.prodname_dependabot %} 将检查是否可以在不破坏仓库依赖关系图的情况下将有漏洞依赖项升级到已修复版本。 然后 {% data variables.product.prodname_dependabot %} 提出拉取请求以将依赖项更新到包含补丁的最低版本，并将拉取请求链接到 {% data variables.product.prodname_dependabot %} 警报，或者在警报中报告错误。 有关详细信息，请参阅“[排查 {% data variables.product.prodname_dependabot %} 错误](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)”。

{% data variables.product.prodname_dependabot_security_updates %} 功能适用于已启用依赖关系图和 {% data variables.product.prodname_dependabot_alerts %} 的仓库。 你将在完整依赖项关系图中看到针对已识别的每个有漏洞依赖项的 {% data variables.product.prodname_dependabot %} 警报。 但是，安全更新仅针对清单或锁定文件中指定的依赖项而触发。 有关详细信息，请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included)”。

{% ifversion dependabot-security-updates-unlock-transitive-dependencies %} 

{% note %}

**注意**：对于 npm，{% data variables.product.prodname_dependabot %} 会引发拉取请求，以将显式定义的依赖项更新到安全版本，即使这意味着要更新一个或多个父依赖项{% ifversion dependabot-security-updates-npm %}甚或是删除父级不再需要的子依赖项{% endif %}。 对于其他生态系统，如果 {% data variables.product.prodname_dependabot %} 还需要更新父依赖项，则无法更新间接依赖项或可传递依赖项。 有关详细信息，请参阅“[Dependabot 尝试在没有警报的情况下更新依赖项](/en/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors#dependabot-tries-to-update-dependencies-without-an-alert)”。

{% endnote %}{% endif %} 

您可以启用相关功能 {% data variables.product.prodname_dependabot_version_updates %}，这样无论 {% data variables.product.prodname_dependabot %} 是否检测到过期的依赖项，都可以提出拉取请求，以将清单更新到依赖项的最新版本。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot %} 版本更新](/github/administering-a-repository/about-dependabot-version-updates)”。

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-updates-and-actions %}

{% data reusables.dependabot.dependabot-actions-support %}

## 关于安全更新的拉取请求

每个拉取请求都包含快速、安全地查看提议的修复程序并将其合并到项目中所需的全部内容。 这包括漏洞的相关信息，如发行说明、变更日志条目和提交详细信息。 无法访问仓库的 {% data variables.product.prodname_dependabot_alerts %} 的任何人都看不到拉取请求所解决的漏洞详细信息。

合并包含安全更新程序的拉取请求时，存储库相应的 {% data variables.product.prodname_dependabot %} 警报会标记为已解决。 有关 {% data variables.product.prodname_dependabot %} 拉取请求的详细信息，请参阅“[管理依赖项更新的拉取请求](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)”。

{% data reusables.dependabot.automated-tests-note %}

{% ifversion fpt or ghec %}

## 关于兼容性分数

{% data variables.product.prodname_dependabot_security_updates %} 可能包括兼容性分数，以便您了解更新依赖项是否可能导致对项目的重大更改。 这些分数是根据已生成相同安全更新的其他公共仓库中的 CI 测试计算的。 更新的兼容性分数是在依赖项的特定版本之间进行更新时，CI 运行被视为通过的百分比。

{% endif %}

## 关于 {% data variables.product.prodname_dependabot %} 安全更新通知

您可以在 {% data variables.product.company_short %} 上过滤通知以显示 {% data variables.product.prodname_dependabot %} 安全更新。 有关详细信息，请参阅“[管理收件箱中的通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)”。
