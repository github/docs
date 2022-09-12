---
title: 漏洞依赖项检测疑难解答
intro: '如果 {% data variables.product.product_name %} 报告的依赖项信息不符合您的预期，则需要考虑许多因素，您可以检查各种问题。'
shortTitle: Troubleshoot vulnerability detection
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Troubleshooting
  - Errors
  - Security updates
  - Dependencies
  - Vulnerabilities
  - CVEs
  - Repositories
ms.openlocfilehash: 50e63a273d1bd787c2c324d3ceed9a8d31b64c9e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526716'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.result-discrepancy %}

## 为什么似乎缺少某些依赖项？

{% data variables.product.prodname_dotcom %} 生成和显示依赖项数据不同于其他工具。 因此，如果您过去使用其他工具来识别依赖项，则几乎可以肯定您会看到不同的结果。 考虑以下情况：

*   {% data variables.product.prodname_advisory_database %} 是 {% data variables.product.prodname_dotcom %} 用来识别漏洞依赖项{% ifversion GH-advisory-db-supports-malware %}和恶意软件{% endif %}的数据源之一。 它是一款免费的精选数据库，用于收集 {% data variables.product.prodname_dotcom %} 上常见软件包生态系统的安全公告。 它包括从 {% data variables.product.prodname_security_advisories %} 直接报告给 {% data variables.product.prodname_dotcom %} 的数据，以及官方馈送和社区来源。 这些数据由 {% data variables.product.prodname_dotcom %} 审查和整理，以确保不会与开发社区分享虚假或不可行的信息。 {% data reusables.security-advisory.link-browsing-advisory-db %}
*   依赖项图解析用户仓库中所有已知的包清单文件。 例如，对于 npm，它将解析 package-lock.json 文件。 它构造所有仓库依赖项和公共依赖项的图表。 当启用依赖关系图时，当任何人推送到默认分支时，都会发生这种情况，其中包括对支持的清单格式进行更改的提交。 有关详细信息，请参阅“[关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”和“[依赖项关系图故障排除](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)”。
*   {% data variables.product.prodname_dependabot %} 扫描对包含清单文件的默认分支的任何推送。 添加新公告时，它会扫描所有现有存储库并为每个受影响的存储库生成警报。 {% data variables.product.prodname_dependabot_alerts %} 在存储库级别汇总，而不是针对每条公告创建一个警报。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。
*   {% ifversion fpt or ghec or ghes > 3.2 %}{% data variables.product.prodname_dependabot_security_updates %} 在你收到关于存储库中易受攻击依赖项的警报时触发。 在可能的情况下，{% data variables.product.prodname_dependabot %} 会在您的仓库中创建拉取请求，以将易受攻击的依赖项升级到避免漏洞所需的最低安全版本。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”和“[{% data variables.product.prodname_dependabot %} 错误故障排除](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)”。
  
    {% endif %}{% data variables.product.prodname_dependabot %} 不会按计划扫描存储库，而是在发生某些变更时扫描存储库。 例如，新增依赖项（{% data variables.product.prodname_dotcom %} 在每次推送时都会进行此项检查）时，或者当新的公告添加到公告数据库{% ifversion ghes or ghae %}以及同步到 {% data variables.product.product_location %}{% endif %} 时，就会触发扫描。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-insecure-dependencies)”。

## {% data variables.product.prodname_dependabot_alerts %} 是否仅与清单和锁定文件中的不安全依赖项相关？

{% data variables.product.prodname_dependabot_alerts %} 提醒您应更新的依赖项，包括可从清单或锁定文件确定版本的过渡依赖项。 {% ifversion fpt or ghec or ghes > 3.2 %}{% data variables.product.prodname_dependabot_security_updates %} 仅在 {% data variables.product.prodname_dependabot %} 可直接修复依赖项时才建议更改，即以下情况：
* 在清单或锁定文件中明确声明的直接依赖项
* 在锁定文件中声明的过渡依赖项{% endif %}

检查：未在存储库的清单或锁定文件中指定的组件是否存在未捕获的漏洞？

## 为什么我无法获取某些生态系统的 {% data variables.product.prodname_dependabot_alerts %}？

