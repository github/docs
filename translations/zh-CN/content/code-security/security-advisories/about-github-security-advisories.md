---
title: 关于 GitHub Security Advisories
intro: '您可以使用 {% data variables.product.prodname_security_advisories %} 来私下讨论、修复和发布有关仓库中安全漏洞的信息。'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-github-security-advisories
versions:
  free-pro-team: '*'
topics:
  - 安全
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### 关于 {% data variables.product.prodname_security_advisories %}

{% data reusables.security-advisory.disclosing-vulnerabilities %} 更多信息请参阅“[关于协调披露安全漏洞](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities)”。

{% data reusables.security-advisory.security-advisory-overview %}

通过 {% data variables.product.prodname_security_advisories %}，您可以：

1. 创建安全通告草稿，并使用草稿私下讨论漏洞对项目的影响。 更多信息请参阅“[创建安全通告](/github/managing-security-vulnerabilities/creating-a-security-advisory)”。
2. 在临时私有复刻中私下协作以修复漏洞。
3. 在补丁发布后发布通告向社区提醒漏洞。 更多信息请参阅“[发布安全通告](/github/managing-security-vulnerabilities/publishing-a-security-advisory)”。

{% data reusables.repositories.security-advisories-republishing %}

您可以向为安全通告做出贡献的个人提供积分。 更多信息请参阅“[编辑安全通告](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)”。

{% data reusables.repositories.security-guidelines %}

如果您在仓库中创建了安全通告，安全通告将保留在您的仓库中。 我们在 [github.com/advantores](https://github.com/advisories) 上的 {% data variables.product.prodname_advisory_database %} 发布任何由依赖关系图支持的生态系统的安全通告。 如果安全通告是专门针对 npm 的，我们也会向 npm 安全通告发布该通告。 更多信息请参阅 [npmjs.com/advisories](https://www.npmjs.com/advisories)。

{% data reusables.repositories.github-security-lab %}

### CVE 识别号

{% data variables.product.prodname_security_advisories %} 基于通用漏洞披露 (CVE) 列表而构建。 在 {% data variables.product.prodname_dotcom %} 上的安全通告表是符合 CVE 描述格式的标准化表格。

{% data variables.product.prodname_dotcom %} 是 CVE 编号颁发机构 (CNA)，被授权分配 CVE 标识号。 更多信息请参阅 CVE 网站上的“[关于 CVE](https://cve.mitre.org/about/index.html)”和“[CVE 编号颁发机构](https://cve.mitre.org/cve/cna.html)”。

在 {% data variables.product.prodname_dotcom %} 上为公共仓库创建安全通告时，您可以选择为安全漏洞提供现有的 CVE 标识号。 {% data reusables.repositories.request-security-advisory-cve-id %}

在您发布了安全通告并且 {% data variables.product.prodname_dotcom %} 为漏洞分配 CVE 标识号后，{% data variables.product.prodname_dotcom %} 会将 CVE 发布到 MITRE 数据库。 更多信息请参阅“[发布安全通告](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)”。

### 对于发布的安全通告的 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}