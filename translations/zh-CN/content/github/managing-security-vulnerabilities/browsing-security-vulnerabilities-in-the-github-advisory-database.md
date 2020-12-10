---
title: 浏览 GitHub Advisory Database 中的安全漏洞
intro: '{% data variables.product.prodname_advisory_database %} 允许您浏览或搜索影响 {% data variables.product.company_short %} 上开源项目的漏洞。'
shortTitle: Browsing the Advisory Database
versions:
  free-pro-team: '*'
---

### 关于安全漏洞

{% data reusables.repositories.a-vulnerability-is %}

如果我们检测到 {% data variables.product.prodname_advisory_database %} 中存在会影响您的仓库所依赖的软件包的任何漏洞，{% data variables.product.product_name %} 将会向您发送 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。

### 关于 {% data variables.product.prodname_advisory_database %}

{% data variables.product.prodname_advisory_database %} 包含已映射到 {% data variables.product.company_short %} 依赖关系图跟踪的软件包的安全漏洞列表。 {% data reusables.repositories.tracks-vulnerabilities %}

每个安全通告都包含有关漏洞的信息，包括说明、严重程度、受影响的包、包生态系统、受影响的版本和修补版本、影响以及可选信息（如引用、解决方法和积分）。 此外，国家漏洞数据库列表中的公告包含 CVE 记录链接，通过链接可以查看漏洞、其 CVSS 得分及其质化严重等级的更多详细信息。 更多信息请参阅国家标准和技术研究所 (National Institute of Standards and Technology) 的“[国家漏洞数据库](https://nvd.nist.gov/)”。

我们在[常见漏洞评分系统 (CVSS) 第 2.1.2 节](https://www.first.org/cvss/specification-document)中定义了以下四种可能的严重性等级：
- 低
- 中
- 高
- 关键

{% data variables.product.prodname_advisory_database %} 使用 CVSS 版本 3.0 标准和上述 CVSS 级别。 {% data variables.product.product_name %} 不发布 CVSS 分数。

{% data reusables.repositories.github-security-lab %}

### 访问 {% data variables.product.prodname_advisory_database %} 中的通告

1. 导航到 https://github.com/advisories。
2. （可选）要过滤列表，请使用任意下拉菜单。 ![下拉过滤器](/assets/images/help/security/advisory-database-dropdown-filters.png)
3. 单击任何通告以查看详情。

{% note %}

也可以使用 GraphQL API 访问数据库。 更多信息请参阅“[`security_advisory` web 挂钩事件](/webhooks/event-payloads/#security_advisory)”。

{% endnote %}

### 搜索 {% data variables.product.prodname_advisory_database %}
您可以搜索数据库，并使用限定符将搜索范围缩小到在特定日期、特定生态系统或特定库中创建的公告。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符                   | 示例                                                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `ecosystem:ECOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) 只显示影响 NPM 包的通告。                 |
| `severity:LEVEL`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) 只显示严重程度高的公告。                    |
| `affects:LIBRARY`     | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) 只显示影响 lodash 库的通告。            |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) 按照时间顺序对通告排序，最早的通告排在最前面。   |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) 按照时间顺序对通告排序，最新的通告排在最前面。 |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) 按照更新顺序排序，最早更新的排在最前面。      |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) 按照更新顺序排序，最近更新的排在最前面。    |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) 只显示已经撤销的通告。                       |
| `created:YYYY-MM-DD`  | [**created:2019-10-31**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2019-10-31) 只显示此日期创建的通告。          |
| `updated:YYYY-MM-DD`  | [**updated:2019-10-31**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2019-10-31) 只显示此日期更新的通告。          |

### 延伸阅读

- MITRE 的[“漏洞”定义](https://cve.mitre.org/about/terminology.html#vulnerability)
