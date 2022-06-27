---
title: Browsing security advisories in the GitHub Advisory Database
intro: 'You can browse the {% data variables.product.prodname_advisory_database %} to find advisories for security risks in open source projects that are hosted on {% data variables.product.company_short %}.'
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

The {% data variables.product.prodname_advisory_database %} contains a list of known security vulnerabilities and malware, grouped in two categories: {% data variables.product.company_short %}-reviewed advisories and unreviewed advisories.

{% data reusables.repositories.tracks-vulnerabilities %}

## About types of security advisories

{% data reusables.advisory-database.beta-malware-advisories %}

Each advisory in the {% data variables.product.prodname_advisory_database %} is for a vulnerability in open source projects or for malicious open source software.

{% data reusables.repositories.a-vulnerability-is %} Vulnerabilities in code are usually introduced by accident and fixed soon after they are discovered. You should update your code to use the fixed version of the dependency as soon as it is available.

In contrast, malicious software, or malware, is code that is intentionally designed to perform unwanted or harmful functions. The malware may target hardware, software, confidential data, or users of any application that uses the malware. You need to remove the malware from your project and find an alternative, more secure replacement for the dependency.

### {% data variables.product.company_short %}-reviewed advisories

{% data variables.product.company_short %}-reviewed advisories are security vulnerabilities or malware that have been mapped to packages in ecosystems we support. We carefully review each advisory for validity and ensure that they have a full description, and contain both ecosystem and package information.

Generally, we name our supported ecosystems after the software programming language's associated package registry. We review advisories if they are for a vulnerability in a package that comes from a supported registry.

- Composer (registry: https://packagist.org/)
- Go (registry: https://pkg.go.dev/)
- Maven (registry: https://repo1.maven.org/maven2/org/)
- npm (registry: https://www.npmjs.com/)
- NuGet (registry: https://www.nuget.org/)
- pip (registry: https://pypi.org/)
- RubyGems (registry: https://rubygems.org/)
- Rust (registry: https://crates.io/)

If you have a suggestion for a new ecosystem we should support, please open an [issue](https://github.com/github/advisory-database/issues) for discussion.

If you enable {% data variables.product.prodname_dependabot_alerts %} for your repositories, you are automatically notified when a new {% data variables.product.company_short %}-reviewed advisory reports a vulnerability or malware for a package you depend on. 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %} 警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。

### Unreviewed advisories

未审核的公告是我们直接从国家漏洞数据库源自动发布到 {% data variables.product.prodname_advisory_database %} 的安全漏洞。

{% data variables.product.prodname_dependabot %} 不会为未审核的公告创建 {% data variables.product.prodname_dependabot_alerts %}，因为不会检查此类公告的有效性或完成情况。

## About information in security advisories

Each security advisory contains information about the vulnerability or malware, which may include the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. 此外，国家漏洞数据库列表中的公告包含 CVE 记录链接，通过链接可以查看漏洞、其 CVSS 得分及其质化严重等级的更多详细信息。 更多信息请参阅国家标准和技术研究所 (National Institute of Standards and Technology) 的“[国家漏洞数据库](https://nvd.nist.gov/)”。

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
3. 单击任何通告以查看详情。 By default, you will see {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities. To show malware advisories, use `type:malware` in the search bar.


{% note %}

也可以使用 GraphQL API 访问数据库。 By default, queries will return {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities unless you specify `type:malware`. 更多信息请参阅“[`security_advisory` web 挂钩事件](/webhooks/event-payloads/#security_advisory)”。

{% endnote %}

## 在 {% data variables.product.prodname_advisory_database %} 中编辑公告
您可以对 {% data variables.product.prodname_advisory_database %} 中的任何公告提出改进建议。 更多信息请参阅“[编辑 {% data variables.product.prodname_advisory_database %} 中的安全通告](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”。

## 搜索 {% data variables.product.prodname_advisory_database %}

您可以搜索数据库，并使用限定符缩小搜索范围。 例如，您可以搜索在特定日期、特定生态系统或特定库中创建的通告。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符                   | 示例                                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:reviewed`       | [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) will show {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities. |
| `type:malware`        | [**type:malware**](https://github.com/advisories?query=type%3Amalware) will show {% data variables.product.company_short %}-reviewed advisories for malware.                    |
| `type:unreviewed`     | [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) 将显示未审核的公告。                                                                                         |
| `GHSA-ID`             | [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) 将显示使用此 {% data variables.product.prodname_advisory_database %} ID 的通告。                     |
| `CVE-ID`              | [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) 将显示使用此 CVE ID 号的通告。                                                                                    |
| `ecosystem:ECOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) 只显示影响 NPM 包的通告。                                                                         |
| `severity:LEVEL`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) 只显示严重程度高的公告。                                                                            |
| `affects:LIBRARY`     | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) 只显示影响 lodash 库的通告。                                                                    |
| `cwe:ID`              | [**cwe:352**](https://github.com/advisories?query=cwe%3A352) 将只显示使用此 CWE 编号的通告。                                                                                                 |
| `credit:USERNAME`     | [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) 将只显示计入“octocat”用户帐户的通告。                                                                              |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) 按照时间顺序对通告排序，最早的通告排在最前面。                                                           |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) 按照时间顺序对通告排序，最新的通告排在最前面。                                                         |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) 按照更新顺序排序，最早更新的排在最前面。                                                              |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) 按照更新顺序排序，最近更新的排在最前面。                                                            |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) 只显示已经撤销的通告。                                                                               |
| `created:YYYY-MM-DD`  | [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) 只显示此日期创建的通告。                                                                  |
| `updated:YYYY-MM-DD`  | [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) 只显示此日期更新的通告。                                                                  |

## 查看有漏洞的仓库

For any {% data variables.product.company_short %}-reviewed advisory in the {% data variables.product.prodname_advisory_database %}, you can see which of your repositories are affected by that security vulnerability or malware. 要查看有漏洞的仓库，您必须有权访问该仓库的 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %} 警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)”。

1. 导航到 https://github.com/advisories。
2. 单击通告。
3. 在通告页面的顶部，单击 **Dependabot alerts（Dependabot 警报）**。 ![Dependabot 警报](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. （可选）要过滤列表，请使用搜索栏或下拉菜单。 “Organization（组织）”下拉菜单用于按所有者（组织或用户）过滤 {% data variables.product.prodname_dependabot_alerts %}。 ![用于过滤警报的搜索栏和下拉菜单](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. For more details about the advisory, and for advice on how to fix the vulnerable repository, click the repository name.

## 延伸阅读

- MITRE 的[“漏洞”定义](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
