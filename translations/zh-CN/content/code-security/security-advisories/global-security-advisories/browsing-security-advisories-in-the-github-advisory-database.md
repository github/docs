---
title: 在 GitHub Advisory Database 中浏览安全公告
intro: '可以浏览 {% data variables.product.prodname_advisory_database %} 以查找托管在 {% data variables.product.company_short %} 上的开放源代码项目中的安全风险公告。'
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/browsing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 19c37d2a1a1101f9984de13cd034bb0ee5e285a8
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113981'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## 访问 {% data variables.product.prodname_advisory_database %} 中的通告

可以访问 {% data variables.product.prodname_advisory_database %} 中的任何公告。

1. 导航到 https://github.com/advisories。
2. （可选）要过滤列表，请使用任意下拉菜单。
  ![下拉筛选器](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   提示：可以使用左侧边栏分别浏览 {% data variables.product.company_short %} 已审核和未审核的公告。

   {% endtip %}
3. 单击任何公告以查看详细信息。 默认情况下，你将看到经 {% data variables.product.company_short %} 审核的安全漏洞公告。 {% ifversion GH-advisory-db-supports-malware %}要显示恶意软件公告，请在搜索栏中使用 `type:malware`。{% endif %}


{% note %}

也可以使用 GraphQL API 访问数据库。 {% ifversion GH-advisory-db-supports-malware %}默认情况下，除非指定 `type:malware`，否则查询将返回经 {% data variables.product.company_short %} 审核的安全漏洞公告。{% endif %}有关详细信息，请参阅“[`security_advisory`Webhook 事件](/webhooks/event-payloads/#security_advisory)”。

{% endnote %}

## 在 {% data variables.product.prodname_advisory_database %} 中编辑公告
您可以对 {% data variables.product.prodname_advisory_database %} 中的任何公告提出改进建议。 有关详细信息，请参阅“[在 {% data variables.product.prodname_advisory_database %} 中编辑安全公告](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”。

## 搜索 {% data variables.product.prodname_advisory_database %}

您可以搜索数据库，并使用限定符缩小搜索范围。 例如，您可以搜索在特定日期、特定生态系统或特定库中创建的通告。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符  | 示例 |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) 将显示经 {% data variables.product.company_short %} 审核的安全漏洞公告。 |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware) 将显示经 {% data variables.product.company_short %} 审核的恶意软件公告。 |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) 显示未审核的公告。 |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) 显示包含此 {% data variables.product.prodname_advisory_database %} ID 的公告。 |
| `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) 显示具有此 CVE ID 编号的公告。 |
| `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) 仅显示影响 NPM 包的公告。 |
| `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) 仅显示具有较高严重性级别的公告。 |
| `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) 仅显示影响 lodash 库的公告。 |
| `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) 仅显示具有此 CWE 编号的公告。 |
| `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) 仅显示属于“octocat”用户帐户的公告。 |
| `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) 按最旧的公告在前的顺序进行排序。 |
| `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) 按最新的公告在前的顺序进行排序。 |
| `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) 按更新时间由远及近的顺序排序。 |
| `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) 按更新时间由近及远的顺序排序。 |
| `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) 仅显示已撤回的公告。 |
| `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) 仅显示在此日期创建的公告。 |
| `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) 仅显示在此日期更新的公告。 |

## 查看有漏洞的仓库

对于 {% data variables.product.prodname_advisory_database %} 中任何经 {% data variables.product.company_short %} 审核的公告，你都可以查看哪些存储库受该安全漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}的影响。 要查看有漏洞的仓库，您必须有权访问该仓库的 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)”。

1. 导航到 https://github.com/advisories。
2. 单击通告。
3. 在公告页面顶部，单击“Dependabot 警报”。
   ![Dependabot 警报](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. （可选）要过滤列表，请使用搜索栏或下拉菜单。 “Organization（组织）”下拉菜单用于按所有者（组织或用户）过滤 {% data variables.product.prodname_dependabot_alerts %}。
   ![用于筛选警报的搜索栏和下拉菜单](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. 有关公告的更多详细信息，以及有关如何修复有漏洞的存储库的建议，请单击存储库名称。

{% ifversion security-advisories-ghes-ghae %}
## 访问 {% data variables.location.product_location %} 上的本地公告数据库

如果站点管理员已为 {% data variables.location.product_location %} 启用 {% data variables.product.prodname_github_connect %}，你还可以在本地浏览已审核的公告。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)”。

可使用本地公告数据库来检查是否包含特定的安全漏洞，从而检查是否会收到有关易受攻击的依赖项的警报。 还可以查看任何易受攻击的存储库。 

1. 导航到 `https://HOSTNAME/advisories`。
2. （可选）要过滤列表，请使用任意下拉菜单。
  ![下拉筛选器](/assets/images/help/security/advisory-database-dropdown-filters.png) {% note %}

   注意：只会列出已审核的公告。 可以在 {% data variables.product.prodname_dotcom_the_website %} 上的 {% data variables.product.prodname_advisory_database %} 中查看未审核的公告。 有关详细信息，请参阅“[访问 GitHub 公告数据库中的公告](#accessing-an-advisory-in-the-github-advisory-database)”。 

   {% endnote %}
3. 单击公告以查看详细信息。{% ifversion GH-advisory-db-supports-malware %}默认情况下，你将看到经 {% data variables.product.company_short %} 审核的安全漏洞公告。 若要显示恶意软件公告，请在搜索栏中使用 `type:malware`。{% endif %}

还可以直接从本地公告数据库中对任何公告提出改进建议。 有关详细信息，请参阅“[编辑来自 {% data variables.location.product_location %} 的公告](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)”。

### 查看 {% data variables.location.product_location %} 的易受攻击的存储库

{% data reusables.repositories.enable-security-alerts %}

在本地公告数据库中，可以看到哪些存储库受到每个安全漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}的影响。 要查看有漏洞的仓库，您必须有权访问该仓库的 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)”。

1. 导航到 `https://HOSTNAME/advisories`。
2. 单击通告。
3. 在公告页面顶部，单击“Dependabot 警报”。
   ![Dependabot 警报](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. （可选）要过滤列表，请使用搜索栏或下拉菜单。 “Organization（组织）”下拉菜单用于按所有者（组织或用户）过滤 {% data variables.product.prodname_dependabot_alerts %}。
   ![用于筛选警报的搜索栏和下拉菜单](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. 有关公告的更多详细信息，以及有关如何修复有漏洞的存储库的建议，请单击存储库名称。

{% endif %}
