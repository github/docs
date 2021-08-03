---
title: 漏洞依赖项检测疑难解答
intro: '如果 {% data variables.product.product_name %} 报告的依赖项信息不符合您的预期，则需要考虑许多因素，您可以检查各种问题。'
shortTitle: 检测故障排除
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/troubleshooting-the-detection-of-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - Security
---
{% data variables.product.product_name %} 报告的依赖项检测结果可能不同于其他工具返回的结果。 这是有原因的，它有助于了解 {% data variables.product.prodname_dotcom %} 如何确定项目的依赖项。

### 为什么似乎缺少某些依赖项？

{% data variables.product.prodname_dotcom %} 生成和显示依赖项数据不同于其他工具。 因此，如果您过去使用其他工具来识别依赖项，则几乎可以肯定您会看到不同的结果。 考虑以下事项：

*   {% data variables.product.prodname_advisory_database %} 是 {% data variables.product.prodname_dotcom %} 用来识别漏洞依赖项的数据源之一。 它是一款免费的、具有整理功能的数据库，用于检测 {% data variables.product.prodname_dotcom %} 上常见软件包生态系统的漏洞信息。 它包括从 {% data variables.product.prodname_security_advisories %} 直接报告给 {% data variables.product.prodname_dotcom %} 的数据，以及官方馈送和社区来源。 这些数据由 {% data variables.product.prodname_dotcom %} 审查和整理，以确保不会与开发社区分享虚假或不可行的信息。 {% data reusables.security-advisory.link-browsing-advisory-db %}
*   依赖项图解析用户仓库中所有已知的包清单文件。 例如，对于 npm，它将解析 _package-lock.json_ 文件。 它构造所有仓库依赖项和公共依赖项的图表。 当启用依赖关系图时，当任何人推送到默认分支时，都会发生这种情况，其中包括对支持的清单格式进行更改的提交。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。
*   {% data variables.product.prodname_dependabot %} 扫描对包含清单文件的默认分支的任何推送。 添加新的漏洞记录时，它会扫描所有现有仓库，并为每个存在漏洞的仓库生成警报。 {% data variables.product.prodname_dependabot_alerts %} 在仓库级别汇总，而不是针对每个漏洞创建一个警报。 更多信息请参阅“[关于易受攻击的依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。
*   {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dependabot_security_updates %} 在您收到关于仓库中漏洞依赖项的警报时触发。 在可能的情况下，{% data variables.product.prodname_dependabot %} 会在您的仓库中创建拉取请求，以将易受攻击的依赖项升级到避免漏洞所需的最低安全版本。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”和“[排除 {% data variables.product.prodname_dependabot %} 错误](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)”。

    {% endif %}{% data variables.product.prodname_dependabot %} 不会按计划扫描仓库中的漏洞依赖项，而是在发生某些变更时扫描。 例如，新增依赖项（{% data variables.product.prodname_dotcom %} 在每次推送时都会进行此项检查）时，或者当新的漏洞添加到通告数据库 {% if currentVersion ver_gt "enterprise-server@2.22" %} 以及同步到 {% data variables.product.prodname_ghe_server %}{% endif %}时，就会触发扫描。 更多信息请参阅“[关于易受攻击的依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-vulnerable-dependencies)”。

### 为什么我没有收到某些生态系统的漏洞警报？

{% data variables.product.prodname_dotcom %} 对漏洞警报的支持限于一组可提供高质量、可操作数据的生态系统。 {% data variables.product.prodname_advisory_database %} 中经整理的漏洞、依赖关系图、{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dependabot %}安全更新{% endif %} 和 {% data variables.product.prodname_dependabot %} 警报提供用于多个生态系统，包括 Java’s Maven、JavaScript’s npm 和 Yarn、.NET’s NuGet、Python’s pip、Ruby's RubyGems 以及 PHP’s Composer。 我们将在今后继续增加对更多生态系统的支持。 有关我们支持的包生态系统的概述，请参阅“[关于依赖项图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”。

值得注意的是，可能存在其他生态系统的 {% data variables.product.prodname_dotcom %} 安全通告。 安全通告中的信息由特定仓库的维护员提供。 此数据的整理方式与支持的生态系统整理信息的方式不同。 {% if currentVersion == "free-pro-team@latest" %} 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 安全通告](/github/managing-security-vulnerabilities/about-github-security-advisories)”。{% endif %}

**检查**：未捕获的漏洞是否适用于不受支持的生态系统？

### 依赖项图是否只查找清单和锁文件中的依赖项？

依赖项图包含在环境中明确声明的依赖项的信息。 也就是说，在清单或锁定文件中指定的依赖项。 依赖项图通常还包括过渡依赖项，即使它们没有在锁定文件中指定，也可以通过查看清单文件中的依赖项来实现。

{% data variables.product.prodname_dependabot_alerts %} 提醒您应更新的依赖项，包括可从清单或锁定文件确定版本的过渡依赖项。 {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dependabot_security_updates %} 仅在 {% data variables.product.prodname_dependabot %} 可直接“修复”依赖项时才建议更改，即以下情况：
* 在清单或锁定文件中明确声明的直接依赖项
* 在锁定文件中声明的过渡依赖项{% endif %}

