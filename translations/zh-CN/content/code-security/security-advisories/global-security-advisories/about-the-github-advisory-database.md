---
title: 关于 GitHub 公告数据库
intro: '{% data variables.product.prodname_advisory_database %} 包含已知安全漏洞{% ifversion GH-advisory-db-supports-malware %}和恶意软件{% endif %}的列表，分为两类：经 {% data variables.product.company_short %} 审核的公告和未经审核的公告。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 601fdd42050f112162898a255811c76aa23c6970
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159075'
---
## 关于 {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

安全公告以开放源代码漏洞 (OSV) 格式的 JSON 文件形式发布。 有关 OSV 格式的详细信息，请参阅“[开放源代码漏洞格式](https://ossf.github.io/osv-schema/)”。

## 关于安全公告的类型

{% data reusables.advisory-database.beta-malware-advisories %}

{% data variables.product.prodname_advisory_database %} 中的每个公告都涉及开放源代码项目中的漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意开放源代码软件{% endif %}。 

{% data reusables.repositories.a-vulnerability-is %} 代码中的漏洞通常是偶然引入的，并在被发现后很快会得到修复。 应更新代码，以便在依赖项可用时立即使用它的修复后的版本。

{% ifversion GH-advisory-db-supports-malware %}

相比之下，恶意软件是有意设计为执行不需要或有害功能的代码。 恶意软件可能针对硬件、软件、机密数据或使用该恶意软件的任何应用程序的用户。 需要从项目中删除恶意软件，并为依赖项找到可供选择的、更安全的替代项。

{% endif %}

### 经 {% data variables.product.company_short %} 审核的公告

经 {% data variables.product.company_short %} 审核的公告是已映射到支持的生态系统中的包的安全漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}。 仔细查看每个公告的有效性，并确保它们具有完整的说明，以及包含生态系统和包信息。

通常，我们以软件编程语言的相关包注册表命名支持的生态系统。 我们会审查与受支持注册表中的包中的漏洞相关的公告。

- Composer（注册表： https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang（注册表： https://hex.pm/){% endif %}
- Go（注册表： https://pkg.go.dev/) {%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven（注册表： https://repo.maven.apache.org/maven2)
- npm（注册表： https://www.npmjs.com/)
- NuGet（注册表： https://www.nuget.org/)
- pip（注册表： https://pypi.org/){% ifversion dependency-graph-dart-support %}
- pub（注册表： https://pub.dev/packages/registry){% endif %}
- RubyGems（注册表： https://rubygems.org/)
- Rust（注册表： https://crates.io/)

如果对我们应该支持的新生态系统有任何建议，请提出[问题](https://github.com/github/advisory-database/issues)以供讨论。

如果为存储库启用 {% data variables.product.prodname_dependabot_alerts %}，则当经 {% data variables.product.company_short %} 审核的新公告报告所依赖的包存在漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}时，系统会自动通知你。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。

### 未审核的公告

未审核的公告是我们直接从国家漏洞数据库源自动发布到 {% data variables.product.prodname_advisory_database %} 的安全漏洞。 

{% data variables.product.prodname_dependabot %} 不会为未审核的公告创建 {% data variables.product.prodname_dependabot_alerts %}，因为不会检查此类公告的有效性或完成情况。

## 关于安全公告中的信息

每个安全公告都包含有关漏洞{% ifversion GH-advisory-db-supports-malware %}和恶意软件{% endif %}的信息，可能包括说明、严重程度、受影响的包、包生态系统、受影响的版本和修补版本、影响以及可选信息（如引用、解决方法和积分）。 此外，国家漏洞数据库列表中的公告包含 CVE 记录链接，通过链接可以查看漏洞、其 CVSS 得分及其质化严重等级的更多详细信息。 有关详细信息，请参阅美国国家标准和技术研究院的“[国家漏洞数据库](https://nvd.nist.gov/)”。

严重级别是“[常见漏洞评分系统 (CVSS) 第 5 节](https://www.first.org/cvss/specification-document)”中定义的四个可能级别之一。
- 低
- 中
- 高
- 严重

{% data variables.product.prodname_advisory_database %} 使用上述 CVSS 级别。 如果 {% data variables.product.company_short %} 获取 CVE，{% data variables.product.prodname_advisory_database %} 将使用 CVSS 版本 3.1。 如果 CVE 是导入的，则 {% data variables.product.prodname_advisory_database %} 支持 CVSS 版本 3.0 和 3.1。

{% data reusables.repositories.github-security-lab %}

## 延伸阅读

- [关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)
- MITRE 的[“漏洞”定义](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
