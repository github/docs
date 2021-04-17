---
title: 关于 GitHub Security Advisories
intro: '您可以使用 {% data variables.product.prodname_security_advisories %} 来私下讨论、修复和发布有关仓库中安全漏洞的信息。'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
versions:
  free-pro-team: '*'
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### 关于 {% data variables.product.prodname_security_advisories %}

{% data variables.product.prodname_security_advisories %} 允许仓库维护员私下讨论并修复项目中的安全漏洞。 协作修复后，仓库维护员可以发布安全通告，公开向项目社区披露安全漏洞。 通过发布安全通告，仓库维护员可让其社区更轻松地更新包依赖项和研究安全漏洞的影响。

通过 {% data variables.product.prodname_security_advisories %}，您可以：

1. 创建安全通告草稿，并使用草稿私下讨论漏洞对项目的影响。
2. 在临时私有复刻中私下协作以修复漏洞。
3. 发布通告向社区提醒漏洞。

{% data reusables.repositories.security-advisories-republishing %}

要开始，请参阅“[创建安全通告](/github/managing-security-vulnerabilities/creating-a-security-advisory)”。

您可以向为安全通告做出贡献的个人提供积分。 更多信息请参阅“[编辑安全通告](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)”。

{% data reusables.repositories.security-guidelines %}

{% data reusables.repositories.github-security-lab %}

### CVE 识别号

{% data variables.product.prodname_security_advisories %} 基于通用漏洞披露 (CVE) 列表而构建。 {% data variables.product.prodname_dotcom %} 是 CVE 编号颁发机构 (CNA)，被授权分配 CVE 标识号。 更多信息请参阅 CVE 网站上的“[关于 CVE](https://cve.mitre.org/about/index.html)”和“[CVE 编号颁发机构](https://cve.mitre.org/cve/cna.html)”。

在 {% data variables.product.prodname_dotcom %} 上为公共仓库创建安全通告时，您可以选择为安全漏洞提供现有的 CVE 标识号。 {% data reusables.repositories.request-security-advisory-cve-id %}

在您发布了安全通告并且 {% data variables.product.prodname_dotcom %} 为漏洞分配 CVE 标识号后，{% data variables.product.prodname_dotcom %} 会将 CVE 发布到 MITRE 数据库。 更多信息请参阅“[发布安全通告](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)”。

### 对于发布的安全通告的 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}
