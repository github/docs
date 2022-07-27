---
title: 浏览 GitHub Advisory 数据库中的安全通告
intro: '您可以浏览 {% data variables.product.prodname_advisory_database %} ，查找有关托管在 {% data variables.product.company_short %} 上的开源项目中的安全风险的公告。'
shortTitle: 浏览公告数据库
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
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## 关于 {% data variables.product.prodname_advisory_database %}

The {% data variables.product.prodname_advisory_database %} contains a list of known security vulnerabilities {% ifversion GH-advisory-db-supports-malware %}and malware, {% endif %}grouped in two categories: {% data variables.product.company_short %}-reviewed advisories and unreviewed advisories.

{% data reusables.repositories.tracks-vulnerabilities %}

## 关于安全公告的类型

{% data reusables.advisory-database.beta-malware-advisories %}

Each advisory in the {% data variables.product.prodname_advisory_database %} is for a vulnerability in open source projects{% ifversion GH-advisory-db-supports-malware %} or for malicious open source software{% endif %}.

{% data reusables.repositories.a-vulnerability-is %} 代码中的漏洞通常是偶然引入的，在发现后不久就被修复。 您应该在依赖项的固定版本可用时立即更新代码以使用该版本。

{% ifversion GH-advisory-db-supports-malware %}

相反，恶意软件或恶意软件是故意设计用于执行不需要或有害功能的代码。 恶意软件可能以硬件、软件、机密数据或使用恶意软件的任何应用程序的用户为目标。 您需要从项目中删除恶意软件，并找到依赖项的替代，更安全的替代品。

{% endif %}

### {% data variables.product.company_short %} 审核的公告

{% data variables.product.company_short %}-reviewed advisories are security vulnerabilities{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %} that have been mapped to packages in ecosystems we support. 我们会仔细审查每个公告的有效性，确保它们具有完整的描述，并包含生态系统和软件包信息。

通常，我们以软件编程语言的关联包注册表命名支持的生态系统。 如果公告针对来自受支持注册表的程序包中的漏洞，我们会对其进行审查。

