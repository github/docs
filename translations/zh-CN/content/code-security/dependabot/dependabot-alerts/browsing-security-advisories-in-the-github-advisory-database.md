---
title: 在 GitHub Advisory Database 中浏览安全公告
intro: 可以浏览 {% data variables.product.prodname_advisory_database %} 以查找托管在 {% data variables.product.company_short %} 上的开放源代码项目中的安全风险公告。
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
- /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/dependabot/dependabot-alerts/browsing-security-vulnerabilities-in-the-github-advisory-database
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
ms.openlocfilehash: 5a2612b6d2899aa4c730b76a2ac898254024563a
ms.sourcegitcommit: d186fc3b5766172b09b4e7370ae888c2523ac24a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 08/06/2022
ms.locfileid: "147508044"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## <a name="about-the--data-variablesproductprodname_advisory_database-"></a>关于 {% data variables.product.prodname_advisory_database %}

{% data variables.product.prodname_advisory_database %} 包含已知安全漏洞{% ifversion GH-advisory-db-supports-malware %}和恶意软件{% endif %}的列表，分为两类：经 {% data variables.product.company_short %} 审核的公告和未经审核的公告。

{% data reusables.repositories.tracks-vulnerabilities %}

## <a name="about-types-of-security-advisories"></a>关于安全公告的类型

{% data reusables.advisory-database.beta-malware-advisories %}

{% data variables.product.prodname_advisory_database %} 中的每个公告都涉及开放源代码项目中的漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意开放源代码软件{% endif %}。 

{% data reusables.repositories.a-vulnerability-is %} 代码中的漏洞通常是偶然引入的，并在被发现后很快会得到修复。 应更新代码，以便在依赖项可用时立即使用它的修复后的版本。

{% ifversion GH-advisory-db-supports-malware %}

相比之下，恶意软件是有意设计为执行不需要或有害功能的代码。 恶意软件可能针对硬件、软件、机密数据或使用该恶意软件的任何应用程序的用户。 需要从项目中删除恶意软件，并为依赖项找到可供选择的、更安全的替代项。

{% endif %}

### <a name="-data-variablesproductcompany_short--reviewed-advisories"></a>经 {% data variables.product.company_short %} 审核的公告

经 {% data variables.product.company_short %} 审核的公告是已映射到支持的生态系统中的包的安全漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}。 仔细查看每个公告的有效性，并确保它们具有完整的说明，以及包含生态系统和包信息。

通常，我们以软件编程语言的相关包注册表命名支持的生态系统。 我们会审查与受支持注册表中的包中的漏洞相关的公告。

- Composer（注册表： https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang（注册表： https://hex.pm/){% endif %}
- Go（注册表： https://pkg.go.dev/) {% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7508 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven（注册表： https://repo1.maven.org/maven2/org/)
- npm（注册表： https://www.npmjs.com/)
- NuGet（注册表： https://www.nuget.org/)
- pip（注册表： https://pypi.org/)
- RubyGems（注册表： https://rubygems.org/)
- Rust（注册表： https://crates.io/)

如果对我们应该支持的新生态系统有任何建议，请提出[问题](https://github.com/github/advisory-database/issues)以供讨论。

如果为存储库启用 {% data variables.product.prodname_dependabot_alerts %}，则当经 {% data variables.product.company_short %} 审核的新公告报告所依赖的包存在漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}时，系统会自动通知你。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。

### <a name="unreviewed-advisories"></a>未审核的公告

未审核的公告是我们直接从国家漏洞数据库源自动发布到 {% data variables.product.prodname_advisory_database %} 的安全漏洞。 

{% data variables.product.prodname_dependabot %} 不会为未审核的公告创建 {% data variables.product.prodname_dependabot_alerts %}，因为不会检查此类公告的有效性或完成情况。

## <a name="about-information-in-security-advisories"></a>关于安全公告中的信息

