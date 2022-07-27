---
title: 在 GitHub Advisory 数据库中编辑安全通告
intro: '您可以对 {% data variables.product.prodname_advisory_database %} 中发布的任何公告提出改进建议。'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
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
shortTitle: 编辑公告数据库
---

## 关于在 {% data variables.product.prodname_advisory_database %} 中编辑公告
[github.com/advisories](https://github.com/advisories) {% data variables.product.prodname_advisory_database %} 中的安全公告被视为全局公告。 任何人都可以在 {% data variables.product.prodname_advisory_database %} 中对任何全局安全公告提出改进建议。 您可以编辑或添加任何详细信息，包括其他受影响的生态系统、严重性级别或受影响者的描述。 {% data variables.product.prodname_security %} 管理团队将审查提交的改进，并在接受时将其发布到 {% data variables.product.prodname_advisory_database %} 上。
{% ifversion fpt or ghec %}
只有存储库所有者和管理员才能编辑存储库级别的安全公告。 For more information, see "[Editing a repository security advisory](/code-security/security-advisories/editing-a-security-advisory)."{% endif %}

## 在 GitHub Advisory 数据库中编辑通告

1. 导航到 https://github.com/advisories。
2. 选择您要参与的安全公告。
3. 在页面右侧，单击 **Suggest improvements for this vulnerability（建议对此漏洞的改进）**链接。 ![建议改进链接](/assets/images/help/security/suggest-improvements-to-advisory.png)
4. 在贡献表单中，进行所需的改进。 您可以编辑或添加任何详细信息。
5. 完成对公告的编辑后，单击 **Submit improvements（提交改进）**。
6. 提交改进后，将创建一个包含您的更改的拉取请求，以供 {% data variables.product.prodname_security %} 策展团队在 [github/advisory-database](https://github.com/github/advisory-database) 中进行审核。 如果公告源自 {% data variables.product.prodname_dotcom %} 存储库，我们还将标记原始发布者以提供可选评论。 您可以查看拉取请求，并在其更新或关闭时收到通知。

您还可以直接在 [github/advisory-database](https://github.com/github/advisory-database) 存储库中的公告文件上打开拉取请求。 更多信息请参阅[参与指南](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md)。

{% ifversion security-advisories-ghes-ghae %}
## Editing advisories from {% data variables.product.product_location %}

If you have {% data variables.product.prodname_github_connect %} enabled for {% data variables.product.product_location %}, you will be able to see advisories by adding `/advisories` to the instance url.

1. Navigate to `https://HOSTNAME/advisories`.
2. 选择您要参与的安全公告。
3. On the right-hand side of the page, click the **Suggest improvements for this vulnerability on Github.com.** link. A new tab opens with the same security advisory on {% data variables.product.prodname_dotcom_the_website %}. ![建议改进链接](/assets/images/help/security/suggest-improvements-to-advisory-on-github-com.png)
4. Edit the advisory, following steps four through six in "[Editing advisories in the GitHub Advisory Database](#editing-advisories-in-the-github-advisory-database)" above.
{% endif %}
