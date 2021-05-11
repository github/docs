---
title: 设置 GitHub Enterprise Cloud 试用版
intro: '您可以免费试用 {% data variables.product.prodname_ghe_cloud %}。'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---

### 关于 {% data variables.product.prodname_ghe_cloud %} 试用版

您可以设置 14 天的试用版来评估新组织帐户上的 {% data variables.product.prodname_ghe_cloud %}。 在试用期间无需提供付款方式，除非您将 {% data variables.product.prodname_marketplace %} 应用程序添加到需要付款方式的组织。 更多信息请参阅“<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">关于 {% data variables.product.prodname_marketplace %} 的计费</a>”。

试用版包括 50 个席位。 如果需要更多席位来评估 {% data variables.product.prodname_ghe_cloud %}，请联系 {% data variables.contact.contact_enterprise_sales %}。 在试用结束时，您可以选择不同数量的席位。

试用版也可用于 {% data variables.product.prodname_ghe_server %}。 更多信息请参阅“[设置 {% data variables.product.prodname_ghe_server %} 的试用](/articles/setting-up-a-trial-of-github-enterprise-server)”。

{% data reusables.products.which-product-to-use %}

### 设置 {% data variables.product.prodname_ghe_cloud %} 的试用版

在开始试用 {% data variables.product.prodname_ghe_cloud %} 之前，您必须已经有用户帐户或创建新用户帐户。 更多信息请参阅“<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">注册新 {% data variables.product.prodname_dotcom %} 帐户</a>”。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
4. 在“Enterprise（企业）”下，单击 **Start your 14-day free trial（开始 14 天免费试用）**。 ![开始试用的按钮](/assets/images/help/organizations/start-trial-button.png)
5. 键入公司名称。 ![公司名称字段](/assets/images/help/organizations/company-name-field.png)
{% data reusables.organizations.organization-name %}
7. 在“Full name（全名）”下，键入您的全名。 ![全名字段](/assets/images/help/organizations/full-name-field.png)
8. 在“Work email（工作电子邮件）”下，键入您的工作用电子邮件地址。 ![工作电子邮件字段](/assets/images/help/organizations/work-email-field.png)
8. 使用 **Industry（行业）**下拉菜单，选择您的公司所在行业。 ![行业下拉菜单](/assets/images/help/organizations/industry-drop-down.png)
9. 使用 **Number of employees（员工人数）**下拉菜单，选择您公司的员工人数。 ![员工人数下拉菜单](/assets/images/help/organizations/employees-drop-down.png)
10. 查看<a href="/articles/github-enterprise-cloud-evaluation-agreement" class="dotcom-only">评估许可协议</a>，然后单击 **Next（下一步）**。

### 探索 {% data variables.product.prodname_ghe_cloud %}

设置试用版后，您可以按照 [Enterprise 入门指南](https://resources.github.com/enterprise-onboarding/)来探索 {% data variables.product.prodname_ghe_cloud %}。

{% data reusables.products.product-roadmap %}

### 结束试用

在试用期间，您可以随时购买 {% data variables.product.prodname_enterprise %} 或降级到 {% data variables.product.prodname_team %}。

如果在试用期结束前没有购买 {% data variables.product.prodname_enterprise %} 或 {% data variables.product.prodname_team %} ， 您的组织将会降级到 {% data variables.product.prodname_free_team %}，不能使用只包含在付费产品中的任何高级工具和功能，包括从那些私有仓库发布的 {% data variables.product.prodname_pages %} 站点。 如果您不打算升级，为避免失去高级功能的使用权限，请在试用结束前将仓库设为公共。 更多信息请参阅“[设置仓库可见性](/articles/setting-repository-visibility)”。

对于组织来说，降级到 {% data variables.product.prodname_free_team %} 还会禁用试用期间配置的任何 SAML 设置。 购买 {% data variables.product.prodname_enterprise %} 或 {% data variables.product.prodname_team %} 后，您的 SAML 设置将再次启用，以便您组织中的用户进行身份验证。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
5. 在“{% data variables.product.prodname_ghe_cloud %} Free Trial（GitHub Enterprise Cloud 免费试用）”下，单击 **Buy Enterprise（购买 Enterprise 版）**或 **Downgrade to Team（降级到 Team 版）**。 ![购买 Enterprise 版和降级到 Team 版按钮](/assets/images/help/organizations/finish-trial-buttons.png)
6. 按照提示输入付款方式，然后单击 **Submit（提交）**。

### 延伸阅读

- “[设置 {% data variables.product.prodname_ghe_server %} 的试用版](/articles/setting-up-a-trial-of-github-enterprise-server)”
