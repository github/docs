---
title: 关于 Dependabot 警报
intro: '当我们检测到存储库使用易受攻击的依赖项{% ifversion GH-advisory-db-supports-malware %} 或恶意软件{% endif %} 时，{% data variables.product.product_name %} 发送 {% data variables.product.prodname_dependabot_alerts %}。'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Dependabot alerts
ms.openlocfilehash: 737e5547e3aefd6b5c49780df0c78cdc73292ee4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106739'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## 关于 {% data variables.product.prodname_dependabot_alerts %}

{% ifversion GH-advisory-db-supports-malware %} {% data reusables.advisory-database.beta-malware-advisories %} {% endif %}

{% data variables.product.prodname_dependabot_alerts %} 告知代码依赖于不安全的包。

当代码依赖于具有安全漏洞的包时，这可能会导致项目或使用它的人遇到一系列问题。 应尽快升级到该包的安全版本。{% ifversion GH-advisory-db-supports-malware %} 如果代码使用恶意软件，则需要将包替换为安全的替代项。{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## 不安全依赖项的检测

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %} 执行扫描以检测不安全的依赖关系，并在以下情况下发送 {% data variables.product.prodname_dependabot_alerts %} ：

{% ifversion fpt or ghec %}
- 新公告添加到 {% data variables.product.prodname_advisory_database %}。 有关详细信息，请参阅“[在 {% data variables.product.prodname_advisory_database %} 中浏览安全公告](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database)”。{% else %}
- 新公告数据每小时从 {% data variables.product.prodname_dotcom_the_website %} 同步到 {% data variables.location.product_location %}。 {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %} {% note %}

  注意：只有经过 {% data variables.product.company_short %} 审核的公告才会触发 {% data variables.product.prodname_dependabot_alerts %}。

  {% endnote %}
- 存储库的依赖项关系图发生更改。 例如，当参与者推送提交以更改所依赖的包或版本时{% ifversion fpt or ghec %}，或者当某个依赖项的代码发生更改时{% endif %}。 有关详细信息，请参阅“[关于依赖项关系图](/code-security/supply-chain-security/about-the-dependency-graph)”。

{% data reusables.repositories.dependency-review %}

有关 {% data variables.product.product_name %} 检测到其中不安全的依赖项的生态系统列表，请参阅“[支持的包生态系统](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”。

{% note %}

注意：保持清单和锁定文件处于最新状态非常重要。 如果依赖关系图不能准确反映你当前的依赖项和版本，则可能错过有关你使用的不安全依赖项的警报。 您还可以收到不再使用的依赖项的警报。

{% endnote %}

##  {% data variables.product.prodname_dependabot_alerts %} 的配置

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} 检测公共存储库中易受攻击的依赖项和恶意软件并显示依赖项关系图，但默认情况下不会生成 {% data variables.product.prodname_dependabot_alerts %}。 仓库所有者或具有管理员访问权限的人员可以为公共公共仓库启用 {% data variables.product.prodname_dependabot_alerts %}。 私有仓库的所有者或具有管理员权限的人员可以通过为其仓库启用依赖关系图和 {% data variables.product.prodname_dependabot_alerts %} 来启用 {% data variables.product.prodname_dependabot_alerts %}。

你也可以为用户帐户或组织拥有的所有存储库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)”。

有关 {% data variables.product.prodname_dependabot_alerts %} 相关操作的访问要求的信息，请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)”。

{% data variables.product.product_name %} 将立即开始生成依赖关系图，并在发现任何不安全的依赖项后立即生成警报。 依赖关系图通常在几分钟之内填充，但对于依赖项很多的仓库，可能需要更长时间。 有关详细信息，请参阅“[管理专用存储库的数据使用设置](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)”。
{% endif %}

当 {% data variables.product.product_name %} 发现易受攻击的依赖项{% ifversion GH-advisory-db-supports-malware %} 或恶意软件时{% endif %}，我们会生成 {% data variables.product.prodname_dependabot %} 警报，并将其显示{% ifversion fpt or ghec or ghes %}在存储库的“安全”选项卡上和{% endif %}在存储库的依赖项关系图中。 警报包括项目中受影响文件的{% ifversion fpt or ghec or ghes %}链接，以及{% endif %}有关已修复的版本的信息。 {% data variables.product.product_name %} 还可能根据受影响仓库的管理员的通知首选项向他们通知新的警报。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot_alerts %} 的通知](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)”。

{% ifversion fpt or ghec or ghes %} 对于已启用 {% data variables.product.prodname_dependabot_security_updates %}的存储库，警报中还包含一个拉取请求链接，用于将清单或锁定文件更新到可解决该漏洞的最低版本。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。
{% endif %}

{% warning %}

注意：{% data variables.product.product_name %} 的安全功能并不声明捕获所有漏洞{% ifversion GH-advisory-db-supports-malware %} 和恶意软件{% endif %}。 我们积极维护 {% data variables.product.prodname_advisory_database %} 并生成包含最新信息的警报。 但是，我们无法在保证的时间范围内捕获所有漏洞或告知你已知的漏洞。 这些功能不能替代针对每个依赖项潜在漏洞或任何其他问题的人工评审，建议在必要时咨询安全服务或进行彻底的依赖项评审。

{% endwarning %}

## 访问 {% data variables.product.prodname_dependabot_alerts %}

你可以{% ifversion fpt or ghec %}在存储库的“安全性”选项卡中或{% endif %}在存储库的依赖项关系图中查看影响特定项目的所有警报。 有关详细信息，请参阅“[查看和更新 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”。

默认情况下，我们会向受影响仓库中具有管理员权限的人员通知有关新的 {% data variables.product.prodname_dependabot_alerts %}。 {% ifversion fpt or ghec %}{% data variables.product.product_name %} 绝不会公开披露任何存储库的不安全依赖项。 也可以将 {% data variables.product.prodname_dependabot_alerts %} 设为对使用你拥有或具有管理员权限的存储库的其他人或团队可见。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”。
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} 有关详细信息，请参阅“[为 {% data variables.product.prodname_dependabot_alerts %} 配置通知](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)”。

你还可以查看与 {% data variables.product.prodname_advisory_database %} 中的特定公告对应的 {% data variables.product.prodname_dependabot_alerts %}。 {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes %}
## 延伸阅读

- [关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)
- “[查看和更新 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”{% endif %} {% ifversion fpt or ghec %}-“[关于 {% data variables.product.prodname_dotcom %} 的隐私](/get-started/privacy-on-github)”{% endif %}