依赖项图不包括“宽松”依赖项。 “宽松”依赖项是指从另一个来源复制并直接或在存档文件（例如 ZIP 或 JAR 文件）中检入仓库的单个文件，而不是在包管理器的清单或锁定文件中引用的文件。

**检查k**：是否存在仓库清单或锁定文件中未指定组件的未捕获漏洞？

### 依赖项图是否检测使用变量指定的依赖项？

依赖项图在清单被推送到 {% data variables.product.prodname_dotcom %} 时分析它们。 因此，依赖项图无法访问项目的构建环境，从而无法解析清单中使用的变量。 如果在清单中使用变量指定名称，或指定依赖项的版本（更常见），则该依赖项不会包括在依赖项图中。

**检查**: 在清单中缺少的依赖项是否使用变量声明其名称或版本？

### 是否存在影响依赖项图数据的限制？

是的，依赖项图有两个限制类别：

1. **处理限制**

    这会影响 {% data variables.product.prodname_dotcom %} 中显示的依赖项图，还会阻止 {% data variables.product.prodname_dependabot_alerts %} 的创建。

    仅为企业帐户处理大小超过 0.5 MB 的清单。 对于其他帐户，将忽略超过 0.5 MB 的清单，并且不会创建 {% data variables.product.prodname_dependabot_alerts %}。

    默认情况下， {% data variables.product.prodname_dotcom %} 对每个仓库处理的清单不会超过 20 个。 对于超出此限制的清单，不会创建 {% data variables.product.prodname_dependabot_alerts %}。 如果您需要提高限值，请联系 {% data variables.contact.contact_support %}。

2. **可视化限制**

    这会影响 {% data variables.product.prodname_dotcom %} 中依赖项图的显示内容。 但是，它们不会影响 {% data variables.product.prodname_dependabot_alerts %} 的创建。

    仓库依赖项图的依赖项视图只显示 100 个清单。 通常这就足够了，因为它明显高于上述处理限制。 处理限制超过 100 的情况下，对于任何未在 {% data variables.product.prodname_dotcom %} 中显示的任何清单，仍会创建 {% data variables.product.prodname_dependabot_alerts %}。

**检查**：在超过 0.5 MB 的清单文件或包含大量清单的仓库中是否存在缺少的依赖项？

### {% data variables.product.prodname_dependabot %} 是否会针对已知多年的漏洞生成警报？

{% data variables.product.prodname_advisory_database %} 于 2019 年 11 月推出，并在最初回顾性包含了受支持生态系统的漏洞信息（从 2017 年开始）。 将 CVE 添加到数据库时，我们会优先处理较新的 CVE，以及影响较新版本软件的 CVE。

提供了一些有关较旧漏洞的信息，尤其是在这些 CVE 特别普遍的地方，但一些较旧的漏洞未包含在 {% data variables.product.prodname_advisory_database %} 中。 如果您需要将一些特定的旧漏洞包含在数据库中，请联系 {% data variables.contact.contact_support %}。

**检查**：未捕获的漏洞在国家漏洞数据库中的发布日期是否早于 2017 年？

### 为什么 {% data variables.product.prodname_advisory_database %} 使用已发布漏洞数据的子集？

有些第三方工具使用未经人为检查或过滤的未整理 CVE 数据。 这意味着 CVE 带有标签或严重错误或其他质量问题，将导致更频繁，更嘈杂且更无用的警报。

由于 {% data variables.product.prodname_dependabot %} 使用 {% data variables.product.prodname_advisory_database %} 中的精选数据，因此警报量可能较少，但是您收到的警报将是准确和相关的。

{% if currentVersion == "free-pro-team@latest" %}
### 是否每个依赖项漏洞都会生成单独的警报？

当一个依赖项有多个漏洞时，只会为该依赖项生成一个汇总警报，而不是针对每个漏洞生成一个警报。

{% data variables.product.prodname_dotcom %} 中的 {% data variables.product.prodname_dependabot_alerts %} 计数显示警报总数，即有漏洞的依赖项数量，而不是漏洞的数量。

![{% data variables.product.prodname_dependabot_alerts %} 视图](/assets/images/help/repository/dependabot-alerts-view.png)

单击以显示警报详细信息时，您可以查看警报中包含多少个漏洞。

![{% data variables.product.prodname_dependabot %} 警报的多个漏洞](/assets/images/help/repository/dependabot-vulnerabilities-number.png)

**检查**: 如果您所看到的总数有出入，请检查您是否没有将警报数量与漏洞数量进行比较。
{% endif %}

### 延伸阅读

- “[关于有易受攻击依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”
- "[查看和更新仓库中的漏洞依赖项](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"|{% if currentVersion == "free-pro-team@latest" %}
- [排除 {% data variables.product.prodname_dependabot %} 错误](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