{% data variables.product.prodname_dependabot_alerts %} 支持一组可提供高质量、可操作数据的生态系统。 {% data variables.product.prodname_advisory_database %} 中的特选公告、依赖项关系图、{% ifversion fpt or ghec %}{% data variables.product.prodname_dependabot %}安全更新{% endif %} 和 {% data variables.product.prodname_dependabot_alerts %} 提供用于多个生态系统，包括 Java’s Maven、JavaScript’s npm 和 Yarn、.NET’s NuGet、Python’s pip、Ruby's RubyGems 以及 PHP’s Composer。 我们将在今后继续增加对更多生态系统的支持。 有关我们支持的包生态系统的概述，请参阅“[关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”。

值得注意的是，可能存在其他生态系统的安全公告。 未经审查的安全公告中的信息由特定存储库的维护员提供。 此数据不是由 {% data variables.product.prodname_dotcom %} 策展的。 {% data reusables.security-advisory.link-browsing-advisory-db %}

检查：未捕获的漏洞是否适用于不受支持的生态系统？

## {% data variables.product.prodname_dependabot %} 是否会针对已知多年的漏洞生成警报？

{% data variables.product.prodname_advisory_database %} 于 2019 年 11 月推出，并在最初回顾性包含了受支持生态系统的安全风险公告（从 2017 年开始）。 将 CVE 添加到数据库时，我们会优先处理较新的 CVE，以及影响较新版本软件的 CVE。

提供了一些有关较旧漏洞的信息，尤其是在这些 CVE 特别普遍的地方，但一些较旧的漏洞未包含在 {% data variables.product.prodname_advisory_database %} 中。 如果您需要将一些特定的旧漏洞包含在数据库中，请联系 {% data variables.contact.contact_support %}。 

检查：未捕获的漏洞在国家漏洞数据库中的发布日期是否早于 2017 年？

## 为什么 {% data variables.product.prodname_advisory_database %} 使用已发布漏洞数据的子集？

有些第三方工具使用未经人为检查或过滤的未整理 CVE 数据。 这意味着 CVE 带有标签或严重错误或其他质量问题，将导致更频繁，更嘈杂且更无用的警报。

由于 {% data variables.product.prodname_dependabot %} 使用 {% data variables.product.prodname_advisory_database %} 中的策展数据，因此警报量可能较少，但是收到的警报将是准确和相关的。

{% ifversion fpt or ghec %}
## 是否每个不安全依赖项都会生成单独的警报？

当依赖项具有多个漏洞时，将在通报和清单级别为每个漏洞生成警报。

![{% data variables.product.prodname_dependabot_alerts %} 选项卡的屏幕截图，其中显示同一程序包中两个具有不同清单的警报。](/assets/images/help/repository/dependabot-alerts-view.png)

旧版 {% data variables.product.prodname_dependabot_alerts %} 被分组到一个聚合警报中，其中包含同一依赖项的所有漏洞。 如果导航到指向旧版 {% data variables.product.prodname_dependabot %} 警报的链接，则会将你重定向到筛选的 {% data variables.product.prodname_dependabot_alerts %} 选项卡，以显示该依赖程序包和清单的漏洞。

![{% data variables.product.prodname_dependabot_alerts %} 选项卡的屏幕截图，该选项卡在导航到旧版 {% data variables.product.prodname_dependabot %} 警报时显示筛选的警报。](/assets/images/help/repository/legacy-dependabot-alerts-view.png)

{% data variables.product.prodname_dotcom %} 中的 {% data variables.product.prodname_dependabot_alerts %} 计数显示警报数的总数，即漏洞数，而不是依赖项数。

检查：如果看到的总数存在差异，请检查是否未将警报号与依赖项编号进行比较。 还要检查是否您查看的是所有警报，而不是已筛选警报的子集。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Dependabot 能否忽略特定依赖项？

可以配置 {% data variables.product.prodname_dependabot %} 以忽略配置文件中的特定依赖项，这将阻止这些依赖项的安全和版本更新。 如果只想使用安全更新，则需要使用配置文件替代默认行为。 有关详细信息，请参阅“[使用配置文件替代默认行为](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#overriding-the-default-behavior-with-a-configuration-file)”，以防止激活版本更新。 有关忽略依赖项的信息，请参阅“[`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)。”{% endif %}

## 延伸阅读

- [关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)
- [查看和更新 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [管理存储库的安全性和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)
- [依赖项关系图故障排除](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph){% ifversion fpt or ghec or ghes > 3.2 %}
- [{% data variables.product.prodname_dependabot %} 错误故障排除](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors){% endif %}
