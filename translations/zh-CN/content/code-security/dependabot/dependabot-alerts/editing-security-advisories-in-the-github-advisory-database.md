---
title: 在 GitHub Advisory 数据库中编辑安全通告
intro: '您可以对 {% data variables.product.prodname_advisory_database %} 中发布的任何公告提出改进建议。'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
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
shortTitle: 编辑公告数据库
---

## 关于在 {% data variables.product.prodname_advisory_database %} 中编辑公告
[github.com/advisories](https://github.com/advisories) {% data variables.product.prodname_advisory_database %} 中的安全公告被视为全局公告。 任何人都可以在 {% data variables.product.prodname_advisory_database %} 中对任何全局安全公告提出改进建议。 您可以编辑或添加任何详细信息，包括其他受影响的生态系统、严重性级别或受影响者的描述。 {% data variables.product.prodname_security %} 管理团队将审查提交的改进，并在接受时将其发布到 {% data variables.product.prodname_advisory_database %} 上。

只有存储库所有者和管理员才能编辑存储库级别的安全公告。 更多信息请参阅“[编辑存储库安全通告](/code-security/security-advisories/editing-a-security-advisory)”。
## 在 GitHub Advisory 数据库中编辑通告

1. 导航到 https://github.com/advisories。
2. Select the security advisory you would like to contribute to.
3. On the right-hand side of the page, click the **Suggest improvements for this vulnerability** link. ![Suggest improvements link](/assets/images/help/security/suggest-improvements-to-advisory.png)
4. In the contribution form, make the desired improvements. You can edit or add any detail.
5. When you finish editing the advisory, click **Submit improvements**.
6. Once you submit your improvements, a pull request containing your changes will be created for review in [github/advisory-database](https://github.com/github/advisory-database) by the {% data variables.product.prodname_security %} curation team. If the advisory originated from a {% data variables.product.prodname_dotcom %} repository, we will also tag the original publisher for optional commentary. You can view the pull request and get notifications when it is updated or closed.

You can also open a pull request directly on an advisory file in the [github/advisory-database](https://github.com/github/advisory-database) repository. For more information, see the [contribution guidelines](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md). 