每个安全公告都包含有关漏洞{% ifversion GH-advisory-db-supports-malware %}和恶意软件{% endif %}的信息，可能包括说明、严重程度、受影响的包、包生态系统、受影响的版本和修补版本、影响以及可选信息（如引用、解决方法和积分）。 此外，国家漏洞数据库列表中的公告包含 CVE 记录链接，通过链接可以查看漏洞、其 CVSS 得分及其质化严重等级的更多详细信息。 有关详细信息，请参阅美国国家标准和技术研究院的“[国家漏洞数据库](https://nvd.nist.gov/)”。

严重级别是“[常见漏洞评分系统 (CVSS) 第 5 节](https://www.first.org/cvss/specification-document)”中定义的四个可能级别之一。
- 低
- 中
- 高
- 严重

{% data variables.product.prodname_advisory_database %} 使用上述 CVSS 级别。 如果 {% data variables.product.company_short %} 获取 CVE，{% data variables.product.prodname_advisory_database %} 将使用 CVSS 版本 3.1。 如果 CVE 是导入的，则 {% data variables.product.prodname_advisory_database %} 支持 CVSS 版本 3.0 和 3.1。

{% data reusables.repositories.github-security-lab %}

## <a name="accessing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>访问 {% data variables.product.prodname_advisory_database %} 中的通告

1. 导航到 https://github.com/advisories。
2. （可选）要过滤列表，请使用任意下拉菜单。
  ![下拉筛选器](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   提示：可以使用左侧边栏分别浏览 {% data variables.product.company_short %} 已审核和未审核的公告。

   {% endtip %}
3. 单击任何公告以查看详细信息。 默认情况下，你将看到经 {% data variables.product.company_short %} 审核的安全漏洞公告。 {% ifversion GH-advisory-db-supports-malware %}要显示恶意软件公告，请在搜索栏中使用 `type:malware`。{% endif %}


{% note %}

也可以使用 GraphQL API 访问数据库。 {% ifversion GH-advisory-db-supports-malware %}默认情况下，除非指定 `type:malware`，否则查询将返回经 {% data variables.product.company_short %} 审核的安全漏洞公告。{% endif %}有关详细信息，请参阅“[`security_advisory`Webhook 事件](/webhooks/event-payloads/#security_advisory)”。

{% endnote %}

## <a name="editing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>在 {% data variables.product.prodname_advisory_database %} 中编辑公告
您可以对 {% data variables.product.prodname_advisory_database %} 中的任何公告提出改进建议。 有关详细信息，请参阅“[在 {% data variables.product.prodname_advisory_database %} 中编辑安全公告](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”。

## <a name="searching-the--data-variablesproductprodname_advisory_database-"></a>搜索 {% data variables.product.prodname_advisory_database %}

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

## <a name="viewing-your-vulnerable-repositories"></a>查看有漏洞的仓库

对于 {% data variables.product.prodname_advisory_database %} 中任何经 {% data variables.product.company_short %} 审核的公告，你都可以查看哪些存储库受该安全漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}的影响。 要查看有漏洞的仓库，您必须有权访问该仓库的 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)”。

1. 导航到 https://github.com/advisories。
2. 单击通告。
3. 在公告页面顶部，单击“Dependabot 警报”。
   ![Dependabot 警报](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. （可选）要过滤列表，请使用搜索栏或下拉菜单。 “Organization（组织）”下拉菜单用于按所有者（组织或用户）过滤 {% data variables.product.prodname_dependabot_alerts %}。
   ![用于筛选警报的搜索栏和下拉菜单](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. 有关公告的更多详细信息，以及有关如何修复有漏洞的存储库的建议，请单击存储库名称。

{% ifversion security-advisories-ghes-ghae %}
## <a name="accessing-the-local-advisory-database-on--data-variablesproductproduct_location-"></a>访问 {% data variables.product.product_location %} 上的本地公告数据库

如果站点管理员已为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_github_connect %}，你还可以在本地浏览已审核的公告。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)”。

可使用本地公告数据库来检查是否包含特定的安全漏洞，从而检查是否会收到有关易受攻击的依赖项的警报。 还可以查看任何易受攻击的存储库。 

1. 导航到 `https://HOSTNAME/advisories`。
2. （可选）要过滤列表，请使用任意下拉菜单。
  ![下拉筛选器](/assets/images/help/security/advisory-database-dropdown-filters.png) {% note %}

   注意：只会列出已审核的公告。 可以在 {% data variables.product.prodname_dotcom_the_website %} 上的 {% data variables.product.prodname_advisory_database %} 中查看未审核的公告。 有关详细信息，请参阅“[访问 GitHub 公告数据库中的公告](#accessing-an-advisory-in-the-github-advisory-database)”。 

   {% endnote %}
3. 单击公告以查看详细信息。{% ifversion GH-advisory-db-supports-malware %}默认情况下，你将看到经 {% data variables.product.company_short %} 审核的安全漏洞公告。 若要显示恶意软件公告，请在搜索栏中使用 `type:malware`。{% endif %}

还可以直接从本地公告数据库中对任何公告提出改进建议。 有关详细信息，请参阅“[编辑来自 {% data variables.product.product_location %} 的公告](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)”。

### <a name="viewing-vulnerable-repositories-for--data-variablesproductproduct_location-"></a>查看 {% data variables.product.product_location %} 的易受攻击的存储库

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

## <a name="further-reading"></a>延伸阅读

- MITRE 的[“漏洞”定义](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
