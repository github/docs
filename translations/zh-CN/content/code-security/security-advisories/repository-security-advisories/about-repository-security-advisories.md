---
title: 关于存储库安全公告
intro: 可以使用存储库安全公告来私下讨论、修复和发布有关存储库中安全漏洞的信息。
shortTitle: About repository security advisories
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-github-security-advisories
  - /code-security/security-advisories/about-github-security-advisories
  - /code-security/repository-security-advisories/about-github-security-advisories-for-repositories
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: a9f411a28812edadb810861a6b4d5239db1722a5
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114000'
---
{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## 关于存储库安全公告

{% data reusables.security-advisory.disclosing-vulnerabilities %} 更多信息请参阅“[关于协调披露安全漏洞](/code-security/repository-security-advisories/about-coordinated-disclosure-of-security-vulnerabilities)”。

{% data reusables.security-advisory.security-advisory-overview %}

使用存储库安全公告，可以执行以下操作：

1. 创建安全通告草稿，并使用草稿私下讨论漏洞对项目的影响。 有关详细信息，请参阅“[创建存储库安全公告](/code-security/repository-security-advisories/creating-a-repository-security-advisory)”。
2. 在临时私有复刻中私下协作以修复漏洞。
3. 在补丁发布后发布通告向社区提醒漏洞。 有关详细信息，请参阅“[发布存储库安全性公告](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)”。

{% data reusables.repositories.security-advisories-republishing %}

您可以向为安全通告做出贡献的个人提供积分。 有关详细信息，请参阅“[编辑存储库安全性公告](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)”。

{% data reusables.repositories.security-guidelines %}

如果您在仓库中创建了安全通告，安全通告将保留在您的仓库中。 我们在 [github.com/advantores](https://github.com/advisories) 上的 {% data variables.product.prodname_advisory_database %} 发布任何由依赖关系图支持的生态系统的安全公告。 任何人都可以提交对 {% data variables.product.prodname_advisory_database %} 中发布的公告的更改。 有关详细信息，请参阅“[在 {% data variables.product.prodname_advisory_database %} 中编辑安全公告](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)”。

如果安全通告是专门针对 npm 的，我们也会向 npm 安全通告发布该通告。 有关详细信息，请参阅 [npmjs.com/advisories](https://www.npmjs.com/advisories)。

{% data reusables.repositories.github-security-lab %}

## CVE 识别号

{% data variables.product.prodname_security_advisories %} 基于通用漏洞披露 (CVE) 列表而构建。 在 {% data variables.product.prodname_dotcom %} 上的安全通告表是符合 CVE 描述格式的标准化表格。 

{% data variables.product.prodname_dotcom %} 是 CVE 编号颁发机构 (CNA)，被授权分配 CVE 标识号。 有关详细信息，请参阅 CVE 网站上的[关于 CVE](https://www.cve.org/About/Overview) 和 [CVE 编号机构](https://www.cve.org/ProgramOrganization/CNAs)。

在 {% data variables.product.prodname_dotcom %} 上为公共仓库创建安全通告时，您可以选择为安全漏洞提供现有的 CVE 标识号。 {% data reusables.repositories.request-security-advisory-cve-id %}

在您发布了安全通告并且 {% data variables.product.prodname_dotcom %} 为漏洞分配 CVE 标识号后，{% data variables.product.prodname_dotcom %} 会将 CVE 发布到 MITRE 数据库。
有关详细信息，请参阅“[发布存储库安全性公告](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)”。

## 对于发布的安全通告的 {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}
