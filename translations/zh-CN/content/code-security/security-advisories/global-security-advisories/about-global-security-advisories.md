---
title: 关于全局安全公告
intro: '全局安全数据库位于 {% data variables.product.prodname_advisory_database %}，其中包含影响开放源代码环境的 CVE 和 {% data variables.product.company_short %} 发起的安全公告。 你可以为改进全局公告做出贡献。'
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
ms.openlocfilehash: d28de180b9fee592dcba89d03ca537d4ffd2d9eb
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113982'
---
## 关于全局安全公告

{% ifversion fpt or ghec %}有两种类型的公告：全局安全公告和存储库安全公告。 有关存储库安全公告的详细信息，请参阅“[关于存储库安全公告](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)”。{% endif %}

全局安全公告分为两类：{% data variables.product.company_short %} 已审核和未审核的公告。
- 经 {% data variables.product.company_short %} 审核的公告是已映射到支持的生态系统中的包的安全漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}。
- 未审核的公告是我们直接从国家漏洞数据库源自动发布到 {% data variables.product.prodname_advisory_database %} 的安全漏洞。 

有关 {% data variables.product.prodname_advisory_database %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_advisory_database %}](/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database)”。

{% data reusables.security-advisory.global-advisories %}

每个存储库公告都由 {% data variables.product.prodname_security %} 策展团队负责审核，作为全局公告纳入考虑范围。 我们在 [github.com/advantores](https://github.com/advisories) 上的 {% data variables.product.prodname_advisory_database %} 发布任何由依赖关系图支持的生态系统的安全公告。

可以访问 {% data variables.product.prodname_advisory_database %} 中的任何公告。 有关详细信息，请参阅“[在 GitHub 公告数据库中浏览安全公告](/code-security/security-advisories/global-security-advisories/browsing-security-advisories-in-the-github-advisory-database)”。

您可以对 {% data variables.product.prodname_advisory_database %} 中的任何公告提出改进建议。 有关详细信息，请参阅“[在 {% data variables.product.prodname_advisory_database %} 中编辑安全公告](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”。