- Composer (registry: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (registry: https://hex.pm/){% endif %}
- Go（注册表：https://pkg.go.dev/）
- Maven（注册表：https://repo1.maven.org/maven2/org）
- npm（注册表：https://www.npmjs.com/）
- NuGet（注册表：https://www.nuget.org/）
- pip（注册表：https://pypi.org/）
- RubyGems（注册表：https://rubygems.org/）
- Rust（注册表：https://crates.io/）

如果您对我们应该支持的新生态系统有任何建议，请打开[议题](https://github.com/github/advisory-database/issues)进行讨论。

If you enable {% data variables.product.prodname_dependabot_alerts %} for your repositories, you are automatically notified when a new {% data variables.product.company_short %}-reviewed advisory reports a vulnerability {% ifversion GH-advisory-db-supports-malware %}or malware{% endif %} for a package you depend on. 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %} 警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。

### 未审核的公告

未审核的公告是我们直接从国家漏洞数据库源自动发布到 {% data variables.product.prodname_advisory_database %} 的安全漏洞。

{% data variables.product.prodname_dependabot %} 不会为未审核的公告创建 {% data variables.product.prodname_dependabot_alerts %}，因为不会检查此类公告的有效性或完成情况。

## 关于安全公告中的信息

Each security advisory contains information about the vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware,{% endif %} which may include the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. 此外，国家漏洞数据库列表中的公告包含 CVE 记录链接，通过链接可以查看漏洞、其 CVSS 得分及其质化严重等级的更多详细信息。 更多信息请参阅国家标准和技术研究所 (National Institute of Standards and Technology) 的“[国家漏洞数据库](https://nvd.nist.gov/)”。

我们在[常见漏洞评分系统 (CVSS) 第 5 节](https://www.first.org/cvss/specification-document)中定义了以下四种可能的严重性等级。
- 低
- 中
- 高
- 关键

{% data variables.product.prodname_advisory_database %} 使用上述 CVSS 级别。 如果 {% data variables.product.company_short %} 获取 CVE，{% data variables.product.prodname_advisory_database %} 将使用 CVSS 版本 3.1。 如果 CVE 是导入的，则 {% data variables.product.prodname_advisory_database %} 支持 CVSS 版本 3.0 和 3.1。

{% data reusables.repositories.github-security-lab %}

## 访问 {% data variables.product.prodname_advisory_database %} 中的通告

1. 导航到 https://github.com/advisories。
2. （可选）要过滤列表，请使用任意下拉菜单。 ![下拉过滤器](/assets/images/help/security/advisory-database-dropdown-filters.png)
   {% tip %}

   **提示：**您可以使用左侧的边栏分别浏览  {% data variables.product.company_short %} 已审核和未审核的公告。

   {% endtip %}
3. Click an advisory to view details. 默认情况下，您将看到 {% data variables.product.company_short %} 已审核的安全漏洞公告。 {% ifversion GH-advisory-db-supports-malware %}To show malware advisories, use `type:malware` in the search bar.{% endif %}


{% note %}

也可以使用 GraphQL API 访问数据库。 {% ifversion GH-advisory-db-supports-malware %}By default, queries will return {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities unless you specify `type:malware`.{% endif %} For more information, see the "[`security_advisory` webhook event](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

## 在 {% data variables.product.prodname_advisory_database %} 中编辑公告
您可以对 {% data variables.product.prodname_advisory_database %} 中的任何公告提出改进建议。 更多信息请参阅“[编辑 {% data variables.product.prodname_advisory_database %} 中的安全通告](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”。

## 搜索 {% data variables.product.prodname_advisory_database %}

您可以搜索数据库，并使用限定符缩小搜索范围。 例如，您可以搜索在特定日期、特定生态系统或特定库中创建的通告。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符             | 示例                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `type:reviewed` | [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) 将显示 {% data variables.product.company_short %} 已审核的安全漏洞公告。 |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware) will show {% data variables.product.company_short %}-reviewed advisories for malware. |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) will show unreviewed advisories. |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) will show the advisory with this {% data variables.product.prodname_advisory_database %} ID. | | `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) will show the advisory with this CVE ID number. | | `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) will show only advisories affecting NPM packages. | | `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) will show only advisories with a high severity level. | | `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) will show only advisories affecting the lodash library. | | `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) will show only advisories with this CWE number. | | `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) will show only advisories credited to the "octocat" user account. | | `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) will sort by the oldest advisories first. | | `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) will sort by the newest advisories first. | | `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) will sort by the least recently updated first. | | `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) will sort by the most recently updated first. | | `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) will show only advisories that have been withdrawn. | | `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) will show only advisories created on this date. | | `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) will show only advisories updated on this date. |

## 查看有漏洞的仓库

For any {% data variables.product.company_short %}-reviewed advisory in the {% data variables.product.prodname_advisory_database %}, you can see which of your repositories are affected by that security vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}. 要查看有漏洞的仓库，您必须有权访问该仓库的 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %} 警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)”。

1. 导航到 https://github.com/advisories。
2. 单击通告。
3. 在通告页面的顶部，单击 **Dependabot alerts（Dependabot 警报）**。 ![Dependabot 警报](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. （可选）要过滤列表，请使用搜索栏或下拉菜单。 “Organization（组织）”下拉菜单用于按所有者（组织或用户）过滤 {% data variables.product.prodname_dependabot_alerts %}。 ![用于过滤警报的搜索栏和下拉菜单](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. 有关公告的更多详细信息，以及有关如何修复有漏洞的仓库的建议，请单击仓库名称。

{% ifversion security-advisories-ghes-ghae %}
## Accessing the local advisory database on {% data variables.product.product_location %}

If your site administrator has enabled {% data variables.product.prodname_github_connect %} for {% data variables.product.product_location %}, you can also browse reviewed advisories locally. For more information, see "[About {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

You can use your local advisory database to check whether a specific security vulnerability is included, and therefore whether you'd get alerts for vulnerable dependencies. You can also view any vulnerable repositories.

1. Navigate to `https://HOSTNAME/advisories`.
2. （可选）要过滤列表，请使用任意下拉菜单。 ![下拉过滤器](/assets/images/help/security/advisory-database-dropdown-filters.png)
   {% note %}

   **Note:** Only reviewed advisories will be listed. Unreviewed advisories can be viewed in the {% data variables.product.prodname_advisory_database %} on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Accessing an advisory in the GitHub Advisory Database](#accessing-an-advisory-in-the-github-advisory-database)".

   {% endnote %}
3. Click an advisory to view details.{% ifversion GH-advisory-db-supports-malware %} By default, you will see {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities. To show malware advisories, use `type:malware` in the search bar.{% endif %}

You can also suggest improvements to any advisory directly from your local advisory database. For more information, see "[Editing advisories from {% data variables.product.product_location %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)".

### Viewing vulnerable repositories for {% data variables.product.product_location %}

{% data reusables.repositories.enable-security-alerts %}

In the local advisory database, you can see which repositories are affected by each security vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}. 要查看有漏洞的仓库，您必须有权访问该仓库的 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %} 警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)”。

1. Navigate to `https://HOSTNAME/advisories`.
2. 单击通告。
3. 在通告页面的顶部，单击 **Dependabot alerts（Dependabot 警报）**。 ![Dependabot 警报](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. （可选）要过滤列表，请使用搜索栏或下拉菜单。 “Organization（组织）”下拉菜单用于按所有者（组织或用户）过滤 {% data variables.product.prodname_dependabot_alerts %}。 ![用于过滤警报的搜索栏和下拉菜单](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. 有关公告的更多详细信息，以及有关如何修复有漏洞的仓库的建议，请单击仓库名称。

{% endif %}

## 延伸阅读

- MITRE 的[“漏洞”定义](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
