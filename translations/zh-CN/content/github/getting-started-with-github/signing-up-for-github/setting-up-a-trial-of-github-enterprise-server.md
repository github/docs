---
title: 设置 GitHub Enterprise Server 试用版
intro: '您可以免费试用 {% data variables.product.prodname_ghe_server %}。'
redirect_from:
  - /articles/requesting-a-trial-of-github-enterprise/
  - /articles/setting-up-a-trial-of-github-enterprise-server
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-server
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---

### 关于 {% data variables.product.prodname_ghe_server %} 试用版

您可以申请 45 天试用版来试用 {% data variables.product.prodname_ghe_server %}。 您的试用版将作为虚拟设备安装，带有内部或云部署选项。 有关支持的可视化平台列表，请参阅“[设置 GitHub Enterprise Server 实例](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)”。

{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}安全{% endif %}警报和 {% data variables.product.prodname_github_connect %} 目前在 {% data variables.product.prodname_ghe_server %} 试用版中不可用。 要获取这些功能的演示，请联系 {% data variables.contact.contact_enterprise_sales %}。 有关这些功能的更多信息，请参阅“[关于对有漏洞的依赖项发出警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”和“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)”。

试用版也可用于 {% data variables.product.prodname_ghe_cloud %}。 更多信息请参阅“[设置 {% data variables.product.prodname_ghe_cloud %} 的试用](/articles/setting-up-a-trial-of-github-enterprise-cloud)”。

{% data reusables.products.which-product-to-use %}

### 设置 {% data variables.product.prodname_ghe_server %} 的试用版

{% data variables.product.prodname_ghe_server %} 作为虚拟设备安装。 确定组织中设置虚拟机的最佳人选，并要求该人员提交[试用申请](https://enterprise.github.com/trial)。 您可以在提交申请后立即开始试用。

要为 {% data variables.product.prodname_enterprise %} Web 门户设置帐户，请单击提交试用申请后您收到的电子邮件中的链接，然后按照提示操作。 然后下载您的许可文件。 更多信息请参阅"[管理您的 {% data variables.product.prodname_enterprise %} 许可](/enterprise/admin/installation/managing-your-github-enterprise-license)"。

要安装 {% data variables.product.prodname_ghe_server %}，请下载必要的组件并上传您的许可证文件。 有关更多信息，请参阅“[设置 {% data variables.product.prodname_ghe_server %} 实例](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)”中所选可视化平台的说明。

### 后续步骤

要充分利用您的试用版，请按以下步骤操作：

1. [创建一个组织](/enterprise/admin/user-management/creating-organizations)。
2. 要了解使用 {% data variables.product.prodname_dotcom %} 的基础知识，请参阅：
   - [{% data variables.product.prodname_dotcom %} 快速入门指南](https://resources.github.com/webcasts/Quick-start-guide-to-GitHub/)网络直播
   - {% data variables.product.prodname_dotcom %} 指南中的[了解 {% data variables.product.prodname_dotcom %} 流程](https://guides.github.com/introduction/flow/)
   - {% data variables.product.prodname_dotcom %} 指南中的 [Hello World](https://guides.github.com/activities/hello-world/)
3. 要配置实例以满足组织的需求，请参阅“[配置企业](/enterprise/admin/configuration/configuring-your-enterprise)”。
4. 要将 {% data variables.product.prodname_ghe_server %} 与您的身份提供程序集成，请参阅“[使用 SAML](/enterprise/admin/user-management/using-saml)”和“[使用 LDAP](/enterprise/admin/authentication/using-ldap)”。
5. 邀请不限数量的人员加入您的试用版。
   - 使用内置身份验证或配置的身份提供程序将用户添加到 {% data variables.product.prodname_ghe_server %} 实例。 更多信息请参阅“[使用内置身份验证](/enterprise/admin/user-management/using-built-in-authentication)”。
   - 要邀请人员成为帐户管理员，请访问 [{% data variables.product.prodname_enterprise %} Web 门户](https://enterprise.github.com/login)。

    {% note %}

    **注：**您邀请成为帐户管理员的人员将收到一封电子邮件，其中包含接受邀请的链接。

    {% endnote %}

{% data reusables.products.product-roadmap %}

### 结束试用

您可以在试用期内随时在 [{% data variables.product.prodname_enterprise %} Web 门户](https://enterprise.github.com/login)中升级到完整许可证。

如果您在试用的最后一天仍未升级，将收到一封电子邮件，通知您试用已结束。 如果需要更多时间来评估 {% data variables.product.prodname_enterprise %}，请联系 {% data variables.contact.contact_enterprise_sales %} 申请延期。

### 延伸阅读

- “[设置 {% data variables.product.prodname_ghe_cloud %} 的试用版](/articles/setting-up-a-trial-of-github-enterprise-cloud)”
